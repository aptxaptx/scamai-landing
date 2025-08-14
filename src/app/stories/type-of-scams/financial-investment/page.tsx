import { ScamTypePage, ScamTypePageProps } from "../scamType";

export const metadata = { title: "Financial Investment Scams — ScamAI" };

const financialInvestmentPageData: ScamTypePageProps = {
  metadata: {
    title: "Financial Investment Scams — ScamAI",
    description: "Learn about financial investment scams and how ScamAI protects against fraudulent investment schemes.",
  },
  breadcrumb: {
    parentPath: "/stories/type-of-scams",
    parentName: "Types of Scams",
    currentName: "Financial Investment Scams",
    nextPath: "/stories/type-of-scams/romance",
    nextName: "Romance Scam",
  },
  hero: {
    category: "Investment Fraud",
    headline: "Financial Investment Scams\nWhen Promises Are Too Good",
    subtitle: "Scammers promise unrealistic returns on investments,\nusing sophisticated tactics to steal money from unsuspecting victims.",
    tags: ["Investment Fraud", "Ponzi Schemes", "Cryptocurrency Scams", "High-Yield Fraud"],
    visual: {
      type: "image",
      src: "/investment-scam-demo.webp",
    },
  },
  problemSection: {
    headline: "The Threat: Every Investment\nCould Be a Trap",
    description: "Investment scams are becoming increasingly sophisticated, with scammers using fake credentials, manipulated data, and social proof to convince victims to invest in non-existent or fraudulent schemes.",
    visual: {
      type: "image",
      src: "/investment-scam-threat.webp",
      alt: "Investment scam threat landscape",
    },
    dataPoint: "Investment fraud resulted in $3.8 billion in losses in 2023, affecting over 100,000 victims.",
  },
  threatLandscape: {
    headline: "The Investment Fraud Epidemic",
    description: "Investment scams are one of the most profitable forms of fraud, with scammers constantly evolving their tactics to target both novice and experienced investors.",
    keyThreats: [
      { icon: "ShieldAlert", text: "Ponzi Schemes", description: "Fake investment programs that pay returns from new investors' money rather than actual profits." },
      { icon: "Briefcase", text: "Cryptocurrency Scams", description: "Fake crypto projects and exchanges that steal digital assets and personal information." },
      { icon: "MessageSquareWarning", text: "High-Yield Investment Programs", description: "Promises of unrealistic returns that are mathematically impossible to achieve." },
    ],
  },
  solution: {
    productName: "InvestmentGuard™",
    headline: "Our Solution: InvestmentGuard™ — The Investment Fraud Detection Expert",
    description: "InvestmentGuard™ analyzes investment opportunities using AI to detect red flags, verify company information, and identify patterns associated with fraudulent schemes.",
    coreDimensions: [
      { title: "Company Verification", description: "Validates business registrations, licenses, and regulatory compliance status." },
      { title: "Financial Pattern Analysis", description: "Detects suspicious financial patterns and unrealistic return promises." },
      { title: "Social Proof Validation", description: "Verifies testimonials, reviews, and social media presence for authenticity." },
    ],
    outputDescription: "The API provides comprehensive investment risk assessment with fraud probability scores and detailed analysis.",
  },
  advantages: {
    headline: "Why Choose InvestmentGuard™?",
    items: [
      { icon: "Zap", title: "Real-Time Analysis", description: "Instant evaluation of investment opportunities with immediate risk assessment." },
      { icon: "Target", title: "High Accuracy", description: "95% accuracy in detecting fraudulent investment schemes." },
      { icon: "Globe", title: "Global Coverage", description: "Monitors investment opportunities across multiple countries and jurisdictions." },
      { icon: "BrainCircuit", title: "Continuous Learning", description: "Adapts to new scam patterns and evolving fraud tactics." },
    ],
  },

  cta: {
    headline: "Protect Your Investments",
    description: "Don't let investment scams steal your hard-earned money. Verify before you invest.",
    primary: { text: "Start Protection", href: "/demo" },
  },
  backgroundImage: "/investment-scam-background.webp",
};

export default function FinancialInvestmentPage() {
  return <ScamTypePage data={financialInvestmentPageData} />;
}
