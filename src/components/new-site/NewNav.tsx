"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const navItems = [
  { 
    label: "Product", 
    href: "/products", 
    hasDropdown: true,
    children: [
      { label: "Vision Detection", href: "/products/vision-detection" },
      { label: "Audio Detection", href: "/products/audio-detection" },
      { label: "Scam Database (Coming Soon)", href: "/products/scam-database" },
    ]
  },
  { 
    label: "Resources", 
    href: "/resources", 
    hasDropdown: true,
    children: [
      { label: "Docs", href: "/resources/documentation" },
      { label: "Security & Compliance", href: "/resources/security-compliance" },
    ]
  },
  { label: "Pricing", href: "/pricing" },
  { 
    label: "Company", 
    href: "/company"
  },
];

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "pt", name: "Português" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "zh-TW", name: "繁體中文" },
  { code: "id", name: "Bahasa Indonesia" },
];

export default function NewNav() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
  };

  return (
    <>
      <div className="w-full bg-[#0021f3] py-2 text-center rounded-none">
        <p className="text-sm text-white">
          Scam.ai raised $2.5M and joined Berkeley SkyDeck (Batch 20){" "}
          <Link href="/news" className="inline-flex items-center underline hover:opacity-80">
            Read more →
          </Link>
        </p>
      </div>
      <div className="sticky top-0 z-50 bg-transparent">
      <header className="bg-transparent rounded-none">
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 rounded-none">
        <Link href="/" className="flex items-center">
          <img
            src="/scamai-logo.svg"
            alt="ScamAI"
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            if (item.children) {
              const isProduct = item.label === "Product";
              const isResources = item.label === "Resources";
              const isOpen = isProduct ? productsOpen : (isResources ? resourcesOpen : false);
              const setIsOpen = isProduct ? setProductsOpen : (isResources ? setResourcesOpen : () => {});
              const dropdownRef = isProduct ? productsDropdownRef : (isResources ? resourcesDropdownRef : null);
              
              return (
                <div key={item.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-1 text-sm font-medium text-white transition-colors duration-150 hover:text-white/80"
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-white transition hover:text-white/80"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {/* <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 bg-transparent px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg bg-black shadow-lg">
                <div className="max-h-64 overflow-y-auto scrollbar-hide">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLocale(lang.code)}
                      className={`w-full px-4 py-2 text-left text-sm transition ${
                        locale === lang.code
                          ? "bg-blue-600 text-white"
                          : "text-white hover:bg-gray-800"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{lang.name}</span>
                        {locale === lang.code && (
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          */}
          <a
            href="https://app.scam.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/80 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Log In
          </a>
          <Link
            href="/demo"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Book a demo
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <span className="text-2xl">{open ? "" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-white transition-transform duration-300 ease-in-out md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <Link href="/" onClick={() => setOpen(false)}>
              <img
                src="/scamai-logo.svg"
                alt="ScamAI"
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-900 text-3xl leading-none"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                if (item.children) {
                  const isProduct = item.label === "Product";
                  const isResources = item.label === "Resources";
                  const isOpen = isProduct ? productsOpen : (isResources ? resourcesOpen : false);
                  const setIsOpen = isProduct ? setProductsOpen : (isResources ? setResourcesOpen : () => {});
                  
                  return (
                    <div key={item.href}>
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between py-4 text-lg font-medium text-gray-900 border-b border-gray-100"
                      >
                        {item.label}
                        <svg
                          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="py-2 pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block py-3 text-base text-gray-600 hover:text-gray-900"
                              onClick={() => {
                                setOpen(false);
                                setIsOpen(false);
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between py-4 text-lg font-medium text-gray-900 border-b border-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-6 py-4">
            {/* Language Selector - Commented Out
            <div className="mb-4">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="w-full flex items-center justify-between py-2 text-base text-gray-900"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{currentLanguage.name}</span>
                </div>
                <svg
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {langOpen && (
                <div className="mt-2 max-h-48 overflow-y-auto bg-gray-50 rounded-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        switchLocale(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm transition ${
                        locale === lang.code
                          ? "bg-blue-100 text-blue-900"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            */}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="https://app.scam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 text-center text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                onClick={() => setOpen(false)}
              >
                Log In
              </a>
              <Link
                href="/demo"
                className="block w-full px-6 py-3 text-center text-sm font-semibold text-gray-700 bg-white rounded-full hover:bg-gray-50 transition"
                onClick={() => setOpen(false)}
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <div 
      className={`w-full overflow-hidden bg-black transition-all duration-300 ${
        (productsOpen || resourcesOpen) ? 'ease-out' : 'ease-in'
      }`}
      style={{ 
        maxHeight: (productsOpen || resourcesOpen) ? '400px' : '0',
        paddingTop: (productsOpen || resourcesOpen) ? '16px' : '0',
        paddingBottom: (productsOpen || resourcesOpen) ? '16px' : '0'
      }}
    >
      <div className={`mx-auto max-w-6xl px-4 transition-opacity duration-200 ${
        (productsOpen || resourcesOpen) ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex flex-col gap-1">
          {productsOpen && navItems.find(item => item.label === "Product")?.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-3 text-sm text-white hover:bg-gray-800 rounded-lg transition-colors duration-150"
              onClick={() => setProductsOpen(false)}
            >
              {child.label}
            </Link>
          ))}
          {resourcesOpen && navItems.find(item => item.label === "Resources")?.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-3 text-sm text-white hover:bg-gray-800 rounded-lg transition-colors duration-150"
              onClick={() => setResourcesOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
