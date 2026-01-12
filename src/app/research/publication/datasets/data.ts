// Research datasets data
export const datasets = [
  {
    id: "real-world-faceswap-dataset",
    title: "Real-World Faceswap Dataset",
    description: "First comprehensive real-world faceswap dataset collected from popular online platforms, featuring post-processed deepfakes that reflect actual usage scenarios.",
    size: "500 GB",
    samples: "25,000",
    domains: ["Faceswap", "Real-world", "Post-processed"],
    downloadUrl: "https://github.com/scamai/real-world-faceswap-dataset",
    date: "February 15, 2025",
    image: "/000401_000402.jpg",
    category: "Dataset",
    license: "MIT License",
    paperReference: "deepfake-detectors-reality-evaluation",
    content: `The Real-World Faceswap Dataset addresses a critical gap in deepfake detection research by providing the first comprehensive collection of faceswap content that reflects actual real-world usage patterns.

## Overview

Traditional deepfake datasets primarily consist of laboratory-generated content that fails to capture the complexity and post-processing techniques commonly used in real-world scenarios. This dataset bridges that gap by collecting authentic faceswap content from popular online platforms.

## Dataset Composition

### Content Sources
- Popular online faceswap platforms
- Various quality levels and processing techniques
- Diverse demographic representation
- Multiple generation models and techniques

### Technical Specifications
- **Format**: MP4 videos and JPEG images
- **Resolution**: Various (240p to 4K)
- **Duration**: 1-30 seconds per video
- **Compression**: Multiple compression levels reflecting real usage

## Key Features

### Post-Processing Variety
- Super-resolution enhancement
- Noise reduction filters
- Color correction and enhancement
- Various compression artifacts

### Annotation Details
- Generation method labels
- Quality assessment scores
- Post-processing technique annotations
- Authenticity ground truth labels

## Research Applications

This dataset enables research into:
- Real-world deepfake detection robustness
- Post-processing impact analysis
- Cross-platform generalization studies
- Practical deployment evaluation

## Access and Usage

The dataset is available for academic research purposes. Commercial usage requires separate licensing. Please cite our accompanying paper when using this dataset in your research.

## Ethical Considerations

All content was collected with appropriate permissions and follows ethical guidelines for synthetic media research. Personal identifiable information has been appropriately handled according to privacy regulations.`,
  },
  {
    id: "multimodal-llm-evaluation-benchmark",
    title: "Multi-Modal LLM Evaluation Benchmark for Deepfake Detection",
    description: "Comprehensive benchmark dataset for evaluating multi-modal large language models on deepfake detection tasks, featuring curated test sets and evaluation protocols.",
    size: "1.2 TB",
    samples: "50,000",
    domains: ["Multi-modal", "LLM Evaluation", "Benchmark"],
    downloadUrl: "https://github.com/scamai/multimodal-llm-benchmark",
    date: "March 25, 2025",
    image: "/benchmark.png",
    category: "Benchmark",
    license: "Apache 2.0",
    paperReference: "multimodal-llms-deepfake-detection",
    content: `The Multi-Modal LLM Evaluation Benchmark provides a standardized framework for assessing the deepfake detection capabilities of large language models across various modalities and complexity levels.

## Benchmark Overview

This benchmark addresses the need for systematic evaluation of multi-modal LLMs in the context of deepfake detection, providing researchers with standardized metrics and evaluation protocols.

## Dataset Components

### Image Collections
- **High-Quality Deepfakes**: State-of-the-art synthetic images
- **Traditional Manipulations**: Classic photo editing techniques
- **Edge Cases**: Challenging examples that test model limits
- **Control Sets**: Authentic images for baseline comparison

### Evaluation Protocols
- **Zero-shot Evaluation**: No task-specific training
- **Few-shot Learning**: Limited example-based adaptation
- **Prompt Engineering**: Optimized instruction formats
- **Reasoning Analysis**: Explanation quality assessment

## Model Coverage

The benchmark supports evaluation of major LLM families:
- OpenAI models (GPT-4o, O1)
- Google models (Gemini Flash 2)
- Anthropic models (Claude 3.5/3.7 Sonnet)
- Open-source alternatives (Llama, Qwen, Mistral)

## Evaluation Metrics

### Performance Measures
- **Accuracy**: Correct classification rate
- **Precision/Recall**: Detailed performance breakdown
- **F1-Score**: Balanced performance metric
- **AUC-ROC**: Area under the receiver operating curve

### Reasoning Quality
- **Explanation Coherence**: Logic and consistency of reasoning
- **Evidence Identification**: Ability to point out specific artifacts
- **Confidence Calibration**: Alignment between confidence and accuracy

## Research Applications

This benchmark enables:
- Comparative analysis across LLM architectures
- Investigation of reasoning capabilities
- Development of improved prompting strategies
- Understanding of model limitations and strengths

## Usage Guidelines

The benchmark includes detailed documentation for:
- Setup and installation procedures
- Evaluation script usage
- Result interpretation guidelines
- Best practices for fair comparison

## Future Extensions

We plan to expand the benchmark with:
- Additional modalities (audio, video)
- More diverse synthetic content types
- Cross-lingual evaluation capabilities
- Adversarial robustness testing`,
  },
  {
    id: "scamnet-fraud-communications",
    title: "ScamNet Fraud Communications Dataset",
    description: "Large-scale dataset of labeled fraudulent and legitimate digital communications across multiple platforms and languages for training and evaluating fraud detection systems.",
    size: "800 GB",
    samples: "1,000,000",
    domains: ["Fraud Detection", "Digital Communications", "Multi-language"],
    downloadUrl: "https://github.com/scamai/scamnet-dataset",
    date: "January 10, 2025",
    image: "/dataset.png",
    category: "Dataset",
    license: "Custom Research License",
    paperReference: null,
    content: `The ScamNet Fraud Communications Dataset represents the largest publicly available collection of labeled fraudulent communications, enabling comprehensive research into digital fraud detection and prevention.

## Dataset Overview

This dataset addresses the critical need for large-scale, diverse training data in fraud detection research by providing real-world examples of fraudulent communications across multiple platforms and languages.

## Content Composition

### Communication Types
- **Email**: Phishing and legitimate emails
- **SMS/Text**: Smishing and normal messages  
- **Social Media**: Fraudulent and authentic posts
- **Instant Messages**: Chat-based scam attempts

### Language Coverage
- English (primary)
- Spanish, French, German
- Mandarin Chinese, Japanese
- Arabic, Portuguese, Russian
- Regional dialects and variations

## Annotation Framework

### Fraud Categories
- **Phishing**: Credential theft attempts
- **Financial Fraud**: Investment and payment scams
- **Identity Theft**: Personal information harvesting
- **Romance Scams**: Relationship-based fraud
- **Tech Support**: Fake technical assistance

### Quality Assurance
- Multi-annotator consensus
- Expert validation process
- Inter-annotator agreement metrics
- Continuous quality monitoring

## Technical Specifications

### Data Format
- JSON structured format
- Metadata preservation
- Privacy-compliant processing
- Standardized schema

### Privacy Protection
- Personal information anonymization
- Differential privacy techniques
- Compliance with GDPR/CCPA
- Ethical review board approval

## Research Applications

### Machine Learning
- Supervised learning model training
- Transfer learning across languages
- Few-shot learning evaluation
- Adversarial robustness testing

### Natural Language Processing
- Text classification benchmarks
- Multi-lingual model evaluation
- Feature engineering research
- Semantic analysis studies

## Access and Licensing

The dataset is available for academic and research purposes under our custom research license. Commercial applications require separate licensing agreements. All usage must comply with ethical guidelines and privacy regulations.

## Contributing

We welcome contributions from the research community:
- Additional language samples
- New fraud category examples
- Improved annotation guidelines
- Quality enhancement suggestions

## Maintenance and Updates

The dataset receives regular updates:
- Quarterly content additions
- Annual quality reviews
- Schema version updates
- Community feedback integration`,
  }
];

export type Dataset = typeof datasets[0];
