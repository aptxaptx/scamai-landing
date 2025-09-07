import { NavigationSection } from "@/types";

export const MAIN_NAVIGATION: string[] = [
  "Use Cases",
  "Models",
  "Stories",
  "Company",
];

export const NAVIGATION_SECTIONS: Record<string, NavigationSection> = {
  business: {
    title: "Use Cases",
    links: [],
  },
  models: {
    title: "Models",
    links: [
      {
        label: "Detection Models",
        href: "#",
        children: [
          { label: "Deepfakes D1.2", href: "/models/deepfakes" },
          {
            label: "AI-Generated A1.1",
            href: "/models/ai-generated-media",
          },
          { label: "Voiceclone V1.0", href: "/models/voice-clones" },
        ],
      },
      { label: "Research", href: "/research/publication" },
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
