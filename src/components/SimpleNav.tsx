"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function SimpleNav() {
  const { resolvedTheme } = useTheme();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();
  const isDark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);
  const navLink = "text-black hover:text-gray-900 hover:bg-gray-50 font-semibold";

  return (
    <header
      className="app-fixed-header fixed top-0 left-0 right-0 z-50 backdrop-blur border-b bg-white border-gray-200"
    >
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
                className={`relative flex items-center gap-1.5 px-4 py-2 text-base rounded-md transition-all duration-200 ${navLink}`}
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
                      isDark ? "bg-white border border-white/10" : "bg-white border border-slate-200"
                    }`}
                  >
                  <div className="py-2">
                    <Link
                      href="/models/deepfakes"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-gray-50 hover:text-slate-900"
                      }`}
                    >
                      {t("products.deepfake")}
                    </Link>
                    <Link
                      href="/models/voice-clones"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-gray-50 hover:text-slate-900"
                      }`}
                    >
                      {t("products.voice")}
                    </Link>
                    <Link
                      href="/models/ai-generated-media"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-gray-50 hover:text-slate-900"
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
                className={`relative flex items-center gap-1.5 px-4 py-2 text-base rounded-md transition-all duration-200 ${navLink}`}
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
                      isDark ? "bg-white border border-white/10" : "bg-white border border-slate-200"
                    }`}
                  >
                  <div className="py-2">
                    <Link
                      href="/business/kyc"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-gray-50 hover:text-slate-900"
                      }`}
                    >
                      {t("industries.kyc")}
                    </Link>
                    <Link
                      href="/business/dating"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-gray-50 hover:text-slate-900"
                      }`}
                    >
                      {t("industries.dating")}
                    </Link>
                    <Link
                      href="/business/fake-news"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-gray-50 hover:text-slate-900"
                      }`}
                    >
                      {t("industries.fakenews")}
                    </Link>
                    <Link
                      href="/business/impersonation"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-gray-50 hover:text-slate-900"
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
                className={`relative flex items-center gap-1.5 px-4 py-2 text-base rounded-md transition-all duration-200 ${navLink}`}
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
                      isDark ? "bg-white border border-white/10" : "bg-white border border-slate-200"
                    }`}
                  >
                  <div className="py-2">
                    <Link
                      href="/research/publication"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-gray-50 hover:text-slate-900"
                      }`}
                    >
                      {t("resources.publications")}
                    </Link>
                    <Link
                      href="/stories/news"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-gray-50 hover:text-slate-900"
                      }`}
                    >
                      {t("resources.news")}
                    </Link>
                    <Link
                      href="/stories/type-of-scams"
                      className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                        isDark
                          ? "text-slate-200 hover:bg-white/5 hover:text-white"
                          : "text-slate-700 hover:bg-gray-50 hover:text-slate-900"
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
          <div className="flex items-center gap-3">
            {/* Sign up Link */}
            <Link
              href="https://app.scam.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 text-base font-normal hover:text-gray-600 transition-colors duration-200"
            >
              {t("nav.signup")}
            </Link>

            {/* Get a Demo Button */}
            <Link
              href="https://cal.com/scamai/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {t("nav.demo")}
            </Link>

            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
