import { ProductPage, ProductPageProps } from "../ProductPage";

export const metadata = { title: "Voice Cloning — ScamAI" };

const voiceClonesPageData: ProductPageProps = {
  metadata: {
    title: "Voice Cloning — ScamAI",
    description: "Detect voice cloning and synthetic audio with ScamAI's advanced detection technology.",
  },
  breadcrumb: {
    parentPath: "/research",
    parentName: "Research",
    currentName: "Voice Clones",
    nextPath: "/research/scam-text-detection",
    nextName: "Messages",
  },
  hero: {
    category: "Research Solutions for Voice Clone Detection",
    headline: "Real-Time AI Voice Clone Detection\nSecure Every Conversation",
    subtitle: "Scam.ai's cutting-edge voice clone detection model instantly identifies synthetic speech and deepfake audio,\nstopping fraud before it happens.",
    tags: ["Voice AI", "Audio Synthesis", "Detection", "Auditory Guardian"],
    visual: {
      type: "image",
      src: "/visual.webp",
      alt: "Voice clone detection visualization",
    },
  },
  problemSection: {
    headline: "The Threat is Here:\nCan You Trust What You Hear?",
    description: "With as little as a 3-second audio sample, modern generative models can synthesize convincing voice clones that are nearly indistinguishable to the human ear. This introduces critical risks across financial services, enterprise operations, and personal communications, where trust and authenticity are paramount.",
    visual: {
      type: "image",
      src: "/visual.webp",
      alt: "Soundwave visual",
    },
    valueProps: [
      { title: "Financial Fraud (Vishing)", description: "Attackers use voice clones to socially engineer victims and authorize fraudulent transactions." },
      { title: "Corporate & Internal Fraud", description: "Executive impersonation and vendor spoofing expose organizations to high-risk payouts." },
      { title: "Personal Attacks", description: "Highly targeted harassment and extortion campaigns leverage synthetic audio for intimidation." },
    ],
  },
  threatLandscape: {
    headline: "The Challenge of Synthetic Audio",
    description: "Voice cloning technology has reached a point where synthetic audio can fool human listeners, creating unprecedented security challenges for voice-based authentication and communication.",
    keyThreats: [
      { icon: "ShieldAlert", text: "Financial Fraud (Vishing)" },
      { icon: "Briefcase", text: "Corporate & Internal Fraud" },
      { icon: "MessageSquareWarning", text: "Disinformation Campaigns" },
    ],
    dataPoint: "Voice clone attacks are rapidly increasing across industries, with sophisticated attacks becoming more accessible and harder to detect.",
  },
  solution: {
    productName: "Auditory Guardian™",
    headline: "Our Solution: The Auditory Guardian™",
    description: "Scam.ai's Auditory Guardian™ is an intelligent defense system purpose-built to detect synthetic speech. It analyzes the acoustic and spectral footprint of audio to uncover the microscopic traces left by generative models—going far beyond human perception.",
    coreDimensions: [
      { title: "Acoustic Fingerprinting", description: "Identifies unique timbral and phase characteristics introduced during synthesis, revealing non-human production artifacts." },
      { title: "Spectrogram Anomaly Detection", description: "Locates unnatural harmonics, temporal smearing, and spectral inconsistencies that diverge from organic speech patterns." },
      { title: "Generative Artifact Recognition", description: "Detects telltale signatures of specific model families and pipelines, helping attribute likely generation methods." },
    ],
    outputDescription: "Each analysis returns a Trust Score with supporting evidence, enabling rapid triage, escalation, or automated action within your workflows.",
  },
  advantages: {
    headline: "Our Advantage: Why Choose Auditory Guardian™?",
    items: [
      { icon: "Zap", title: "Millisecond-Level Response", description: "Low-latency detection suitable for live communication and contact centers." },
      { icon: "Target", title: "Unparalleled Accuracy", description: "Trained on diverse datasets for high precision across accents and environments." },
      { icon: "Globe", title: "Exceptional Robustness", description: "Resilient to compression, noise, and transmission artifacts common in real-world audio." },
      { icon: "BrainCircuit", title: "Constantly Evolving", description: "Continuously updated models that adapt to the latest cloning techniques." },
    ],
  },
  useCases: {
    headline: "Use Cases: Empowering Industries",
    items: ["Banking & Finance", "Corporate Communications Security", "Social Media & Content Platforms", "Intelligent Contact Centers"],
  },
  apiSection: {
    headline: "Seamless Integration, Instant Deployment",
    description: "With our well-designed REST API, integrate AI voice clone detection in minutes, not months. Built for developer productivity and enterprise scale.",
    codeExample: {
      request: 'POST /v1/audio/detect\nContent-Type: application/json\n\n{\n  "asset_uri": "https://example.com/call.wav"\n}',
      response: 'HTTP/1.1 200 OK\n\n{\n  "request_id": "aud-xyz-123",\n  "is_clone": true,\n  "confidence_score": 0.996,\n  "evidence": [\n    {\n      "segment": [2.5, 5.7],\n      "reason_code": "spectral_inconsistency"\n    }\n  ]\n}',
    },
  },
  cta: {
    headline: "Take the Next Step",
    description: "Protect your organization with advanced voice clone detection.",
    primary: { text: "Request a Demo", href: "/demo" },
  },
  backgroundImage: "/visual.webp",
};

export default function VoiceClonesPage() {
  return <ProductPage data={voiceClonesPageData} />;
}
