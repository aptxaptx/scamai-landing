"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackCTA } from "@/lib/analytics";

type CheckResult = {
  verdict: "ai_generated" | "likely_real";
  confidence: number;
  label: string;
  details: string;
  checks: { name: string; passed: boolean; score: number }[];
  remaining: number;
};

type FileState = {
  file: File;
  preview: string;
  status: "idle" | "uploading" | "done" | "error" | "locked" | "document";
  result?: CheckResult;
  watermarked?: string;
  error?: string;
};

/** Non-image document MIME types — immediate reject */
const DOC_MIME = /^application\/(pdf|msword|vnd\.openxmlformats)/;

/**
 * Canvas-based document/ID card detection using 4 lightweight heuristics:
 *   1. White/light background density (documents have lots of white)
 *   2. Color saturation variance (documents are low-saturation)
 *   3. Edge density via Laplacian (documents have dense text edges)
 *   4. Aspect ratio matching against known document formats
 *
 * Runs on a downscaled 320px canvas for speed (~20-40ms).
 */
function analyzeImageForDocument(file: File): Promise<boolean> {
  return new Promise((resolve) => {
    // Non-image files with doc MIME → instant true
    if (DOC_MIME.test(file.type)) { resolve(true); return; }
    if (!file.type.startsWith("image/")) { resolve(false); return; }

    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      // Downscale to 320px wide for fast processing
      const ANALYSIS_W = 320;
      const scale = ANALYSIS_W / img.width;
      const aw = ANALYSIS_W;
      const ah = Math.round(img.height * scale);

      const cvs = document.createElement("canvas");
      cvs.width = aw;
      cvs.height = ah;
      const ctx = cvs.getContext("2d", { willReadFrequently: true })!;
      ctx.drawImage(img, 0, 0, aw, ah);
      const { data } = ctx.getImageData(0, 0, aw, ah);
      const totalPx = aw * ah;

      // ── Signal 1: White/light background density ──
      // Documents typically have 35-85% of pixels in the light range
      let lightPx = 0;
      const LIGHT_THRESH = 210;
      for (let i = 0; i < data.length; i += 4) {
        const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
        if (gray > LIGHT_THRESH) lightPx++;
      }
      const lightRatio = lightPx / totalPx;
      // Score: peaks at 50-70% light pixels
      const lightScore = lightRatio > 0.3 && lightRatio < 0.88
        ? Math.min(1, (lightRatio - 0.3) / 0.2)
        : lightRatio >= 0.88 ? 0.7 : 0;

      // ── Signal 2: Low color saturation variance ──
      // Documents have uniform, muted colors; photos are vibrant/varied
      let satSum = 0;
      let satSqSum = 0;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        const mx = Math.max(r, g, b);
        const mn = Math.min(r, g, b);
        const sat = mx === 0 ? 0 : (mx - mn) / mx;
        satSum += sat;
        satSqSum += sat * sat;
      }
      const satMean = satSum / totalPx;
      const satStd = Math.sqrt(satSqSum / totalPx - satMean * satMean);
      // Low saturation mean + low std → likely document
      const satScore = satMean < 0.25 && satStd < 0.2 ? 1
        : satMean < 0.35 && satStd < 0.25 ? 0.6
        : 0;

      // ── Signal 3: Laplacian edge density (text detection) ──
      // Grayscale first
      const gray = new Float32Array(totalPx);
      for (let i = 0; i < totalPx; i++) {
        const off = i * 4;
        gray[i] = data[off] * 0.299 + data[off + 1] * 0.587 + data[off + 2] * 0.114;
      }
      // Apply 3x3 Laplacian kernel
      let lapSum = 0;
      let lapSqSum = 0;
      let lapCount = 0;
      for (let y = 1; y < ah - 1; y++) {
        for (let x = 1; x < aw - 1; x++) {
          const idx = y * aw + x;
          const lap = -gray[idx - aw - 1] - gray[idx - aw] - gray[idx - aw + 1]
                    - gray[idx - 1]     + 8 * gray[idx]    - gray[idx + 1]
                    - gray[idx + aw - 1] - gray[idx + aw] - gray[idx + aw + 1];
          lapSum += Math.abs(lap);
          lapSqSum += lap * lap;
          lapCount++;
        }
      }
      const lapVariance = lapSqSum / lapCount - (lapSum / lapCount) ** 2;
      // High variance → lots of sharp edges (text). Typical ranges:
      //   Documents: 800-5000+, Photos: 100-600
      const edgeScore = lapVariance > 600 ? Math.min(1, (lapVariance - 600) / 1500)
        : 0;

      // ── Signal 4: Aspect ratio match ──
      const aspect = img.width / img.height;
      const invAspect = img.height / img.width;
      // Check both orientations
      const ar = Math.max(aspect, invAspect);
      const ID_CARD = 1.586;   // ISO 7810 (credit cards, ID cards, licenses)
      const A4 = 1.414;        // A4 / Letter paper
      const PASSPORT = 1.42;

      const arDiff = Math.min(
        Math.abs(ar - ID_CARD),
        Math.abs(ar - A4),
        Math.abs(ar - PASSPORT)
      );
      const arScore = arDiff < 0.06 ? 1 : arDiff < 0.12 ? 0.5 : 0;

      // ── Combined weighted score ──
      const score =
        lightScore * 0.30 +
        satScore * 0.25 +
        edgeScore * 0.25 +
        arScore * 0.20;

      URL.revokeObjectURL(url);
      resolve(score >= 0.55);
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(false); };
    img.src = url;
  });
}

/* ── Canvas watermark ───────────────────────────────────────────────── */

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

/** Preload logo once */
let _logoCache: HTMLImageElement | null = null;
function loadLogo(): Promise<HTMLImageElement> {
  if (_logoCache) return Promise.resolve(_logoCache);
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => { _logoCache = img; resolve(img); };
    img.onerror = () => resolve(img);
    img.src = "/logo.svg";
  });
}

/**
 * Draw the Intel-sticker-style badge shape.
 * Shape: rounded rect with a swooped/curved left edge — gives it that
 * distinctive "CPU sticker" silhouette instead of a boring rectangle.
 */
function stickerPath(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number,
  r: number, swoop: number
) {
  ctx.beginPath();
  // Top-left corner (rounded)
  ctx.moveTo(x + r, y);
  // Top edge → top-right corner
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  // Right edge → bottom-right corner
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  // Bottom edge → bottom-left corner
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  // Left edge with inward swoop (the Intel signature curve)
  ctx.lineTo(x, y + h * 0.65);
  ctx.quadraticCurveTo(x + swoop, y + h * 0.5, x, y + h * 0.35);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

async function createWatermarked(
  imgSrc: string,
  label: string,
  isAI: boolean
): Promise<string> {
  const logo = await loadLogo();

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");

      const RENDER_W = 1600;
      const aspect = img.height / img.width;
      const w = RENDER_W;
      const h = Math.round(RENDER_W * aspect);

      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d")!;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, w, h);

      const accentColor = isAI ? "#ef4444" : "#22c55e";
      const accentGlow = isAI ? "rgba(239,68,68,0.3)" : "rgba(34,197,94,0.3)";
      const margin = 48;

      // ════════════════════════════════════════════════════
      // ── INTEL-STYLE STICKER BADGE (bottom-right) ──
      // Sizes are 2x larger on the 1600px canvas so they
      // remain readable when the image shrinks on mobile.
      // ════════════════════════════════════════════════════

      const font = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif';

      // -- Measure verdict text --
      const verdictFS = 64;
      ctx.font = `800 ${verdictFS}px ${font}`;
      const verdictW = ctx.measureText(label).width;

      // -- Measure brand text --
      const brandFS = 34;
      const logoSz = 44;
      const logoGap = 12;
      const checkedByText = "Checked by ";
      const brandName = "Scam.ai";
      ctx.font = `400 ${brandFS}px ${font}`;
      const checkedByW = ctx.measureText(checkedByText).width;
      ctx.font = `700 ${brandFS}px ${font}`;
      const brandNameW = ctx.measureText(brandName).width;
      const brandLineW = logoSz + logoGap + checkedByW + brandNameW;

      // -- Sticker dimensions --
      const padX = 48;
      const padTop = 44;
      const padBot = 38;
      const dividerGap = 28;
      const accentStripeW = 10;
      const stickerR = 24;
      const swoop = 20;

      const innerW = Math.max(verdictW, brandLineW);
      const stickerW = accentStripeW + padX + innerW + padX;
      const stickerH = padTop + verdictFS + dividerGap + brandFS + padBot;

      const stickerX = w - margin - stickerW;
      const stickerY = h - margin - stickerH;

      // -- Subtle shadow behind sticker --
      ctx.save();
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.shadowBlur = 40;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 12;
      stickerPath(ctx, stickerX, stickerY, stickerW, stickerH, stickerR, swoop);
      ctx.fillStyle = "rgba(0,0,0,0.92)";
      ctx.fill();
      ctx.restore();

      // -- Sticker background with subtle gradient --
      ctx.save();
      stickerPath(ctx, stickerX, stickerY, stickerW, stickerH, stickerR, swoop);
      const bgGrad = ctx.createLinearGradient(stickerX, stickerY, stickerX, stickerY + stickerH);
      bgGrad.addColorStop(0, "rgba(18,18,22,0.95)");
      bgGrad.addColorStop(1, "rgba(10,10,14,0.97)");
      ctx.fillStyle = bgGrad;
      ctx.fill();
      // Subtle border
      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.restore();

      // -- Left accent stripe (the Intel signature colored edge) --
      ctx.save();
      ctx.beginPath();
      // Clip to sticker shape, then draw a rect on the left
      stickerPath(ctx, stickerX, stickerY, stickerW, stickerH, stickerR, swoop);
      ctx.clip();
      const stripeGrad = ctx.createLinearGradient(stickerX, stickerY, stickerX, stickerY + stickerH);
      stripeGrad.addColorStop(0, accentColor);
      stripeGrad.addColorStop(1, isAI ? "#dc2626" : "#16a34a");
      ctx.fillStyle = stripeGrad;
      ctx.fillRect(stickerX, stickerY, accentStripeW, stickerH);
      // Glow from the stripe
      const glowGrad = ctx.createLinearGradient(stickerX, stickerY, stickerX + 60, stickerY);
      glowGrad.addColorStop(0, accentGlow);
      glowGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(stickerX, stickerY, 60, stickerH);
      ctx.restore();

      // -- Verdict text (top zone) --
      const textX = stickerX + accentStripeW + padX;
      const verdictY = stickerY + padTop + verdictFS * 0.82;
      ctx.font = `800 ${verdictFS}px ${font}`;
      ctx.fillStyle = accentColor;
      ctx.fillText(label, textX, verdictY);

      // -- Divider line --
      const divY = stickerY + padTop + verdictFS + dividerGap / 2;
      ctx.beginPath();
      ctx.moveTo(textX, divY);
      ctx.lineTo(stickerX + stickerW - padX, divY);
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // -- Brand row (bottom zone): logo + "Checked by Scam.ai" --
      const brandY = divY + dividerGap / 2 + brandFS * 0.82;

      // Logo icon
      if (_logoCache) {
        ctx.globalAlpha = 0.9;
        const ly = brandY - brandFS * 0.82 + (brandFS - logoSz) / 2;
        ctx.drawImage(logo, textX, ly, logoSz, logoSz);
        ctx.globalAlpha = 1;
      }

      // "Checked by "
      const brandTextX = textX + logoSz + logoGap;
      ctx.font = `400 ${brandFS}px ${font}`;
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.fillText(checkedByText, brandTextX, brandY);

      // "Scam.ai" — bold bright
      ctx.font = `700 ${brandFS}px ${font}`;
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fillText(brandName, brandTextX + checkedByW, brandY);

      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = () => resolve(imgSrc);
    img.src = imgSrc;
  });
}

/* ── Component ──────────────────────────────────────────────────────── */

export default function CheckSection() {
  const [files, setFiles] = useState<FileState[]>([]);
  const [dragging, setDragging] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [limitReached, setLimitReached] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [previewLimit, setPreviewLimit] = useState(false);
  const previewLimitRef = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCanNativeShare(!!navigator.share);
    // ?preview-limit forces locked UI for testing
    if (new URLSearchParams(window.location.search).has("preview-limit")) {
      setPreviewLimit(true);
      previewLimitRef.current = true;
      setLimitReached(true);
    }
  }, []);

  const addFiles = useCallback(async (newFiles: FileList | File[]) => {
    const arr = Array.from(newFiles).filter(
      (f) => f.type.startsWith("image/") || DOC_MIME.test(f.type)
    );
    if (arr.length === 0) return;

    // Create entries with preview URLs
    const entries: FileState[] = arr.map((f) => ({
      file: f,
      preview: f.type.startsWith("image/") ? URL.createObjectURL(f) : "",
      status: "idle" as const,
    }));

    // Add all to UI immediately (shows as idle)
    setFiles((prev) => [...prev, ...entries]);

    // Run document detection in parallel for each file
    for (const entry of entries) {
      const isDoc = await analyzeImageForDocument(entry.file);
      if (isDoc) {
        // Flag as document — don't send to detection API
        setFiles((prev) =>
          prev.map((f) =>
            f.file === entry.file ? { ...f, status: "document" as const } : f
          )
        );
      } else {
        analyzeFile(entry);
      }
    }
  }, []);

  const analyzeFile = async (entry: FileState) => {
    // Preview mode: skip API, simulate locked result
    if (previewLimitRef.current) {
      setFiles((prev) =>
        prev.map((f) => (f.file === entry.file ? { ...f, status: "uploading" as const } : f))
      );
      await new Promise((r) => setTimeout(r, 800));
      const fakeLabel = Math.random() > 0.5 ? "AI Generated" : "Likely Real";
      const fakeAI = fakeLabel === "AI Generated";
      const watermarked = await createWatermarked(
        URL.createObjectURL(entry.file), fakeLabel, fakeAI
      );
      const fakeResult: CheckResult = {
        verdict: fakeAI ? "ai_generated" : "likely_real",
        confidence: Math.round(70 + Math.random() * 25),
        label: fakeLabel, details: "", checks: [], remaining: 0,
      };
      setFiles((prev) =>
        prev.map((f) =>
          f.file === entry.file
            ? { ...f, status: "locked" as const, result: fakeResult, watermarked }
            : f
        )
      );
      return;
    }

    setFiles((prev) =>
      prev.map((f) => (f.file === entry.file ? { ...f, status: "uploading" as const } : f))
    );

    const formData = new FormData();
    formData.append("file", entry.file);

    try {
      const headers: Record<string, string> = {};
      if (process.env.NEXT_PUBLIC_DEV_CHECK_BYPASS_KEY) {
        headers["x-dev-bypass"] = process.env.NEXT_PUBLIC_DEV_CHECK_BYPASS_KEY;
      }
      const res = await fetch("/api/check", { method: "POST", body: formData, headers });
      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          setLimitReached(true);
          // Show blurred "locked" result instead of plain error
          const fakeResult: CheckResult = {
            verdict: Math.random() > 0.5 ? "ai_generated" : "likely_real",
            confidence: Math.round(70 + Math.random() * 25),
            label: Math.random() > 0.5 ? "AI Generated" : "Likely Real",
            details: "",
            checks: [],
            remaining: 0,
          };
          const watermarked = await createWatermarked(
            URL.createObjectURL(entry.file),
            fakeResult.label,
            fakeResult.verdict === "ai_generated"
          );
          setFiles((prev) =>
            prev.map((f) =>
              f.file === entry.file
                ? { ...f, status: "locked" as const, result: fakeResult, watermarked }
                : f
            )
          );
          return;
        }
        setFiles((prev) =>
          prev.map((f) =>
            f.file === entry.file ? { ...f, status: "error" as const, error: data.error } : f
          )
        );
        return;
      }

      const result = data as CheckResult;
      if (typeof result.remaining === "number") setRemaining(result.remaining);
      const ai = result.verdict === "ai_generated";
      const watermarked = await createWatermarked(
        URL.createObjectURL(entry.file),
        result.label,
        ai
      );

      setFiles((prev) =>
        prev.map((f) =>
          f.file === entry.file ? { ...f, status: "done" as const, result, watermarked } : f
        )
      );
    } catch {
      setFiles((prev) =>
        prev.map((f) =>
          f.file === entry.file
            ? { ...f, status: "error" as const, error: "Network error. Please try again." }
            : f
        )
      );
    }
  };

  const removeFile = (file: File) => {
    setFiles((prev) => {
      const entry = prev.find((f) => f.file === file);
      if (entry) URL.revokeObjectURL(entry.preview);
      return prev.filter((f) => f.file !== file);
    });
  };

  const downloadResult = (f: FileState) => {
    if (!f.watermarked) return;
    const a = document.createElement("a");
    a.href = f.watermarked;
    a.download = `${f.file.name.replace(/\.[^.]+$/, "")}_checkedbyscamai.png`;
    a.click();
  };

  const shareNative = async (f: FileState) => {
    if (!f.result || !f.watermarked) return;
    const text = `${f.result.label} — Checked by Scam.ai`;
    try {
      const blob = await (await fetch(f.watermarked)).blob();
      const shareFile = new File([blob], `${f.file.name.replace(/\.[^.]+$/, "")}_checkedbyscamai.png`, { type: "image/png" });
      if (navigator.canShare?.({ files: [shareFile] })) {
        await navigator.share({ text, files: [shareFile] });
      } else {
        await navigator.share({ text, url: "https://scam.ai" });
      }
    } catch { /* cancelled */ }
  };

  const shareTo = (platform: string, f: FileState) => {
    if (!f.result) return;
    const text = `${f.result.label} — Checked by Scam.ai`;
    const url = "https://scam.ai";
    const encoded = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(url);
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encoded}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encoded}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
    };
    window.open(urls[platform], "_blank", "width=600,height=500");
  };

  const isAI = (result: CheckResult) => result.verdict === "ai_generated";

  return (
    <section id="check" className="relative bg-black py-12 sm:py-20 scroll-mt-20 overflow-hidden" aria-label="Try AI Detection">
      {/* Subtle grid background — scanner aesthetic */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }} />
      {/* Radial fade so grid only shows in the center */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, black 100%)",
      }} />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 mb-5">
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </div>
            <span className="text-[11px] font-medium text-gray-400 tracking-wide">Free detection — no signup required</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.1] mb-3 tracking-[-0.02em]">
            Is it AI-generated?
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto">
            Drop an image to scan for synthetic content, deepfakes, and face swaps.
          </p>
        </div>

        {/* Upload area */}
        <div
          className={`group relative rounded-2xl transition-all duration-300 cursor-pointer ${
            dragging ? "scale-[1.01]" : ""
          }`}
          style={{ minHeight: files.length === 0 ? "180px" : "100px" }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); }}
          onClick={() => inputRef.current?.click()}
        >
          {/* Animated gradient border */}
          <div className="absolute -inset-px rounded-2xl overflow-hidden">
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                dragging ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
              style={{
                background: "conic-gradient(from var(--border-angle, 0deg), transparent 40%, rgba(59,130,246,0.5) 50%, transparent 60%)",
                animation: "spin-border 3s linear infinite",
              }}
            />
            <div className="absolute inset-px rounded-2xl bg-black" />
          </div>
          {/* Static border (visible when not hovered) */}
          <div className={`absolute inset-0 rounded-2xl border-2 border-dashed transition-all duration-300 ${
            dragging
              ? "border-blue-400/60 bg-blue-400/[0.04]"
              : "border-white/[0.1] group-hover:border-transparent bg-white/[0.015]"
          }`} />

          <input
            ref={inputRef}
            type="file"
            accept="image/*,.pdf"
            multiple
            className="hidden"
            onChange={(e) => {
              if (e.target.files) addFiles(e.target.files);
              e.target.value = "";
            }}
          />
          <div className="relative flex flex-col items-center justify-center h-full py-8 sm:py-10 pointer-events-none">
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl border border-white/[0.08] mb-3 transition-all duration-300 ${
              dragging ? "bg-blue-500/10 border-blue-400/30 scale-110" : "bg-white/[0.04] group-hover:bg-white/[0.06] group-hover:border-white/[0.14]"
            }`}>
              <svg
                className={`w-5 h-5 transition-colors duration-300 ${dragging ? "text-blue-400" : "text-gray-500 group-hover:text-gray-300"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <p className="text-sm text-gray-300 font-medium">
              Drop images here or <span className="text-blue-400 group-hover:text-blue-300 transition-colors">browse</span>
            </p>
            <p className="text-xs text-gray-600 mt-1">
              JPEG, PNG, WebP — up to 10MB
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] text-gray-600 mt-2.5 px-1 leading-relaxed">
          Results are probabilistic estimates and should not be treated as definitive. For higher accuracy with our latest models,{" "}
          <a href="https://app.scam.ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white underline underline-offset-2 transition-colors">
            create a free account
          </a>.
        </p>

        {/* Results */}
        <div className="mt-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {files.map((f) => (
              <motion.div
                key={f.preview || f.file.name + f.file.lastModified}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className={`rounded-2xl overflow-hidden border ${
                  f.status === "document"
                    ? "border-amber-500/20 bg-amber-500/[0.03]"
                    : (f.status === "done" || f.status === "locked") && f.result
                      ? f.status === "locked"
                        ? "border-white/[0.06] bg-white/[0.02]"
                        : isAI(f.result)
                          ? "border-red-500/20 bg-red-500/[0.03]"
                          : "border-green-500/20 bg-green-500/[0.03]"
                      : "border-white/[0.08] bg-white/[0.03]"
                }`}
              >
                {/* ── Document detected — contact sales ── */}
                {f.status === "document" && (
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start gap-3.5">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white mb-0.5">Document detected</p>
                        <p className="text-xs text-gray-400 leading-relaxed mb-3">
                          ID cards, passports, invoices, and other documents require our specialized Document Forgery Detection model with higher accuracy and compliance features.
                        </p>
                        <div className="flex items-center gap-2.5">
                          <a
                            href="https://scam.ai/products/document-forgery"
                            className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-500/25 px-3.5 py-1.5 text-xs font-semibold text-amber-300 hover:bg-amber-500/25 transition-colors"
                          >
                            Contact Sales
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </a>
                          <span className="text-[10px] text-gray-600">or</span>
                          <a
                            href="https://scam.ai/products/document-forgery"
                            className="text-xs text-gray-500 hover:text-white transition-colors underline underline-offset-2"
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); removeFile(f.file); }}
                        className="flex-shrink-0 p-1.5 rounded-lg hover:bg-white/[0.06] text-gray-500 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* ── Uploading / idle / error state ── */}
                {f.status !== "done" && f.status !== "locked" && f.status !== "document" && (
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4">
                    <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white/[0.04]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={f.preview} alt={f.file.name} className="w-full h-full object-cover" />
                      {f.status === "uploading" && (
                        <>
                          <div className="absolute inset-0 bg-black/40" />
                          {/* Scan line sweep */}
                          <div
                            className="absolute left-0 right-0 h-[2px]"
                            style={{
                              background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.8), transparent)",
                              boxShadow: "0 0 8px rgba(59,130,246,0.5), 0 0 20px rgba(59,130,246,0.2)",
                              animation: "scan-sweep 1.5s ease-in-out infinite",
                            }}
                          />
                        </>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{f.file.name}</p>
                      {f.status === "uploading" && (
                        <div className="mt-1.5">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                              <div className="h-full rounded-full bg-blue-500/60" style={{
                                animation: "progress-indeterminate 1.5s ease-in-out infinite",
                              }} />
                            </div>
                            <span className="text-[10px] text-blue-400 font-medium tracking-wider">SCANNING</span>
                          </div>
                        </div>
                      )}
                      {f.status === "error" && (
                        <p className="text-xs text-red-400 mt-1">{f.error}</p>
                      )}
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); removeFile(f.file); }}
                      className="flex-shrink-0 p-1.5 rounded-lg hover:bg-white/[0.06] text-gray-500 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* ── Locked: blurred result with unlock CTA ── */}
                {f.status === "locked" && f.watermarked && (
                  <div className="relative">
                    {/* Blurred watermarked image — teases the result */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.watermarked}
                      alt={f.file.name}
                      className="w-full h-auto block"
                      style={{ filter: "blur(18px) brightness(0.7)", transform: "scale(1.05)" }}
                    />
                    {/* Unlock overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/20">
                      {/* Lock icon */}
                      <div className="w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] flex items-center justify-center">
                        <svg className="w-4.5 h-4.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0110 0v4" />
                        </svg>
                      </div>
                      <div className="text-center px-4">
                        <p className="text-sm font-semibold text-white mb-1">Result ready</p>
                        <p className="text-xs text-white/50 mb-3">Sign up to unlock your detection results</p>
                      </div>
                      <a
                        href="https://app.scam.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-black hover:bg-gray-100 transition-colors shadow-lg shadow-black/30"
                        onClick={() => trackCTA("unlock_result", "check_section")}
                      >
                        Unlock for free
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                    {/* Remove button */}
                    <button
                      onClick={(e) => { e.stopPropagation(); removeFile(f.file); }}
                      className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white/70 hover:text-white hover:bg-black/70 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* ── Completed result ── */}
                {f.status === "done" && f.result && (
                  <>
                    {/* Watermarked image */}
                    {f.watermarked && (
                      <div className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={f.watermarked}
                          alt={`${f.result.label} — ${f.file.name}`}
                          className="w-full h-auto block"
                        />
                        {/* Remove button overlaid on image */}
                        <button
                          onClick={(e) => { e.stopPropagation(); removeFile(f.file); }}
                          className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white/70 hover:text-white hover:bg-black/70 transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    )}

                    {/* Result footer bar */}
                    <div className="px-3 sm:px-4 py-3 space-y-2.5">
                      {/* Top row: verdict + confidence readout */}
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex-shrink-0 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                            isAI(f.result)
                              ? "bg-red-500/15 text-red-400"
                              : "bg-green-500/15 text-green-400"
                          }`}
                        >
                          <div className="relative flex h-1.5 w-1.5">
                            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${isAI(f.result) ? "bg-red-400" : "bg-green-400"}`} />
                            <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${isAI(f.result) ? "bg-red-400" : "bg-green-400"}`} />
                          </div>
                          {f.result.label}
                        </div>
                        {/* Confidence bar */}
                        <div className="flex-1 flex items-center gap-2 min-w-0">
                          <div className="flex-1 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${f.result.confidence}%` }}
                              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                              className={`h-full rounded-full ${
                                isAI(f.result)
                                  ? "bg-gradient-to-r from-red-500/60 to-red-400/80"
                                  : "bg-gradient-to-r from-green-500/60 to-green-400/80"
                              }`}
                            />
                          </div>
                          <span className={`text-[11px] font-mono font-medium tabular-nums ${
                            isAI(f.result) ? "text-red-400/70" : "text-green-400/70"
                          }`}>
                            {f.result.confidence}%
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-600 truncate hidden sm:inline">{f.file.name}</span>
                      </div>

                      {/* Bottom row: share icons */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-gray-600 tracking-wide uppercase">Share result</span>
                        <div className="flex items-center gap-0.5">
                          {[
                            { key: "twitter", title: "X", icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />, hoverClass: "hover:text-white" },
                            { key: "whatsapp", title: "WhatsApp", icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />, hoverClass: "hover:text-[#25D366]" },
                            { key: "linkedin", title: "LinkedIn", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />, hoverClass: "hover:text-[#0A66C2]" },
                          ].map(({ key, title, icon, hoverClass }) => (
                            <button
                              key={key}
                              onClick={(e) => { e.stopPropagation(); shareTo(key, f); }}
                              className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-gray-600 ${hoverClass} transition-colors`}
                              title={`Share on ${title}`}
                            >
                              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">{icon}</svg>
                            </button>
                          ))}

                          <div className="w-px h-4 bg-white/[0.06] mx-0.5" />

                          {/* Download */}
                          <button
                            onClick={(e) => { e.stopPropagation(); downloadResult(f); }}
                            className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-gray-600 hover:text-white transition-colors"
                            title="Download"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                          </button>

                          {/* Native share */}
                          {canNativeShare && (
                            <button
                              onClick={(e) => { e.stopPropagation(); shareNative(f); }}
                              className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-gray-600 hover:text-white transition-colors"
                              title="More sharing options"
                            >
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
                                <polyline points="16 6 12 2 8 6" />
                                <line x1="12" y1="2" x2="12" y2="15" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Limit reached ── */}
        {limitReached && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-5 relative overflow-hidden rounded-2xl"
          >
            {/* Noise texture background */}
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

            <div className="relative px-5 py-5 sm:px-6 sm:py-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-[13px] sm:text-sm font-semibold text-white tracking-[-0.01em]">
                    You&apos;ve used all your free checks for today
                  </p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Sign up for 200 free checks/month + full API access
                  </p>
                </div>
                <a
                  href="https://app.scam.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-black hover:bg-gray-100 transition-colors"
                  onClick={() => trackCTA("upgrade_limit", "check_section")}
                >
                  Create free account
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Low remaining ── */}
        {!limitReached && remaining !== null && remaining <= 2 && remaining > 0 && files.length > 0 && (
          <div className="mt-4 flex items-center justify-between gap-3 px-1">
            <p className="text-xs text-gray-500">
              <span className="text-gray-400 font-medium">{remaining}</span> free {remaining === 1 ? "check" : "checks"} left today
            </p>
            <a
              href="https://app.scam.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-gray-400 hover:text-white transition-colors"
              onClick={() => trackCTA("upgrade_low_remaining", "check_section")}
            >
              Get more →
            </a>
          </div>
        )}

        {/* ── Standard CTA ── */}
        {!limitReached && files.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 mb-3">
              Need API access or higher volume?
            </p>
            <a
              href="https://app.scam.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-200 transition-colors"
              onClick={() => trackCTA("create_account", "check_section")}
            >
              Create Free Account
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
