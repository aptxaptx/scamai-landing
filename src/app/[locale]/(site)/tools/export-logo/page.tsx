"use client";

import { useEffect, useRef, useState } from "react";

export default function ExportLogoPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const width = 1024;
    const height = 256;
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(DPR, DPR);

    // Clear transparent background
    ctx.clearRect(0, 0, width, height);

    // Load svg logo
    const img = new Image();
    // Allow cross‑origin loading of local asset
    img.crossOrigin = "anonymous";
    img.src = "/logo.svg";
    img.onload = () => {
      const iconSize = 128; // px
      const paddingX = 48;
      const paddingY = 64;

      // Draw logo icon
      ctx.drawImage(img, paddingX, paddingY, iconSize, iconSize);

      // Draw text
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "700 96px Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"";
      ctx.textBaseline = "middle";
      ctx.fillText("Reality Inc.", paddingX + iconSize + 32, paddingY + iconSize / 2);

      setReady(true);
    };
  }, []);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "reality-inc-logo.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <main className="max-w-5xl mx-auto px-5 md:px-8 py-12">
      <h1 className="text-xl font-semibold text-white">Export Logo</h1>
      <p className="mt-2 text-white/70">This tool renders `public/logo.svg` with the text “Reality Inc.” and lets you download a transparent PNG.</p>

      <div className="mt-6 rounded-2xl border border-white/10 p-4 bg-zinc-900/5 overflow-auto">
        <canvas ref={canvasRef} className="block" />
      </div>

      <button
        onClick={handleDownload}
        disabled={!ready}
        className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/5 px-4 py-2 font-semibold disabled:opacity-50"
      >
        Download PNG
      </button>
    </main>
  );
}


