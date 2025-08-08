"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import SiteShell from "@/components/SiteShell";

export default function IndividualsClient() {
  type SectionId = "mobile" | "plugin";
  const searchParams = useSearchParams();
  const s = searchParams.get("s");
  const active: SectionId = s === "plugin" ? "plugin" : "mobile";

  return (
    <SiteShell hideTopbar>
      <div className="space-y-8">
        {active === "mobile" ? (
          // Mobile App Page
          <div className="space-y-8">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-2xl border border-white/10 min-h-[50vh] grid place-items-center">
              <div className="absolute inset-0 -z-10 bg-[url('/visual.webp')] bg-cover bg-center opacity-40" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900/50 to-blue-900/50" />
              <div className="relative z-10 p-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Mobile Protection
                </h2>
                <p className="mt-4 text-white/85 text-lg max-w-2xl mx-auto">
                  We detect the fake; We protect the real
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <a
                    href="/waitlist"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm"
                  >
                    Join waitlist
                  </a>
                  <a
                    href="/demo"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <article className="relative rounded-2xl bg-white/5 p-6 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[url('/visual.webp')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-500/30 to-pink-500/30" />
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.2c.27-.27.35-.67.24-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M14 2l6 6m0-6l-6 6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold tracking-tight">Block Scam Calls</h3>
                <p className="mt-2 text-sm text-white/80">Real-time detection before calls reach you</p>
                <a href="#" className="mt-4 inline-flex text-sm font-semibold text-white/90 underline underline-offset-4">
                  Learn more
                </a>
              </article>

              <article className="relative rounded-2xl bg-white/5 p-6 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[url('/visual.webp')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/30 to-cyan-500/30" />
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12h8m-8 4h8m-8-8h8M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold tracking-tight">Detect Scam Messages</h3>
                <p className="mt-2 text-sm text-white/80">AI analysis of SMS and messaging apps</p>
                <a href="#" className="mt-4 inline-flex text-sm font-semibold text-white/90 underline underline-offset-4">
                  Learn more
                </a>
              </article>

              <article className="relative rounded-2xl bg-white/5 p-6 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[url('/visual.webp')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-500/30 to-emerald-500/30" />
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold tracking-tight">Scam Database</h3>
                <p className="mt-2 text-sm text-white/80">Access updated reported scam patterns</p>
                <a href="#" className="mt-4 inline-flex text-sm font-semibold text-white/90 underline underline-offset-4">
                  Learn more
                </a>
              </article>
            </section>

            {/* Use Cases */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[url('/visual.webp')] bg-cover bg-center opacity-15" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.2c.27-.27.35-.67.24-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="font-semibold">Answering a call</h3>
                <p className="text-sm text-white/80 mt-2">AI warns it's a spoofed number</p>
              </div>
              <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[url('/visual.webp')] bg-cover bg-center opacity-15" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-500/20 to-teal-500/20" />
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12h8m-8 4h8m-8-8h8M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="font-semibold">Receiving a message</h3>
                <p className="text-sm text-white/80 mt-2">AI detects phishing attempts</p>
              </div>
            </section>
          </div>
        ) : (
          // Browser Plugin Page
          <div className="space-y-8">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-2xl border border-white/10 min-h-[50vh] grid place-items-center">
              <div className="absolute inset-0 -z-10 bg-[url('/window.svg')] bg-no-repeat bg-center opacity-30" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900/50 to-purple-900/50" />
              <div className="relative z-10 p-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Web Protection
                </h2>
                <p className="mt-4 text-white/85 text-lg max-w-2xl mx-auto">
                  Seamless API integration across your devices
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <a
                    href="/waitlist"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm"
                  >
                    Join waitlist
                  </a>
                  <a
                    href="/demo"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <article className="relative rounded-2xl bg-white/5 p-6 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[url('/window.svg')] bg-no-repeat bg-center opacity-20" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-500/30 to-orange-500/30" />
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 10l-4 4m0-4l4 4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold tracking-tight">Block Scammy Ads</h3>
                <p className="mt-2 text-sm text-white/80">Filter fraudulent advertisements automatically</p>
                <a href="#" className="mt-4 inline-flex text-sm font-semibold text-white/90 underline underline-offset-4">
                  Learn more
                </a>
              </article>

              <article className="relative rounded-2xl bg-white/5 p-6 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[url('/window.svg')] bg-no-repeat bg-center opacity-20" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-500/30 to-emerald-500/30" />
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4M21 12c0 1.66-4 3-9 3s-9-1.34-9-3 4-3 9-3 9 1.34 9 3zM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold tracking-tight">Flag GenAI Content</h3>
                <p className="mt-2 text-sm text-white/80">Identify AI-generated images and videos</p>
                <a href="#" className="mt-4 inline-flex text-sm font-semibold text-white/90 underline underline-offset-4">
                  Learn more
                </a>
              </article>

              <article className="relative rounded-2xl bg-white/5 p-6 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[url('/window.svg')] bg-no-repeat bg-center opacity-20" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/30 to-violet-500/30" />
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 7l-7 5 7 5V7zM14 5l-3 7-3-7M1 5l7 5-7 5V5z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="5" y="8" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold tracking-tight">Meeting Integration</h3>
                <p className="mt-2 text-sm text-white/80">Real-time protection during video calls</p>
                <a href="#" className="mt-4 inline-flex text-sm font-semibold text-white/90 underline underline-offset-4">
                  Learn more
                </a>
              </article>
            </section>

            {/* Use Cases */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[url('/window.svg')] bg-no-repeat bg-center opacity-15" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="font-semibold">Checking a link</h3>
                <p className="text-sm text-white/80 mt-2">AI alerts if it's a phishing site</p>
              </div>
              <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[url('/window.svg')] bg-no-repeat bg-center opacity-15" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/20 to-red-500/20" />
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6m8 0V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v4.01" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="font-semibold">Buying online</h3>
                <p className="text-sm text-white/80 mt-2">AI flags suspicious sellers</p>
              </div>
            </section>
          </div>
        )}

        {/* Why Choose Us */}
        <section className="text-center space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[url('/visual.webp')] bg-cover bg-center opacity-10" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-500/20 to-amber-500/20" />
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="font-semibold">No.1 AI Models</h3>
              <p className="text-sm text-white/80 mt-2">Industry-leading accuracy</p>
            </div>
            <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[url('/visual.webp')] bg-cover bg-center opacity-10" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/20 to-indigo-500/20" />
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="font-semibold">Comprehensive Coverage</h3>
              <p className="text-sm text-white/80 mt-2">Complete digital protection</p>
            </div>
            <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[url('/visual.webp')] bg-cover bg-center opacity-10" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-sm text-white/80 mt-2">Real people ready to help</p>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}


