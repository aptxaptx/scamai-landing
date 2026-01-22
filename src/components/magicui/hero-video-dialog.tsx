"use client";

import * as React from "react";
import Image from "next/image";

type HeroVideoDialogProps = {
  className?: string;
  animationStyle?: "from-center" | "from-bottom" | "zoom";
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
};

export default function HeroVideoDialog({
  className,
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Hero Video",
}: HeroVideoDialogProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={className}>
      <button
        onClick={() => setOpen(true)}
        className="relative w-full max-w-[1100px] mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:bg-white/10 transition-colors"
        aria-label="Play video"
      >
        <Image
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="block w-full h-auto"
          width={1100}
          height={600}
        />
        {/* Bottom fade removed */}
        {/* Center play pill */}
        <span className="absolute inset-0 grid place-items-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/70 px-5 py-3 text-white backdrop-blur border border-white/10">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden>
              <path d="M0 0v14l12-7L0 0z" />
            </svg>
            <span className="text-sm font-medium">Watch Demo</span>
          </span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className={`relative w-full max-w-4xl aspect-video bg-black ${
              animationStyle === "from-bottom"
                ? "animate-[slideUp_.25s_ease]"
                : animationStyle === "zoom"
                ? "animate-[zoomIn_.25s_ease]"
                : "animate-[fadeIn_.25s_ease]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src={videoSrc}
              title="Hero video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}


