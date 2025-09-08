import SiteShell from "@/components/SiteShell";

export default function TermsOfService() {
  return (
    <SiteShell>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-light text-white mb-8">Terms of Service</h1>
        <div className="text-gray-300 space-y-6 leading-relaxed">
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") govern your use of ScamAI, a service provided by Reality Inc. 
              ("Company," "we," "our," or "us"). By accessing or using our service, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
            <p>
              ScamAI is an AI-powered detection platform that identifies deepfakes, voice clones, and synthetic media. 
              Our service helps organizations detect and prevent fraud through advanced machine learning technology.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts and Registration</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>You must provide accurate and complete registration information</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must notify us immediately of any unauthorized account access</li>
              <li>One account per user; sharing accounts is prohibited</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Acceptable Use Policy</h2>
            <h3 className="text-xl font-medium text-white mb-2">4.1 Permitted Uses</h3>
            <p>You may use ScamAI for legitimate business purposes including:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Identity verification and fraud prevention</li>
              <li>Content authenticity verification</li>
              <li>Security and compliance purposes</li>
            </ul>
            
            <h3 className="text-xl font-medium text-white mb-2 mt-4">4.2 Prohibited Uses</h3>
            <p>You may not use our service to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Create, distribute, or facilitate creation of synthetic media</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Process content without proper authorization</li>
              <li>Attempt to reverse engineer our technology</li>
              <li>Use the service for any unlawful or harmful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Content and Data</h2>
            <h3 className="text-xl font-medium text-white mb-2">5.1 Your Content</h3>
            <p>
              You retain ownership of content you submit to our service. By submitting content, you grant us 
              a limited license to process and analyze it for the purpose of providing our detection services.
            </p>
            
            <h3 className="text-xl font-medium text-white mb-2 mt-4">5.2 Content Responsibility</h3>
            <p>
              You are solely responsible for ensuring you have the right to submit content for analysis and 
              that such submission complies with applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Payment Terms</h2>
            <h3 className="text-xl font-medium text-white mb-2">6.1 Billing and Payments</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Fees are due according to your selected billing cycle (monthly, quarterly, or annually)</li>
              <li>Payment is due in advance for each billing period</li>
              <li>We accept major credit cards, ACH transfers, and wire transfers for enterprise customers</li>
              <li>All fees are exclusive of applicable taxes, which are your responsibility</li>
              <li>Late payments may incur a service charge of 1.5% per month or the maximum allowed by law</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-2 mt-4">6.2 Refunds and Cancellations</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>All fees are non-refundable except as required by applicable law</li>
              <li>You may cancel your subscription at any time, effective at the end of your current billing period</li>
              <li>Refunds for annual subscriptions may be prorated for unused months in certain circumstances</li>
              <li>Usage-based charges are final and non-refundable</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-2 mt-4">6.3 Suspension and Termination for Non-Payment</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>We may suspend service immediately for non-payment</li>
              <li>Accounts suspended for 30 days may be terminated and data deleted</li>
              <li>Service restoration requires payment of all outstanding amounts plus any applicable fees</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-2 mt-4">6.4 Price Changes</h3>
            <p>
              We may change our pricing with 30 days' advance notice for monthly plans and 90 days' 
              advance notice for annual plans. Price increases will not affect your current billing 
              period but will apply to subsequent renewals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Service Availability</h2>
            <p>
              While we strive to maintain high availability, we do not guarantee uninterrupted service. 
              We may perform maintenance, updates, or experience technical issues that temporarily affect service availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Intellectual Property</h2>
            <p>
              ScamAI and all related technology, algorithms, and intellectual property are owned by Reality Inc. 
              You may not copy, modify, or create derivative works based on our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Disclaimers and Limitations</h2>
            <h3 className="text-xl font-medium text-white mb-2">9.1 Service Accuracy</h3>
            <p>
              While our AI detection technology is highly advanced, no detection system is 100% accurate. 
              Results should be used as part of a comprehensive security strategy.
            </p>
            
            <h3 className="text-xl font-medium text-white mb-2 mt-4">9.2 Limitation of Liability</h3>
            <p>
              Reality Inc. shall not be liable for any indirect, incidental, special, or consequential damages 
              arising from your use of ScamAI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
            <p>
              Either party may terminate this agreement at any time. Upon termination, your access to the 
              service will cease, and we will delete your data according to our retention policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the jurisdiction where Reality Inc. is incorporated. 
              Any disputes will be resolved through binding arbitration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Material changes will be communicated via email or 
              through our service. Continued use after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. API Usage and Rate Limits</h2>
            <h3 className="text-xl font-medium text-white mb-2">13.1 API Access</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>API access is provided subject to rate limits based on your subscription tier</li>
              <li>You must use valid API keys and follow our authentication protocols</li>
              <li>API usage is monitored and logged for billing and security purposes</li>
              <li>We may throttle or temporarily suspend API access for abuse or excessive usage</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-2 mt-4">13.2 Rate Limits</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Rate limits vary by subscription plan and may be adjusted with notice</li>
              <li>Exceeding rate limits will result in HTTP 429 responses</li>
              <li>Enterprise customers may request custom rate limits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">14. Service Level Agreement (SLA)</h2>
            <h3 className="text-xl font-medium text-white mb-2">14.1 Uptime Commitment</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>We target 99.9% uptime for our production APIs</li>
              <li>Scheduled maintenance windows are announced 48 hours in advance</li>
              <li>SLA credits may be available for enterprise customers experiencing extended outages</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-2 mt-4">14.2 Support Response Times</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Critical Issues:</strong> 2 hours during business hours</li>
              <li><strong>High Priority:</strong> 8 hours during business hours</li>
              <li><strong>Normal Priority:</strong> 24 hours during business hours</li>
              <li><strong>Low Priority:</strong> 72 hours during business hours</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">15. Export Controls and Trade Sanctions</h2>
            <p>
              You agree to comply with all applicable export control laws and trade sanctions. 
              You represent that you are not located in, organized under the laws of, or ordinarily 
              resident in any country subject to comprehensive trade sanctions, and you are not on 
              any government restricted parties list.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">16. Force Majeure</h2>
            <p>
              Neither party will be liable for any failure or delay in performance due to events 
              beyond their reasonable control, including natural disasters, war, terrorism, labor 
              disputes, government actions, or internet service provider failures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">17. Assignment</h2>
            <p>
              You may not assign or transfer these Terms or your account without our prior written 
              consent. We may assign these Terms in connection with a merger, acquisition, or sale 
              of assets with notice to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">18. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any additional terms for specific 
              features, constitute the entire agreement between you and Reality Inc. regarding 
              ScamAI and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">19. Contact Information</h2>
            <h3 className="text-xl font-medium text-white mb-2">19.1 Legal Matters</h3>
            <div className="mb-4">
              <p>Reality Inc.</p>
              <p>Email: legal@scam.ai</p>
              <p>Website: <a href="https://scam.ai" className="text-blue-400 hover:text-blue-300">https://scam.ai</a></p>
            </div>

            <h3 className="text-xl font-medium text-white mb-2">19.2 General Support</h3>
            <p>
              For technical support or general inquiries, please contact support@scam.ai or 
              visit our customer portal.
            </p>
          </section>
        </div>
      </div>
    </SiteShell>
  );
}