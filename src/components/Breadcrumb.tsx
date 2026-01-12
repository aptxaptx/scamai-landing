"use client";

import { Link } from "@/i18n/navigation";
type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  nextItem?: {
    label: string;
    href: string;
  };
};

export default function Breadcrumb({ items, nextItem }: BreadcrumbProps) {
  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto mt-4 px-8 md:px-6 lg:px-8">
      <div className="flex items-center justify-between text-sm">
        <div className="text-white/70">
          {items.map((item, index) => (
            <span key={index}>
              {item.href ? (
                <Link href={item.href} className="hover:text-white/90">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/90">{item.label}</span>
              )}
              {index < items.length - 1 && <span className="mx-2">/</span>}
            </span>
          ))}
        </div>
        {nextItem ? (
          <Link href={nextItem.href} className="text-white/80 hover:text-white/90">
            Next: {nextItem.label} →
          </Link>
        ) : (
          <div></div> // Empty div to maintain flex layout
        )}
      </div>
    </div>
  );
}
