import { NavigationSection } from "@/types";

export const MAIN_NAVIGATION: string[] = [
  "Use Cases",
  "Models",
  "Research",
  "Stories",
  "Company",
];

export const NAVIGATION_SECTIONS: Record<string, NavigationSection> = {
  business: {
    title: "Use Cases",
    links: [
      { label: "API Platform", href: "/api-platform" },
      {
        label: "API Documentation",
        href: "https://docu.scam.ai",
        external: true,
      },
      { label: "Contact Sales", href: "/demo" },
    ],
  },
  models: {
    title: "Models",
    links: [
      {
        label: "Detection Models",
        href: "#",
        children: [
          { label: "Deepfakes (Faceswap)", href: "/models/deepfakes" },
          {
            label: "GenAI Media Detection",
            href: "/models/ai-generated-media",
          },
          { label: "Voice Cloning", href: "/models/voice-clones" },
        ],
      },
    ],
  },
  research: {
    title: "Research",
    links: [
      { label: "Publications & Datasets", href: "/research/publication" },
    ],
  },
  stories: {
    title: "Stories",
    links: [
      { label: "News", href: "/stories/news" },
      { label: "Type of Scams", href: "/stories/type-of-scams" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/about" },
      { label: "Partnership", href: "/company/partnership" },
      { label: "Investors", href: "/company/investors" },
    ],
  },
};

export const FOOTER_SECTIONS: NavigationSection[] = [
  NAVIGATION_SECTIONS.business,
  {
    title: "For Individuals",
    links: [
      { label: "Mobile App", href: "/individuals?s=mobile" },
      { label: "Browser Plugin", href: "/individuals?s=plugin" },
    ],
  },
  NAVIGATION_SECTIONS.models,
  NAVIGATION_SECTIONS.research,
  NAVIGATION_SECTIONS.stories,
  NAVIGATION_SECTIONS.company,
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/scam-ai/" },
];

export const FOOTER_LINKS = [
  { label: "Stories", href: "#" },
  { label: "Company", href: "/company/about" },
  { label: "Get Demo", href: "/demo" },
  { label: "Manage Cookies", href: "#" },
];
