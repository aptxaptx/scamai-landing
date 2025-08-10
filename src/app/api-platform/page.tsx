import SiteShell from "@/components/SiteShell";
import Link from "next/link";

export const metadata = {
  title: "API Platform — ScamAI",
  description: "Build with models for deepfake, GenAI, and audio clone detection.",
};

export default function ApiPlatformPage() {
  return (
    <SiteShell>
      {/* Hero (KYC-like structure) */}
      <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-6">
        {/* Breadcrumb (left-aligned) */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-14 mt-4">
          <div className="flex items-center justify-start text-sm">
            <div className="text-white/70">
              <Link href="/business" className="hover:text-white/90">Business</Link>
              <span className="mx-2">/</span>
              <span className="text-white/90">API Platform</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
          <p className="text-white text-base mb-4">Build with ScamAI</p>
          <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight max-w-4xl mx-auto">
            The platform for AI misuse detection<br />
            you can ship today
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(14px,2vw,18px)] max-w-2xl mx-auto">
            Simple APIs for deepfakes, GenAI media, and voice clones. Fast, reliable, and ready for production.
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">Deepfake</span>
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">GenAI</span>
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">Audio</span>
          </div>

          {/* Hero video placeholder */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="relative w-full overflow-hidden rounded-lg border border-white/20 bg-white/5">
              <div className="aspect-video grid place-items-center text-white/70 text-sm">
                Video placeholder — platform overview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform overview (problem-style section) */}
      <section className="mb-8">
        <div className="text-center">
          <h2 className="text-[clamp(24px,5vw,48px)] font-normal tracking-tight max-w-4xl mx-auto">
            One API for Deepfake, GenAI, and Voice Clone detection
          </h2>
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-white/80 text-lg leading-relaxed text-center">
              Ship trusted verification into sign‑ups, content uploads, and realtime experiences. Our models return clear signals and confidence scores you can act on.
            </p>
            <p className="text-white/80 text-lg leading-relaxed text-center mt-6">
              From KYC to social platforms and payments, reduce fraud losses while keeping good users moving.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary video placeholder (dashboard/demo) */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-lg border border-white/20 bg-white/5">
          <div className="aspect-video grid place-items-center text-white/70 text-sm">
            Video placeholder — API usage / dashboard demo
          </div>
        </div>
      </div>

      {/* Value props */}
      <section className="mt-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-1">Developer‑friendly</h4>
            <p className="text-white/75 text-sm">Clean REST, streaming, and batch. Clear JSON with scores and reasons.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-1">Fast & scalable</h4>
            <p className="text-white/75 text-sm">Low‑latency endpoints and horizontal scale for peak traffic.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-1">Enterprise‑grade</h4>
            <p className="text-white/75 text-sm">Audit‑ready logs, robust uptime, and security best practices.</p>
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="mb-12 mt-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Start building on ScamAI</h3>
            <p className="text-white/80 text-base mb-6">Get API access and a 25‑minute walkthrough.</p>
            <a
              href="https://cal.com/scamai/25min?overlayCalendar=true"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}