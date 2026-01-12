import SiteShell from "@/components/SiteShell";
import Link from "next/link";
import Image from "next/image";

export default function FaceSwappingPage() {
  return (
    <SiteShell>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 pt-16 sm:pt-24 pb-12">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-medium text-white mb-6 leading-tight">
            AI Face Swapping Scams
          </h1>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-[1.77] text-left">
            Advanced AI technology is being used to create convincing fake videos and images by swapping faces. These deepfake scams can be incredibly persuasive, making it difficult to distinguish between real and manipulated content.
          </p>
          
          {/* Image */}
          <div className="my-12">
            <Image 
              src="/face-swapping scam.png" 
              alt="Face Swapping Scam Illustration" 
              width={800}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </section>

        {/* What is a Face Swapping Scam */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            What is a Face Swapping Scam?
          </h2>
          <p className="text-lg text-white/80 leading-[1.77] mb-6">
            Criminals use advanced AI to manipulate or generate video footage, replacing a person&apos;s face or simulating real-time video calls. These deepfakes can convincingly impersonate leaders, employees, or public figures to deceive viewers and drive harmful actions.
          </p>
          
          {/* Highlighted Box */}
          <div className="border-l-4 border-white bg-white/5 p-6 my-12">
            <p className="text-xl text-white font-medium leading-[1.77]">
              Seeing is no longer believing. AI-generated face swaps can create convincing fake videos that are nearly impossible to detect with the naked eye.
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
                Lip movements not perfectly aligned with spoken words.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Irregular eye blinking, unnatural facial movements, or distortions.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Lighting, shadows, or reflections inconsistent with the environment.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Unexpected video call requests from unusual or spoofed accounts.
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
            Stay vigilant and use multiple verification methods to protect yourself from face swapping scams:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Verify Identity Beyond Video
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Do not rely on video presence alone as proof of identity.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Implement Secondary Verification
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Implement protocols requiring secondary verification for sensitive instructions given over video.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Educate Your Team
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Educate staff that &quot;seeing is believing&quot; no longer applies in the AI era.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Use Secure Collaboration Tools
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Use secure collaboration tools with stronger authentication methods.
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
              Our advanced face swapping detection technology uses sophisticated AI algorithms to identify manipulated content and protect you from deepfake scams.
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
            href="/stories/type-of-scams/ai-generated-images"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Next: AI-Generated Images Scam →
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
