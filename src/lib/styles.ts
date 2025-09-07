import { cn } from "./utils";

// Common style utilities and patterns

export const containerStyles = {
  base: "w-full px-5 md:px-8",
  centered: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  hero: "max-w-4xl mx-auto text-center",
};

export const buttonStyles = {
  base: "inline-flex items-center justify-center gap-2 font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
  sizes: {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-lg",
  },
  variants: {
    primary: "bg-white text-black hover:bg-gray-100",
    secondary: "bg-white/10 text-white hover:bg-white/15",
    outline: "border-2 border-white/40 text-white hover:bg-white/10",
    ghost: "text-white hover:bg-white/10",
  },
};

export const navigationStyles = {
  link: "block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors",
  mobileLink:
    "w-full text-left rounded-xl px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors",
  section: "flex items-center justify-between",
};

export const layoutStyles = {
  fixed: "fixed top-0 left-0 right-0",
  fullHeight: "h-screen",
  fullWidth: "w-full",
  centered: "flex items-center justify-center",
  spacer: "h-screen", // For fixed hero spacer
};

// Helper function to create button classes
export const createButtonClass = (
  variant: keyof typeof buttonStyles.variants = "primary",
  size: keyof typeof buttonStyles.sizes = "md",
  className?: string
) => {
  return cn(
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.sizes[size],
    className
  );
};

// Helper function for responsive containers
export const createContainerClass = (
  type: keyof typeof containerStyles = "base",
  className?: string
) => {
  return cn(containerStyles[type], className);
};
