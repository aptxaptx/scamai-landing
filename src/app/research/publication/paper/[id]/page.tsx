"use client";

import SiteShell from "@/components/SiteShell";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, use } from "react";

// Sample paper data - in a real app this would come from a database or API
const papers = [
  {
    id: "1",
    title: "Advanced Deepfake Detection Using Multi-Modal Analysis",
    authors: ["Smith, J.", "Johnson, A.", "Williams, R."],
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2024,
    publishDate: "March 15, 2024",
    description: "A comprehensive approach to detecting deepfakes using combined visual and audio analysis techniques.",
    pdfUrl: "/papers/deepfake-detection-2024.pdf",
    category: "Research",
    tags: ["Safety", "Research", "Publication"],
    image: "/deepfake.webp",
    content: `With the rapid advancement of deepfake technology, the need for robust detection methods has become increasingly critical. This paper presents a novel multi-modal approach that combines visual and audio analysis to achieve state-of-the-art performance in deepfake detection.

## Background

Deepfake technology has evolved significantly over the past few years, making it increasingly difficult to distinguish between authentic and synthetic media. This technological advancement poses serious threats to information integrity, privacy, and security.

## Methodology

Our approach employs a dual-stream neural network architecture that processes visual and audio features independently before fusing them for final classification. The visual stream utilizes a modified ResNet architecture with attention mechanisms to focus on facial regions and temporal inconsistencies.

### Visual Processing Stream

The visual component of our system analyzes frame-by-frame inconsistencies that are characteristic of deepfake generation processes. We employ:

- **Spatial Analysis**: Detection of artifacts in facial regions that may indicate synthetic generation
- **Temporal Analysis**: Identification of unnatural temporal transitions between frames
- **Attention Mechanisms**: Focus on critical facial features that are most susceptible to deepfake artifacts

### Audio Processing Stream

The audio stream employs spectral analysis and deep learning techniques to identify synthetic voice patterns:

- **Spectral Analysis**: Examination of frequency domain characteristics
- **Deep Learning Classification**: Neural networks trained specifically on voice synthesis detection
- **Cross-Modal Verification**: Validation of audio-visual synchronization patterns

## Results

Extensive experiments on multiple benchmark datasets demonstrate that our method achieves superior performance compared to existing approaches:

- **FaceForensics++ Dataset**: 96.7% accuracy
- **Celeb-DF Dataset**: 94.2% accuracy
- **Cross-dataset Generalization**: Robust performance across different synthesis methods

These results represent significant improvements over state-of-the-art methods, with particular strength in handling challenging scenarios where single-modal approaches typically fail.

## Conclusion

This work presents a robust multi-modal approach for deepfake detection that significantly outperforms existing methods. The combination of visual and audio analysis provides a more comprehensive solution to the deepfake detection challenge.

Future work will focus on:
- Improving real-time performance for practical deployment
- Extending the approach to other forms of synthetic media
- Developing more robust defenses against adversarial attacks`,
  },
  {
    id: "2",
    title: "ScamNet: Large-Scale Fraud Detection in Digital Communications",
    authors: ["Brown, M.", "Davis, K.", "Miller, S."],
    venue: "ACM Conference on Computer and Communications Security (CCS)",
    year: 2024,
    publishDate: "October 8, 2024",
    description: "Novel neural network architecture for detecting fraudulent communications at scale.",
    pdfUrl: "/papers/scamnet-2024.pdf",
    category: "Publication",
    tags: ["Publication", "Research"],
    image: "/fakenews.webp",
    content: `Digital fraud has become increasingly sophisticated, requiring advanced detection mechanisms to protect users from malicious activities. This paper introduces ScamNet, a novel neural network architecture specifically designed for large-scale fraud detection in digital communications.

## Introduction

The proliferation of digital communication platforms has created new opportunities for fraudsters to exploit unsuspecting users. Traditional rule-based detection systems are insufficient to handle the volume and sophistication of modern fraud attempts.

## ScamNet Architecture

ScamNet employs a hierarchical attention mechanism that analyzes multiple levels of communication patterns:

- **Text Analysis Module**: Advanced NLP techniques for content understanding
- **Sender Behavior Modeling**: Pattern recognition for identifying suspicious actors
- **Contextual Understanding**: Situational awareness for better fraud detection

## Results

Evaluation on real-world datasets demonstrates ScamNet's effectiveness:
- Detection rate: 98.5%
- False positive rate: 0.8%
- Real-time processing capability for production deployment`,
  },
  {
    id: "3",
    title: "Voice Clone Detection: Challenges and Solutions",
    authors: ["Wilson, T.", "Anderson, L.", "Taylor, P."],
    venue: "International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
    year: 2023,
    publishDate: "June 22, 2023",
    description: "Comprehensive study on detecting synthetic voice clones with state-of-the-art accuracy.",
    pdfUrl: "/papers/voice-clone-detection-2023.pdf",
    category: "Safety",
    tags: ["Safety", "Research"],
    image: "/GenAI.webp",
    content: `Voice cloning technology has advanced rapidly, creating both opportunities and security challenges. This paper presents a comprehensive study of voice clone detection, introducing novel techniques for identifying synthetic speech with high accuracy.

## Overview

The ability to clone human voices has significant implications for security, privacy, and content authenticity. Our research develops effective countermeasures to detect synthetic voice samples.

## Detection Framework

Our system analyzes multiple acoustic features:
- Spectral characteristics
- Prosodic patterns  
- Neural vocoder artifacts

## Performance

Experimental results show 97.3% accuracy on cross-dataset evaluation, demonstrating good generalization capabilities across various synthesis methods.`,
  }
];

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
      <div className="max-w-4xl mr-8">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {papers
              .filter(p => p.id !== paper.id)
              .map((relatedPaper) => (
                <Link
                  key={relatedPaper.id}
                  href={`/research/publication/paper/${relatedPaper.id}`}
                  className="group block"
                >
                  <article className="rounded-xl overflow-hidden transition-all duration-200">
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img 
                        src={relatedPaper.image} 
                        alt={relatedPaper.title}
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


