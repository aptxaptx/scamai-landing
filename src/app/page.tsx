"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen] = useState(false);

  const mainLinks = [
    "Home",
    "For Business",
    "For Individuals",
    "Research",
    "Safety",
    "Report Scam",
    "About Us",
  ];

  const secondaryLinks: string[] = [];

  return (
    <div className="grid grid-cols-[220px_1fr] md:grid-cols-[240px_1fr] gap-6 min-h-dvh p-5">
      {/* Sidebar - Main menu */}
      <aside className="sticky top-4 h-[calc(100dvh-32px)] p-2 z-10 flex flex-col">
        <div className="flex items-center gap-2 px-2 pb-4">
          <span className="h-6 w-6 rounded-md bg-[conic-gradient(from_180deg,_#00f5d4,_#5eead4,_#93c5fd,_#f0abfc,_#e879f9,_#00f5d4)]" />
          <span className="font-bold tracking-tight text-white">ScaMai</span>
        </div>
        <div className="flex-1 grid content-center">
          <nav className="flex flex-col gap-2 px-2" aria-label="Primary">
            {mainLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Topbar */}
      <header className="fixed right-5 top-4 z-30 flex items-center gap-2">
        <button
          aria-label="Search"
          className="h-9 w-9 rounded-xl grid place-items-center bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21 21l-4.35-4.35"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle
              cx="11"
              cy="11"
              r="6.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
        <a
          href="/demo"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold"
        >
          Demo
        </a>
      </header>

      {/* Main */}
      <main className="pt-16 md:pt-20 lg:pt-24 pr-4 md:pr-0 col-start-2 row-start-1">
        {/* Secondary horizontal menu (currently none) */}
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
    </div>
  );
}
