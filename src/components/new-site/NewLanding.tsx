"use client";

import Link from "next/link";
import { useState, useRef, DragEvent, useEffect } from "react";

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
    <main className="bg-[#0b0f1f] text-white">
      <section className="relative overflow-hidden -mt-[73px] pt-[73px]">
        <div className="absolute inset-0 -top-[73px] bg-[#0b0f1f]" />
        <div 
          className="absolute inset-0 -top-[73px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero.svg)',
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 py-32 text-left sm:px-6">
          <p className="mb-6 text-sm text-gray-400">
            It provides what Multi-CDN can't.
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Virtual edge can
            <br />
            Assure consistent security
            <span className="inline-block animate-pulse">_</span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-gray-300 sm:text-xl">
            A unified layer of security, traffic control and serverless compute services on top of Edge platforms to improve the reliability, performance and affordability of online services.
          </p>
          <Link
            href="/demo"
            className="inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0b0f1f] shadow-lg transition hover:bg-gray-100"
          >
            Test Now
          </Link>
        </div>
      </section>

      <section 
        className="relative w-full bg-[#0b0f1f] -mt-[1px] min-h-[600px] flex flex-col"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/ses1.svg)',
          }}
        />
        
        <div className="relative flex-1 flex flex-col max-w-6xl mx-auto w-full px-4 py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">Verify Your Media</h2>
            <p className="text-gray-400">Upload images, videos, or audio to detect deepfakes and AI-generated content</p>
          </div>

          {/* Upload Area */}
          {uploadedFiles.length === 0 && (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-white/20 rounded-lg p-12 text-center cursor-pointer hover:border-white/40 transition-colors mb-8"
            >
              <div className="flex flex-col items-center gap-4">
                <div>
                  <p className="text-lg text-white mb-1">Drop your files here or click to browse</p>
                  <p className="text-sm text-gray-500">Supports images, videos, and audio files</p>
                </div>
              </div>
            </div>
          )}

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            className="hidden"
            accept="image/*,video/*,audio/*"
            multiple
          />

          {/* Files Grid */}
          {uploadedFiles.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Uploaded Files ({uploadedFiles.length})</h3>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-colors"
                >
                  + Add More
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {uploadedFiles.map((fileData, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3"
                  >
                    {/* File Info */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-xs font-semibold text-blue-400">{getFileType(fileData.file)}</span>
                          <p className="text-sm font-medium text-white truncate flex-1">{fileData.file.name}</p>
                        </div>
                        <p className="text-xs text-gray-500">{(fileData.file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <button
                        onClick={() => removeFile(idx)}
                        className="text-gray-400 hover:text-white text-xl leading-none"
                      >
                        ×
                      </button>
                    </div>

                    {/* Preview */}
                    {fileData.file.type.startsWith('image/') && (
                      <div className="aspect-video bg-black/50 rounded overflow-hidden relative">
                        <img 
                          src={fileData.status === 'completed' && fileData.watermarkedImage ? fileData.watermarkedImage : fileData.preview} 
                          alt={fileData.file.name} 
                          className="w-full h-full object-contain" 
                        />
                        {fileData.status === 'completed' && fileData.watermarkedImage && (
                          <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
                            Watermarked
                          </div>
                        )}
                      </div>
                    )}
                    {fileData.file.type.startsWith('video/') && (
                      <div className="aspect-video bg-black/50 rounded overflow-hidden">
                        <video src={fileData.preview} className="w-full h-full object-contain" controls />
                      </div>
                    )}
                    {fileData.file.type.startsWith('audio/') && (
                      <div className="bg-black/50 rounded p-4">
                        <audio src={fileData.preview} className="w-full" controls />
                      </div>
                    )}

                    {/* Status */}
                    {fileData.status === 'pending' && (
                      <button
                        onClick={() => analyzeFile(idx)}
                        className="w-full py-2.5 bg-[#0021f3] hover:bg-[#0018cc] rounded-lg text-sm font-medium text-white transition-colors"
                      >
                        Verify Now
                      </button>
                    )}

                    {fileData.status === 'analyzing' && (
                      <div className="py-2.5 text-center">
                        <p className="text-sm text-gray-300">Analyzing...</p>
                      </div>
                    )}

                    {fileData.status === 'completed' && fileData.result && (
                      <div className="space-y-3">
                        <div className={`rounded-lg p-4 ${
                          fileData.result.isAI 
                            ? 'bg-red-500/10 border border-red-500/30' 
                            : 'bg-green-500/10 border border-green-500/30'
                        }`}>
                          <div className="mb-2">
                            <p className={`text-sm font-semibold ${
                              fileData.result.isAI ? 'text-red-400' : 'text-green-400'
                            }`}>
                              {fileData.result.type === 'likely_ai_manipulated' && 'Likely AI-Manipulated'}
                              {fileData.result.type === 'likely_real' && 'Likely Real'}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              Confidence: {fileData.result.confidence.toFixed(1)}%
                            </p>
                          </div>
                          {fileData.result.details && (
                            <p className="text-xs text-gray-400">{fileData.result.details}</p>
                          )}
                        </div>

                        {/* Share & Download */}
                        {fileData.watermarkedImage && fileData.file.type.startsWith('image/') && (
                          <div className="space-y-2">
                            <p className="text-xs text-gray-400">Share watermarked image:</p>
                            
                            {/* Native Share Button (Mobile) */}
                            {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
                              <button
                                onClick={() => shareToSocialMedia(fileData, 'native')}
                                className="w-full px-4 py-2.5 bg-[#0021f3] hover:bg-[#0018cc] rounded-lg text-sm font-medium text-white transition-colors flex items-center justify-center gap-2"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                                Share
                              </button>
                            )}
                            
                            {/* Desktop Share Buttons */}
                            <div className="flex gap-2">
                              <button
                                onClick={() => downloadWatermarkedImage(fileData)}
                                className="flex-1 px-3 py-2 bg-[#0021f3] hover:bg-[#0018cc] rounded text-xs font-medium text-white transition-colors"
                              >
                                Download
                              </button>
                              <button
                                onClick={() => shareToSocialMedia(fileData, 'twitter')}
                                className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded text-xs font-medium text-white transition-colors"
                                title="Share on Twitter"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                              </button>
                              <button
                                onClick={() => shareToSocialMedia(fileData, 'facebook')}
                                className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded text-xs font-medium text-white transition-colors"
                                title="Share on Facebook"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z"/>
                                </svg>
                              </button>
                              <button
                                onClick={() => shareToSocialMedia(fileData, 'whatsapp')}
                                className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded text-xs font-medium text-white transition-colors"
                                title="Share on WhatsApp"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#0a1022]">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-3">
          {[
            {
              title: "Unified Detection",
              body: "Audio, video, image, and text signals in one pipeline.",
            },
            {
              title: "Actionable Verdicts",
              body: "Human-readable decisions your ops team can trust.",
            },
            {
              title: "Compliance Ready",
              body: "Audit trails, data residency, and secure APIs.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-[#9ec4ff]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9ec4ff]">
              How it works
            </p>
            <h2 className="text-3xl font-semibold">3 steps to safer decisions</h2>
            <p className="text-sm text-[#cfe0ff]">
              Plug in ScamAI, send your verification events, and get a clear
              risk score that your automation and analysts can act on.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Connect your data sources and verification flows.",
              "ScamAI models analyze authenticity in real time.",
              "Receive a verdict + next action in milliseconds.",
            ].map((step, index) => (
              <div
                key={step}
                className="border border-white/10 bg-white/5 p-5 text-sm text-[#cfe0ff]"
              >
                <span className="text-[#9ec4ff]">0{index + 1}.</span> {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a1022]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { label: "Enterprise-ready SLA", value: "99.95%" },
              { label: "Average decision time", value: "180ms" },
              { label: "Signals processed daily", value: "84M" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-white/10 bg-white/5 p-6 text-white"
              >
                <p className="text-xs text-[#9ec4ff]">{stat.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
          <h2 className="text-3xl font-semibold">Ready to rebuild trust?</h2>
          <p className="mt-3 text-sm text-[#cfe0ff]">
            Start from a clean slate with a detection platform built for the
            modern threat landscape.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="bg-white px-7 py-3 text-sm font-semibold text-[#0b0f1f]"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 px-7 py-3 text-sm font-semibold text-white"
            >
              Speak with Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
