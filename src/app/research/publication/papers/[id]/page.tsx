"use client";

import SiteShell from "@/components/SiteShell";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState, use } from "react";
import { papers } from "../data";

interface Props {
  params: Promise<{ id: string }>
}

export default function PaperPage({ params }: Props) {
  const unwrappedParams = use(params) as { id: string };
  const paper = papers.find(p => p.id === unwrappedParams.id);
  const [copySuccess, setCopySuccess] = useState(false);
  
  if (!paper) {
    notFound();
  }

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
            {new Date(paper.publishDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {paper.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium text-white/80 border border-white/20 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {paper.title}
          </h1>
          
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            {paper.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={paper.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
            >
              Read the paper
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
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
            {renderContent(paper.content)}
          </div>
          
          {/* Authors */}
          <section className="border-t border-white/20 pt-8 mt-12">
            <h3 className="text-lg font-semibold text-white mb-4">{paper.year}</h3>
            <div className="text-white/80">
              <strong>Authors:</strong> {paper.authors.join(', ')}
            </div>
          </section>
        </article>

        {/* Keep Reading Section */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-white">Keep reading</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {papers
              .filter(p => p.id !== paper.id)
              .map((relatedPaper) => (
                <Link
                  key={relatedPaper.id}
                  href={`/research/publication/papers/${relatedPaper.id}`}
                  className="group block"
                >
                  <article className="rounded-xl overflow-hidden transition-all duration-200">
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <Image 
                        src={relatedPaper.image} 
                        alt={relatedPaper.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <div className="px-0 pt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-md border border-white/20">
                          {relatedPaper.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                        {relatedPaper.title}
                      </h3>
                      <p className="text-sm text-white/70">
                        {new Date(relatedPaper.publishDate).toLocaleDateString('en-US', { 
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
