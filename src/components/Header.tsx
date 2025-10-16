"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <span className="text-xl font-semibold text-gray-900">Scam AI</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/business"
              className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors"
            >
              Use Cases
            </Link>
            <Link
              href="/models/deepfakes"
              className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors"
            >
              Models
            </Link>
            <Link
              href="/research/publication"
              className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors"
            >
              Research
            </Link>
            <Link
              href="/company/about"
              className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors"
            >
              Company
            </Link>
          </nav>

          {/* Desktop CTA Buttons - Original Style */}
          <div className="hidden md:flex items-center gap-0">
            <a
              href="https://app.scam.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-black text-white hover:bg-gray-900 transition-colors text-sm font-light tracking-wide border border-white shadow-lg"
            >
              LOGIN
            </a>
            <a
              href="https://cal.com/scamai/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-white text-black hover:bg-gray-100 transition-colors text-sm font-light tracking-wide border border-white shadow-lg -ml-px"
            >
              CONTACT SALES
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="/business"
              className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link
              href="/models/deepfakes"
              className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Models
            </Link>
            <Link
              href="/research/publication"
              className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Research
            </Link>
            <Link
              href="/company/about"
              className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Company
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
              <a
                href="https://app.scam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-5 py-2 bg-black text-white hover:bg-gray-900 transition-colors text-sm font-light tracking-wide"
              >
                LOGIN
              </a>
              <a
                href="https://cal.com/scamai/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-5 py-2 bg-white text-black hover:bg-gray-100 transition-colors text-sm font-light tracking-wide border border-gray-300"
              >
                CONTACT SALES
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
