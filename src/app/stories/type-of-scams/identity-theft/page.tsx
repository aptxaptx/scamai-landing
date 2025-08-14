import { ScamTypePage, ScamTypePageProps } from "../scamType";

export const metadata = { title: "Identity Theft Scams — ScamAI" };

const identityTheftPageData: ScamTypePageProps = {
  metadata: {
    title: "Identity Theft Scams — ScamAI",
    description: "Learn about identity theft scams and how ScamAI protects against personal information fraud.",
  },
  breadcrumb: {
    parentPath: "/stories/type-of-scams",
    parentName: "Types of Scams",
    currentName: "Identity Theft Scams",
    nextPath: "/stories/type-of-scams/financial-investment",
    nextName: "Financial Investment Scams",
  },
  hero: {
    category: "Personal Information Fraud",
    headline: "Identity Theft Scams\nWhen Someone Becomes You",
    subtitle: "Criminals steal personal information to open accounts, make purchases,\nand commit fraud in your name, leaving you with the consequences.",
    tags: ["Identity Fraud", "Personal Data", "Financial Crime", "Data Breach"],
    visual: {
      type: "image",
      src: "/identity-theft-demo.webp",
    },
  },
  problemSection: {
    headline: "The Threat: Your Identity\nIs a Valuable Target",
    description: "Identity theft is one of the fastest-growing crimes, with scammers using stolen personal information to access financial accounts, open credit lines, and commit various forms of fraud.",
    visual: {
      type: "image",
      src: "/identity-theft-threat.webp",
      alt: "Identity theft threat landscape",
    },
    dataPoint: "In 2023, identity theft affected over 40 million Americans, resulting in $43 billion in losses.",
  },
  threatLandscape: {
    headline: "The Growing Identity Theft Epidemic",
    description: "With more personal information available online and sophisticated attack methods, identity theft has become increasingly common and damaging.",
    keyThreats: [
      { icon: "ShieldAlert", text: "Financial Account Takeover", description: "Attackers gain access to bank accounts and credit cards using stolen credentials." },
      { icon: "Briefcase", text: "Credit Fraud", description: "Scammers open new credit accounts and loans in the victim's name." },
      { icon: "MessageSquareWarning", text: "Tax Return Fraud", description: "Criminals file fraudulent tax returns to claim refunds." },
    ],
  },
  solution: {
    productName: "IdentityGuard™",
    headline: "Our Solution: IdentityGuard™ — The Personal Data Protection Expert",
    description: "IdentityGuard™ monitors personal information across multiple platforms and detects suspicious activities that could indicate identity theft.",
    coreDimensions: [
      { title: "Multi-Platform Monitoring", description: "Tracks personal information across social media, financial institutions, and public records." },
      { title: "Behavioral Analysis", description: "Analyzes patterns to identify unusual activities that may indicate identity theft." },
      { title: "Real-Time Alerts", description: "Provides immediate notifications when suspicious activities are detected." },
    ],
    outputDescription: "The API delivers comprehensive identity protection with real-time monitoring and instant fraud alerts.",
  },
  advantages: {
    headline: "Why Choose IdentityGuard™?",
    items: [
      { icon: "Zap", title: "24/7 Monitoring", description: "Continuous surveillance of personal information across all monitored platforms." },
      { icon: "Target", title: "Early Detection", description: "Identifies potential threats before they can cause significant damage." },
      { icon: "Globe", title: "Comprehensive Coverage", description: "Monitors multiple data sources and platforms simultaneously." },
      { icon: "BrainCircuit", title: "Smart Learning", description: "AI-powered system that improves detection accuracy over time." },
    ],
  },

  cta: {
    headline: "Protect Your Identity",
    description: "Don't wait until it's too late. Start protecting your personal information today.",
    primary: { text: "Get Protected", href: "/demo" },
  },
  backgroundImage: "/identity-theft-background.webp",
};

export default function IdentityTheftPage() {
  return <ScamTypePage data={identityTheftPageData} />;
}
