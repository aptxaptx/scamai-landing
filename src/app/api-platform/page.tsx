import SiteShell from "@/components/SiteShell";

export const metadata = {
  title: "API Platform — ScamAI",
  description: "Build on ScamAI's models for deepfake, GenAI, and audio clone detection.",
};

export default function ApiPlatformPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl grid place-items-center">
        <div className="relative z-10 text-center p-10 md:p-16 lg:p-20">
          <h1 className="text-[clamp(32px,7vw,64px)] font-bold tracking-tight max-w-5xl mx-auto">
            The fastest and most powerful platform for AI misuse detection
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(15px,2.2vw,20px)] max-w-3xl mx-auto">
            Build with battle‑tested models for deepfakes, GenAI media, and voice clones. Simple APIs. Real protection.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="https://cal.com/scamai/25min?overlayCalendar=true"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm"
            >
              Contact Sales
            </a>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm"
            >
              Start building ↗
            </a>
          </div>
        </div>
      </section>

      {/* Models grid */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            name: "Deepfake Detection",
            blurb: "Best for KYC, liveness, and visual fraud.",
            bullets: [
              "Image & video support",
              "Face swap & morph detection",
              "Document & selfie checks",
              "Robust to lighting and camera quality",
            ],
          },
          {
            name: "GenAI Detection",
            blurb: "Detect AI‑generated images and video.",
            bullets: [
              "Model fingerprint & artifact analysis",
              "Works across major diffusion & video models",
              "Confidence scores with explanations",
              "Batch & realtime endpoints",
            ],
          },
          {
            name: "Audio Clone Detection",
            blurb: "Identify voice clones and synthetic speech.",
            bullets: [
              "Waveform + spectral features",
              "Realtime stream & file uploads",
              "Speaker verification support",
              "Language‑agnostic",
            ],
          },
        ].map(({ name, blurb, bullets }) => (
          <article
            key={name}
            className="relative rounded-2xl bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors overflow-hidden border border-white/10 min-h-[320px]"
          >
            <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
            <p className="mt-2 text-sm text-white/80">{blurb}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://cal.com/scamai/25min?overlayCalendar=true"
              className="mt-6 inline-flex text-sm font-semibold text-white/90 underline underline-offset-4"
            >
              Talk to us
            </a>
          </article>
        ))}
      </section>

      {/* API section */}
      <section className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Access the power of our models with APIs</h2>
        <p className="mt-2 text-white/80 max-w-2xl">
          Simple REST endpoints for sync and async processing, realtime streaming for liveness and voice, and batch for large jobs.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Responses API", desc: "Single call classification with scores and signals." },
            { title: "Realtime API", desc: "Low‑latency streams for video and audio checks." },
            { title: "Batch API", desc: "Process millions of assets with async webhooks." },
          ].map((x) => (
            <div key={x.title} className="rounded-xl border border-white/10 bg-black/30 p-5">
              <h3 className="font-semibold">{x.title}</h3>
              <p className="mt-2 text-sm text-white/80">{x.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}