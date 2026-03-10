"use client";

import { useState } from "react";
import { trackCTA } from "@/lib/analytics";

export default function DemoPage() {
  const [view, setView] = useState<"choose" | "form" | "submitted">("choose");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          useCase: formData.get("useCase"),
          volume: formData.get("volume"),
          notes: formData.get("notes"),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      });

      if (res.ok) {
        setView("submitted");
        trackCTA("demo_submitted", "demo_page");
      }
    } catch {
      // Silently fail
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white relative overflow-hidden">
      {/* Purple gradient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(88, 28, 180, 0.18) 0%, rgba(56, 20, 140, 0.08) 40%, transparent 70%)",
        }}
      />

      <section className="relative px-6" style={{ paddingTop: "180px", paddingBottom: "120px" }}>
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-20">
            {/* Pill label */}
            <span className="inline-block rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-gray-300 mb-8">
              Contact Us
            </span>

            {/* Mixed-weight heading */}
            <h1 className="text-5xl sm:text-7xl tracking-tight mb-6 leading-[1.1] font-light text-white">
              We&apos;re here to help
            </h1>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Get in touch with our sales and support teams for product questions, live architecture sessions, demos and more.
            </p>
          </div>

          {view === "choose" && (
            <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
              {/* Card 1 — Schedule a Demo */}
              <div className="group relative rounded-2xl border border-white/[0.08] overflow-hidden">
                {/* Card gradient bg */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(160deg, rgba(88, 28, 180, 0.12) 0%, rgba(30, 15, 60, 0.2) 50%, rgba(10, 10, 20, 0.6) 100%)",
                  }}
                />
                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.08] border border-white/[0.1] mb-8">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4" />
                      <path d="M8 2v4" />
                      <path d="M3 10h18" />
                    </svg>
                  </div>

                  <h2 className="text-xl font-semibold mb-3">Schedule a Demo</h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-1">
                    Talk to an expert about your deepfake detection needs. Discuss your requirements, learn about custom pricing, or request a product demo.
                  </p>

                  {/* Book button */}
                  <a
                    href="https://cal.com/scamai/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] px-5 py-3 text-sm font-medium text-white transition-colors w-fit"
                    onClick={() => trackCTA("book_demo_cal", "demo_page")}
                  >
                    Book
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card 2 — Send us a message */}
              <div className="group relative rounded-2xl border border-white/[0.08] overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(160deg, rgba(88, 28, 180, 0.12) 0%, rgba(30, 15, 60, 0.2) 50%, rgba(10, 10, 20, 0.6) 100%)",
                  }}
                />
                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.08] border border-white/[0.1] mb-8">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 7L2 7" />
                    </svg>
                  </div>

                  <h2 className="text-xl font-semibold mb-3">Send us a message</h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-1">
                    Have a question? Get hands on support directly from our engineers by sending us a message. We&apos;ll respond to you in &lt;12 hours.
                  </p>

                  {/* Get in touch button */}
                  <button
                    onClick={() => setView("form")}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] px-5 py-3 text-sm font-medium text-white transition-colors w-fit"
                  >
                    Get in touch
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {view === "form" && (
            <div className="max-w-xl mx-auto">
              <button
                onClick={() => setView("choose")}
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors mb-10"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
                Back
              </button>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                      Full Name <span className="text-gray-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-white/20 transition"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                      Work Email <span className="text-gray-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-white/20 transition"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-gray-400 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-white/20 transition"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="useCase" className="block text-sm text-gray-400 mb-2">
                    Primary Use Case <span className="text-gray-600">*</span>
                  </label>
                  <select
                    id="useCase"
                    name="useCase"
                    required
                    className="w-full appearance-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 pr-10 text-white outline-none focus:border-white/20 transition bg-[length:16px_16px] bg-[position:right_12px_center] bg-no-repeat"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234b5563'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")` }}
                  >
                    <option value="">Select a use case</option>
                    <option value="kyc">KYC / Identity Verification</option>
                    <option value="content-moderation">Content Moderation</option>
                    <option value="fraud-prevention">Fraud Prevention</option>
                    <option value="voice-auth">Voice Authentication / Call Center</option>
                    <option value="insurance">Insurance Claims Verification</option>
                    <option value="hr">Remote Interview Verification</option>
                    <option value="media">Media / Journalism Verification</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="volume" className="block text-sm text-gray-400 mb-2">
                    Expected Monthly Volume
                  </label>
                  <select
                    id="volume"
                    name="volume"
                    className="w-full appearance-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 pr-10 text-white outline-none focus:border-white/20 transition bg-[length:16px_16px] bg-[position:right_12px_center] bg-no-repeat"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234b5563'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")` }}
                  >
                    <option value="">Select volume</option>
                    <option value="under-200">Under 200 (free tier)</option>
                    <option value="200-2000">200 - 2,000</option>
                    <option value="2000-10000">2,000 - 10,000</option>
                    <option value="10000-50000">10,000 - 50,000</option>
                    <option value="50000+">50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm text-gray-400 mb-2">
                    Anything else?
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-white/20 transition resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-black hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Send message"}
                </button>
              </form>
            </div>
          )}

          {view === "submitted" && (
            <div className="text-center max-w-md mx-auto">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/[0.08] mx-auto mb-8">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h2
                className="text-3xl sm:text-4xl mb-4 leading-[1.1]"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                <span className="font-light text-white/90">Message </span>
                <span className="font-normal text-white">received</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We&apos;ll be in touch within one business day. In the meantime, you can also{" "}
                <a
                  href="https://cal.com/scamai/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4 decoration-gray-600 hover:decoration-white transition"
                >
                  book a call directly
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
