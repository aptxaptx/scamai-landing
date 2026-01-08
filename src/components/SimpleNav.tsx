"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage, languages, Language } from "@/contexts/LanguageContext";

export default function SimpleNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#05050f]/90 backdrop-blur border-b border-white/10">
      <div className="h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />
      
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Scam AI"
              width={140}
              height={28}
              className="h-7 w-auto"
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
              <button className="relative flex items-center gap-1.5 px-4 py-2 text-base font-normal text-slate-200 hover:text-white transition-all duration-200 rounded-md hover:bg-white/5">
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
                  <div className="bg-[#0b0b18] border border-white/10 shadow-xl rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="py-2">
                    <Link href="/models/deepfakes" className="block px-4 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-white transition-colors duration-150">
                      {t("products.deepfake")}
                    </Link>
                    <Link href="/models/voice-clones" className="block px-4 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-white transition-colors duration-150">
                      {t("products.voice")}
                    </Link>
                    <Link href="/models/ai-generated-media" className="block px-4 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-white transition-colors duration-150">
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
              <button className="relative flex items-center gap-1.5 px-4 py-2 text-base font-normal text-slate-200 hover:text-white transition-all duration-200 rounded-md hover:bg-white/5">
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
                  <div className="bg-[#0b0b18] border border-white/10 shadow-xl rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="py-2">
                    <Link href="/business/kyc" className="block px-4 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-white transition-colors duration-150">
                      {t("industries.kyc")}
                    </Link>
                    <Link href="/business/dating" className="block px-4 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-white transition-colors duration-150">
                      {t("industries.dating")}
                    </Link>
                    <Link href="/business/fake-news" className="block px-4 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-white transition-colors duration-150">
                      {t("industries.fakenews")}
                    </Link>
                    <Link href="/business/impersonation" className="block px-4 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-white transition-colors duration-150">
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
              <button className="relative flex items-center gap-1.5 px-4 py-2 text-base font-normal text-slate-200 hover:text-white transition-all duration-200 rounded-md hover:bg-white/5">
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
                  <div className="bg-[#0b0b18] border border-white/10 shadow-xl rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="py-2">
                    <Link href="/research/publication" className="block px-4 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-white transition-colors duration-150">
                      {t("resources.publications")}
                    </Link>
                    <Link href="/stories/news" className="block px-4 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-white transition-colors duration-150">
                      {t("resources.news")}
                    </Link>
                    <Link href="/stories/type-of-scams" className="block px-4 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-white transition-colors duration-150">
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
              className="flex items-center gap-1.5 px-4 py-2 text-base font-normal text-slate-200 hover:text-white transition-all duration-200 rounded-md hover:bg-white/5"
            >
              {t("nav.company")}
              <svg className="w-3 h-3 opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Pricing Link */}
            <Link 
              href="/pricing" 
              className="flex items-center gap-1.5 px-4 py-2 text-base font-normal text-slate-200 hover:text-white transition-all duration-200 rounded-md hover:bg-white/5"
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
              className="px-4 py-2 text-base font-normal text-slate-200 hover:text-white transition-all duration-200 rounded-md hover:bg-white/5"
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
              <button className="flex items-center gap-1.5 p-2 hover:bg-white/5 rounded-full transition-all duration-200">
                <svg className="w-5 h-5 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <svg 
                  className={`w-3 h-3 text-slate-200 transition-transform duration-200 ${openDropdown === "language" ? "rotate-180" : ""}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "language" && (
                <div className="absolute top-full right-0 pt-2 w-48">
                  <div className="bg-[#0b0b18] border border-white/10 shadow-xl rounded-lg max-h-96 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
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
                            ? "bg-white/10 text-white font-medium" 
                            : "text-slate-200 hover:bg-white/5 hover:text-white"
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
