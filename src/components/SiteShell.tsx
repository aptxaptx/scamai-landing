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
  const initialSubmenu: "none" | "business" | "individuals" | "research" | "stories" | "company" = pathname?.startsWith("/business")
    ? "business"
    : pathname?.startsWith("/individuals")
    ? "individuals"
    : pathname?.startsWith("/research")
    ? "research"
    : "none";
  const [submenu, setSubmenu] = useState<"none" | "business" | "individuals" | "research" | "stories" | "company">(initialSubmenu);
  const isIndividualsPage = !!pathname && pathname.startsWith("/individuals");

  useEffect(() => {
    if (!pathname) return;
    if (pathname.startsWith("/business")) setSubmenu("business");
    else if (pathname.startsWith("/individuals")) setSubmenu("individuals");
    else if (pathname.startsWith("/research")) setSubmenu("research");
    else if (pathname.startsWith("/company")) setSubmenu("company");
    else setSubmenu("none");
  }, [pathname]);

  const mainLinks = [
    "Home",
    "For Business",
    "For Individuals",
    "Research",
    "Stories",
    "Company",
  ];

  const businessLinks = [
    "Business Use Cases",
    "API Platform",
    "API Documentation",
    "Contact Sales",
  ];

  const researchLinks = [
    "Detection Models",
    "GenAI Images/Videos",
    "Deepfakes/Faceswap",
    "Voice Cloning",
    "Messages",
    "Link/QR Code",
    "Research",
    "Publication",
    "ScamDB",
  ];

  const storiesLinks = [
    "News",
    "Type of Scams",
    "Scam Trends",
  ];

  const companyLinks = ["About Us", "People", "Partnership", "Investors"];

  const individualsLinks = [
    { label: "Mobile App", href: "/individuals?s=mobile" },
    { label: "Browser Plugin", href: "/individuals?s=plugin" },
  ];

  return (
    <div className="min-h-dvh px-5 md:px-0 pt-2 pb-5 md:pl-[240px]">
      {/* Sidebar */}
      <aside className="p-2 z-10 flex flex-col md:fixed md:top-8 md:left-0 md:w-[240px] md:h-[calc(100dvh-64px)] md:overflow-y-auto">
        <Link href="/" className="flex items-center gap-2 px-2 pb-4">
          {/* SVG logo */}
          <img src="/logo.svg" alt="Reality Inc. logo" className="h-8 w-8" />
          <span className="text-lg md:text-xl tracking-tight text-white">Reality Inc.</span>
        </Link>
        <div className="md:flex-1 grid content-start overflow-hidden">
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
                        onClick={() => router.push("/business?s=usecase")}
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
                        onClick={() => router.push("/individuals?s=mobile")}
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
                        onClick={() => router.push("/research")}
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
                  if (item === "Stories") {
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSubmenu(submenu === "stories" ? "none" : "stories")}
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
                  if (item === "Company") {
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => router.push("/company/about")}
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
              className={`absolute inset-0 transition-transform duration-300 ease-out  ${
                submenu === "business" ? "translate-x-0" : "translate-x-full"
              }`}
            
            >
              <div className="px-2 pb-2 md:pb-4 flex items-center gap-2 text-white/70">
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
                {businessLinks.map((item) => {
                  const href =
                    item === "Business Use Cases"
                      ? "/business?s=usecase"
                      : item === "API Platform"
                      ? "/api-platform"
                      : item === "API Documentation"
                      ? "https://docu.scam.ai"
                      : item === "Contact Sales"
                      ? "/demo"
                      : "/business";
                  return (
                    <Link
                      key={item}
                      href={href}
                      target={item === "API Documentation" ? "_blank" : undefined}
                      rel={item === "API Documentation" ? "noopener noreferrer" : undefined}
                      className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Individuals submenu panel */}
            <div
              className={`absolute inset-0 transition-transform duration-300 ease-out  ${
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
              className={`absolute inset-0 transition-transform duration-300 ease-out  ${
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
              <nav className="flex flex-col gap-1 md:gap-2 px-2 overflow-y-auto max-h-[calc(100vh-200px)]" aria-label="Research">
                {researchLinks.map((item) => {
                  const href = item === "Detection Models"
                    ? "#"
                    : item === "GenAI Images/Videos" 
                    ? "/research/ai-generated-media"
                    : item === "Deepfakes/Faceswap"
                    ? "/research/deepfakes"
                    : item === "Voice Cloning"
                    ? "/research/voice-clones"
                    : item === "Messages"
                    ? "/research/scam-text-detection"
                    : item === "Link/QR Code"
                    ? "/research/link-qr-code"
                    : item === "Publication"
                    ? "/research/publication"
                    : item === "ScamDB"
                    ? "/research/large-scale-database"
                    : "#";
                  
                  return item === "Detection Models" || item === "Research" ? (
                    <div
                      key={item}
                      className={`block rounded-xl px-3 py-1.5 text-xs md:text-sm font-medium text-white/50 tracking-wide ${item === "Research" ? "mt-3 md:mt-4" : ""}`}
                    >
                      {item}
                    </div>
                  ) : item === "GenAI Images/Videos" || item === "Deepfakes/Faceswap" || item === "Voice Cloning" || item === "Messages" || item === "Link/QR Code" || item === "Publication" || item === "ScamDB" ? (
                    <Link
                      key={item}
                      href={href}
                      className="block rounded-xl px-3 py-2 md:py-3 text-[15px] md:text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors ml-3 md:ml-4"
                    >
                      {item}
                    </Link>
                  ) : (
                    <a
                      key={item}
                      href={href}
                      className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Stories submenu panel */}
            <div
              className={`absolute inset-0 transition-transform duration-300 ease-out  ${
                submenu === "stories" ? "translate-x-0" : "translate-x-full"
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
              <nav className="flex flex-col gap-2 px-2" aria-label="Stories">
                {storiesLinks.map((item) => {
                  const href =
                    item === "News" ? "/stories/news" :
                    item === "Type of Scams" ? "/stories/type-of-scams" :
                    item === "Scam Trends" ? "/stories/scam-trends" :
                    "#";
                  
                  return (
                    <a
                      key={item}
                      href={href}
                      className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Company submenu panel */}
            <div
              className={`absolute inset-0 transition-transform duration-300 ease-out  ${
                submenu === "company" ? "translate-x-0" : "translate-x-full"
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
              <nav className="flex flex-col gap-2 px-2" aria-label="Company">
                {companyLinks.map((item) => {
                  const href =
                    item === "About Us" ? "/company/about" :
                    item === "People" ? "/company/people" :
                    item === "Partnership" ? "/company/partnership" :
                    item === "Investors" ? "/company/investors" :
                    "#";
                  return (
                    <a
                      key={item}
                      href={href}
                      className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </aside>

      {/* Topbar */}
      {!hideTopbar && (
        <header className="fixed right-5 top-2 z-30 flex items-center gap-2">
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
      <main className={`${hideTopbar ? "pt-4 md:pt-6 lg:pt-8" : "pt-12 md:pt-16 lg:pt-20"} pr-4 md:pr-0`}>
        {children}

        {secondaryLinks.length > 0 ? (
          <nav className="my-6 flex items-center gap-6 text-sm text-white/80" aria-label="Secondary">
            {secondaryLinks.map((item) => (
              <a key={item} href="#" className="hover:text-white">
                {item}
              </a>
            ))}
          </nav>
        ) : null}
              </main>

        {/* Footer */}
        <footer className="mt-20">
          <div className="w-full px-5 md:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* For Business */}
              <div>
                <h3 className="text-white font-semibold mb-4">For Business</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/business?s=usecase" className="text-white/70 hover:text-white text-sm transition-colors">
                      Business Use Cases
                    </Link>
                  </li>
                  <li>
                    <Link href="/api-platform" className="text-white/70 hover:text-white text-sm transition-colors">
                      API Platform
                    </Link>
                  </li>
                  <li>
                    <a href="https://docu.scam.ai" className="text-white/70 hover:text-white text-sm transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <Link href="/demo" className="text-white/70 hover:text-white text-sm transition-colors">
                      Contact Sales
                    </Link>
                  </li>
                </ul>
              </div>

              {/* For Individuals */}
              <div>
                <h3 className="text-white font-semibold mb-4">For Individuals</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/individuals?s=mobile" className="text-white/70 hover:text-white text-sm transition-colors">
                      Mobile App
                    </Link>
                  </li>
                  <li>
                    <Link href="/individuals?s=plugin" className="text-white/70 hover:text-white text-sm transition-colors">
                      Browser Plugin
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Research */}
              <div>
                <h3 className="text-white font-semibold mb-4">Research</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/research/ai-generated-media" className="text-white/70 hover:text-white text-sm transition-colors">
                      GenAI Images/Videos
                    </Link>
                  </li>
                  <li>
                    <Link href="/research/deepfakes" className="text-white/70 hover:text-white text-sm transition-colors">
                      Deepfakes/Faceswap
                    </Link>
                  </li>
                  <li>
                    <Link href="/research/voice-clones" className="text-white/70 hover:text-white text-sm transition-colors">
                      Voice Cloning
                    </Link>
                  </li>
                  <li>
                    <Link href="/research/scam-text-detection" className="text-white/70 hover:text-white text-sm transition-colors">
                      Messages
                    </Link>
                  </li>
                  <li>
                    <Link href="/research/link-qr-code" className="text-white/70 hover:text-white text-sm transition-colors">
                      Link/QR Code
                    </Link>
                  </li>

                  <li>
                    <Link href="/research/publication" className="text-white/70 hover:text-white text-sm transition-colors">
                      Publication
                    </Link>
                  </li>
                  <li>
                    <Link href="/research/large-scale-database" className="text-white/70 hover:text-white text-sm transition-colors">
                      ScamDB
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Stories */}
              <div>
                <h3 className="text-white font-semibold mb-4">Stories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/stories/news" className="text-white/70 hover:text-white text-sm transition-colors">
                      News
                    </Link>
                  </li>
                  <li>
                    <Link href="/stories/type-of-scams" className="text-white/70 hover:text-white text-sm transition-colors">
                      Type of Scams
                    </Link>
                  </li>
                  <li>
                    <Link href="/stories/scam-trends" className="text-white/70 hover:text-white text-sm transition-colors">
                      Scam Trends
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/company/about" className="text-white/70 hover:text-white text-sm transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/people" className="text-white/70 hover:text-white text-sm transition-colors">
                      People
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/partnership" className="text-white/70 hover:text-white text-sm transition-colors">
                      Partnership
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/investors" className="text-white/70 hover:text-white text-sm transition-colors">
                      Investors
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-6 text-sm text-white/60">
                  <Link href="#" className="hover:text-white transition-colors">Stories</Link>
                  <Link href="/company/about" className="hover:text-white transition-colors">Company</Link>
                  <Link href="/demo" className="hover:text-white transition-colors">Get Demo</Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-white/40">
                  <Link href="#" className="hover:text-white transition-colors">Manage Cookies</Link>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                  <span>© 2025 Reality Inc. All rights reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}

