export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#66b3ff]">
            TRANSPARENT PRICING
          </p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Pay only for what you use
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Simple, transparent pricing with no contracts or commitments. Start with 100 free checks per month.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Free Plan */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8">
              <h3 className="mb-2 text-2xl font-bold text-white">Free</h3>
              <p className="mb-6 text-gray-400">Perfect for trying out our platform</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$0</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="mb-8 space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>100 free checks/month</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Image detection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Audio detection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>API access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Dashboard access</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <span className="mr-2">×</span>
                  <span>Video detection</span>
                </li>
              </ul>
              <a
                href="https://app.scam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-gray-700 bg-gray-800 py-3 text-center font-semibold text-white hover:bg-gray-700 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Pay As You Go */}
            <div className="rounded-lg border-2 border-[#66b3ff] bg-gray-900/40 p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#66b3ff] text-black px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">Pay As You Go</h3>
              <p className="mb-6 text-gray-400">Scale with your needs</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$0.01</span>
                <span className="text-gray-400">/check</span>
              </div>
              <ul className="mb-8 space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Video detection ($0.05/check)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Higher rate limits</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Detailed analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Pay only for completed checks</span>
                </li>
              </ul>
              <a
                href="https://app.scam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="rainbow-button block w-full"
              >
                <span className="rainbow-button-inner">
                  Start Now
                </span>
              </a>
            </div>

            {/* Enterprise */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8">
              <h3 className="mb-2 text-2xl font-bold text-white">Enterprise</h3>
              <p className="mb-6 text-gray-400">For large-scale deployments</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">Custom</span>
              </div>
              <ul className="mb-8 space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Everything in Pay As You Go</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Volume discounts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>SLA guarantees</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>On-premise deployment</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full rounded-lg border border-gray-700 bg-gray-800 py-3 text-center font-semibold text-white hover:bg-gray-700 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Pricing Details
          </h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-xl font-bold text-white">What counts as a check?</h3>
              <p className="text-gray-300">
                A check is a single API call to analyze one media file (image, audio, or video). You're only charged when the analysis completes successfully.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-xl font-bold text-white">How does billing work?</h3>
              <p className="text-gray-300">
                Usage is calculated at the end of each month. You'll receive an invoice for any usage beyond the free tier. No surprises, no hidden fees.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-xl font-bold text-white">Can I change plans?</h3>
              <p className="text-gray-300">
                Yes! You can upgrade or downgrade at any time. Changes take effect immediately, and we'll prorate any adjustments.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-xl font-bold text-white">What payment methods do you accept?</h3>
              <p className="text-gray-300">
                We accept all major credit cards (Visa, Mastercard, Amex) and bank transfers for Enterprise customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Start with 100 free checks today
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            No credit card required. Upgrade anytime.
          </p>
          <a
            href="https://app.scam.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rainbow-button inline-block"
          >
            <span className="rainbow-button-inner">
              Get Started Free
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
