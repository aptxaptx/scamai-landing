import SiteShell from "@/components/SiteShell";
import { Link } from "@/i18n/navigation";
export const metadata = {
  title: "Impersonation — ScamAI",
  description: "Block face and voice spoofing in real time.",
};

export default function ImpersonationPage() {
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
              <span className="text-white/90">Impersonation</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
          <p className="text-white text-base mb-3">Solutions for Impersonation</p>
          <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight max-w-4xl mx-auto">
            Block face and voice spoofing in real time.
          </h1>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">Deepfake & Voiceclone</span>
          </div>
        </div>
      </section>

      {/* Video placeholder */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-lg border border-white/20 bg-white/5">
          <div className="aspect-video grid place-items-center text-white/70 text-sm">
            Video placeholder — replace with your .webm or .mp4
          </div>
        </div>
      </div>

      {/* Value props */}
      <section className="mt-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-1">Stop real-time spoofing</h4>
            <p className="text-white/75 text-sm">Catch face and voice clones during login and calls.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-1">Prevent account takeovers</h4>
            <p className="text-white/75 text-sm">Block deepfakes before they reach funds or data.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-1">Invisible security</h4>
            <p className="text-white/75 text-sm">Millisecond checks, no friction.</p>
          </div>
        </div>
      </section>

      {/* Supporting copy */}
      <section className="mb-8">
        <div className="text-center">
          <div className="mt-2 max-w-2xl mx-auto">
            <p className="text-white/80 text-lg leading-relaxed">
              Detect real-time face swaps and cloned voices across calls, uploads, and sign-ins.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mt-4">
              Add an extra layer of security without slowing down your users.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="mb-12 mt-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-3">Stop live impersonation.</h3>
            <p className="text-white/80 text-base mb-6">Protect calls, sign-ins, and KYC flows from spoofing attacks.</p>
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
          <Link href="/business/fake-news" className="text-white/80 hover:text-white/90">Next: Fake News & Misinformation →</Link>
        </div>
      </div>

      {/* Page background */}
      <div
        className="fixed inset-0 -z-10 opacity-60 bg-cover bg-center"
        style={{ backgroundImage: "url('/impersonation.webp')" }}
        aria-hidden
      />
    </SiteShell>
  );
}