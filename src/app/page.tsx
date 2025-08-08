import SiteShell from "@/components/SiteShell";

export default function Home() {
  const secondaryLinks: string[] = [];

  return (
    <SiteShell secondaryLinks={secondaryLinks}>
      <section className="relative overflow-hidden rounded-2xl border border-white/10 min-h-[52vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] grid place-items-center">
          <div className="hero-image-bg" aria-hidden="true" />
          <div className="hero-image-vignette" aria-hidden="true" />
          <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center">
            <h1 className="text-[clamp(32px,7vw,64px)] font-bold tracking-tight">
              Prevent Misuse of AI
            </h1>
            <p className="mt-4 text-white/85 text-[clamp(15px,2.2vw,20px)] max-w-2xl mx-auto">
              AI Models for Visual , Audio and Syntax Detection
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm"
              >
                Learn more
              </a>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm"
              >
                Demo
              </a>
            </div>
          </div>
        </section>

        {/* 3-card section */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Visual Detection",
              desc: "Spot AI-generated images, deepfakes, and manipulations with robustness checks.",
            },
            {
              title: "Audio Detection",
              desc: "Identify cloned voices and synthetic audio with signal-level analysis.",
            },
            {
              title: "Syntax Detection",
              desc: "Analyze linguistic patterns to flag AI-written or prompt-engineered text.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors overflow-hidden"
            >
              {card.title === "Visual Detection" && (
                <>
                  <div className="absolute inset-0 -z-10 bg-[url('/visual.webp')] bg-cover bg-left-top opacity-40" />
                  <div className="absolute inset-0 -z-10 bg-black/20" />
                </>
              )}
              {card.title === "Audio Detection" && (
                <>
                  <div className="absolute inset-0 -z-10 bg-[url('https://i.pinimg.com/originals/d8/e6/eb/d8e6eb6b345ada088e2448947c483ab4.gif')] bg-cover bg-center opacity-40" />
                  <div className="absolute inset-0 -z-10 bg-black/20" />
                </>
              )}
              <h3 className="text-lg font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-white/80">{card.desc}</p>
              <a
                href="#"
                className="mt-4 inline-flex text-sm font-semibold text-white/90 underline underline-offset-4"
              >
                Learn more
              </a>
            </article>
          ))}
        </section>
    </SiteShell>
  );
}
