"use client";

import { Link } from "@/i18n/navigation";

export default function NewFooter() {
  return (
    <footer className="border-t border-[#0b0b0b] bg-[#0b0b0b]" role="contentinfo" aria-label="Site footer">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center">
            <img
              src="/scamai-logo.svg"
              alt="ScamAI - AI Trust Platform Logo"
              className="h-8 w-auto"
              width="120"
              height="32"
            />
          </div>
          <p className="text-sm text-[#9ca3af]">
            All-in-one AI Trust Platform
          </p>
        </div>

        <nav className="space-y-2 text-sm" aria-label="Product navigation">
          <h3 className="font-semibold text-white">Product</h3>
          <Link href="/products/vision-detection" className="block text-[#9ca3af] hover:text-white" aria-label="Vision Detection product">Vision Detection</Link>
          <Link href="/products/audio-detection" className="block text-[#9ca3af] hover:text-white" aria-label="Audio Detection product">Audio Detection</Link>
          <Link href="/pricing" className="block text-[#9ca3af] hover:text-white" aria-label="Pricing information">Pricing</Link>
        </nav>

        <nav className="space-y-2 text-sm" aria-label="Resources navigation">
          <h3 className="font-semibold text-white">Resources</h3>
          <a href="https://docu.scam.ai" target="_blank" rel="noopener noreferrer" className="block text-[#9ca3af] hover:text-white" aria-label="Documentation">Documentation</a>
          <Link href="/resources/security-compliance" className="block text-[#9ca3af] hover:text-white" aria-label="Security and Compliance">Security & Compliance</Link>
        </nav>

        <nav className="space-y-2 text-sm" aria-label="Company navigation">
          <h3 className="font-semibold text-white">Company</h3>
          <Link href="/company" className="block text-[#9ca3af] hover:text-white" aria-label="About ScamAI">About</Link>
          <Link href="/contact" className="block text-[#9ca3af] hover:text-white" aria-label="Contact us">Contact</Link>
          <Link href="/privacy" className="block text-[#9ca3af] hover:text-white" aria-label="Privacy Policy">Privacy</Link>
          <Link href="/terms" className="block text-[#9ca3af] hover:text-white" aria-label="Terms of Service">Terms</Link>
          <Link href="/cookies" className="block text-[#9ca3af] hover:text-white" aria-label="Cookie Policy">Cookies</Link>
        </nav>
      </div>

      <div className="border-t border-[#0b0b0b]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 text-xs text-[#6b7280] sm:flex-row sm:items-center sm:px-6">
          <span>© 2026 Reality Inc. All rights reserved.</span>
          <span>Built for trust in AI Era</span>
        </div>
      </div>
    </footer>
  );
}
