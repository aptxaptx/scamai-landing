import SiteShell from "@/components/SiteShell";
import Link from "next/link";

export default function IdentityTheftPage() {
  return (
    <SiteShell>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 pt-16 sm:pt-24 pb-12">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-medium text-white mb-6 leading-tight">
            Identity Theft Scams
          </h1>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-[1.77] text-left">
            Identity theft is one of the most devastating types of fraud. Scammers steal personal information to open accounts, make purchases, or commit crimes in your name, leaving you to deal with the financial and legal consequences.
          </p>
          
          {/* Image */}
          <div className="my-12">
            <img 
              src="/identity-theft-scam.png" 
              alt="Identity Theft Scam Illustration" 
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </section>

        {/* What is Identity Theft */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            What is Identity Theft?
          </h2>
          <p className="text-lg text-white/80 leading-[1.77] mb-6">
            Scammers misuse stolen, leaked, or AI-synthesized identity data to impersonate individuals or create synthetic profiles. These stolen identities are used to bypass verification, gain unauthorized access, or open fraudulent accounts.
          </p>
          
          {/* Highlighted Box */}
          <div className="border-l-4 border-white bg-white/5 p-6 my-12">
            <p className="text-xl text-white font-medium leading-[1.77]">
              Identity theft can go undetected for months, allowing scammers to cause extensive damage before you even realize what&apos;s happening.
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
                Multiple accounts sharing the same contact details or credentials.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Inconsistencies between official documents, financial history, or identity records.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Requests to skip standard onboarding, due diligence, or background checks.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Unexpected alerts such as new account activity, login attempts, or verification prompts.
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
            Take proactive steps to protect your identity and personal information:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Strong Onboarding Verification
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Enforce strong onboarding verification, including biometric or multi-factor authentication.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Monitor Account Activity
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Monitor accounts for unusual activity or overlapping identity details.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Restrict Data Access
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Restrict access to sensitive data and apply least-privilege principles.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Regular Security Audits
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Conduct regular audits to identify and remove compromised or fraudulent accounts.
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
              Our identity theft protection technology monitors your personal information across the dark web and alerts you to potential threats before they become serious problems.
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
            href="/stories/type-of-scams/financial-investment"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Next: Financial Investment Scams →
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
