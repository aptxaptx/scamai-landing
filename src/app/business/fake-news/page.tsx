import SiteShell from "@/components/SiteShell";

export const metadata = {
  title: "Fake News & Misinformation — ScamAI",
  description: "Flag AI-generated media and misleading narratives quickly.",
};

export default function FakeNewsPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-6">
        <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
          <p className="text-white text-base mb-3">Solutions for Media Integrity</p>
          <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight max-w-4xl mx-auto">
            Flag AI-generated media and misleading narratives quickly.
          </h1>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">GenAI</span>
          </div>
        </div>
      </section>

      {/* Supporting copy */}
      <section className="mb-8">
        <div className="text-center">
          <div className="mt-2 max-w-2xl mx-auto">
            <p className="text-white/80 text-lg leading-relaxed">
              Spot manipulated images, voice clones, and synthetic video before they spread.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mt-4">
              Protect your audience with automated, explainable detection and clear signals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="mb-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-3">Keep misinformation out.</h3>
            <p className="text-white/80 text-base mb-6">Add a trusted layer for content authenticity checks.</p>
            <a
              href="https://cal.com/scamai/25min?overlayCalendar=true"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Page background */}
      <div
        className="fixed inset-0 -z-10 opacity-60 bg-cover bg-center"
        style={{ backgroundImage: "url('/fakenews.webp')" }}
        aria-hidden
      />
    </SiteShell>
  );
}