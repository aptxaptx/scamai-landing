"use client";

import { Bento46, Bento53 } from "@/components/bento";
import { BentoV1_18, BentoV1_20 } from "@/components/bento-v1";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animated Section Component
function AnimatedSection({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AudioDetectionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="landing-section relative overflow-hidden bg-black" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingTop: '90px',
        backgroundImage: 'url(/audio.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 w-full max-w-4xl px-8 sm:px-10 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5 lg:space-y-6">
            <AnimatedSection delay={0.2}>
              <p className="text-[10px] font-semibold text-gray-400 tracking-[0.15em] uppercase sm:text-xs">
                AUDIO DETECTION
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <h1 className="text-3xl font-bold leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl max-w-3xl px-2 sm:px-0">
                Detect voice cloning and synthetic audio
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="max-w-2xl text-sm leading-[1.7] text-gray-300 sm:text-base sm:leading-relaxed lg:text-lg px-4 sm:px-0">
                <p className="text-center">
                  Advanced AI-powered analysis to identify <span className="font-semibold text-white">AI-generated voices</span>, <span className="font-semibold text-white">voice cloning attempts</span>, and <span className="font-semibold text-white">manipulated audio content</span> with industry-leading precision.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div className="pt-4 sm:pt-3">
                <a
                  href="mailto:sales@scam.ai"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#245FFF] rounded-lg hover:bg-[#1d4acc] transition-colors duration-200"
                >
                  Contact Sales
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="landing-section relative overflow-hidden bg-black">
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:max-w-7xl py-20 sm:py-24 lg:py-32">
          {/* Section Title */}
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-20">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-400 mb-4 sm:text-[10px] lg:mb-6">
                ADVANCED CAPABILITIES
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
                Advanced Audio <span className="text-[#245FFF]">Analysis</span>
              </h2>
            </div>
          </AnimatedSection>

          {/* Feature 1: Voice Cloning Detection - Bento on Right */}
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-28">
              <div className="lg:pl-12 flex flex-col justify-center" style={{ minHeight: '400px' }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#245FFF] mb-4 sm:text-xs lg:mb-6">
                  VOICE CLONING DETECTION
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.15] lg:mb-6">
                  Identify AI-Generated Voices
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                  Identify AI-generated voice clones with <span className="font-semibold text-white">98.5% accuracy</span> across multiple languages, accents, and speech patterns.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Get instant results with processing times <span className="font-semibold text-white">under 3 seconds</span> for audio clips, enabling live call verification and streaming analysis.
                </p>
              </div>
              <div className="relative flex items-center justify-center" style={{ minHeight: '400px' }}>
                <div className="w-full max-w-[400px]" style={{ height: '400px', transform: 'scale(1.2)' }}>
                  <Bento46 />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Feature 2: Synthetic Speech - Bento on Left */}
          <AnimatedSection delay={0.2}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-28">
              <div className="order-2 lg:order-1 relative flex items-center justify-center" style={{ minHeight: '400px' }}>
                <div className="w-full max-w-[400px]" style={{ height: '400px', transform: 'scale(1.2)' }}>
                  <BentoV1_20 />
                </div>
              </div>
              <div className="order-1 lg:order-2 flex flex-col justify-center" style={{ minHeight: '400px' }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#245FFF] mb-4 sm:text-xs lg:mb-6">
                  TTS DETECTION
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.15] lg:mb-6">
                  Synthetic Speech Analysis
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                  Detect text-to-speech output from major AI models including <span className="font-semibold text-white">ElevenLabs, PlayHT, Azure TTS</span>, and emerging voice synthesis platforms.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Works seamlessly with <span className="font-semibold text-white">MP3, WAV, M4A, FLAC, OGG</span> and all major audio formats for maximum compatibility.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Feature 3: Audio Manipulation - Bento on Right */}
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-28">
              <div className="lg:pl-12 flex flex-col justify-center" style={{ minHeight: '400px' }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#245FFF] mb-4 sm:text-xs lg:mb-6">
                  MANIPULATION DETECTION
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.15] lg:mb-6">
                  Audio Manipulation Detection
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Identify spliced audio segments, pitch modifications, speed alterations, and other sophisticated audio manipulations. Our advanced algorithms detect even subtle edits that human ears might miss.
                </p>
              </div>
              <div className="relative flex items-center justify-center" style={{ minHeight: '400px' }}>
                <div className="w-full max-w-[400px]" style={{ height: '400px', transform: 'scale(1.2)' }}>
                  <Bento53 />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Feature 4: Integration - Bento on Left */}
          <AnimatedSection delay={0.2}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 relative flex items-center justify-center" style={{ minHeight: '400px' }}>
                <div className="w-full max-w-[400px]" style={{ height: '400px', transform: 'scale(1.2)' }}>
                  <BentoV1_18 />
                </div>
              </div>
              <div className="order-1 lg:order-2 flex flex-col justify-center" style={{ minHeight: '400px' }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#245FFF] mb-4 sm:text-xs lg:mb-6">
                  EASY INTEGRATION
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.15] lg:mb-6">
                  Simple API Integration
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Easy REST API integration with comprehensive documentation for real-time or batch audio verification workflows. Get started in minutes with our SDKs and 24/7 developer support.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="landing-section relative overflow-hidden bg-black" style={{
        backgroundImage: 'url(/session4.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:max-w-7xl py-20 sm:py-24 lg:py-32">
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-20">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-400 mb-4 sm:text-[10px] lg:mb-6">
                REAL-WORLD APPLICATIONS
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
                Trusted across <span className="text-[#245FFF]">industries</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-gray-800/50 bg-gray-900/40 backdrop-blur-sm p-8 lg:p-10 h-full">
                <h3 className="mb-4 text-2xl sm:text-3xl font-bold text-white">Call Centers & Customer Service</h3>
                <p className="mb-6 text-base sm:text-lg text-gray-300 leading-relaxed">
                  Protect against voice impersonation and fraud attempts in customer service interactions with real-time verification.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start text-base sm:text-lg">
                    <svg className="w-5 h-5 text-[#245FFF] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Caller authentication verification</span>
                  </li>
                  <li className="flex items-start text-base sm:text-lg">
                    <svg className="w-5 h-5 text-[#245FFF] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Voice biometric security enhancement</span>
                  </li>
                  <li className="flex items-start text-base sm:text-lg">
                    <svg className="w-5 h-5 text-[#245FFF] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fraud prevention and detection</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-gray-800/50 bg-gray-900/40 backdrop-blur-sm p-8 lg:p-10 h-full">
                <h3 className="mb-4 text-2xl sm:text-3xl font-bold text-white">Banking & Financial Services</h3>
                <p className="mb-6 text-base sm:text-lg text-gray-300 leading-relaxed">
                  Prevent voice phishing (vishing) scams and unauthorized account access through voice authentication bypass attempts.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start text-base sm:text-lg">
                    <svg className="w-5 h-5 text-[#245FFF] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Voice banking security verification</span>
                  </li>
                  <li className="flex items-start text-base sm:text-lg">
                    <svg className="w-5 h-5 text-[#245FFF] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Phone authentication protection</span>
                  </li>
                  <li className="flex items-start text-base sm:text-lg">
                    <svg className="w-5 h-5 text-[#245FFF] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vishing attack detection</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl border border-gray-800/50 bg-gray-900/40 backdrop-blur-sm p-8 lg:p-10 h-full">
                <h3 className="mb-4 text-2xl sm:text-3xl font-bold text-white">Media & Broadcasting</h3>
                <p className="mb-6 text-base sm:text-lg text-gray-300 leading-relaxed">
                  Verify the authenticity of audio recordings and prevent the spread of manipulated interviews, statements, or broadcasts.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start text-base sm:text-lg">
                    <svg className="w-5 h-5 text-[#245FFF] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Audio source verification</span>
                  </li>
                  <li className="flex items-start text-base sm:text-lg">
                    <svg className="w-5 h-5 text-[#245FFF] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Interview authenticity validation</span>
                  </li>
                  <li className="flex items-start text-base sm:text-lg">
                    <svg className="w-5 h-5 text-[#245FFF] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Content integrity protection</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="rounded-2xl border border-gray-800/50 bg-gray-900/40 backdrop-blur-sm p-8 lg:p-10 h-full">
                <h3 className="mb-4 text-2xl sm:text-3xl font-bold text-white">Legal & Law Enforcement</h3>
                <p className="mb-6 text-base sm:text-lg text-gray-300 leading-relaxed">
                  Authenticate audio evidence and detect manipulated recordings in legal proceedings and criminal investigations.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start text-base sm:text-lg">
                    <svg className="w-5 h-5 text-[#245FFF] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Evidence authentication services</span>
                  </li>
                  <li className="flex items-start text-base sm:text-lg">
                    <svg className="w-5 h-5 text-[#245FFF] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Forensic audio analysis</span>
                  </li>
                  <li className="flex items-start text-base sm:text-lg">
                    <svg className="w-5 h-5 text-[#245FFF] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Chain of custody verification</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="landing-section relative overflow-hidden bg-black">
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-24 lg:py-32">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1]">
                Ready to protect your platform from voice fraud?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss <span className="font-semibold text-white">enterprise audio detection solutions</span> tailored to your needs.
              </p>
              <a
                href="mailto:sales@scam.ai"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#245FFF] rounded-lg hover:bg-[#1d4acc] transition-colors duration-200"
              >
                Contact Sales
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
