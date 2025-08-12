// Research papers data
export const papers = [
  {
    id: "multimodal-llms-deepfake-detection",
    title: "Can Multi-modal (reasoning) LLMs work as deepfake detectors?",
    authors: ["Simiao Ren", "Yao Yao", "Kidus Zewde", "Zisheng Liang", "Tsang (Dennis)Ng", "Ning-Yau Cheng", "Xiaoou Zhan", "Qinzhe Liu", "Yifei Chen", "Hengwei Xu"],
    venue: "arXiv Preprint",
    year: 2025,
    publishDate: "March 25, 2025",
    date: "March 25, 2025",
    description: "Exploring the potential of state-of-the-art multi-modal reasoning large language models for deepfake image detection, benchmarking 12 latest models against traditional detection methods.",
    pdfUrl: "https://arxiv.org/abs/2503.20084",
    category: "Research",
    tags: ["Deepfake", "Multi-modal LLMs", "Computer Vision"],
    image: "/deepfake.webp",
    content: `Deepfake detection remains a critical challenge in the era of advanced generative models, particularly as synthetic media becomes more sophisticated. In this study, we explore the potential of state of the art multi-modal (reasoning) large language models (LLMs) for deepfake image detection.

## Abstract

We benchmark 12 latest multi-modal LLMs against traditional deepfake detection methods across multiple datasets, including recently published real-world deepfake imagery. The models evaluated include OpenAI O1/4o, Gemini thinking Flash 2, Deepseek Janus, Grok 3, llama 3.2, Qwen 2/2.5 VL, Mistral Pixtral, and Claude 3.5/3.7 sonnet.

## Methodology

To enhance performance, we employ prompt tuning and conduct an in-depth analysis of the models' reasoning pathways to identify key contributing factors in their decision-making process.

### Key Research Questions

- Can multi-modal LLMs effectively detect deepfakes?
- How do they compare to traditional detection methods?
- What factors contribute to their decision-making process?
- How do model size and reasoning capabilities affect performance?

## Key Findings

Our findings indicate several important insights:

- **Performance Variability**: Best multi-modal LLMs achieve competitive performance with promising generalization ability with zero shot
- **Outperformance**: Even surpass traditional deepfake detection pipelines in out-of-distribution datasets
- **Model Family Differences**: The rest of the LLM families performs extremely disappointing with some worse than random guess
- **Version Impact**: Newer model version and reasoning capabilities does not contribute to performance in such niche tasks of deepfake detection
- **Size Matters**: Model size do help in some cases

## Practical Implications

This study highlights the potential of integrating multi-modal reasoning in future deepfake detection frameworks and provides insights into model interpretability for robustness in real-world scenarios.

## Subjects

Computer Vision and Pattern Recognition (cs.CV); Artificial Intelligence (cs.AI)

## Citation

arXiv:2503.20084 [cs.CV] (or arXiv:2503.20084v2 [cs.CV] for this version)`,
  },
  {
    id: "deepfake-detectors-reality-evaluation",
    title: "Do Deepfake Detectors Work in Reality?",
    authors: ["Simiao Ren", "Hengwei Xu", "Tsang Ng", "Kidus Zewde", "Shengkai Jiang", "Ramini Desai", "Disha Patil", "Ning-Yau Cheng", "Yining Zhou", "Ragavi Muthukrishnan"],
    venue: "arXiv Preprint",
    year: 2025,
    publishDate: "February 15, 2025",
    date: "February 15, 2025",
    description: "A critical study revealing how post-processing steps like super-resolution substantially undermine existing deepfake detection methods in real-world scenarios.",
    pdfUrl: "https://arxiv.org/abs/2502.10920",
    category: "Publication",
    tags: ["Deepfake Detection", "Real-world Applications", "Computer Vision"],
    image: "/GenAI.webp",
    content: `Deepfakes, particularly those involving faceswap-based manipulations, have sparked significant societal concern due to their increasing realism and potential for misuse. Despite rapid advancements in generative models, detection methods have not kept pace, creating a critical gap in defense strategies.

## Abstract

This disparity is further amplified by the disconnect between academic research and real-world applications, which often prioritize different objectives and evaluation criteria. In this study, we take a pivotal step toward bridging this gap by presenting a novel observation: the post-processing step of super-resolution, commonly employed in real-world scenarios, substantially undermines the effectiveness of existing deepfake detection methods.

## Novel Contributions

### Real-World Dataset

To substantiate this claim, we introduce and publish the first real-world faceswap dataset, collected from popular online faceswap platforms.

### Performance Evaluation

We then qualitatively evaluate the performance of state-of-the-art deepfake detectors on real-world deepfakes, revealing that their accuracy approaches the level of random guessing.

### Quantitative Analysis

Furthermore, we quantitatively demonstrate the significant performance degradation caused by common post-processing techniques.

## Key Findings

### Critical Gap Identified

- **Academic vs Reality**: Significant disconnect between academic benchmarks and real-world performance
- **Post-processing Impact**: Super-resolution and other common post-processing steps severely degrade detection accuracy
- **Random Performance**: State-of-the-art detectors perform close to random guessing on real-world data

### Real-World Challenges

- **Platform Variations**: Different online platforms employ various post-processing techniques
- **Quality Enhancement**: Super-resolution improves visual quality but breaks detection methods
- **Evaluation Gaps**: Current academic evaluation doesn't reflect real-world usage

## Practical Impact

By addressing this overlooked challenge, our study underscores a critical avenue for enhancing the robustness and practical applicability of deepfake detection methods in real-world settings.

## Subjects

Computer Vision and Pattern Recognition (cs.CV); Artificial Intelligence (cs.AI)

## Citation

arXiv:2502.10920 [cs.CV] (or arXiv:2502.10920v1 [cs.CV] for this version)`,
  }
];

export type Paper = typeof papers[0];
