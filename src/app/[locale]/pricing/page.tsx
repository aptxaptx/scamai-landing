"use client";

import { useState, useMemo } from "react";

export default function PricingPage() {
  // State
  const [volume, setVolume] = useState(500);
  const [adaptiveDefense, setAdaptiveDefense] = useState(false);
  const [activeLiveness, setActiveLiveness] = useState(false);
  const [expressLane, setExpressLane] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP' | 'SGD' | 'HKD' | 'JPY' | 'KRW'>('USD');

  // Pricing constants
  const FREE_CHECKS = 500; // First 500 checks free per month
  const BASE_PRICE = 0.15; // Base price per check (after free tier)
  const ADAPTIVE_DEFENSE_PRICE = 0.20;
  const ACTIVE_LIVENESS_PRICE = 0.10;
  const EXPRESS_LANE_PRICE = 0.02;
  const VOLUME_DISCOUNT_THRESHOLD = 5000;

  // Currency conversion rates (relative to USD)
  const currencyRates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    SGD: 1.34,
    HKD: 7.80,
    JPY: 149.50,
    KRW: 1340.00,
  };

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    SGD: 'S$',
    HKD: 'HK$',
    JPY: '¥',
    KRW: '₩',
  };

  const currencyRate = currencyRates[currency];
  const currencySymbol = currencySymbols[currency];
  
  // Currencies without decimal places
  const noDecimalCurrencies = ['JPY', 'KRW'];
  const decimals = noDecimalCurrencies.includes(currency) ? 0 : 2;
  
  // Format price based on currency
  const formatPrice = (price: number, forceDecimals?: number) => {
    const convertedPrice = price * currencyRate;
    const decimalPlaces = forceDecimals !== undefined ? forceDecimals : decimals;
    return convertedPrice.toFixed(decimalPlaces);
  };

  // Calculate price per check
  const pricePerCheck = useMemo(() => {
    let price = BASE_PRICE;
    if (adaptiveDefense) price += ADAPTIVE_DEFENSE_PRICE;
    if (activeLiveness) price += ACTIVE_LIVENESS_PRICE;
    if (expressLane) price += EXPRESS_LANE_PRICE;
    return price;
  }, [adaptiveDefense, activeLiveness, expressLane]);

  // Calculate total monthly estimate (first 500 checks are free)
  const monthlyEstimate = useMemo(() => {
    const paidChecks = Math.max(0, volume - FREE_CHECKS);
    let total = paidChecks * pricePerCheck;
    return total;
  }, [volume, pricePerCheck]);

  const sliderPosition = (volume / 5000) * 100;
  const bubbleLeftPercent = Math.max(5, Math.min(95, sliderPosition));

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white sm:text-sm">
            USAGE-BASED PRICING
          </p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Pay only for <span className="text-[#0043FA]">what you use</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base text-gray-300 sm:text-lg lg:text-xl leading-relaxed">
            Transparent, predictable pricing for deepfake detection. <span className="font-semibold text-white">500 free checks per month</span>, then $0.15/check + optional add-ons. No hidden fees, no long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
            {/* Left Side - Calculator */}
            <div className="space-y-8">
              {/* Volume Slider */}
              <div className="rounded-3xl bg-gray-900/60 border border-gray-700 p-8">
                <label className="mb-6 block text-xl font-bold text-white">
                  Monthly Volume
                </label>
                <div className="relative pt-10 pb-2">
                  {/* Current value above slider */}
                  <div 
                    className="absolute top-0 bg-[#0043FA] text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap z-10"
                    style={{
                      left: `${bubbleLeftPercent}%`,
                      transform: 'translateX(-50%)',
                    }}
                  >
                    {volume.toLocaleString()} checks
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-[#0043FA]"
                  />
                  <div className="mt-3 flex items-center justify-between text-sm text-gray-400">
                    <span>0</span>
                    <span>5,000</span>
                  </div>
                </div>

                {/* Volume Discount Badge - shown when at max */}
                {volume === 5000 && (
                  <div className="mt-6 rounded-2xl border-2 border-[#0043FA] bg-gradient-to-r from-[#0043FA]/20 to-purple-500/20 p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0043FA] flex items-center justify-center">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-xl text-white mb-2">Need more than 5,000 checks?</p>
                        <p className="text-sm text-gray-300 mb-4">
                          Unlock enterprise-grade features, volume discounts, and dedicated support for high-volume needs.
                        </p>
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0043FA] text-white font-semibold hover:bg-[#0036C8] transition-colors"
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
                <p className="mb-6 text-sm text-gray-400">
                  Enhance your detection capabilities with optional features
                </p>
                
                <div className="space-y-4">
                  {/* Adaptive Defense */}
                  <label className="flex items-start gap-4 cursor-pointer group p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                    <input
                      type="checkbox"
                      checked={adaptiveDefense}
                      onChange={(e) => setAdaptiveDefense(e.target.checked)}
                      className="mt-1 h-5 w-5 rounded-md border-gray-700 bg-gray-900 text-[#0043FA] focus:ring-2 focus:ring-[#0043FA]/20"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-white group-hover:text-[#0043FA] transition-colors">
                          Adaptive Defense
                        </span>
                        <span className="text-sm font-semibold text-[#0043FA]">+$0.20/check</span>
                      </div>
                      <p className="text-sm text-gray-400">
                        Real-time deepfake & injection attack detection with advanced AI models
                      </p>
                    </div>
                  </label>

                  {/* Active Liveness */}
                  <label className="flex items-start gap-4 cursor-pointer group p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                    <input
                      type="checkbox"
                      checked={activeLiveness}
                      onChange={(e) => setActiveLiveness(e.target.checked)}
                      className="mt-1 h-5 w-5 rounded-md border-gray-700 bg-gray-900 text-[#0043FA] focus:ring-2 focus:ring-[#0043FA]/20"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-white group-hover:text-[#0043FA] transition-colors">
                          Active Liveness
                        </span>
                        <span className="text-sm font-semibold text-[#0043FA]">+$0.10/check</span>
                      </div>
                      <p className="text-sm text-gray-400">
                        Interactive KYC movement verification for enhanced identity validation
                      </p>
                    </div>
                  </label>

                  {/* Express Lane */}
                  <label className="flex items-start gap-4 cursor-pointer group p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                    <input
                      type="checkbox"
                      checked={expressLane}
                      onChange={(e) => setExpressLane(e.target.checked)}
                      className="mt-1 h-5 w-5 rounded-md border-gray-700 bg-gray-900 text-[#0043FA] focus:ring-2 focus:ring-[#0043FA]/20"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-white group-hover:text-[#0043FA] transition-colors">
                          Express Lane
                        </span>
                        <span className="text-sm font-semibold text-[#0043FA]">+$0.02/check</span>
                      </div>
                      <p className="text-sm text-gray-400">
                        Ultra-low latency processing with &lt;1s response time guarantee
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Forensic Add-ons */}
              <div className="rounded-3xl bg-gradient-to-br from-purple-500/10 to-gray-900/60 border-2 border-purple-500/50 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Forensic Add-ons</h3>
                    <p className="text-sm text-gray-400">Enterprise-grade investigation tools</p>
                  </div>
                  <span className="rounded-full bg-purple-500/20 border border-purple-500/50 px-3 py-1 text-xs font-semibold text-purple-300">
                    Enterprise
                  </span>
                </div>
                
                <div className="space-y-4">
                  {/* Forensic PDF Reports */}
                  <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">Forensic PDF Reports</h4>
                        <p className="text-sm text-gray-400 mb-3">
                          Comprehensive provenance report with detailed analysis, chain of custody, and legal documentation
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-purple-400">{currencySymbol}{formatPrice(500)}</span>
                          <span className="text-sm text-gray-400">per image</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-xs text-gray-500 mb-3">Includes:</p>
                      <ul className="space-y-2 text-xs text-gray-400">
                        <li className="flex items-start gap-2">
                          <svg className="h-4 w-4 flex-shrink-0 text-purple-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Detailed manipulation timeline & techniques used</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="h-4 w-4 flex-shrink-0 text-purple-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Chain of custody documentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="h-4 w-4 flex-shrink-0 text-purple-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Legal-ready evidence package</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="h-4 w-4 flex-shrink-0 text-purple-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Expert witness support available</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Contact Sales CTA */}
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full rounded-xl border-2 border-purple-500/50 bg-purple-500/10 py-3 text-center font-semibold text-purple-300 hover:bg-purple-500/20 hover:border-purple-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Talk to sales for forensic features
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Price Summary */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="rounded-3xl bg-gradient-to-br from-[#0043FA]/20 to-gray-900/60 border-2 border-[#0043FA] p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Price Summary</h3>
                  
                  {/* Currency Selector */}
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as 'USD' | 'EUR' | 'GBP' | 'SGD' | 'HKD' | 'JPY' | 'KRW')}
                    className="rounded-xl border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white focus:border-[#0043FA] focus:outline-none focus:ring-2 focus:ring-[#0043FA]/20 cursor-pointer"
                  >
                    <option value="USD">🇺🇸 USD ($)</option>
                    <option value="EUR">🇪🇺 EUR (€)</option>
                    <option value="GBP">🇬🇧 GBP (£)</option>
                    <option value="SGD">🇸🇬 SGD (S$)</option>
                    <option value="HKD">🇭🇰 HKD (HK$)</option>
                    <option value="JPY">🇯🇵 JPY (¥)</option>
                    <option value="KRW">🇰🇷 KRW (₩)</option>
                  </select>
                </div>
                
                {/* Price Per Check */}
                <div className="mb-8 pb-8 border-b border-gray-700">
                  <p className="mb-2 text-sm text-gray-400 uppercase tracking-wider">
                    Price Per Check
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">
                      {currencySymbol}{volume <= FREE_CHECKS ? (decimals === 0 ? '0' : '0.00') : formatPrice(pricePerCheck)}
                    </span>
                    <span className="text-lg text-gray-400">/check</span>
                  </div>
                  
                  {volume <= FREE_CHECKS ? (
                    <div className="mt-4 rounded-xl bg-green-500/10 border border-green-500/30 px-4 py-3">
                      <p className="text-sm font-semibold text-green-400">
                        ✓ Within free tier (first 500 checks)
                      </p>
                    </div>
                  ) : (
                    /* Breakdown */
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>Base Detection</span>
                        <span className="font-semibold">{currencySymbol}{formatPrice(BASE_PRICE)}</span>
                      </div>
                      {adaptiveDefense && (
                        <div className="flex justify-between text-gray-300">
                          <span>+ Adaptive Defense</span>
                          <span className="font-semibold text-[#0043FA]">+{currencySymbol}{formatPrice(ADAPTIVE_DEFENSE_PRICE)}</span>
                        </div>
                      )}
                      {activeLiveness && (
                        <div className="flex justify-between text-gray-300">
                          <span>+ Active Liveness</span>
                          <span className="font-semibold text-[#0043FA]">+{currencySymbol}{formatPrice(ACTIVE_LIVENESS_PRICE)}</span>
                        </div>
                      )}
                      {expressLane && (
                        <div className="flex justify-between text-gray-300">
                          <span>+ Express Lane</span>
                          <span className="font-semibold text-[#0043FA]">+{currencySymbol}{formatPrice(EXPRESS_LANE_PRICE)}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Monthly Estimate */}
                <div className="mb-8">
                  <p className="mb-2 text-sm text-gray-400 uppercase tracking-wider">
                    Total Monthly Estimate
                  </p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-[#0043FA]">
                      {currencySymbol}{(monthlyEstimate * currencyRate).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
                    </span>
                    <span className="text-lg text-gray-400">/month</span>
                  </div>

                  {/* Monthly Breakdown */}
                  <div className="space-y-2 text-sm">
                    {volume <= FREE_CHECKS ? (
                      <div className="flex justify-between text-gray-300">
                        <span>{volume.toLocaleString()} checks</span>
                        <span className="font-semibold text-green-400">FREE</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-between text-gray-300">
                          <span>Free checks</span>
                          <span className="font-semibold text-green-400">{FREE_CHECKS.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>{(volume - FREE_CHECKS).toLocaleString()} paid checks × {currencySymbol}{formatPrice(pricePerCheck)}</span>
                          <span className="font-semibold">{currencySymbol}{formatPrice((volume - FREE_CHECKS) * pricePerCheck)}</span>
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
                  className="block w-full rounded-full bg-[#0043FA] py-4 text-center text-lg font-semibold text-white hover:bg-[#0036C8] transition-colors shadow-lg shadow-[#0043FA]/20"
                >
                  Get Started →
                </a>

                <p className="mt-4 text-center text-xs text-gray-400">
                  No setup fees • Cancel anytime • Pay as you go
                </p>
              </div>

              {/* Base Features */}
              <div className="mt-6 rounded-3xl bg-gray-900/40 border border-gray-700 p-6">
                <p className="mb-4 text-sm font-semibold text-white">Base Detection Includes:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Static image analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Metadata verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>RESTful API access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Dashboard analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl text-center mb-16">
          <p className="text-lg text-gray-300 sm:text-xl">
            Transparent pricing with no hidden fees. <span className="font-bold text-white">Scale confidently as your business grows.</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Self-Serve Plan */}
            <div className={`relative rounded-3xl bg-gray-900/60 p-8 ${volume < VOLUME_DISCOUNT_THRESHOLD ? 'border-2 border-[#0043FA]' : 'border border-gray-700'}`}>
              {volume < VOLUME_DISCOUNT_THRESHOLD && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full border-2 border-[#0043FA] bg-[#0043FA] px-4 py-1 text-xs font-semibold text-white">
                    Recommended
                  </span>
                </div>
              )}
              
              <h3 className="mb-6 text-2xl font-bold text-white">Self-Serve</h3>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">
                    {currencySymbol}{volume <= FREE_CHECKS ? (decimals === 0 ? '0' : '0') : formatPrice(pricePerCheck, decimals === 0 ? 0 : 3)}
                  </span>
                  <span className="text-lg text-gray-400">per check</span>
                </div>
                {volume <= FREE_CHECKS && (
                  <p className="mt-2 text-sm text-green-400">
                    ✓ Free for first 500 checks
                  </p>
                )}
              </div>
              
              <p className="mb-2 text-sm font-semibold text-[#0043FA]">
                500 free checks/month
              </p>
              
              <p className="mb-8 text-sm text-gray-300 leading-relaxed">
                For businesses ready to scale with flexible pricing. First 500 checks free, then $0.15/check + optional add-ons.
              </p>
              
              <a
                href="https://app.scam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-8 block w-full rounded-full bg-[#0043FA] py-3.5 text-center font-semibold text-white hover:bg-[#0036C8] transition-colors"
              >
                Start now →
              </a>
              
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Image Detection</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Deepfake Analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>API Access</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>All optional add-ons</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className={`relative rounded-3xl bg-gray-900/40 p-8 ${volume >= VOLUME_DISCOUNT_THRESHOLD ? 'border-2 border-[#0043FA]' : 'border border-gray-700'}`}>
              {volume >= VOLUME_DISCOUNT_THRESHOLD && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full border-2 border-[#0043FA] bg-[#0043FA] px-4 py-1 text-xs font-semibold text-white">
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
                  <div className="mb-4 rounded-xl bg-gradient-to-r from-[#0043FA]/20 to-purple-500/20 border border-[#0043FA]/50 px-4 py-3">
                    <p className="text-sm font-semibold text-white mb-1">
                      🎯 Perfect for your volume
                    </p>
                    <p className="text-xs text-gray-300">
                      Get volume discounts + enterprise features for 5,000+ checks/month
                    </p>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Unlock custom pricing, dedicated support, and premium features tailored for high-volume operations
                  </p>
                </div>
              ) : (
                <p className="mb-8 text-sm text-gray-300 leading-relaxed">
                  For large organizations with custom needs and dedicated support
                </p>
              )}
              
              <a
                href="/contact"
                className="mb-8 block w-full rounded-full border border-gray-600 bg-transparent py-3.5 text-center font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                Talk to sales →
              </a>
              
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Everything in Self-Serve</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Volume Discounts</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Priority Support & SLA</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Dedicated Account Manager</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Custom Integration & Training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
