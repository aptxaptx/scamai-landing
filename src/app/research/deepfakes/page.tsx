import { ProductPage, ProductPageProps } from "../ProductPage";

export const metadata = { title: "Deepfakes/Faceswap — ScamAI" };

const deepfakePageData: ProductPageProps = {
  metadata: {
    title: "Deepfakes/Faceswap — ScamAI",
    description: "Detect deepfakes and faceswap manipulation with ScamAI's advanced detection technology.",
  },
  breadcrumb: {
    parentPath: "/research",
    parentName: "Research",
    currentName: "Deepfakes/Faceswap",
    nextPath: "/research/ai-generated-media",
    nextName: "AI-Generated Media",
  },
  hero: {
    category: "Research Solutions for Deepfake Detection",
    headline: "Real-Time Deepfake Detection\nDefending the Truth in Visual Content",
    subtitle: "Scam.ai's Video Integrity™ model analyzes video and images frame-by-frame,\nproviding instant, precise alerts before deepfake content can cause identity fraud or reputational damage.",
    tags: ["GenAI", "Deepfake", "Faceswap", "Video Integrity"],
    visual: {
      type: "video",
      src: "/deepfake_scamai.webm",
    },
  },
  problemSection: {
    headline: "The Threat: \"Seeing is Believing\"\nIs a Thing of the Past",
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
  threatLandscape: {
    headline: "The Challenge of Synthetic Media",
    description: "Sophisticated AI can now generate content nearly indistinguishable from reality, creating unprecedented risks for research integrity and authenticity verification.",
    keyThreats: [
      { icon: "ShieldAlert", text: "Identity Verification Fraud" },
      { icon: "Briefcase", text: "Executive Impersonation" },
      { icon: "MessageSquareWarning", text: "Disinformation & News Manipulation" },
    ],
    dataPoint: "According to Gartner, up to 30% of video and image content in corporate communications will be synthetically altered by AI by 2026.",
  },
  solution: {
    productName: "Video Integrity™",
    headline: "Our Solution: Video Integrity™ — The Digital Forensics Expert",
    description: "Video Integrity™ employs a multi-dimensional analysis engine, acting like a seasoned digital forensics expert to catch the microscopic flaws left behind by AI generation models—flaws that are invisible to the naked eye.",
    coreDimensions: [
      { title: "Spatial Artifact Analysis", description: "Detects unnatural transitions and flaws in facial features, lighting reflections, and skin textures." },
      { title: "Temporal Consistency Detection", description: "Analyzes the consistency of micro-expressions, blink rates, and even pulse-related color changes in skin between video frames to see if they align with real human physiology." },
      { title: "Generative Model Fingerprinting", description: "Identifies the unique, underlying pixel patterns or \"digital fingerprints\" left by specific AI generation models (like StyleGAN, Diffusion Models)." },
    ],
    outputDescription: "The API returns a JSON object in real-time, containing an \"is_deepfake\" boolean, a \"confidence_score\", and the coordinates of \"suspicious_regions\".",
  },
  advantages: {
    headline: "Our Advantage: Why Choose Video Integrity™?",
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
  apiSection: {
    headline: "Seamless Integration & Code Example",
    description: "Integrate Video Integrity™ easily with our clear and robust API.",
    codeExample: {
      request: '{\n  "video_url": "https://example.com/kyc_video.mp4"\n}',
      response: '{\n  "request_id": "vid-abc-456",\n  "is_deepfake": true,\n  "confidence_score": 0.998,\n  "suspicious_regions": [\n    {\n      "box_coordinates": [450, 150, 250, 250],\n      "reason": "Unnatural eye blinking pattern"\n    }\n  ]\n}',
    },
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
