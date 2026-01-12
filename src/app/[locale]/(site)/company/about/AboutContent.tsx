"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import UseCasesMore from "./UseCasesMore";

export default function AboutContent() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);
  const heading = isDark ? "text-white" : "text-slate-900";
  const muted = isDark ? "text-white/70" : "text-slate-600";
  const soft = isDark ? "text-white/60" : "text-slate-700";
  const panel = isDark
    ? "border border-white/15 bg-white/5"
    : "border border-slate-200 bg-white shadow-sm";

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center">
            <p className={`text-xs tracking-widest uppercase ${muted}`}>Company</p>
            <h1 className={`mt-3 text-4xl md:text-6xl font-semibold tracking-tight ${heading}`}>
              Making the internet safe to trust
            </h1>
            <p className={`mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed ${soft}`}>
              Reality Inc. builds Scam AI Platform that identifies AI-generated deception across media, text, and voice. Our mission is to restore confidence online by verifying what is real—at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center">
            <h2 className={`text-sm font-semibold tracking-wider ${muted}`}>Mission</h2>
            <p className={`mt-3 text-2xl md:text-[28px] leading-snug max-w-3xl mx-auto ${isDark ? "text-white/90" : "text-slate-800"}`}>
              Build a trustworthy layer for the internet—so people,
              <br />
              businesses, and institutions can know what to believe.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center">
            <h2 className={`text-sm font-semibold tracking-wider ${muted}`}>What we build</h2>
          </div>
          <p className={`mt-3 text-2xl md:text-[28px] leading-snug max-w-3xl mx-auto text-center ${isDark ? "text-white/90" : "text-slate-800"}`}>
            One‑stop solution for scam/AI misuse prevention
            <br />
            for enterprises and individuals.
          </p>
          <div className="mt-4 grid gap-6">
            <div className="grid gap-5">
              {/* Foundation layer */}
              <div id="foundation" className={`rounded-3xl p-5 md:p-6 ${panel}`}>
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <div className={`${heading} font-semibold`}>Detection Infrastructure</div>
                  <div className={`text-xs tracking-widest uppercase ${muted}`}>Foundation Layer</div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  <MiniCard title="Models" description="Multimodal detectors across image, video, voice, and text." isDark={isDark} />
                  <MiniCard title="Database" description="Continuously updated ScamDB of signals, hashes, and adversarial patterns." isDark={isDark} />
                  <MiniCard title="APIs" description="Simple, stable APIs that deliver risk scores and guidance." isDark={isDark} />
                </div>
              </div>

              {/* Application Layer */}
              <div className={`rounded-3xl p-5 md:p-6 ${panel}`}>
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <div className={`${heading} font-semibold`}>Use cases</div>
                  <div className={`text-xs tracking-widest uppercase ${muted}`}>Application Layer</div>
                </div>
                <p className={`text-sm mb-4 ${soft}`}>
                  Our detection infrastructure generalizes across industries. Our initial focus areas are IDV deepfake and Data; together they represent a small portion of the overall addressable market.
                </p>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <MiniCard title="IDV deepfake" badge="Current focus" description="Authenticate KYC/IDV by detecting face swaps and synthetic identities." isDark={isDark} />
                  <MiniCard title="Data" badge="Current focus" description="Capture and enrich threat signals across platforms and channels." isDark={isDark} />
                  <MiniCard title="Enterprise cyber-security" description="Protect employees and systems from impersonation and phishing." isDark={isDark} />
                  <MiniCard title="Consumer scam" badge="End of 2025" description="Safeguard users from fraud across messages, calls, and social." isDark={isDark} />
                </div>
                <UseCasesMore />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center mb-6">
            <h2 className={`text-sm font-semibold tracking-wider ${muted}`}>Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <MiniCard title="Integrity & accountability" description="Do the right thing—especially when it’s difficult." isDark={isDark} />
            <MiniCard title="People first" description="Protect individuals and communities from harm. Optimize for long‑term trust over short‑term wins." isDark={isDark} />
            <MiniCard title="Rigor with humility" description="Seek truth through evidence, openness, and critique. Change our minds when the data says so." isDark={isDark} />
            <MiniCard title="Build for decades" description="Think long‑term. Favor simplicity, privacy, and durability in what we choose to create." isDark={isDark} />
          </div>
        </div>
      </section>

      {/* Team & partners CTAs */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <CTA title="People" subtitle="Meet the team building ScamAI" isDark={isDark} />
            <CTA title="Partnership" subtitle="Work with us to protect your users" isDark={isDark} />
          </div>
        </div>
      </section>
    </>
  );
}

type CardProps = { title: string; description: string; badge?: string; isDark: boolean };

function MiniCard({ title, description, badge, isDark }: CardProps) {
  const titleColor = isDark ? "text-white" : "text-slate-900";
  const badgeColor = isDark
    ? "text-white/70 border-white/15"
    : "text-slate-700 border-slate-200 bg-white";
  const bodyColor = isDark ? "text-white/70" : "text-slate-700";
  const surface = isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white shadow-sm";
  return (
    <div className={`rounded-2xl border p-5 ${surface}`}>
      <div className="flex items-center gap-2">
        <div className={`text-base font-semibold ${titleColor}`}>{title}</div>
        {badge ? (
          <span className={`text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5 ${badgeColor}`}>
            {badge}
          </span>
        ) : null}
      </div>
      <p className={`mt-1.5 text-sm leading-relaxed ${bodyColor}`}>{description}</p>
    </div>
  );
}

type CtaProps = { title: string; subtitle: string; isDark: boolean };

function CTA({ title, subtitle, isDark }: CtaProps) {
  const titleColor = isDark ? "text-white" : "text-slate-900";
  const bodyColor = isDark ? "text-white/70" : "text-slate-700";
  const surface = isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white shadow-sm";
  return (
    <div className={`rounded-2xl border p-5 md:p-6 ${surface}`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className={`text-base md:text-lg font-semibold ${titleColor}`}>{title}</div>
          <div className={`mt-1 text-sm ${bodyColor}`}>{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
