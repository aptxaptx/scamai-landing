import SiteShell from "@/components/SiteShell";
import Link from "next/link";

export const metadata = { title: "Types of Scams — ScamAI" };

export default function TypeOfScamsPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl backdrop-blur-sm grid place-items-center">
        <div className="relative z-10 text-center p-10 md:p-16 lg:p-20">
          <h1 className="text-[clamp(32px,7vw,64px)] font-bold tracking-tight">
            Types of Scams
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(15px,2.2vw,20px)] max-w-3xl mx-auto">
            Understanding the different types of scams and how ScamAI protects against them.
          </p>
        </div>
      </section>

      {/* Scam types grid */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Voice Cloning Scam",
            desc: "AI voice replicas impersonating trusted individuals to steal information.",
            href: "/stories/type-of-scams/voice-cloning",
          },
          {
            title: "Face Swapping Scam",
            desc: "Deepfake videos and images used for blackmail and fraud.",
            href: "/stories/type-of-scams/face-swapping",
          },
          {
            title: "AI-Generated Images Scam",
            desc: "Synthetic media designed to deceive and manipulate victims.",
            href: "/stories/type-of-scams/ai-generated-images",
          },
          {
            title: "Identity Theft Scam",
            desc: "Stealing personal information for fraud and unauthorized purchases.",
            href: "/stories/type-of-scams/identity-theft",
          },
          {
            title: "Financial Investment Scam",
            desc: "Fake investment opportunities with unrealistic returns.",
            href: "/stories/type-of-scams/financial-investment",
          },
          {
            title: "Romance Scam",
            desc: "Fake online relationships to extract money and gifts.",
            href: "/stories/type-of-scams/romance",
          },
        ].map((card) => (
          <article
            key={card.title}
            className="relative border border-white/15 rounded-xl p-6 hover:border-white/25 transition-all duration-200 group cursor-pointer flex flex-col h-full"
          >
            <div className="flex-1">
              <h2 className="text-lg font-semibold tracking-tight text-white mb-3">{card.title}</h2>
              <p className="text-sm text-white/75 leading-relaxed">{card.desc}</p>
            </div>
            <div className="mt-4">
              <Link href={card.href} className="inline-flex text-sm font-medium text-white/85 hover:text-white group-hover:translate-x-1 transition-all duration-200 relative z-10">
                Learn more →
              </Link>
            </div>
            <Link href={card.href} aria-label={`Open ${card.title}`} className="absolute inset-0" />
          </article>
        ))}
      </section>

      {/* Plain black background (use global body bg) */}
    </SiteShell>
  );
}

