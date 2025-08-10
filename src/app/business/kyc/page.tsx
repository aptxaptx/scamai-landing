import SiteShell from "@/components/SiteShell";
import Link from "next/link";

export const metadata = {
  title: "KYC/ID Verification — ScamAI",
  description: "Detect forged IDs and deepfakes during onboarding with ScaMai.",
};

export default function KycPage() {
  return (
    <SiteShell>
      {/* Hero above existing card(s) */}
      <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-6">
        {/* Breadcrumb (left-aligned) */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-14 mt-4">
          <div className="flex items-center justify-between text-sm">
            <div className="text-white/70">
              <Link href="/business" className="hover:text-white/90">Business</Link>
              <span className="mx-2">/</span>
              <span className="text-white/90">KYC/ID Verification</span>
            </div>
            <Link href="/business/dating" className="text-white/80 hover:text-white/90">Next: Dating Apps →</Link>
          </div>
        </div>

        <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
          <p className="text-white text-base mb-4">Solutions for KYC/ID Verification</p>
          <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight max-w-4xl mx-auto">
            Deepfake Detection<br />
            That Actually Works
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(14px,2vw,18px)] max-w-2xl mx-auto">
            OnlyFace model catches over 90% of sota deepfakes.<br />
            Keep your business safe. Keep your trust intact.
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">GenAI</span>
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">Deepfake</span>
            <span className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">Liveness & ID</span>
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <video
              className="w-full rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/deepfake_scamai.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* New section about the problem */}
      <section className="mb-8">
        <div className="text-center">
          <h2 className="text-[clamp(24px,5vw,48px)] font-normal tracking-tight max-w-4xl mx-auto">
            Over 90% KYC/ID Verification vendors<br />
            Failed to Detect Deepfakes
          </h2>
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-white/80 text-lg leading-relaxed text-center">
              Traditional KYC can't keep up with AI-generated fraud. Fake IDs, synthetic faces, and manipulated documents now bypass standard verification with ease.
            </p>
            <p className="text-white/80 text-lg leading-relaxed text-center mt-6">
              While most vendors fail to detect these forgeries, your business faces identity fraud, account takeovers, and compliance risks. You need detection that actually works.
            </p>
          </div>

          {/* Dashboard Video */}
          <div className="mt-12 max-w-4xl mx-auto">
            <video
              className="w-full rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/dashboard.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Value props */}
          <section className="mt-12">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
                <h4 className="text-white font-semibold mb-1">Stop fake signups</h4>
                <p className="text-white/75 text-sm">Block deepfake faces and forged IDs at onboarding.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
                <h4 className="text-white font-semibold mb-1">Cut fraud losses</h4>
                <p className="text-white/75 text-sm">Stop payout fraud and mule accounts early.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
                <h4 className="text-white font-semibold mb-1">Pass compliance audits</h4>
                <p className="text-white/75 text-sm">Clear, auditable KYC/AML signals.</p>
              </div>
            </div>
          </section>

          {/* CTA Card */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">KYC deepfakes, caught live.</h3>
              <p className="text-white/80 text-base mb-6">Add an extra layer of security to your KYC/ID Verification process.</p>
              <a
                href="https://cal.com/scamai/25min?overlayCalendar=true"
                className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom next link */}
      <div className="mt-10 w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-14">
        <div className="flex justify-end text-sm">
          <Link href="/business/dating" className="text-white/80 hover:text-white/90">Next: Dating Apps →</Link>
        </div>
      </div>

      {/* Page background with card styling */}
      <div
        className="fixed inset-0 -z-10 opacity-60 bg-cover bg-center"
        style={{ backgroundImage: "url('/kyc.webp')" }}
        aria-hidden
      />
    </SiteShell>
  );
}

