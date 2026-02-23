"use client";

import { useState } from "react";

export default function DeveloperSection() {
  const [activeTab, setActiveTab] = useState<'api' | 'nocode'>('api');

  return (
    <section className="landing-section relative overflow-hidden bg-black" aria-label="Developer Integration">
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:max-w-7xl py-20 sm:py-24 lg:py-32">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#245FFF] mb-4 sm:text-xs">
            THE EASIEST TO INTEGRATE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1]">
            Integrate your way
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Use ScamAI with no code or with a single API call. Go live in minutes.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-700 bg-gray-900/50 p-1">
            <button 
              onClick={() => setActiveTab('nocode')}
              className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${
                activeTab === 'nocode' 
                  ? 'bg-[#245FFF] text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                No-code
              </span>
            </button>
            <button 
              onClick={() => setActiveTab('api')}
              className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${
                activeTab === 'api' 
                  ? 'bg-[#245FFF] text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                API
              </span>
            </button>
          </div>
        </div>

        {/* No-code Content */}
        {activeTab === 'nocode' && (
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Text Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                No-code
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
                Monitor and analyze deepfake detection results in real-time through our intuitive dashboard. Upload media files, view detection confidence scores, and track synthetic content trends — all without writing a single line of code.
              </p>

              {/* Key Points */}
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                  KEY POINTS
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#245FFF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">Visual deepfake detection dashboard</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#245FFF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">Drag-and-drop media upload</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#245FFF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">Real-time confidence scoring</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#245FFF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">
                      Export detection reports & analytics 
                      <span className="ml-2 text-xs text-[#245FFF] font-semibold">(Enterprise)</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side - Dashboard Video */}
            <div className="relative">
              <div className="bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
                {/* Dashboard Header */}
                <div className="bg-[#1a1a1a] border-b border-gray-800 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <span className="text-xs text-gray-400">ScamAI Dashboard</span>
                  </div>
                </div>
                
                {/* Dashboard Video */}
                <div className="relative bg-black">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  >
                    <source src="/dashboard.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* API Content */}
        {activeTab === 'api' && (
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Text Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                API Integration
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                Integrate deepfake detection into your application with a single API call. Our REST API analyzes images, audio, and video for AI-generated content and returns confidence scores in real-time.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
                Detect synthetic media, voice clones, and deepfakes with Eva-v1 model. Get instant verdicts with detailed manipulation analysis.
              </p>

              {/* Key Points */}
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                  KEY POINTS
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#245FFF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">Detect deepfakes, synthetic media, and voice clones</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#245FFF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">Real-time confidence scoring & analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#245FFF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">Support for images, audio, and video</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#245FFF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">Webhooks for asynchronous processing</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://docu.scam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                View documentation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Right Side - Code Example */}
            <div className="relative">
              <div className="bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
                {/* Terminal Header with Tabs */}
                <div className="bg-[#1a1a1a] border-b border-gray-800">
                  <div className="flex items-center gap-2 px-4 py-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                  </div>
                  <div className="flex px-2 -mb-px">
                    <div className="px-4 py-2 text-xs font-medium text-white bg-[#0a0a0a] border-t-2 border-[#245FFF] rounded-t">
                      API Request
                    </div>
                    <div className="ml-auto px-3 py-2">
                      <button className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-white bg-[#245FFF] rounded hover:bg-[#1d4acc] transition-colors">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                        </svg>
                        Try it
                      </button>
                    </div>
                  </div>
                </div>
                
                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm leading-relaxed">
                    <div className="text-gray-500 mb-3"># Detect deepfake in image</div>
                    <div className="space-y-1">
                      <div>
                        <span className="text-[#ff6b6b]">curl</span>
                        <span className="text-[#4ecdc4]"> --request</span>
                        <span className="text-white"> POST \</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-[#4ecdc4]">--url</span>
                        <span className="text-[#95e1d3]"> https://api.scam.ai/v1/detect</span>
                        <span className="text-white"> \</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-[#4ecdc4]">--header</span>
                        <span className="text-[#95e1d3]"> &apos;Authorization: Bearer </span>
                        <span className="text-[#f9ca24]">YOUR_API_KEY</span>
                        <span className="text-[#95e1d3]">&apos;</span>
                        <span className="text-white"> \</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-[#4ecdc4]">-F</span>
                        <span className="text-[#95e1d3]"> &apos;file=@</span>
                        <span className="text-white">suspect_image.jpg</span>
                        <span className="text-[#95e1d3]">&apos;</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <div className="text-gray-500 mb-3"># Response</div>
                      <div className="space-y-1">
                        <div className="text-white">{'{'}</div>
                        <div className="ml-4">
                          <span className="text-[#95e1d3]">&quot;verdict&quot;</span>
                          <span className="text-white">: </span>
                          <span className="text-[#ff6b6b]">&quot;synthetic&quot;</span>
                          <span className="text-white">,</span>
                        </div>
                        <div className="ml-4">
                          <span className="text-[#95e1d3]">&quot;confidence&quot;</span>
                          <span className="text-white">: </span>
                          <span className="text-[#f9ca24]">0.94</span>
                          <span className="text-white">,</span>
                        </div>
                        <div className="ml-4">
                          <span className="text-[#95e1d3]">&quot;model&quot;</span>
                          <span className="text-white">: </span>
                          <span className="text-[#95e1d3]">&quot;Eva-v1&quot;</span>
                          <span className="text-white">,</span>
                        </div>
                        <div className="ml-4">
                          <span className="text-[#95e1d3]">&quot;processing_time&quot;</span>
                          <span className="text-white">: </span>
                          <span className="text-[#f9ca24]">1.2</span>
                        </div>
                        <div className="text-white">{'}'}</div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
