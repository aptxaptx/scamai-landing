"use client";

import Header from "./Header";
import SiteFooter from "./SiteFooter";

// --- Main Component ---

type SiteShellProps = {
  children: React.ReactNode;
  secondaryLinks?: string[];
};

export default function SiteShell({
  children,
  secondaryLinks = [],
}: SiteShellProps) {
  return (
    <div className="min-h-dvh">
      {/* Header Navigation */}
      <Header />

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
