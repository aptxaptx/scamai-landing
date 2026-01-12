"use client";

import SiteShell from "@/components/SiteShell";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState, use } from "react";
import { datasets } from "../data";
import { papers } from "../../papers/data";

interface Props {
  params: Promise<{ id: string }>
}

export default function DatasetPage({ params }: Props) {
  const unwrappedParams = use(params) as { id: string };
  const dataset = datasets.find(d => d.id === unwrappedParams.id);
  const [copySuccess, setCopySuccess] = useState(false);
  
  if (!dataset) {
    notFound();
  }

  const relatedPaper = dataset.paperReference ? papers.find(p => p.id === dataset.paperReference) : null;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Convert markdown-style content to JSX
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">{line.slice(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-white mt-6 mb-3">{line.slice(4)}</h3>;
      } else if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.*?)\*\*: (.*)/);
        if (match) {
          return <p key={index} className="text-white/80 mb-2"><strong>{match[1]}</strong>: {match[2]}</p>;
        }
      } else if (line.startsWith('- ')) {
        return <p key={index} className="text-white/80 mb-2">• {line.slice(2)}</p>;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="text-white/80 mb-4 leading-relaxed">{line}</p>;
      }
      return null;
    });
  };

  return (
    <SiteShell>
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-8">
          <p className="text-white/70 mb-2">
            {new Date(dataset.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {dataset.domains.map((domain) => (
              <span
                key={domain}
                className="px-3 py-1 text-sm font-medium text-white/80 border border-white/20 rounded-full"
              >
                {domain}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {dataset.title}
          </h1>
          
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            {dataset.description}
          </p>

          {/* Dataset Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{dataset.size}</div>
              <div className="text-sm text-white/70">Dataset Size</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{dataset.samples}</div>
              <div className="text-sm text-white/70">Samples</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{dataset.license}</div>
              <div className="text-sm text-white/70">License</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{dataset.category}</div>
              <div className="text-sm text-white/70">Type</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://cal.com/scamai/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
            {relatedPaper && (
              <Link
                href={`/research/publication/papers/${relatedPaper.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                Related Paper
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            )}
            <button 
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
            >
              {copySuccess ? 'Copied!' : 'Share'}
            </button>
          </div>
        </header>

        {/* Content */}
        <article className="rounded-2xl p-8 md:p-12 mb-16">
          <div className="prose prose-lg max-w-none text-white">
            {renderContent(dataset.content)}
          </div>
        </article>

        {/* Related Datasets Section */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-white">Related Datasets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {datasets
              .filter(d => d.id !== dataset.id)
              .slice(0, 2)
              .map((relatedDataset) => (
                <Link
                  key={relatedDataset.id}
                  href={`/research/publication/datasets/${relatedDataset.id}`}
                  className="group block"
                >
                  <article className="rounded-xl overflow-hidden transition-all duration-200">
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <Image 
                        src={relatedDataset.image} 
                        alt={relatedDataset.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <div className="px-0 pt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-md border border-white/20">
                          {relatedDataset.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                        {relatedDataset.title}
                      </h3>
                      <p className="text-sm text-white/70 mb-2">
                        {relatedDataset.samples} samples • {relatedDataset.size}
                      </p>
                      <p className="text-sm text-white/70">
                        {new Date(relatedDataset.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
