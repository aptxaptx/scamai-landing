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
    nextName: "Scam Text Detection",
  },
  hero: {
    category: "Research Solutions for Voice Clone Detection",
    headline: "Voice Clone Detection\n& Audio Verification",
    subtitle: "Identify synthetic voices and cloned audio.\nProtect against voice-based fraud in research.",
    tags: ["Voice AI", "Audio Synthesis", "Detection"],
  },
  problemSection: {
    headline: "Voice Cloning Technology\nIs Getting Sophisticated",
    description: "Modern voice cloning can create convincing audio from just a few seconds of source material.",
    additionalContent: "Researchers need reliable tools to verify audio authenticity and detect synthetic voices that could compromise research integrity.",
    valueProps: [
      { title: "Detect voice clones", description: "Identify synthetic and cloned audio content." },
      { title: "Verify authenticity", description: "Ensure audio integrity in research." },
      { title: "Protect research", description: "Safeguard against voice-based manipulation." },
    ],
  },
  solution: {
    productName: "Voice Authenticity™",
    headline: "Our Solution: Voice Authenticity™",
    description: "Voice Authenticity™ analyzes audio patterns, vocal characteristics, and synthesis artifacts to detect cloned and synthetic voices with high accuracy.",
    coreDimensions: [
      { title: "Vocal Pattern Analysis", description: "Examines unique vocal characteristics and speech patterns." },
      { title: "Synthesis Detection", description: "Identifies artifacts left by voice synthesis algorithms." },
      { title: "Biometric Verification", description: "Compares against known voice biometric signatures." },
    ],
    outputDescription: "Provides detailed analysis with confidence scores and specific indicators of voice manipulation.",
  },
  advantages: {
    headline: "Why Choose Voice Authenticity™?",
    items: [
      { icon: "Target", title: "High Precision", description: "Advanced detection algorithms trained on diverse voice datasets." },
      { icon: "Zap", title: "Real-time Analysis", description: "Fast processing suitable for live audio verification." },
      { icon: "Globe", title: "Language Agnostic", description: "Works across multiple languages and accents." },
      { icon: "BrainCircuit", title: "Evolving Technology", description: "Continuously updated to detect new voice synthesis methods." },
    ],
  },
  useCases: {
    headline: "Research Applications",
    items: ["Audio Verification", "Interview Authenticity", "Research Integrity", "Media Forensics"],
  },
  apiSection: {
    headline: "Audio Analysis API",
    description: "Integrate voice clone detection into your research workflow with our comprehensive audio analysis API.",
    codeExample: {
      request: '{\n  "audio_url": "https://example.com/research_audio.wav"\n}',
      response: '{\n  "request_id": "aud-ghi-012",\n  "is_synthetic": false,\n  "confidence_score": 0.847,\n  "analysis": {\n    "voice_consistency": 0.92,\n    "synthesis_artifacts": 0.15,\n    "biometric_match": 0.88\n  }\n}',
    },
  },
  cta: {
    headline: "Verify voices with confidence.",
    description: "Ensure audio authenticity in your research with our advanced voice verification technology.",
    primary: { text: "Schedule a Demo", href: "https://cal.com/scamai/25min?overlayCalendar=true" },
  },
};

export default function VoiceClonesPage() {
  return <ProductPage data={voiceClonesPageData} />;
}
