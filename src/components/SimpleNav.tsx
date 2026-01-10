"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage, languages, Language } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function SimpleNav() {
  const { toggleTheme, isDark } = useTheme();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();
  const navLink = isDark
    ? "text-slate-200 hover:text-white hover:bg-white/5"
    : "text-slate-700 hover:text-black hover:bg-slate-100";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur border-b ${
        isDark ? "bg-[#05050f]/90 border-white/10" : "bg-white/90 border-slate-200"
      }`}
    >
      <div className="h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />
      
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Scam AI"
              width={140}
              height={28}
              className={`h-7 w-auto transition duration-200 ${isDark ? "" : "invert"}`}
            />
          </Link>

          <nav className="flex items-center gap-1">
            <div 
              className="relative"
              onMouseEnter={() => {
                setOpenDropdown("products");
              }}
              onMouseLeave={() => {
                setOpenDropdown(null);
              }}
            >
              <button
                className={`relative flex items-center gap-1.5 px-4 py-2 text-base font-normal rounded-md transition-all duration-200 ${navLink}`}
              >
                {t("nav.products")}
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${openDropdown === "products" ? "rotate-180" : ""}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "products" && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div
                    className={`shadow-xl rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 ${
                      isDark ? "bg-[#0b0b18] border border-white/10" : "bg-white border border-slate-200"
                    }`}
                  >
                  <div className="py-2">
                    <Link
                      href="/models/deepfakes"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {t("products.deepfake")}
                    </Link>
                    <Link
                      href="/models/voice-clones"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {t("products.voice")}
                    </Link>
                    <Link
                      href="/models/ai-generated-media"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {t("products.aimedia")}
                    </Link>
                  </div>
                </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                setOpenDropdown("industries");
              }}
              onMouseLeave={() => {
                setOpenDropdown(null);
              }}
            >
              <button
                className={`relative flex items-center gap-1.5 px-4 py-2 text-base font-normal rounded-md transition-all duration-200 ${navLink}`}
              >
                {t("nav.industries")}
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${openDropdown === "industries" ? "rotate-180" : ""}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "industries" && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div
                    className={`shadow-xl rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 ${
                      isDark ? "bg-[#0b0b18] border border-white/10" : "bg-white border border-slate-200"
                    }`}
                  >
                  <div className="py-2">
                    <Link
                      href="/business/kyc"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {t("industries.kyc")}
                    </Link>
                    <Link
                      href="/business/dating"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {t("industries.dating")}
                    </Link>
                    <Link
                      href="/business/fake-news"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {t("industries.fakenews")}
                    </Link>
                    <Link
                      href="/business/impersonation"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {t("industries.impersonation")}
                    </Link>
                  </div>
                </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                setOpenDropdown("resources");
              }}
              onMouseLeave={() => {
                setOpenDropdown(null);
              }}
            >
              <button
                className={`relative flex items-center gap-1.5 px-4 py-2 text-base font-normal rounded-md transition-all duration-200 ${navLink}`}
              >
                {t("nav.resources")}
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${openDropdown === "resources" ? "rotate-180" : ""}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "resources" && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div
                    className={`shadow-xl rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 ${
                      isDark ? "bg-[#0b0b18] border border-white/10" : "bg-white border border-slate-200"
                    }`}
                  >
                  <div className="py-2">
                    <Link
                      href="/research/publication"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {t("resources.publications")}
                    </Link>
                    <Link
                      href="/stories/news"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {t("resources.news")}
                    </Link>
                    <Link
                      href="/stories/type-of-scams"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {t("resources.scams")}
                    </Link>
                  </div>
                </div>
                </div>
              )}
            </div>

            {/* Company Link */}
            <Link 
              href="/company/about" 
              className={`flex items-center gap-1.5 px-4 py-2 text-base font-normal rounded-md transition-all duration-200 ${navLink}`}
            >
              {t("nav.company")}
              <svg className="w-3 h-3 opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Pricing Link */}
            <Link 
              href="/pricing" 
              className={`flex items-center gap-1.5 px-4 py-2 text-base font-normal rounded-md transition-all duration-200 ${navLink}`}
            >
              {t("nav.pricing")}
              <svg className="w-3 h-3 opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Sign up Link */}
            <Link
              href="https://app.scam.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 text-base font-normal rounded-md transition-all duration-200 ${navLink}`}
            >
              {t("nav.signup")}
            </Link>

            {/* Get a Demo Button */}
            <Link
              href="https://cal.com/scamai/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-white text-base font-medium transition-all duration-200 rounded-none hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
              style={{ background: 'linear-gradient(90deg, #6366F1, #8B5CF6, #3B82F6)' }}
            >
              {t("nav.demo")}
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 border ${
                isDark
                  ? "text-slate-200 border-white/20 hover:bg-white/5"
                  : "text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                  />
                </svg>
              )}
            </button>

            {/* Language Selector */}
            <div 
              className="relative"
              onMouseEnter={() => {
                setOpenDropdown("language");
              }}
              onMouseLeave={() => {
                setOpenDropdown(null);
              }}
            >
              <button
                className={`flex items-center gap-1.5 p-2 rounded-full transition-all duration-200 ${
                  isDark ? "hover:bg-white/5" : "hover:bg-slate-100"
                }`}
              >
                <svg
                  className={`w-5 h-5 ${isDark ? "text-slate-200" : "text-slate-700"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${
                    openDropdown === "language" ? "rotate-180" : ""
                  } ${isDark ? "text-slate-200" : "text-slate-700"}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "language" && (
                <div className="absolute top-full right-0 pt-2 w-48">
                  <div
                    className={`shadow-xl rounded-lg max-h-96 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200 ${
                      isDark ? "bg-[#0b0b18] border border-white/10" : "bg-white border border-slate-200"
                    }`}
                  >
                  <div className="py-2">
                    {Object.entries(languages).map(([code, { name }]) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLanguage(code as Language);
                          setOpenDropdown(null);
                        }}
                        className={`block w-full text-left px-4 py-3 text-sm transition-colors duration-150 ${
                          language === code
                            ? isDark
                              ? "bg-white/10 text-white font-medium"
                              : "bg-slate-100 text-slate-900 font-medium"
                            : isDark
                            ? "text-slate-200 hover:bg-white/5 hover:text-white"
                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
