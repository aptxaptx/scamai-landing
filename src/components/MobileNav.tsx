"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<
    | "business"
    | "individuals"
    | "models"
    | "research"
    | "stories"
    | "company"
    | null
  >(null);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setExpandedSection(null);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedSection(null);
  };

  const toggleSection = (
    section: "business" | "models" | "research" | "stories" | "company"
  ) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
      // Navigate to the first page in the section
      switch (section) {
        case "business":
          window.location.href = "/business";
          break;
        case "models":
          window.location.href = "/models/deepfakes";
          break;
        case "research":
          window.location.href = "/research/publication";
          break;
        case "stories":
          window.location.href = "/stories/news";
          break;
        case "company":
          window.location.href = "/company/about";
          break;
      }
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-[70] bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center justify-between px-5 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/scamailogo.png"
              alt="Scam AI logo"
              width={200}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`hamburger-line block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`hamburger-line block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`hamburger-line block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed left-0 right-0 bg-black/95 backdrop-blur-sm transform transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        style={{
          top: "0",
          paddingTop: "calc(3rem + 24px + 1px)",
          zIndex: 50,
          height: "100vh",
        }}
      >
        <div className="mobile-menu-container h-full overflow-y-auto">
          <div className="p-5 pb-10">
            <nav className="flex flex-col gap-2">
              {/* For Business */}
              <div>
                <button
                  onClick={() => toggleSection("business")}
                  className="w-full text-left rounded-xl px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                >
                  <span>For Business</span>
                  <span
                    className={`transition-transform duration-200 ${
                      expandedSection === "business" ? "rotate-90" : ""
                    }`}
                  >
                    →
                  </span>
                </button>
                {expandedSection === "business" && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/business"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Use Cases
                    </Link>
                    <Link
                      href="/api-platform"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      API Platform
                    </Link>
                    <a
                      href="https://docu.scam.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      API Documentation
                    </a>
                    <Link
                      href="/demo"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Contact Sales
                    </Link>
                  </div>
                )}
              </div>

              {/* For Individuals */}
              <div></div>

              {/* Models */}
              <div>
                <button
                  onClick={() => toggleSection("models")}
                  className="w-full text-left rounded-xl px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                >
                  <span>Models</span>
                  <span
                    className={`transition-transform duration-200 ${
                      expandedSection === "models" ? "rotate-90" : ""
                    }`}
                  >
                    →
                  </span>
                </button>
                {expandedSection === "models" && (
                  <div className="ml-4 mt-1 space-y-1">
                    <div className="px-3 py-1 text-xs font-medium text-white/50 tracking-wide">
                      Detection Models
                    </div>
                    <Link
                      href="/models/deepfakes"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors ml-2"
                    >
                      Deepfakes (Faceswap)
                    </Link>
                    <Link
                      href="/models/ai-generated-media"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors ml-2"
                    >
                      GenAI Media Detection
                    </Link>
                    <Link
                      href="/models/voice-clones"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors ml-2"
                    >
                      Voice Cloning
                    </Link>
                  </div>
                )}
              </div>

              {/* Research */}
              <div>
                <button
                  onClick={() => toggleSection("research")}
                  className="w-full text-left rounded-xl px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                >
                  <span>Research</span>
                  <span
                    className={`transition-transform duration-200 ${
                      expandedSection === "research" ? "rotate-90" : ""
                    }`}
                  >
                    →
                  </span>
                </button>
                {expandedSection === "research" && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/research/publication"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Publications & Datasets
                    </Link>
                  </div>
                )}
              </div>

              {/* Stories */}
              <div>
                <button
                  onClick={() => toggleSection("stories")}
                  className="w-full text-left rounded-xl px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                >
                  <span>Stories</span>
                  <span
                    className={`transition-transform duration-200 ${
                      expandedSection === "stories" ? "rotate-90" : ""
                    }`}
                  >
                    →
                  </span>
                </button>
                {expandedSection === "stories" && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/stories/news"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      News
                    </Link>
                    <Link
                      href="/stories/type-of-scams"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Type of Scams
                    </Link>
                  </div>
                )}
              </div>

              {/* Company */}
              <div>
                <button
                  onClick={() => toggleSection("company")}
                  className="w-full text-left rounded-xl px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                >
                  <span>Company</span>
                  <span
                    className={`transition-transform duration-200 ${
                      expandedSection === "company" ? "rotate-90" : ""
                    }`}
                  >
                    →
                  </span>
                </button>
                {expandedSection === "company" && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/company/about"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      About Us
                    </Link>

                    <Link
                      href="/company/partnership"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Partnership
                    </Link>
                    <Link
                      href="/company/investors"
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Investors
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Login Button */}
            <div className="mt-8 px-4">
              <a
                href="https://app.scam.ai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/15 transition-colors"
              >
                Login
              </a>
            </div>

            {/* Get A Demo Button */}
            <div className="mt-4 px-4">
              <Link
                href="/demo"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Get A Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
