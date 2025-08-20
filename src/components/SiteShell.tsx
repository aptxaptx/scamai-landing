"use client";

import MobileNav from "./MobileNav";
import DesktopSidebar from "./DesktopSidebar";
import SiteFooter from "./SiteFooter";

type SiteShellProps = {
  children: React.ReactNode;
  secondaryLinks?: string[];
  hideTopbar?: boolean;
};

export default function SiteShell({ 
  children, 
  secondaryLinks = [], 
  hideTopbar = false 
}: SiteShellProps) {
  return (
    <div className="min-h-dvh px-5 md:px-0 pt-2 pb-5 md:pl-[240px]">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Desktop Sidebar */}
      <DesktopSidebar />

      {/* Topbar */}
      {!hideTopbar && (
        <header className="fixed right-5 top-2 md:top-[40px] z-30 flex items-center gap-2">
          <a href="/demo" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold">
            Demo
          </a>
        </header>
      )}

      {/* Main Content */}
      <main className={`${
        hideTopbar ? "pt-20 md:pt-6 lg:pt-8" : "pt-32 md:pt-16 lg:pt-20"
      } pr-4 md:pr-0`}>
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