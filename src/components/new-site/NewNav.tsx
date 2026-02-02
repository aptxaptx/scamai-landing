"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

type NavChild = {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
};

type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  { 
    label: "Product", 
    href: "/products", 
    hasDropdown: true,
    children: [
      { 
        label: "Vision Detection", 
        href: "/products/vision-detection",
        description: "AI-powered deepfake and synthetic media detection for images and videos with real-time analysis"
      },
      { 
        label: "Audio Detection", 
        href: "/products/audio-detection",
        description: "Voice cloning and synthetic audio detection to verify authenticity of audio content"
      },
      { 
        label: "Documentation", 
        href: "https://docu.scam.ai", 
        external: true,
        description: "API guides, integration examples, and technical documentation for developers"
      },
    ]
  },
  { label: "Pricing", href: "/pricing" },
  { 
    label: "Company", 
    href: "/company",
    hasDropdown: true,
    children: [
      { 
        label: "About Us", 
        href: "/about",
        description: "Learn about our mission and team"
      },
      { 
        label: "Security & Compliance", 
        href: "https://reality-inc.trust.site/",
        external: true,
        description: "Security certifications, compliance standards, and data protection policies"
      },
    ]
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
  const [companyOpen, setCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const companyDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (langDropdownRef.current && !langDropdownRef.current.contains(target)) {
        setLangOpen(false);
      }
      // Panel is SEPARATE from button ref - only close if click is outside BOTH button and panel
      const insideProducts = (productsDropdownRef.current?.contains(target)) || (dropdownPanelRef.current?.contains(target));
      if (!insideProducts) setProductsOpen(false);

      const insideCompany = (companyDropdownRef.current?.contains(target)) || (dropdownPanelRef.current?.contains(target));
      if (!insideCompany) setCompanyOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full bg-[#0021f3] py-2 text-center z-50">
        <p className="text-xs sm:text-sm text-white">
          Scam.ai raised $2.5M and joined Berkeley SkyDeck
        </p>
      </div>
      <div className="fixed top-[42px] left-0 right-0 z-40">
      <header className={`transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
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
              const isCompany = item.label === "Company";
              const isOpen = isProduct ? productsOpen : (isCompany ? companyOpen : false);
              const setIsOpen = isProduct ? setProductsOpen : (isCompany ? setCompanyOpen : () => {});
              const dropdownRef = isProduct ? productsDropdownRef : (isCompany ? companyDropdownRef : null);
              
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
                          ? "bg-[#235BF3] text-white"
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
          <a
            href="https://cal.com/scamai/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Book a demo
          </a>
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
        className={`fixed top-[42px] left-0 right-0 bottom-0 z-[100] bg-[#0b0b0b] transition-transform duration-300 ease-in-out md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
            <Link href="/" onClick={() => setOpen(false)}>
              <img
                src="/scamai-logo.svg"
                alt="ScamAI"
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="text-white text-3xl leading-none"
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
                  const isCompany = item.label === "Company";
                  const isOpen = isProduct ? productsOpen : (isCompany ? companyOpen : false);
                  const setIsOpen = isProduct ? setProductsOpen : (isCompany ? setCompanyOpen : () => {});
                  
                  return (
                    <div key={item.href}>
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between py-4 text-lg font-medium text-white border-b border-gray-700"
                      >
                        {item.label}
                        <svg
                          className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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
                        <div className="py-3 pl-2 space-y-3">
                          {/* Talk with Team Card for Mobile */}
                          {isProduct && (
                            <a
                              href="https://cal.com/scamai/15min"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 p-4 rounded-lg bg-white/5"
                              onClick={() => {
                                setOpen(false);
                                setIsOpen(false);
                              }}
                            >
                              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <h3 className="text-sm font-semibold text-white mb-0.5">
                                  Talk with the Team
                                </h3>
                                <p className="text-xs text-gray-500">
                                  Schedule a call
                                </p>
                              </div>
                            </a>
                          )}

                          {item.children.map((child) => (
                            child.external ? (
                              <a
                                key={child.href}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-4 rounded-lg hover:bg-white/5"
                                onClick={() => {
                                  setOpen(false);
                                  setIsOpen(false);
                                }}
                              >
                                <div>
                                  <h3 className="text-sm font-medium text-white mb-1">
                                    {child.label}
                                  </h3>
                                  {child.description && (
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                      {child.description}
                                    </p>
                                  )}
                                </div>
                              </a>
                            ) : (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block p-4 rounded-lg hover:bg-white/5"
                                onClick={() => {
                                  setOpen(false);
                                  setIsOpen(false);
                                }}
                              >
                                <div>
                                  <h3 className="text-sm font-medium text-white mb-1">
                                    {child.label}
                                  </h3>
                                  {child.description && (
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                      {child.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            )
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
                    className="block py-4 text-lg font-medium text-white border-b border-gray-700"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-700 px-6 py-4">
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
                          ? "bg-[#235BF3]/10 text-[#235BF3]"
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
                className="block w-full px-6 py-3 text-center text-sm font-semibold text-white bg-transparent border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                onClick={() => setOpen(false)}
              >
                Log In
              </a>
              <a
                href="https://cal.com/scamai/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 text-center text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition"
                onClick={() => setOpen(false)}
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <div 
      ref={dropdownPanelRef}
      className={`fixed top-[90px] left-0 right-0 w-full overflow-hidden bg-black/90 backdrop-blur-xl transition-all duration-200 z-30 ${
        (productsOpen || companyOpen) ? 'ease-out pointer-events-auto' : 'ease-in pointer-events-none'
      }`}
      style={{ 
        maxHeight: (productsOpen || companyOpen) ? '400px' : '0',
        paddingTop: (productsOpen || companyOpen) ? '32px' : '0',
        paddingBottom: (productsOpen || companyOpen) ? '32px' : '0'
      }}
    >
      <div className={`mx-auto max-w-6xl px-4 transition-opacity duration-200 ${
        (productsOpen || companyOpen) ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Products Grid */}
        {productsOpen && (
          <div className="flex gap-6">
            {/* Talk with Team Card */}
            <div className="flex-shrink-0" style={{ width: '220px' }}>
              <a
                href="https://cal.com/scamai/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full p-6 rounded-lg bg-white/5 hover:bg-white/8 transition-all duration-150"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2">
                      Talk with the Team
                    </h3>
                  </div>
                  <span className="text-xs text-gray-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Schedule call
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>

            {/* Products List */}
            <div className="flex-1 grid grid-cols-3 gap-4">
              {navItems.find(item => item.label === "Product")?.children?.map((child) => (
                child.external ? (
                  <a
                    key={child.href}
                    href={child.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-5 rounded-lg hover:bg-white/5 transition-colors duration-150"
                    onClick={() => setProductsOpen(false)}
                  >
                    <div className="mb-3">
                      <h3 className="text-sm font-medium text-white mb-1">
                        {child.label}
                      </h3>
                    </div>
                    {child.description && (
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {child.description}
                      </p>
                    )}
                  </a>
                ) : (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="group block p-5 rounded-lg hover:bg-white/5 transition-colors duration-150"
                    onClick={() => setProductsOpen(false)}
                  >
                    <div className="mb-3">
                      <h3 className="text-sm font-medium text-white mb-1">
                        {child.label}
                      </h3>
                    </div>
                    {child.description && (
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {child.description}
                      </p>
                    )}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}

        {/* Company Grid */}
        {companyOpen && (
          <div className="flex gap-4">
            {/* Company List */}
            <div className="flex-1">
              {navItems.find(item => item.label === "Company")?.children?.map((child) => (
                child.external ? (
                  <a
                    key={child.href}
                    href={child.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-5 rounded-lg hover:bg-white/5 transition-colors duration-150"
                    onClick={() => setCompanyOpen(false)}
                  >
                    <div className="mb-3">
                      <h3 className="text-sm font-medium text-white mb-1">
                        {child.label}
                      </h3>
                    </div>
                    {child.description && (
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {child.description}
                      </p>
                    )}
                  </a>
                ) : (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="group block p-5 rounded-lg hover:bg-white/5 transition-colors duration-150"
                    onClick={() => setCompanyOpen(false)}
                  >
                    <div className="mb-3">
                      <h3 className="text-sm font-medium text-white mb-1">
                        {child.label}
                      </h3>
                    </div>
                    {child.description && (
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {child.description}
                      </p>
                    )}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
    </>
  );
}
