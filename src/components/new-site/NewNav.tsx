"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import CommandPalette from "./CommandPalette";
import { trackCTA } from "@/lib/analytics";

type NavChild = {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
  icon?: React.ReactNode;
  coming?: boolean;
};

type ProductCategory = {
  title: string;
  items: NavChild[];
};

type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  dropdownKey?: DropdownKey;
  children?: NavChild[];
  productCategories?: ProductCategory[];
};

type DropdownKey = "product" | "solutions" | "resources" | null;

const navIcons = {
  vision: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  audio: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/></svg>,
  book: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
  shield: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  idCard: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="11" r="2.5"/><path d="M14 10h4"/><path d="M14 14h4"/></svg>,
  doc: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  video: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
  agent: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M7 20h10"/><path d="M12 16v4"/></svg>,
  users: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  flask: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6"/><path d="M10 3v6.5L3.3 18.1a1 1 0 00.8 1.9h15.8a1 1 0 00.8-1.9L14 9.5V3"/></svg>,
  mail: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,
  briefcase: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
  bank: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M12 3l9 7H3l9-7z"/><path d="M6 10v8"/><path d="M10 10v8"/><path d="M14 10v8"/><path d="M18 10v8"/></svg>,
  headset: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>,
  clipboard: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>,
  play: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  heart: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  film: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18"/><path d="M7 2v20"/><path d="M17 2v20"/><path d="M2 12h20"/><path d="M2 7h5"/><path d="M2 17h5"/><path d="M17 17h5"/><path d="M17 7h5"/></svg>,
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Product",
    dropdownKey: "product",
    productCategories: [
      {
        title: "CORE",
        items: [
          { label: "AI-Generated Detection", href: "/products/ai-detection", description: "Synthetic image and video detection", icon: navIcons.vision },
          { label: "Deepfake Detection", href: "/products/ai-detection", description: "Face swap and reenactment detection", icon: navIcons.vision },
          { label: "Voice Clone Detection", href: "/products/audio-detection", description: "Synthetic audio and voice cloning", icon: navIcons.audio },
        ],
      },
      {
        title: "COMPLIANCE",
        items: [
          { label: "Age Estimation", href: "/#solutions-age-estimation", description: "Facial age verification", icon: navIcons.idCard },
          { label: "Liveness Test", href: "/products", description: "Anti-spoofing presentation attacks", icon: navIcons.shield, coming: true },
          { label: "Document Forgery", href: "/#solutions-document-forgery", description: "Detect forged and AI-generated docs", icon: navIcons.doc, coming: true },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    dropdownKey: "solutions",
    productCategories: [
      {
        title: "USE CASES",
        items: [
          { label: "Remote Interviews", href: "/#solutions-remote-interview", description: "Verify candidate identity in live hiring calls", icon: navIcons.video },
          { label: "Remote Notary", href: "/#solutions-remote-notary", description: "Identity verification for notarizations", icon: navIcons.clipboard },
          { label: "Customer Onboarding", href: "/#solutions-customer-onboarding", description: "KYC identity checks during sign-up", icon: navIcons.idCard },
          { label: "Contact Centers", href: "/#solutions-contact-centers", description: "Detect voice cloning in real-time calls", icon: navIcons.headset },
          { label: "Agentic Workflows", href: "/#solutions-ai-agent", description: "Protect AI agents from manipulation", icon: navIcons.agent },
        ],
      },
      {
        title: "BY INDUSTRY",
        items: [
          { label: "Financial Services", href: "/#industry-financial", description: "Banks, insurance & fintech", icon: navIcons.bank },
          { label: "Human Resources", href: "/#industry-hr", description: "Recruiting & hiring platforms", icon: navIcons.briefcase },
          { label: "Government & Legal", href: "/#industry-government", description: "Compliance & public sector", icon: navIcons.shield },
          { label: "Healthcare", href: "/#industry-healthcare", description: "Telehealth identity verification", icon: navIcons.heart },
          { label: "Media & Entertainment", href: "/#industry-media", description: "Content authenticity verification", icon: navIcons.film },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "https://docu.scam.ai", external: true },
  {
    label: "Resources",
    dropdownKey: "resources",
    children: [
      { label: "Research", href: "/research", description: "Publications, benchmarks, and technical reports", icon: navIcons.flask },
      { label: "Newsletter", href: "/newsletter", description: "Weekly AI security insights", icon: navIcons.mail },
      { label: "About Us", href: "/about", description: "Our mission and milestones", icon: navIcons.users },
      { label: "Security & Compliance", href: "https://reality-inc.trust.site/", external: true, description: "SOC 2 Type II and GDPR", icon: navIcons.shield },
      { label: "Contact", href: "/contact", description: "Get in touch with our team", icon: navIcons.mail },
    ],
  },
  { label: "Careers", href: "/careers" },
];

function HamburgerIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}


export default function NewNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const isLandingPage = pathname === "/" || pathname === "";

  const navRef = useRef<HTMLElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const closeDropdown = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  const openDropdown = useCallback((key: DropdownKey) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveDropdown(key);
  }, []);

  // Click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!navRef.current?.contains(t) && !dropdownPanelRef.current?.contains(t)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((p) => !p);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const showAnnouncement = isLandingPage && !announcementDismissed;
  const announcementHeight = showAnnouncement ? 36 : 0;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "";
    return pathname.startsWith(href);
  };

  // Render a nav link or dropdown trigger for desktop
  const renderNavItem = (item: NavItem) => {
    if (item.dropdownKey) {
      const isOpen = activeDropdown === item.dropdownKey;
      return (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => openDropdown(item.dropdownKey!)}
          onMouseLeave={closeDropdown}
        >
          <button
            onClick={() => setActiveDropdown(isOpen ? null : item.dropdownKey!)}
            className="flex items-center gap-1 text-[13px] font-medium text-white"
          >
            {item.label}
          </button>
        </div>
      );
    }

    if (item.external) {
      return (
        <a
          key={item.label}
          href={item.href!}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium text-white"
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link
        key={item.label}
        href={item.href!}
        className="text-[13px] font-medium text-white"
      >
        {item.label}
      </Link>
    );
  };

  // Render dropdown child link
  const renderChild = (child: NavChild, onClose: () => void) => {
    const content = (
      <div className="flex items-start gap-3">
        {child.icon && <span className="text-[#245FFF] mt-0.5 flex-shrink-0">{child.icon}</span>}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-white mb-0.5">{child.label}</h3>
            {child.coming && (
              <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                Coming Soon
              </span>
            )}
          </div>
          {child.description && (
            <p className="text-xs text-gray-500 leading-relaxed">{child.description}</p>
          )}
        </div>
      </div>
    );

    if (child.external || child.href.includes("#")) {
      return (
        <a
          key={child.label}
          href={child.href}
          {...(child.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-150"
          onClick={onClose}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        key={child.label}
        href={child.href}
        className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-150"
        onClick={onClose}
      >
        {content}
      </Link>
    );
  };

  return (
    <>
      {/* Announcement bar */}
      {showAnnouncement && (
        <div className="fixed top-0 left-0 right-0 w-full bg-[#0021f3] text-center z-50 flex items-center justify-center" style={{ height: "36px" }}>
          <p className="text-xs sm:text-sm text-white leading-tight">
            Scam.ai raised $2.5M and joined Berkeley SkyDeck
          </p>
          <button
            onClick={() => setAnnouncementDismissed(true)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            aria-label="Dismiss"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <div className="fixed left-0 right-0 z-40" style={{ top: `${announcementHeight}px` }}>
        <header ref={navRef} className="transition-all duration-300">
          {/* Desktop nav — Evervault-style centered pill */}
          <nav className={`hidden md:flex items-center mx-auto max-w-6xl px-4 py-3 sm:px-6 transition-all duration-300 ${
            scrolled ? "justify-center" : "justify-between"
          }`}>
            {/* Logo — hidden when scrolled */}
            <Link href="/" className={`flex-shrink-0 transition-all duration-300 ${
              scrolled ? "w-0 opacity-0 overflow-hidden" : "w-auto opacity-100"
            }`}>
              <img src="/scamai-logo.svg" alt="ScamAI" className="h-9 w-auto" />
            </Link>

            {/* Centered pill */}
            <div
              className="flex items-center gap-1 rounded-[20px] px-2 py-2 transition-all duration-300"
              style={{
                backdropFilter: "blur(10px)",
                background: scrolled ? "#171825bf" : "transparent",
                height: "40px",
                fontSize: "12px",
                lineHeight: 1,
                boxShadow: scrolled
                  ? "inset 0 0 0 1px rgba(255,255,255,0.1), 0 2px 8px rgba(0,0,0,0.3)"
                  : "none",
              }}
            >
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdownKey ? (
                    <div
                      onMouseEnter={() => openDropdown(item.dropdownKey!)}
                      onMouseLeave={closeDropdown}
                    >
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.dropdownKey ? null : item.dropdownKey!)}
                        className={`flex items-center gap-1 rounded-full px-3 py-1 text-[12px] font-medium text-white transition-all duration-150 ${
                          activeDropdown === item.dropdownKey
                            ? "bg-white/[0.08]"
                            : "hover:bg-white/[0.04]"
                        }`}
                      >
                        {item.label}
                      </button>
                    </div>
                  ) : item.external ? (
                    <a
                      href={item.href!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-full px-3 py-1 text-[12px] font-medium text-white transition-all duration-150 hover:bg-white/[0.04]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`block rounded-full px-3 py-1 text-[12px] font-medium transition-all duration-150 hover:bg-white/[0.04] ${
                        isActive(item.href!) ? "text-white bg-white/[0.06]" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA inside pill — only visible when scrolled */}
              <Link
                href="/demo"
                className={`rounded-full border border-white/20 px-3 py-1 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-white/10 whitespace-nowrap ${
                  scrolled ? "w-auto opacity-100 ml-1" : "w-0 opacity-0 overflow-hidden px-0 ml-0 border-transparent"
                }`}
                onClick={() => trackCTA("book_demo", "nav")}
              >
                Get a demo &rsaquo;
              </Link>
            </div>

            {/* Right actions — hidden when scrolled */}
            <div className={`flex items-center gap-2 flex-shrink-0 transition-all duration-300 ${
              scrolled ? "w-0 opacity-0 overflow-hidden" : "w-auto opacity-100"
            }`}>
              <button
                onClick={() => setSearchOpen(true)}
                className="flex h-8 w-8 items-center justify-center text-white rounded-full hover:bg-white/[0.06]"
                aria-label="Search"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <a
                href="https://app.scam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-3 py-1.5 text-[13px] font-medium text-white transition-all duration-150 hover:bg-white/[0.04]"
                onClick={() => trackCTA("log_in", "nav")}
              >
                Log in
              </a>
              <Link
                href="/demo"
                className="rounded-full border border-white/20 px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-white/10"
                onClick={() => trackCTA("book_demo", "nav")}
              >
                Get a demo
              </Link>
            </div>
          </nav>

          {/* Mobile nav */}
          <nav className="flex md:hidden items-center justify-between px-4 py-3">
            <Link href="/" className="flex-shrink-0">
              <img src="/scamai-logo.svg" alt="ScamAI" className="h-9 w-auto" />
            </Link>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex h-10 w-10 items-center justify-center text-white"
                aria-label="Search"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center text-white"
                onClick={() => setMobileOpen((p) => !p)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </div>
          </nav>

          {/* Mobile full-screen menu */}
          <div
            className={`fixed left-0 right-0 bottom-0 z-[100] bg-[#0b0b0b] transition-transform duration-300 ease-in-out md:hidden ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ top: `${announcementHeight}px` }}
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <img src="/scamai-logo.svg" alt="ScamAI" className="h-9 w-auto" />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center text-white"
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    if (item.productCategories || item.children) {
                      const isOpen = mobileExpanded === item.label;
                      const closeAll = () => { setMobileOpen(false); setMobileExpanded(null); };
                      return (
                        <div key={item.label}>
                          <button
                            onClick={() => setMobileExpanded(isOpen ? null : item.label)}
                            className="w-full flex items-center justify-between py-4 text-lg font-medium text-white border-b border-gray-800"
                          >
                            {item.label}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isOpen ? "rotate-180" : ""}`}><path d="M6 9l6 6 6-6" /></svg>
                          </button>
                          {isOpen && item.productCategories && (
                            <div className="py-3 pl-2 space-y-4">
                              {item.productCategories.map((cat) => (
                                <div key={cat.title}>
                                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-500 mb-2 px-3">{cat.title}</p>
                                  <div className="space-y-1">
                                    {cat.items.map((child) => renderChild(child, closeAll))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          {isOpen && !item.productCategories && item.children && (
                            <div className="py-3 pl-2 space-y-1">
                              {item.children.map((child) => renderChild(child, closeAll))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    if (item.external) {
                      return (
                        <a
                          key={item.label}
                          href={item.href!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-4 text-lg font-medium text-white border-b border-gray-800"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={item.label}
                        href={item.href!}
                        className="block py-4 text-lg font-medium text-white border-b border-gray-800"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-gray-800 px-6 py-4">
                <div className="flex flex-col gap-3">
                  <a
                    href="https://app.scam.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 text-center text-sm font-semibold text-white bg-transparent border border-gray-700 rounded-full hover:bg-gray-800 transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    Log in
                  </a>
                  <Link
                    href="/demo"
                    className="block w-full px-6 py-3 text-center text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get a demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Desktop dropdown panel */}
        <div
          ref={dropdownPanelRef}
          className={`fixed left-0 right-0 w-full overflow-hidden bg-black/90 backdrop-blur-xl transition-all duration-200 z-30 ${
            activeDropdown ? "ease-out pointer-events-auto" : "ease-in pointer-events-none"
          }`}
          style={{
            top: `${announcementHeight + 56}px`,
            maxHeight: activeDropdown ? "500px" : "0",
            paddingTop: activeDropdown ? "24px" : "0",
            paddingBottom: activeDropdown ? "24px" : "0",
          }}
          onMouseEnter={() => { if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current); }}
          onMouseLeave={closeDropdown}
        >
          <div className={`mx-auto max-w-5xl px-6 transition-opacity duration-200 ${
            activeDropdown ? "opacity-100" : "opacity-0"
          }`}>
            {/* Categorized dropdowns (Product, Solutions) */}
            {activeDropdown && (() => {
              const activeItem = navItems.find((item) => item.dropdownKey === activeDropdown);
              if (!activeItem?.productCategories) return null;
              const catCount = activeItem.productCategories.length;
              // Product has 2 categories + featured card = 3 cols; Solutions has 2 categories = 2 cols
              const hasFeature = activeDropdown === "product";
              const gridCols = hasFeature ? "grid-cols-3" : catCount === 2 ? "grid-cols-2" : `grid-cols-${catCount}`;
              return (
                <div className={`grid ${gridCols} gap-0 divide-x divide-white/[0.06]`}>
                  {activeItem.productCategories.map((cat) => (
                    <div key={cat.title} className="px-5 first:pl-0 last:pr-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500 mb-3 px-3">
                        {cat.title}
                      </p>
                      <div className="space-y-0.5">
                        {cat.items.map((child) => {
                          const content = (
                            <div className="flex items-center gap-3 group">
                              {child.icon && (
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-400 group-hover:bg-white/[0.12] group-hover:border-white/[0.15] group-hover:text-white transition-all duration-200 flex-shrink-0">
                                  {child.icon}
                                </span>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <h3 className="text-sm font-medium text-white truncate">{child.label}</h3>
                                  {child.coming && (
                                    <span className="flex-shrink-0 rounded bg-white/[0.06] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                                      Coming Soon
                                    </span>
                                  )}
                                </div>
                                {child.description && (
                                  <p className="text-[11px] text-gray-500 truncate">{child.description}</p>
                                )}
                              </div>
                              <svg className="w-3.5 h-3.5 text-gray-600 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          );

                          if (child.external || child.href.includes("#")) {
                            return (
                              <a
                                key={child.label}
                                href={child.href}
                                {...(child.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                className="block rounded-lg p-3 hover:bg-white/[0.04] transition-colors duration-150"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {content}
                              </a>
                            );
                          }
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block rounded-lg p-3 hover:bg-white/[0.04] transition-colors duration-150"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {content}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  {/* Featured card — only for Product */}
                  {hasFeature && (
                    <div className="px-5">
                      <Link
                        href="/research"
                        className="block group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] border border-white/[0.08] p-5 h-full transition-all duration-200 group-hover:border-[#245FFF]/30">
                          <span className="inline-block rounded bg-[#245FFF]/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#245FFF] mb-4">
                            Research
                          </span>
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] mb-4">
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 3h6"/><path d="M10 3v6.5L3.3 18.1a1 1 0 00.8 1.9h15.8a1 1 0 00.8-1.9L14 9.5V3"/>
                            </svg>
                          </div>
                          <h3 className="text-sm font-semibold text-white leading-snug">
                            How to detect deepfakes with 99.7% accuracy
                          </h3>
                          <p className="text-[11px] text-gray-500 mt-1.5 leading-relaxed">
                            Read our latest benchmark results and methodology.
                          </p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Simple dropdowns (Resources, etc.) */}
            {activeDropdown && (() => {
              const activeItem = navItems.find((item) => item.dropdownKey === activeDropdown);
              if (!activeItem?.children || activeItem.productCategories) return null;
              return (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {activeItem.children.map((child) =>
                    renderChild(child, () => setActiveDropdown(null))
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
      <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
