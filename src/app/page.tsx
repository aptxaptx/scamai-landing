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
    "Company",
  ];

  const secondaryLinks = ["Overview", "Models", "API", "Pricing", "Docs"];

  return (
    <div className="grid grid-cols-[220px_1fr] md:grid-cols-[240px_1fr] gap-6 min-h-dvh p-5">
      {/* Sidebar - Main menu */}
      <aside className="sticky top-4 h-[calc(100dvh-32px)] p-2 z-10">
        <div className="flex items-center gap-2 px-2 pb-4">
          <span className="h-6 w-6 rounded-md bg-[conic-gradient(from_180deg,_#00f5d4,_#5eead4,_#93c5fd,_#f0abfc,_#e879f9,_#00f5d4)]" />
          <span className="font-bold tracking-tight text-white">ScaMai</span>
        </div>
        <nav className="mt-6 flex flex-col gap-3 px-2" aria-label="Primary">
          {mainLinks.map((item) => (
            <a key={item} href="#" className="text-white/90 hover:text-white">
              {item}
            </a>
          ))}
        </nav>
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
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold"
        >
          Log in
        </a>
      </header>

      {/* Main */}
      <main className="pt-16 md:pt-20 lg:pt-24 pr-4 md:pr-0 col-start-2 row-start-1">
        {/* Secondary horizontal menu */}
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

        <section className="hero-wrapper relative" aria-labelledby="hero-title">
          <button
            className="pill"
            onClick={(e) =>
              e.currentTarget.parentElement!.classList.add("hidden")
            }
          >
            Close
          </button>
          <div className="hero-gradient" aria-hidden="true" />
          <div className="relative z-10 grid place-items-center gap-6 text-center p-[min(7vw,80px)]">
            <h1
              id="hero-title"
              className="text-[clamp(36px,6.5vw,64px)] leading-[1.06] tracking-[-0.02em] m-0"
            >
              Introducing GPT-5
            </h1>
            <p className="max-w-[850px] text-[clamp(16px,1.6vw,20px)] leading-[1.6] text-white/90 m-0">
              Our smartest, fastest, most useful model yet, with built-in
              thinking that puts expert-level intelligence in everyone&apos;s
              hands.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold"
            >
              Learn more
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
