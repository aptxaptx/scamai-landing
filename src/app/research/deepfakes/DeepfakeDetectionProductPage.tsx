"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Play,
  Eye,
  Building,
  UserCheck,
  Megaphone,
  AlertTriangle,
  Zap,
  Target,
  ShieldCheck,
  BrainCircuit,
  CheckCircle,
} from "lucide-react";

function HeroSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Real-Time Deepfake Detection: Defending the Truth in Visual Content
        </h1>
        <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
          Scam.ai&apos;s Video Integrity™ model analyzes video and images frame-by-frame, providing instant, precise alerts before deepfake content can cause identity fraud or reputational damage.
        </p>
      </div>
    </section>
  );
}

function InteractiveVideoAnalysis() {
  const [analyzed, setAnalyzed] = useState<{ ceo: boolean; kyc: boolean }>({ ceo: false, kyc: false });
  const [isPlaying, setIsPlaying] = useState<null | "ceo" | "kyc">(null);

  const simulatePlay = (scenario: "ceo" | "kyc") => {
    if (isPlaying) return;
    setIsPlaying(scenario);
    setTimeout(() => {
      setAnalyzed((prev) => ({ ...prev, [scenario]: true }));
      setIsPlaying(null);
    }, 2000);
  };

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">
          See For Yourself: Can You Spot the Fake?
        </h2>
        <p className="mt-4 text-lg text-white/80 text-center max-w-3xl mx-auto">
          Our technology sees what the human eye misses. The video clips below are AI-generated deepfakes, detected instantly by Video Integrity™.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CEO Statement Video */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center relative">
              <span className="text-white/80 text-sm text-center">Generic CEO giving a statement</span>
              <button
                type="button"
                onClick={() => simulatePlay("ceo")}
                className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg hover:bg-black/30 disabled:cursor-not-allowed"
                disabled={isPlaying !== null}
              >
                <Play className="h-12 w-12 text-white" fill="white" />
              </button>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">CEO Statement Video</h3>
            <p className="text-white/80 text-sm mb-4">
              {isPlaying === "ceo" ? "Playing: A short clip of a CEO speaking. The facial movements are slightly unnatural." : "Click to play the video analysis demo."}
            </p>
            {analyzed.ceo && (
              <div className="mt-4 rounded-md bg-red-500/20 p-3 text-sm font-semibold text-red-300">
                DETECTED: DEEPFAKE (99.8% Confidence)
                <br />
                <span className="text-xs text-red-400">Red box drawn around face during playback</span>
              </div>
            )}
          </div>

          {/* KYC Selfie Video */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center relative">
              <span className="text-white/80 text-sm text-center">Customer KYC selfie video</span>
              <button
                type="button"
                onClick={() => simulatePlay("kyc")}
                className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg hover:bg-black/30 disabled:cursor-not-allowed"
                disabled={isPlaying !== null}
              >
                <Play className="h-12 w-12 text-white" fill="white" />
              </button>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">KYC Liveness Check</h3>
            <p className="text-white/80 text-sm mb-4">
              {isPlaying === "kyc" ? "Playing: A person turns their head for a liveness check, but the reflection in their eyes doesn't match the background." : "Click to play the video analysis demo."}
            </p>
            {analyzed.kyc && (
              <div className="mt-4 rounded-md bg-red-500/20 p-3 text-sm font-semibold text-red-300">
                DETECTED: DEEPFAKE (99.5% Confidence)
                <br />
                <span className="text-xs text-red-400">Red box drawn around face during playback</span>
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
          The Threat: &quot;Seeing is Believing&quot; Is a Thing of the Past
        </h2>
        <div className="mt-8 rounded-lg bg-white/5 border border-white/10 p-4 grid place-items-center">
          <Image
            src="/visual.webp"
            alt="Deepfake threat landscape"
            width={640}
            height={128}
            className="h-32 w-auto object-contain opacity-70"
          />
        </div>
        <p className="mt-6 text-lg text-white/80">
          Today, creating a deepfake video convincing enough to fool human eyes—and even traditional bank KYC systems—costs just a few dollars. Is your verification process ready for this challenge?
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <UserCheck className="h-5 w-5 text-white" />
            <div>
              <p className="font-semibold text-white">Identity Verification Fraud (KYC Fraud)</p>
              <p className="text-sm text-white/80">Attackers use dynamic, fake face videos to bypass &quot;liveness detection&quot; checks at financial institutions and exchanges.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <Building className="h-5 w-5 text-white" />
            <div>
              <p className="font-semibold text-white">Executive Impersonation</p>
              <p className="text-sm text-white/80">Forging the likeness of a CEO or CFO in a video conference to issue fraudulent directives.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <Megaphone className="h-5 w-5 text-white" />
            <div>
              <p className="font-semibold text-white">Disinformation & News Manipulation</p>
              <p className="text-sm text-white/80">Maliciously creating videos of public figures to cause social panic or damage a company&apos;s reputation.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <AlertTriangle className="h-5 w-5 text-white" />
            <div>
              <p className="font-semibold text-white">Blackmail & Defamation</p>
              <p className="text-sm text-white/80">Synthesizing an individual&apos;s face into inappropriate videos for extortion.</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-white/60">
          Data Point: According to Gartner, up to 30% of video and image content in corporate communications will be synthetically altered by AI by 2026.
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
        <h2 className="text-3xl font-bold text-center text-white">Our Solution: Video Integrity™ — The Digital Forensics Expert</h2>
        <div className="mt-8 rounded-lg bg-white/5 border border-white/10 p-4 grid place-items-center">
          <Image
            src="/visual.webp"
            alt="Video Integrity diagram placeholder"
            width={640}
            height={128}
            className="h-32 w-auto object-contain opacity-70"
          />
        </div>
        <p className="mt-6 text-lg text-white/80">
          Video Integrity™ employs a multi-dimensional analysis engine, acting like a seasoned digital forensics expert to catch the microscopic flaws left behind by AI generation models—flaws that are invisible to the naked eye.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-white">Spatial Artifact Analysis</h4>
            <p className="mt-2 text-sm text-white/80">Detects unnatural transitions and flaws in facial features, lighting reflections, and skin textures.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-white">Temporal Consistency Detection</h4>
            <p className="mt-2 text-sm text-white/80">Analyzes the consistency of micro-expressions, blink rates, and even pulse-related color changes in skin between video frames to see if they align with real human physiology.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-white">Generative Model Fingerprinting</h4>
            <p className="mt-2 text-sm text-white/80">Identifies the unique, underlying pixel patterns or &quot;digital fingerprints&quot; left by specific AI generation models (like StyleGAN, Diffusion Models).</p>
          </div>
        </div>

        <p className="mt-6 text-sm text-white/70">
          The Output: The API returns a JSON object in real-time, containing an &quot;is_deepfake&quot; boolean, a &quot;confidence_score&quot;, and the coordinates of &quot;suspicious_regions&quot;.
        </p>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">Our Advantage: Why Choose Video Integrity™?</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-white" />
              <h4 className="font-semibold text-white">Millisecond-Level Response</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Optimized for real-time communications like phone calls and voice chat, ensuring instant detection with no perceivable latency.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-white" />
              <h4 className="font-semibold text-white">Unparalleled Accuracy</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Trained on the world&apos;s largest proprietary database of synthetic and real video data, achieving industry-leading low false-positive and high-recall rates.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-white" />
              <h4 className="font-semibold text-white">Exceptional Robustness</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Maintains stable, high-performance detection even in noisy environments, across various network compression formats (like VoIP), and in multiple languages.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <BrainCircuit className="h-5 w-5 text-white" />
              <h4 className="font-semibold text-white">Constantly Evolving</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Our model continuously learns from the latest global scam attempts and emerging cloning techniques, allowing it to self-evolve and always stay one step ahead of attackers.</p>
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
          There&apos;s no need to switch between systems. Scam.ai aggregates all alerts from Video Integrity™, our Voice Clone Detection models, and all other services into a single, powerful, and intuitive dashboard.
        </p>
        <ul className="mt-6 space-y-3">
          <li className="flex items-start gap-3 text-white/80">
            <CheckCircle className="h-5 w-5 shrink-0 text-white" />
            <span className="text-white/80"><strong>Global Perspective:</strong> A one-stop view of AI security risks from all channels—video, voice, and text.</span>
          </li>
          <li className="flex items-start gap-3 text-white/80">
            <CheckCircle className="h-5 w-5 shrink-0 text-white" />
            <span className="text-white/80"><strong>Rapid Response:</strong> Go from threat discovery to action within a single interface, dramatically reducing response time.</span>
          </li>
          <li className="flex items-start gap-3 text-white/80">
            <CheckCircle className="h-5 w-5 shrink-0 text-white" />
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
            <h4 className="font-semibold text-white">Financial Services (Remote Onboarding/KYC)</h4>
            <p className="mt-2 text-sm text-white/80">Secure customer verification processes.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">Video Conferencing Security</h4>
            <p className="mt-2 text-sm text-white/80">Protect internal meetings from impersonation attacks.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">Insurance Industry (Remote Claims Verification)</h4>
            <p className="mt-2 text-sm text-white/80">Validate the authenticity of video evidence for claims.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">News & Social Media (Content Authenticity)</h4>
            <p className="mt-2 text-sm text-white/80">Automatically review and flag content for authenticity.</p>
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
  "video_url": "https://example.com/kyc_video.mp4"
}`;
  const response = `// API Response
{
  "request_id": "vid-abc-456",
  "is_deepfake": true,
  "confidence_score": 0.998,
  "suspicious_regions": [
    {
      "box_coordinates": [450, 150, 250, 250],
      "reason": "Unnatural eye blinking pattern"
    }
  ]
}`;

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">Seamless Integration & Code Example</h2>
        <p className="mt-4 text-lg text-white/80 text-center max-w-3xl mx-auto">
          Integrate Video Integrity™ easily with our clear and robust API.
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

export default function DeepfakeDetectionProductPage() {
  return (
    <main className="max-w-5xl mx-auto px-4">
      <HeroSection />
      <InteractiveVideoAnalysis />
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
