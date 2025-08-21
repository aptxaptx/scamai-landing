import { ProductPage, ProductPageProps } from "../ProductPage";

export const metadata = { title: "Deepfakes (Faceswap) — ScamAI" };

const deepfakePageData: ProductPageProps = {
  metadata: {
    title: "Deepfakes (Faceswap) — ScamAI",
    description: "Detect deepfakes and faceswaps with ScamAI's advanced real-time detection.",
  },
  breadcrumb: {
    parentPath: "/research",
    parentName: "Research",
    currentName: "Deepfakes (Faceswap)",
    nextPath: "/research/ai-generated-media",
    nextName: "AI-Generated Media",
  },
  hero: {
    category: "Deepfake Detection Model",
    headline: "Defending the Truth in Human Face",
    subtitle: "Real-Time Deepfake Detection",
    description: "Scam.ai's Video Integrity™ model analyzes video and images frame-by-frame, providing instant, precise alerts before deepfake content can cause identity fraud or reputational damage.",
    tags: ["GenAI", "Deepfake", "Faceswap", "Video Integrity"],
    visual: {
      type: "video",
      src: "/deepfake_scamai.webm",
    },
  },
  problemSection: {
    headline: "The Threat: \"Seeing is Believing\" Is a Thing of the Past",
    description: "Today, creating a deepfake video convincing enough to fool human eyes—and even traditional bank KYC systems—costs just a few dollars. Is your verification process ready for this challenge?",
    visual: {
      type: "image",
      src: "/visual.webp",
      alt: "Deepfake threat landscape",
    },
    valueProps: [
      { title: "Identity Verification Fraud (KYC Fraud)", description: "Attackers use dynamic, fake face videos to bypass \"liveness detection\" checks at financial institutions and exchanges." },
      { title: "Executive Impersonation", description: "Forging the likeness of a CEO or CFO in a video conference to issue fraudulent directives." },
      { title: "Disinformation & News Manipulation", description: "Maliciously creating videos of public figures to cause social panic or damage a company's reputation." },
    ],
  },
  solution: {
    productName: "Video Integrity™",
    headline: "Video Integrity™ — The Digital Forensics Expert",
    description: "Video Integrity™ employs a multi-dimensional analysis engine, acting like a seasoned digital forensics expert to catch the microscopic flaws left behind by AI generation models—flaws that are invisible to the naked eye.",
    coreDimensions: [
      { title: "Spatial Artifact Analysis", description: "Detects unnatural transitions and flaws in facial features, lighting reflections, and skin textures." },
      { title: "Temporal Consistency Detection", description: "Analyzes the consistency of micro-expressions, blink rates, and even pulse-related color changes in skin between video frames to see if they align with real human physiology." },
      { title: "Generative Model Fingerprinting", description: "Identifies the unique, underlying pixel patterns or \"digital fingerprints\" left by specific AI generation models (like StyleGAN, Diffusion Models)." },
    ],
    outputDescription: "The API returns a JSON object in real-time, containing an \"is_deepfake\" boolean, a \"confidence_score\", and the coordinates of \"suspicious_regions\".",
  },
  advantages: {
    headline: "Why Choose Video Integrity™?",
    items: [
      { icon: "Zap", title: "Millisecond-Level Response", description: "Optimized for real-time communications like phone calls and voice chat, ensuring instant detection with no perceivable latency." },
      { icon: "Target", title: "Unparalleled Accuracy", description: "Trained on the world's largest proprietary database of synthetic and real video data, achieving industry-leading low false-positive and high-recall rates." },
      { icon: "Globe", title: "Exceptional Robustness", description: "Maintains stable, high-performance detection even in noisy environments, across various network compression formats (like VoIP), and in multiple languages." },
      { icon: "BrainCircuit", title: "Constantly Evolving", description: "Our model continuously learns from the latest global scam attempts and emerging cloning techniques, allowing it to self-evolve and always stay one step ahead of attackers." },
    ],
  },
  useCases: {
    headline: "Use Cases & Applications",
    items: ["Financial Services (Remote Onboarding/KYC)", "Video Conferencing Security", "Insurance Industry (Remote Claims Verification)", "News & Social Media (Content Authenticity)"],
  },
  cta: {
    headline: "Take the Next Step",
    description: "Protect your organization with advanced deepfake detection.",
    primary: { text: "Request a Demo", href: "/demo" },
  },
  backgroundImage: "/deepfake.webp",
};

export default function DeepfakesPage() {
  return <ProductPage data={deepfakePageData} />;
}