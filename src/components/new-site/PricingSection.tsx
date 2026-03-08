"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { trackPricing, trackCTA } from "@/lib/analytics";

// Animated wrapper consistent with other sections
function AnimatedBlock({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Toggle switch
function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={(e) => { e.stopPropagation(); onChange(!checked); }}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
        checked ? "bg-[#245FFF]" : "bg-gray-700"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

// Checkmark icon reused across lists
const Check = ({ muted = false }: { muted?: boolean }) => (
  <svg
    className={`mr-2 h-5 w-5 flex-shrink-0 ${muted ? "text-gray-700" : "text-[#245FFF]"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

// Constants
const FREE_CHECKS = 200;
const BASE_PRICE = 0.05;
const ADDON = { adaptive: 0.008, liveness: 0.008, express: 0.008 };
const MAX_VOLUME = 2000;

export default function PricingSection() {
  const [volume, setVolume] = useState(200);
  const [addons, setAddons] = useState({ adaptive: false, liveness: false, express: false });

  const toggle = (key: keyof typeof addons) => {
    const next = !addons[key];
    setAddons((prev) => ({ ...prev, [key]: next }));
    trackPricing(next ? "addon_enable" : "addon_disable", key);
  };

  const pricePerCheck = volume <= FREE_CHECKS
    ? 0
    : BASE_PRICE
      + (addons.adaptive ? ADDON.adaptive : 0)
      + (addons.liveness ? ADDON.liveness : 0)
      + (addons.express ? ADDON.express : 0);

  const monthlyTotal = volume <= FREE_CHECKS ? 0 : (volume - FREE_CHECKS) * pricePerCheck;
  const sliderPos = (volume / MAX_VOLUME) * 100;
  const isEnterprise = volume >= MAX_VOLUME;

  return (
    <section
      className="landing-section relative overflow-hidden bg-black"
      aria-label="Pricing"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 py-14 sm:py-20 lg:py-28">
        {/* Header — matches other sections */}
        <AnimatedBlock>
          <div className="text-center mb-10 lg:mb-14">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#245FFF] mb-3 sm:text-[10px] lg:mb-4">
              USAGE-BASED PRICING
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-3 sm:mb-4 lg:mb-5">
              Pay only for <span className="text-[#245FFF]">what you use</span>
            </h2>
            <p className="mx-auto max-w-xl text-sm sm:text-base text-gray-500 leading-relaxed">
              <span className="font-semibold text-white">200 free images/month</span> with Eva-v1-Fast,
              then $0.05/image. No hidden fees, no contracts.
            </p>
          </div>
        </AnimatedBlock>

        {/* Calculator + Summary */}
        <AnimatedBlock delay={0.15}>
          <div className="grid lg:grid-cols-[1fr_360px] gap-4 sm:gap-6 mb-10 lg:mb-14">
            {/* Left — Calculator */}
            <div className="space-y-4 sm:space-y-6">
              {/* Volume slider card */}
              <div className="rounded-xl sm:rounded-2xl border border-gray-800/60 bg-white/[0.02] p-5 sm:p-7">
                <label className="mb-5 block text-base sm:text-lg font-semibold text-white">Monthly Volume</label>
                <div className="relative pt-9 pb-1">
                  <div
                    className="absolute top-0 rounded-full bg-[#245FFF]/10 border border-[#245FFF]/30 px-3 py-1 text-xs font-semibold text-[#245FFF] whitespace-nowrap z-10"
                    style={{
                      left: `${Math.max(5, Math.min(95, sliderPos))}%`,
                      transform: "translateX(-50%)",
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
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      setVolume(v);
                      trackPricing("volume_change", `${v} images`);
                    }}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #245FFF 0%, #245FFF ${sliderPos}%, #1f2937 ${sliderPos}%, #1f2937 100%)`,
                    }}
                  />
                  <div className="mt-2 flex justify-between text-xs text-gray-600">
                    <span>0</span>
                    <span>{MAX_VOLUME.toLocaleString()}+</span>
                  </div>
                </div>

                {/* Enterprise nudge */}
                {isEnterprise && (
                  <div className="mt-5 flex items-center gap-3 rounded-xl border border-[#245FFF]/20 bg-[#245FFF]/5 p-4">
                    <svg className="h-5 w-5 text-[#245FFF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white">Need more?</p>
                      <p className="text-xs text-gray-400">Enterprise plans include volume discounts and dedicated support.</p>
                    </div>
                    <a
                      href="https://cal.com/scamai/15min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 rounded-full bg-[#245FFF] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#1d4acc] transition-colors"
                      onClick={() => trackCTA("enterprise_contact", "pricing_slider")}
                    >
                      Contact
                    </a>
                  </div>
                )}
              </div>

              {/* Add-ons card */}
              <div className="rounded-xl sm:rounded-2xl border border-gray-800/60 bg-white/[0.02] p-5 sm:p-7">
                <h3 className="mb-1 text-base sm:text-lg font-semibold text-white">Add-ons</h3>
                <p className="mb-5 text-xs text-gray-500">Optional features to enhance detection</p>

                <div className="space-y-3">
                  {([
                    { key: "adaptive" as const, label: "Adaptive Defense", desc: "Real-time GenAI, deepfake & injection attack detection", price: ADDON.adaptive },
                    { key: "liveness" as const, label: "Active Liveness", desc: "Verify real human presence and prevent deepfake spoofing", price: ADDON.liveness },
                    { key: "express" as const, label: "Express Lane", desc: "Low latency processing with 3s response guarantee", price: ADDON.express },
                  ]).map((addon) => (
                    <div
                      key={addon.key}
                      onClick={() => toggle(addon.key)}
                      className={`flex items-start gap-4 cursor-pointer p-3 sm:p-4 rounded-xl transition-all duration-200 ${
                        addons[addon.key]
                          ? "bg-[#245FFF]/5 border border-[#245FFF]/20"
                          : "border border-transparent hover:bg-white/[0.03]"
                      }`}
                    >
                      <div className="mt-0.5">
                        <ToggleSwitch checked={addons[addon.key]} onChange={() => toggle(addon.key)} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <span className={`text-sm font-medium transition-colors ${addons[addon.key] ? "text-[#245FFF]" : "text-white"}`}>
                            {addon.label}
                          </span>
                          <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">
                            +${addon.price.toFixed(3)}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{addon.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Price Summary */}
            <div className="lg:sticky lg:top-28 h-fit space-y-4">
              <div className="rounded-xl sm:rounded-2xl border border-gray-800/60 bg-white/[0.02] p-5 sm:p-7">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-5">Summary</h3>

                {/* Price per image */}
                <div className="mb-6 pb-6 border-b border-gray-800/60">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">Per Image</p>
                  <div className="flex items-baseline gap-1.5">
                    <motion.span
                      key={pricePerCheck.toFixed(3)}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-3xl sm:text-4xl font-bold text-white"
                    >
                      ${pricePerCheck.toFixed(3)}
                    </motion.span>
                    <span className="text-sm text-gray-500">/image</span>
                  </div>

                  {volume <= FREE_CHECKS ? (
                    <div className="mt-3 rounded-lg bg-green-500/5 border border-green-500/20 px-3 py-2">
                      <p className="text-xs font-medium text-green-400">Within free tier (200 images/mo)</p>
                    </div>
                  ) : (
                    <div className="mt-3 space-y-1.5 text-xs text-gray-400">
                      <div className="flex justify-between">
                        <span>Base</span>
                        <span className="text-gray-300">${BASE_PRICE.toFixed(3)}</span>
                      </div>
                      {addons.adaptive && (
                        <div className="flex justify-between">
                          <span>Adaptive Defense</span>
                          <span className="text-[#245FFF]">+${ADDON.adaptive.toFixed(3)}</span>
                        </div>
                      )}
                      {addons.liveness && (
                        <div className="flex justify-between">
                          <span>Active Liveness</span>
                          <span className="text-[#245FFF]">+${ADDON.liveness.toFixed(3)}</span>
                        </div>
                      )}
                      {addons.express && (
                        <div className="flex justify-between">
                          <span>Express Lane</span>
                          <span className="text-[#245FFF]">+${ADDON.express.toFixed(3)}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Monthly estimate */}
                <div className="mb-6">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">Monthly Estimate</p>
                  <div className="flex items-baseline gap-1.5">
                    <motion.span
                      key={monthlyTotal.toFixed(2)}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl sm:text-3xl font-bold text-[#245FFF]"
                    >
                      ${monthlyTotal.toFixed(2)}
                    </motion.span>
                    <span className="text-sm text-gray-500">/mo</span>
                  </div>
                  {volume > FREE_CHECKS && (
                    <p className="mt-1 text-[11px] text-gray-600">
                      {FREE_CHECKS} free + {(volume - FREE_CHECKS).toLocaleString()} paid
                    </p>
                  )}
                </div>

                {/* CTA */}
                <a
                  href="https://app.scam.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-[#245FFF] py-3 text-center text-sm font-semibold text-white hover:bg-[#1d4acc] transition-colors"
                  onClick={() => trackCTA("get_started", "pricing_summary")}
                >
                  Get Started
                </a>
                <p className="mt-3 text-center text-[11px] text-gray-600">No setup fees &middot; Cancel anytime</p>
              </div>

              {/* Base includes */}
              <div className="rounded-xl sm:rounded-2xl border border-gray-800/60 bg-white/[0.02] p-5">
                <p className="mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Includes</p>
                <ul className="space-y-2 text-xs text-gray-400">
                  {["GenAI & deepfake detection", "Eva-v1-Fast model", "REST API access", "Dashboard analytics"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedBlock>

        {/* Plan cards */}
        <AnimatedBlock delay={0.3}>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Self-Serve */}
            <div className={`relative rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
              !isEnterprise
                ? "border border-[#245FFF]/30 bg-[#245FFF]/[0.03]"
                : "border border-gray-800/60 bg-white/[0.02]"
            }`}>
              {!isEnterprise && (
                <div className="absolute -top-2.5 left-6">
                  <span className="rounded-full bg-[#245FFF] px-3 py-0.5 text-[10px] font-semibold text-white">
                    Recommended
                  </span>
                </div>
              )}

              <h3 className="mb-4 text-lg sm:text-xl font-bold text-white">Self-Serve</h3>

              <div className="mb-4 flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  ${volume <= FREE_CHECKS ? "0" : pricePerCheck.toFixed(3)}
                </span>
                <span className="text-sm text-gray-500">per image</span>
              </div>

              <p className="mb-1 text-xs font-semibold text-[#245FFF]">200 free images/month</p>
              <p className="mb-6 text-xs text-gray-500 leading-relaxed">
                Flexible pay-as-you-go for teams of all sizes. Start free, scale when ready.
              </p>

              <a
                href="https://app.scam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 block w-full rounded-full bg-[#245FFF] py-3 text-center text-sm font-semibold text-white hover:bg-[#1d4acc] transition-colors"
                onClick={() => trackCTA("get_started_self_serve", "pricing_card")}
              >
                Get Started
              </a>

              <ul className="space-y-2.5 text-xs text-gray-400">
                {["GenAI Detection", "Deepfake Analysis", "Eva-v1-Fast Model", "API Access", "All optional add-ons"].map((f, i) => (
                  <li key={f} className="flex items-center">
                    <Check muted={i === 4} />
                    <span className={i === 4 ? "text-gray-600" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise */}
            <div className={`relative rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
              isEnterprise
                ? "border border-[#245FFF]/30 bg-[#245FFF]/[0.03]"
                : "border border-gray-800/60 bg-white/[0.02]"
            }`}>
              {isEnterprise && (
                <div className="absolute -top-2.5 left-6">
                  <span className="rounded-full bg-[#245FFF] px-3 py-0.5 text-[10px] font-semibold text-white">
                    Recommended
                  </span>
                </div>
              )}

              <h3 className="mb-4 text-lg sm:text-xl font-bold text-white">Enterprise</h3>

              <div className="mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-white">Custom</span>
              </div>

              <p className="mb-6 text-xs text-gray-500 leading-relaxed">
                Forensic-grade accuracy with Eva-v1-Pro, lower false positives, advanced Thinking,
                and dedicated support for high-volume operations.
              </p>

              <a
                href="https://cal.com/scamai/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 block w-full rounded-full border border-white/10 bg-white/[0.04] py-3 text-center text-sm font-semibold text-white hover:bg-white/[0.08] transition-colors"
                onClick={() => trackCTA("talk_to_sales", "pricing_card")}
              >
                Talk to sales
              </a>

              <ul className="space-y-2.5 text-xs text-gray-400">
                {[
                  "Everything in Self-Serve",
                  "Eva-v1-Pro Model",
                  "Thinking (Advanced Reasoning)",
                  "Volume Discounts",
                  "Priority Support & SLA",
                  "Dedicated Account Manager",
                  "Custom Integration",
                ].map((f) => (
                  <li key={f} className="flex items-center">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </section>
  );
}
