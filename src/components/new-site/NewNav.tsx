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
      { label: "Security", href: "/resources/security" },
      { label: "Compliance", href: "/resources/compliance" },
    ]
  },
  { label: "Pricing", href: "/pricing" },
  { 
    label: "Company", 
    href: "/company", 
    hasDropdown: true
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
    <header className="sticky top-0 z-50 relative rounded-none">
      <div className="absolute inset-0 bg-[#0b0f1f] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(29,78,216,0.35),_transparent_55%)]" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#1d4ed8]/50 blur-3xl" />
      <div className="absolute -right-20 top-32 h-80 w-80 rounded-full bg-[#3b82f6]/40 blur-3xl" />
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
                    className="flex items-center gap-1 text-sm font-medium text-white transition hover:text-white/80"
                  >
                    {item.label}
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
                  </button>
                  {isOpen && (
                    <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-none border border-gray-200 bg-white shadow-lg">
                      <div className="py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
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
          <a
            href="https://app.scam.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#60a5fa] bg-[#1e3a8a] px-4 py-2 text-sm font-semibold text-white transition hover:border-[#93c5fd]"
          >
            Log In
          </a>
          <Link
            href="/demo"
            className="border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Book a demo
          </Link>
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
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
              <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-none border border-gray-200 bg-white shadow-lg">
                <div className="max-h-64 overflow-y-auto scrollbar-hide">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLocale(lang.code)}
                      className={`w-full px-4 py-2 text-left text-sm transition ${
                        locale === lang.code
                          ? "bg-black text-white"
                          : "text-gray-700 hover:bg-gray-100"
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
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="relative md:hidden">
          <div className="absolute inset-0 bg-[#0b0f1f] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(29,78,216,0.35),_transparent_55%)]" />
          <div className="relative flex flex-col gap-3 px-4 py-4">
            {navItems.map((item) => {
              if (item.children) {
                const isProduct = item.label === "Product";
                const isResources = item.label === "Resources";
                const isOpen = isProduct ? productsOpen : (isResources ? resourcesOpen : false);
                const setIsOpen = isProduct ? setProductsOpen : (isResources ? setResourcesOpen : () => {});
                
                return (
                  <div key={item.href} className="flex flex-col">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex items-center justify-between rounded-none px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                    >
                      {item.label}
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
                    </button>
                    {isOpen && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-none px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10"
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
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                  onClick={() => setOpen(false)}
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
            <a
              href="https://app.scam.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#60a5fa] bg-[#1e3a8a] px-3 py-2 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Log In
            </a>
            <Link
              href="/demo"
              className="border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700"
              onClick={() => setOpen(false)}
            >
              Book a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
