import React from "react";
import { APP_CONFIG, Z_INDEX } from "@/constants/app";

interface LoginButtonProps {
  className?: string;
  desktopOnly?: boolean;
}

export default function LoginButton({
  className = "",
  desktopOnly = true,
}: LoginButtonProps) {
  const baseClasses = desktopOnly ? "hidden md:block" : "";

  return (
    <div
      className={`${baseClasses} fixed top-4 right-4 md:right-6`}
      style={{ zIndex: Z_INDEX.loginButton }}
    >
      <a
        href={APP_CONFIG.loginUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-light tracking-wide border-2 border-blue-600 shadow-2xl ${className}`}
        style={{ borderRadius: "0" }}
      >
        LOGIN
      </a>
    </div>
  );
}
