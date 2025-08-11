import SiteShell from "@/components/SiteShell";
import Link from "next/link";

export const metadata = { title: "Publications — ScamAI" };

// Sample data for papers and datasets
const papers = [
  {
    id: 1,
    title: "Advanced Deepfake Detection Using Multi-Modal Analysis",
    authors: "Smith, J., Johnson, A., Williams, R.",
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2024,
    date: "March 15, 2024",
    description: "A comprehensive approach to detecting deepfakes using combined visual and audio analysis techniques.",
    pdfUrl: "/papers/deepfake-detection-2024.pdf",
    tags: ["Deepfake", "Computer Vision", "Multi-Modal"],
    image: "/deepfake.webp",
    category: "Research"
  },
  {
    id: 2,
    title: "ScamNet: Large-Scale Fraud Detection in Digital Communications",
    authors: "Brown, M., Davis, K., Miller, S.",
    venue: "ACM Conference on Computer and Communications Security (CCS)",
    year: 2024,
    date: "October 8, 2024",
    description: "Novel neural network architecture for detecting fraudulent communications at scale.",
    pdfUrl: "/papers/scamnet-2024.pdf",
    tags: ["Fraud Detection", "Neural Networks", "NLP"],
    image: "/fakenews.webp",
    category: "Publication"
  },
  {
    id: 3,
    title: "Voice Clone Detection: Challenges and Solutions",
    authors: "Wilson, T., Anderson, L., Taylor, P.",
    venue: "International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
    year: 2023,
    date: "June 22, 2023",
    description: "Comprehensive study on detecting synthetic voice clones with state-of-the-art accuracy.",
    pdfUrl: "/papers/voice-clone-detection-2023.pdf",
    tags: ["Voice Cloning", "Audio Processing", "Detection"],
    image: "/GenAI.webp",
    category: "Safety"
  }
];

const datasets = [
  {
    id: 1,
    title: "DeepFake-1M Dataset",
    description: "Large-scale dataset containing 1 million labeled deepfake and authentic video samples",
    size: "2.5 TB",
    samples: "1,000,000",
    domains: ["Video", "Face Manipulation"],
    downloadUrl: "/datasets/deepfake-1m",
    date: "January 10, 2024",
    image: "/visual.webp",
    category: "Dataset"
  },
  {
    id: 2,
    title: "ScamText-100K",
    description: "Comprehensive collection of labeled scam and legitimate text messages across multiple languages",
    size: "150 MB", 
    samples: "100,000",
    domains: ["Text", "Multilingual", "Fraud"],
    downloadUrl: "/datasets/scamtext-100k",
    date: "February 20, 2024",
    image: "/scamdb.webp",
    category: "Dataset"
  },
  {
    id: 3,
    title: "VoiceClone-50K",
    description: "Audio dataset featuring original and cloned voice samples for detection research",
    size: "800 GB",
    samples: "50,000",
    domains: ["Audio", "Voice Synthesis"],
    downloadUrl: "/datasets/voiceclone-50k",
    date: "December 5, 2023",
    image: "/dashboard.webm",
    category: "Dataset"
  }
];

export default function PublicationPage() {
  const allItems = [
    ...papers.map(paper => ({ ...paper, type: 'paper' as const })),
    ...datasets.map(dataset => ({ ...dataset, type: 'dataset' as const }))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl backdrop-blur-sm">
        <div className="relative z-10 text-center p-10 md:p-16 lg:p-20">
          <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-white/80 bg-white/10 rounded-full">
            Research
          </div>
          <h1 className="text-[clamp(32px,7vw,64px)] font-bold tracking-tight">
            Publications & Datasets
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(15px,2.2vw,20px)] max-w-3xl mx-auto">
            Our latest research papers and datasets advancing fraud detection and AI security.
          </p>
        </div>
      </section>

      {/* Filter/Sort Bar */}
      <section className="mt-8 mb-8">
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
          <span>All</span>
          <span>Publications</span>
          <span>Datasets</span>
          <div className="ml-auto flex items-center gap-4">
            <span>Filter</span>
            <span>Sort</span>
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="mr-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allItems.map((item) => (
            <Link
              key={`${item.type}-${item.id}`}
              href={item.type === 'paper' 
                ? `/research/publication/paper/${item.id}` 
                : item.downloadUrl
              }
              className="group block"
            >
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 group-hover:-translate-y-1">
                {/* Image */}
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-4">
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>

                  {item.type === 'dataset' && (
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span>{item.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samples:</span>
                        <span>{item.samples}</span>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="mt-16 text-center mr-8">
        <div className="bg-white/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Collaborate with Our Research Team
          </h2>
          <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
            Interested in research collaboration, dataset access, or discussing our publications? Get in touch with our research team.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
          >
            Contact Research Team
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}


