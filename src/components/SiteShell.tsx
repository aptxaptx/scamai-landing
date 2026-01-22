"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import SimpleNav from "./SimpleNav";
import SiteFooter from "./SiteFooter";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="min-h-dvh bg-white text-gray-900"
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
