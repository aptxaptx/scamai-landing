import React from "react";
import { Link } from "@/i18n/navigation";
import { ButtonProps } from "@/types";
import { cn } from "@/lib/utils";

const buttonVariants = {
  primary: "bg-white text-black hover:bg-gray-100",
  secondary: "bg-white/10 text-white hover:bg-white/15",
  outline: "border-2 border-white/40 text-white hover:bg-white/10",
  ghost: "text-white hover:bg-white/10",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  external = false,
  disabled = false,
  className,
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 font-bold transition-colors rounded-xl",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    buttonVariants[variant],
    buttonSizes[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
