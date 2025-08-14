import { ScamTypePage, ScamTypePageProps } from "../scamType";

export const metadata = { title: "Romance Scam — ScamAI" };

const romanceScamPageData: ScamTypePageProps = {
  metadata: {
    title: "Romance Scam — ScamAI",
    description: "Learn about romance scams and how ScamAI protects against online dating fraud.",
  },
  breadcrumb: {
    parentPath: "/stories/type-of-scams",
    parentName: "Types of Scams",
    currentName: "Romance Scam",
    nextPath: "/stories/type-of-scams/voice-cloning",
    nextName: "Voice Cloning Scam",
  },
  hero: {
    category: "Online Dating Fraud",
    headline: "Romance Scam\nWhen Love Becomes a Weapon",
    subtitle: "Scammers create fake online relationships to gain trust,\nthen manipulate victims into sending money and gifts.",
    tags: ["Romance Fraud", "Online Dating", "Social Engineering", "Emotional Manipulation"],
    visual: {
      type: "image",
      src: "/romance-scam-demo.webp",
    },
  },
  problemSection: {
    headline: "The Threat: Love Can Be\nFake Too",
    description: "Romance scammers create elaborate fake personas and build emotional connections with victims over weeks or months, gradually manipulating them into financial exploitation.",
    visual: {
      type: "image",
      src: "/romance-scam-threat.webp",
      alt: "Romance scam threat landscape",
    },
    dataPoint: "Romance scams resulted in $1.3 billion in losses in 2023, with victims losing an average of $2,000 per scam.",
  },
  threatLandscape: {
    headline: "The Romance Scam Epidemic",
    description: "Romance scams are one of the most emotionally devastating forms of fraud, with scammers using sophisticated psychological tactics to exploit vulnerable individuals.",
    keyThreats: [
      { icon: "ShieldAlert", text: "Fake Online Profiles", description: "Scammers create convincing fake profiles with stolen photos and fabricated life stories." },
      { icon: "Briefcase", text: "Emotional Manipulation", description: "Attackers build trust through consistent communication and emotional support." },
      { icon: "MessageSquareWarning", text: "Financial Exploitation", description: "Victims are manipulated into sending money for fake emergencies or investments." },
    ],
  },
  solution: {
    productName: "RomanceGuard™",
    headline: "Our Solution: RomanceGuard™ — The Online Dating Safety Expert",
    description: "RomanceGuard™ analyzes online dating profiles and conversations to detect fake personas, suspicious behavior patterns, and potential romance scams.",
    coreDimensions: [
      { title: "Profile Authenticity Check", description: "Verifies profile photos, social media presence, and personal information for authenticity." },
      { title: "Behavioral Pattern Analysis", description: "Analyzes communication patterns and identifies manipulation tactics." },
      { title: "Financial Risk Assessment", description: "Detects requests for money or financial assistance that may indicate fraud." },
    ],
    outputDescription: "The API provides comprehensive romance scam detection with risk scores and detailed analysis of suspicious behavior.",
  },
  advantages: {
    headline: "Why Choose RomanceGuard™?",
    items: [
      { icon: "Zap", title: "Real-Time Protection", description: "Monitors conversations and profiles in real-time for immediate threat detection." },
      { icon: "Target", title: "High Accuracy", description: "97% accuracy in detecting romance scams with minimal false positives." },
      { icon: "Globe", title: "Multi-Platform Support", description: "Works across all major dating apps and social media platforms." },
      { icon: "BrainCircuit", title: "Emotional Intelligence", description: "AI-powered system that understands emotional manipulation patterns." },
    ],
  },

  cta: {
    headline: "Protect Your Heart",
    description: "Don't let romance scammers break your heart and empty your wallet. Stay safe while dating online.",
    primary: { text: "Get Protected", href: "/demo" },
  },
  backgroundImage: "/romance-scam-background.webp",
};

export default function RomanceScamPage() {
  return <ScamTypePage data={romanceScamPageData} />;
}
