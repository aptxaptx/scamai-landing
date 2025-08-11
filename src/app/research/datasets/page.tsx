import { ProductPage, ProductPageProps } from "../ProductPage";

export const metadata = { title: "Research Datasets — ScamAI" };

const datasetsPageData: ProductPageProps = {
  metadata: {
    title: "Research Datasets — ScamAI",
    description: "Access curated research datasets for scam detection and fraud analysis studies.",
  },
  breadcrumb: {
    parentPath: "/research",
    parentName: "Research",
    currentName: "Datasets",
    nextPath: "/research/publication",
    nextName: "Publications",
  },
  hero: {
    category: "Research Datasets for Academic Use",
    headline: "Curated Research Datasets\nFor Fraud Detection Studies",
    subtitle: "Access high-quality, labeled datasets for your research.\nAccelerate your fraud detection research.",
    tags: ["Research Data", "Labeled Datasets", "Academic"],
    visual: {
      type: "image",
      src: "/visual.webp",
      alt: "Research datasets visualization",
    },
  },
  problemSection: {
    headline: "Quality Research Data\nIs Hard to Find",
    description: "Researchers often struggle to find high-quality, labeled datasets for fraud detection research.",
    additionalContent: "Our curated datasets provide researchers with clean, well-labeled data that accelerates research and ensures reproducible results.",
    valueProps: [
      { title: "High-quality data", description: "Expertly curated and labeled research datasets." },
      { title: "Research-ready", description: "Pre-processed data ready for immediate use." },
      { title: "Diverse coverage", description: "Multiple fraud types and data modalities." },
    ],
  },
  solution: {
    productName: "Research Datasets™",
    headline: "Our Solution: Curated Research Datasets™",
    description: "Our Research Datasets provide academics and researchers with access to high-quality, expertly labeled data across multiple fraud detection domains.",
    coreDimensions: [
      { title: "Multi-Domain Coverage", description: "Datasets spanning text, image, audio, and video fraud detection." },
      { title: "Expert Labeling", description: "All data is professionally labeled by fraud detection experts." },
      { title: "Research Standards", description: "Datasets meet academic research quality standards." },
    ],
    outputDescription: "Downloadable datasets with comprehensive documentation and research guidelines.",
  },
  advantages: {
    headline: "Why Choose Our Research Datasets?",
    items: [
      { icon: "Target", title: "Research Quality", description: "Datasets designed specifically for academic research standards." },
      { icon: "Globe", title: "Comprehensive Coverage", description: "Multiple fraud types and detection scenarios covered." },
      { icon: "Zap", title: "Ready to Use", description: "Pre-processed and formatted for immediate research use." },
      { icon: "BrainCircuit", title: "Expert Validated", description: "All labels verified by fraud detection professionals." },
    ],
  },
  useCases: {
    headline: "Research Applications",
    items: ["Academic Studies", "Algorithm Development", "Benchmarking", "PhD Research"],
  },
  cta: {
    headline: "Get research datasets.",
    description: "Access high-quality, labeled datasets to accelerate your fraud detection research.",
    primary: { text: "Request Dataset Access", href: "https://cal.com/scamai/25min?overlayCalendar=true" },
  },
  backgroundImage: "/visual.webp",
};

export default function DatasetsPage() {
  return <ProductPage data={datasetsPageData} />;
}


