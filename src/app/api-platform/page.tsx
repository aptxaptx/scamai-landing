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
          <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight leading-[0.95] md:leading-[1.05] max-w-4xl mx-auto">
            The platform for<br />
            AI misuse detection
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(14px,2vw,18px)] max-w-2xl mx-auto">
            Simple APIs for deepfakes, GenAI media, and voice clones.<br />
            Fast, reliable, and ready for production.
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
            One API for Deepfake,<br />GenAI, and Voice Clone detection
          </h2>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-white/80 text-lg leading-snug text-center">
              Ship trusted verification into sign‑ups, content uploads, and realtime experiences. Our models return clear signals and confidence scores you can act on.
            </p>
            <p className="text-white/80 text-lg leading-snug text-center mt-4">
              From KYC to social platforms and loan company, reduce fraud losses while keeping good users moving.
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

      {/* Flagship models */}
      <section className="mt-14">
        <div className="text-center">
          <h2 className="text-[clamp(22px,4.5vw,44px)] font-semibold tracking-tight">Flagship models</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Our frontier detectors built for accuracy and robustness across real-world conditions.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "OnlyFace — Deepfake Detector",
              desc: "Best for KYC, liveness, and visual fraud.",
              bullets: [
                "Selfie + document checks",
                "Face swap & morph detection",
                "Image & video support",
                "Camera/lighting robustness",
              ],
            },
            {
              name: "Visual Authenticity — GenAI Detector",
              desc: "Detect AI‑generated images & video.",
              bullets: [
                "Model fingerprints & artifacts",
                "Explained confidence scores",
                "Works across major models",
                "Realtime & batch",
              ],
            },
            {
              name: "Auditory Guardian — Audio Clone",
              desc: "Identify voice clones & synthetic speech.",
              bullets: [
                "Stream + file uploads",
                "Speaker verification",
                "Spectral + waveform features",
                "Language‑agnostic",
              ],
            },
          ].map(({ name, desc, bullets }) => (
            <article key={name} className="relative border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="mt-2 text-sm text-white/80">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2"><span aria-hidden>✓</span><span>{b}</span></li>
                ))}
              </ul>
              <a href="/demo" className="mt-6 inline-flex text-sm font-semibold text-white/90 underline underline-offset-4">Learn more</a>
            </article>
          ))}
        </div>
      </section>

      {/* Access the power of our models with APIs */}
      <section className="mt-16">
        <h2 className="text-[clamp(22px,4.5vw,44px)] font-semibold tracking-tight text-center">
          Access the power of our models with APIs
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Responses API", desc: "Single-call classification with scores, reasons, and regions." },
            { title: "Realtime API", desc: "Low‑latency video & audio streams for liveness and calls." },
            { title: "Batch API", desc: "Async processing with webhooks for large backfills." },
          ].map((x) => (
            <div key={x.title} className="p-5">
              <h3 className="font-semibold">{x.title}</h3>
              <p className="mt-2 text-sm text-white/80">{x.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Built-in tools */}
      <section className="mt-16">
        <h2 className="text-[clamp(22px,4.5vw,44px)] font-semibold tracking-tight text-center">
          Extend protection with built‑in tools
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {[
            {
              title: "Signal Explorer",
              desc: "Inspect pixel, spectral, and temporal signals that drive model decisions—perfect for analysts and auditors.",
            },
            {
              title: "File scanning",
              desc: "Fast, accurate semantic scanning for bulk uploads. Drop in S3 paths and receive signed results.",
            },
          ].map((f) => (
            <article key={f.title} className="border border-white/10 p-6 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-4">
              <div className="aspect-video bg-white/5" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-white/80 text-sm">{f.desc}</p>
                <a href="/demo" className="mt-3 inline-flex text-sm font-semibold underline underline-offset-4">Learn more</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Customize models */}
      <section className="mt-16">
        <div className="text-center">
          <h2 className="text-[clamp(22px,4.5vw,44px)] font-semibold tracking-tight">Customize models for your needs</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Tune thresholds, adapt to new regions, and plug in domain‑specific signals.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="border border-white/10 p-6">
            <h3 className="text-lg font-semibold">Fine‑tuning & calibration</h3>
            <p className="mt-2 text-sm text-white/80">Optimize precision/recall for your risk tolerance. Calibrate per flow: onboarding, payout, or content.
            </p>
          </article>
          <article className="border border-white/10 p-6">
            <h3 className="text-lg font-semibold">Domain & region adaptation</h3>
            <p className="mt-2 text-sm text-white/80">Improve accuracy across camera types, languages, lighting, and demographics with lightweight adapters.</p>
          </article>
        </div>
      </section>

      {/* Integration & reliability */}
      <section className="mt-16">
        <div className="text-center">
          <h2 className="text-[clamp(22px,4.5vw,44px)] font-semibold tracking-tight">Build useful and reliable defenses</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            SDKs for Node and Python, event streams, and audit logs—designed for production scale and observability.
          </p>
          <a href="/demo" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm">Start exploring</a>
        </div>
        <div className="mt-8 aspect-[16/7] bg-white/5 border border-white/10" aria-hidden />
      </section>

      {/* Customers */}
      <section className="mt-16">
        <h2 className="text-[clamp(22px,4.5vw,44px)] font-semibold tracking-tight text-center">Trusted by modern organizations</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: "Fintech", blurb: "Onboard users safely with liveness + ID checks." },
            { name: "Dating", blurb: "Stop catfishing with image, video, and voice checks." },
            { name: "Social", blurb: "Label synthetic media and keep feeds authentic." },
            { name: "IP", blurb: "Detect AI remixes and derivative content." },
          ].map((c) => (
            <article key={c.name} className="border border-white/10 p-4">
              <div className="h-40 bg-white/5 mb-3" aria-hidden />
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-sm text-white/80 mt-1">{c.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Enterprise features */}
      <section className="mt-16">
        <h2 className="text-[clamp(22px,4.5vw,44px)] font-semibold tracking-tight text-center">Enterprise‑grade features for operating at scale</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-white/10 p-6">
            <h3 className="font-semibold">Security & data privacy</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Zero data retention by request</li>
              <li>Data encryption in transit (TLS 1.2+) & at rest (AES‑256)</li>
              <li>SSO & MFA</li>
              <li>HIPAA BAA & SOC 2 Type II (on request)</li>
            </ul>
          </div>
          <div className="border border-white/10 p-6">
            <h3 className="font-semibold">Administrative controls</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Role‑based access & project scoping</li>
              <li>Usage limits & overage guards</li>
              <li>Granular audit logs & event streams</li>
              <li>Region routing</li>
            </ul>
          </div>
          <div className="border border-white/10 p-6">
            <h3 className="font-semibold">Access to ScamAI experts</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Dedicated deployment support</li>
              <li>Best‑practice guidance from solutions architects</li>
              <li>Custom signal & workflow design</li>
              <li>Incident response playbooks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section className="mt-16 rounded-2xl border border-white/10 p-8 text-center">
        <h2 className="text-[clamp(22px,4.5vw,44px)] font-semibold tracking-tight">Build with ScamAI</h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">
          Start with a sandbox key or book a 25‑minute walkthrough with our team.
        </p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <a href="/demo" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm">Start exploring</a>
          <a href="/demo" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm">Talk to our team</a>
        </div>
      </section>
    </SiteShell>
  );
}