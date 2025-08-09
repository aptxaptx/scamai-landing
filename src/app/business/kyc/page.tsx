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
          <p className="mt-6 text-white/80 text-lg max-w-3xl mx-auto">
            Traditional KYC systems struggle with modern deepfake technology. Fraudsters use sophisticated AI-generated videos and images to bypass verification, leaving businesses vulnerable to identity fraud and financial losses.
          </p>
        </div>
      </section>

      {/* Page background with card styling */}
      <div
        className="absolute inset-0 -z-10 opacity-60 bg-cover bg-center"
        style={{ backgroundImage: "url('/kyc.webp')" }}
        aria-hidden
      />
    </SiteShell>
  );
}

