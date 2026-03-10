import { generatePageMetadata, pageMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    path: '/contact',
    ...pageMetadata.contact,
  });
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6" style={{ paddingTop: '140px' }}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#245FFF]">
            CONTACT US
          </p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Have questions about ScamAI? Want to discuss enterprise solutions? We're here to help.
          </p>
        </div>
      </section>

      {/* Action Cards — Evervault style */}
      <section className="relative px-4 sm:px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Schedule a Demo */}
            <div
              className="relative overflow-hidden rounded-[16px] p-8 sm:p-10 no-underline"
              style={{
                background: 'linear-gradient(to bottom right, rgba(14, 37, 88, 0.8), rgba(10, 6, 34, 0.4))',
                boxShadow: '0 8px 16px -4px rgba(0,0,0,0.15), 0 4px 8px -2px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(74, 127, 255, 0.24)',
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl mb-8"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
                }}
              >
                <svg className="h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-white mb-3">Schedule a Demo</h3>
              <p className="text-[15px] text-gray-400 mb-8 leading-relaxed">
                Talk to an expert about your security needs. Discuss your requirements, learn about custom pricing, or request a product demo.
              </p>
              <a
                href="https://cal.com/scamai/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-125"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 1px 0 rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.08)',
                }}
              >
                Book
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>

            {/* Send us a message */}
            <div
              className="relative overflow-hidden rounded-[16px] p-8 sm:p-10 no-underline"
              style={{
                background: 'linear-gradient(to bottom right, rgba(14, 37, 88, 0.6), rgba(10, 6, 34, 0.3))',
                boxShadow: '0 8px 16px -4px rgba(0,0,0,0.15), 0 4px 8px -2px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(74, 127, 255, 0.24)',
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl mb-8"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
                }}
              >
                <svg className="h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-white mb-3">Send us a message</h3>
              <p className="text-[15px] text-gray-400 mb-8 leading-relaxed">
                Have a question? Get hands on support directly from our engineers by sending us an email. We&apos;ll respond to you in &lt;12 hours.
              </p>
              <a
                href="mailto:hello@scam.ai"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-125"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 1px 0 rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.08)',
                }}
              >
                Get in touch
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Cards — 3-column grid */}
      <section className="py-20 px-4 sm:px-6 bg-black">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Documentation */}
            <a
              href="https://docu.scam.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[16px] p-8 text-center transition no-underline"
              style={{
                background: 'rgba(255,255,255,0.02)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
            >
              <div className="mb-5 flex justify-center">
                <svg className="h-7 w-7 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="12" rx="2" /><path d="M7 20h10" /><path d="M12 16v4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Find detailed guides, API references, and more in our documentation.
              </p>
            </a>

            {/* Partnerships */}
            <a
              href="mailto:partnerships@scam.ai"
              className="group rounded-[16px] p-8 text-center transition no-underline"
              style={{
                background: 'rgba(255,255,255,0.02)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
            >
              <div className="mb-5 flex justify-center">
                <svg className="h-7 w-7 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Partnerships</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Become a partner and offer your customers the best in AI security and deepfake detection.
              </p>
            </a>

            {/* Newsletter */}
            <a
              href="/newsletter"
              className="group rounded-[16px] p-8 text-center transition no-underline"
              style={{
                background: 'rgba(255,255,255,0.02)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
            >
              <div className="mb-5 flex justify-center">
                <svg className="h-7 w-7 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11a9 9 0 019-9" /><path d="M4 4a16 16 0 0116 16" /><circle cx="5" cy="19" r="1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Newsletter</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Stay up to date with the latest news, updates, and insights from ScamAI.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-800 bg-black p-6">
              <h3 className="mb-3 text-xl font-bold text-white">How quickly can I get started?</h3>
              <p className="text-gray-300">
                You can start using ScamAI in minutes. Sign up for a free account at app.scam.ai, get your API key, and make your first API call. We provide SDKs and documentation to help you integrate quickly.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-black p-6">
              <h3 className="mb-3 text-xl font-bold text-white">Do you offer custom solutions for enterprises?</h3>
              <p className="text-gray-300">
                Yes! We offer custom integrations, on-premise deployments, dedicated support, and volume discounts for enterprise customers. Contact our sales team to discuss your specific needs.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-black p-6">
              <h3 className="mb-3 text-xl font-bold text-white">What regions do you operate in?</h3>
              <p className="text-gray-300">
                ScamAI operates globally with data centers in the US, EU, and APAC. We're GDPR compliant and can help you meet regional data residency requirements.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-black p-6">
              <h3 className="mb-3 text-xl font-bold text-white">What's your SLA for enterprise customers?</h3>
              <p className="text-gray-300">
                Enterprise customers receive 99.9% uptime SLA, priority support with guaranteed response times, and dedicated account management. Contact sales for details.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-black p-6">
              <h3 className="mb-3 text-xl font-bold text-white">Can I try before committing to a paid plan?</h3>
              <p className="text-gray-300">
                Absolutely! We offer 200 free images per month with no credit card required. You can test our API, explore the dashboard, and evaluate accuracy before upgrading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Our Office
          </h2>
          <div className="mx-auto max-w-2xl rounded-lg border border-gray-800 bg-gray-900/40 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">Reality Inc.</h3>
            <p className="mb-2 text-gray-300">2150 Shattuck Ave.</p>
            <p className="mb-2 text-gray-300">Penthouse Suite #1300</p>
            <p className="text-gray-300">Berkeley, CA 94704</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Start protecting your platform with 200 free images per month.
          </p>
          <a
            href="https://app.scam.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rainbow-button inline-block"
          >
            <span className="rainbow-button-inner">
              Start Free Trial
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
