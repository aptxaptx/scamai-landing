// Global types and interfaces

export interface NavigationLink {
  label?: string;
  labelKey?: string;
  href: string;
  external?: boolean;
  children?: NavigationLink[];
}

export interface NavigationSection {
  title?: string;
  titleKey?: string;
  links: NavigationLink[];
}

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  external?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  cta?: {
    label: string;
    href: string;
  };
}

export type SubmenuType =
  | "none"
  | "business"
  | "models"
  | "research"
  | "stories"
  | "company";

export interface SidebarContextType {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}

export interface PageProps {
  params?: Record<string, string>;
  searchParams?: Record<string, string>;
}
