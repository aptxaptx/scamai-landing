"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

const themeOrder = ["light", "dark", "system"] as const;

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const label = useMemo(() => {
    if (!mounted) return "Theme";
    if (theme === "system") {
      return "System";
    }
    return theme === "dark" ? "Dark" : "Light";
  }, [mounted, theme]);

  const handleClick = () => {
    const currentIndex = themeOrder.indexOf((theme ?? "system") as (typeof themeOrder)[number]);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Toggle theme"
      className={cn(
        "h-10 w-24 rounded-full border px-3 text-sm font-medium transition-colors",
        "inline-flex items-center justify-center",
        "bg-transparent",
        className
      )}
    >
      {label}
    </button>
  );
}
