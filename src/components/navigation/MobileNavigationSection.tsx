import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { NavigationSection } from "@/types";
import NavigationItem from "./NavigationItem";

interface MobileNavigationSectionProps {
  section: NavigationSection;
  onLinkClick: () => void;
}

export default function MobileNavigationSection({
  section,
  onLinkClick,
}: MobileNavigationSectionProps) {
  const t = useTranslations();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div>
      <button
        onClick={toggleExpanded}
        className="w-full text-left rounded-xl px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
      >
        <span>{section.titleKey ? t(section.titleKey) : section.title}</span>
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
            <NavigationItem
              key={index}
              link={link}
              onClick={onLinkClick}
              className="text-sm"
            />
          ))}
        </div>
      )}
    </div>
  );
}
