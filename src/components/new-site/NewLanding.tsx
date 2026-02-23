"use client";

import { Link } from "@/i18n/navigation";
import { useState, useRef, DragEvent, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import HeroBackground from "./HeroBackground";
import { BentoV1_3, BentoV1_5, BentoV1_26, BentoV1_28 } from "@/components/bento-v1";
import DeveloperSection from "./DeveloperSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import SolutionsSection from "./SolutionsSection";

type FileWithPreview = {
  file: File;
  preview: string;
  watermarkedImage?: string;
  status: 'pending' | 'analyzing' | 'completed';
  result?: {
    isAI: boolean;
    confidence: number;
    type: 'likely_ai_manipulated' | 'likely_real';
    details?: string;
  };
};

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

export default function NewLanding() {
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPreview[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      processFiles(files);
    }
  };

  const processFiles = (files: File[]) => {
    const validFiles = files.filter(file => {
      const type = file.type;
      return type.startsWith('image/') || type.startsWith('video/') || type.startsWith('audio/');
    });

    const newFiles: FileWithPreview[] = validFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      status: 'pending'
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const addWatermark = async (file: File, result: any): Promise<string> => {
    // Only watermark images
    if (!file.type.startsWith('image/')) {
      return URL.createObjectURL(file);
    }

    try {
      if (typeof window === "undefined") {
        return URL.createObjectURL(file);
      }

      const { default: watermark } = await import("watermarkjs");
      const options = {
        init(img: any) {
          img.crossOrigin = 'anonymous';
        }
      };

      const watermarkText = (text: string, offsetFromBottom: number, fontSize: number = 20) => {
        return (target: any) => {
          const ctx = target.getContext('2d');
          if (!ctx) return target;

          const width = target.width;
          const height = target.height;
          
          ctx.save();
          ctx.globalAlpha = 0.6;
          ctx.fillStyle = 'white';
          ctx.font = `bold ${fontSize}px Inter, sans-serif`;
          ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
          ctx.shadowBlur = 4;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
          
          // Measure text width to align right
          const textWidth = ctx.measureText(text).width;
          const x = width - textWidth - 20; // 20px padding from right
          const y = height - offsetFromBottom; // offset from bottom
          
          ctx.fillText(text, x, y);
          ctx.restore();

          return target;
        };
      };

      // @ts-ignore - watermarkjs types
      const result_watermarked = await watermark([file], options)
        .image(watermarkText('Scam.ai', 100, 24))
        .then((img: any) => {
          // @ts-ignore
          return watermark([img])
            .image(watermarkText(
              result.type === 'likely_ai_manipulated' ? 'AI-Manipulated' : 'Verified',
              70,
              16
            ));
        })
        .then((img: any) => {
          // @ts-ignore
          return watermark([img])
            .image(watermarkText(`${result.confidence.toFixed(1)}% Confidence`, 40, 14));
        })
        .then((img: any) => img.src);

      return result_watermarked;
    } catch (error) {
      console.error('Watermark error:', error);
      return URL.createObjectURL(file);
    }
  };

  const analyzeFile = async (index: number) => {
    setUploadedFiles(prev => prev.map((f, i) => 
      i === index ? { ...f, status: 'analyzing' as const } : f
    ));

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock result
    const isAI = Math.random() > 0.5;
    const mockResult = {
      isAI,
      confidence: Math.random() * 100,
      type: (isAI ? 'likely_ai_manipulated' : 'likely_real') as 'likely_ai_manipulated' | 'likely_real',
      details: 'Analysis completed using AI detection models'
    };

    const fileData = uploadedFiles[index];
    const watermarkedImage = await addWatermark(fileData.file, mockResult);

    setUploadedFiles(prev => prev.map((f, i) => 
      i === index ? { 
        ...f, 
        status: 'completed' as const, 
        result: mockResult,
        watermarkedImage 
      } : f
    ));
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => {
      const newFiles = prev.filter((_, i) => i !== index);
      URL.revokeObjectURL(prev[index].preview);
      if (prev[index].watermarkedImage) {
        URL.revokeObjectURL(prev[index].watermarkedImage!);
      }
      return newFiles;
    });
  };

  const downloadWatermarkedImage = (fileData: FileWithPreview) => {
    if (!fileData.watermarkedImage) return;

    const link = document.createElement('a');
    link.href = fileData.watermarkedImage;
    link.download = `scamai_verified_${fileData.file.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareToSocialMedia = async (fileData: FileWithPreview, platform: string) => {
    const text = `I verified this image with Scam.ai - ${fileData.result?.type === 'likely_ai_manipulated' ? 'AI-Manipulated' : 'Likely Real'} (${fileData.result?.confidence.toFixed(1)}% confidence)`;
    const url = 'https://scam.ai';

    // Check if Web Share API is supported and we have a watermarked image
    if (platform === 'native' && navigator.share && fileData.watermarkedImage) {
      try {
        // Convert data URL to Blob
        const response = await fetch(fileData.watermarkedImage);
        const blob = await response.blob();
        const file = new File([blob], `scamai_verified_${fileData.file.name}`, { type: blob.type });

        // Check if we can share files
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'Scam.ai Verification',
            text: text,
            files: [file]
          });
          return;
        } else {
          // Fallback to sharing just text if files aren't supported
          await navigator.share({
            title: 'Scam.ai Verification',
            text: text,
            url: url
          });
          return;
        }
      } catch (error) {
        console.log('Share cancelled or failed:', error);
        return;
      }
    }

    // Fallback to platform-specific URLs for desktop or when Web Share API isn't available
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
    };

    if (platform in shareUrls) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const getFileType = (file: File) => {
    if (file.type.startsWith('image/')) return 'Image';
    if (file.type.startsWith('video/')) return 'Video';
    if (file.type.startsWith('audio/')) return 'Audio';
    return 'File';
  };
  return (
    <main className="bg-black text-white" role="main">
      {/* Hero Section */}
      <section className="landing-section relative overflow-hidden bg-black" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '90px', paddingBottom: 0, marginBottom: 0, marginTop: 0 }} aria-label="Hero section - AI Trust Platform">
        <HeroBackground className="" />
        <div className="relative z-10 w-full max-w-5xl px-8 sm:px-10 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5 lg:space-y-6">
            <AnimatedSection delay={0.2}>
              <p className="text-[10px] font-semibold text-gray-400 tracking-[0.15em] uppercase sm:text-xs">
                All-in-one
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h1 className="text-3xl font-bold leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl max-w-3xl px-2 sm:px-0">
                AI trust platform
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="max-w-2xl text-sm leading-[1.7] text-gray-300 sm:text-base sm:leading-relaxed lg:text-lg px-4 sm:px-0">
                <div className="text-center space-y-2">
                  <p>
                    <span className="font-semibold text-white">Detect synthetic media and deepfakes in real time</span>.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Industry-leading accuracy</span> that fights fraud and unifies trust signals.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="flex flex-col items-center gap-3 pt-4 sm:flex-row sm:gap-4 sm:pt-3">
                <a
                  href="https://app.scam.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rainbow-button inline-block"
                >
                  <span className="rainbow-button-inner">
                    Try for free
                  </span>
                </a>
                <a
                  href="https://cal.com/scamai/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
                >
                  Book a demo
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </AnimatedSection>

            {/* Product Visual — detection dashboard preview */}
            <AnimatedSection delay={0.7}>
              <div className="relative mx-auto mt-8 w-full max-w-3xl sm:mt-12">
                {/* Browser frame */}
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-black/50">
                  {/* Title bar */}
                  <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-xs text-gray-500">app.scam.ai</span>
                  </div>
                  {/* Dashboard video */}
                  <div className="relative">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                    >
                      <source src="/dashboard.mp4" type="video/mp4" />
                    </video>
                    {/* Gradient fade at bottom */}
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                  </div>
                </div>
                {/* Glow effect behind the frame */}
                <div className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-[#245FFF]/5 blur-2xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="landing-section relative overflow-hidden bg-black border-t border-white/5" aria-label="Trust signals">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 py-12 sm:py-16">
          <AnimatedSection>
            <p className="mb-8 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500 sm:text-xs">
              Trusted by security teams worldwide
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-2xl font-bold text-white sm:text-3xl">99.2%</span>
                <span className="text-xs text-gray-500">Detection accuracy</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-2xl font-bold text-white sm:text-3xl">&lt;500ms</span>
                <span className="text-xs text-gray-500">Response time</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex items-center gap-2">
                  <img src="/soc2-badge.png" alt="SOC 2" className="h-7 w-7 sm:h-8 sm:w-8" />
                  <img src="/gdpr-badge.png" alt="GDPR" className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <span className="text-xs text-gray-500">SOC 2 &amp; GDPR certified</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-2xl font-bold text-white sm:text-3xl">
                  <img src="/scamai-logo.svg" alt="Berkeley SkyDeck" className="inline h-5 sm:h-6" style={{ filter: 'brightness(0.7)' }} />
                </span>
                <span className="text-xs text-gray-500">Berkeley SkyDeck backed</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* AI-Powered Security — merged section */}
      <section className="landing-section relative overflow-hidden" aria-label="AI-Powered Security - Deepfake Protection" style={{
        backgroundImage: 'url(/session1.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 py-20 sm:py-24 lg:py-32">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-left flex flex-col justify-center">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-400 mb-4 sm:text-[10px] lg:mb-6">
                  AI-POWERED SECURITY
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1] lg:mb-8">
                  Fight AI threats<br />with <span className="text-[#245FFF]">AI defense</span>
                </h2>
                <p className="max-w-xl text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                  Deepfakes and synthetic fraud cost businesses millions every year. Our <span className="font-semibold text-white">Eva-v1</span> models adapt as fast as the threats themselves — detecting deepfakes, stopping fraud, and protecting your revenue in real-time.
                </p>
                <a
                  href="https://app.scam.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#245FFF] transition hover:gap-3"
                >
                  Start detecting now
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              {/* Bento 26 - AI Detection visual */}
              <div className="relative flex items-center justify-center" style={{ minHeight: '400px' }}>
                <div className="w-full max-w-[400px]" style={{ height: '400px', transform: 'scale(1.2)' }}>
                  <BentoV1_26 />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions Section: Product verticals */}
      <SolutionsSection />

      {/* Features Section: THE PLATFORM + All-in-One + Lightning Fast */}
      <section className="landing-section relative overflow-hidden bg-black" aria-label="Platform Features - Why Teams Choose Us">
        {/* Background image wrapper */}
        <div className="absolute inset-0 w-full h-full" style={{
          backgroundImage: 'url(/session3.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:max-w-7xl py-14 sm:py-16 lg:py-20">
          {/* Platform Title - no overlay */}
          <AnimatedSection>
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-400 mb-4 sm:text-[10px] lg:mb-6">
                THE PLATFORM
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
                Why teams choose <span className="text-[#245FFF]">us</span>
              </h2>
            </div>
          </AnimatedSection>

          {/* Feature 1: All-in-One Platform */}
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">
              <div className="lg:pl-12 flex flex-col justify-center" style={{ minHeight: '350px' }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#245FFF] mb-4 sm:text-xs lg:mb-6">
                  ALL-IN-ONE PLATFORM
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.15] lg:mb-6">
                  One platform for all media verification needs
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Stop juggling multiple detection tools. ScamAI unifies deepfake detection, synthetic media analysis, and fraud prevention into a single platform. One API, one dashboard, complete protection.
                </p>
              </div>
              {/* Bento 3 - All-in-One, right side */}
              <div className="relative flex items-center justify-center" style={{ minHeight: '400px' }}>
                <div className="w-full max-w-[400px]" style={{ height: '400px', transform: 'scale(1.2)' }}>
                  <BentoV1_3 />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Feature 2: Real-Time Detection */}
          <AnimatedSection delay={0.2}>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Bento 5 - Lightning Fast, left side */}
              <div className="order-2 lg:order-1 relative flex items-center justify-center" style={{ minHeight: '350px' }}>
                <div className="w-full max-w-[400px]" style={{ height: '400px', transform: 'scale(1.2)' }}>
                  <BentoV1_5 />
                </div>
              </div>
              <div className="order-1 lg:order-2 flex flex-col justify-center" style={{ minHeight: '400px' }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#245FFF] mb-4 sm:text-xs lg:mb-6">
                  LIGHTNING FAST
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.15] lg:mb-6">
                  Real-time detection at scale
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Process millions of media files with industry-leading speed. Our Eva-v1 model delivers instant verdicts without compromising accuracy, keeping your platform safe in real-time.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Session4: Transparent Pricing & Global Compliance */}
      <section className="landing-section relative overflow-hidden bg-black" aria-label="Pricing & Compliance">
        {/* Background image wrapper */}
        <div className="absolute inset-0 w-full h-full" style={{
          backgroundImage: 'url(/session4.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:max-w-7xl py-14 sm:py-16 lg:py-20">
          {/* Transparent Pricing */}
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">
              <div className="lg:pl-12 flex flex-col justify-center" style={{ minHeight: '350px' }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#245FFF] mb-4 sm:text-xs lg:mb-6">
                  $ TRANSPARENT PRICING
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.15] lg:mb-6">
                  Pay only for what you use.
                </h3>
                <p className="text-lg font-semibold text-gray-200 mb-6 sm:text-xl">
                  200 free images / month
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Start with 200 free images monthly with our Eva-v1-Fast model. Simple pay-as-you-go pricing—no contracts, no setup fees, no commitments. You're only charged for successful analyses.
                </p>
              </div>
              {/* Bento 28 - Transparent Pricing, right side */}
              <div className="relative flex items-center justify-center" style={{ minHeight: '400px' }}>
                <div className="w-full max-w-[400px]" style={{ height: '400px', transform: 'scale(1.2)' }}>
                  <BentoV1_28 />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Global Compliance */}
          <AnimatedSection delay={0.2}>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="flex items-center justify-center gap-8 flex-wrap order-2 lg:order-1">
                <img 
                  src="/gdpr-badge.png" 
                  alt="GDPR Compliant Badge" 
                  className="h-32 w-32 object-contain"
                />
                <img 
                  src="/soc2-badge.png" 
                  alt="SOC 2 Type II Certified Badge" 
                  className="h-32 w-32 object-contain"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#245FFF] mb-4 sm:text-xs lg:mb-6">
                  ☑ GLOBAL COMPLIANCE
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.15] lg:mb-6">
                  Stay compliant, everywhere.
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                  Meet data protection requirements across EU, US, and APAC with one integration. <strong className="text-white">GDPR compliant</strong> and <strong className="text-white">SOC 2 Type II certified</strong>.
                </p>
                <a 
                  href="https://reality-inc.trust.site/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#245FFF] hover:text-[#1d4acc] font-semibold transition-colors"
                >
                  View our Trust Center →
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Session5: Developer-First */}
      <DeveloperSection />

      {/* Session6: Pricing */}
      <PricingSection />

      {/* Session7: FAQ */}
      <FAQSection />

    </main>
  );
}
