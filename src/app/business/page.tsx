export const metadata = {
  title: "Business Use Case — ScamAI",
  description: "Explore ScamAI's AI misuse prevention solutions tailored for businesses.",
};

import SiteShell from "@/components/SiteShell";
import Link from "next/link";

export default function BusinessPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl  backdrop-blur-sm grid place-items-center">
        <div className="relative z-10 text-center p-10 md:p-16 lg:p-20">
     
          <h1 className="text-[clamp(32px,7vw,64px)] font-bold tracking-tight">
             Use Cases
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(15px,2.2vw,20px)] max-w-3xl mx-auto">
            Our Models help you detect and prevent fraud from misuse of AI.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm"
            >
              Try now ↗
            </a>
          </div>
        </div>
      </section>

      {/* Featured use cases */}
      <section className="mt-6">
        <div className="text-center">
          <div className="text-xs tracking-widest uppercase text-white/60">Featured use cases</div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "IDV deepfake", badge: "Current focus" },
              { label: "Data", badge: "Current focus" },
              { label: "Enterprise cyber-security" },
              { label: "Consumer scam", badge: "End of 2025" },
            ].map(({ label, badge }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                {label}
                {badge ? (
                  <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/70">{badge}</span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "KYC/ID Verification",
            desc: "Detect forged IDs and deepfakes during onboarding.",
            image: "/kyc.webp",
            tag: "Deepfake",
            link: "/business/kyc",
          },
          {
            title: "Dating Apps",
            desc: "Stop catfishing with image, video, and voice checks.",
            image: "/dating.webp",
            tag: "GenAI",
            link: "/business/dating",
          },
          {
            title: "Impersonation",
            desc: "Block face and voice spoofing in real time.",
            image: "/impersonation.webp",
            tag: "Deepfake & Voiceclone",
            link: "/business/impersonation",
          },
          {
            title: "Fake News & Misinformation",
            desc: "Flag AI-generated media and misleading narratives quickly.",
            image: "/fakenews.webp",
            tag: "GenAI",
            link: "/business/fake-news",
          },
          {
            title: "IP/Copyright Protection",
            desc: "Detect unauthorized AI remixes and derivative content.",
            image: "/copyright.webp",
            tag: "Deepfake & GenAI",
            link: "/business/ip-copyright",
          },
          {
            title: "Legal & Compliance",
            desc: "Verify provenance and meet emerging AI regulations.",
            image: "/legal.webp",
            tag: "Deepfake",
            link: "/business/legal-compliance",
          },
        ].map((card) => (
          <article
            key={card.title}
            className="relative rounded-2xl   p-6 md:p-8 overflow-hidden hover:bg-white/10 transition-colors min-h-[260px] md:min-h-[320px]"
          >
            <div
              className="absolute inset-0 -z-10 opacity-80 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${card.image})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 -z-10 bg-black/10" aria-hidden="true" />
        
            <h2 className="mt-4 text-lg font-semibold tracking-tight">{card.title}</h2>
            <p className="mt-2 text-sm text-white/80">{card.desc}</p>
            <span className="absolute right-4 bottom-4 text-xs text-white/70">{card.tag}</span>
            {card.link && (
              <Link href={card.link} aria-label={`Open ${card.title}`} className="absolute inset-0">
                {/* overlay link */}
              </Link>
            )}
          </article>
        ))}
      </section>
    </SiteShell>
  );
}

