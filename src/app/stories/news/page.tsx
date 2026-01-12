"use client";

import SiteShell from "@/components/SiteShell";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  link: string;
  source: string;
  publishedDate: string;
  backgroundImage: string;
  category: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "WARNING: Deepfake CEO Scams",
    summary: "Cybersecurity experts warn sophisticated scams are no longer futuristic, but a present-day threat requiring urgent safeguards.",
    link: "https://www.wsj.com/articles/ai-drives-rise-in-ceo-impersonator-scams-2bd675c4?gaa_at=eafs&gaa_n=ASWzDAg-W0QOlzm3Hy894fsd0yMKcrKT1FFIkQe0NgtT7NnHzjvidgLbWi8Hbnl8L9Q%3D&gaa_ts=68a630c3&gaa_sig=TrMPhMpwWpDZs5NOk8MWqEgFQAyO0M4HcwDownBifis2pwlXrLUk7wVCnVPFjIwYZssGPdG3lw_Lp85vNk-5_g%3D%3D",
    source: "WSJ",
    publishedDate: "2025-08-19",
    backgroundImage: "/wsj.webp",
    category: "Business Fraud",
  },
  {
    id: 2,
    title: "AI Deepfake Scandal at HKU",
    summary: "A law student at Hong Kong University allegedly used AI to create over 700 non-consensual deepfake pornographic images of classmates and teachers. Legal gap exposed.",
    link: "https://www.cbsnews.com/news/ai-generated-porn-scandal-university-of-hong-kong/",
    source: "University of Hong Kong",
    publishedDate: "2025-07-16",
    backgroundImage: "/hku.webp",
    category: "Deepfake Abuse",
  },
  {
    id: 3,
    title: "Dr. Sanjay Gupta Warns on AI Scam",
    summary: "Scammers used AI to create fake videos and images of CNN's Dr. Sanjay Gupta, promoting bogus health products in his name. Gupta responded publicly to warn people against the scam.",
    link: "https://www.cnn.com/2025/07/31/health/video/gupta-fake-ai-health-ads-digvid-16x9",
    source: "CNN News",
    publishedDate: "2025-08-01",
    backgroundImage: "/cnn.webp",
    category: "Celebrity Impersonation",
  },
  {
    id: 4,
    title: "AI Fakes Are Easier Than Ever",
    summary: "AI is making it easier than ever to fake voices and faces, threatening trust in politics, business, and media. Deepfakes of public figures like Marco Rubio show how real these impersonations can look.",
    link: "https://www.ap.org/news-highlights/spotlights/2025/creating-realistic-deepfakes-is-getting-easier-than-ever-fighting-back-may-take-even-more-ai/",
    source: "AP News",
    publishedDate: "2025-07-28",
    backgroundImage: "/apnews.webp",
    category: "Technology Threat",
  },
  {
    id: 5,
    title: "Why Spotting Dangerous AI Is More Urgent Than Ever",
    summary: "A World Economic Forum report warns that AI-powered impersonation marks the shift from disinformation to targeted attacks on business trust. From voice-cloning scams to deepfake fraud, unchecked AI is eroding trust.",
    link: "https://www.weforum.org/stories/2025/07/why-detecting-dangerous-ai-is-key-to-keeping-trust-alive/",
    source: "World Economic Forum",
    publishedDate: "2025-07-07",
    backgroundImage: "/wef.webp",
    category: "Policy & Regulation",
  },
  {
    id: 6,
    title: "Can You Tell What's Real?",
    summary: "AI video tools like Google's Veo 3 are now generating lifelike visuals and audio so realistic they blur the line between fact and fiction. Watch the clips below and see if you can tell which are real and which are AI-generated.",
    link: "https://www.nytimes.com/interactive/2025/06/29/business/ai-video-deepfake-google-veo-3-quiz.html?searchResultPosition=2",
    source: "The New York Times",
    publishedDate: "2025-06-29",
    backgroundImage: "/nyt.webp",
    category: "Technology Threat",
  },
  {
    id: 7,
    title: "Sexualized AI Images on Facebook",
    summary: "CBS News uncovered hundreds of ads across Facebook, Instagram, Threads, and Messenger promoting \"nudify\" AI tools that create sexualized images of real people without consent.",
    link: "https://www.cbsnews.com/news/meta-facebook-sexualized-ai-deepfake-celebrity-images-spread/",
    source: "CBS News",
    publishedDate: "2025-02-18",
    backgroundImage: "/meta.webp",
    category: "Deepfake Abuse",
  },
];

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'business-fraud' | 'deepfake-abuse' | 'celebrity-impersonation' | 'technology-threat' | 'policy-regulation'>('all');
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

  // Get unique categories and their counts
  const categories = {
    'all': newsData.length,
    'business-fraud': newsData.filter(item => item.category === 'Business Fraud').length,
    'deepfake-abuse': newsData.filter(item => item.category === 'Deepfake Abuse').length,
    'celebrity-impersonation': newsData.filter(item => item.category === 'Celebrity Impersonation').length,
    'technology-threat': newsData.filter(item => item.category === 'Technology Threat').length,
    'policy-regulation': newsData.filter(item => item.category === 'Policy & Regulation').length,
  };

  // Apply filters
  const filteredItems = newsData.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'business-fraud') return item.category === 'Business Fraud';
    if (activeFilter === 'deepfake-abuse') return item.category === 'Deepfake Abuse';
    if (activeFilter === 'celebrity-impersonation') return item.category === 'Celebrity Impersonation';
    if (activeFilter === 'technology-threat') return item.category === 'Technology Threat';
    if (activeFilter === 'policy-regulation') return item.category === 'Policy & Regulation';
    return true;
  });

  // Apply sorting
  const sortedItems = filteredItems.sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      case 'oldest':
        return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
      case 'alphabetical-az':
        return a.title.localeCompare(b.title);
      case 'alphabetical-za':
        return b.title.localeCompare(a.title);
      default:
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
    }
  });

  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl backdrop-blur-sm">

        
        <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
          <h1 className="text-[clamp(32px,7vw,64px)] font-bold tracking-tight">
            Scam-Related News
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(15px,2.2vw,20px)] max-w-3xl mx-auto">
            Latest news and updates on AI-powered scams, deepfakes, and fraud prevention.
          </p>
        </div>
      </section>

      {/* Filter/Sort Bar */}
      <section className="mt-8 mb-8 mr-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-white text-black font-medium' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              All ({categories.all})
            </button>
            <button
              onClick={() => setActiveFilter('business-fraud')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === 'business-fraud' 
                  ? 'bg-white text-black font-medium' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Business Fraud ({categories['business-fraud']})
            </button>
            <button
              onClick={() => setActiveFilter('deepfake-abuse')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === 'deepfake-abuse' 
                  ? 'bg-white text-black font-medium' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Deepfake Abuse ({categories['deepfake-abuse']})
            </button>
            <button
              onClick={() => setActiveFilter('celebrity-impersonation')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === 'celebrity-impersonation' 
                  ? 'bg-white text-black font-medium' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Celebrity Impersonation ({categories['celebrity-impersonation']})
            </button>
            <button
              onClick={() => setActiveFilter('technology-threat')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === 'technology-threat' 
                  ? 'bg-white text-black font-medium' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Technology Threat ({categories['technology-threat']})
            </button>
            <button
              onClick={() => setActiveFilter('policy-regulation')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === 'policy-regulation' 
                  ? 'bg-white text-black font-medium' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Policy & Regulation ({categories['policy-regulation']})
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

      {/* News Grid */}
      <section className="mr-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="rounded-xl overflow-hidden transition-all duration-200 h-full flex flex-col">
                {/* Image */}
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <Image 
                    src={item.backgroundImage} 
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
                    {new Date(item.publishedDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  
                  <p className="text-sm text-white/60 line-clamp-3 flex-1">
                    {item.summary}
                  </p>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center mr-8">
        <div className="bg-white/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Stay Informed About Scam Trends
          </h2>
          <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
            Get the latest updates on emerging scam tactics and protection strategies. Follow our research and news coverage.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
          >
            Try Our Detection Tools
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}