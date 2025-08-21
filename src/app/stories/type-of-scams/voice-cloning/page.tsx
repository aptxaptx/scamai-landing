import SiteShell from "@/components/SiteShell";
import Link from "next/link";
import Image from "next/image";

export default function VoiceCloningPage() {
  return (
    <SiteShell>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 pt-16 sm:pt-24 pb-12">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-medium text-white mb-6 leading-tight">
            AI Voice Cloning Scams
          </h1>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-[1.77] text-left">
            A new wave of sophisticated scams is leveraging artificial intelligence to replicate the voices of people you trust. Here&apos;s a breakdown of how these scams work, the warning signs to look for, and the steps you can take to protect yourself.
          </p>
          
          {/* Image */}
          <div className="my-12">
            <Image 
              src="/voice-cloning-scam.png" 
              alt="Voice Cloning Scam Illustration" 
              width={800}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </section>

        {/* What is a Voice Cloning Scam */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            What is Voice Clone Scam?
          </h2>
          <p className="text-lg text-white/80 leading-[1.77] mb-6">
            Attackers use AI to replicate real voices with high accuracy, making calls that sound nearly identical to trusted colleagues, leaders, or relatives. These synthetic voices are often used to demand money transfers, share confidential data, or override normal processes.
          </p>
          
          {/* Highlighted Box */}
          <div className="border-l-4 border-white bg-white/5 p-6 my-12">
            <p className="text-xl text-white font-medium leading-[1.77]">
              A familiar voice is no longer a guarantee of authenticity. Verifying a caller&apos;s identity through a separate channel is now essential.
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
                Voice sounds right but speech rhythm or emotional tone feels unnatural.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Caller insists on urgency, secrecy, or skipping normal checks.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Inconsistencies in background noise, echo, or call quality.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Refusal to verify through other secure channels.
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
            Stay vigilant and use multiple verification methods to protect yourself from voice cloning scams:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Establish Security Policies
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Establish policies that no sensitive or financial action can be taken based on a single voice request.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Train Your Team
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Train employees to recognize voice cloning tactics and unusual caller behavior.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Multi-Channel Verification
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Require multi-channel verification. Callback to known number, secure messaging, or in-person confirmation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Layered Approval Process
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Keep layered approval processes in place for financial or sensitive requests.
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
              Our advanced voice cloning detection technology provides real-time protection against AI-generated voice fraud, helping you stay one step ahead of scammers.
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
            href="/stories/type-of-scams/face-swapping"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Next: Face Swapping Scam →
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
