export const metadata = {
  title: "Business Use Case — ScaMai",
  description: "Explore ScaMai's AI misuse prevention solutions tailored for businesses.",
};

import SiteShell from "@/components/SiteShell";

export default function BusinessPage() {
  return (
    <SiteShell>
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Business Use Case</h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          Solutions for enterprises to detect and prevent misuse of AI across media, voice,
          and language. Learn how to integrate our APIs, evaluate content, and safeguard your
          platform from emerging threats.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Visual Detection", "Audio Detection", "Syntax Detection"].map((area) => (
            <article
              key={area}
              className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
            >
              <h2 className="text-lg font-semibold">{area}</h2>
              <p className="mt-2 text-sm text-white/80">
                Use-case playbooks, integration guides, and evaluation criteria for {area.toLowerCase()}.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="/demo"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm"
          >
            View Demo
          </a>
        </div>
      </section>
    </SiteShell>
  );
}

