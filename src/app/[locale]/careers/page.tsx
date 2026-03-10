"use client";

import { trackCTA } from "@/lib/analytics";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative px-4 sm:px-6" style={{ paddingTop: "180px", paddingBottom: "100px" }}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white mb-3">
            CAREERS
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            Join our mission
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto">
            We&apos;re building the trust layer for the AI era. Help us fight deepfakes, synthetic fraud, and AI-driven scams at scale.
          </p>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-10 mb-8">
            <p className="text-gray-400 mb-2">No open roles right now</p>
            <p className="text-sm text-gray-500">
              We&apos;re always looking for exceptional people. Send us your resume and we&apos;ll reach out when a role opens up.
            </p>
          </div>

          <a
            href="mailto:careers@scam.ai"
            className="inline-flex items-center gap-2 rounded-full bg-[#245FFF] px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1d4acc]"
            onClick={() => trackCTA("careers_email", "careers")}
          >
            Send your resume
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
