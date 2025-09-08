"use client";

import SiteShell from "@/components/SiteShell";
import HeroSection from "@/components/sections/HeroSection";
import LogoBar from "@/components/sections/LogoBar";
import AnimatedTwoColumn from "@/components/sections/AnimatedTwoColumn";
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

        {/* Full Width Warning Section - Apple Style */}
        <div className="w-full bg-gray-100 py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-lg text-gray-600 mb-4">Scammers steal</p>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-8">
              Your face.<br />
              Your voice.
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              ScamAI detection technology, models, and services work together to 
              protect your identity from deepfakes and voice cloning — whether 
              you're an individual or an enterprise.
            </p>
          </div>
        </div>

        {/* Animated Two Column Section - Apple Style */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Column - Light Background */}
          <div className="w-full md:w-1/2 bg-blue-50 py-20 px-8 flex flex-col items-center justify-between text-center">
            <div className="space-y-2">
              <h2 className="text-4xl font-semibold text-gray-900">Deepfake</h2>
              <p className="text-gray-600">
                Uncompromising accuracy.
              </p>
            </div>
            
            
            <div className="mt-8">
              <img 
                src="/deeepfake-detection.png" 
                alt="Deepfake" 
                className="max-w-[80%] mx-auto object-contain"
              />
            </div>
            
          </div>
          
          {/* Right Column - Dark Background */}
          <div className="w-full md:w-1/2 bg-black py-20 px-8 flex flex-col items-center justify-between text-center">
            <div className="space-y-2">
              <h2 className="text-4xl font-semibold text-white">Voice Cloning</h2>
              <p className="text-gray-300">
                Unbelievably accurate. Incredibly fast.
              </p>
            </div>
            
            
            <div className="mt-8">
              <img 
                src="/voice-detected.png" 
                alt="Voice Cloning" 
                className="max-w-[80%] mx-auto object-contain"
              />
            </div>
            
          </div>
        </div>
        
      </div>
    </SiteShell>
  );
}
