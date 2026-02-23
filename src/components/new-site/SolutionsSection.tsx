"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const solutions = [
  {
    title: "Deepfake Detection",
    description: "Detect face swaps, lip-sync attacks, and AI-generated faces across images and video in real time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M2 2l20 20" />
      </svg>
    ),
  },
  {
    title: "GenAI Detection",
    description: "Identify synthetic content from diffusion models, GANs, and LLMs before it enters your pipeline.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Voice Clone Detection",
    description: "Catch cloned voices and synthetic speech targeting call centers and voice authentication systems.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    title: "Remote Notary Detection",
    description: "Verify signer identity during remote notarizations. Stop deepfakes before documents are sealed.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Age Estimation & IDV",
    description: "AI-powered age estimation and ID verification that catches synthetic IDs and manipulated selfies.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <circle cx="8" cy="11" r="2.5" />
        <path d="M14 10h4" />
        <path d="M14 14h4" />
        <path d="M5 17c0-1.5 1.5-3 3-3s3 1.5 3 3" />
      </svg>
    ),
  },
  {
    title: "Document Forgery Detection",
    description: "Forensic analysis of AI-generated and manipulated documents, from bank statements to pay stubs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "AI Agent Scam Prevention",
    description: "Block social engineering, prompt injection, and identity spoofing targeting AI-powered workflows.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M7 20h10" />
        <path d="M12 16v4" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Remote Interview Integrity",
    description: "Verify candidate identity and detect deepfakes during live video interviews in real time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
        <circle cx="8.5" cy="10" r="2" />
        <path d="M5.5 16c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5" />
      </svg>
    ),
  },
];

function SolutionCard({
  solution,
  delay,
}: {
  solution: (typeof solutions)[number];
  delay: number;
}) {
  return (
    <AnimatedCard delay={delay}>
      <div className="group relative h-full rounded-2xl border border-gray-800/60 bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#245FFF]/30 hover:bg-white/[0.04]">
        <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#245FFF]/10 text-[#245FFF]">
          {solution.icon}
        </div>
        <h3 className="text-base font-semibold text-white mb-2 leading-tight">
          {solution.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {solution.description}
        </p>
      </div>
    </AnimatedCard>
  );
}

export default function SolutionsSection() {
  return (
    <section
      className="landing-section relative overflow-hidden bg-black"
      aria-label="Solutions - AI Fraud Prevention"
      id="solutions"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:max-w-7xl py-16 sm:py-20 lg:py-28">
        {/* Section Header */}
        <AnimatedCard>
          <div className="text-center mb-10 lg:mb-14">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#245FFF] mb-3 sm:text-[10px] lg:mb-4">
              SOLUTIONS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-4 lg:mb-5">
              The trust infrastructure{" "}
              <br className="hidden sm:block" />
              for the <span className="text-[#245FFF]">AI era</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray-500 leading-relaxed">
              Detect deepfakes, synthetic media, voice clones, and document
              fraud — across people, documents, and AI agents.
            </p>
          </div>
        </AnimatedCard>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              solution={solution}
              delay={0.08 * (index + 1)}
            />
          ))}
        </div>

        {/* CTA */}
        <AnimatedCard delay={0.8}>
          <div className="text-center mt-8 lg:mt-10">
            <a
              href="https://cal.com/scamai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#245FFF] hover:text-white transition-colors"
            >
              Book a demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
