import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export const metadata = { title: "Investors — ScamAI" };

export default function InvestorsPage() {
  return (
    <SiteShell>
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Investors</h1>
          <p className="mt-4 text-white/70 leading-relaxed">
            Fighting scams and fraud is a long journey. We’re not actively seeking investment partners; if our mission resonates and you share our passion, resilience, and sense of responsibility, we’re open to a conversation.
          </p>
          <p className="mt-3 text-white/70 leading-relaxed">
            We operate from a clear set of values: Integrity & accountability, People first, Rigor with humility, and Building for decades. These principles guide what we build, how we ship, and the partnerships we choose.
          </p>
          <p className="mt-3 text-white/70 leading-relaxed">
            We’re fortunate to be backed by UC Berkeley SkyDeck VC, and we strive to honor that trust through careful execution and long‑term thinking.
          </p>
          <div className="mt-6">
            <Link href="/demo" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold">
              Express interest
            </Link>
          </div>
          <div className="mt-4 text-sm text-white/60">
            <Link href="/company/about" className="underline underline-offset-4">Read more about our values →</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}


