"use client";

import React, { useState } from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text:white text-white">
          Detect AI-Generated Images & Video: Verifying Reality in a Synthetic World
        </h1>
        <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
          Scam.ai&apos;s Visual Authenticity™ model analyzes visual content for the hidden signatures of generative AI, providing instant alerts before fake products, evidence, or realities can be used to deceive.
        </p>
      </div>
    </section>
  );
}

function InteractiveImageAnalysis() {
  const [analyzed, setAnalyzed] = useState<{ car: boolean; crowd: boolean }>({ car: false, crowd: false });
  const [isAnalyzing, setIsAnalyzing] = useState<null | "car" | "crowd">(null);

  const simulateAnalysis = (scenario: "car" | "crowd") => {
    if (isAnalyzing) return;
    setIsAnalyzing(scenario);
    setTimeout(() => {
      setAnalyzed((prev) => ({ ...prev, [scenario]: true }));
      setIsAnalyzing(null);
    }, 1500);
  };

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">
          See For Yourself: Can You Spot What&apos;s Not Real?
        </h2>
        <p className="mt-4 text-lg text-white/80 text-center max-w-3xl mx-auto">
          Our technology identifies images and videos created from scratch by generative AI models like Midjourney and Sora. Test it on the examples below.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Scenario 1: The "Too Good to be True" Product */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="aspect-video bg-gradient-to-br from-orange-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white/80 text-sm">Hyper-futuristic sports car on mountain road</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Scenario 1: The &quot;Too Good to be True&quot; Product</h3>
            <p className="text-white/80 text-sm mb-4">
              An image of a hyper-futuristic, sleek sports car on a perfect mountain road at sunset.
            </p>
            <button
              type="button"
              onClick={() => simulateAnalysis("car")}
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isAnalyzing !== null}
            >
              <span aria-hidden>🔍</span>
              {isAnalyzing === "car" ? "Analyzing..." : "Analyze Image"}
            </button>
            {analyzed.car && (
              <div className="mt-4 rounded-md bg-red-500/20 p-3 text-sm font-semibold text-red-300">
                DETECTED: AI-GENERATED (99.2% Confidence)
                <br />
                <span className="text-xs text-red-400">Unnaturally perfect reflections highlighted</span>
              </div>
            )}
          </div>

          {/* Scenario 2: The Fake News Photo */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white/80 text-sm">Crowd of protestors in city square</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Scenario 2: The Fake News Photo</h3>
            <p className="text-white/80 text-sm mb-4">
              A photorealistic image of a large crowd of protestors in a city square, but some people in the background have distorted faces or hands.
            </p>
            <button
              type="button"
              onClick={() => simulateAnalysis("crowd")}
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isAnalyzing !== null}
            >
              <span aria-hidden>🔍</span>
              {isAnalyzing === "crowd" ? "Analyzing..." : "Analyze Image"}
            </button>
            {analyzed.crowd && (
              <div className="mt-4 rounded-md bg-red-500/20 p-3 text-sm font-semibold text-red-300">
                DETECTED: AI-GENERATED (98.5% Confidence)
                <br />
                <span className="text-xs text-red-400">Flawed hands and faces circled</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreatLandscapeSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">
          The Threat: Is Any Image Real Anymore?
        </h2>
        <div className="mt-8 rounded-lg bg-white/5 border border-white/10 p-4 grid place-items-center">
          <Image
            src="/visual.webp"
            alt="Visual generation threat landscape"
            width={640}
            height={128}
            className="h-32 w-auto object-contain opacity-70"
          />
        </div>
        <p className="mt-6 text-lg text-white/80">
          With text-to-image and text-to-video models, anyone can create convincing, high-resolution visuals of anything imaginable in seconds. This has created a new wave of fraud based on fabricating reality itself, rendering simple visual inspection obsolete.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 rounded-lg bg:white/5 bg-white/5 p-4">
            <span aria-hidden className="h-5 w-5">💵</span>
            <div>
              <p className="font-semibold text-white">E-commerce & Product Fraud</p>
              <p className="text-sm text-white/80">Scammers use AI to generate alluring images of products that don&apos;t exist, taking payment for items they can never ship.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <span aria-hidden className="h-5 w-5">🖼️</span>
            <div>
              <p className="font-semibold text-white">Fabricated Evidence & Forgery</p>
              <p className="text-sm text-white/80">Creating fake but realistic photo or video &quot;evidence&quot; for use in insurance claims, legal disputes, or news reports.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <span aria-hidden className="h-5 w-5">❤️</span>
            <div>
              <p className="font-semibold text-white">Advanced Catfishing & Romance Scams</p>
              <p className="text-sm text-white/80">Using unique, hyper-realistic, and completely fake profile pictures that cannot be found with a reverse image search.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <span aria-hidden className="h-5 w-5">©️</span>
            <div>
              <p className="font-semibold text-white">Brand & Copyright Dilution</p>
              <p className="text-sm text-white/80">Generating imagery that mimics a company&apos;s unique branding or an artist&apos;s style without authorization, creating confusion and infringement.</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-white/60">
          Data Point: As of August 2025, it is estimated that over 15 billion images have been created by generative AI models, with less than 5% containing visible watermarks or disclosures.
        </p>
        <p className="mt-2 text-sm text-blue-400 font-semibold">
          <a href="#" className="hover:underline">See real-world case studies of fraud here -&gt;</a>
        </p>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">Our Solution: Visual Authenticity™ — The Pixel Provenance Expert</h2>
        <div className="mt-8 rounded-lg bg-white/5 border border-white/10 p-4 grid place-items-center">
          <Image
            src="/visual.webp"
            alt="Visual Authenticity diagram placeholder"
            width={640}
            height={128}
            className="h-32 w-auto object-contain opacity-70"
          />
        </div>
        <p className="mt-6 text-lg text-white/80">
          Visual Authenticity™ acts as a digital art forensics expert. It looks beyond what an image depicts and analyzes the very fabric of its pixels to determine its origin—whether it was captured by a camera or created by a generative model.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-white">Generative Model Fingerprinting</h4>
            <p className="mt-2 text-sm text-white/80">Identifies the invisible, systematic patterns and noise profiles that are unique to specific families of generative models (e.g., the digital &quot;brushstrokes&quot; of DALL-E vs. Midjourney).</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-white">Unnatural Detail & Consistency Analysis</h4>
            <p className="mt-2 text-sm text-white/80">Scrutinizes images for tell-tale AI flaws, such as flawed physics in shadows and reflections, unnatural symmetry, or illogical details in complex backgrounds.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-white">Frequency Spectrum Analysis</h4>
            <p className="mt-2 text-sm text-white/80">Analyzes the image in the frequency domain to spot the overly smooth or unnaturally regular patterns that are characteristic of generated, rather than naturally captured, visual information.</p>
          </div>
        </div>

        <p className="mt-6 text-sm text-white/70">
          The Output: The API returns a JSON object in real-time, containing an &quot;is_generated&quot; boolean, a &quot;confidence_score&quot;, and a prediction of the &quot;source_model_family&quot;.
        </p>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">Our Advantage: Why Choose Visual Authenticity™?</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span aria-hidden>⚡</span>
              <h4 className="font-semibold text-white">Millisecond-Level Response</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Optimized for real-time communications like phone calls and voice chat, ensuring instant detection with no perceivable latency.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span aria-hidden>🎯</span>
              <h4 className="font-semibold text-white">Unparalleled Accuracy</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Trained on the world&apos;s largest proprietary database of synthetic and real visual data, achieving industry-leading low false-positive and high-recall rates.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span aria-hidden>🛡️</span>
              <h4 className="font-semibold text-white">Exceptional Robustness</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Maintains stable, high-performance detection even across various compression formats and image qualities.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span aria-hidden>🧠</span>
              <h4 className="font-semibold text-white">Constantly Evolving</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Our model continuously learns from the latest global scam attempts and emerging generation techniques, allowing it to self-evolve and always stay one step ahead of attackers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommandCenterSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">Unified Command Center: A Panoramic View of Risk</h2>
        <div className="mt-8 rounded-lg bg-white/5 border border-white/10 shadow p-4 grid place-items-center">
          <Image src="/visual.webp" alt="Command center dashboard placeholder" width={680} height={160} className="h-40 w-auto object-contain opacity-70" />
        </div>
        <p className="mt-6 text-lg text-white/80">
          There&apos;s no need to switch between systems. Scam.ai aggregates all alerts from Visual Authenticity™, our Deepfake and Voice detection models, and all other services into a single, powerful, and intuitive dashboard.
        </p>
        <ul className="mt-6 space-y-3">
          <li className="flex items-start gap-3 text-white/80">
            <span aria-hidden>✅</span>
            <span className="text-white/80"><strong>Global Perspective:</strong> A one-stop view of AI security risks from all channels—video, voice, and text.</span>
          </li>
          <li className="flex items-start gap-3 text-white/80">
            <span aria-hidden>✅</span>
            <span className="text-white/80"><strong>Rapid Response:</strong> Go from threat discovery to action within a single interface, dramatically reducing response time.</span>
          </li>
          <li className="flex items-start gap-3 text-white/80">
            <span aria-hidden>✅</span>
            <span className="text-white/80"><strong>Deep Tracing:</strong> Correlate and analyze alerts from different channels to uncover the full path of a coordinated attack.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">Use Cases & Applications</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">E-commerce & Marketplace Trust</h4>
            <p className="mt-2 text-sm text-white/80">Automatically scan product listings to detect and flag listings that use AI-generated images of non-existent items.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">Insurance & Financial Services</h4>
            <p className="mt-2 text-sm text-white/80">Validate the authenticity of photo and video evidence submitted for claims or applications.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">Social Media & Dating Apps</h4>
            <p className="mt-2 text-sm text:white/80 text-white/80">Protect users by identifying and flagging profiles that use entirely synthetic images.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">Legal & News Media</h4>
            <p className="mt-2 text-sm text-white/80">Verify the provenance of visual evidence and source material to ensure authenticity before publication or submission.</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-blue-400 font-semibold">
          <a href="#" className="hover:underline">Learn how leading companies are using our technology in our Case Studies -&gt;</a>
        </p>
      </div>
    </section>
  );
}

function ApiIntegrationSection() {
  const request = `// API Request
{
  "image_url": "https://example.com/product_image.jpg"
}`;
  const response = `// API Response
{
  "request_id": "img-abc-123",
  "is_generated": true,
  "confidence_score": 0.992,
  "predicted_source_family": "Midjourney"
}`;

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">Seamless Integration & Code Example</h2>
        <p className="mt-4 text-lg text-white/80 text-center max-w-3xl mx-auto">
          Integrate Visual Authenticity™ easily with our clear and robust API.
        </p>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-lg bg-slate-900 text-gray-200 p-4">
            <div className="text-sm text-gray-400 font-mono">API Request</div>
            <pre className="mt-2 overflow-auto text-sm font-mono"><code>{request}</code></pre>
          </div>
          <div className="rounded-lg bg-slate-900 text-gray-200 p-4">
            <div className="text-sm text-gray-400 font-mono">API Response</div>
            <pre className="mt-2 overflow-auto text-sm font-mono"><code>{response}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white">Take the Next Step</h2>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="/demo-request" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-bold hover:bg-blue-700">
            Request a Demo
          </a>
          <a href="/api-docs" className="inline-flex items-center justify-center rounded-lg bg-gray-200 px-5 py-3 text-gray-800 font-bold hover:bg-gray-300">
            View API Docs
          </a>
        </div>
      </div>
    </section>
  );
}

export default function AIGeneratedMediaProductPage() {
  return (
    <main className="max-w-5xl mx-auto px-4">
      <HeroSection />
      <InteractiveImageAnalysis />
      <ThreatLandscapeSection />
      <SolutionSection />
      <AdvantagesSection />
      <CommandCenterSection />
      <UseCasesSection />
      <ApiIntegrationSection />
      <CtaSection />
    </main>
  );
}
