export const metadata = {
  title: "Business Use Case — ScaMai",
  description: "Explore ScaMai's AI misuse prevention solutions tailored for businesses.",
};

import SiteShell from "@/components/SiteShell";

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

      {/* Category grid */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "KYC/ID Verification",
            desc: "Simplify reports, run analyses, and produce forecasts, instantly.",
            image: "./kyc.webp",
          },
          {
            title: "Dating Apps",
            desc: "Summarize data, uncover insights, and create campaigns in minutes.",
            image: "/dating.webp",
          },
          {
            title: "Impersonation",
            desc: "Build and ship faster with AI support for coding, testing, and docs.",
            image: "/impersonation.webp",
          },
          {
            title: "Fake News & Misinformation",
            desc: "Automate workflows and keep teams aligned with reliable insights.",
            image: "/fakenews.webp",
          },
          {
            title: "IP/Copyright Protection",
            desc: "Resolve issues quicker with summaries, suggested replies, and routing.",
            image: "/copyright.webp",
          },
          {
            title: "Legal & Compliance",
            desc: "Draft, review, and audit with policy-aware assistance and checks.",
            image: "/legal.webp",
          },
        ].map((card) => (
          <article
            key={card.title}
            className="relative rounded-2xl   p-6 md:p-8 overflow-hidden hover:bg-white/10 transition-colors"
          >
            <div
              className="absolute inset-0 -z-10 opacity-80 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${card.image})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 -z-10 bg-black/10" aria-hidden="true" />
        
            <h2 className="mt-4 text-lg font-semibold tracking-tight">{card.title}</h2>
            <p className="mt-2 text-sm text-white/80">{card.desc}</p>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}

