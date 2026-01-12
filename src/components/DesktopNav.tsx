"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { NAVIGATION_SECTIONS } from "@/constants";

export default function DesktopNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const renderDropdownMenu = (sectionKey: string) => {
    const section = NAVIGATION_SECTIONS[sectionKey];
    if (!section) return null;

    return (
      <div
        className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg min-w-[240px] z-50"
        onMouseEnter={() => handleMouseEnter(sectionKey)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="py-2">
          {section.links.map((link, index) => {
            // Handle nested children (like Detection Models)
            if (link.children) {
              return (
                <div key={index}>
                  <div className="px-4 py-2 text-sm font-medium text-gray-500">
                    {link.label}
                  </div>
                  {link.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.href}
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      {...(child.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              );
            }

            return (
              <Link
                key={index}
                href={link.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <nav className="hidden md:flex items-center gap-1">
      {/* Use Cases Dropdown (Products) */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("business")}
        onMouseLeave={handleMouseLeave}
      >
        <button className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors flex items-center gap-1">
          Use Cases
          <svg
            className={`w-4 h-4 transition-transform ${
              openDropdown === "business" ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {openDropdown === "business" && renderDropdownMenu("business")}
      </div>

      {/* Models Dropdown (Industries) */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("models")}
        onMouseLeave={handleMouseLeave}
      >
        <button className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors flex items-center gap-1">
          Models
          <svg
            className={`w-4 h-4 transition-transform ${
              openDropdown === "models" ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {openDropdown === "models" && renderDropdownMenu("models")}
      </div>

      {/* Research Dropdown (Resources) */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("research")}
        onMouseLeave={handleMouseLeave}
      >
        <button className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors flex items-center gap-1">
          Research
          <svg
            className={`w-4 h-4 transition-transform ${
              openDropdown === "research" ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {openDropdown === "research" && renderDropdownMenu("research")}
      </div>

      {/* Company Link with dropdown */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("company")}
        onMouseLeave={handleMouseLeave}
      >
        <button className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors flex items-center gap-1">
          Company
          <svg
            className={`w-4 h-4 transition-transform ${
              openDropdown === "company" ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {openDropdown === "company" && renderDropdownMenu("company")}
      </div>
    </nav>
  );
}
