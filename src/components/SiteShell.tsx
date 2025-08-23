"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import DesktopSidebar from "./DesktopSidebar";
import SiteFooter from "./SiteFooter";

// --- Icon Components ---

// Icon for when the sidebar is VISIBLE (prompts user to HIDE)
const IconSidebarHide = (props: React.SVGProps<SVGSVGElement>) => (
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
    {/* Outer container with rounded corners */}
    <rect x="3" y="3" width="18" height="18" rx="3" />
    {/* Vertical line representing the sidebar's edge */}
    <path d="M9 3v18" />
    {/* Left-pointing chevron indicating the "collapse" action */}
    <path d="M15 9l-3 3 3 3" />
  </svg>
);

// Icon for when the sidebar is HIDDEN (prompts user to SHOW)
const IconSidebarShow = (props: React.SVGProps<SVGSVGElement>) => (
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
    {/* Outer container with rounded corners */}
    <rect x="3" y="3" width="18" height="18" rx="3" />
    {/* Vertical line representing the sidebar's edge (consistent position) */}
    <path d="M9 3v18" />
    {/* Right-pointing chevron indicating the "expand" action */}
    <path d="M12 9l3 3-3 3" />
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
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div
      className={`min-h-dvh px-5 md:px-0 pt-2 pb-5 transition-all duration-300 ${
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

        {/* --- REFINED Sidebar Toggle Button --- */}
        <button
          onClick={handleToggleSidebar}
          className="flex items-center justify-center w-8 h-8 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label={isSidebarVisible ? "Hide sidebar" : "Show sidebar"}
          title={isSidebarVisible ? "Hide sidebar" : "Show sidebar"}
        >
          {isSidebarVisible ? <IconSidebarHide /> : <IconSidebarShow />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Desktop Sidebar */}
      <DesktopSidebar
        isVisible={isSidebarVisible}
        onToggleVisibility={handleToggleSidebar}
      />

      {/* Main Content */}
      <main className="pr-4 md:pr-0">
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