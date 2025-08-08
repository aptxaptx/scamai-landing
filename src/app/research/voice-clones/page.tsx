export const metadata = {
  title: "Voice Clones Research — ScaMai",
  description: "Research on voice synthesis detection and audio authenticity verification.",
};

import SiteShell from "@/components/SiteShell";

export default function VoiceClonesPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden rounded-2xl backdrop-blur-sm grid place-items-center">
        <div className="relative z-10 text-center p-10 md:p-16 lg:p-20">
          <h1 className="text-[clamp(32px,7vw,64px)] font-bold tracking-tight">
            Voice Clones Research
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(15px,2.2vw,20px)] max-w-3xl mx-auto">
            Research on voice synthesis detection and audio authenticity verification.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
