"use client";

import { useState, useMemo } from "react";

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState("Image Detection");
  const [activeLiveness, setActiveLiveness] = useState(false);
  const [ipAnalysis, setIpAnalysis] = useState(false);
  const [whiteLabel, setWhiteLabel] = useState(false);
  const [volume, setVolume] = useState(500);

  // Pricing constants
  const FREE_CHECKS = 500;
  const BASE_PRICE_PER_CHECK = 0.05; // $0.05 per check after free tier
  const ACTIVE_LIVENESS_PRICE = 0.005; // $0.005 extra per check
  const IP_ANALYSIS_PRICE = 0.003; // $0.003 extra per check
  const WHITE_LABEL_PRICE = 50; // $50 flat monthly fee

  // Calculate price per check for display (only base price after free tier)
  const displayPricePerCheck = useMemo(() => {
    if (volume <= FREE_CHECKS) return 0;
    return BASE_PRICE_PER_CHECK;
  }, [volume]);

  // Calculate extra features cost per check (charged from first check)
  const extraFeaturesPerCheck = useMemo(() => {
    let price = 0;
    if (activeLiveness) price += ACTIVE_LIVENESS_PRICE;
    if (ipAnalysis) price += IP_ANALYSIS_PRICE;
    return price;
  }, [activeLiveness, ipAnalysis]);

  // Calculate total monthly cost
  const monthlyEstimate = useMemo(() => {
    let total = 0;
    
    // Base checks cost (only after free tier)
    const paidChecks = Math.max(0, volume - FREE_CHECKS);
    total = paidChecks * BASE_PRICE_PER_CHECK;
    
    // Extra features cost (charged for ALL checks, including free tier)
    if (extraFeaturesPerCheck > 0) {
      total += volume * extraFeaturesPerCheck;
    }
    
    // Add white label monthly fee
    if (whiteLabel) total += WHITE_LABEL_PRICE;
    
    return total;
  }, [volume, extraFeaturesPerCheck, whiteLabel]);

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white sm:text-sm">
            USAGE-BASED PRICING
          </p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Built to scale <span className="text-[#0043FA]">without lock-in</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base text-gray-300 sm:text-lg lg:text-xl leading-relaxed">
            Use our prepaid credit model with pay-per-success billing. 500 free base checks per month included. Extra features are charged from the first check. Zero long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Calculator & Plans */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
            {/* Left Sidebar - Configuration */}
            <div className="space-y-8">
              {/* What do you need? */}
              <div>
                <label className="mb-3 block text-base font-semibold text-white">
                  What do you need?
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white focus:border-[#0043FA] focus:outline-none focus:ring-2 focus:ring-[#0043FA]/20"
                >
                  <option>Image Detection</option>
                  <option>Audio Detection</option>
                  <option>Video Detection</option>
                </select>
                <p className="mt-2 text-sm text-gray-400">
                  Detect synthetic media and deepfakes in images. 500 free/month.
                </p>
              </div>

              {/* Extra Features */}
              <div>
                <label className="mb-3 block text-base font-semibold text-white">
                  Do you require extra features?
                </label>
                <p className="mb-3 text-sm text-gray-400">
                  Extra features are charged from the first check
                </p>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={activeLiveness}
                        onChange={(e) => setActiveLiveness(e.target.checked)}
                        className="h-5 w-5 rounded-md border-gray-700 bg-gray-900 text-[#0043FA] focus:ring-2 focus:ring-[#0043FA]/20"
                      />
                      <span className="ml-3 text-sm text-gray-300 group-hover:text-white transition">Active Liveness</span>
                    </div>
                    <span className="text-xs text-gray-500">+${ACTIVE_LIVENESS_PRICE}/check</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={ipAnalysis}
                        onChange={(e) => setIpAnalysis(e.target.checked)}
                        className="h-5 w-5 rounded-md border-gray-700 bg-gray-900 text-[#0043FA] focus:ring-2 focus:ring-[#0043FA]/20"
                      />
                      <span className="ml-3 text-sm text-gray-300 group-hover:text-white transition">IP Analysis</span>
                    </div>
                    <span className="text-xs text-gray-500">+${IP_ANALYSIS_PRICE}/check</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={whiteLabel}
                        onChange={(e) => setWhiteLabel(e.target.checked)}
                        className="h-5 w-5 rounded-md border-gray-700 bg-gray-900 text-[#0043FA] focus:ring-2 focus:ring-[#0043FA]/20"
                      />
                      <span className="ml-3 text-sm text-gray-300 group-hover:text-white transition">White Label</span>
                    </div>
                    <span className="text-xs text-gray-500">${WHITE_LABEL_PRICE}/mo</span>
                  </label>
                </div>
              </div>

              {/* Volume Slider */}
              <div>
                <label className="mb-3 block text-base font-semibold text-white">
                  What is your monthly volume of checks?
                </label>
                <div className="relative pt-8">
                  {/* Current value above slider */}
                  <div 
                    className="absolute -top-1 bg-[#0043FA] text-black px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg"
                    style={{
                      left: `calc(${(volume / 20000) * 100}% - 30px)`,
                      transform: 'translateX(-50%)',
                    }}
                  >
                    {volume.toLocaleString()}
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-[#0043FA]"
                  />
                  <div className="mt-3 flex items-center justify-between text-sm text-gray-400">
                    <span>0</span>
                    <span>20,000</span>
                  </div>
                </div>
                
                {/* Cost Breakdown */}
                {(volume > FREE_CHECKS || extraFeaturesPerCheck > 0) && (
                  <div className="mt-4 rounded-2xl border border-[#0043FA]/30 bg-[#0043FA]/5 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0043FA]">
                      Cost Breakdown
                    </p>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>Free base checks:</span>
                        <span className="font-semibold text-green-400">{Math.min(volume, FREE_CHECKS)}</span>
                      </div>
                      {volume > FREE_CHECKS && (
                        <div className="flex justify-between text-gray-300">
                          <span>Paid base checks:</span>
                          <span className="font-semibold text-white">{(volume - FREE_CHECKS).toLocaleString()}</span>
                        </div>
                      )}
                      {volume > FREE_CHECKS && (
                        <div className="flex justify-between text-gray-400 text-xs">
                          <span>• Base price</span>
                          <span>${((volume - FREE_CHECKS) * BASE_PRICE_PER_CHECK).toFixed(2)}</span>
                        </div>
                      )}
                      {activeLiveness && (
                        <div className="flex justify-between text-gray-400 text-xs border-t border-gray-700 pt-1.5">
                          <span>• Active Liveness ({volume} checks)</span>
                          <span>+${(ACTIVE_LIVENESS_PRICE * volume).toFixed(2)}</span>
                        </div>
                      )}
                      {ipAnalysis && (
                        <div className="flex justify-between text-gray-400 text-xs">
                          <span>• IP Analysis ({volume} checks)</span>
                          <span>+${(IP_ANALYSIS_PRICE * volume).toFixed(2)}</span>
                        </div>
                      )}
                      {whiteLabel && (
                        <div className="flex justify-between text-gray-400 text-xs">
                          <span>• White Label</span>
                          <span>+${WHITE_LABEL_PRICE.toFixed(2)}/mo</span>
                        </div>
                      )}
                      <div className="mt-2 flex justify-between border-t border-gray-700 pt-2 font-bold">
                        <span className="text-white">Est. monthly cost:</span>
                        <span className="text-[#0043FA]">${monthlyEstimate.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Pricing Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Self-Serve Plan */}
              <div className={`relative rounded-3xl bg-gray-900/60 p-8 ${volume <= 5000 ? 'border-2 border-[#0043FA]' : 'border border-gray-700'}`}>
                {volume <= 5000 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[#0043FA] px-4 py-1 text-xs font-semibold text-black">
                      Recommended
                    </span>
                  </div>
                )}
                
                <h3 className="mb-6 text-2xl font-bold text-white">Self-Serve</h3>
                
                <div className="mb-6">
                  {volume <= FREE_CHECKS && extraFeaturesPerCheck === 0 ? (
                    // Free tier, no extras
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">$0.00</span>
                      <span className="text-lg text-gray-400">per check</span>
                    </div>
                  ) : volume <= FREE_CHECKS && extraFeaturesPerCheck > 0 ? (
                    // Free tier, but with paid extras
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-white">${extraFeaturesPerCheck.toFixed(3)}</span>
                        <span className="text-lg text-gray-400">per check</span>
                      </div>
                      <p className="mt-2 text-xs text-gray-400">
                        Base check: <span className="text-green-400 font-semibold">Free</span> + Extra features
                      </p>
                    </div>
                  ) : (
                    // Paid tier
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-white">
                          ${(BASE_PRICE_PER_CHECK + extraFeaturesPerCheck).toFixed(3)}
                        </span>
                        <span className="text-lg text-gray-400">per check</span>
                      </div>
                      {extraFeaturesPerCheck > 0 && (
                        <p className="mt-2 text-xs text-gray-400">
                          Base: ${BASE_PRICE_PER_CHECK.toFixed(2)} + Extras: ${extraFeaturesPerCheck.toFixed(3)}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                
                <p className="mb-2 text-sm font-semibold text-[#0043FA]">
                  500 free / month
                </p>
                
                <p className="mb-8 text-sm text-gray-300 leading-relaxed">
                  For businesses ready to scale with flexible pricing. 
                  {extraFeaturesPerCheck > 0 
                    ? ' Extra features are charged from the first check.' 
                    : volume > FREE_CHECKS 
                      ? ` Base checks: $${BASE_PRICE_PER_CHECK.toFixed(2)}/check after free tier.`
                      : ' Select extra features for advanced capabilities.'}
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
                    <svg className="mr-2 h-5 w-5 flex-shrink-0 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-500">And many more features</span>
                  </li>
                </ul>
              </div>

              {/* Enterprise Plan */}
              <div className={`relative rounded-3xl bg-gray-900/40 p-8 ${volume > 5000 ? 'border-2 border-[#0043FA]' : 'border border-gray-700'}`}>
                {volume > 5000 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[#0043FA] px-4 py-1 text-xs font-semibold text-black">
                      Recommended
                    </span>
                  </div>
                )}
                <h3 className="mb-6 text-2xl font-bold text-white">Enterprise</h3>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">Custom</span>
                </div>
                
                <p className="mb-8 text-sm text-gray-300 leading-relaxed">
                  For large organizations with custom needs and dedicated support
                </p>
                
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
                    <span>Video Detection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Audio Detection</span>
                  </li>
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
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg text-gray-300 sm:text-xl">
            No setup fees. No lock-in contracts. No monthly minimums. <span className="font-bold text-white">You only pay for what you use.</span>
          </p>
        </div>
      </section>
    </main>
  );
}
