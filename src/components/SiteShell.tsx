"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import DesktopSidebar from "./DesktopSidebar";
import SiteFooter from "./SiteFooter";

type SiteShellProps = {
  children: React.ReactNode;
  secondaryLinks?: string[];
};

export default function SiteShell({ 
  children, 
  secondaryLinks = [] 
}: SiteShellProps) {
  return (
    <div className="min-h-dvh px-5 md:px-0 pt-2 pb-5 md:pl-[200px]">
      {/* Logo - Top Left of Website */}
      <div className="fixed top-4 left-4 z-40 md:left-6">
        <Link href="/" className="block">
          <img src="/scamailogo.png" alt="Scam AI logo" className="h-8 w-auto" />
        </Link>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Desktop Sidebar */}
      <DesktopSidebar />



      {/* Main Content */}
      <main className="pr-4 md:pr-0">
        {children}

        {/* Secondary Links */}
        {secondaryLinks.length > 0 && (
          <nav className="my-6 flex items-center gap-6 text-sm text-white/80" aria-label="Secondary">
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