"use client";

import { useState } from "react";
import Link from "next/link";

type SiteShellProps = {
  children: React.ReactNode;
  secondaryLinks?: string[];
};

export default function SiteShell({ children, secondaryLinks = [] }: SiteShellProps) {
  const [submenu, setSubmenu] = useState<"none" | "business">("none");

  const mainLinks = [
    "Home",
    "For Business",
    "For Individuals",
    "Research",
    "Safety",
    "Report Scam",
    "About Us",
  ];

  const businessLinks = [
    "Business Use Case",
    "AI-Generated Media",
    "Deepfakes",
    "Voice Clones",
    "API Pricing",
    "Contact Sales",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 min-h-dvh p-5">
      {/* Sidebar */}
      <aside className="p-2 z-10 flex flex-col md:sticky md:top-4 md:h-[calc(100dvh-32px)]">
        <Link href="/" className="flex items-center gap-2 px-2 pb-4">
          <span className="h-6 w-6 rounded-md bg-[conic-gradient(from_180deg,_#00f5d4,_#5eead4,_#93c5fd,_#f0abfc,_#e879f9,_#00f5d4)]" />
          <span className="font-bold tracking-tight text-white">ScaMai</span>
        </Link>
        <div className="md:flex-1 grid content-center overflow-hidden">
          <div className="relative">
            {/* Primary panel */}
            <div
              className={`transition-transform duration-300 ease-out ${
                submenu === "none" ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <nav className="flex flex-col gap-2 px-2" aria-label="Primary">
                {mainLinks.map((item) => {
                  if (item === "For Business") {
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSubmenu("business")}
                        className="group text-left block w-full rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                      >
                        <span>{item}</span>
                        <span
                          aria-hidden
                          className="text-white/60 opacity-0 translate-x-1 transition-all group-hover:opacity-60 group-hover:translate-x-0"
                        >
                          →
                        </span>
                      </button>
                    );
                  }
                  return item === "Home" ? (
                    <Link
                      key={item}
                      href="/"
                      className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </Link>
                  ) : (
                    <a
                      key={item}
                      href="#"
                      className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Business submenu panel */}
            <div
              className={`absolute inset-0 transition-transform duration-300 ease-out ${
                submenu === "business" ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="px-2 pb-4 flex items-center gap-2 text-white/70">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-white/10"
                >
                  <span aria-hidden>←</span>
                  <span>Home</span>
                </Link>
              </div>
              <nav className="flex flex-col gap-2 px-2" aria-label="For Business">
                {businessLinks.map((item) => (
                  item === "Business Use Case" ? (
                    <Link
                      key={item}
                      href="/business"
                      className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </Link>
                  ) : (
                    <a
                      key={item}
                      href="#"
                      className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </a>
                  )
                ))}
              </nav>
            </div>
          </div>
        </div>
      </aside>

      {/* Topbar */}
      <header className="fixed right-5 top-4 z-30 flex items-center gap-2">
        <button
          aria-label="Search"
          className="h-9 w-9 rounded-xl grid place-items-center bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <a href="/demo" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold">
          Demo
        </a>
      </header>

      {/* Main */}
      <main className="pt-16 md:pt-20 lg:pt-24 pr-4 md:pr-0 md:col-start-2 md:row-start-1">
        {children}

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
    </div>
  );
}

