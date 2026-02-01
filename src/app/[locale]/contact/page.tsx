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

      {/* Contact Options */}
      <section className="py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Sales */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#245FFF]/10">
                  <svg className="h-8 w-8 text-[#245FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Sales</h3>
              <p className="mb-4 text-gray-300">
                Interested in enterprise plans or volume pricing?
              </p>
              <a
                href="mailto:sales@scam.ai"
                className="text-[#245FFF] hover:underline font-semibold"
              >
                sales@scam.ai
              </a>
            </div>

            {/* Support */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#245FFF]/10">
                  <svg className="h-8 w-8 text-[#245FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Technical Support</h3>
              <p className="mb-4 text-gray-300">
                Need help integrating or troubleshooting?
              </p>
              <a
                href="mailto:support@scam.ai"
                className="text-[#245FFF] hover:underline font-semibold"
              >
                support@scam.ai
              </a>
            </div>

            {/* General */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#245FFF]/10">
                  <svg className="h-8 w-8 text-[#245FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">General Inquiries</h3>
              <p className="mb-4 text-gray-300">
                Any other questions or feedback?
              </p>
              <a
                href="mailto:hello@scam.ai"
                className="text-[#245FFF] hover:underline font-semibold"
              >
                hello@scam.ai
              </a>
            </div>
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
                Absolutely! We offer 100 free checks per month with no credit card required. You can test our API, explore the dashboard, and evaluate accuracy before upgrading.
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
            <p className="mb-2 text-gray-300">Berkeley SkyDeck</p>
            <p className="mb-2 text-gray-300">University of California, Berkeley</p>
            <p className="text-gray-300">Berkeley, CA 94720</p>
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
            Start protecting your platform with 100 free checks per month.
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
