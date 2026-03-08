"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { trackNewsletterSignup, trackOutbound } from "@/lib/analytics";

export default function NewFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      trackNewsletterSignup("footer");
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-black" role="contentinfo" aria-label="Site footer">
      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#245FFF]/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-8 sm:px-6">
        {/* Newsletter CTA */}
        <div className="mb-14 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-8 lg:p-10 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Stay ahead of AI threats</h3>
          <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
            Weekly insights on deepfakes, synthetic media, and AI security — straight to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-full bg-white/5 border border-white/10 px-5 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[#245FFF]/50 focus:ring-1 focus:ring-[#245FFF]/30 transition"
            />
            <button
              type="submit"
              className="rounded-full bg-[#245FFF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1d4acc] transition-colors whitespace-nowrap"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Footer columns */}
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/scamai-logo.svg"
                alt="ScamAI - AI Trust Platform Logo"
                className="h-8 w-auto"
                width="120"
                height="32"
              />
            </div>
            <p className="text-sm text-gray-500">
              All-in-one AI Trust Platform
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 pt-1">
              <a href="https://x.com/ScamAI_Official" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Follow us on X (Twitter)" onClick={() => trackOutbound("https://x.com/ScamAI_Official", "twitter")}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com/company/scamai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Follow us on LinkedIn" onClick={() => trackOutbound("https://linkedin.com/company/scamai", "linkedin")}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/scamai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="View our GitHub" onClick={() => trackOutbound("https://github.com/scamai", "github")}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
            </div>
          </div>

          <nav className="space-y-3 text-sm" aria-label="Product navigation">
            <h3 className="font-semibold text-white">Product</h3>
            <Link href="/products/ai-detection" className="block text-gray-500 hover:text-white transition-colors">AI Detection</Link>
            <Link href="/products/audio-detection" className="block text-gray-500 hover:text-white transition-colors">Audio Detection</Link>
            <Link href="/pricing" className="block text-gray-500 hover:text-white transition-colors">Pricing</Link>
          </nav>

          <nav className="space-y-3 text-sm" aria-label="Resources navigation">
            <h3 className="font-semibold text-white">Resources</h3>
            <a href="https://docu.scam.ai" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-white transition-colors">Documentation</a>
            <a href="https://reality-inc.trust.site/" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-white transition-colors">Security & Compliance</a>
            <Link href="/newsletter" className="block text-gray-500 hover:text-white transition-colors">Newsletter</Link>
          </nav>

          <nav className="space-y-3 text-sm" aria-label="Company navigation">
            <h3 className="font-semibold text-white">Company</h3>
            <Link href="/company" className="block text-gray-500 hover:text-white transition-colors">About</Link>
            <Link href="/research" className="block text-gray-500 hover:text-white transition-colors">Research</Link>
            <Link href="/contact" className="block text-gray-500 hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy" className="block text-gray-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="block text-gray-500 hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="block text-gray-500 hover:text-white transition-colors">Cookies</Link>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:px-6">
          <span>&copy; 2026 Reality Inc. All rights reserved.</span>
          <span>Built for trust in the AI era</span>
        </div>
      </div>
    </footer>
  );
}
