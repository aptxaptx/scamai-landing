export const metadata = {
  title: "Research — ScamAI",
  description: "Explore ScamAI's research in AI detection and prevention technologies.",
};

import SiteShell from "@/components/SiteShell";
import Link from "next/link";

export default function ResearchPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl backdrop-blur-sm grid place-items-center">
        <div className="relative z-10 text-center p-10 md:p-16 lg:p-20">
          <h1 className="text-[clamp(32px,7vw,64px)] font-bold tracking-tight">
            Research
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(15px,2.2vw,20px)] max-w-3xl mx-auto">
            Cutting-edge research in AI detection, prevention, and security technologies.
          </p>
        </div>
      </section>

      {/* Research areas grid */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: "AI-Generated Media",
            desc: "Detection and analysis of AI-generated images, videos, and multimedia content.",
            href: "/research/ai-generated-media",
          },
          {
            title: "Deepfakes",
            desc: "Advanced detection methods for deepfake videos and synthetic media.",
            href: "/research/deepfakes",
          },
          {
            title: "Voice Clones",
            desc: "Research on voice synthesis detection and audio authenticity verification.",
            href: "/research/voice-clones",
          },
          {
            title: "Messages",
            desc: "Natural language processing for identifying fraudulent and scam text content.",
            href: "/research/scam-text-detection",
          },
          {
            title: "Link/QR Code",
            desc: "Detection and analysis of malicious URLs and QR codes for security research.",
            href: "/research/link-qr-code",
          },
          {
            title: "ScamDB",
            desc: "Scalable database systems for storing and querying detection results.",
            href: "/research/large-scale-database",
          },
        ].map((card) => (
          <article
            key={card.title}
            className="relative rounded-2xl p-6 md:p-8 overflow-hidden hover:bg-white/10 transition-colors min-h-[200px] cursor-pointer"
          >
            <h2 className="text-lg font-semibold tracking-tight">{card.title}</h2>
            <p className="mt-2 text-sm text-white/80">{card.desc}</p>
            <Link href={card.href} className="mt-4 inline-flex text-sm font-semibold text-white/90 underline underline-offset-4 relative z-10">
              Learn more →
            </Link>
            <Link href={card.href} aria-label={`Open ${card.title}`} className="absolute inset-0" />
          </article>
        ))}
      </section>

      {/* Plain black background (use global body bg) */}
    </SiteShell>
  );
}
