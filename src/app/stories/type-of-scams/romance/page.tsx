import SiteShell from "@/components/SiteShell";
import Link from "next/link";

export default function RomancePage() {
  return (
    <SiteShell>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 pt-16 sm:pt-24 pb-12">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-medium text-white mb-6 leading-tight">
            Romance Scams
          </h1>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-[1.77] text-left">
            Romance scams target people looking for love and companionship. Scammers create fake online personas and build emotional connections with victims, only to exploit their trust for financial gain.
          </p>
          
          {/* Image Placeholder */}
          <div className="my-12 bg-gray-800 rounded-lg h-64 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Picture</span>
          </div>
        </section>

        {/* What is a Romance Scam */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            What is a Romance Scam?
          </h2>
          <p className="text-lg text-white/80 leading-[1.77] mb-6">
            Fraudsters create AI-driven personas on social or dating platforms, using synthetic images, text, and even voices to build trust. Once trust is established, they exploit victims emotionally or financially, often escalating requests over time.
          </p>
          
          {/* Highlighted Box */}
          <div className="border-l-4 border-white bg-white/5 p-6 my-12">
            <p className="text-xl text-white font-medium leading-[1.77]">
              Romance scammers are masters of manipulation, using emotional tactics to exploit victims' desire for love and connection.
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
                Profiles with flawless images, little personal history, or recently created accounts.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Rapid emotional escalation, constant flattery, or "love-bombing."
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Consistent avoidance of live meetings or verifiable video calls.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Repeated or escalating requests for money, crypto, or gift cards.
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
            Protect your heart and your wallet from romance scams with these essential safety tips:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Healthy Skepticism
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Encourage healthy skepticism of online relationships that develop unusually quickly.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Avoid Financial Requests
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Avoid sending money or sensitive personal data to individuals met only online.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Verify Identities
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Verify identities through independent and trusted methods.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Report Suspicious Activity
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Report suspicious accounts to platform administrators and security teams.
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
              Our romance scam detection technology analyzes online profiles and communication patterns to identify potential fraudsters before they can exploit your emotions.
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
            href="/stories/type-of-scams/voice-cloning"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Next: Voice Cloning Scam →
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
