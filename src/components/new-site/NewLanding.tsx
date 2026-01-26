import Link from "next/link";

export default function NewLanding() {
  return (
    <main className="bg-[#0b0f1f] text-white">
      <section className="relative overflow-hidden -mt-[73px] pt-[73px]">
        <div className="absolute inset-0 -top-[73px] bg-[#0b0f1f]" />
        <div 
          className="absolute inset-0 -top-[73px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero.svg)',
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 py-32 text-center sm:px-6">
          <p className="mb-6 text-sm text-gray-400">
            It provides what Multi-CDN can't.
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Virtual edge can
            <br />
            Assure consistent security
            <span className="inline-block animate-pulse">_</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 sm:text-xl">
            A unified layer of security, traffic control and serverless compute services on top of Edge platforms to improve the reliability, performance and affordability of online services.
          </p>
          <Link
            href="/demo"
            className="inline-block rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#0b0f1f] shadow-lg transition hover:bg-gray-100"
          >
            Book a Demo
          </Link>
        </div>
      </section>

      <section className="bg-[#0a1022]">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-3">
          {[
            {
              title: "Unified Detection",
              body: "Audio, video, image, and text signals in one pipeline.",
            },
            {
              title: "Actionable Verdicts",
              body: "Human-readable decisions your ops team can trust.",
            },
            {
              title: "Compliance Ready",
              body: "Audit trails, data residency, and secure APIs.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-[#9ec4ff]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9ec4ff]">
              How it works
            </p>
            <h2 className="text-3xl font-semibold">3 steps to safer decisions</h2>
            <p className="text-sm text-[#cfe0ff]">
              Plug in ScamAI, send your verification events, and get a clear
              risk score that your automation and analysts can act on.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Connect your data sources and verification flows.",
              "ScamAI models analyze authenticity in real time.",
              "Receive a verdict + next action in milliseconds.",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm text-[#cfe0ff]"
              >
                <span className="text-[#9ec4ff]">0{index + 1}.</span> {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a1022]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { label: "Enterprise-ready SLA", value: "99.95%" },
              { label: "Average decision time", value: "180ms" },
              { label: "Signals processed daily", value: "84M" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-white"
              >
                <p className="text-xs text-[#9ec4ff]">{stat.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
          <h2 className="text-3xl font-semibold">Ready to rebuild trust?</h2>
          <p className="mt-3 text-sm text-[#cfe0ff]">
            Start from a clean slate with a detection platform built for the
            modern threat landscape.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0b0f1f]"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white"
            >
              Speak with Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
