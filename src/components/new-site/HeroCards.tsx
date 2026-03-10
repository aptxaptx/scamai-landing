"use client";

import { Link } from "@/i18n/navigation";
import { trackCTA } from "@/lib/analytics";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { MorphingText } from "@/components/magicui/morphing-text";

const words = ["AI-Generated", "Deepfakes", "Voice Clones", "Fake IDs"];

export default function HeroCards() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center relative">
        {/* Flickering grid background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_40%,transparent_100%)]">
          <FlickeringGrid
            color="rgb(100, 80, 255)"
            maxOpacity={0.15}
            flickerChance={0.15}
            squareSize={3}
            gridGap={8}
          />
        </div>

        {/* Eyebrow */}
        <p className="text-[10px] font-semibold text-gray-500 tracking-[0.2em] uppercase sm:text-xs mb-8">
          AI Trust Platform
        </p>

        {/* Static line */}
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl text-white mb-2">
          Detect
        </h1>

        {/* Morphing word */}
        <MorphingText
          texts={words}
          className="h-14 sm:h-20 lg:h-24 text-[36pt] sm:text-[48pt] lg:text-[6rem] text-white mb-2"
        />

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-xl mt-4 mb-10">
          Industry-leading accuracy that fights fraud, detects synthetic media,
          and unifies trust signals — all through a single API.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
            onClick={() => trackCTA("talk_to_expert", "hero")}
          >
            Talk to an Expert
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href="https://app.scam.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 transition hover:text-white"
            onClick={() => trackCTA("get_started", "hero")}
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
