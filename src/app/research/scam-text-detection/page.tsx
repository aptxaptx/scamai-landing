export const metadata = {
  title: "Scam Text Detection Research — ScaMai",
  description: "Natural language processing for identifying fraudulent and scam text content.",
};

import SiteShell from "@/components/SiteShell";

export default function ScamTextDetectionPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden rounded-2xl backdrop-blur-sm grid place-items-center">
        <div className="relative z-10 text-center p-10 md:p-16 lg:p-20">
          <h1 className="text-[clamp(32px,7vw,64px)] font-bold tracking-tight">
            Scam Text Detection Research
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(15px,2.2vw,20px)] max-w-3xl mx-auto">
            Natural language processing for identifying fraudulent and scam text content.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
