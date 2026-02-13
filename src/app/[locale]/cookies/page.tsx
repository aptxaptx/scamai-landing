export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6" style={{ paddingTop: '140px' }}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#245FFF]">
            COOKIE POLICY
          </p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            How we use cookies
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Last updated: February 1, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {/* What Are Cookies */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide a better user experience by remembering your preferences, analyzing site usage, and securing your account.
              </p>
            </div>

            {/* Types of Cookies We Use */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">Types of Cookies We Use</h2>
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">1. Essential Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, authentication, and session management.
                  </p>
                  <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 text-white">Cookie Name</th>
                          <th className="text-left py-2 text-white">Purpose</th>
                          <th className="text-left py-2 text-white">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-800">
                          <td className="py-2">session_id</td>
                          <td className="py-2">Maintains your login session</td>
                          <td className="py-2">Session</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-2">csrf_token</td>
                          <td className="py-2">Prevents cross-site request forgery</td>
                          <td className="py-2">Session</td>
                        </tr>
                        <tr>
                          <td className="py-2">auth_token</td>
                          <td className="py-2">Authenticates API requests</td>
                          <td className="py-2">30 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">2. Functional Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies remember your preferences and choices to provide a personalized experience.
                  </p>
                  <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 text-white">Cookie Name</th>
                          <th className="text-left py-2 text-white">Purpose</th>
                          <th className="text-left py-2 text-white">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-800">
                          <td className="py-2">theme_preference</td>
                          <td className="py-2">Remembers your theme choice</td>
                          <td className="py-2">1 year</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-2">language</td>
                          <td className="py-2">Stores language preference</td>
                          <td className="py-2">1 year</td>
                        </tr>
                        <tr>
                          <td className="py-2">dashboard_layout</td>
                          <td className="py-2">Saves your dashboard customization</td>
                          <td className="py-2">6 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">3. Analytics Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 text-white">Cookie Name</th>
                          <th className="text-left py-2 text-white">Purpose</th>
                          <th className="text-left py-2 text-white">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-800">
                          <td className="py-2">_ga</td>
                          <td className="py-2">Google Analytics visitor ID</td>
                          <td className="py-2">2 years</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                          <td className="py-2">_gat</td>
                          <td className="py-2">Throttles request rate</td>
                          <td className="py-2">1 minute</td>
                        </tr>
                        <tr>
                          <td className="py-2">_gid</td>
                          <td className="py-2">Distinguishes users</td>
                          <td className="py-2">24 hours</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">4. Marketing Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies track your visit across websites to deliver targeted advertising that is relevant to you.
                  </p>
                  <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 text-white">Cookie Name</th>
                          <th className="text-left py-2 text-white">Purpose</th>
                          <th className="text-left py-2 text-white">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-gray-800">
                          <td className="py-2">_fbp</td>
                          <td className="py-2">Facebook Pixel</td>
                          <td className="py-2">3 months</td>
                        </tr>
                        <tr>
                          <td className="py-2">ads_preference</td>
                          <td className="py-2">Tracks ad interactions</td>
                          <td className="py-2">1 year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">Third-Party Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the following trusted third-party services that may set cookies:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Stripe:</strong> For secure payment processing</li>
                <li><strong>Intercom:</strong> For customer support chat</li>
                <li><strong>Cloudflare:</strong> For security and content delivery</li>
              </ul>
            </div>

            {/* Managing Cookies */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">Managing Your Cookie Preferences</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">Browser Settings</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. However, blocking essential cookies may prevent you from using our Services.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">Opt-Out Links</h3>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside">
                    <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#245FFF] hover:underline">Google Analytics Opt-out</a></li>
                    <li><a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" className="text-[#245FFF] hover:underline">Facebook Pixel Opt-out</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Do Not Track */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">Do Not Track Signals</h2>
              <p className="text-gray-300 leading-relaxed">
                We honor Do Not Track (DNT) browser settings. When DNT is enabled, we will not set analytics or marketing cookies, though essential cookies are still necessary for the website to function.
              </p>
            </div>

            {/* Updates to This Policy */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about our use of cookies:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-300">
                  Email: <a href="mailto:privacy@scam.ai" className="text-[#245FFF] hover:underline">privacy@scam.ai</a>
                </p>
                <p className="text-gray-300">
                  Address: Berkeley SkyDeck, University of California, Berkeley, CA 94720
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Questions about cookies?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            We're here to help explain our cookie usage.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#245FFF] text-white font-semibold rounded-lg hover:bg-[#1d4acc] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
