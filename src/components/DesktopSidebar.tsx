"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type SubmenuType = "none" | "business" | "models" | "research" | "stories" | "company";

type DesktopSidebarProps = {
  isVisible: boolean;
};

export default function DesktopSidebar({ isVisible }: DesktopSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  
        // Removed unused isModelPage variable
  
  const isBusinessPath = pathname && (
    pathname.startsWith("/business") ||
    pathname === "/api-platform" ||
    pathname === "/demo"
  );
  
  const initialSubmenu: SubmenuType = isBusinessPath
    ? "business"
    : pathname?.startsWith("/models")
    ? "models"
    : pathname?.startsWith("/research")
    ? "research"
    : pathname?.startsWith("/stories")
    ? "stories"
    : pathname?.startsWith("/company")
    ? "company"
    : "none";
    
  const [submenu, setSubmenu] = useState<SubmenuType>(initialSubmenu);

  useEffect(() => {
    if (!pathname) return;
    
    const isBusinessPage = pathname.startsWith("/business") || 
                          pathname === "/api-platform" || 
                          pathname === "/demo";
    
    if (isBusinessPage) setSubmenu("business");
    else if (pathname.startsWith("/models")) setSubmenu("models");
    else if (pathname.startsWith("/research")) setSubmenu("research");
    else if (pathname.startsWith("/stories")) setSubmenu("stories");
    else if (pathname.startsWith("/company")) setSubmenu("company");
    else setSubmenu("none");
  }, [pathname]);

  const mainLinks = [
    "For Business", 
    "Models",
    "Research",
    "Stories",
    "Company",
  ];

  const businessLinks = [
    "Use Cases",
    "API Platform",
    "API Documentation",
    "Contact Sales",
  ];

  const modelsLinks = [
    "Detection Models",
    "Deepfakes (Faceswap)",
    "GenAI Media Detection",
    "Voice Cloning",
    "Messages",
    "Link & QR Code",
  ];

  const researchLinks = [
    "Publications & Datasets",
  ];

  const storiesLinks = [
    "News",
    "Type of Scams",
  ];

  const companyLinks = ["About Us", "Partnership", "Investors"];



  return (
    <aside 
      className={`z-10 fixed top-16 h-[calc(100dvh-80px)] overflow-y-auto flex flex-col transition-all duration-300 ${
        isVisible 
          ? "left-0 w-[200px]" 
          : "-left-[200px] w-[200px]"
      }`}
      data-desktop-sidebar
    >
      <div className="flex flex-col h-full">
        {/* Navigation menu - starts from top */}
        <div className="flex-1 overflow-hidden">
        <div className="relative min-w-[280px] md:min-w-0">
          {/* Primary panel */}
          <div className={`transition-transform duration-300 ease-out ${
            submenu === "none" ? "translate-x-0" : "-translate-x-full"
          }`}>
            <nav className="flex flex-col gap-2 px-4 pt-10" aria-label="Primary">
              {mainLinks.map((item) => {
                if (item === "For Business") {
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setSubmenu(submenu === "business" ? "none" : "business");
                        if (submenu !== "business") {
                          router.push("/business");
                        }
                      }}
                      className="group text-left w-full rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
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

                if (item === "Models") {
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setSubmenu(submenu === "models" ? "none" : "models");
                        if (submenu !== "models") {
                          router.push("/models/deepfakes");
                        }
                      }}
                      className="group text-left w-full rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
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
                      onClick={() => {
                        setSubmenu(submenu === "research" ? "none" : "research");
                        if (submenu !== "research") {
                          router.push("/research/publication");
                        }
                      }}
                      className="group text-left w-full rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
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
                      onClick={() => {
                        setSubmenu(submenu === "stories" ? "none" : "stories");
                        if (submenu !== "stories") {
                          router.push("/stories/news");
                        }
                      }}
                      className="group text-left w-full rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
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
                      onClick={() => {
                        setSubmenu(submenu === "company" ? "none" : "company");
                        if (submenu !== "company") {
                          router.push("/company/about");
                        }
                      }}
                      className="group text-left w-full rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
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
          <div className={`absolute inset-0 min-w-[280px] md:min-w-0 transition-transform duration-300 ease-out ${
            submenu === "business" ? "translate-x-0" : "translate-x-full"
          }`}>
            <div className="px-4 pb-4 flex items-center gap-2 text-white/70">
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
            <nav className="flex flex-col gap-2 px-4 overflow-y-auto max-h-none" aria-label="For Business">
              {businessLinks.map((item) => {
                const href =
                  item === "Use Cases"
                    ? "/business"
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



          {/* Models submenu panel */}
          <div className={`absolute inset-0 min-w-[280px] md:min-w-0 transition-transform duration-300 ease-out ${
            submenu === "models" ? "translate-x-0" : "translate-x-full"
          }`}>
            <div className="px-4 pb-4 flex items-center gap-2 text-white/70">
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
            <nav className="flex flex-col gap-2 px-4 overflow-y-auto max-h-none" aria-label="Models">
              {modelsLinks.map((item) => {
                const href = item === "Detection Models"
                  ? "#"
                  : item === "GenAI Media Detection" 
                  ? "/models/ai-generated-media"
                  : item === "Deepfakes (Faceswap)"
                  ? "/models/deepfakes"
                  : item === "Voice Cloning"
                  ? "/models/voice-clones"
                  : item === "Messages"
                  ? "/models/scam-text-detection"
                  : item === "Link & QR Code"
                  ? "/models/link-qr-code"
                  : "#";
                
                return item === "Detection Models" ? (
                  <div
                    key={item}
                    className="block rounded-xl px-3 py-1.5 text-sm font-medium text-white/50 tracking-wide"
                  >
                    {item}
                  </div>
                ) : (
                  <Link
                    key={item}
                    href={href}
                    className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors ml-4"
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Research submenu panel */}
          <div className={`absolute inset-0 min-w-[280px] md:min-w-0 transition-transform duration-300 ease-out ${
            submenu === "research" ? "translate-x-0" : "translate-x-full"
          }`}>
            <div className="px-4 pb-4 flex items-center gap-2 text-white/70">
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
            <nav className="flex flex-col gap-2 px-4 overflow-y-auto max-h-none" aria-label="Research">
              {researchLinks.map((item) => {
                const href = item === "Publications & Datasets"
                  ? "/research/publication"
                  : "#";
                
                return (
                  <Link
                    key={item}
                    href={href}
                    className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Stories submenu panel */}
          <div className={`absolute inset-0 min-w-[280px] md:min-w-0 transition-transform duration-300 ease-out ${
            submenu === "stories" ? "translate-x-0" : "translate-x-full"
          }`}>
            <div className="px-4 pb-4 flex items-center gap-2 text-white/70">
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
            <nav className="flex flex-col gap-2 px-4 overflow-y-auto max-h-none" aria-label="Stories">
              {storiesLinks.map((item) => {
                const href =
                  item === "News" ? "/stories/news" :
                  item === "Type of Scams" ? "/stories/type-of-scams" :
                  item === "Scam Trends" ? "/stories/scam-trends" :
                  "#";
                
                return (
                  <Link
                    key={item}
                    href={href}
                    className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Company submenu panel */}
          <div className={`absolute inset-0 min-w-[280px] md:min-w-0 transition-transform duration-300 ease-out ${
            submenu === "company" ? "translate-x-0" : "translate-x-full"
          }`}>
            <div className="px-4 pb-4 flex items-center gap-2 text-white/70">
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
            <nav className="flex flex-col gap-2 px-4 overflow-y-auto max-h-none" aria-label="Company">
              {companyLinks.map((item) => {
                const href =
                  item === "About Us" ? "/company/about" :
                  item === "People" ? "/company/people" :
                  item === "Partnership" ? "/company/partnership" :
                  item === "Investors" ? "/company/investors" :
                  "#";
                return (
                  <Link
                    key={item}
                    href={href}
                    className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        </div>
        
        {/* Get A Demo Button */}
        <div className="p-4 mt-auto">
          <Link 
            href="/demo"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Get A Demo
          </Link>
        </div>
      </div>
    </aside>
  );
}
