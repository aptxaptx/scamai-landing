"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is included in the free tier?",
    answer: "The free tier includes 200 images per month analyzed with our Eva-v1-Fast model. This includes GenAI detection, deepfake analysis, API access, and dashboard analytics. No credit card required to get started."
  },
  {
    question: "What's the difference between Eva-v1-Fast and Eva-v1-Pro?",
    answer: "Eva-v1-Fast is our standard model optimized for speed and efficiency, perfect for most use cases. Eva-v1-Pro is our forensic-grade model with significantly lower false positives and enhanced detection capabilities, available exclusively for Enterprise customers. Pro provides court-admissible evidence-level accuracy and more sophisticated analysis for high-stakes applications."
  },
  {
    question: "How does pricing work after the free tier?",
    answer: "After your 200 free images per month, you pay $0.15 per image analyzed. You can also add optional features like Adaptive Defense (+$0.20/image), Active Liveness (+$0.10/image), or Express Lane (+$0.10/image) for enhanced capabilities."
  },
  {
    question: "What types of media can I analyze?",
    answer: "Our platform supports analysis of images, audio files, and video content. We detect GenAI-generated content, deepfakes, synthetic media, face swaps, voice clones, and various forms of media manipulation across all supported formats."
  },
  {
    question: "Do you offer volume discounts?",
    answer: "Yes! For organizations processing more than 2,000 images per month, we offer custom Enterprise pricing with volume discounts, dedicated support, and access to advanced models like Eva-v1-Pro and Thinking. Contact our sales team to discuss your specific needs."
  },
  {
    question: "What is the Thinking feature?",
    answer: "Thinking is our advanced reasoning capability available exclusively in the Enterprise tier. It provides deeper analysis and context-aware detection, helping identify sophisticated manipulation techniques and providing detailed explanations of detection results."
  },
  {
    question: "How accurate is your detection?",
    answer: "Our Eva models are continuously trained on the latest GenAI and deepfake techniques, maintaining industry-leading accuracy. Eva-v1-Fast provides excellent accuracy for most use cases, while Eva-v1-Pro delivers forensic-grade precision with significantly lower false positives, suitable for legal and high-stakes applications. Detection confidence scores are provided with each analysis, and our Adaptive Defense add-on provides real-time protection against emerging threats."
  },
  {
    question: "Can I integrate this into my existing application?",
    answer: "Absolutely! We provide a RESTful API for easy integration into any application. Our API supports synchronous and asynchronous processing, webhooks for notifications, and comprehensive documentation. Enterprise customers receive dedicated integration support."
  },
  {
    question: "What is your data retention policy?",
    answer: "We are GDPR compliant and SOC 2 Type II certified. Your data security is our priority. We only retain data as necessary for service delivery and provide full data retention controls. Enterprise customers can customize retention policies to meet their specific compliance requirements."
  },
  {
    question: "How do I get started?",
    answer: "Simply sign up for a free account at app.scam.ai to get immediate access to 200 free image analyses per month with our Eva-v1-Fast model. No credit card required. You can upgrade to paid plans or contact sales for Enterprise options at any time."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="landing-section relative overflow-hidden bg-black" 
      aria-label="Frequently Asked Questions"
      style={{ paddingTop: '80px', paddingBottom: '80px' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
      
      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#245FFF] mb-4 sm:text-xs">
            SUPPORT
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Everything you need to know about our GenAI and deepfake detection platform
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/30 rounded-2xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-gray-700"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-start justify-between text-left transition-colors hover:bg-gray-800/30"
                aria-expanded={openIndex === index}
              >
                <span className="text-base sm:text-lg font-semibold text-white pr-8 leading-relaxed">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#245FFF] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="https://cal.com/scamai/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#245FFF] text-white font-semibold hover:bg-[#1d4acc] transition-colors"
          >
            Schedule a Call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
