import React from "react";

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
  hero: {
    productName: string;
    headline: string;
    subtitle: string;
    visual?: React.ReactNode;
  };
  threatLandscape: {
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
  useCases: {
    headline: string;
    items: string[];
  };
  apiSection: {
    headline: string;
    description: string;
    codeExample: {
      request: string;
      response: string;
    };
  };
  cta: {
    headline: string;
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

// Section 1: Hero
type HeroSectionProps = { hero: ProductPageProps["hero"] };
function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          <span>{hero.productName}</span>
        </div>
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
          {hero.headline}
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">{hero.subtitle}</p>
        {hero.visual && <div className="mt-10">{hero.visual}</div>}
      </div>
    </section>
  );
}

// Section 2: Threat Landscape
type ThreatLandscapeProps = { threat: ProductPageProps["threatLandscape"] };
function ThreatLandscapeSection({ threat }: ThreatLandscapeProps) {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900">{threat.headline}</h3>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto">{threat.description}</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {threat.keyThreats.map((item, idx) => (
            <div key={idx} className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 grid place-items-center rounded-full bg-white border border-gray-200">
                  <InlineIcon name={item.icon} className="h-5 w-5 text-blue-700" />
                </span>
                <span className="text-gray-900 font-semibold">{item.text}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-600 text-center">{threat.dataPoint}</p>
      </div>
    </section>
  );
}

// Section 3: Solution
type SolutionSectionProps = { solution: ProductPageProps["solution"] };
function SolutionSection({ solution }: SolutionSectionProps) {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900">{solution.headline}</h3>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto">{solution.description}</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {solution.coreDimensions.map((dim, idx) => (
            <div key={idx} className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900">{dim.title}</h4>
              <p className="mt-2 text-gray-700 text-sm leading-6">{dim.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg bg-blue-50 p-6 text-blue-900 border border-blue-200">
          <p className="text-sm">{solution.outputDescription}</p>
        </div>
      </div>
    </section>
  );
}

// Section 4: Advantages
type AdvantagesSectionProps = { advantages: ProductPageProps["advantages"] };
function AdvantagesSection({ advantages }: AdvantagesSectionProps) {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900">{advantages.headline}</h3>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {advantages.items.map((adv, idx) => (
            <div key={idx} className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 grid place-items-center rounded-full bg-white border border-gray-200">
                  <InlineIcon name={adv.icon} className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{adv.title}</h4>
                  <p className="mt-1 text-gray-700 text-sm leading-6">{adv.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 5: Use Cases
type UseCasesSectionProps = { useCases: ProductPageProps["useCases"] };
function UseCasesSection({ useCases }: UseCasesSectionProps) {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900">{useCases.headline}</h3>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {useCases.items.map((item, idx) => (
            <span key={idx} className="rounded-full bg-gray-100 text-gray-800 text-sm font-semibold px-4 py-2">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 6: API Section
type ApiSectionProps = { api: ProductPageProps["apiSection"] };
function ApiSection({ api }: ApiSectionProps) {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900">{api.headline}</h3>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto">{api.description}</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-lg bg-slate-900 text-gray-200 p-4">
            <div className="text-sm text-gray-400 font-mono">Request</div>
            <pre className="mt-2 overflow-auto text-sm font-mono"><code>{api.codeExample.request}</code></pre>
          </div>
          <div className="rounded-lg bg-slate-900 text-gray-200 p-4">
            <div className="text-sm text-gray-400 font-mono">Response</div>
            <pre className="mt-2 overflow-auto text-sm font-mono"><code>{api.codeExample.response}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 7: CTA
type CtaSectionProps = { cta: ProductPageProps["cta"] };
function CtaSection({ cta }: CtaSectionProps) {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-900">{cta.headline}</h3>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href={cta.primary.href} className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-bold hover:bg-blue-700">
            {cta.primary.text}
          </a>
          <a href={cta.secondary.href} className="inline-flex items-center justify-center rounded-lg bg-gray-100 px-5 py-3 text-gray-900 font-bold hover:bg-gray-200">
            {cta.secondary.text}
          </a>
        </div>
      </div>
    </section>
  );
}

// Main composed component
export function ProductPage({ data }: { data: ProductPageProps }) {
  return (
    <main>
      <HeroSection hero={data.hero} />
      <ThreatLandscapeSection threat={data.threatLandscape} />
      <SolutionSection solution={data.solution} />
      <AdvantagesSection advantages={data.advantages} />
      <UseCasesSection useCases={data.useCases} />
      <ApiSection api={data.apiSection} />
      <CtaSection cta={data.cta} />
    </main>
  );
}

// Preview with sample data
const deepfakeProductData: ProductPageProps = {
  hero: {
    productName: "Deepfake Defender",
    headline: "Detect Deepfakes: Defending Digital Authenticity",
    subtitle:
      "Scam.ai's Deepfake Defender™ offers real-time analysis of video streams, providing critical intelligence to prevent identity fraud before it occurs.",
  },
  threatLandscape: {
    headline: "The Challenge of Synthetic Media",
    description:
      "Sophisticated AI can now generate content nearly indistinguishable from reality, creating unprecedented risks for identity verification, corporate security, and public trust.",
    keyThreats: [
      { icon: "ShieldAlert", text: "Identity Fraud & KYC Bypass" },
      { icon: "Briefcase", text: "Executive Impersonation" },
      { icon: "MessageSquareWarning", text: "Disinformation & Propaganda" },
    ],
    dataPoint:
      "By 2026, generative AI will account for over 30% of fraudulent attacks targeting remote identity verification. (Source: Gartner)",
  },
  solution: {
    productName: "Deepfake Defender™",
    headline: "Our Solution: Deepfake Defender™",
    description:
      "Deepfake Defender™ is a specialized AI model engineered to identify the subtle, microscopic traces left behind by generative tools, operating on a level beyond human perception.",
    coreDimensions: [
      { title: "Artifact Analysis", description: "Detects flaws in texture, lighting, and edges invisible to the human eye." },
      { title: "Temporal Consistency", description: "Verifies that motion, expressions, and biometrics are consistent across video frames." },
      { title: "Model Fingerprinting", description: "Identifies unique digital signatures left by specific generative models." },
    ],
    outputDescription:
      "The API returns a clean JSON object with a risk score, confidence level, and actionable evidence.",
  },
  advantages: {
    headline: "Why Choose Deepfake Defender™?",
    items: [
      { icon: "Zap", title: "Real-time Performance", description: "Millisecond latency for high-concurrency operations." },
      { icon: "Target", title: "Precision & Accuracy", description: "Industry-leading accuracy, trained on vast proprietary datasets." },
      { icon: "Globe", title: "Robust Coverage", description: "Reliable performance across diverse formats, qualities, and languages." },
      { icon: "BrainCircuit", title: "Constant Evolution", description: "Continuously updated by our ScamNet DB™ to counter emerging threats." },
    ],
  },
  useCases: {
    headline: "Applications & Use Cases",
    items: ["Financial KYC", "Insurance Claim Verification", "Media Authenticity", "Online Proctoring"],
  },
  apiSection: {
    headline: "Simple & Powerful API",
    description:
      "Integrate advanced detection capabilities with just a few lines of code. Our API is built for developer productivity and enterprise scale.",
    codeExample: {
      request: '{\n  "asset_uri": "https://example.com/kyc_video.mp4"\n}',
      response:
        '{\n  "request_id": "vid-abc-456",\n  "is_synthetic": true,\n  "confidence_score": 0.998,\n  "evidence": [\n    {\n      "region_coords": [450, 150, 250, 250],\n      "reason_code": "unnatural_eye_blinking"\n    }\n  ]\n}',
    },
  },
  cta: {
    headline: "Get Started",
    primary: { text: "Request a Demo", href: "/request-demo" },
    secondary: { text: "View API Docs", href: "/api-docs" },
  },
};

export function ProductPagePreview() {
  return (
    <div className="py-10">
      <ProductPage data={deepfakeProductData} />
    </div>
  );
}

export default ProductPage;
