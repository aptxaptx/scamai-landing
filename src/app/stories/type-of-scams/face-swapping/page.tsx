import { ScamTypePage, ScamTypePageProps } from "../scamType";

export const metadata = { title: "Face Swapping Scam — ScamAI" };

const faceSwappingPageData: ScamTypePageProps = {
  metadata: {
    title: "Face Swapping Scam — ScamAI",
    description: "Learn about face swapping scams and how ScamAI protects against deepfake video fraud.",
  },
  breadcrumb: {
    parentPath: "/stories/type-of-scams",
    parentName: "Types of Scams",
    currentName: "Face Swapping Scam",
    nextPath: "/stories/type-of-scams/ai-generated-images",
    nextName: "AI-Generated Images Scam",
  },
  hero: {
    category: "Deepfake Video Fraud",
    headline: "Face Swapping Scams\nWhen Faces Become Masks",
    subtitle: "Advanced AI technology can seamlessly swap faces in videos,\ncreating convincing deepfakes used for blackmail, fraud, and disinformation.",
    tags: ["Deepfake", "Face Swap", "Video Fraud", "AI Manipulation"],
    visual: {
      type: "video",
      src: "/face-swap-demo.webm",
    },
  },
  problemSection: {
    headline: "The Threat: Anyone Can Wear\nAnyone's Face",
    description: "Face swapping technology has become so sophisticated that it can create videos indistinguishable from reality. Scammers use these deepfakes to impersonate public figures, business leaders, and even family members.",
    visual: {
      type: "image",
      src: "/face-swap-threat.webp",
      alt: "Face swapping threat landscape",
    },
    dataPoint: "Research shows that 96% of people cannot distinguish between real and deepfake videos without specialized tools.",
  },
  threatLandscape: {
    headline: "The Deepfake Video Epidemic",
    description: "Face swapping technology is becoming more accessible and convincing, making it easier for scammers to create believable fake content.",
    keyThreats: [
      { icon: "ShieldAlert", text: "Celebrity Impersonation", description: "Attackers create fake videos of celebrities to promote scams or damage reputations." },
      { icon: "Briefcase", text: "Business Executive Fraud", description: "Deepfake videos of CEOs authorizing fraudulent transactions or making false statements." },
      { icon: "MessageSquareWarning", text: "Personal Blackmail", description: "Fake videos created to extort money or sensitive information from victims." },
    ],
  },
  solution: {
    productName: "FaceGuard™",
    headline: "Our Solution: FaceGuard™ — The Deepfake Detection Expert",
    description: "FaceGuard™ uses advanced computer vision and AI to detect face swapping by analyzing facial geometry, lighting inconsistencies, and temporal artifacts.",
    coreDimensions: [
      { title: "Facial Geometry Analysis", description: "Detects unnatural facial proportions and inconsistent facial landmarks across video frames." },
      { title: "Lighting Consistency Check", description: "Analyzes lighting patterns and shadows to identify artificial face overlays." },
      { title: "Temporal Artifact Detection", description: "Identifies frame-to-frame inconsistencies that reveal face swapping manipulation." },
    ],
    outputDescription: "The API provides real-time deepfake detection with confidence scores and detailed analysis of suspicious video segments.",
  },
  advantages: {
    headline: "Why Choose FaceGuard™?",
    items: [
      { icon: "Zap", title: "Real-Time Processing", description: "Analyzes video streams in real-time with minimal latency for live content." },
      { icon: "Target", title: "High Detection Rate", description: "99.2% accuracy in detecting face swapping with low false positive rates." },
      { icon: "Globe", title: "Multi-Format Support", description: "Works with all video formats and compression levels." },
      { icon: "BrainCircuit", title: "Adaptive Learning", description: "Continuously improves detection capabilities against new face swapping techniques." },
    ],
  },

  cta: {
    headline: "Stop Face Swapping Fraud",
    description: "Protect yourself and your organization from deepfake video manipulation.",
    primary: { text: "Start Protection", href: "/demo" },
  },
  backgroundImage: "/face-swap-background.webp",
};

export default function FaceSwappingPage() {
  return <ScamTypePage data={faceSwappingPageData} />;
}
