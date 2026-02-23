"use client";

import { useState } from "react";

// Pricing constants (from actual pricing page)
const FREE_CHECKS = 200;
const BASE_PRICE = 0.05;
const ADAPTIVE_DEFENSE_PRICE = 0.008;
const ACTIVE_LIVENESS_PRICE = 0.008;
const EXPRESS_LANE_PRICE = 0.008;
const MAX_VOLUME = 2000;
const VOLUME_DISCOUNT_THRESHOLD = 2000;

export default function PricingSection() {
  const [volume, setVolume] = useState(200);
  const [adaptiveDefense, setAdaptiveDefense] = useState(false);
  const [activeLiveness, setActiveLiveness] = useState(false);
  const [expressLane, setExpressLane] = useState(false);

  // Calculate price per image
  const calculatePricePerCheck = () => {
    if (volume <= FREE_CHECKS) return 0;
    let price = BASE_PRICE;
    if (adaptiveDefense) price += ADAPTIVE_DEFENSE_PRICE;
    if (activeLiveness) price += ACTIVE_LIVENESS_PRICE;
    if (expressLane) price += EXPRESS_LANE_PRICE;
    return price;
  };

  const pricePerCheck = calculatePricePerCheck();
  const sliderPosition = (volume / MAX_VOLUME) * 100;

  return (
    <section 
      className="landing-section relative overflow-hidden bg-black" 
      aria-label="Pricing Configuration"
      style={{ paddingTop: '80px', paddingBottom: '80px' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#245FFF] mb-4 sm:text-xs">
            USAGE-BASED PRICING
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1]">
            Pay only for <span className="text-[#245FFF]">what you use</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Transparent, predictable pricing for GenAI and deepfake detection.{' '}
            <span className="font-semibold text-white">200 free images per month with our Eva-v1-Fast model</span>, then $0.05/image + optional
            add-ons. No hidden fees, no long-term contracts.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 mb-12">
          {/* Left Side - Calculator */}
          <div className="space-y-8">
            {/* Volume Slider */}
            <div className="rounded-3xl bg-gray-900/60 border border-gray-700 p-8">
              <label className="mb-6 block text-xl font-bold text-white">Monthly Volume</label>
              <div className="relative pt-10 pb-2">
                {/* Current value above slider */}
                <div
                  className="absolute top-0 bg-[#245FFF] text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap z-10"
                  style={{
                    left: `${Math.max(5, Math.min(95, sliderPosition))}%`,
                    transform: 'translateX(-50%)',
                  }}
                >
                  {volume.toLocaleString()} images
                </div>
                <input
                  type="range"
                  min="0"
                  max={MAX_VOLUME}
                  step="50"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-[#245FFF]"
                  style={{
                    background: `linear-gradient(to right, #245FFF 0%, #245FFF ${sliderPosition}%, #374151 ${sliderPosition}%, #374151 100%)`
                  }}
                />
                <div className="mt-3 flex items-center justify-between text-sm text-gray-400">
                  <span>0</span>
                  <span>{MAX_VOLUME.toLocaleString()}</span>
                </div>
              </div>

              {/* Volume Discount Badge - shown when at max */}
              {volume === MAX_VOLUME && (
                <div className="mt-6 rounded-2xl border-2 border-[#245FFF] bg-gradient-to-r from-[#245FFF]/20 to-purple-500/20 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#245FFF] flex items-center justify-center">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-xl text-white mb-2">Need more than {MAX_VOLUME.toLocaleString()} images?</p>
                      <p className="text-sm text-gray-300 mb-4">
                        Unlock enterprise-grade features, volume discounts, and dedicated support for high-volume needs.
                      </p>
                      <a
                        href="https://cal.com/scamai/15min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#245FFF] text-white font-semibold hover:bg-[#1d4acc] transition-colors"
                      >
                        Talk to Sales
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Add-on Features */}
            <div className="rounded-3xl bg-gray-900/60 border border-gray-700 p-8">
              <h3 className="mb-6 text-xl font-bold text-white">Add-on Features</h3>
              <p className="mb-6 text-sm text-gray-400">Enhance your detection capabilities with optional features</p>

              <div className="space-y-4">
                {/* Adaptive Defense */}
                <label className="flex items-start gap-4 cursor-pointer group p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                  <input
                    type="checkbox"
                    checked={adaptiveDefense}
                    onChange={(e) => setAdaptiveDefense(e.target.checked)}
                    className="mt-1 h-5 w-5 rounded-md border-gray-700 bg-gray-900 text-[#245FFF] focus:ring-2 focus:ring-[#245FFF]/20"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white group-hover:text-[#245FFF] transition-colors">
                        Adaptive Defense
                      </span>
                      <span className="text-sm font-semibold text-[#245FFF]">
                        +${ADAPTIVE_DEFENSE_PRICE.toFixed(3)}/image
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">Real-time GenAI, deepfake & injection attack detection with advanced AI models</p>
                  </div>
                </label>

                {/* Active Liveness */}
                <label className="flex items-start gap-4 cursor-pointer group p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                  <input
                    type="checkbox"
                    checked={activeLiveness}
                    onChange={(e) => setActiveLiveness(e.target.checked)}
                    className="mt-1 h-5 w-5 rounded-md border-gray-700 bg-gray-900 text-[#245FFF] focus:ring-2 focus:ring-[#245FFF]/20"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white group-hover:text-[#245FFF] transition-colors">
                        Active Liveness
                      </span>
                      <span className="text-sm font-semibold text-[#245FFF]">
                        +${ACTIVE_LIVENESS_PRICE.toFixed(3)}/image
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">Live face detection to verify real human presence and prevent GenAI-generated deepfakes</p>
                  </div>
                </label>

                {/* Express Lane */}
                <label className="flex items-start gap-4 cursor-pointer group p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                  <input
                    type="checkbox"
                    checked={expressLane}
                    onChange={(e) => setExpressLane(e.target.checked)}
                    className="mt-1 h-5 w-5 rounded-md border-gray-700 bg-gray-900 text-[#245FFF] focus:ring-2 focus:ring-[#245FFF]/20"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white group-hover:text-[#245FFF] transition-colors">
                        Express Lane
                      </span>
                      <span className="text-sm font-semibold text-[#245FFF]">
                        +${EXPRESS_LANE_PRICE.toFixed(3)}/image
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">Low latency processing with 3s response time guarantee</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Side - Price Summary (Sticky) */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-3xl bg-gradient-to-br from-[#245FFF]/20 to-gray-900/60 border-2 border-[#245FFF] p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Price Summary</h3>
              
              {/* Price Per Image */}
              <div className="mb-8 pb-8 border-b border-gray-700">
                <p className="mb-2 text-sm text-gray-400 uppercase tracking-wider">Price Per Image</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">
                    ${volume <= FREE_CHECKS ? '0.00' : pricePerCheck.toFixed(3)}
                  </span>
                  <span className="text-lg text-gray-400">/image</span>
                </div>

                {volume <= FREE_CHECKS ? (
                  <div className="mt-4 rounded-xl bg-green-500/10 border border-green-500/30 px-4 py-3">
                    <p className="text-sm font-semibold text-green-400">✓ Within free tier (first 200 images with Eva-v1-Fast)</p>
                  </div>
                ) : (
                  /* Breakdown */
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span>Base Detection</span>
                      <span className="font-semibold">${BASE_PRICE.toFixed(3)}</span>
                    </div>
                    {adaptiveDefense && (
                      <div className="flex justify-between text-gray-300">
                        <span>+ Adaptive Defense</span>
                        <span className="font-semibold text-[#245FFF]">+${ADAPTIVE_DEFENSE_PRICE.toFixed(3)}</span>
                      </div>
                    )}
                    {activeLiveness && (
                      <div className="flex justify-between text-gray-300">
                        <span>+ Active Liveness</span>
                        <span className="font-semibold text-[#245FFF]">+${ACTIVE_LIVENESS_PRICE.toFixed(3)}</span>
                      </div>
                    )}
                    {expressLane && (
                      <div className="flex justify-between text-gray-300">
                        <span>+ Express Lane</span>
                        <span className="font-semibold text-[#245FFF]">+${EXPRESS_LANE_PRICE.toFixed(3)}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Monthly Estimate */}
              <div className="mb-8">
                <p className="mb-2 text-sm text-gray-400 uppercase tracking-wider">Total Monthly Estimate</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-[#245FFF]">
                    ${volume <= FREE_CHECKS ? '0.00' : ((volume - FREE_CHECKS) * pricePerCheck).toFixed(2)}
                  </span>
                  <span className="text-lg text-gray-400">/month</span>
                </div>

                {/* Monthly Breakdown */}
                <div className="space-y-2 text-sm">
                  {volume <= FREE_CHECKS ? (
                    <div className="flex justify-between text-gray-300">
                      <span>{volume.toLocaleString()} images</span>
                      <span className="font-semibold text-green-400">FREE</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between text-gray-300">
                        <span>Free images</span>
                        <span className="font-semibold text-green-400">{FREE_CHECKS.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>
                          {(volume - FREE_CHECKS).toLocaleString()} paid images × ${pricePerCheck.toFixed(3)}
                        </span>
                        <span className="font-semibold">
                          ${((volume - FREE_CHECKS) * pricePerCheck).toFixed(2)}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://app.scam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-[#245FFF] py-4 text-center text-lg font-semibold text-white hover:bg-[#1d4acc] transition-colors shadow-lg shadow-[#245FFF]/20"
              >
                Get Started →
              </a>

              <p className="mt-4 text-center text-xs text-gray-400">No setup fees • Cancel anytime • Pay as you go</p>
            </div>

            {/* Base Features */}
            <div className="mt-6 rounded-3xl bg-gray-900/40 border border-gray-700 p-6">
              <p className="mb-4 text-sm font-semibold text-white">Base Detection Includes:</p>
              <ul className="space-y-2 text-sm text-gray-300">
                {['GenAI & deepfake detection', 'Eva-v1-Fast model', 'RESTful API access', 'Dashboard analytics'].map(
                  (feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-[#245FFF]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Banner & Pricing Cards */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-300 sm:text-xl">
            Transparent pricing with no hidden fees.{' '}
            <span className="font-bold text-white">Scale confidently as your business grows.</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Self-Serve Plan */}
          <div className={`relative rounded-3xl bg-gray-900/60 p-8 ${
            volume < VOLUME_DISCOUNT_THRESHOLD ? 'border-2 border-[#245FFF]' : 'border border-gray-700'
          }`}>
            {volume < VOLUME_DISCOUNT_THRESHOLD && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full border-2 border-[#245FFF] bg-[#245FFF] px-4 py-1 text-xs font-semibold text-white">
                  Recommended
                </span>
              </div>
            )}

            <h3 className="mb-6 text-2xl font-bold text-white">Self-Serve</h3>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">
                  ${volume <= FREE_CHECKS ? '0' : pricePerCheck.toFixed(3)}
                </span>
                <span className="text-lg text-gray-400">per image</span>
              </div>
            </div>

            <p className="mb-2 text-sm font-semibold text-[#245FFF]">200 free images/month (Eva-v1-Fast)</p>

            <p className="mb-8 text-sm text-gray-300 leading-relaxed">
              For businesses ready to scale with flexible pricing. First 200 images free with Eva-v1-Fast model, then $0.05/image + optional
              add-ons.
            </p>

            <a
              href="https://app.scam.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 block w-full rounded-full bg-[#245FFF] py-3.5 text-center font-semibold text-white hover:bg-[#1d4acc] transition-colors"
            >
              Get Started →
            </a>

            <ul className="space-y-3 text-sm text-gray-300">
              {['GenAI Detection', 'Deepfake Analysis', 'Eva-v1-Fast Model', 'API Access', 'All optional add-ons'].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className={`mr-2 h-5 w-5 flex-shrink-0 ${index === 4 ? 'text-gray-600' : 'text-[#245FFF]'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={index === 4 ? 'text-gray-500' : ''}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className={`relative rounded-3xl bg-gray-900/40 p-8 ${
            volume >= VOLUME_DISCOUNT_THRESHOLD ? 'border-2 border-[#245FFF]' : 'border border-gray-700'
          }`}>
            {volume >= VOLUME_DISCOUNT_THRESHOLD && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full border-2 border-[#245FFF] bg-[#245FFF] px-4 py-1 text-xs font-semibold text-white">
                  Recommended
                </span>
              </div>
            )}
            
            <h3 className="mb-6 text-2xl font-bold text-white">Enterprise</h3>

            <div className="mb-6">
              <span className="text-5xl font-bold text-white">Custom</span>
            </div>

            {volume >= VOLUME_DISCOUNT_THRESHOLD ? (
              <div className="mb-8">
                <div className="mb-4 rounded-xl bg-gradient-to-r from-[#245FFF]/20 to-purple-500/20 border border-[#245FFF]/50 px-4 py-3">
                  <p className="text-sm font-semibold text-white mb-1">Perfect for your volume</p>
                  <p className="text-xs text-gray-300">Get volume discounts + enterprise features for 2,000+ images/month</p>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Unlock custom pricing, Eva-v1-Pro forensic-grade model with lower false positives, advanced Thinking capabilities, and dedicated support for high-volume operations
                </p>
              </div>
            ) : (
              <p className="mb-8 text-sm text-gray-300 leading-relaxed">
                For large organizations requiring forensic-grade accuracy, lower false positives, and dedicated support. Includes Eva-v1-Pro model and advanced Thinking capabilities.
              </p>
            )}

            <a
              href="https://cal.com/scamai/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 block w-full rounded-full border-2 border-[#245FFF] bg-gray-800/50 py-3.5 text-center font-semibold text-white hover:bg-[#245FFF] transition-colors"
            >
              Talk to sales →
            </a>

            <ul className="space-y-3 text-sm text-gray-300">
              {[
                'Everything in Self-Serve',
                'Eva-v1-Pro Model',
                'Thinking (Advanced Reasoning)',
                'Volume Discounts',
                'Priority Support & SLA',
                'Dedicated Account Manager',
                'Custom Integration & Training',
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#245FFF]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
