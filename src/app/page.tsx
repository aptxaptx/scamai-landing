"use client";

import SiteShell from "@/components/SiteShell";
import HeroSection from "@/components/sections/HeroSection";
import LogoBar from "@/components/sections/LogoBar";
import AnimatedTwoColumn from "@/components/sections/AnimatedTwoColumn";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { AnimatePresence } from "framer-motion";
import { HERO_CONFIG } from "@/constants";
import Image from "next/image";

export default function Home() {
  const secondaryLinks: string[] = [];

  return (
    <SiteShell secondaryLinks={secondaryLinks}>
      <div className="relative w-full">
        {/* Hero Section */}
        <AnimatePresence>
          <HeroSection hero={HERO_CONFIG} />
        </AnimatePresence>

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
            <p className="text-xl md:text-2xl text-gray-500 mb-6 font-light tracking-wide">Scammers can steal</p>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-12 leading-tight tracking-tight">
              Your face.<br />
              Your voice.
            </h2>
            
            {/* Description Section */}
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
                Fraudsters weaponize AI to bypass identity verification and KYC systems with synthetic identities and voice clones.
              </p>
            </div>
            
          </div>
        </div>

        {/* Two Column Feature Section - Apple Style */}
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Column - Light Background */}
          <div className="w-full lg:w-1/2 bg-gradient-to-b from-gray-50 to-gray-100 py-32 px-12 flex flex-col items-center justify-center text-center min-h-[600px]">
            <div className="space-y-8 max-w-lg">
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight leading-tight">Deepfake</h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                Traditional detection methods fail against sophisticated deepfake attacks. IDV/KYC vendors are not ready.
              </p>
              
              <div className="pt-8">
                <img 
                  src="/deeepfake-detection.png" 
                  alt="Deepfake Detection" 
                  className="max-w-full mx-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Right Column - Dark Background */}
          <div className="w-full lg:w-1/2 bg-gradient-to-b from-gray-900 to-black py-32 px-12 flex flex-col items-center justify-center text-center min-h-[600px]">
            <div className="space-y-8 max-w-lg">
              <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">Voice Clone</h2>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                A desperate call from your child. An urgent plea from your parent. The voice sounds real, but it's not them.
              </p>
              
              <div className="pt-8">
                <img 
                  src="/voice-detected.png" 
                  alt="Voice Cloning Detection" 
                  className="max-w-full mx-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </SiteShell>
  );
}
