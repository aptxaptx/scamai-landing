import React from "react";
import SiteShell from "@/components/SiteShell";
import Link from "next/link";

// Inline icon component to avoid external dependencies
// Supported names: ShieldAlert, Briefcase, MessageSquareWarning, Zap, Target, Globe, BrainCircuit
const supportedIcons = [
  "ShieldAlert",
  "Briefcase",
  "MessageSquareWarning",
  "Zap",
  "Target",
  "Globe",
  "BrainCircuit",
] as const;
export type IconName = (typeof supportedIcons)[number];

function InlineIcon({ name, className = "h-5 w-5 text-gray-900" }: { name: IconName; className?: string }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "ShieldAlert":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M12 3l7 3v6c0 4.418-3.582 8-7 8s-7-3.582-7-8V6l7-3z" />
          <path d="M12 8v4" />
          <circle cx="12" cy="16" r=".9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Briefcase":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <path d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
          <path d="M3 12h18" />
        </svg>
      );
    case "MessageSquareWarning":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M21 15a3 3 0 0 1-3 3H8l-5 3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z" />
          <path d="M12 7v5" />
          <circle cx="12" cy="14" r=".9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Zap":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    case "Target":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Globe":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
    case "BrainCircuit":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3v1a3 3 0 0 0 2 3v1a3 3 0 0 0 3 3" />
          <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3v1a3 3 0 0 1-2 3v1a3 3 0 0 1-3 3" />
          <circle cx="9" cy="8" r=".9" fill="currentColor" stroke="none" />
          <circle cx="15" cy="8" r=".9" fill="currentColor" stroke="none" />
          <path d="M9 8v4M15 8v4M12 12v4" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      );
  }
}

export interface ProductPageProps {
  metadata: {
    title: string;
    description: string;
  };
  breadcrumb: {
    parentPath: string;
    parentName: string;
    currentName: string;
    nextPath?: string;
    nextName?: string;
  };
  hero: {
    category: string;
    headline: string;
    subtitle: string;
    tags: string[];
    visual?: {
      type: "video" | "image";
      src: string;
      alt?: string;
    };
  };
  problemSection: {
    headline: string;
    description: string;
    additionalContent?: string;
    visual?: {
      type: "video" | "image";
      src: string;
      alt?: string;
    };
    valueProps: {
      title: string;
      description: string;
    }[];
  };
  threatLandscape?: {
    headline: string;
    description: string;
    keyThreats: {
      icon: IconName;
      text: string;
    }[];
    dataPoint: string;
  };
  solution: {
    productName: string;
    headline: string;
    description: string;
    coreDimensions: {
      title: string;
      description: string;
    }[];
    outputDescription: string;
  };
  advantages: {
    headline: string;
    items: {
      icon: IconName;
      title: string;
      description: string;
    }[];
  };
  useCases?: {
    headline: string;
    items: string[];
  };
  apiSection?: {
    headline: string;
    description: string;
    codeExample: {
      request: string;
      response: string;
    };
  };
  cta: {
    headline: string;
    description: string;
    primary: {
      text: string;
      href: string;
    };
  };
  backgroundImage?: string;
}

// Hero Section matching KYC page format
type HeroSectionProps = { 
  hero: ProductPageProps["hero"]; 
  breadcrumb: ProductPageProps["breadcrumb"];
};

function HeroSection({ hero, breadcrumb }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-6">
      {/* Breadcrumb (left-aligned) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-14 mt-4">
        <div className="flex items-center justify-between text-sm">
          <div className="text-white/70">
            <Link href={breadcrumb.parentPath} className="hover:text-white/90">{breadcrumb.parentName}</Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{breadcrumb.currentName}</span>
          </div>
          {breadcrumb.nextPath && breadcrumb.nextName && (
            <Link href={breadcrumb.nextPath} className="text-white/80 hover:text-white/90">Next: {breadcrumb.nextName} →</Link>
          )}
        </div>
      </div>

      <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
        <p className="text-white text-base mb-4">{hero.category}</p>
        <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight max-w-4xl mx-auto">
          {hero.headline.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < hero.headline.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
        <p className="mt-4 text-white/85 text-[clamp(14px,2vw,18px)] max-w-2xl mx-auto">
          {hero.subtitle.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < hero.subtitle.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {hero.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15">
              {tag}
            </span>
          ))}
        </div>

        {hero.visual && (
          <div className="mt-8 max-w-4xl mx-auto">
            {hero.visual.type === "video" ? (
              <video
                className="w-full rounded-lg shadow-lg"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={hero.visual.src} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={hero.visual.src} 
                alt={hero.visual.alt || ""} 
                className="w-full rounded-lg shadow-lg"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

// Problem Section matching KYC format
type ProblemSectionProps = { problemSection: ProductPageProps["problemSection"] };
function ProblemSection({ problemSection }: ProblemSectionProps) {
  return (
    <section className="mb-8">
      <div className="text-center">
        <h2 className="text-[clamp(24px,5vw,48px)] font-normal tracking-tight max-w-4xl mx-auto">
          {problemSection.headline.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < problemSection.headline.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-white/80 text-lg leading-relaxed text-center">
            {problemSection.description}
          </p>
          {problemSection.additionalContent && (
            <p className="text-white/80 text-lg leading-relaxed text-center mt-6">
              {problemSection.additionalContent}
            </p>
          )}
        </div>

        {/* Video or Image */}
        {problemSection.visual && (
          <div className="mt-12 max-w-4xl mx-auto">
            {problemSection.visual.type === "video" ? (
              <video
                className="w-full rounded-lg shadow-lg"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={problemSection.visual.src} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={problemSection.visual.src} 
                alt={problemSection.visual.alt || ""} 
                className="w-full rounded-lg shadow-lg"
              />
            )}
          </div>
        )}

        {/* Value props */}
        <section className="mt-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {problemSection.valueProps.map((prop, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
                <h4 className="text-white font-semibold mb-1">{prop.title}</h4>
                <p className="text-white/75 text-sm">{prop.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

// Optional Threat Landscape Section (if data provided)
type ThreatLandscapeProps = { threat?: ProductPageProps["threatLandscape"] };
function ThreatLandscapeSection({ threat }: ThreatLandscapeProps) {
  if (!threat) return null;
  
  return (
    <section className="mb-8">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-white">{threat.headline}</h3>
        <p className="mt-4 text-lg text-white/80 text-center max-w-3xl mx-auto">{threat.description}</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {threat.keyThreats.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 grid place-items-center rounded-full bg-white/10 border border-white/20">
                  <InlineIcon name={item.icon} className="h-5 w-5 text-white" />
                </span>
                <span className="text-white font-semibold">{item.text}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-white/60 text-center">{threat.dataPoint}</p>
      </div>
    </section>
  );
}

// Solution Section
type SolutionSectionProps = { solution: ProductPageProps["solution"] };
function SolutionSection({ solution }: SolutionSectionProps) {
  return (
    <section className="mb-8">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-white">{solution.headline}</h3>
        <p className="mt-4 text-lg text-white/80 text-center max-w-3xl mx-auto">{solution.description}</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {solution.coreDimensions.map((dim, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
              <h4 className="text-lg font-semibold text-white">{dim.title}</h4>
              <p className="mt-2 text-white/75 text-sm leading-6">{dim.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white/10 border border-white/20 rounded-xl p-6 text-white/90">
          <p className="text-sm">{solution.outputDescription}</p>
        </div>
      </div>
    </section>
  );
}

// Advantages Section
type AdvantagesSectionProps = { advantages: ProductPageProps["advantages"] };
function AdvantagesSection({ advantages }: AdvantagesSectionProps) {
  return (
    <section className="mb-8">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-white">{advantages.headline}</h3>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {advantages.items.map((adv, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 grid place-items-center rounded-full bg-white/10 border border-white/20">
                  <InlineIcon name={adv.icon} className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{adv.title}</h4>
                  <p className="mt-1 text-white/75 text-sm leading-6">{adv.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Optional Use Cases Section
type UseCasesSectionProps = { useCases?: ProductPageProps["useCases"] };
function UseCasesSection({ useCases }: UseCasesSectionProps) {
  if (!useCases) return null;
  
  return (
    <section className="mb-8">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-white">{useCases.headline}</h3>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {useCases.items.map((item, idx) => (
            <span key={idx} className="rounded-full bg-white/10 text-white/85 text-sm font-semibold px-4 py-2 border border-white/15">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Optional API Section
type ApiSectionProps = { api?: ProductPageProps["apiSection"] };
function ApiSection({ api }: ApiSectionProps) {
  if (!api) return null;
  
  return (
    <section className="mb-8">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-white">{api.headline}</h3>
        <p className="mt-4 text-lg text-white/80 text-center max-w-3xl mx-auto">{api.description}</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-lg bg-slate-900 text-gray-200 p-4 border border-white/10">
            <div className="text-sm text-gray-400 font-mono">Request</div>
            <pre className="mt-2 overflow-auto text-sm font-mono"><code>{api.codeExample.request}</code></pre>
          </div>
          <div className="rounded-lg bg-slate-900 text-gray-200 p-4 border border-white/10">
            <div className="text-sm text-gray-400 font-mono">Response</div>
            <pre className="mt-2 overflow-auto text-sm font-mono"><code>{api.codeExample.response}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section matching KYC format
type CtaSectionProps = { cta: ProductPageProps["cta"] };
function CtaSection({ cta }: CtaSectionProps) {
  return (
    <div className="mt-16 max-w-2xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">{cta.headline}</h3>
        <p className="text-white/80 text-base mb-6">{cta.description}</p>
        <a
          href={cta.primary.href}
          className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {cta.primary.text}
        </a>
      </div>
    </div>
  );
}

// Main composed component with SiteShell
export function ProductPage({ data }: { data: ProductPageProps }) {
  return (
    <SiteShell>
      {/* Hero above existing card(s) */}
      <HeroSection hero={data.hero} breadcrumb={data.breadcrumb} />

      {/* Problem section about the problem */}
      <ProblemSection problemSection={data.problemSection} />

      {/* Optional threat landscape */}
      <ThreatLandscapeSection threat={data.threatLandscape} />
      
      {/* Solution section */}
      <SolutionSection solution={data.solution} />
      
      {/* Advantages section */}
      <AdvantagesSection advantages={data.advantages} />
      
      {/* Optional use cases */}
      <UseCasesSection useCases={data.useCases} />
      
      {/* Optional API section */}
      <ApiSection api={data.apiSection} />
      
      {/* CTA Card */}
      <CtaSection cta={data.cta} />

      {/* Bottom next link */}
      {data.breadcrumb.nextPath && data.breadcrumb.nextName && (
        <div className="mt-10 w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-14">
          <div className="flex justify-end text-sm">
            <Link href={data.breadcrumb.nextPath} className="text-white/80 hover:text-white/90">
              Next: {data.breadcrumb.nextName} →
            </Link>
          </div>
        </div>
      )}

      {/* Page background with card styling */}
      {data.backgroundImage && (
        <div
          className="fixed inset-0 -z-10 opacity-60 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.backgroundImage}')` }}
          aria-hidden
        />
      )}
    </SiteShell>
  );
}



export default ProductPage;
