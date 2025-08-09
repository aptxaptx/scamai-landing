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
          <h1 className="text-[clamp(28px,6.5vw,56px)] font tracking-tight">How to bypass over 90% of KYC/ID Verification using Deepfake</h1>



          <p className="mt-4 text-white/85 text-[clamp(14px,2vw,18px)] max-w-3xl mx-auto">
            Verify identities securely. Detect document forgeries and face swaps during onboarding.
          </p>
        </div>
      </section>

      {/* Existing card(s) remain unchanged below */}
      <section className="relative rounded-2xl bg-white/5 p-6 md:p-10 backdrop-blur-sm overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-60 bg-cover bg-center"
          style={{ backgroundImage: "url('/kyc.webp')" }}
          aria-hidden
        />
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">KYC/ID Verification</h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          Verify user identities securely. Detect document forgeries, face swaps
          onboarding to prevent account fraud.
        </p>

     
      </section>
    </SiteShell>
  );
}

