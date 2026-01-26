"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { NAVIGATION_SECTIONS, APP_CONFIG } from "@/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  expandedSection: string | null;
  setExpandedSection: (section: string | null) => void;
}

export default function MobileNav({ isOpen, onClose, expandedSection, setExpandedSection }: MobileNavProps) {
  const t = useTranslations();

  const closeMenu = () => {
    onClose();
    setExpandedSection(null);
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

    // Special handling for Company and Pricing - make them direct links with arrow
    if (sectionKey === "company") {
      return (
        <div key={sectionKey} className="border-b border-zinc-800 bg-zinc-900">
          <Link
            href="/company/about"
            onClick={closeMenu}
            className="w-full text-left px-6 py-4 text-lg font-medium text-zinc-100 hover:bg-zinc-800 transition-colors flex items-center justify-between"
          >
            <span>{section.titleKey ? t(section.titleKey) : section.title}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      );
    }

    const isExpanded = expandedSection === sectionKey;

    return (
      <div key={sectionKey} className="border-b border-zinc-800 bg-zinc-900">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full text-left px-6 py-4 text-lg font-medium text-zinc-100 hover:bg-zinc-800 transition-colors flex items-center justify-between"
        >
          <span>{section.titleKey ? t(section.titleKey) : section.title}</span>
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isExpanded && (
          <div className="bg-gray-50 py-2">
            {section.links.map((link, index) => {
              // Special handling for Detection Models header in Models section
              if (sectionKey === "models" && link.labelKey === "Navigation.links.detectionModels") {
                return (
                  <div key={index}>
                    <div className="px-8 py-2 text-sm font-medium text-gray-500">
                      {link.labelKey ? t(link.labelKey) : link.label}
                    </div>
                    {/* Render child links indented */}
                    {link.children && (
                      <div>
                        {link.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            href={child.href}
                            onClick={closeMenu}
                            className="block px-10 py-2.5 text-base text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
                            {...(child.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {child.labelKey ? t(child.labelKey) : child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              // Regular link rendering for other items
              return (
                <Link
                  key={index}
                  href={link.href}
                  onClick={closeMenu}
                className="block px-8 py-2.5 text-base text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.labelKey ? t(link.labelKey) : link.label}
              </Link>
            );
          })}
        </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Menu Trigger Button - Hidden, controlled by SiteShell */}
      
      {/* Mobile Full Screen Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-50 transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 99999 }}
      >
        <div className="flex flex-col h-full">
          {/* Header with Get Demo button and Close button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900">
            <Link
              href="https://cal.com/scamai/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              {t("Navigation.mobile.getDemo")}
            </Link>
            
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-zinc-800 transition-colors"
              aria-label={t("Navigation.mobile.closeMenu")}
            >
              <svg className="w-6 h-6 text-zinc-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 overflow-y-auto">
            <nav className="flex flex-col">
              {/* Use Cases */}
              {renderNavigationSection("business")}
              
              {/* Models */}
              {renderNavigationSection("models")}
              
              {/* Research */}
              {renderNavigationSection("research")}
              
              {/* Company - Direct Link */}
              {renderNavigationSection("company")}
              
            </nav>
          </div>

          {/* Bottom Section - Language Selector and Sign Up Button */}
          <div className="p-6 border-t border-zinc-800 bg-zinc-900 flex items-center justify-between">
            {/* Language Selector */}
            <button className="flex items-center gap-2 px-4 py-2 text-zinc-300 hover:bg-zinc-800 transition-colors">
              <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Sign Up Button */}
            <Link
              href={APP_CONFIG.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white text-base font-medium hover:bg-gray-800 transition-colors"
            >
              {t("Navigation.mobile.signUp")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
