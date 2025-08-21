"use client";

import SiteShell from "@/components/SiteShell";
// Removed unused Image import
import { useState } from "react";

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  link: string;
  source: string;
  publishedDate: string;
  backgroundImage: string;
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
  },
  {
    id: 2,
    title: "AI Deepfake Scandal at HKU",
    summary: "A law student at Hong Kong University allegedly used AI to create over 700 non-consensual deepfake pornographic images of classmates and teachers. Legal gap exposed.",
    link: "https://www.cbsnews.com/news/ai-generated-porn-scandal-university-of-hong-kong/",
    source: "University of Hong Kong",
    publishedDate: "2025-07-16",
    backgroundImage: "/hku.webp",
  },
  {
    id: 3,
    title: "Dr. Sanjay Gupta Warns on AI Scam",
    summary: "Scammers used AI to create fake videos and images of CNN’s Dr. Sanjay Gupta, promoting bogus health products in his name. Gupta responded publicly to warn people against the scam.",
    link: "https://www.cnn.com/2025/07/31/health/video/gupta-fake-ai-health-ads-digvid-16x9",
    source: "CNN News",
    publishedDate: "2025-08-01",
    backgroundImage: "/cnn.webp",
  },
  {
    id: 4,
    title: "AI Fakes Are Easier Than Ever",
    summary: "AI is making it easier than ever to fake voices and faces, threatening trust in politics, business, and media. Deepfakes of public figures like Marco Rubio show how real these impersonations can look.",
    link: "https://www.ap.org/news-highlights/spotlights/2025/creating-realistic-deepfakes-is-getting-easier-than-ever-fighting-back-may-take-even-more-ai/",
    source: "AP News",
    publishedDate: "2025-07-28",
    backgroundImage: "/apnews.webp",
  },
  {
    id: 5,
    title: "Why Spotting Dangerous AI Is More Urgent Than Ever",
    summary: "A World Economic Forum report warns that AI-powered impersonation marks the shift from disinformation to targeted attacks on business trust. From voice-cloning scams to deepfake fraud, unchecked AI is eroding trust.",
    link: "https://www.weforum.org/stories/2025/07/why-detecting-dangerous-ai-is-key-to-keeping-trust-alive/",
    source: "World Economic Forum",
    publishedDate: "2025-07-07",
    backgroundImage: "/wef.webp",
  },
  {
    id: 6,
    title: "Can You Tell What’s Real?",
    summary: "AI video tools like Google’s Veo 3 are now generating lifelike visuals and audio so realistic they blur the line between fact and fiction. Watch the clips below and see if you can tell which are real and which are AI-generated.",
    link: "https://www.nytimes.com/interactive/2025/06/29/business/ai-video-deepfake-google-veo-3-quiz.html?searchResultPosition=2",
    source: "The New York Times",
    publishedDate: "2025-06-29",
    backgroundImage: "/nyt.webp",
  },
  {
    id: 7,
    title: "Sexualized AI Images on Facebook",
    summary: "CBS News uncovered hundreds of ads across Facebook, Instagram, Threads, and Messenger promoting “nudify” AI tools that create sexualized images of real people without consent.",
    link: "https://www.cbsnews.com/news/meta-facebook-sexualized-ai-deepfake-celebrity-images-spread/",
    source: "CBS News",
    publishedDate: "2025-02-18",
    backgroundImage: "/meta.webp",
  },
];

// Utility function to format dates
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

function NewsCard({ news }: { news: NewsItem }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="group perspective-1000 h-80">
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className={`absolute inset-0 w-full h-full backface-hidden ${isFlipped ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <div className="relative h-full overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 group-hover:scale-[1.02] group-hover:border-white/20 transition-all duration-300">
            {/* Simple background image - easily replaceable */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${news.backgroundImage})` }}
            />
          </div>
        </div>

        {/* Back of card - Clean summary and link */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${isFlipped ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 delay-200`}>
          <div className="relative h-full overflow-hidden rounded-2xl bg-black/60 backdrop-blur-sm border border-white/20 p-8 flex flex-col justify-center">
            <div className="text-center space-y-6">
              
              <p className="text-white/90 text-base leading-relaxed">
                {news.summary}
              </p>
              
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 font-bold text-lg transition-colors underline decoration-white/50 hover:decoration-white/80"
                onClick={(e) => e.stopPropagation()}
              >
                Read Full Article
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewsPage() {
  return (
    <SiteShell>
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-white/70 text-base mb-3 sm:mb-4 tracking-wide">Latest Updates</p>
            <h1 className="text-[clamp(36px,7vw,68px)] font-normal tracking-tight leading-[0.95] md:leading-[1.05] text-white">
              Scam-Related News
            </h1>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {newsData.map((news) => (
              <div key={news.id} className="flex flex-col">
                <NewsCard news={news} />
                
                {/* Title and date below card */}
                <div className="mt-4 space-y-2">
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80 font-semibold text-base leading-tight transition-colors block"
                  >
                    {news.title}
                  </a>
                  <p className="text-white/50 text-sm">
                    {formatDate(news.publishedDate)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </SiteShell>
  );
}


