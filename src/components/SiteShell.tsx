"use client";

import { useTheme } from "@/contexts/ThemeContext";
import SimpleNav from "./SimpleNav";
import SiteFooter from "./SiteFooter";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  const { isDark } = useTheme();

  return (
    <div
      suppressHydrationWarning
      className={`min-h-dvh ${
        isDark ? "bg-[#0b0b18] text-white" : "bg-[#f7f9fc] text-slate-900"
      }`}
    >
      <SimpleNav />

      <main className="pt-[78px]">
        <div className="max-w-6xl mx-auto px-6 pb-16 site-shell-content">
          {children}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
