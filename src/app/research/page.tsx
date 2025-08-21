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
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "ScamNet Database",
            desc: "Large-scale threat intelligence database with real-time query capabilities.",
            href: "/research/large-scale-database",
          },
          {
            title: "Publications & Datasets",
            desc: "Research papers, datasets, and publications advancing fraud detection and AI security.",
            href: "/research/publication",
          },
          {
            title: "AI-Generated Media",
            desc: "Detect synthetic images, videos, and multimedia content using advanced AI models.",
            href: "/models/ai-generated-media",
          },
          {
            title: "Deepfakes",
            desc: "Real-time detection of deepfake videos and facial manipulation techniques.",
            href: "/models/deepfakes",
          },
          {
            title: "Voice Clones",
            desc: "Audio authenticity verification and voice synthesis detection algorithms.",
            href: "/models/voice-clones",
          },
          {
            title: "Scam Text Detection",
            desc: "NLP models for identifying fraudulent messages and social engineering attempts.",
            href: "/models/scam-text-detection",
          },
          {
            title: "Malicious Links & QR Codes",
            desc: "URL analysis and QR code security for threat detection and prevention.",
            href: "/models/link-qr-code",
          },
        ].map((card) => (
          <article
            key={card.title}
            className="relative border border-white/15 rounded-xl p-6 hover:border-white/25 transition-all duration-200 group cursor-pointer"
          >
            <h2 className="text-lg font-semibold tracking-tight text-white">{card.title}</h2>
            <p className="mt-3 text-sm text-white/75 leading-relaxed">{card.desc}</p>
            <Link href={card.href} className="mt-4 inline-flex text-sm font-medium text-white/85 hover:text-white group-hover:translate-x-1 transition-all duration-200 relative z-10">
              Explore research →
            </Link>
            <Link href={card.href} aria-label={`Open ${card.title}`} className="absolute inset-0" />
          </article>
        ))}
      </section>

      {/* Plain black background (use global body bg) */}
    </SiteShell>
  );
}
