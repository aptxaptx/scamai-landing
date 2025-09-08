import UseCasesMore from "./UseCasesMore";
import SiteShell from "@/components/SiteShell";

export const metadata = { title: "About Us — ScamAI" };

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="bg-black min-h-screen -mx-0 -my-5">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center">
            <p className="text-xs tracking-widest uppercase text-white/70">Company</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Making the internet safe to trust
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-white/60 leading-relaxed">
              Reality Inc. builds Scam AI Platform that identifies AI-generated deception across media, text, and voice. Our mission is to restore confidence online by verifying what is real—at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center">
            <h2 className="text-sm font-semibold tracking-wider text-white/60">Mission</h2>
            <p className="mt-3 text-2xl md:text-[28px] leading-snug text-white/90 max-w-3xl mx-auto">
              Build a trustworthy layer for the internet—so people,
              <br />
              businesses, and institutions can know what to believe.
            </p>
          </div>
        </div>
      </section>


      {/* What we build */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center">
            <h2 className="text-sm font-semibold tracking-wider text-white/60">What we build</h2>
          </div>
          <p className="mt-3 text-2xl md:text-[28px] leading-snug text-white/90 max-w-3xl mx-auto text-center">
            One‑stop solution for scam/AI misuse prevention
            <br />
            for enterprises and individuals.
          </p>
          <div className="mt-4 grid gap-6">
            <div>
              <div className="grid gap-5">
                  {/* Foundation layer */}
                  <div id="foundation" className="rounded-3xl border border-white/15 p-5 md:p-6">
                    <div className="mb-5 flex items-baseline justify-between gap-4">
                      <div className="text-white font-semibold">Detection Infrastructure</div>
                      <div className="text-xs tracking-widest uppercase text-white/50">Foundation Layer</div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                      <MiniCard title="Models" description="Multimodal detectors across image, video, voice, and text." />
                      <MiniCard title="Database" description="Continuously updated ScamDB of signals, hashes, and adversarial patterns." />
                      <MiniCard title="APIs" description="Simple, stable APIs that deliver risk scores and guidance." />
                    </div>
                  </div>

                  {/* Application Layer */}
                  <div className="rounded-3xl border border-white/15 p-5 md:p-6">
                    <div className="mb-5 flex items-baseline justify-between gap-4">
                      <div className="text-white font-semibold">Use cases</div>
                      <div className="text-xs tracking-widest uppercase text-white/50">Application Layer</div>
                    </div>
                    <p className="text-sm text-white/60 mb-4">
                      Our detection infrastructure generalizes across industries. Our initial focus areas are IDV deepfake and Data; together they represent a small portion of the overall addressable market.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <MiniCard title="IDV deepfake" badge="Current focus" description="Authenticate KYC/IDV by detecting face swaps and synthetic identities." />
                      <MiniCard title="Data" badge="Current focus" description="Capture and enrich threat signals across platforms and channels." />
                      <MiniCard title="Enterprise cyber-security" description="Protect employees and systems from impersonation and phishing." />
                      <MiniCard title="Consumer scam" badge="End of 2025" description="Safeguard users from fraud across messages, calls, and social." />
                    </div>
                      <UseCasesMore />
                  </div>

                  
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center mb-6">
            <h2 className="text-sm font-semibold tracking-wider text-white/60">Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <MiniCard title="Integrity & accountability" description="Do the right thing—especially when it’s difficult." />
              <MiniCard title="People first" description="Protect individuals and communities from harm. Optimize for long‑term trust over short‑term wins." />
              <MiniCard title="Rigor with humility" description="Seek truth through evidence, openness, and critique. Change our minds when the data says so." />
              <MiniCard title="Build for decades" description="Think long‑term. Favor simplicity, privacy, and durability in what we choose to create." />
          </div>
        </div>
      </section>

      {/* Team & partners CTAs */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <CTA title="People" subtitle="Meet the team building ScamAI" />
            <CTA title="Partnership" subtitle="Work with us to protect your users" />
          </div>
        </div>
      </section>
      </div>
    </SiteShell>
  );
}

// Removed unused Card component

function MiniCard({ title, description, badge }: { title: string; description: string; badge?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5">
      <div className="flex items-center gap-2">
        <div className="text-base font-semibold text-white">{title}</div>
        {badge ? (
          <span className="text-[10px] uppercase tracking-wider text-white/70 border border-white/15 rounded-full px-2 py-0.5">{badge}</span>
        ) : null}
      </div>
      <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}

// LeftItem removed along with the left column items

function CTA({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 md:p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-base md:text-lg font-semibold text-white">{title}</div>
          <div className="mt-1 text-sm text-white/60">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}


