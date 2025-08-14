import { ScamTypePage, ScamTypePageProps } from "../scamType";

export const metadata = { title: "Voice Cloning Scam — ScamAI" };

const voiceCloningPageData: ScamTypePageProps = {
  metadata: {
    title: "Voice Cloning Scam — ScamAI",
    description: "Learn about voice cloning scams and how ScamAI protects against AI-generated voice fraud.",
  },
  breadcrumb: {
    parentPath: "/stories/type-of-scams",
    parentName: "Types of Scams",
    currentName: "Voice Cloning Scam",
    nextPath: "/stories/type-of-scams/face-swapping",
    nextName: "Face Swapping Scam",
  },
  hero: {
    category: "AI-Powered Voice Fraud",
    headline: "Voice Cloning Scams\nWhen Your Voice Becomes a Weapon",
    subtitle: "AI-generated voice replicas are being used to impersonate trusted individuals,\nstealing sensitive information and money through convincing phone calls and messages.",
    tags: ["Voice AI", "Impersonation", "Social Engineering", "Phone Fraud"],
    visual: {
      type: "image",
      src: "/voice-cloning.webp",
    },
  },
  problemSection: {
    headline: "The Threat: Your Voice Can Be Cloned\nIn Just Minutes",
    description: "Modern AI technology can create convincing voice replicas from just a few seconds of audio. Scammers use these cloned voices to bypass security measures and gain trust through familiar-sounding phone calls.",
    visual: {
      type: "image",
      src: "/voice-threat.webp",
      alt: "Voice cloning threat landscape",
    },
    dataPoint: "According to recent studies, AI voice cloning can now replicate a voice with 95% accuracy using just 3-5 seconds of audio.",
  },
  threatLandscape: {
    headline: "The Voice Cloning Challenge",
    description: "AI voice synthesis has become so advanced that it can replicate emotional nuances, accents, and speech patterns with frightening accuracy.",
    keyThreats: [
      { icon: "ShieldAlert", text: "Family Impersonation", description: "Attackers clone voices of loved ones to request emergency money transfers or sensitive information." },
      { icon: "Briefcase", text: "Business Executive Fraud", description: "Scammers impersonate CEOs or managers to authorize fraudulent transactions or access company systems." },
      { icon: "MessageSquareWarning", text: "Customer Service Bypass", description: "Using cloned voices to bypass identity verification in banking and financial services." },
    ],
  },
  solution: {
    productName: "VoiceGuard™",
    headline: "Our Solution: VoiceGuard™ — The Voice Authentication Expert",
    description: "VoiceGuard™ uses advanced audio forensics to detect AI-generated voices by analyzing subtle patterns that human ears cannot perceive.",
    coreDimensions: [
      { title: "Audio Artifact Analysis", description: "Detects unnatural patterns in frequency distribution and audio compression artifacts." },
      { title: "Emotional Consistency Detection", description: "Analyzes emotional expression patterns to identify artificial voice synthesis." },
      { title: "Biometric Voice Fingerprinting", description: "Creates unique voice signatures to distinguish real from cloned voices." },
    ],
    outputDescription: "The API returns real-time analysis with confidence scores and detailed detection of AI-generated voice characteristics.",
  },
  advantages: {
    headline: "Why Choose VoiceGuard™?",
    items: [
      { icon: "Zap", title: "Real-Time Detection", description: "Instant analysis during phone calls and voice messages with no delay." },
      { icon: "Target", title: "High Accuracy", description: "99.7% detection rate for AI-generated voices with minimal false positives." },
      { icon: "Globe", title: "Multi-Language Support", description: "Works across all languages and accents with consistent accuracy." },
      { icon: "BrainCircuit", title: "Continuous Learning", description: "Adapts to new voice cloning techniques and emerging threats." },
    ],
  },

  cta: {
    headline: "Protect Against Voice Cloning",
    description: "Don't let AI voices deceive you or your organization.",
    primary: { text: "Get Started", href: "/demo" },
  },
  backgroundImage: "/voice-background.webp",
};

export default function VoiceCloningPage() {
  return <ScamTypePage data={voiceCloningPageData} />;
}
