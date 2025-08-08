"use client";

import { useState } from "react";

export default function Home() {
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

  const secondaryLinks: string[] = [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 min-h-dvh p-5">
      {/* Sidebar - Main menu with in-place sliding submenu */}
      <aside className="p-2 z-10 flex flex-col md:sticky md:top-4 md:h-[calc(100dvh-32px)]">
        <div className="flex items-center gap-2 px-2 pb-4">
          <span className="h-6 w-6 rounded-md bg-[conic-gradient(from_180deg,_#00f5d4,_#5eead4,_#93c5fd,_#f0abfc,_#e879f9,_#00f5d4)]" />
          <span className="font-bold tracking-tight text-white">ScaMai</span>
        </div>
        <div className="md:flex-1 grid content-center overflow-hidden">
          {/* Sliding container limited to sidebar area */}
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
                  return (
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
                <button
                  type="button"
                  onClick={() => setSubmenu("none")}
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-white/10"
                >
                  <span aria-hidden>←</span>
                  <span>Home</span>
                </button>
              </div>
              <nav
                className="flex flex-col gap-2 px-2"
                aria-label="For Business"
              >
                {businessLinks.map((item) => (
                  <a
                    key={item}
                    href={item === "Business Use Case" ? "/business" : "#"}
                    className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item}
                  </a>
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
      <main className="pt-16 md:pt-20 lg:pt-24 pr-4 md:pr-0 md:col-start-2 md:row-start-1">
        <section className="relative overflow-hidden rounded-2xl border border-white/10 min-h-[52vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] grid place-items-center">
          <div className="hero-image-bg" aria-hidden="true" />
          <div className="hero-image-vignette" aria-hidden="true" />
          <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center">
            <h1 className="text-[clamp(32px,7vw,64px)] font-bold tracking-tight">
              Prevent Misuse of AI
            </h1>
            <p className="mt-4 text-white/85 text-[clamp(15px,2.2vw,20px)] max-w-2xl mx-auto">
              AI Models for Visual , Audio and Syntax Detection
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm"
              >
                Learn more
              </a>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-sm"
              >
                Demo
              </a>
            </div>
          </div>
        </section>

        {/* 3-card section */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Visual Detection",
              desc: "Spot AI-generated images, deepfakes, and manipulations with robustness checks.",
            },
            {
              title: "Audio Detection",
              desc: "Identify cloned voices and synthetic audio with signal-level analysis.",
            },
            {
              title: "Syntax Detection",
              desc: "Analyze linguistic patterns to flag AI-written or prompt-engineered text.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors overflow-hidden"
            >
              {card.title === "Visual Detection" && (
                <>
                  <div className="absolute inset-0 -z-10 bg-[url('/visual.webp')] bg-cover bg-left-top opacity-40" />
                  <div className="absolute inset-0 -z-10 bg-black/20" />
                </>
              )}
              <h3 className="text-lg font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-white/80">{card.desc}</p>
              <a
                href="#"
                className="mt-4 inline-flex text-sm font-semibold text-white/90 underline underline-offset-4"
              >
                Learn more
              </a>
            </article>
          ))}
        </section>

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
