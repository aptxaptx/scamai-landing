import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

// ---------------------------------------------------------------------------
// Database-backed rate limiting (persists across deploys & serverless instances)
// ---------------------------------------------------------------------------
function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  return neon(url);
}

// Ensure table exists (runs once per cold start)
let tableEnsured = false;
async function ensureTable() {
  if (tableEnsured) return;
  const sql = getDb();
  if (!sql) return;
  await sql`
    CREATE TABLE IF NOT EXISTS check_rate_limits (
      ip TEXT PRIMARY KEY,
      count INTEGER NOT NULL DEFAULT 0,
      reset_time BIGINT NOT NULL,
      fingerprint TEXT,
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;
  tableEnsured = true;
}

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

// In-memory fallback if DB is unavailable
const memoryMap = new Map<string, { count: number; resetTime: number }>();

async function getRateLimit(
  ip: string,
  fingerprint?: string
): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
  const now = Date.now();
  const sql = getDb();

  if (sql) {
    try {
      await ensureTable();

      // Atomic increment with expiry check — prevents race conditions
      const rows = await sql`
        INSERT INTO check_rate_limits (ip, count, reset_time, fingerprint, updated_at)
        VALUES (${ip}, 1, ${now + RATE_LIMIT_WINDOW_MS}, ${fingerprint || null}, NOW())
        ON CONFLICT (ip) DO UPDATE SET
          count = CASE
            WHEN check_rate_limits.reset_time < ${now} THEN 1
            ELSE check_rate_limits.count + 1
          END,
          reset_time = CASE
            WHEN check_rate_limits.reset_time < ${now} THEN ${now + RATE_LIMIT_WINDOW_MS}
            ELSE check_rate_limits.reset_time
          END,
          fingerprint = COALESCE(${fingerprint || null}, check_rate_limits.fingerprint),
          updated_at = NOW()
        RETURNING count, reset_time
      `;

      const record = rows[0];
      const count = record.count as number;
      const resetTime = Number(record.reset_time);

      return {
        allowed: count <= RATE_LIMIT_MAX,
        remaining: Math.max(0, RATE_LIMIT_MAX - count),
        resetTime,
      };
    } catch (e) {
      console.error("[RateLimit] DB error, falling back to memory:", e);
    }
  }

  // Fallback: in-memory (less reliable but still functional)
  const record = memoryMap.get(ip);
  if (!record || record.resetTime < now) {
    memoryMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1, resetTime: now + RATE_LIMIT_WINDOW_MS };
  }
  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }
  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count, resetTime: record.resetTime };
}

async function getQuota(ip: string): Promise<{ remaining: number; limit: number; resetsAt?: string }> {
  const now = Date.now();
  const sql = getDb();

  if (sql) {
    try {
      await ensureTable();
      const rows = await sql`
        SELECT count, reset_time FROM check_rate_limits WHERE ip = ${ip}
      `;
      if (rows.length === 0 || Number(rows[0].reset_time) < now) {
        return { remaining: RATE_LIMIT_MAX, limit: RATE_LIMIT_MAX };
      }
      const count = rows[0].count as number;
      return {
        remaining: Math.max(0, RATE_LIMIT_MAX - count),
        limit: RATE_LIMIT_MAX,
        resetsAt: new Date(Number(rows[0].reset_time)).toISOString(),
      };
    } catch {
      // fall through to memory
    }
  }

  const record = memoryMap.get(ip);
  if (!record || record.resetTime < now) {
    return { remaining: RATE_LIMIT_MAX, limit: RATE_LIMIT_MAX };
  }
  return {
    remaining: Math.max(0, RATE_LIMIT_MAX - record.count),
    limit: RATE_LIMIT_MAX,
    resetsAt: new Date(record.resetTime).toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Security helpers
// ---------------------------------------------------------------------------

/** Extract real client IP — use Vercel's trusted header, NOT user-spoofable x-forwarded-for */
function getClientIp(h: Headers): string {
  // Vercel sets this from the actual TCP connection — cannot be spoofed
  const vercelIp = h.get("x-real-ip");
  if (vercelIp) return vercelIp.trim();

  // Fallback: take LAST entry in x-forwarded-for (closest to the load balancer)
  const xff = h.get("x-forwarded-for");
  if (xff) {
    const parts = xff.split(",").map((s) => s.trim()).filter(Boolean);
    // Last IP is added by the reverse proxy (Vercel/CDN) — most trustworthy
    return parts[parts.length - 1] || "unknown";
  }

  return "unknown";
}

/** Validate file magic bytes to prevent content-type spoofing */
function validateMagicBytes(buffer: ArrayBuffer): string | null {
  const bytes = new Uint8Array(buffer.slice(0, 12));

  // JPEG: FF D8 FF
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "image/jpeg";
  // PNG: 89 50 4E 47
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) return "image/png";
  // GIF: 47 49 46 38
  if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x38) return "image/gif";
  // WebP: 52 49 46 46 ... 57 45 42 50
  if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
      bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50) return "image/webp";
  // BMP: 42 4D
  if (bytes[0] === 0x42 && bytes[1] === 0x4d) return "image/bmp";

  return null;
}

/** Check origin to prevent direct API abuse from external scripts */
function isValidOrigin(h: Headers): boolean {
  const origin = h.get("origin") || h.get("referer") || "";
  // Allow requests from our domains and localhost
  const allowed = [
    "https://scam.ai",
    "https://www.scam.ai",
    "http://localhost:3000",
    "http://localhost:3001",
  ];
  return allowed.some((a) => origin.startsWith(a)) || origin === "";
}

// ---------------------------------------------------------------------------
// Global request throttle — prevent burst abuse (max 2 req/sec per IP)
// ---------------------------------------------------------------------------
const burstMap = new Map<string, number>();
const BURST_COOLDOWN_MS = 500; // 500ms between requests

function checkBurst(ip: string): boolean {
  const now = Date.now();
  const last = burstMap.get(ip) || 0;
  if (now - last < BURST_COOLDOWN_MS) return false;
  burstMap.set(ip, now);
  return true;
}

// Cleanup stale burst entries every 60s
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const cutoff = Date.now() - 60000;
    for (const [ip, ts] of burstMap) {
      if (ts < cutoff) burstMap.delete(ip);
    }
  }, 60000);
}

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

export async function GET(req: Request) {
  const reqHeaders = new Headers(req.headers);

  if (!isValidOrigin(reqHeaders)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const ip = getClientIp(reqHeaders);
  const quota = await getQuota(ip);
  return NextResponse.json(quota);
}

export async function POST(req: Request) {
  const reqHeaders = new Headers(req.headers);

  // 1. Origin check — block direct API calls from scripts/Postman
  if (!isValidOrigin(reqHeaders)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const ip = getClientIp(reqHeaders);

  // 2. Burst protection — prevent rapid-fire requests
  if (!checkBurst(ip)) {
    return NextResponse.json({ error: "Too many requests. Please wait a moment." }, { status: 429 });
  }

  // 3. Extract fingerprint from request (optional, sent by client)
  const fingerprint = req.headers.get("x-client-fp") || undefined;

  // 4. Rate limit check (DB-backed, atomic)
  const rateLimit = await getRateLimit(ip, fingerprint);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        error: "Daily limit reached. Create a free account for more checks.",
        remaining: 0,
        resetsAt: new Date(rateLimit.resetTime).toISOString(),
      },
      { status: 429 }
    );
  }

  // 5. Parse form data
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const file = formData.get("file") as File | null;
  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  // 6. Validate file size FIRST (before reading bytes)
  const MAX_SIZE = 10 * 1024 * 1024;
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "File too large. Maximum size is 10MB." }, { status: 400 });
  }

  if (file.size < 100) {
    return NextResponse.json({ error: "File too small to be a valid image." }, { status: 400 });
  }

  // 7. Validate ACTUAL file content via magic bytes (not client-provided Content-Type)
  const buffer = await file.arrayBuffer();
  const detectedType = validateMagicBytes(buffer);
  if (!detectedType) {
    return NextResponse.json(
      { error: "Invalid file. Please upload a real image (JPEG, PNG, WebP, GIF, or BMP)." },
      { status: 400 }
    );
  }

  // Reconstruct file with verified type
  const verifiedFile = new File([buffer], file.name, { type: detectedType });

  // 8. Call real ScamAI API
  const apiKey = process.env.SCAMAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Service temporarily unavailable" }, { status: 503 });
  }

  // Call both endpoints in parallel
  const aiFormData = new FormData();
  aiFormData.append("file", verifiedFile);

  const dfFormData = new FormData();
  dfFormData.append("files", verifiedFile);

  const [aiResult, dfResult] = await Promise.allSettled([
    fetch("https://api.scam.ai/api/defence/ai-image-detection/detect-file", {
      method: "POST",
      headers: { "x-api-key": apiKey },
      body: aiFormData,
    }).then(async (r) => {
      if (!r.ok) throw new Error("Detection service error");
      return r.json();
    }),
    fetch("https://api.scam.ai/api/defence/faceswap/predict", {
      method: "POST",
      headers: { "x-api-key": apiKey },
      body: dfFormData,
    }).then(async (r) => {
      if (!r.ok) throw new Error("Detection service error");
      return r.json();
    }),
  ]);

  // If both failed, return generic error (don't leak upstream details)
  if (aiResult.status === "rejected" && dfResult.status === "rejected") {
    return NextResponse.json(
      { error: "Detection service temporarily unavailable. Please try again." },
      { status: 502 }
    );
  }

  // --- Parse AI image detection result ---
  const aiData = aiResult.status === "fulfilled" ? aiResult.value : null;
  const aiPayload = aiData?.result?.payload;
  const aiConfidenceRaw = aiPayload?.confidence_score ?? aiData?.confidence ?? 0;
  const aiConfidence = Math.round(aiConfidenceRaw * 1000) / 10;
  const isAIGenerated = aiPayload?.likely_ai_generated ?? aiData?.detected ?? aiConfidence > 50;
  const aiModel = aiData?.ai_model_info ? `${aiData.ai_model_info.model_name} ${aiData.ai_model_info.model_version}` : "eva";
  const aiProcessingMs = aiPayload?.processing_time_ms ?? 0;

  // --- Parse deepfake/faceswap result ---
  const dfData = dfResult.status === "fulfilled" ? dfResult.value : null;
  const dfVerdict = dfData?.verdict;
  const dfConfidenceRaw = dfData?.confidence ?? 0;
  const numFaces = dfData?.num_faces ?? 0;
  const isDeepfake = dfVerdict === "fake";
  const dfFakenessScore = dfData?.ml_response?.results?.[0]?.faces?.[0]?.blended_fakeness_score ?? 0;
  const dfFakenessPercent = Math.round(dfFakenessScore * 1000) / 10;
  const dfRealnessPercent = Math.round(dfConfidenceRaw * 1000) / 10;

  // --- Combined verdict ---
  const isSuspicious = isAIGenerated || isDeepfake;

  const checks = [];

  if (aiData) {
    checks.push({ name: "AI Generation Detection", passed: !isAIGenerated, score: aiConfidence });
  }
  if (dfData) {
    checks.push({ name: "Deepfake / Face Swap", passed: !isDeepfake, score: dfFakenessPercent });
    if (numFaces > 0) {
      const face = dfData.ml_response?.results?.[0]?.faces?.[0];
      if (face?.expert_predictions) {
        for (const [expertName, score] of Object.entries(face.expert_predictions)) {
          checks.push({
            name: expertName.replace(/_/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()),
            passed: (score as number) < 0.5,
            score: Math.round((score as number) * 1000) / 10,
          });
        }
      }
    }
  }

  // Build details (generic — don't expose model internals)
  const detailParts: string[] = [];
  if (aiData) {
    detailParts.push(
      isAIGenerated
        ? `AI-generated content detected (${aiConfidence}% confidence, ${aiModel}, ${aiProcessingMs}ms)`
        : `No AI generation detected (${aiConfidence}% confidence)`
    );
  }
  if (dfData) {
    detailParts.push(
      isDeepfake
        ? `Deepfake detected — ${numFaces} face${numFaces !== 1 ? "s" : ""} analyzed, fakeness ${dfFakenessPercent}%`
        : numFaces > 0
        ? `No deepfake detected — ${numFaces} face${numFaces !== 1 ? "s" : ""} analyzed, ${dfRealnessPercent}% real`
        : "No faces detected for deepfake analysis"
    );
  }

  return NextResponse.json({
    verdict: isSuspicious ? "ai_generated" : "likely_real",
    confidence: aiData ? aiConfidence : dfFakenessPercent,
    label: isSuspicious
      ? isDeepfake && !isAIGenerated ? "Deepfake Detected" : "AI Generated"
      : "Likely Real",
    details: detailParts.join(". ") + ".",
    checks,
    remaining: rateLimit.remaining,
  });
}
