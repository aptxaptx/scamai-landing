import { ProductPage, ProductPageProps } from "../../research/ProductPage";

export const metadata = { title: "Voice Cloning — ScamAI" };

const voiceClonesPageData: ProductPageProps = {
  metadata: {
    title: "Voice Cloning — ScamAI",
    description: "Detect AI voice clones and synthetic audio with ScamAI's real-time detection technology.",
  },
  breadcrumb: {
    parentPath: "/",
    parentName: "Home",
    currentName: "Voice Clones",
    nextPath: "/models/scam-text-detection",
    nextName: "Messages",
  },
  hero: {
    category: "AI Voice Clone Detection",
    headline: "Real-Time AI Voice Clone Detection",
    subtitle: "Secure Every Conversation",
    description: "Our Auditory Guardian™ model instantly identifies synthetic speech and deepfake audio, stopping voice-based fraud in real time.",
    tags: ["Voice AI", "Audio Synthesis", "Detection", "Auditory Guardian"],
    visual: {
      type: "image",
      src: "/visual.webp",
      alt: "Voice clone detection visualization",
    },
  },
  problemSection: {
    headline: "The Threat: Can You Trust What You Hear?",
    description: "With just seconds of audio, AI can create a convincing voice clone indistinguishable from the human ear. This enables a new vector for fraud in finance, enterprise, and personal communications.",
    visual: {
      type: "image",
      src: "/visual.webp",
      alt: "Soundwave visual",
    },
    valueProps: [
      { title: "Financial Fraud (Vishing)", description: "Attackers use voice clones to authorize fraudulent transactions." },
      { title: "Corporate Fraud", description: "Impersonating executives or vendors to approve high-risk payments." },
      { title: "Personal Attacks", description: "Using synthetic audio for highly targeted harassment and extortion." },
    ],
  },
  threatLandscape: {
    headline: "The Challenge of Synthetic Audio",
    description: "Voice cloning technology can now fool human listeners, creating unprecedented security challenges for voice-based authentication and communication.",
    keyThreats: [
      { icon: "ShieldAlert", text: "Financial Fraud (Vishing)" },
      { icon: "Briefcase", text: "Corporate & Internal Fraud" },
      { icon: "MessageSquareWarning", text: "Disinformation Campaigns" },
    ],
    dataPoint: "The accessibility of voice cloning technology is leading to a rapid increase in sophisticated vishing and impersonation attacks.",
  },
  solution: {
    productName: "Auditory Guardian™",
    headline: "Solution: Auditory Guardian™",
    description: "Auditory Guardian™ analyzes the acoustic and spectral footprint of audio to find microscopic traces left by AI voice generators, detecting what the human ear cannot.",
    coreDimensions: [
      { title: "Acoustic Fingerprinting", description: "Identifies non-human timbral and phase characteristics introduced during audio synthesis." },
      { title: "Spectrogram Anomaly Detection", description: "Locates unnatural harmonics and inconsistencies that differ from organic speech." },
      { title: "Generative Artifact Recognition", description: "Detects tell-tale signatures from specific AI models used to create the clone." },
    ],
    outputDescription: "The API returns a real-time verdict, confidence score, and evidence for automated action.",
  },
  advantages: {
    headline: "The Auditory Guardian™ Advantage",
    items: [
      { icon: "Zap", title: "Millisecond Response", description: "Provides low-latency detection suitable for live calls and contact centers." },
      { icon: "Target", title: "Unparalleled Accuracy", description: "Trained on diverse global datasets for high precision across different accents and languages." },
      { icon: "Globe", title: "Exceptional Robustness", description: "Resilient to compression, background noise, and other real-world audio artifacts." },
      { icon: "BrainCircuit", title: "Constantly Evolving", description: "Models are continuously updated to adapt to the latest voice cloning techniques." },
    ],
  },
  useCases: {
    headline: "Use Cases & Applications",
    items: ["Banking & Finance", "Corporate Communications Security", "Social Media & Content Platforms", "Intelligent Contact Centers"],
  },
  apiSection: {
    headline: "API Integration",
    description: "Ready to integrate Auditory Guardian™ into your platform? Our comprehensive API documentation provides everything you need to get started, including detailed endpoints, authentication, and code examples.",
    apiDocumentation: {
      text: "View Complete API Documentation",
      href: "https://docu.scam.ai/introduction",
    },
  },
  cta: {
    headline: "Secure Your Audio Channels",
    description: "Protect your users from voice-based fraud and impersonation.",
    primary: { text: "Request a Demo", href: "/demo" },
  },
  backgroundImage: "/visual.webp",
  overlayColor: "bg-purple-600/32",
};

export default function VoiceClonesPage() {
  return <ProductPage data={voiceClonesPageData} />;
}
