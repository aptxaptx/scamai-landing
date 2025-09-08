// App-wide constants

export const APP_CONFIG = {
  name: "Scam AI",
  description: "Scam Prevention Platform",
  url: "https://scam.ai",
  loginUrl: "https://app.scam.ai",
  documentationUrl: "https://docu.scam.ai",
} as const;

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const;

export const Z_INDEX = {
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  overlay: 40,
  modal: 50,
  tooltip: 60,
  header: 70,
  loginButton: 9999,
} as const;

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

export const HERO_CONFIG = {
  title: "Seeing is no longer believing",
  subtitle: "Combat deepfake, voiceclone and ai-driven scams.",
  description: "",
  cta: {
    label: "Get Started",
    href: "/demo"
  },
} as const;
