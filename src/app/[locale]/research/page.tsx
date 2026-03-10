"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { trackCTA } from "@/lib/analytics";

function AnimatedSection({
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
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ResearchPaper = {
  title: string;
  authors?: string;
  link?: string;
  coming?: boolean;
};

type ResearchCategory = {
  category: string;
  tags: string[];
  papers: ResearchPaper[];
};

const researchCategories: ResearchCategory[] = [
  {
    category: "Document Forgery",
    tags: ["Document Forgery", "Benchmark"],
    papers: [
      {
        title: "DOCFORGE-BENCH: A Comprehensive Benchmark for Document Forgery Detection and Analysis",
        authors: "Zengqi Zhao, Weidi Xia, Peter Wei, Yan Zhang, Yiyi Zhang, Jane Mo, Tiannan Zhang, Yuanqin Dai, Zexi Chen, Simiao Ren",
        link: "https://arxiv.org/abs/2603.01433",
      },
      {
        title: "AIForge-Doc: A Benchmark for Detecting AI-Forged Tampering in Financial and Form Documents",
        authors: "Jiaqi Wu, Yuchen Zhou, Muduo Xu, Zisheng Liang, Simiao Ren, Jiayu Xue, Meige Yang, Siying Chen, Jingheng Huan",
        link: "https://arxiv.org/abs/2602.20569",
      },
      {
        title: "Can Multi-modal (reasoning) LLMs detect document manipulation?",
        authors: "Zisheng Liang, Kidus Zewde, Rudra Pratap Singh, Disha Patil, Zexi Chen, Jiayu Xue, Yao Yao, Yifei Chen, Qinzhe Liu, Simiao Ren",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=n4B3bH4AAAAJ&sortby=pubdate&citation_for_view=n4B3bH4AAAAJ:2KloaMYe4IUC",
      },
      { title: "Can fully synthetic AI-generated financial documents fool humans?", coming: true },
    ],
  },
  {
    category: "Age Estimation",
    tags: ["Age Estimation", "Benchmark"],
    papers: [
      {
        title: "Can a Teenager Fool an AI? Evaluating Low-Cost Cosmetic Attacks on Age Estimation Systems",
        authors: "Xingyu Shen, Tommy Duong, Xiaodong An, Zengqi Zhao, Zebang Hu, Haoyu Hu, Ziyou Wang, Finn Guo, Simiao Ren",
        link: "https://arxiv.org/abs/2602.19539",
      },
      {
        title: "Out of the box age estimation through facial imagery: A Comprehensive Benchmark of Vision-Language Models vs. out-of-the-box Traditional Architectures",
        authors: "Simiao Ren, Xingyu Shen, Ankit Raj, Albert Dai, Caroline Zhang, Yuan Xu, Zexi Chen, Siqi Wu, Chen Gong, Yuxin Zhang",
        link: "https://arxiv.org/abs/2602.07815",
      },
    ],
  },
  {
    category: "AI-Generated Detection",
    tags: ["AI Detection", "Benchmark"],
    papers: [
      {
        title: "How well are open sourced AI-generated image detection models out-of-the-box: A comprehensive benchmark study",
        authors: "Simiao Ren, Yuchen Zhou, Xingyu Shen, Kidus Zewde, Tommy Duong, George Huang, Neo Tiangratanakul, Dennis Ng, En Wei, Jiayu Xue",
        link: "https://arxiv.org/abs/2602.07814",
      },
      { title: "Survey on the development of AI-generated and deepfake detection", coming: true },
    ],
  },
  {
    category: "Deepfake Detection",
    tags: ["Deepfake Detection"],
    papers: [
      {
        title: "Do deepfake detectors work in reality?",
        authors: "Simiao Ren, Disha Patil, Kidus Zewde, Dennis Ng, Hengwei Xu, Shengkai Jiang, Ramini Desai, Ning-Yau Cheng, Yining Zhou, Ragavi Muthukrishnan",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=n4B3bH4AAAAJ&sortby=pubdate&citation_for_view=n4B3bH4AAAAJ:tKAzc9rXhukC",
      },
      {
        title: "Can Multi-modal (reasoning) LLMs work as deepfake detectors?",
        authors: "Simiao Ren, Yao Yao, Kidus Zewde, Zisheng Liang, Ning-Yau Cheng, Xiaoou Zhan, Qinzhe Liu, Yifei Chen, Hengwei Xu",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=n4B3bH4AAAAJ&sortby=pubdate&citation_for_view=n4B3bH4AAAAJ:ZfRJV9d4-WMC",
      },
    ],
  },
  {
    category: "Interview Tech",
    tags: ["Interview", "Gaze Estimation"],
    papers: [
      { title: "Reading gaze estimation dataset for robust cheating identification", coming: true },
    ],
  },
];

type Dataset = {
  name: string;
  coming?: boolean;
};

const datasets: Dataset[] = [
  { name: "Real-world deepfake dataset" },
  { name: "AI-edit document forgery dataset (AIForge-Doc)" },
  { name: "Adversarial age estimation attack dataset" },
  { name: "Fully-synthetic AI-generated receipt dataset", coming: true },
  { name: "Simulated gaze estimation for reading dataset", coming: true },
];

const stats = [
  { label: "Research Papers", value: `${researchCategories.reduce((sum, c) => sum + c.papers.length, 0)}` },
  { label: "Research Areas", value: `${researchCategories.length}` },
  { label: "Open Datasets", value: `${datasets.length}` },
  { label: "Coming Soon", value: `${researchCategories.reduce((sum, c) => sum + c.papers.filter(p => p.coming).length, 0) + datasets.filter(d => d.coming).length}` },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 sm:px-8 pb-14 sm:pb-20" style={{ paddingTop: '180px' }}>
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#245FFF] mb-3 sm:text-[10px] lg:mb-4">
                RESEARCH
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-4 lg:mb-6">
                Advancing the science of{" "}
                <span className="text-[#245FFF]">AI trust</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl">
                Our research focuses on deepfake detection, synthetic media forensics, and adversarial
                robustness. We publish our findings to advance the field and keep our customers ahead of
                emerging threats.
              </p>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 lg:mt-14">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-800/60 bg-white/[0.02] p-4 sm:p-5"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        <div className="section-divider" />

        {/* Papers */}
        <section className="mx-auto max-w-6xl px-4 sm:px-8 py-14 sm:py-20">
          <AnimatedSection>
            <div className="mb-8 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Publications & Reports
              </h2>
              <p className="text-sm text-gray-500">
                Research from the ScamAI team across deepfake detection, document forgery, age estimation, and more.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {researchCategories.map((cat, catIndex) => (
              <AnimatedSection key={cat.category} delay={0.08 * (catIndex + 1)}>
                <div className="rounded-xl sm:rounded-2xl border border-gray-800/60 bg-white/[0.02] p-5 sm:p-7">
                  {/* Category header */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#245FFF]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#245FFF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
                    {cat.category}
                  </h3>

                  {/* Paper list */}
                  <ul className="space-y-4">
                    {cat.papers.map((paper) => (
                      <li key={paper.title} className="flex items-start gap-3 group">
                        <svg className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                          {paper.coming ? (
                            <span className="text-sm leading-snug text-gray-500">
                              <span className="inline-block rounded bg-white/5 border border-gray-800/60 px-1.5 py-0.5 text-[10px] font-medium text-gray-500 mr-2">
                                Coming
                              </span>
                              {paper.title}
                            </span>
                          ) : paper.link ? (
                            <>
                              <a
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm leading-snug text-gray-300 hover:text-[#245FFF] transition-colors"
                              >
                                {paper.title}
                                <svg className="inline-block w-3 h-3 ml-1.5 -mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                              {paper.authors && (
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{paper.authors}</p>
                              )}
                            </>
                          ) : (
                            <span className="text-sm leading-snug text-gray-300">{paper.title}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Datasets */}
        <section className="mx-auto max-w-6xl px-4 sm:px-8 py-14 sm:py-20">
          <AnimatedSection>
            <div className="mb-8 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Datasets
              </h2>
              <p className="text-sm text-gray-500 max-w-xl">
                Curated datasets to help researchers benchmark detection models.
                Contact us for access.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {datasets.map((dataset, index) => (
              <AnimatedSection key={dataset.name} delay={0.08 * (index + 1)}>
                <div className="group flex flex-col h-full rounded-xl sm:rounded-2xl border border-gray-800/60 bg-white/[0.02] p-5 sm:p-6 transition-all duration-300 hover:border-[#245FFF]/20 hover:bg-white/[0.04]">
                  <div className="flex items-start gap-3 flex-1">
                    <svg className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-[#245FFF] transition-colors">
                        {dataset.name}
                      </h3>
                      {dataset.coming && (
                        <span className="inline-block rounded bg-white/5 border border-gray-800/60 px-1.5 py-0.5 text-[10px] font-medium text-gray-500">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </div>

                  {!dataset.coming && (
                    <button
                      onClick={() => {
                        trackCTA(`dataset:${dataset.name}`, "dataset_access");
                        window.open("https://cal.com/scamai/15min", "_blank", "noopener,noreferrer");
                      }}
                      className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg border border-gray-800/60 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-white transition-all hover:border-[#245FFF]/30 hover:bg-[#245FFF]/5 hover:text-[#245FFF]"
                    >
                      Request Access
                    </button>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 sm:px-8 py-14 sm:py-20">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Interested in collaborating?
              </h2>
              <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
                We partner with academic institutions and industry labs on deepfake detection research.
              </p>
              <a
                href="https://cal.com/scamai/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#245FFF] px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1d4acc]"
              >
                Get in touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </section>
      </main>
    </div>
  );
}
