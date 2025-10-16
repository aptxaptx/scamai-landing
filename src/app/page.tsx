"use client";

import SiteShell from "@/components/SiteShell";
import LogoBar from "@/components/sections/LogoBar";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import Image from "next/image";

export default function Home() {
  const secondaryLinks: string[] = [];

  return (
    <SiteShell secondaryLinks={secondaryLinks}>
      <div className="relative w-full">
        {/* Hero Section - Minimalist Style */}
        <div className="relative w-full bg-white py-32 md:py-40 lg:py-48">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight mb-8">
              Protect Against
              <br />
              AI-Powered Fraud
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl">
              APIs for deepfakes, voice clones and frauds detection
            </p>
          </div>
        </div>

        {/* Logo Bar Section */}
        <LogoBar />

        {/* Full Width Hero Section - Apple Style */}
        <div className="relative w-full bg-gradient-to-b from-gray-50 to-white py-32 text-center overflow-hidden">
          <InteractiveGridPattern
            width={60}
            height={60}
            squares={[40, 20]}
            className="absolute inset-0 opacity-30"
          />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <p className="text-xl md:text-2xl text-gray-500 mb-6 font-light tracking-wide">
              Scammers can steal
            </p>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-12 leading-tight tracking-tight">
              Your face.
              <br />
              Your voice.
            </h2>

            {/* Description Section */}
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
                Fraudsters weaponize AI to bypass identity verification and KYC
                systems with synthetic identities and voice clones.
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Feature Section - Apple Style */}
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Column - Dark Background */}
          <div className="w-full lg:w-1/2 bg-gradient-to-b from-gray-900 to-black pt-32 pb-16 px-12 flex flex-col items-center justify-center text-center min-h-[600px]">
            <div className="space-y-8 max-w-lg">
              <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
                Deepfake
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                Traditional detection methods fail against sophisticated
                deepfake attacks. IDV/KYC vendors are not ready.
              </p>

              <div className="pt-8">
                <div className="relative">
                  <Image
                    src="/deepfake_frame.webp"
                    alt="Deepfake Detection"
                    width={500}
                    height={300}
                    className="max-w-full mx-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 opacity-60 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 opacity-60 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Light Background */}
          <div className="w-full lg:w-1/2 bg-gradient-to-b from-gray-50 to-gray-100 pt-32 pb-16 px-12 flex flex-col items-center justify-center text-center min-h-[600px]">
            <div className="space-y-8 max-w-lg">
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight leading-tight">
                Voice Clone
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                A desperate call from your child. An urgent plea from your
                parent. The voice sounds real, but it&rsquo;s not them.
              </p>

              <div className="pt-8">
                <div className="relative">
                  <Image
                    src="/voice-clone-detect.webp"
                    alt="Voice Clone Detection"
                    width={500}
                    height={300}
                    className="max-w-full mx-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-transparent to-gray-100 opacity-60 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-transparent to-gray-100 opacity-60 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full bg-black py-24 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Ready to Protect Your Organization?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed">
              Get advanced deepfake and voice clone detection technology to
              safeguard your business from AI-driven fraud.
            </p>
            <div className="flex justify-center">
              <a
                href="https://cal.com/scamai/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
