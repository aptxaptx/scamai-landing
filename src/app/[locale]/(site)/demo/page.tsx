"use client";

import { useState } from "react";
import { trackCTA } from "@/lib/analytics";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
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
        setSubmitted(true);
        trackCTA("demo_submitted", "demo_page");
      }
    } catch {
      // Silently fail — form still works
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative px-4 sm:px-6" style={{ paddingTop: "160px", paddingBottom: "100px" }}>
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold sm:text-5xl mb-4">
              Book a Demo
            </h1>
            <p className="text-lg text-gray-400">
              See how ScamAI detects deepfakes, synthetic fraud, and AI-generated scams. We&apos;ll walk you through the platform and answer your questions.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16 rounded-2xl border border-gray-800 bg-gray-900/30">
              <div className="text-4xl mb-4">&#10003;</div>
              <h2 className="text-2xl font-bold mb-2">Request received</h2>
              <p className="text-gray-400">
                We&apos;ll be in touch within one business day to schedule your demo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#245FFF] transition"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#245FFF] transition"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#245FFF] transition"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-gray-300 mb-2">
                  Primary Use Case *
                </label>
                <select
                  id="useCase"
                  name="useCase"
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white outline-none focus:border-[#245FFF] transition"
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
                <label htmlFor="volume" className="block text-sm font-medium text-gray-300 mb-2">
                  Expected Monthly Volume
                </label>
                <select
                  id="volume"
                  name="volume"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white outline-none focus:border-[#245FFF] transition"
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
                <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">
                  Anything else we should know?
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#245FFF] transition resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-[#245FFF] px-6 py-3.5 text-base font-semibold text-white hover:bg-[#1d4acc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Request a Demo"}
              </button>

              <p className="text-center text-xs text-gray-500">
                Or book directly:{" "}
                <a
                  href="https://cal.com/scamai/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#245FFF] hover:underline"
                >
                  Schedule a 15-min call
                </a>
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
