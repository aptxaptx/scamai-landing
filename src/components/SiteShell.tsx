"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import SiteFooter from "./SiteFooter";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="min-h-dvh">
      {/* Desktop Header - Top Navigation Bar with Orange Bar */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-[10000] bg-white">
        {/* Orange Bar */}
        <div className="h-1 bg-orange-500"></div>
        
        {/* Main Navigation Bar */}
        <div className="border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Scam AI"
                  width={140}
                  height={28}
                  className="h-7 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <DesktopNav />

              {/* Right Actions */}
              <div className="flex items-center gap-4">
                <Link
                  href="https://app.scam.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Sign up
                </Link>
                <Link
                  href="https://cal.com/scamai/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors rounded"
                >
                  Get a Demo
                </Link>
                {/* Language Selector */}
                <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header - Top Bar with Logo and Hamburger */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-[10000] bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-5 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Scam AI"
              width={140}
              height={28}
              className="h-7 w-auto"
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-gray-900" />
            <span className="block w-6 h-0.5 bg-gray-900" />
            <span className="block w-6 h-0.5 bg-gray-900" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        expandedSection={expandedSection}
        setExpandedSection={setExpandedSection}
      />

      {/* Main Content - Add top padding for fixed header */}
      <main className="pt-16 md:pt-[65px] overflow-x-hidden bg-white">
        {children}
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
