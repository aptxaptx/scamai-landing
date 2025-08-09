import SiteShell from "@/components/SiteShell";

export const metadata = {
  title: "KYC/ID Verification — ScamAI",
  description: "Detect forged IDs and deepfakes during onboarding with ScaMai.",
};

export default function KycPage() {
  return (
    <SiteShell>
      {/* Hero above existing card(s) */}
      <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-6">
     
        <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
          <p className="text-white text-base mb-4">Solutions for KYC/ID Verification</p>
          <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight max-w-4xl mx-auto">
            Deepfake Detection<br />
            That Actually Works
          </h1>



          <p className="mt-4 text-white/85 text-[clamp(14px,2vw,18px)] max-w-3xl mx-auto">
            OnlyFace model catches over 90% of sota deepfakes.<br />
            Keep your business safe. Keep your trust intact.
          </p>

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

          {/* CTA Card */}
          <div className="mt-12 max-w-2xl mx-auto">
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

      {/* Page background with card styling */}
      <div
        className="fixed inset-0 -z-10 opacity-60 bg-cover bg-center"
        style={{ backgroundImage: "url('/kyc.webp')" }}
        aria-hidden
      />
    </SiteShell>
  );
}

