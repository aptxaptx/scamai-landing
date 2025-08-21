import SiteShell from "@/components/SiteShell";
import Link from "next/link";

export default function FinancialInvestmentPage() {
  return (
    <SiteShell>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 pt-16 sm:pt-24 pb-12">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-medium text-white mb-6 leading-tight">
            Financial Investment Scams
          </h1>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-[1.77] text-left">
            Investment scams promise high returns with little risk, but they're designed to steal your money. Scammers use sophisticated tactics to make fraudulent investments appear legitimate and profitable.
          </p>
          
          {/* Image Placeholder */}
          <div className="my-12 bg-gray-800 rounded-lg h-64 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Picture</span>
          </div>
        </section>

        {/* What is a Financial Investment Scam */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            What is a Financial Investment Scam?
          </h2>
          <p className="text-lg text-white/80 leading-[1.77] mb-6">
            AI-generated voices, videos, and documents are used to create fraudulent payment requests or financial approvals. These scams exploit trust in official-looking communications to redirect funds or authorize unauthorized transactions.
          </p>
          
          {/* Highlighted Box */}
          <div className="border-l-4 border-white bg-white/5 p-6 my-12">
            <p className="text-xl text-white font-medium leading-[1.77]">
              If an investment opportunity sounds too good to be true, it probably is. Legitimate investments rarely promise guaranteed high returns with no risk.
            </p>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            Warning Signs:
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Requests for urgent wire transfers or payments outside of established workflows.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Instructions to bypass multi-step approval or compliance checks.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Slightly altered sender details such as email domains or account numbers.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Payment requests inconsistent with past vendor history or financial records.
              </p>
            </div>
          </div>
        </section>

        {/* How to Protect Yourself */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            Protect Yourself:
          </h2>
          <p className="text-lg text-white/80 leading-[1.77] mb-8 text-left">
            Protect your money by following these essential investment safety guidelines:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Multi-Level Approvals
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Require dual or multi-level approvals for all high-value financial actions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Verify Payment Requests
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Verify payment requests through known contacts and trusted channels.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Vendor Validation
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Maintain strict vendor validation and regularly update payment records.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Transaction Monitoring
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Monitor for anomalies in transaction amounts, timing, or beneficiary details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product CTA Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            How Can Our Product Help?
          </h2>
          <div className="bg-white/5 rounded-lg p-8">
            <p className="text-lg text-white/80 leading-[1.77] mb-6">
              Our investment scam detection technology analyzes investment opportunities and alerts you to potential fraud before you risk your money.
            </p>
            <Link 
              href="/demo"
              className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors text-lg"
            >
              Get Protected Now
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <Link 
            href="/stories/type-of-scams"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            ← Back to Types of Scams
          </Link>
          <Link 
            href="/stories/type-of-scams/romance"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Next: Romance Scam →
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
