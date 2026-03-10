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

const s = "w-4 h-4"; // shared icon size
const navIcons = {
  // CORE — each product gets a distinct icon
  aiGen: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l1.09 3.26L16.36 6l-3.27 1.09L12 10.36l-1.09-3.27L7.64 6l3.27-1.09L12 2z"/><path d="M5 15l.7 2.1L7.8 17.8l-2.1.7L5 20.6l-.7-2.1-2.1-.7 2.1-.7L5 15z"/><path d="M19 11l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7L19 11z"/></svg>,
  deepfake: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M3 21v-2a7 7 0 017-7h4a7 7 0 017 7v2"/><path d="M15 5l2-2"/><path d="M9 5L7 3"/></svg>,
  voiceClone: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><path d="M12 19v4"/><path d="M8 23h8"/></svg>,

  // COMPLIANCE
  age: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="4"/><path d="M6 20v-1a6 6 0 0112 0v1"/><path d="M17 4l1.5 1.5"/><path d="M17 7h2"/></svg>,
  liveness: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  docForgery: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>,

  // USE CASES
  interview: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><circle cx="12" cy="10" r="2"/></svg>,
  notary: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 001 1h4"/><path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"/><path d="M9 17l2-5 2 5"/><path d="M9.5 15.5h3"/></svg>,
  onboarding: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M17 11l2 2 3-3"/></svg>,
  contactCenter: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>,
  agentWorkflow: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>,

  // BY INDUSTRY
  finance: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  hr: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11h-6"/></svg>,
  government: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M12 3l9 7H3l9-7z"/><path d="M7 10v8"/><path d="M12 10v8"/><path d="M17 10v8"/></svg>,
  healthcare: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/><circle cx="12" cy="12" r="10"/></svg>,
  media: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/><circle cx="8" cy="12" r="2"/></svg>,

  // RESOURCES
  research: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6"/><path d="M10 3v6.5L3.3 18.1a1 1 0 00.8 1.9h15.8a1 1 0 00.8-1.9L14 9.5V3"/></svg>,
  newsletter: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,
  about: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  security: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1"/></svg>,
  contact: <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
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
          { label: "AI-Generated", href: "/products/ai-detection", description: "Synthetic image and video detection", icon: navIcons.aiGen },
          { label: "Deepfake", href: "/products/ai-detection", description: "Face swap and reenactment detection", icon: navIcons.deepfake },
          { label: "Voice Clone", href: "/products/audio-detection", description: "Synthetic audio and voice cloning", icon: navIcons.voiceClone },
        ],
      },
      {
        title: "COMPLIANCE",
        items: [
          { label: "Age Estimation", href: "/#solutions-age-estimation", description: "Facial age verification", icon: navIcons.age },
          { label: "Liveness Test", href: "/products", description: "Anti-spoofing presentation attacks", icon: navIcons.liveness, coming: true },
          { label: "Document Forgery", href: "/#solutions-document-forgery", description: "Detect forged and AI-generated docs", icon: navIcons.docForgery, coming: true },
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
          { label: "Remote Interviews", href: "/#solutions-remote-interview", description: "Verify candidate identity in live hiring calls", icon: navIcons.interview },
          { label: "Remote Notary", href: "/#solutions-remote-notary", description: "Identity verification for notarizations", icon: navIcons.notary },
          { label: "Customer Onboarding", href: "/#solutions-customer-onboarding", description: "KYC identity checks during sign-up", icon: navIcons.onboarding },
          { label: "Contact Centers", href: "/#solutions-contact-centers", description: "Detect voice cloning in real-time calls", icon: navIcons.contactCenter },
          { label: "Agentic Workflows", href: "/#solutions-ai-agent", description: "Protect AI agents from manipulation", icon: navIcons.agentWorkflow },
        ],
      },
      {
        title: "BY INDUSTRY",
        items: [
          { label: "Financial Services", href: "/#industry-financial", description: "Banks, insurance & fintech", icon: navIcons.finance },
          { label: "Human Resources", href: "/#industry-hr", description: "Recruiting & hiring platforms", icon: navIcons.hr },
          { label: "Government & Legal", href: "/#industry-government", description: "Compliance & public sector", icon: navIcons.government },
          { label: "Healthcare", href: "/#industry-healthcare", description: "Telehealth identity verification", icon: navIcons.healthcare },
          { label: "Media & Entertainment", href: "/#industry-media", description: "Content authenticity verification", icon: navIcons.media },
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
      { label: "Research", href: "/research", description: "Publications, benchmarks, and technical reports", icon: navIcons.research },
      { label: "Newsletter", href: "/newsletter", description: "Weekly AI security insights", icon: navIcons.newsletter },
      { label: "About Us", href: "/about", description: "Our mission and milestones", icon: navIcons.about },
      { label: "Security & Compliance", href: "https://reality-inc.trust.site/", external: true, description: "SOC 2 Type II and GDPR", icon: navIcons.security },
      { label: "Contact", href: "/contact", description: "Get in touch with our team", icon: navIcons.contact },
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

  // Escape key — close dropdown or mobile menu
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeDropdown) setActiveDropdown(null);
        if (mobileOpen) { setMobileOpen(false); setMobileExpanded(null); }
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [activeDropdown, mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setActiveDropdown(null);
  }, [pathname]);

  const showAnnouncement = isLandingPage && !announcementDismissed;
  const announcementHeight = showAnnouncement && !scrolled ? 36 : 0;

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
        {child.icon && <span className="text-white mt-0.5 flex-shrink-0">{child.icon}</span>}
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
        <div className={`fixed top-0 left-0 right-0 w-full bg-[#0021f3] text-center z-50 flex items-center justify-center transition-all duration-300 ${scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`} style={{ height: "36px" }}>
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
                className={`rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-black transition-all duration-300 hover:bg-gray-200 whitespace-nowrap ${
                  scrolled ? "w-auto opacity-100 ml-1" : "w-0 opacity-0 overflow-hidden px-0 ml-0 bg-transparent"
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
                className="rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-black transition hover:bg-gray-200"
                onClick={() => trackCTA("book_demo", "nav")}
              >
                Get a demo
              </Link>
            </div>
          </nav>

          {/* Mobile nav */}
          <nav className="flex md:hidden items-center justify-between px-4 py-3">
            <Link href="/" className="flex-shrink-0">
              <img src="/logo.svg" alt="ScamAI" className="h-7 w-auto" />
            </Link>
            {/* Unified rounded pill — Log in + CTA + Hamburger */}
            <div
              className="flex items-center gap-0.5 rounded-full px-1 py-1"
              style={{
                background: 'rgba(23, 24, 37, 0.75)',
                backdropFilter: 'blur(12px)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)',
              }}
            >
              <a
                href="https://app.scam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-3 py-1.5 text-[12px] font-medium text-white transition hover:bg-white/[0.06]"
                onClick={() => trackCTA("log_in", "nav_mobile")}
              >
                Log in
              </a>
              <Link
                href="/demo"
                className="rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-black transition hover:bg-gray-200"
                onClick={() => trackCTA("book_demo", "nav_mobile")}
              >
                Get a demo
              </Link>
              <button
                className="flex h-7 w-7 items-center justify-center rounded-full text-white transition hover:bg-white/[0.06]"
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
                  <img src="/logo.svg" alt="ScamAI" className="h-7 w-auto" />
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

              <div className="border-t border-gray-800 px-6 py-4 space-y-3">
                <div className="flex flex-col gap-3">
                  <Link
                    href="/demo"
                    className="block w-full px-6 py-3 text-center text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition"
                    onClick={() => { setMobileOpen(false); trackCTA("book_demo", "nav_mobile_menu"); }}
                  >
                    Get a demo
                  </Link>
                  <a
                    href="https://app.scam.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 text-center text-sm font-semibold text-white bg-transparent border border-gray-700 rounded-full hover:bg-gray-800 transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    Log in
                  </a>
                </div>
                <button
                  onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
                  className="flex w-full items-center gap-3 rounded-xl border border-gray-800 bg-white/[0.03] px-4 py-3 text-sm text-gray-500"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search...
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Desktop dropdown panel — contained card */}
        <div
          className="hidden md:flex justify-center"
          style={{ position: "fixed", left: 0, right: 0, top: `${announcementHeight + 56}px`, zIndex: 30, pointerEvents: "none" }}
        >
          <div
            ref={dropdownPanelRef}
            className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
              activeDropdown
                ? "ease-out pointer-events-auto border-white/[0.08] opacity-100 scale-100"
                : "ease-in pointer-events-none border-transparent opacity-0 scale-[0.97]"
            }`}
            style={{
              background: "#151518f2",
              backdropFilter: "blur(20px)",
              boxShadow: activeDropdown
                ? "0 8px 32px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.06)"
                : "none",
              maxHeight: activeDropdown ? "500px" : "0",
              paddingTop: activeDropdown ? "24px" : "0",
              paddingBottom: activeDropdown ? "24px" : "0",
              marginTop: "8px",
            }}
            onMouseEnter={() => { if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current); }}
            onMouseLeave={closeDropdown}
          >
            <div className={`px-6 transition-opacity duration-200 ${
              activeDropdown ? "opacity-100" : "opacity-0"
            }`}>
            {/* Categorized dropdowns (Product, Solutions) */}
            {activeDropdown && (() => {
              const activeItem = navItems.find((item) => item.dropdownKey === activeDropdown);
              if (!activeItem?.productCategories) return null;
              const catCount = activeItem.productCategories.length;
              return (
                <div className={`grid gap-0 divide-x divide-white/[0.06] ${catCount === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                  {activeItem.productCategories.map((cat) => (
                    <div key={cat.title} className="px-4 first:pl-0 last:pr-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500 px-3 mb-2">
                        {cat.title}
                      </p>
                      <div className="space-y-0">
                        {cat.items.map((child) => {
                          const content = (
                            <div className="flex items-center gap-2.5 group">
                              {child.icon && (
                                <span className="text-white flex-shrink-0">
                                  {child.icon}
                                </span>
                              )}
                              <span className="text-[13px] font-medium text-gray-300 group-hover:text-white transition-colors truncate">{child.label}</span>
                              {child.coming && (
                                <span className="flex-shrink-0 rounded bg-white/[0.06] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                                  Coming Soon
                                </span>
                              )}
                            </div>
                          );

                          if (child.external || child.href.includes("#")) {
                            return (
                              <a
                                key={child.label}
                                href={child.href}
                                {...(child.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                className="block rounded-md px-3 py-2 hover:bg-white/[0.04] transition-colors duration-150"
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
                              className="block rounded-md px-3 py-2 hover:bg-white/[0.04] transition-colors duration-150"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {content}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}

            {/* Resources dropdown — featured card + link list */}
            {activeDropdown === "resources" && (() => {
              const resourceItem = navItems.find((item) => item.dropdownKey === "resources");
              if (!resourceItem?.children) return null;
              return (
                <div className="grid grid-cols-[240px_1fr] gap-0 divide-x divide-white/[0.06]">
                  {/* Featured card */}
                  <div className="pr-5">
                    <Link
                      href="/newsletter"
                      className="block group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.12] p-5 h-full transition-all duration-200 group-hover:border-white/[0.25]">
                        <span className="inline-block rounded bg-white/[0.1] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/70 mb-4">
                          Newsletter
                        </span>
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.08] border border-white/[0.12] text-white mb-4">
                          {navIcons.newsletter}
                        </div>
                        <h3 className="text-sm font-semibold text-white leading-snug">
                          Weekly AI security & deepfake insights
                        </h3>
                        <p className="text-[11px] text-gray-400 mt-1.5 leading-relaxed">
                          Stay ahead of emerging threats and detection breakthroughs.
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* Link list */}
                  <div className="pl-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500 px-3 mb-2">
                      Resources
                    </p>
                    <div className="space-y-0">
                      {resourceItem.children.map((child) => {
                        const content = (
                          <div className="flex items-center gap-2.5 group">
                            {child.icon && (
                              <span className="text-white flex-shrink-0">
                                {child.icon}
                              </span>
                            )}
                            <span className="text-[13px] font-medium text-gray-300 group-hover:text-white transition-colors flex-1">{child.label}</span>
                            <svg className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        );

                        if (child.external) {
                          return (
                            <a
                              key={child.label}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-md px-3 py-2 hover:bg-white/[0.04] transition-colors duration-150"
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
                            className="block rounded-md px-3 py-2 hover:bg-white/[0.04] transition-colors duration-150"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {content}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()}
            </div>
          </div>
        </div>
      </div>
      <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
