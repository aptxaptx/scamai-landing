import Link from "next/link";

export default function NewPage({
  title = "ScamAI",
  subtitle = "A clean slate. Built for trust, speed, and safety.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d5dfb]">
          New Platform
        </p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-[#9ca3af] sm:text-base">
          {subtitle}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Purpose-built for synthetic media risk.",
            "Built-in compliance and audit trail.",
            "Real-time verdicts with explainability.",
            "Global scale, human-centered review.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-[#1f1f1f] bg-[#111111] p-4 text-sm text-[#cbd5f5]"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/demo"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black"
          >
            Request Demo
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-[#2a2a2a] px-6 py-3 text-sm font-semibold text-white"
          >
            Talk to Sales
          </Link>
        </div>
      </section>
    </main>
  );
}
