export default function SecurityCompliancePage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#66b3ff]">
            SECURITY & COMPLIANCE
          </p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Enterprise-grade security and compliance
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Built with security-first architecture and compliant with global data protection standards.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Certifications & Standards
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#66b3ff]/10">
                <span className="text-2xl font-bold text-[#66b3ff]">SOC 2</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">SOC 2 Type II</h3>
              <p className="text-gray-300">
                Independently audited and certified for security, availability, processing integrity, confidentiality, and privacy.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#66b3ff]/10">
                <span className="text-2xl font-bold text-[#66b3ff]">GDPR</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">GDPR Compliant</h3>
              <p className="text-gray-300">
                Full compliance with EU General Data Protection Regulation, including data residency options and privacy controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Security Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">End-to-End Encryption</h3>
              <p className="text-sm text-gray-300">
                All data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">Zero Data Retention</h3>
              <p className="text-sm text-gray-300">
                We don't store your media files after analysis. Results are retained for 30 days unless you specify otherwise.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">API Key Management</h3>
              <p className="text-sm text-gray-300">
                Secure API key generation with rotation capabilities and granular permissions control.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">Access Controls</h3>
              <p className="text-sm text-gray-300">
                Role-based access control (RBAC) and multi-factor authentication (MFA) for team accounts.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">Audit Logs</h3>
              <p className="text-sm text-gray-300">
                Comprehensive audit logs for all API calls and account activities with 1-year retention.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">DDoS Protection</h3>
              <p className="text-sm text-gray-300">
                Enterprise-grade DDoS protection and rate limiting to ensure service availability.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">Regular Penetration Testing</h3>
              <p className="text-sm text-gray-300">
                Quarterly security audits and penetration testing by independent third parties.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">Incident Response</h3>
              <p className="text-sm text-gray-300">
                24/7 security monitoring with documented incident response procedures.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-3 text-lg font-bold text-white">Data Backup & Recovery</h3>
              <p className="text-sm text-gray-300">
                Automated backups with point-in-time recovery and disaster recovery procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Regional Compliance
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Europe (GDPR)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>EU data residency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Right to erasure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Data portability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Processing agreements</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">United States</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>US data centers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>CCPA compliant</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>SOC 2 Type II</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>FedRAMP in progress</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Asia Pacific</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>APAC data centers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>PDPA compliant</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Local data storage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">✓</span>
                  <span>Regional support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Privacy */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Your Data, Your Control
          </h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">No Training on Customer Data</h3>
              <p className="text-gray-300">
                We never use your data to train our models without explicit permission. Your media files and detection results remain private.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Configurable Data Retention</h3>
              <p className="text-gray-300">
                Choose how long we retain your data. Options range from immediate deletion after analysis to custom retention periods up to 1 year.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Data Export & Deletion</h3>
              <p className="text-gray-300">
                Export your data anytime in standard formats. Request complete account deletion with guaranteed data erasure within 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-12 text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Enterprise Security
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Need custom security requirements, on-premise deployment, or dedicated infrastructure?
            </p>
            <a
              href="/contact"
              className="rainbow-button inline-block"
            >
              <span className="rainbow-button-inner">
                Contact Enterprise Sales
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Security documentation
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Want to review our security practices in detail?
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg border border-gray-700 bg-gray-800 px-8 py-3 font-semibold text-white hover:bg-gray-700 transition-colors"
          >
            Request Security Whitepaper
          </a>
        </div>
      </section>
    </main>
  );
}
