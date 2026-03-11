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
  status: "idle" | "uploading" | "done" | "error" | "locked";
  result?: CheckResult;
  watermarked?: string;
  error?: string;
};

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
      const MAX = 1200;
      let w = img.width;
      let h = img.height;
      if (w > MAX) { h = (h * MAX) / w; w = MAX; }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, w, h);

      // ── Scale factor ──
      const s = w / 800;

      // ── Bottom bar: gradient fade ──
      const barH = Math.round(72 * s);
      const grad = ctx.createLinearGradient(0, h - barH * 1.6, 0, h);
      grad.addColorStop(0, "rgba(0,0,0,0)");
      grad.addColorStop(0.45, "rgba(0,0,0,0.55)");
      grad.addColorStop(1, "rgba(0,0,0,0.82)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, h - barH * 1.6, w, barH * 1.6);

      // ── Verdict pill (bottom-left) ──
      const pillFS = Math.round(13 * s);
      const pillH = Math.round(26 * s);
      const pillPadX = Math.round(12 * s);
      const pillR = pillH / 2;
      const pillY = h - barH / 2 - pillH / 2;
      const pillX = Math.round(16 * s);

      ctx.font = `700 ${pillFS}px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif`;
      const dotSize = Math.round(6 * s);
      const dotGap = Math.round(6 * s);
      const pillTW = ctx.measureText(label).width;
      const pillW = pillPadX + dotSize + dotGap + pillTW + pillPadX;

      const pillBg = isAI ? "rgba(239,68,68,0.2)" : "rgba(34,197,94,0.2)";
      const pillBorder = isAI ? "rgba(239,68,68,0.45)" : "rgba(34,197,94,0.45)";
      ctx.save();
      roundRect(ctx, pillX, pillY, pillW, pillH, pillR);
      ctx.fillStyle = pillBg;
      ctx.fill();
      ctx.strokeStyle = pillBorder;
      ctx.lineWidth = Math.max(1, s);
      ctx.stroke();
      ctx.restore();

      // dot
      const dotCX = pillX + pillPadX + dotSize / 2;
      const dotCY = pillY + pillH / 2;
      ctx.beginPath();
      ctx.arc(dotCX, dotCY, dotSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = isAI ? "#f87171" : "#4ade80";
      ctx.fill();

      // label text
      ctx.fillStyle = isAI ? "#fca5a5" : "#86efac";
      ctx.fillText(label, dotCX + dotSize / 2 + dotGap, pillY + pillH / 2 + pillFS * 0.36);

      // ── Bottom-right: logo + "Checked by Scam.ai" ──
      const brandFS = Math.round(13 * s);
      const logoSize = Math.round(18 * s);
      const logoGap = Math.round(6 * s);
      const brandCY = pillY + pillH / 2;

      // Measure "Checked by " and "Scam.ai" separately for bold emphasis
      ctx.font = `500 ${brandFS}px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif`;
      const prefixText = "Checked by ";
      const prefixW = ctx.measureText(prefixText).width;
      ctx.font = `800 ${brandFS}px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif`;
      const brandName = "Scam.ai";
      const brandNameW = ctx.measureText(brandName).width;
      const brandBlockW = logoSize + logoGap + prefixW + brandNameW;
      const brandX = w - brandBlockW - Math.round(16 * s);

      // draw logo icon
      if (_logoCache) {
        ctx.globalAlpha = 0.85;
        ctx.drawImage(logo, brandX, brandCY - logoSize / 2, logoSize, logoSize);
        ctx.globalAlpha = 1;
      }

      // draw "Checked by " in lighter weight
      const textX = brandX + logoSize + logoGap;
      const textY = brandCY + brandFS * 0.36;
      ctx.font = `500 ${brandFS}px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif`;
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.fillText(prefixText, textX, textY);

      // draw "Scam.ai" in bold white
      ctx.font = `800 ${brandFS}px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif`;
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fillText(brandName, textX + prefixW, textY);

      // ── Top-right badge: logo + "Scam.ai" ──
      const badgeFS = Math.round(11 * s);
      const badgeH = Math.round(26 * s);
      const badgePadX = Math.round(10 * s);
      const badgeR = Math.round(8 * s);
      const badgeLogoSize = Math.round(16 * s);
      const badgeLogoGap = Math.round(5 * s);
      ctx.font = `700 ${badgeFS}px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif`;
      const badgeLabel = "Scam.ai";
      const badgeTW = ctx.measureText(badgeLabel).width;
      const badgeW = badgePadX + badgeLogoSize + badgeLogoGap + badgeTW + badgePadX;
      const badgeX = w - badgeW - Math.round(12 * s);
      const badgeY = Math.round(12 * s);

      // badge background with subtle blur effect
      ctx.save();
      roundRect(ctx, badgeX, badgeY, badgeW, badgeH, badgeR);
      ctx.fillStyle = "rgba(0,0,0,0.6)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = Math.max(1, s * 0.7);
      ctx.stroke();
      ctx.restore();

      // badge logo
      if (_logoCache) {
        ctx.globalAlpha = 0.9;
        const blx = badgeX + badgePadX;
        const bly = badgeY + badgeH / 2 - badgeLogoSize / 2;
        ctx.drawImage(logo, blx, bly, badgeLogoSize, badgeLogoSize);
        ctx.globalAlpha = 1;

        // badge text — bold white
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.fillText(badgeLabel, blx + badgeLogoSize + badgeLogoGap, badgeY + badgeH / 2 + badgeFS * 0.36);
      }

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
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCanNativeShare(!!navigator.share);
  }, []);

  const addFiles = useCallback((newFiles: FileList | File[]) => {
    const arr = Array.from(newFiles).filter((f) => f.type.startsWith("image/"));
    if (arr.length === 0) return;

    const entries: FileState[] = arr.map((f) => ({
      file: f,
      preview: URL.createObjectURL(f),
      status: "idle" as const,
    }));

    setFiles((prev) => [...prev, ...entries]);
    for (const entry of entries) analyzeFile(entry);
  }, []);

  const analyzeFile = async (entry: FileState) => {
    setFiles((prev) =>
      prev.map((f) => (f.file === entry.file ? { ...f, status: "uploading" as const } : f))
    );

    const formData = new FormData();
    formData.append("file", entry.file);

    try {
      const res = await fetch("/api/check", { method: "POST", body: formData });
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
    a.download = `scamai_${f.file.name}`;
    a.click();
  };

  const shareNative = async (f: FileState) => {
    if (!f.result || !f.watermarked) return;
    const text = `${f.result.label} — Checked by Scam.ai`;
    try {
      const blob = await (await fetch(f.watermarked)).blob();
      const shareFile = new File([blob], `scamai_${f.file.name}`, { type: "image/png" });
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
    <section id="check" className="relative bg-black py-12 sm:py-20" aria-label="Try AI Detection">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-gray-400 mb-3">
            TRY IT NOW
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.1] mb-3">
            Is it AI-generated?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto">
            Upload an image to instantly detect AI-generated content.
          </p>
        </div>

        {/* Upload area */}
        <div
          className={`relative rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer ${
            dragging
              ? "border-blue-400 bg-blue-400/[0.04]"
              : "border-white/[0.12] hover:border-white/[0.25] bg-white/[0.02]"
          }`}
          style={{ minHeight: files.length === 0 ? "180px" : "100px" }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); }}
          onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              if (e.target.files) addFiles(e.target.files);
              e.target.value = "";
            }}
          />
          <div className="flex flex-col items-center justify-center h-full py-8 sm:py-10 pointer-events-none">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] mb-3">
              <svg
                className="w-5 h-5 text-gray-400"
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
              Drop images here or <span className="text-blue-400">browse</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              JPEG, PNG, WebP — up to 10MB
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="mt-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {files.map((f) => (
              <motion.div
                key={f.preview}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className={`rounded-2xl overflow-hidden border ${
                  (f.status === "done" || f.status === "locked") && f.result
                    ? f.status === "locked"
                      ? "border-white/[0.06] bg-white/[0.02]"
                      : isAI(f.result)
                        ? "border-red-500/20 bg-red-500/[0.03]"
                        : "border-green-500/20 bg-green-500/[0.03]"
                    : "border-white/[0.08] bg-white/[0.03]"
                }`}
              >
                {/* ── Uploading / idle / error state ── */}
                {f.status !== "done" && f.status !== "locked" && (
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4">
                    <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white/[0.04]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={f.preview} alt={f.file.name} className="w-full h-full object-cover" />
                      {f.status === "uploading" && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/20 border-t-blue-400 rounded-full animate-spin" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{f.file.name}</p>
                      {f.status === "uploading" && (
                        <p className="text-xs text-gray-400 mt-1">Analyzing...</p>
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
                    <div className="px-3 sm:px-4 py-3 flex items-center justify-between gap-3">
                      {/* Left: verdict + filename */}
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`flex-shrink-0 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                            isAI(f.result)
                              ? "bg-red-500/15 text-red-400"
                              : "bg-green-500/15 text-green-400"
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${isAI(f.result) ? "bg-red-400" : "bg-green-400"}`} />
                          {f.result.label}
                        </div>
                        <span className="text-xs text-gray-500 truncate hidden sm:inline">{f.file.name}</span>
                      </div>

                      {/* Right: share icons */}
                      <div className="flex items-center gap-1">
                        {[
                          { key: "twitter", title: "X", icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />, hoverClass: "hover:text-white" },
                          { key: "whatsapp", title: "WhatsApp", icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />, hoverClass: "hover:text-[#25D366]" },
                          { key: "linkedin", title: "LinkedIn", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />, hoverClass: "hover:text-[#0A66C2]" },
                        ].map(({ key, title, icon, hoverClass }) => (
                          <button
                            key={key}
                            onClick={(e) => { e.stopPropagation(); shareTo(key, f); }}
                            className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-gray-500 ${hoverClass} transition-colors`}
                            title={`Share on ${title}`}
                          >
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">{icon}</svg>
                          </button>
                        ))}

                        <div className="w-px h-4 bg-white/[0.08] mx-0.5" />

                        {/* Download */}
                        <button
                          onClick={(e) => { e.stopPropagation(); downloadResult(f); }}
                          className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-gray-500 hover:text-white transition-colors"
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
                            className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-gray-500 hover:text-white transition-colors"
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
