export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6" style={{ paddingTop: '140px' }}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#245FFF]">
            TERMS OF SERVICE
          </p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Terms and conditions
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Last updated: January 5, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {/* 1. Agreement to Terms */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">1. Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms of Service ("Terms") govern your use of ScamAI, a service provided by Reality Inc. ("Company," "we," "our," or "us"). By accessing or using our service, you agree to be bound by these Terms.
              </p>
            </div>

            {/* 2. Description of Service */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">2. Description of Service</h2>
              <p className="text-gray-300 leading-relaxed">
                ScamAI is an AI-powered detection platform that identifies deepfakes, voice clones, and synthetic media. Our service helps organizations detect and prevent fraud through advanced machine learning technology.
              </p>
            </div>

            {/* 3. User Accounts and Registration */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">3. User Accounts and Registration</h2>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>You must provide accurate and complete registration information</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You must notify us immediately of any unauthorized account access</li>
                <li>One account per user; sharing accounts is prohibited</li>
              </ul>
            </div>

            {/* 4. Acceptable Use Policy */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">4. Acceptable Use Policy</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">4.1 Permitted Uses</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    You may use ScamAI for legitimate business purposes including:
                  </p>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                    <li>Identity verification and fraud prevention</li>
                    <li>Content authenticity verification</li>
                    <li>Security and compliance purposes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">4.2 Prohibited Uses</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    You may not use our service to:
                  </p>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                    <li>Create, distribute, or facilitate creation of synthetic media</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Process content without proper authorization</li>
                    <li>Attempt to reverse engineer our technology</li>
                    <li>Use the service for any unlawful or harmful purposes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Content and Data */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">5. Content and Data</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">5.1 Your Content</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You retain ownership of content you submit to our service. By submitting content, you grant us a limited license to process and analyze it for the purpose of providing our detection services.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">5.2 Content Responsibility</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You are solely responsible for ensuring you have the right to submit content for analysis and that such submission complies with applicable laws and regulations.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Payment Terms */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">6. Payment Terms</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">6.1 Billing and Payments</h3>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                    <li>Fees are due according to your selected billing cycle (monthly, quarterly, or annually)</li>
                    <li>Payment is due in advance for each billing period</li>
                    <li>We accept major credit cards, ACH transfers, and wire transfers for enterprise customers</li>
                    <li>All fees are exclusive of applicable taxes, which are your responsibility</li>
                    <li>Late payments may incur a service charge of 1.5% per month or the maximum allowed by law</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">6.2 Refunds and Cancellations</h3>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                    <li>All fees are non-refundable except as required by applicable law</li>
                    <li>You may cancel your subscription at any time, effective at the end of your current billing period</li>
                    <li>Refunds for annual subscriptions may be prorated for unused months in certain circumstances</li>
                    <li>Usage-based charges are final and non-refundable</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">6.3 Suspension and Termination for Non-Payment</h3>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                    <li>We may suspend service immediately for non-payment</li>
                    <li>Accounts suspended for 30 days may be terminated and data deleted</li>
                    <li>Service restoration requires payment of all outstanding amounts plus any applicable fees</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">6.4 Price Changes</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We may change our pricing with 30 days' advance notice for monthly plans and 90 days' advance notice for annual plans. Price increases will not affect your current billing period but will apply to subsequent renewals.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Service Availability */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">7. Service Availability</h2>
              <p className="text-gray-300 leading-relaxed">
                While we strive to maintain high availability, we do not guarantee uninterrupted service. We may perform maintenance, updates, or experience technical issues that temporarily affect service availability.
              </p>
            </div>

            {/* 8. Intellectual Property */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">8. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                ScamAI and all related technology, algorithms, and intellectual property are owned by Reality Inc. You may not copy, modify, or create derivative works based on our service.
              </p>
            </div>

            {/* 9. Disclaimers and Limitations */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">9. Disclaimers and Limitations</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">9.1 Service Accuracy</h3>
                  <p className="text-gray-300 leading-relaxed">
                    While our AI detection technology is highly advanced, no detection system is 100% accurate. Results should be used as part of a comprehensive security strategy.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">9.2 Limitation of Liability</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Reality Inc. shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of ScamAI.
                  </p>
                </div>
              </div>
            </div>

            {/* 10. Termination */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">10. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                Either party may terminate this agreement at any time. Upon termination, your access to the service will cease, and we will delete your data according to our retention policies.
              </p>
            </div>

            {/* 11. Governing Law */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">11. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms are governed by the laws of the jurisdiction where Reality Inc. is incorporated. Any disputes will be resolved through binding arbitration.
              </p>
            </div>

            {/* 12. Changes to Terms */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">12. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We may modify these Terms at any time. Material changes will be communicated via email or through our service. Continued use after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* 13. API Usage and Rate Limits */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">13. API Usage and Rate Limits</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">13.1 API Access</h3>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                    <li>API access is provided subject to rate limits based on your subscription tier</li>
                    <li>You must use valid API keys and follow our authentication protocols</li>
                    <li>API usage is monitored and logged for billing and security purposes</li>
                    <li>We may throttle or temporarily suspend API access for abuse or excessive usage</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">13.2 Rate Limits</h3>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                    <li>Rate limits vary by subscription plan and may be adjusted with notice</li>
                    <li>Exceeding rate limits will result in HTTP 429 responses</li>
                    <li>Enterprise customers may request custom rate limits</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 14. Service Level Agreement (SLA) */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">14. Service Level Agreement (SLA)</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">14.1 Uptime Commitment</h3>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                    <li>We target 99.9% uptime for our production APIs</li>
                    <li>Scheduled maintenance windows are announced 48 hours in advance</li>
                    <li>SLA credits may be available for enterprise customers experiencing extended outages</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">14.2 Support Response Times</h3>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                    <li>Critical Issues: 2 hours during business hours</li>
                    <li>High Priority: 8 hours during business hours</li>
                    <li>Normal Priority: 24 hours during business hours</li>
                    <li>Low Priority: 72 hours during business hours</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 15. Export Controls and Trade Sanctions */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">15. Export Controls and Trade Sanctions</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to comply with all applicable export control laws and trade sanctions. You represent that you are not located in, organized under the laws of, or ordinarily resident in any country subject to comprehensive trade sanctions, and you are not on any government restricted parties list.
              </p>
            </div>

            {/* 16. Force Majeure */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">16. Force Majeure</h2>
              <p className="text-gray-300 leading-relaxed">
                Neither party will be liable for any failure or delay in performance due to events beyond their reasonable control, including natural disasters, war, terrorism, labor disputes, government actions, or internet service provider failures.
              </p>
            </div>

            {/* 17. Assignment */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">17. Assignment</h2>
              <p className="text-gray-300 leading-relaxed">
                You may not assign or transfer these Terms or your account without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets with notice to you.
              </p>
            </div>

            {/* 18. Entire Agreement */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">18. Entire Agreement</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms, together with our Privacy Policy and any additional terms for specific features, constitute the entire agreement between you and Reality Inc. regarding ScamAI and supersede all prior agreements and understandings.
              </p>
            </div>

            {/* 19. Contact Information */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">19. Contact Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">19.1 Legal Matters</h3>
                  <div className="space-y-2">
                    <p className="text-gray-300">Reality Inc.</p>
                    <p className="text-gray-300">
                      Email: <a href="mailto:legal@scam.ai" className="text-[#245FFF] hover:underline">legal@scam.ai</a>
                    </p>
                    <p className="text-gray-300">
                      Website: <a href="https://scam.ai" className="text-[#245FFF] hover:underline">https://scam.ai</a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#245FFF]">19.2 General Support</h3>
                  <p className="text-gray-300 leading-relaxed">
                    For technical support or general inquiries, please contact <a href="mailto:support@scam.ai" className="text-[#245FFF] hover:underline">support@scam.ai</a> or visit our customer portal.
                  </p>
                </div>
              </div>
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
            Start protecting your platform with 200 free images per month.
          </p>
          <a
            href="https://app.scam.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#245FFF] text-white font-semibold rounded-lg hover:bg-[#1d4acc] transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
