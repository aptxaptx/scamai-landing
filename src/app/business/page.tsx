export const metadata = {
  title: "Business Use Case — ScamAI",
  description:
    "Explore ScamAI's AI misuse prevention solutions tailored for businesses.",
};

import SiteShell from "@/components/SiteShell";
import Link from "next/link";

export default function BusinessPage() {
  return (
    <SiteShell>
      {/* Use Cases section removed as requested */}

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
            title: "Online Meeting",
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
          <Link key={card.title} href={card.link}>
            <article className="relative rounded-2xl p-6 md:p-8 overflow-hidden min-h-[260px] md:min-h-[320px] z-10 hover:scale-105 transition-transform duration-200 cursor-pointer">
              <div
                className="absolute inset-0 z-0 opacity-100 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${card.image})` }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 z-0 bg-black/20"
                aria-hidden="true"
              />

              <h2 className="relative z-10 mt-4 text-lg font-semibold tracking-tight text-white">
                {card.title}
              </h2>
              <p className="relative z-10 mt-2 text-sm text-white/90">
                {card.desc}
              </p>
              <span className="absolute right-4 bottom-4 z-10 text-xs text-white/80">
                {card.tag}
              </span>
            </article>
          </Link>
        ))}
      </section>

      {/* Background with same styling as landing page */}
      <div className="hero-image-bg fixed inset-0 -z-10" aria-hidden />
      <div className="hero-image-vignette fixed inset-0 -z-10" aria-hidden />
    </SiteShell>
  );
}
