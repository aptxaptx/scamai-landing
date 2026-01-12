"use client";

import SiteShell from "@/components/SiteShell";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
// Removed unused imports

// Define scam types data
const scamTypes = [
  {
    id: "voice-cloning",
    title: "Voice Cloning Scam",
    description: "AI voice replicas impersonating trusted individuals to steal information.",
    category: "Voice AI",
    image: "/voice-cloning-scam.png",
    date: "2024-01-15",
    href: "/stories/type-of-scams/voice-cloning",
  },
  {
    id: "face-swapping",
    title: "Face Swapping Scam",
    description: "Deepfake videos and images used for blackmail and fraud.",
    category: "Video AI",
    image: "/face-swapping scam.png",
    date: "2024-01-14",
    href: "/stories/type-of-scams/face-swapping",
  },
  {
    id: "ai-generated-images",
    title: "AI-Generated Images Scam",
    description: "Synthetic media designed to deceive and manipulate victims.",
    category: "Image AI",
    image: "/AI-image-scam.png",
    date: "2024-01-13",
    href: "/stories/type-of-scams/ai-generated-images",
  },
  {
    id: "identity-theft",
    title: "Identity Theft Scam",
    description: "Stealing personal information for fraud and unauthorized purchases.",
    category: "Data Theft",
    image: "/identity-theft-scam.png",
    date: "2024-01-12",
    href: "/stories/type-of-scams/identity-theft",
  },
  {
    id: "financial-investment",
    title: "Financial Investment Scam",
    description: "Fake investment opportunities with unrealistic returns.",
    category: "Financial",
    image: "/financial-scam.png",
    date: "2024-01-11",
    href: "/stories/type-of-scams/financial-investment",
  },
  {
    id: "romance",
    title: "Romance Scam",
    description: "Fake online relationships to extract money and gifts.",
    category: "Social",
    image: "/romance-scam.png",
    date: "2024-01-10",
    href: "/stories/type-of-scams/romance",
  },
];

export default function TypeOfScamsPage() {
  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl backdrop-blur-sm">

        
        <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
          <h1 className="text-[clamp(32px,7vw,64px)] font-bold tracking-tight">
            Types of Scams
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(15px,2.2vw,20px)] max-w-3xl mx-auto">
            Understanding the different types of scams and how ScamAI protects against them.
          </p>
        </div>
      </section>

      {/* Items Grid */}
      <section className="mt-8 mr-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scamTypes.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group block"
            >
              <article className="rounded-xl overflow-hidden transition-all duration-200 h-full flex flex-col">
                {/* Image */}
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                
                {/* Content */}
                <div className="px-0 pt-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-white/70 mb-3">
                    {item.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

