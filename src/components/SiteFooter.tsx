"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function SiteFooter() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <footer
      className={`py-16 w-full border-t ${
        isDark ? "bg-[#05050f] border-white/10 text-slate-100" : "bg-white border-slate-200 text-slate-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/scamailogo.png"
                alt="Scam AI"
                className={`h-8 w-auto ${isDark ? "" : "invert"}`}
                width={100}
                height={32}
              />
            </div>
            <p className={`${isDark ? "text-slate-400" : "text-slate-600"} mb-6 max-w-md`}>
              The AI firewall that keeps deepfakes and synthetic fraud out of your KYC, onboarding, and identity flows.
            </p>
            <a
              href="https://linkedin.com/company/scamai"
              className={`inline-flex items-center gap-2 transition-colors ${
                isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-black"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          <div>
            <h3 className={`${isDark ? "text-white" : "text-slate-900"} font-semibold mb-4`}>Product</h3>
            <ul className={`space-y-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              <li><a href="/features" className="hover:text-indigo-500 transition-colors">Features</a></li>
              <li><a href="/docs" className="hover:text-indigo-500 transition-colors">API</a></li>
              <li><a href="/pricing" className="hover:text-indigo-500 transition-colors">Pricing</a></li>
              <li><a href="/status" className="hover:text-indigo-500 transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h3 className={`${isDark ? "text-white" : "text-slate-900"} font-semibold mb-4`}>Company</h3>
            <ul className={`space-y-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              <li><a href="/stories/skydeck" className="hover:text-indigo-500 transition-colors">About (Our Story)</a></li>
              <li><a href="/careers" className="hover:text-indigo-500 transition-colors">Careers</a></li>
              <li><a href="/blog" className="hover:text-indigo-500 transition-colors">Blog</a></li>
              <li><a href="https://cal.com/scamai/15min" className="hover:text-indigo-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className={`${isDark ? "text-white" : "text-slate-900"} font-semibold mb-4`}>Legal</h3>
            <ul className={`space-y-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              <li><a href="/privacy" className="hover:text-indigo-500 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-indigo-500 transition-colors">Terms of Service</a></li>
              <li><a href="/abuse" className="hover:text-indigo-500 transition-colors">Report Abuse</a></li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm ${
            isDark ? "border-t border-white/10 text-slate-400" : "border-t border-slate-200 text-slate-600"
          }`}
        >
          <p>© 2026 Scam.ai Inc. All rights reserved. Built in Berkeley.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-indigo-500 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-indigo-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
