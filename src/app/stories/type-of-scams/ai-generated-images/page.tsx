import SiteShell from "@/components/SiteShell";
import Link from "next/link";

export default function AIGeneratedImagesPage() {
  return (
    <SiteShell>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 pt-16 sm:pt-24 pb-12">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-medium text-white mb-6 leading-tight">
            AI-Generated Images Scams
          </h1>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-[1.77] text-left">
            Artificial intelligence can now create incredibly realistic images that never existed. Scammers use these AI-generated images to create fake profiles, fake products, and fake evidence to deceive victims.
          </p>
          
          {/* Image */}
          <div className="my-12">
            <img 
              src="/AI-image-scam.png" 
              alt="AI-Generated Images Scam Illustration" 
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </section>

        {/* What is an AI-Generated Images Scam */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 mt-12">
            What is an AI-Generated Images Scam?
          </h2>
          <p className="text-lg text-white/80 leading-[1.77] mb-6">
            AI tools generate hyper-realistic but fake images that can be used in fake profiles, fabricated documents, or misleading media. These images add false credibility to scams, creating trust in people, events, or credentials that do not exist.
          </p>
          
          {/* Highlighted Box */}
          <div className="border-l-4 border-white bg-white/5 p-6 my-12">
            <p className="text-xl text-white font-medium leading-[1.77]">
              AI can now create images so realistic that even experts struggle to distinguish them from real photographs.
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
                Lighting, shadows, or reflections inconsistent with the surrounding scene.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Distorted or asymmetrical features such as hands, teeth, or accessories.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Overly smooth skin textures or unnatural blending of backgrounds.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <p className="text-lg text-white/80 leading-[1.77]">
                Photos or documents lacking verifiable metadata or source information.
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
            Stay vigilant and use multiple verification methods to protect yourself from AI-generated image scams:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Critical Image Review
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Encourage critical review of images used as evidence or identity proof.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Use Verification Tools
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Use reverse image search and forensic tools to validate suspicious photos.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Multiple Data Points
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Require multiple trusted data points before relying on visual content.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-white text-lg">•</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Staff Training
                </h3>
                <p className="text-lg text-white/80 leading-[1.77]">
                  Train staff to look for visual artifacts and inconsistencies in digital media.
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
              Our AI-generated image detection technology uses advanced machine learning to identify fake images and protect you from visual deception scams.
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
            href="/stories/type-of-scams/identity-theft"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Next: Identity Theft Scams →
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
