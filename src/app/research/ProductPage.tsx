import React from "react";
import SiteShell from "@/components/SiteShell";
import Link from "next/link";
import Image from "next/image";

// Inline icon component
export type IconName =
  | "ShieldAlert"
  | "Briefcase"
  | "MessageSquareWarning"
  | "Zap"
  | "Target"
  | "Globe"
  | "BrainCircuit";

function InlineIcon({
  name,
  className = "h-5 w-5 text-gray-900",
}: {
  name: IconName;
  className?: string;
}) {
  // Component code remains unchanged
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
  breadcrumb?: {
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
    description?: string;
    tags: string[];
    visual?: {
      type: "video" | "image" | "audio";
      src: string;
      alt?: string;
    };
  };
  problemSection: {
    headline: string;
    description: string;
    additionalContent?: string;
    visual?: {
      type: "video" | "image" | "audio";
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
    codeExample?: {
      request: string;
      response: string;
    };
    apiDocumentation?: {
      text: string;
      href: string;
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
  overlayColor?: string;
}

// Hero Section
// Hero area as an independent, eye-catching visual element with card-style design.
type HeroSectionProps = {
  hero: ProductPageProps["hero"];
  breadcrumb?: ProductPageProps["breadcrumb"];
};
function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-16">
      <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
        <p className="text-white text-base mb-4">{hero.category}</p>
        <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight max-w-4xl mx-auto">
          {hero.headline.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < hero.headline.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
        <p className="mt-4 text-white/85 text-[clamp(16px,2.5vw,24px)] font-semibold max-w-2xl mx-auto">
          {hero.subtitle.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < hero.subtitle.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
        {hero.description && (
          <p className="mt-6 text-white/75 text-[clamp(14px,2vw,18px)] max-w-3xl mx-auto leading-relaxed">
            {hero.description}
          </p>
        )}

        {/* Tags */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {hero.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs text-white/85 bg-white/10 border border-white/15"
            >
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
            ) : hero.visual.type === "audio" ? (
              <div className="text-center">
                <audio
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                  controls
                  preload="metadata"
                >
                  <source src={hero.visual.src} type="audio/mpeg" />
                  Your browser does not support the audio tag.
                </audio>
                <p className="mt-4 text-white/60 text-sm">{hero.visual.alt}</p>
              </div>
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

/**
 * Redesigned ProblemSection
 * 1. Descriptive paragraphs left-aligned for better readability.
 * 2. Remove independent card styles from valueProps, display as grid content to reduce visual fragments.
 */
type ProblemSectionProps = {
  problemSection: ProductPageProps["problemSection"];
};
function ProblemSection({ problemSection }: ProblemSectionProps) {
  return (
    <section className="mb-16">
      <div className="text-center">
        <h2 className="text-[clamp(24px,5vw,48px)] font-normal tracking-tight max-w-4xl mx-auto">
          {problemSection.headline.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < problemSection.headline.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
      </div>

      {/* REFACTORED: Text changed to left-aligned */}
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
              Your browser does not support the video tag.
            </video>
          ) : problemSection.visual.type === "audio" ? (
            <div className="text-center">
              <audio
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                controls
                preload="metadata"
              >
                <source src={problemSection.visual.src} type="audio/mpeg" />
                Your browser does not support the audio tag.
              </audio>
              <p className="mt-4 text-white/60 text-sm">
                {problemSection.visual.alt}
              </p>
            </div>
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

      {/* REFACTORED: Remove card styles */}
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {problemSection.valueProps.map((prop, i) => (
          // Removed bg-white/5, border, rounded-xl, p-5
          <div key={i}>
            <h4 className="text-white font-semibold mb-2">{prop.title}</h4>
            <p className="text-white/75 text-sm leading-relaxed">
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Redesigned ThreatLandscapeSection
 * 1. Descriptive paragraphs left-aligned.
 * 2. Remove card styles from threat list items, making them more like a clean list.
 */
type ThreatLandscapeProps = { threat?: ProductPageProps["threatLandscape"] };
function ThreatLandscapeSection({ threat }: ThreatLandscapeProps) {
  if (!threat) return null;

  return (
    <section className="mb-16 max-w-5xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-center text-white">
        {threat.headline}
      </h3>
      {/* REFACTORED: Text changed to left-aligned */}
      <p className="mt-4 text-lg text-white/80 text-left max-w-3xl mx-auto">
        {threat.description}
      </p>

      {/* REFACTORED: Remove card styles, adjust spacing */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10">
        {threat.keyThreats.map((item, idx) => (
          // Removed wrapping card div
          <div key={idx} className="flex items-center gap-4">
            <span className="flex-shrink-0 h-10 w-10 grid place-items-center">
              <InlineIcon name={item.icon} className="h-5 w-5 text-white" />
            </span>
            <span className="text-white font-semibold">{item.text}</span>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-white/60 text-center">
        {threat.dataPoint}
      </p>
    </section>
  );
}

/**
 * Redesigned SolutionSection
 * 1. Descriptive paragraphs left-aligned.
 * 2. Remove card styles from core dimensions list.
 * 3. Change output description style to more subtle, left-bordered quote block style.
 */
type SolutionSectionProps = { solution: ProductPageProps["solution"] };
function SolutionSection({ solution }: SolutionSectionProps) {
  // Return null if solution is empty or missing required properties
  if (!solution || !solution.headline || !solution.coreDimensions) {
    return null;
  }

  return (
    <section className="mb-16 max-w-5xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-center text-white">
        {solution.headline}
      </h3>
      <p className="mt-4 text-lg text-white/80 text-left max-w-3xl mx-auto">
        {solution.description}
      </p>

      {/* REFACTORED: Remove card styles */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
        {solution.coreDimensions.map((dim, idx) => (
          <div key={idx}>
            <h4 className="text-lg font-semibold text-white mb-2">
              {dim.title}
            </h4>
            <p className="text-white/75 text-sm leading-relaxed">
              {dim.description}
            </p>
          </div>
        ))}
      </div>

      {/* REFACTORED: Use more subtle quote block style */}
      {solution.outputDescription && (
        <div className="mt-10 bg-slate-800/50 border-l-4 border-cyan-400 rounded-r-lg p-6 text-white/90">
          <p className="leading-relaxed">{solution.outputDescription}</p>
        </div>
      )}
    </section>
  );
}

/**
 * Redesigned AdvantagesSection
 * 1. Removed card styles from advantage list items.
 */
type AdvantagesSectionProps = { advantages: ProductPageProps["advantages"] };
function AdvantagesSection({ advantages }: AdvantagesSectionProps) {
  // Return null if advantages is empty or missing required properties
  if (!advantages || !advantages.headline || !advantages.items) {
    return null;
  }

  return (
    <section className="mb-16 max-w-5xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-center text-white">
        {advantages.headline}
      </h3>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
        {advantages.items.map((adv, idx) => (
          // Removed card background and borders
          <div key={idx} className="flex items-start gap-4">
            <div className="flex-shrink-0 h-10 w-10 grid place-items-center">
              <InlineIcon name={adv.icon} className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-white">{adv.title}</h4>
              <p className="mt-1 text-white/75 text-sm leading-relaxed">
                {adv.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// UseCasesSection (unchanged)
// Tag (Pills) style is a common UI pattern, looks good, retained.
type UseCasesSectionProps = { useCases?: ProductPageProps["useCases"] };
function UseCasesSection({ useCases }: UseCasesSectionProps) {
  if (!useCases || !useCases.headline || !useCases.items) return null;
  return (
    <section className="mb-16">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-white">
          {useCases.headline}
        </h3>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {useCases.items.map((item, idx) => (
            <span
              key={idx}
              className="rounded-full bg-white/10 text-white/85 text-sm font-semibold px-4 py-2 border border-white/15"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ApiSection (未做修改)
// 代码块使用卡片样式来模拟编辑器的外观，这是清晰且有效的，予以保留。
type ApiSectionProps = { api?: ProductPageProps["apiSection"] };
function ApiSection({ api }: ApiSectionProps) {
  if (!api) return null;
  return (
    <section className="mb-16">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-white">
          {api.headline}
        </h3>
        <p className="mt-4 text-lg text-white/80 text-center max-w-3xl mx-auto">
          {api.description}
        </p>

        {api.codeExample && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg bg-slate-900 text-gray-200 p-4 border border-white/10">
              <div className="text-sm text-gray-400 font-mono">Request</div>
              <pre className="mt-2 overflow-auto text-sm font-mono">
                <code>{api.codeExample.request}</code>
              </pre>
            </div>
            <div className="rounded-lg bg-slate-900 text-gray-200 p-4 border border-white/10">
              <div className="text-sm text-gray-400 font-mono">Response</div>
              <pre className="mt-2 overflow-auto text-sm font-mono">
                <code>{api.codeExample.response}</code>
              </pre>
            </div>
          </div>
        )}

        {api.apiDocumentation && (
          <div className="mt-10 text-center">
            <a
              href={api.apiDocumentation.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
            >
              {api.apiDocumentation.text}
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

// CTA Section
type CtaSectionProps = { cta?: ProductPageProps["cta"] };
function CtaSection({ cta }: CtaSectionProps) {
  if (!cta || !cta.headline) return null;
  
  return (
    <section className="bg-black py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
          {cta.headline}
        </h2>
        {cta.description && (
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed">
            {cta.description}
          </p>
        )}
        <div className="flex justify-center">
          <a
            href="https://cal.com/scamai/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Call
          </a>
        </div>
      </div>
    </section>
  );
}

// 主页面组件
// 将所有部分组合在一起。注意每个 section 之间的垂直间距 `mb-16`，以确保清晰的节奏。
export function ProductPage({ data }: { data: ProductPageProps }) {
  return (
    <SiteShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection hero={data.hero} breadcrumb={data.breadcrumb} />

        {/* 主要内容区域现在更加连贯 */}
        <div className="space-y-16 md:space-y-24">
          <ProblemSection problemSection={data.problemSection} />
          <ThreatLandscapeSection threat={data.threatLandscape} />
          <SolutionSection solution={data.solution} />
          <AdvantagesSection advantages={data.advantages} />
          <UseCasesSection useCases={data.useCases} />
     
        </div>
        
        <CtaSection cta={data.cta} />

        {data.breadcrumb?.nextPath && data.breadcrumb?.nextName && (
          <div className="mt-12 text-right">
            <Link
              href={data.breadcrumb.nextPath}
              className="text-sm text-white/80 hover:text-white/90"
            >
              Next: {data.breadcrumb.nextName} →
            </Link>
          </div>
        )}
      </div>

      {data.backgroundImage && (
        <>
          <div
            className="fixed inset-0 -z-10 opacity-60 bg-cover bg-center"
            style={{ backgroundImage: `url('${data.backgroundImage}')` }}
            aria-hidden
          />
          <div
            className={`fixed inset-0 -z-10 ${
              data.overlayColor || "bg-[#3D38F5]/43"
            }`}
            aria-hidden
          />
        </>
      )}
    </SiteShell>
  );
}

export default ProductPage;
