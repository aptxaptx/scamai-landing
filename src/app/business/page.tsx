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
          <article
            key={card.title}
            className="relative rounded-2xl   p-6 md:p-8 overflow-hidden hover:bg-white/10 transition-colors min-h-[260px] md:min-h-[320px]"
          >
            <div
              className="absolute inset-0 -z-10 opacity-80 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${card.image})` }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 -z-10 bg-black/10"
              aria-hidden="true"
            />

            <h2 className="mt-4 text-lg font-semibold tracking-tight">
              {card.title}
            </h2>
            <p className="mt-2 text-sm text-white/80">{card.desc}</p>
            <span className="absolute right-4 bottom-4 text-xs text-white/70">
              {card.tag}
            </span>
            {card.link && (
              <Link
                href={card.link}
                aria-label={`Open ${card.title}`}
                className="absolute inset-0"
              >
                {/* overlay link */}
              </Link>
            )}
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
