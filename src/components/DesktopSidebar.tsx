"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type SubmenuType = "none" | "business" | "individuals" | "research" | "stories" | "company";

export default function DesktopSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  
  const initialSubmenu: SubmenuType = pathname?.startsWith("/business")
    ? "business"
    : pathname?.startsWith("/individuals")
    ? "individuals"
    : pathname?.startsWith("/research")
    ? "research"
    : "none";
    
  const [submenu, setSubmenu] = useState<SubmenuType>(initialSubmenu);
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
    "GenAI Media Detection",
    "Deepfakes (Faceswap)",
    "Voice Cloning",
    "Messages",
    "Link & QR Code",
    "Research",
    "ScamDB",
    "Publication",
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
    <aside 
      className="p-2 z-10 fixed left-0 w-[240px] top-8 h-[calc(100dvh-64px)] overflow-y-auto flex flex-col"
      data-desktop-sidebar
    >
      <Link href="/" className="flex items-center gap-2 px-2 pb-4">
        <img src="/scamailogo.png" alt="Scam AI logo" className="h-8 w-auto" />
      </Link>
      
      <div className="flex-1 grid content-center -mt-2 overflow-hidden">
        <div className="relative min-w-[280px] md:min-w-0">
          {/* Primary panel */}
          <div className={`transition-transform duration-300 ease-out ${
            submenu === "none" ? "translate-x-0" : "-translate-x-full"
          }`}>
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
          <div className={`absolute inset-0 min-w-[280px] md:min-w-[280px] md:min-w-0 transition-transform duration-300 ease-out ${
            submenu === "business" ? "translate-x-0" : "translate-x-full"
          }`}>
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
          <div className={`absolute inset-0 min-w-[280px] md:min-w-0 transition-transform duration-300 ease-out ${
            submenu === "individuals" ? "translate-x-0" : "translate-x-full"
          }`}>
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
          <div className={`absolute inset-0 min-w-[280px] md:min-w-0 transition-transform duration-300 ease-out ${
            submenu === "research" ? "translate-x-0" : "translate-x-full"
          }`}>
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
            <nav className="flex flex-col gap-2 px-2 overflow-y-auto max-h-none" aria-label="Research">
              {researchLinks.map((item) => {
                const href = item === "Detection Models"
                  ? "#"
                  : item === "GenAI Media Detection" 
                  ? "/research/ai-generated-media"
                  : item === "Deepfakes (Faceswap)"
                  ? "/research/deepfakes"
                  : item === "Voice Cloning"
                  ? "/research/voice-clones"
                  : item === "Messages"
                  ? "/research/scam-text-detection"
                  : item === "Link & QR Code"
                  ? "/research/link-qr-code"
                  : item === "Publication"
                  ? "/research/publication"
                  : item === "ScamDB"
                  ? "/research/large-scale-database"
                  : "#";
                
                return item === "Detection Models" || item === "Research" ? (
                  <div
                    key={item}
                    className={`block rounded-xl px-3 py-1.5 text-sm font-medium text-white/50 tracking-wide ${item === "Research" ? "mt-4" : ""}`}
                  >
                    {item}
                  </div>
                ) : item === "GenAI Media Detection" || item === "Deepfakes (Faceswap)" || item === "Voice Cloning" || item === "Messages" || item === "Link & QR Code" || item === "Publication" || item === "ScamDB" ? (
                  <Link
                    key={item}
                    href={href}
                    className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors ml-4"
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
          <div className={`absolute inset-0 min-w-[280px] md:min-w-0 transition-transform duration-300 ease-out ${
            submenu === "stories" ? "translate-x-0" : "translate-x-full"
          }`}>
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
          <div className={`absolute inset-0 min-w-[280px] md:min-w-0 transition-transform duration-300 ease-out ${
            submenu === "company" ? "translate-x-0" : "translate-x-full"
          }`}>
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
  );
}
