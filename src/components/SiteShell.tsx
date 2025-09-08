"use client";

import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import DesktopSidebar from "./DesktopSidebar";
import SiteFooter from "./SiteFooter";
import { useSidebar } from "@/contexts/SidebarContext";

// --- Icon Components ---

// Simple menu icon for both states
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

// --- Main Component ---

type SiteShellProps = {
  children: React.ReactNode;
  secondaryLinks?: string[];
};

export default function SiteShell({
  children,
  secondaryLinks = [],
}: SiteShellProps) {
  const { isSidebarVisible, toggleSidebar } = useSidebar();

  return (
    <div
      className={`min-h-dvh px-0 md:px-0 pb-5 transition-all duration-300 ${
        isSidebarVisible ? "md:pl-[200px]" : "md:pl-0"
      }`}
    >
      {/* Top-left Menu button; changes to HOME when menu is open (visible on all sizes) */}
      <div className="fixed top-4 left-4 z-[10000] md:left-6 flex items-center gap-3">
        <button
          onClick={() => {
            if (!isSidebarVisible) {
              toggleSidebar();
            } else {
              window.location.href = "/";
            }
          }}
          className="inline-flex items-center justify-center h-8 px-3 border border-white/20 bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
          aria-label={isSidebarVisible ? "Go home" : "Open menu"}
          title={isSidebarVisible ? "Home" : "Menu"}
        >
          {!isSidebarVisible ? (
            <span className="inline-flex items-center gap-1">
              <MenuIcon />
              <span>MENU</span>
            </span>
          ) : (
            <span>HOME</span>
          )}
        </button>
      </div>

      {/* Login and Contact Sales Buttons - desktop only */}
      <div className=" md:flex fixed top-4 right-4 z-[9999] gap-3">
        <a
          href="https://app.scam.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 text-white hover:bg-black/40 transition-colors text-xs font-bold border border-white shadow-lg"
          style={{
            borderRadius: "0",
            zIndex: 9999,
          }}
        >
          LOGIN
        </a>
        <a
          href="https://cal.com/scamai/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-gray-100 transition-colors text-xs font-bold border border-white shadow-lg"
          style={{
            borderRadius: "0",
            zIndex: 9999,
          }}
        >
          CONTACT SALES
        </a>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Desktop Sidebar */}
      <DesktopSidebar isVisible={isSidebarVisible} />

      {/* Main Content */}
      <main className="pr-0 md:pr-0 overflow-x-hidden">
        {children}

        {/* Secondary Links */}
        {secondaryLinks.length > 0 && (
          <nav
            className="my-6 flex items-center gap-6 text-sm text-white/80"
            aria-label="Secondary"
          >
            {secondaryLinks.map((item) => (
              <a key={item} href="#" className="hover:text-white">
                {item}
              </a>
            ))}
          </nav>
        )}
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
