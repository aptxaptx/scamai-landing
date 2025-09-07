"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAVIGATION_SECTIONS, APP_CONFIG } from "@/constants";
import Button from "./ui/Button";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const openMenu = () => {
    setIsOpen(true);
    document.body.classList.add("mobile-menu-open");
  };

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedSection(null);
    document.body.classList.remove("mobile-menu-open");
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, []);

  const toggleSection = (sectionKey: string) => {
    setExpandedSection(expandedSection === sectionKey ? null : sectionKey);
  };

  const renderNavigationSection = (sectionKey: string) => {
    const section = NAVIGATION_SECTIONS[sectionKey];
    if (!section) return null;

    const isExpanded = expandedSection === sectionKey;

    return (
      <div key={sectionKey}>
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full text-left rounded-xl px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
        >
          <span>{section.title}</span>
          <span
            className={`transition-transform duration-200 ${
              isExpanded ? "rotate-90" : ""
            }`}
          >
            →
          </span>
        </button>

        {isExpanded && (
          <div className="ml-4 mt-2 space-y-1">
            {section.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Bottom Bar with Logo and Hamburger */}
      <header className="md:hidden fixed bottom-0 left-0 right-0 z-[70] bg-black/95 backdrop-blur-sm border-t border-white/10">
        <div className="flex items-center justify-between px-5 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Scam AI logo"
              width={200}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          <button
            onClick={isOpen ? closeMenu : openMenu}
            className="flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
            aria-label={isOpen ? "Close menu" : "Open menu"}
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
        className={`md:hidden fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm transform transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        style={{
          paddingTop: "calc(3rem + 24px + 1px)",
          zIndex: 50,
          height: "100vh",
        }}
      >
        <div className="mobile-menu-container h-full overflow-y-auto">
          <div className="p-5 pb-10">
            <nav className="flex flex-col gap-2">
              {Object.keys(NAVIGATION_SECTIONS).map(renderNavigationSection)}
            </nav>

            {/* Login Button */}
            <div className="mt-8 px-4">
              <Button
                href={APP_CONFIG.loginUrl}
                external
                variant="secondary"
                className="w-full"
                onClick={closeMenu}
              >
                Login
              </Button>
            </div>

            {/* Get A Demo Button */}
            <div className="mt-4 px-4">
              <Button
                href="https://cal.com/scamai/15min"
                external
                variant="outline"
                className="w-full"
                onClick={closeMenu}
              >
                Get A Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
