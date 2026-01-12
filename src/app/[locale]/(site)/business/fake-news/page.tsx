import SiteShell from "@/components/SiteShell";
import { Link } from "@/i18n/navigation";
export const metadata = {
  title: "Fake News & Misinformation — ScamAI",
  description: "Flag AI-generated media and misleading narratives quickly.",
};

export default function FakeNewsPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-6">
        {/* Breadcrumb (left-aligned) */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-14 mt-4">
          <div className="flex items-center justify-start text-sm">
            <div className="text-white/70">
              <Link href="/business" className="hover:text-white/90">Business</Link>
              <span className="mx-2">/</span>
              <span className="text-white/90">Fake News & Misinformation</span>
            </div>
          </div>
        </div>

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

      {/* Interactive Demo Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-lg border border-white/20 bg-gradient-to-br from-blue-500/10 to-green-500/10">
          <div className="aspect-video p-8 flex flex-col justify-center">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-300 text-xl">🔍</span>
                </div>
                <div className="text-white text-xl font-semibold">Real-time Detection</div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">See Fake News Detection in Action</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Watch our AI identify manipulated media, deepfakes, and synthetic content in real-time across news feeds, social media, and editorial workflows.
              </p>
              <div className="inline-flex items-center gap-4">
                <a href="/demo" className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors">
                  Try Detection Demo
                </a>
                <div className="flex items-center gap-2 text-white/70">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-sm">Live detection available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value props */}
      <section className="mt-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-1">Spot AI media instantly</h4>
            <p className="text-white/75 text-sm">Flag images, audio, and video before they trend.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-1">Context that informs</h4>
            <p className="text-white/75 text-sm">Clear signals your editors can trust.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-1">Moderate at scale</h4>
            <p className="text-white/75 text-sm">Automate checks across posts, comments, and streams.</p>
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="mb-12 mt-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-3">Keep misinformation out.</h3>
            <p className="text-white/80 text-base mb-6">Add a trusted layer for content authenticity checks.</p>
              <a
                href="/demo"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Bottom next link */}
      <div className="mt-10 w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-14">
        <div className="flex justify-end text-sm">
          <Link href="/business/ip-copyright" className="text-white/80 hover:text-white/90">Next: IP/Copyright Protection →</Link>
        </div>
      </div>

      {/* Page background */}
      <div
        className="fixed inset-0 -z-10 opacity-60 bg-cover bg-center"
        style={{ backgroundImage: "url('/fakenews.webp')" }}
        aria-hidden
      />
    </SiteShell>
  );
}