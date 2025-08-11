import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export const metadata = { title: "About Us — ScamAI" };

export default function AboutPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40">Company</p>
              <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight text-white">
                Making the internet safe to trust
              </h1>
              <p className="mt-4 max-w-2xl text-base md:text-lg text-white/60 leading-relaxed">
                ScamAI builds detection systems that identify AI-generated deception across media, text, and voice. Our mission is to restore confidence online by verifying what is real—at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
            <h2 className="md:col-span-4 text-sm font-semibold tracking-wider text-white/60">Mission</h2>
            <p className="md:col-span-8 text-2xl md:text-[28px] leading-snug text-white/90">
              Build a trustworthy layer for the internet—so people, businesses, and institutions can know what to believe.
            </p>
          </div>
        </div>
      </section>

      

      {/* What we build */}
      <section className="py-12 md:py-16 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10">
            <h2 className="md:col-span-4 text-sm font-semibold tracking-wider text-white/60">What we build</h2>
            <div className="md:col-span-8 grid gap-6">
              <Card title="Detection infrastructure" description="APIs and models to detect AI-generated images, video, voice, text, and coordinated manipulation." />
              <Card title="Decision tooling" description="Signals, risk scores, and guidance that integrate into existing workflows and products." />
              <Card title="Research to production" description="Peer-informed research that ships as reliable, maintainable systems." />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10">
            <h2 className="md:col-span-4 text-sm font-semibold tracking-wider text-white/60">Values</h2>
            <div className="md:col-span-8 grid md:grid-cols-2 gap-6 md:gap-8">
              <MiniCard title="Earn trust" description="Default to clarity. Ship reliable systems. Protect privacy by design." />
              <MiniCard title="Focus on impact" description="Measure what matters and simplify until the signal is obvious." />
              <MiniCard title="Research with rigor" description="Build on evidence. Stress-test assumptions. Publish when useful." />
              <MiniCard title="Think long-term" description="Design for durability: maintainable models, stable APIs, clear contracts." />
            </div>
          </div>
        </div>
      </section>

      {/* Team & partners CTAs */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <CTA href="/company/people" title="People" subtitle="Meet the team building ScamAI" />
            <CTA href="/company/partnership" title="Partnership" subtitle="Work with us to protect your users" />
            <CTA href="/company/investors" title="Investors" subtitle="Updates and materials" />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 md:p-6">
      <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}

function MiniCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5">
      <div className="text-base font-semibold text-white">{title}</div>
      <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}

function CTA({ href, title, subtitle }: { href: string; title: string; subtitle: string }) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/10 p-5 md:p-6 hover:border-white/20 transition-colors"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-base md:text-lg font-semibold text-white">{title}</div>
          <div className="mt-1 text-sm text-white/60">{subtitle}</div>
        </div>
        <div className="text-white/40 group-hover:text-white/70 transition-colors">→</div>
      </div>
    </Link>
  );
}


