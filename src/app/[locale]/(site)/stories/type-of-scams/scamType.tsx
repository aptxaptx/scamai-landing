import React from "react";
import SiteShell from "@/components/SiteShell";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Inline icon component for scam types
export type IconName = "ShieldAlert" | "Briefcase" | "MessageSquareWarning" | "Zap" | "Target" | "Globe" | "BrainCircuit";

function InlineIcon({ name, className = "h-5 w-5 text-zinc-100" }: { name: IconName; className?: string }) {
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

export interface ScamTypePageProps {
  metadata: {
    title: string;
    description: string;
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
    valueProps?: {
      description: string;
    }[];
    dataPoint?: string;
  };
  threatLandscape?: {
    headline: string;
    description: string;
    keyThreats: {
      icon: IconName;
      text: string;
      description?: string;
    }[];
    dataPoint?: string;
    valueProps?: {
      description: string;
    }[];
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

// Hero Section for scam types
type HeroSectionProps = { 
  hero: ScamTypePageProps["hero"]; 
};
function HeroSection({ hero }: HeroSectionProps) {
  const t = useTranslations("Stories.ScamType");
  return (
    <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-16">


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
            <span key={i} className="px-3 py-1 rounded-full text-xs text-white/85 bg-zinc-900/10 border border-white/15">
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
                {t("videoFallback")}
              </video>
            ) : (
              <Image 
                src={hero.visual.src} 
                alt={hero.visual.alt || ""} 
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

// Problem Section for scam types
type ProblemSectionProps = { problemSection: ScamTypePageProps["problemSection"] };
function ProblemSection({ problemSection }: ProblemSectionProps) {
  const t = useTranslations("Stories.ScamType");
  return (
    <section className="mb-16">
      <div className="text-center">
        <h2 className="text-[clamp(24px,5vw,48px)] font-normal tracking-tight max-w-4xl mx-auto">
          {problemSection.headline.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < problemSection.headline.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
      </div>

      <div className="mt-8 max-w-3xl mx-auto text-left">
        <p className="text-white/80 text-lg leading-relaxed">
          {problemSection.description}
        </p>
        {problemSection.additionalContent && (
          <p className="text-white/80 text-lg leading-relaxed mt-6">
            {problemSection.additionalContent}
        </p>
        )}
      </div>

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
              {t("videoFallback")}
            </video>
          ) : (
            <Image 
              src={problemSection.visual.src} 
              alt={problemSection.visual.alt || ""} 
              width={800}
              height={600}
              className="w-full rounded-lg shadow-lg"
            />
          )}
        </div>
      )}

      {problemSection.valueProps && (
        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {problemSection.valueProps.map((prop, i) => (
            <div key={i}>
              <p className="text-white/75 text-sm leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {problemSection.dataPoint && (
        <p className="mt-8 text-sm text-white/60 text-center">{problemSection.dataPoint}</p>
      )}
    </section>
  );
}

// Threat Landscape Section for scam types
type ThreatLandscapeProps = { threat?: ScamTypePageProps["threatLandscape"] };
function ThreatLandscapeSection({ threat }: ThreatLandscapeProps) {
  if (!threat) return null;
  
  return (
    <section className="mb-16 max-w-5xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-center text-white">{threat.headline}</h3>
      <p className="mt-4 text-lg text-white/80 text-left max-w-3xl mx-auto">{threat.description}</p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10">
        {threat.keyThreats.map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="flex-shrink-0 h-10 w-10 grid place-items-center">
                <InlineIcon name={item.icon} className="h-5 w-5 text-white" />
              </span>
              <span className="text-white font-semibold">{item.text}</span>
            </div>
            {item.description && (
              <p className="text-white/75 text-sm leading-relaxed">{item.description}</p>
            )}
          </div>
        ))}
      </div>

      {threat.dataPoint && (
        <p className="mt-8 text-sm text-white/60 text-center">{threat.dataPoint}</p>
      )}
      
      {threat.valueProps && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {threat.valueProps.map((prop, i) => (
            <div key={i}>
              <p className="text-white/75 text-sm leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// Solution Section for scam types
type SolutionSectionProps = { solution: ScamTypePageProps["solution"] };
function SolutionSection({ solution }: SolutionSectionProps) {
  return (
    <section className="mb-16 max-w-5xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-center text-white">{solution.headline}</h3>
      <p className="mt-4 text-lg text-white/80 text-left max-w-3xl mx-auto">{solution.description}</p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
        {solution.coreDimensions.map((dim, idx) => (
          <div key={idx}>
            <h4 className="text-lg font-semibold text-white mb-2">{dim.title}</h4>
            <p className="text-white/75 text-sm leading-relaxed">{dim.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-slate-800/50 border-l-4 border-cyan-400 rounded-r-lg p-6 text-white/90">
        <p className="leading-relaxed">{solution.outputDescription}</p>
      </div>
    </section>
  );
}

// Advantages Section for scam types
type AdvantagesSectionProps = { advantages: ScamTypePageProps["advantages"] };
function AdvantagesSection({ advantages }: AdvantagesSectionProps) {
  return (
    <section className="mb-16 max-w-5xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-center text-white">{advantages.headline}</h3>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
        {advantages.items.map((adv, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="flex-shrink-0 h-10 w-10 grid place-items-center">
              <InlineIcon name={adv.icon} className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-white">{adv.title}</h4>
              <p className="mt-1 text-white/75 text-sm leading-relaxed">{adv.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Use Cases Section for scam types
type UseCasesSectionProps = { useCases?: ScamTypePageProps["useCases"] };
function UseCasesSection({ useCases }: UseCasesSectionProps) {
  if (!useCases) return null;
  return (
    <section className="mb-16">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-white">{useCases.headline}</h3>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {useCases.items.map((item, idx) => (
            <span key={idx} className="rounded-full bg-zinc-900/10 text-white/85 text-sm font-semibold px-4 py-2 border border-white/15">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// API Section for scam types
type ApiSectionProps = { api?: ScamTypePageProps["apiSection"] };
function ApiSection({ api }: ApiSectionProps) {
  const t = useTranslations("Stories.ScamType");
  if (!api) return null;
  return (
    <section className="mb-16">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-white">{api.headline}</h3>
        <p className="mt-4 text-lg text-white/80 text-center max-w-3xl mx-auto">{api.description}</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-lg bg-slate-900 text-gray-200 p-4 border border-white/10">
            <div className="text-sm text-gray-400 font-mono">{t("request")}</div>
            <pre className="mt-2 overflow-auto text-sm font-mono"><code>{api.codeExample.request}</code></pre>
          </div>
          <div className="rounded-lg bg-slate-900 text-gray-200 p-4 border border-white/10">
            <div className="text-sm text-gray-400 font-mono">{t("response")}</div>
            <pre className="mt-2 overflow-auto text-sm font-mono"><code>{api.codeExample.response}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section for scam types
type CtaSectionProps = { cta: ScamTypePageProps["cta"] };
function CtaSection({ cta }: CtaSectionProps) {
  return (
    <div className="mt-16 max-w-2xl mx-auto">
      <div className="bg-zinc-900/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">{cta.headline}</h3>
        <p className="text-white/80 text-base mb-6">{cta.description}</p>
        <a
          href={cta.primary.href}
          className="inline-block bg-zinc-900 text-zinc-100 px-8 py-3 rounded-lg font-medium hover:bg-zinc-900/90 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {cta.primary.text}
        </a>
      </div>
    </div>
  );
}

// Main Scam Type Page Component
export function ScamTypePage({ data }: { data: ScamTypePageProps }) {
  return (
    <SiteShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection hero={data.hero} />

        <div className="space-y-16 md:space-y-24">
            <ProblemSection problemSection={data.problemSection} />
            <ThreatLandscapeSection threat={data.threatLandscape} />
            <SolutionSection solution={data.solution} />
            <AdvantagesSection advantages={data.advantages} />
            <UseCasesSection useCases={data.useCases} />
            <ApiSection api={data.apiSection} />
        </div>
        
        <CtaSection cta={data.cta} />


      </div>

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

export default ScamTypePage;
