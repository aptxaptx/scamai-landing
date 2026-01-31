"use client";

import Link from "next/link";
import { useState, useRef, DragEvent, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

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
    <main className="bg-[#0b0b0b] text-white">
      <section className="landing-section has-bg relative overflow-hidden -mt-[73px] pt-[73px]" >
        <div className="absolute inset-0 -top-[73px] bg-[#0b0b0b]" />
        <div 
          className="absolute inset-0 -top-[73px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero.svg)',
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 pt-16 pb-24 text-center sm:px-6">
          <AnimatedSection delay={0.2}>
            <p className="mb-3 text-sm font-semibold text-gray-300 tracking-wider sm:text-base">
              All-in-one
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              AI trust platform
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <p className="mb-5 text-base font-semibold text-gray-200 sm:text-lg">
              Stop getting fooled by synthetic media and deepfakes.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.5}>
            <div className="mb-8 mx-auto max-w-2xl text-xs leading-relaxed text-gray-300 sm:text-sm space-y-1">
              <p>
                Let your team <span className="font-semibold text-white">detect synthetic media and deepfakes in real time</span>.
              </p>
              <p>
                <span className="font-semibold text-white">Industry-leading accuracy</span> that fights fraud and unifies trust signals.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6}>
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
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <p className="mt-12 text-center text-[8px] font-medium text-gray-500 tracking-[0.15em] uppercase mb-6">
              Backed and trusted by teams and people from
            </p>
            <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
              <div className="h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-all">
                <span className="text-lg font-semibold text-gray-400">Meta</span>
              </div>
              <div className="h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-all">
                <span className="text-lg font-semibold text-gray-400">HP</span>
              </div>
              <div className="h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-all">
                <span className="text-lg font-semibold text-gray-400">SBI</span>
              </div>
              <div className="h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-all">
                <span className="text-lg font-semibold text-gray-400">LG</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Session1: Fight AI threats / AI defense */}
      <section className="landing-section has-bg relative py-24 pb-32 overflow-hidden" >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/session2.svg)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <AnimatedSection>
              <div className="mb-6 flex justify-center">
                <img
                  src="/scamai-logo.svg"
                  alt="ScamAI"
                  className="h-10 w-auto"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Fight <span className="text-[#66b3ff]">AI threats</span> with<br /><span className="text-[#66b3ff]">AI defense</span>
              </h2>
            </AnimatedSection>
            
            <div className="mx-auto max-w-3xl text-sm text-gray-200 leading-relaxed space-y-1 mb-8">
              <p>ScamAI's AI models - <span className="font-bold text-white">Eva-v1</span> adapt as fast as the threats themselves,</p>
              <p>evolving and responding to new attack patterns in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Session2: AI-POWERED SECURITY / Trusted By */}
      <section className="landing-section has-bg relative py-16 pb-24 overflow-hidden" >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/session1.svg)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white mb-4">
                AI-POWERED SECURITY
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Verify what <span className="text-[#3399ff]">we see</span>
              </h2>
              <p className="max-w-3xl mx-auto text-sm text-gray-200 leading-relaxed mb-12">
                Deepfakes and synthetic fraud cost businesses millions in fraud losses, chargebacks, and reputational damage every year. Our real-time detection platform stops threats instantly — protecting your revenue, brand reputation, and customer trust before costly damage occurs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section: THE PLATFORM + All-in-One + Lightning Fast */}
      <section className="landing-section has-bg relative py-24 pb-32 overflow-hidden" >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/session3.svg)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          {/* Platform Title - no overlay */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white mb-4">
                THE PLATFORM
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Why teams choose <span className="text-[#66b3ff]">us</span>
              </h2>
            </div>
          </AnimatedSection>

          {/* Feature 1: All-in-One Platform */}
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66b3ff] mb-4">
                  ALL-IN-ONE PLATFORM
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  One platform for all media verification needs
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Stop juggling multiple detection tools. ScamAI unifies deepfake detection, synthetic media analysis, and fraud prevention into a single platform. One API, one dashboard, complete protection.
                </p>
              </div>
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] bg-gray-800/40 rounded-lg border border-gray-700 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60" />
                <div className="relative text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gray-700/60 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-400">All-in-One Platform Visual</p>
                    <p className="text-xs text-gray-500">Dashboard & Features Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Feature 2: Real-Time Detection */}
          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="order-2 md:order-1 relative aspect-[4/3] bg-gray-800/40 rounded-lg border border-gray-700 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-gray-800/60" />
                <div className="relative text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gray-700/60 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-400">Real-Time Speed Visual</p>
                    <p className="text-xs text-gray-500">Performance Metrics Display</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66b3ff] mb-4">
                  LIGHTNING FAST
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Real-time detection at scale
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Process millions of media files with industry-leading speed. Our Eva-v1 model delivers instant verdicts without compromising accuracy, keeping your platform safe in real-time.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Session4: Transparent Pricing, Global Compliance & Developer-First */}
      <section className="landing-section has-bg relative py-24 pb-32 overflow-hidden" >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/session4.svg)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          {/* Transparent Pricing */}
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66b3ff] mb-4">
                  $ TRANSPARENT PRICING
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Pay only for what you use.
                </h3>
                <p className="text-base font-semibold text-gray-300 mb-6">
                  100 free checks / month
                </p>
                <p className="text-base text-gray-300 leading-relaxed">
                  No contracts, no setup fees, no minimums. 100 free checks per month for image and audio. Video in paid plans. After that, pay only for what you use. You're only charged when a check completes.
                </p>
              </div>
              <div className="relative aspect-[4/3] bg-gray-800/40 rounded-lg border border-gray-700 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60" />
                <div className="relative text-center space-y-2">
                  <p className="text-xs text-gray-500">Dashboard & verification flow</p>
                  <p className="text-[10px] text-gray-600">Visual placeholder</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Global Compliance */}
          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative aspect-[4/3] bg-gray-800/40 rounded-lg border border-gray-700 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60" />
                <div className="relative text-center space-y-2">
                  <p className="text-xs text-gray-500">Compliance & Certifications</p>
                  <p className="text-[10px] text-gray-600">Visual placeholder</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66b3ff] mb-4">
                  ☑ GLOBAL COMPLIANCE
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Stay compliant, everywhere.
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Meet data and privacy requirements in the EU, US and APAC using the same integration. Region-specific rules applied automatically. GDPR compliant with full data retention controls. SOC 2 Type II.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Developer-First */}
          <AnimatedSection delay={0.3}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66b3ff] mb-4">
                  DEVELOPER-FIRST
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Integrate in minutes, not weeks
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  One API call is all you need. Simple REST API, visualization dashboard, and detailed documentation get you from zero to production in under 10 mins.
                </p>
                <div className="bg-black/60 text-green-400 p-4 rounded font-mono text-xs border border-gray-700">
                  <div>curl -X POST https://api.scam.ai/v1/detect \</div>
                  <div className="ml-4">-H "Authorization: Bearer YOUR_KEY" \</div>
                  <div className="ml-4">-F "file=@image.jpg"</div>
                </div>
              </div>
              <div className="relative aspect-[4/3] bg-gray-800/40 rounded-lg border border-gray-700 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60" />
                <div className="relative text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gray-700/60 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-400">Developer Integration Visual</p>
                    <p className="text-xs text-gray-500">Code & API Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
