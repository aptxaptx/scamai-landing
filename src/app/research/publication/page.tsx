import { ProductPage, ProductPageProps } from "../ProductPage";

export const metadata = { title: "Publications — ScamAI" };

const publicationPageData: ProductPageProps = {
  metadata: {
    title: "Publications — ScamAI",
    description: "Academic publications and research papers on fraud detection and scam analysis.",
  },
  breadcrumb: {
    parentPath: "/research",
    parentName: "Research",
    currentName: "Publications",
  },
  hero: {
    category: "Academic Publications & Research Papers",
    headline: "Research Publications\n& Academic Papers",
    subtitle: "Explore our published research on fraud detection.\nStay updated with the latest academic findings.",
    tags: ["Academic Papers", "Research", "Publications"],
    visual: {
      type: "image",
      src: "/legal.webp",
      alt: "Research publications",
    },
  },
  problemSection: {
    headline: "Advancing Fraud Detection\nThrough Research",
    description: "Our research team publishes cutting-edge findings in top-tier academic conferences and journals.",
    additionalContent: "Stay up-to-date with the latest research developments in fraud detection, AI security, and scam analysis through our published work.",
    valueProps: [
      { title: "Peer-reviewed research", description: "High-quality research published in top venues." },
      { title: "Open science", description: "Sharing knowledge to advance the field." },
      { title: "Industry impact", description: "Research that translates to real-world applications." },
    ],
  },
  solution: {
    productName: "Research Publications™",
    headline: "Our Research Contributions",
    description: "Our research team actively contributes to the academic community through high-quality publications in fraud detection, AI security, and scam analysis.",
    coreDimensions: [
      { title: "Fraud Detection", description: "Novel approaches to detecting various types of fraud and scams." },
      { title: "AI Security", description: "Research on securing AI systems against adversarial attacks." },
      { title: "Dataset Contributions", description: "Publishing new datasets for the research community." },
    ],
    outputDescription: "Access to published papers, datasets, and code repositories for reproducible research.",
  },
  advantages: {
    headline: "Why Follow Our Research?",
    items: [
      { icon: "Target", title: "Cutting-edge Methods", description: "Latest techniques in fraud detection and AI security." },
      { icon: "Globe", title: "Real-world Impact", description: "Research that addresses practical fraud detection challenges." },
      { icon: "BrainCircuit", title: "Open Science", description: "Code and datasets made available for reproducibility." },
      { icon: "Zap", title: "Industry Relevant", description: "Research informed by real-world fraud patterns." },
    ],
  },
  useCases: {
    headline: "Research Areas",
    items: ["Deepfake Detection", "Scam Text Analysis", "Voice Clone Detection", "Fraud Pattern Mining"],
  },
  cta: {
    headline: "Collaborate with us.",
    description: "Interested in research collaboration or accessing our published work? Get in touch.",
    primary: { text: "Contact Research Team", href: "/demo" },
  },
  backgroundImage: "/legal.webp",
};

export default function PublicationPage() {
  return <ProductPage data={publicationPageData} />;
}


