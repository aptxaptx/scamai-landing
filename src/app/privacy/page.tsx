import SiteShell from "@/components/SiteShell";

export default function PrivacyPolicy() {
  return (
    <SiteShell>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-light text-white mb-8">Privacy Policy</h1>
        <div className="text-gray-300 space-y-6 leading-relaxed">
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Reality Inc. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates ScamAI, an advanced AI detection platform. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium text-white mb-2">2.1 Information You Provide</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Account registration information (name, email address, company details, job title, phone number)</li>
              <li>Contact information when you reach out to us (support tickets, sales inquiries)</li>
              <li>Payment information for billing purposes (credit card details, billing address, tax information)</li>
              <li>Content you submit for analysis (images, audio, video files, metadata associated with such content)</li>
              <li>API usage data and integration logs</li>
              <li>Feedback, surveys, and communication preferences</li>
              <li>Identity verification documents (for enterprise customers)</li>
            </ul>
            
            <h3 className="text-xl font-medium text-white mb-2 mt-4">2.2 Information We Collect Automatically</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Usage data and analytics (features used, session duration, error logs)</li>
              <li>Device information and browser data (device type, operating system, browser type and version)</li>
              <li>IP addresses and approximate location information</li>
              <li>Cookies and similar tracking technologies (performance cookies, functional cookies)</li>
              <li>API call logs and timestamps</li>
              <li>Performance metrics and system diagnostics</li>
              <li>Referral sources and campaign attribution data</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-2 mt-4">2.3 Information from Third Parties</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Data from payment processors and billing systems</li>
              <li>Information from identity verification services</li>
              <li>Analytics data from third-party services</li>
              <li>Lead generation and marketing platform data</li>
              <li>Integration data from connected applications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <h3 className="text-xl font-medium text-white mb-2">3.1 Service Provision</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>To provide and improve our AI detection services and algorithms</li>
              <li>To process and analyze submitted content for deepfake and synthetic media detection</li>
              <li>To maintain and optimize API performance and reliability</li>
              <li>To provide customer support and technical assistance</li>
              <li>To manage user accounts and access controls</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-2 mt-4">3.2 Communications</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>To send service-related notifications and updates</li>
              <li>To respond to inquiries and support requests</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To conduct surveys and gather feedback</li>
              <li>To provide security alerts and account notifications</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-2 mt-4">3.3 Business Operations</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>To process payments and manage billing</li>
              <li>To prevent fraud and ensure platform security</li>
              <li>To comply with legal obligations and regulatory requirements</li>
              <li>To improve our machine learning models (with proper anonymization and aggregation)</li>
              <li>To conduct analytics and business intelligence</li>
              <li>To enforce our terms of service and acceptable use policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Retention and Security</h2>
            <h3 className="text-xl font-medium text-white mb-2">4.1 Data Retention Periods</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Account Information:</strong> Retained while your account is active and for 2 years after account closure</li>
              <li><strong>Submitted Content:</strong> Processed immediately and deleted within 30 days unless longer retention is requested</li>
              <li><strong>API Logs:</strong> Retained for 90 days for troubleshooting and performance monitoring</li>
              <li><strong>Billing Information:</strong> Retained for 7 years as required by accounting regulations</li>
              <li><strong>Support Communications:</strong> Retained for 3 years to improve service quality</li>
              <li><strong>Analytics Data:</strong> Aggregated and anonymized data may be retained indefinitely</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-2 mt-4">4.2 Security Measures</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>End-to-end encryption for data transmission (TLS 1.3)</li>
              <li>Encryption at rest for all stored data (AES-256)</li>
              <li>Multi-factor authentication for administrative access</li>
              <li>Regular security audits and penetration testing</li>
              <li>SOC 2 Type II compliance</li>
              <li>Role-based access controls and principle of least privilege</li>
              <li>Automated vulnerability scanning and patch management</li>
              <li>24/7 security monitoring and incident response</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-2 mt-4">4.3 Data Backup and Recovery</h3>
            <p className="mb-2">
              We maintain secure backups of your data to ensure service continuity and data recovery capabilities. 
              Backups are encrypted, geographically distributed, and subject to the same security controls as production data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Sharing</h2>
            <p>We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. International Data Transfers</h2>
            <p>
              Your information may be processed in countries other than your own. We ensure appropriate 
              safeguards are in place for any international data transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new policy on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Cookies and Tracking Technologies</h2>
            <h3 className="text-xl font-medium text-white mb-2">9.1 Types of Cookies</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for basic site functionality and security</li>
              <li><strong>Performance Cookies:</strong> Help us analyze site usage and improve performance</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Used for targeted advertising and campaign measurement (with consent)</li>
            </ul>
            <p className="mt-4">
              You can manage cookie preferences through your browser settings or our cookie consent manager.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Data Processing Lawful Basis (GDPR)</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Contract Performance:</strong> Processing necessary to perform our services</li>
              <li><strong>Legitimate Interest:</strong> Fraud prevention, security, and service improvement</li>
              <li><strong>Legal Obligation:</strong> Compliance with applicable laws and regulations</li>
              <li><strong>Consent:</strong> Marketing communications and non-essential cookies</li>
              <li><strong>Vital Interest:</strong> Protection of life, health, or safety in emergency situations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. California Privacy Rights (CCPA/CPRA)</h2>
            <h3 className="text-xl font-medium text-white mb-2">11.1 Your Rights</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Right to know what personal information we collect and how it&rsquo;s used</li>
              <li>Right to delete personal information (subject to certain exceptions)</li>
              <li>Right to correct inaccurate personal information</li>
              <li>Right to opt-out of the sale of personal information (we do not sell data)</li>
              <li>Right to limit use of sensitive personal information</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
            </ul>
            
            <h3 className="text-xl font-medium text-white mb-2 mt-4">11.2 How to Exercise Rights</h3>
            <p>
              To exercise your California privacy rights, contact us at privacy@scam.ai or through our 
              customer portal. We will verify your identity and respond within the timeframes required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Children&rsquo;s Privacy</h2>
            <p>
              ScamAI is not intended for individuals under 18 years of age. We do not knowingly collect 
              personal information from children under 18. If we become aware that we have collected 
              information from a child under 18, we will take steps to delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. Data Breach Notification</h2>
            <p>
              In the unlikely event of a data breach that poses a risk to your rights and freedoms, 
              we will notify you and relevant authorities as required by applicable law. We maintain 
              an incident response plan to quickly identify, contain, and remediate any security incidents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">14. Contact Us</h2>
            <h3 className="text-xl font-medium text-white mb-2">14.1 General Inquiries</h3>
            <div className="mb-4">
              <p>Reality Inc.</p>
              <p>Email: privacy@scam.ai</p>
              <p>Website: <a href="https://scam.ai" className="text-blue-400 hover:text-blue-300">https://scam.ai</a></p>
            </div>

            <h3 className="text-xl font-medium text-white mb-2">14.2 Data Protection Officer</h3>
            <p>
              For GDPR-related inquiries, you can contact our Data Protection Officer at: dpo@scam.ai
            </p>

            <h3 className="text-xl font-medium text-white mb-2 mt-4">14.3 Supervisory Authority</h3>
            <p>
              If you believe we have not adequately addressed your privacy concerns, you have the right 
              to lodge a complaint with your local data protection authority.
            </p>
          </section>
        </div>
      </div>
    </SiteShell>
  );
}