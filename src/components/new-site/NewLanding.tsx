import Link from "next/link";

export default function NewLanding() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-24">
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d5dfb]">
            ScamAI Platform
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Stop synthetic fraud before it hits your business.
          </h1>
          <p className="text-base text-[#cbd5f5] sm:text-lg">
            A new detection stack that verifies media, identity, and intent in
            real time. Built for teams who cannot afford false positives.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-[#2a2a2a] px-6 py-3 text-sm font-semibold text-white"
            >
              Talk to Sales
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-[#9ca3af]">
            <span>99.4% detection accuracy</span>
            <span>Sub-200ms responses</span>
            <span>Global coverage</span>
          </div>
        </div>

        <div className="flex-1">
          <div className="rounded-2xl border border-[#1f1f1f] bg-[#111111] p-6">
            <p className="text-sm font-semibold text-[#9ca3af]">Live Risk Feed</p>
            <div className="mt-6 space-y-4">
              {[
                "Synthetic voice spoof detected",
                "Deepfake video flagged",
                "KYC anomaly resolved",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-[#1f1f1f] bg-[#0f0f0f] px-4 py-3 text-sm"
                >
                  <span>{item}</span>
                  <span className="text-[#6d5dfb]">Verified</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1f1f1f] bg-[#0f0f0f]">
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
              className="rounded-2xl border border-[#1f1f1f] bg-[#111111] p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-[#9ca3af]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d5dfb]">
              How it works
            </p>
            <h2 className="text-3xl font-semibold">3 steps to safer decisions</h2>
            <p className="text-sm text-[#9ca3af]">
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
                className="rounded-2xl border border-[#1f1f1f] bg-[#111111] p-5 text-sm text-[#cbd5f5]"
              >
                <span className="text-[#6d5dfb]">0{index + 1}.</span> {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1f1f1f] bg-[#0f0f0f]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { label: "Enterprise-ready SLA", value: "99.95%" },
              { label: "Average decision time", value: "180ms" },
              { label: "Signals processed daily", value: "84M" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#1f1f1f] bg-[#111111] p-6">
                <p className="text-xs text-[#9ca3af]">{stat.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-[#1f1f1f] bg-[#111111] p-8 text-center">
          <h2 className="text-3xl font-semibold">Ready to rebuild trust?</h2>
          <p className="mt-3 text-sm text-[#9ca3af]">
            Start from a clean slate with a detection platform that is built for
            the modern threat landscape.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-[#2a2a2a] px-6 py-3 text-sm font-semibold text-white"
            >
              Speak with Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
