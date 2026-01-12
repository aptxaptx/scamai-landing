import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NavigationLink } from "@/types";

interface NavigationItemProps {
  link: NavigationLink;
  className?: string;
  onClick?: () => void;
}

export default function NavigationItem({
  link,
  className = "",
  onClick,
}: NavigationItemProps) {
  const t = useTranslations();
  const baseClasses = `block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors ${className}`;
  const label = link.labelKey ? t(link.labelKey) : link.label ?? "";

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={baseClasses} onClick={onClick}>
      {label}
    </Link>
  );
}
