"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type SiteShellProps = {
  children: React.ReactNode;
  secondaryLinks?: string[];
  hideTopbar?: boolean;
};

export default function SiteShell({ children, secondaryLinks = [], hideTopbar = false }: SiteShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const initialSubmenu: "none" | "business" | "individuals" | "research" = pathname?.startsWith("/business")
    ? "business"
    : pathname?.startsWith("/individuals")
    ? "individuals"
    : pathname?.startsWith("/research")
    ? "research"
    : "none";
  const [submenu, setSubmenu] = useState<"none" | "business" | "individuals" | "research">(initialSubmenu);
  const isIndividualsPage = !!pathname && pathname.startsWith("/individuals");

  useEffect(() => {
    if (!pathname) return;
    if (pathname.startsWith("/business")) setSubmenu("business");
    else if (pathname.startsWith("/individuals")) setSubmenu("individuals");
    else if (pathname.startsWith("/research")) setSubmenu("research");
    else setSubmenu("none");
  }, [pathname]);

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
    "API Pricing",
    "Contact Sales",
  ];

  const researchLinks = [
    "AI-Generated Media",
    "Deepfakes",
    "Voice Clones",
    "Scam Text Detection",
    "Large Scale Database",
  ];

  const individualsLinks = [
    { label: "Mobile App", href: "/individuals?s=mobile" },
    { label: "Browser Plugin", href: "/individuals?s=plugin" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 min-h-dvh p-5">
      {/* Sidebar */}
      <aside className="p-2 z-10 flex flex-col md:fixed md:top-4 md:left-4 md:w-[240px] md:h-[calc(100dvh-32px)]">
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
                        className="group text-left w-full rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
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
                  if (item === "For Individuals") {
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSubmenu("individuals")}
                        className="group text-left w-full rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
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
                  if (item === "Research") {
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSubmenu("research")}
                        className="group text-left w-full rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
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
                <button
                  type="button"
                  onClick={() => {
                    setSubmenu("none");
                    router.push("/");
                  }}
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-white/10"
                >
                  <span aria-hidden>←</span>
                  <span>Home</span>
                </button>
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

            {/* Individuals submenu panel */}
            <div
              className={`absolute inset-0 transition-transform duration-300 ease-out ${
                submenu === "individuals" ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="px-2 pb-4 flex items-center gap-2 text-white/70">
                <button
                  type="button"
                  onClick={() => {
                    setSubmenu("none");
                    router.push("/");
                  }}
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-white/10"
                >
                  <span aria-hidden>←</span>
                  <span>Home</span>
                </button>
              </div>
              <nav className="flex flex-col gap-2 px-2" aria-label="For Individuals">
                {individualsLinks.map((item) => {
                  const href = isIndividualsPage ? `?${item.href.split("?")[1]}` : item.href;
                  const handleClick: React.MouseEventHandler<HTMLAnchorElement> | undefined = isIndividualsPage
                    ? (e) => {
                        e.preventDefault();
                        router.replace(href, { scroll: false });
                      }
                    : undefined;
                  return (
                    <a
                      key={item.label}
                      href={href}
                      onClick={handleClick}
                      className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Research submenu panel */}
            <div
              className={`absolute inset-0 transition-transform duration-300 ease-out ${
                submenu === "research" ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="px-2 pb-4 flex items-center gap-2 text-white/70">
                <button
                  type="button"
                  onClick={() => {
                    setSubmenu("none");
                    router.push("/");
                  }}
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-white/10"
                >
                  <span aria-hidden>←</span>
                  <span>Home</span>
                </button>
              </div>
              <nav className="flex flex-col gap-2 px-2" aria-label="Research">
                {researchLinks.map((item) => (
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
          </div>
        </div>
      </aside>

      {/* Topbar */}
      {!hideTopbar && (
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
      )}

      {/* Main */}
      <main className={`${hideTopbar ? "pt-4 md:pt-6 lg:pt-8" : "pt-16 md:pt-20 lg:pt-24"} pr-4 md:pr-0 md:col-start-2 md:row-start-1 md:ml-[268px]`}>
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

