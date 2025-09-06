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
      className={`min-h-dvh px-5 md:px-0 pb-5 transition-all duration-300 ${
        isSidebarVisible ? "md:pl-[200px]" : "md:pl-0"
      }`}
    >
      {/* Logo and Sidebar Toggle - Top Left of Website */}
      <div className="fixed top-4 left-4 z-40 md:left-6 flex items-center gap-3">
        <Link href="/" className="block">
          <Image
            src="/scamailogo.png"
            alt="Scam AI logo"
            width={200}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        {/* --- Simple Menu Toggle Button --- */}
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center w-8 h-8 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label={isSidebarVisible ? "Hide sidebar" : "Show sidebar"}
          title={isSidebarVisible ? "Hide sidebar" : "Show sidebar"}
        >
          <MenuIcon />
        </button>
      </div>

      {/* Login Button - Desktop Only (Mobile users use hamburger menu) */}
      <div className="hidden md:block fixed top-4 right-4 z-[100] md:right-6">
        <a
          href="https://app.scam.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/20 text-white hover:bg-white/30 transition-colors text-sm font-medium border-2 border-white/40 shadow-lg"
        >
          Login
        </a>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Desktop Sidebar */}
      <DesktopSidebar isVisible={isSidebarVisible} />

      {/* Main Content */}
      <main className="pr-4 md:pr-0 overflow-x-hidden">
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
