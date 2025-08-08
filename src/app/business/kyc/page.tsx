import SiteShell from "@/components/SiteShell";

export const metadata = {
  title: "KYC/ID Verification — ScamAI",
  description: "Detect forged IDs and deepfakes during onboarding with ScaMai.",
};

export default function KycPage() {
  return (
    <SiteShell>
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

