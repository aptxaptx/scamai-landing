export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#66b3ff]">
            RESOURCES
          </p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Everything you need to succeed
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Documentation, guides, and resources to help you integrate and get the most out of ScamAI.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Documentation */}
            <a 
              href="/resources/documentation"
              className="group rounded-lg border border-gray-800 bg-gray-900/40 p-8 hover:border-[#66b3ff] transition-colors"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#66b3ff]/10 group-hover:bg-[#66b3ff]/20 transition-colors">
                <svg className="h-8 w-8 text-[#66b3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">Documentation</h3>
              <p className="mb-4 text-gray-300">
                Complete API documentation, code examples, and integration guides to get you started in minutes.
              </p>
              <div className="text-[#66b3ff] group-hover:underline">
                View documentation →
              </div>
            </a>

            {/* Security & Compliance */}
            <a 
              href="/resources/security-compliance"
              className="group rounded-lg border border-gray-800 bg-gray-900/40 p-8 hover:border-[#66b3ff] transition-colors"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#66b3ff]/10 group-hover:bg-[#66b3ff]/20 transition-colors">
                <svg className="h-8 w-8 text-[#66b3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">Security & Compliance</h3>
              <p className="mb-4 text-gray-300">
                Learn about our enterprise-grade security practices, certifications, and compliance with global standards.
              </p>
              <div className="text-[#66b3ff] group-hover:underline">
                View security info →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Popular Resources
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">Quick Start Guide</h3>
              <p className="mb-4 text-sm text-gray-300">
                Get up and running with ScamAI in under 10 minutes.
              </p>
              <a href="/resources/documentation" className="text-sm text-[#66b3ff] hover:underline">
                Read guide →
              </a>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">API Reference</h3>
              <p className="mb-4 text-sm text-gray-300">
                Complete API endpoint documentation and examples.
              </p>
              <a href="/resources/documentation" className="text-sm text-[#66b3ff] hover:underline">
                View API docs →
              </a>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">Best Practices</h3>
              <p className="mb-4 text-sm text-gray-300">
                Optimize your integration with proven strategies.
              </p>
              <a href="/resources/documentation" className="text-sm text-[#66b3ff] hover:underline">
                Learn more →
              </a>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">SOC 2 Type II</h3>
              <p className="mb-4 text-sm text-gray-300">
                Our security certification and compliance details.
              </p>
              <a href="/resources/security-compliance" className="text-sm text-[#66b3ff] hover:underline">
                View details →
              </a>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">GDPR Compliance</h3>
              <p className="mb-4 text-sm text-gray-300">
                How ScamAI helps you meet GDPR requirements.
              </p>
              <a href="/resources/security-compliance" className="text-sm text-[#66b3ff] hover:underline">
                Learn more →
              </a>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">Support</h3>
              <p className="mb-4 text-sm text-gray-300">
                Get help from our technical support team.
              </p>
              <a href="/contact" className="text-sm text-[#66b3ff] hover:underline">
                Contact support →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Need Help?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#66b3ff]/10">
                  <svg className="h-8 w-8 text-[#66b3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Contact Support</h3>
              <p className="mb-4 text-gray-300">
                Our team is here to help with any questions.
              </p>
              <a
                href="/contact"
                className="text-[#66b3ff] hover:underline font-semibold"
              >
                Get in touch
              </a>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#66b3ff]/10">
                  <svg className="h-8 w-8 text-[#66b3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Read the Docs</h3>
              <p className="mb-4 text-gray-300">
                Comprehensive guides and API references.
              </p>
              <a
                href="/resources/documentation"
                className="text-[#66b3ff] hover:underline font-semibold"
              >
                View documentation
              </a>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#66b3ff]/10">
                  <svg className="h-8 w-8 text-[#66b3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Security Info</h3>
              <p className="mb-4 text-gray-300">
                Learn about our security and compliance.
              </p>
              <a
                href="/resources/security-compliance"
                className="text-[#66b3ff] hover:underline font-semibold"
              >
                View security
              </a>
            </div>
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
            Start detecting deepfakes with 100 free checks per month.
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
