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

        {/* Full Width Hero Section - Apple Style */}
        <div className="relative w-full bg-gradient-to-b from-gray-50 to-white py-32 text-center overflow-hidden">
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
          
          {/* Floating Photo Placeholders */}
          <div className="floating-photo floating-photo-1">
            <div className="bg-gray-300 rounded-lg shadow-lg opacity-60"></div>
          </div>
          <div className="floating-photo floating-photo-2">
            <div className="bg-gray-400 rounded-lg shadow-lg opacity-50"></div>
          </div>
          <div className="floating-photo floating-photo-3">
            <div className="bg-gray-300 rounded-lg shadow-lg opacity-40"></div>
          </div>
          <div className="floating-photo floating-photo-4">
            <div className="bg-gray-500 rounded-lg shadow-lg opacity-30"></div>
          </div>
          <div className="floating-photo floating-photo-5">
            <div className="bg-gray-400 rounded-lg shadow-lg opacity-50"></div>
          </div>
          <div className="floating-photo floating-photo-6">
            <div className="bg-gray-300 rounded-lg shadow-lg opacity-35"></div>
          </div>
          
          <style jsx>{`
            .floating-photo {
              position: absolute;
              animation-fill-mode: both;
            }
            
            .floating-photo > div {
              width: 100%;
              height: 100%;
            }
            
            .floating-photo-1 {
              width: 120px;
              height: 80px;
              top: 15%;
              left: -150px;
              animation: slideInFromLeft 2s ease-out 0.5s forwards, float 6s ease-in-out 2.5s infinite;
            }
            
            .floating-photo-2 {
              width: 100px;
              height: 100px;
              top: 25%;
              right: -140px;
              animation: slideInFromRight 2.2s ease-out 1s forwards, float 5s ease-in-out 3.2s infinite;
            }
            
            .floating-photo-3 {
              width: 140px;
              height: 90px;
              bottom: 30%;
              left: -160px;
              animation: slideInFromLeft 2.1s ease-out 1.5s forwards, float 7s ease-in-out 3.6s infinite;
            }
            
            .floating-photo-4 {
              width: 110px;
              height: 70px;
              bottom: 15%;
              right: -130px;
              animation: slideInFromRight 1.9s ease-out 2s forwards, float 5.5s ease-in-out 3.9s infinite;
            }
            
            .floating-photo-5 {
              width: 90px;
              height: 90px;
              top: 45%;
              left: -120px;
              animation: slideInFromLeft 2.3s ease-out 0.8s forwards, float 6.5s ease-in-out 3.1s infinite;
            }
            
            .floating-photo-6 {
              width: 130px;
              height: 85px;
              top: 60%;
              right: -150px;
              animation: slideInFromRight 2s ease-out 1.8s forwards, float 5.8s ease-in-out 3.8s infinite;
            }
            
            @keyframes slideInFromLeft {
              from {
                transform: translateX(0);
                opacity: 0;
              }
              to {
                transform: translateX(200px);
                opacity: var(--final-opacity, 0.6);
              }
            }
            
            @keyframes slideInFromRight {
              from {
                transform: translateX(0);
                opacity: 0;
              }
              to {
                transform: translateX(-200px);
                opacity: var(--final-opacity, 0.5);
              }
            }
            
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              33% {
                transform: translateY(-10px);
              }
              66% {
                transform: translateY(5px);
              }
            }
          `}</style>
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
