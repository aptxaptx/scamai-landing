import { Link } from "@/i18n/navigation";
import SiteShell from "@/components/SiteShell";

export const metadata = { title: "Partnership — ScamAI" };

export default function PartnershipPage() {
  return (
    <SiteShell>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Partnership
          </h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            We partner with NGOs, public‑interest organizations, and responsible
            businesses to reduce online harm and protect digital dignity.
          </p>
          <p className="mt-3 text-white/70 leading-relaxed">
            Our work is guided by human impact: keeping people safe from
            impersonation, financial fraud, and manipulation—especially those
            most at risk.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold text-white">
              NGOs & Education
            </h2>
            <p className="mt-2 text-white/70 leading-relaxed">
              We offer NGO and educational pricing—and, where possible, pro‑bono
              support—for initiatives that protect vulnerable communities,
              strengthen media literacy, or provide victim assistance.
            </p>
            <ul className="mt-3 text-sm text-white/65 list-disc list-inside space-y-1">
              <li>Survivor hotlines and reporting tools</li>
              <li>Fact‑checking and media verification desks</li>
              <li>Digital safety curriculum and awareness programs</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold text-white">
              Businesses & Platforms
            </h2>
            <p className="mt-2 text-white/70 leading-relaxed">
              Build safer products with privacy‑first detection. Reduce fraud,
              protect creators and customers, and comply with emerging
              standards—without compromising user trust.
            </p>
            <ul className="mt-3 text-sm text-white/65 list-disc list-inside space-y-1">
              <li>
                KYC/onboarding protection against deepfakes and synthetic
                identities
              </li>
              <li>Verification for messages, media, and voice interactions</li>
              <li>Risk scoring and guidance that respects user consent</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8 pb-16">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <p className="text-white/60">
            Have a mission‑aligned project? We’re honored to help.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              href="https://cal.com/scamai/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold"
            >
              Contact us
            </Link>
            <Link
              href="/company/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-semibold"
            >
              Our values
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
