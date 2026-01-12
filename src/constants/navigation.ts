import { NavigationSection } from "@/types";

export const MAIN_NAVIGATION: string[] = ["Use Cases", "Models", "Company"];

export const NAVIGATION_SECTIONS: Record<string, NavigationSection> = {
  business: {
    titleKey: "Navigation.sections.business",
    links: [
      { labelKey: "Navigation.links.kyc", href: "/business/kyc" },
      { labelKey: "Navigation.links.dating", href: "/business/dating" },
      { labelKey: "Navigation.links.fakeNews", href: "/business/fake-news" },
      { labelKey: "Navigation.links.impersonation", href: "/business/impersonation" },
      { labelKey: "Navigation.links.ip", href: "/business/ip-copyright" },
      { labelKey: "Navigation.links.legalCompliance", href: "/business/legal-compliance" },
    ],
  },
  models: {
    titleKey: "Navigation.sections.models",
    links: [
      {
        labelKey: "Navigation.links.detectionModels",
        href: "#",
        children: [
          { labelKey: "Navigation.links.deepfakes", href: "/models/deepfakes" },
          {
            labelKey: "Navigation.links.aiImage",
            href: "/models/ai-generated-media",
          },
          { labelKey: "Navigation.links.voiceClone", href: "/models/voice-clones" },
        ],
      },
      { labelKey: "Navigation.links.research", href: "/research/publication" },
    ],
  },
  research: {
    titleKey: "Navigation.sections.research",
    links: [
      { labelKey: "Navigation.links.publications", href: "/research/publication" },
    ],
  },
  stories: {
    titleKey: "Navigation.sections.stories",
    links: [
      { labelKey: "Navigation.links.news", href: "/stories/news" },
      { labelKey: "Navigation.links.scams", href: "/stories/type-of-scams" },
    ],
  },
  company: {
    titleKey: "Navigation.sections.company",
    links: [
      { labelKey: "Navigation.links.about", href: "/company/about" },
      { labelKey: "Navigation.links.partnership", href: "/company/partnership" },
    ],
  },
};

export const FOOTER_SECTIONS: NavigationSection[] = [
  NAVIGATION_SECTIONS.business,
  {
    titleKey: "Navigation.sections.individuals",
    links: [
      { labelKey: "Navigation.links.mobileApp", href: "/individuals?s=mobile" },
      { labelKey: "Navigation.links.browserPlugin", href: "/individuals?s=plugin" },
    ],
  },
  NAVIGATION_SECTIONS.models,
  NAVIGATION_SECTIONS.research,
  NAVIGATION_SECTIONS.stories,
  NAVIGATION_SECTIONS.company,
];

export const SOCIAL_LINKS = [
  { labelKey: "Navigation.social.linkedin", href: "https://www.linkedin.com/company/scam-ai/" },
];

export const FOOTER_LINKS = [
  { labelKey: "Navigation.links.stories", href: "#" },
  { labelKey: "Navigation.sections.company", href: "/company/about" },
  { labelKey: "Navigation.links.getDemo", href: "/demo" },
  { labelKey: "Navigation.links.manageCookies", href: "#" },
];
