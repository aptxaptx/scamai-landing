"use client";

import SiteShell from "@/components/SiteShell";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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
    image: "/dating.webp",
    category: "Dataset"
  }
];

export default function PublicationPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'publications' | 'datasets'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'alphabetical-az' | 'alphabetical-za'>('newest');
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSortDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const allItems = [
    ...papers.map(paper => ({ ...paper, type: 'paper' as const })),
    ...datasets.map(dataset => ({ ...dataset, type: 'dataset' as const }))
  ];

  // Apply filters
  const filteredItems = allItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'publications') return item.type === 'paper';
    if (activeFilter === 'datasets') return item.type === 'dataset';
    return true;
  });

  // Apply sorting
  const sortedItems = filteredItems.sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'alphabetical-az':
        return a.title.localeCompare(b.title);
      case 'alphabetical-za':
        return b.title.localeCompare(a.title);
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

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
      <section className="mt-8 mb-8 mr-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-white text-black font-medium' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              All ({allItems.length})
            </button>
            <button
              onClick={() => setActiveFilter('publications')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === 'publications' 
                  ? 'bg-white text-black font-medium' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Publications ({papers.length})
            </button>
            <button
              onClick={() => setActiveFilter('datasets')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === 'datasets' 
                  ? 'bg-white text-black font-medium' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Datasets ({datasets.length})
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/50 text-sm">Sort by:</span>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
              >
                {sortBy === 'newest' && 'Newest → Oldest'}
                {sortBy === 'oldest' && 'Oldest → Newest'}
                {sortBy === 'alphabetical-az' && 'Alphabetical (A-Z)'}
                {sortBy === 'alphabetical-za' && 'Alphabetical (Z-A)'}
                <svg className={`w-4 h-4 transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                </svg>
              </button>
              
              {sortDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                  <button
                    onClick={() => {
                      setSortBy('newest');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-3 ${
                      sortBy === 'newest' ? 'text-blue-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      sortBy === 'newest' ? 'border-blue-600' : 'border-gray-300'
                    }`}>
                      {sortBy === 'newest' && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                    </div>
                    Newest → Oldest
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('oldest');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-3 ${
                      sortBy === 'oldest' ? 'text-blue-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      sortBy === 'oldest' ? 'border-blue-600' : 'border-gray-300'
                    }`}>
                      {sortBy === 'oldest' && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                    </div>
                    Oldest → Newest
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('alphabetical-az');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-3 ${
                      sortBy === 'alphabetical-az' ? 'text-blue-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      sortBy === 'alphabetical-az' ? 'border-blue-600' : 'border-gray-300'
                    }`}>
                      {sortBy === 'alphabetical-az' && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                    </div>
                    Alphabetical (A-Z)
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('alphabetical-za');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-3 ${
                      sortBy === 'alphabetical-za' ? 'text-blue-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      sortBy === 'alphabetical-za' ? 'border-blue-600' : 'border-gray-300'
                    }`}>
                      {sortBy === 'alphabetical-za' && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                    </div>
                    Alphabetical (Z-A)
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="mr-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <Link
              key={`${item.type}-${item.id}`}
              href={item.type === 'paper' 
                ? `/research/publication/paper/${item.id}` 
                : item.downloadUrl
              }
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
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-md border border-white/20">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-white/70 mb-3">
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
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


