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
      className={`min-h-dvh relative ${
        isDark ? "bg-[#04040a] text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="radar-beam" />
        <div className="grid-noise" />
        <div className="glow-orb orb-1" />
        <div className="glow-orb orb-2" />
      </div>

      <SimpleNav />

      <main className="pt-[78px] relative z-10">
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
