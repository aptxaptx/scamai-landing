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
    headline: "Deepfake Detection\nThat Actually Works",
    subtitle: "Advanced model catches over 90% of sota deepfakes.\nKeep your research safe. Keep authenticity intact.",
    tags: ["GenAI", "Deepfake", "Faceswap"],
    visual: {
      type: "video",
      src: "/deepfake_scamai.webm",
    },
  },
  problemSection: {
    headline: "Over 90% Detection Tools\nFailed to Catch Deepfakes",
    description: "Traditional detection can't keep up with AI-generated fraud. Sophisticated deepfakes now bypass standard verification with ease.",
    additionalContent: "While most tools fail to detect these forgeries, researchers face authenticity concerns and trust issues. You need detection that actually works.",
    visual: {
      type: "video",
      src: "/dashboard.webm",
    },
    valueProps: [
      { title: "Stop fake content", description: "Block deepfake videos and manipulated media." },
      { title: "Ensure authenticity", description: "Verify content integrity for research." },
      { title: "Research confidence", description: "Clear, reliable detection signals." },
    ],
  },
  solution: {
    productName: "Deepfake Defender™",
    headline: "Our Solution: Deepfake Defender™",
    description: "Deepfake Defender™ is a specialized AI model engineered to identify the subtle, microscopic traces left behind by generative tools, operating on a level beyond human perception.",
    coreDimensions: [
      { title: "Artifact Analysis", description: "Detects flaws in texture, lighting, and edges invisible to the human eye." },
      { title: "Temporal Consistency", description: "Verifies that motion, expressions, and biometrics are consistent across video frames." },
      { title: "Model Fingerprinting", description: "Identifies unique digital signatures left by specific generative models." },
    ],
    outputDescription: "The API returns a clean JSON object with a risk score, confidence level, and actionable evidence.",
  },
  advantages: {
    headline: "Why Choose Deepfake Defender™?",
    items: [
      { icon: "Zap", title: "Real-time Performance", description: "Millisecond latency for high-concurrency operations." },
      { icon: "Target", title: "Precision & Accuracy", description: "Industry-leading accuracy, trained on vast proprietary datasets." },
      { icon: "Globe", title: "Robust Coverage", description: "Reliable performance across diverse formats, qualities, and languages." },
      { icon: "BrainCircuit", title: "Constant Evolution", description: "Continuously updated by our ScamNet DB™ to counter emerging threats." },
    ],
  },
  useCases: {
    headline: "Applications & Use Cases",
    items: ["Research Verification", "Media Authenticity", "Content Analysis", "Academic Studies"],
  },
  apiSection: {
    headline: "Simple & Powerful API",
    description: "Integrate advanced detection capabilities with just a few lines of code. Our API is built for developer productivity and research scale.",
    codeExample: {
      request: '{\n  "asset_uri": "https://example.com/research_video.mp4"\n}',
      response: '{\n  "request_id": "vid-abc-456",\n  "is_synthetic": true,\n  "confidence_score": 0.998,\n  "evidence": [\n    {\n      "region_coords": [450, 150, 250, 250],\n      "reason_code": "unnatural_eye_blinking"\n    }\n  ]\n}',
    },
  },
  cta: {
    headline: "Research with confidence.",
    description: "Add an extra layer of authenticity verification to your research process.",
    primary: { text: "Schedule a Demo", href: "https://cal.com/scamai/25min?overlayCalendar=true" },
  },
  backgroundImage: "/deepfake.webp",
};

export default function DeepfakesPage() {
  return <ProductPage data={deepfakePageData} />;
}
