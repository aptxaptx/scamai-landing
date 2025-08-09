"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  MessageSquare,
  DollarSign,
  UserCheck,
  AlertTriangle,
  Link,
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
          Instantly Identify and Neutralize Malicious Texts
        </h1>
        <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
          Scam.ai&apos;s Text Guardian™ model analyzes text messages and short-form content in real time to detect and block phishing, smishing, and other text-based scams before a user can click a malicious link or fall for a fraudulent request. 🎣
        </p>
      </div>
    </section>
  );
}

function InteractiveTextAnalysis() {
  const [analyzed, setAnalyzed] = useState<{ delivery: boolean; impersonation: boolean }>({ delivery: false, impersonation: false });
  const [isAnalyzing, setIsAnalyzing] = useState<null | "delivery" | "impersonation">(null);

  const simulateAnalysis = (scenario: "delivery" | "impersonation") => {
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
          See For Yourself: Can You Spot the Scam?
        </h2>
        <p className="mt-4 text-lg text-white/80 text-center max-w-3xl mx-auto">
          Our technology understands the deceptive language scammers use. The messages below are real scam examples, detected instantly by Text Guardian™.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Scenario 1: The Delivery Smishing */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Scenario 1: The Delivery Smishing</h3>
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-blue-400 mt-1" />
                <div className="bg-blue-600 rounded-lg px-3 py-2 max-w-xs">
                  <p className="text-white text-sm">
                    &quot;Your Fedex package has a customs fee. Pay now to avoid delays: https://bit.ly/xyz123&quot;
                  </p>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => simulateAnalysis("delivery")}
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isAnalyzing !== null}
            >
              <Search className="h-5 w-5" aria-hidden />
              {isAnalyzing === "delivery" ? "Analyzing..." : "Analyze Text"}
            </button>
            {analyzed.delivery && (
              <div className="mt-4 rounded-md bg-red-500/20 p-3 text-sm font-semibold text-red-300">
                DETECTED: SMISHING (99.7% Confidence)
                <br />
                <span className="text-xs text-red-400">Link highlighted as malicious</span>
              </div>
            )}
          </div>

          {/* Scenario 2: The Impersonation Scam */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Scenario 2: The Impersonation Scam</h3>
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-blue-400 mt-1" />
                <div className="bg-blue-600 rounded-lg px-3 py-2 max-w-sm">
                  <p className="text-white text-sm">
                    &quot;Hi, it&apos;s your CEO. I&apos;m in a meeting and need you to urgently purchase 5x $100 gift cards for a client. Send me the codes ASAP. I&apos;ll reimburse you.&quot;
                  </p>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => simulateAnalysis("impersonation")}
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isAnalyzing !== null}
            >
              <Search className="h-5 w-5" aria-hidden />
              {isAnalyzing === "impersonation" ? "Analyzing..." : "Analyze Text"}
            </button>
            {analyzed.impersonation && (
              <div className="mt-4 rounded-md bg-red-500/20 p-3 text-sm font-semibold text-red-300">
                DETECTED: IMPERSONATION SCAM (99.2% Confidence)
                <br />
                <span className="text-xs text-red-400">Phrases like &quot;urgently&quot; and &quot;gift cards&quot; highlighted</span>
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
          The Threat: The Evolving Threat in Your Pocket
        </h2>
        <div className="mt-8 rounded-lg bg-white/5 border border-white/10 p-4 grid place-items-center">
          <Image
            src="/visual.webp"
            alt="Text-based threat landscape"
            width={640}
            height={128}
            className="h-32 w-auto object-contain opacity-70"
          />
        </div>
        <p className="mt-6 text-lg text-white/80">
          Traditional spam filters are no longer enough. Scammers now use sophisticated tactics like personalized messages, URL shorteners, and urgent, emotion-driven language to trick even wary users. These attacks are a direct line to your customers and employees, bypassing many conventional security layers.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <MessageSquare className="h-5 w-5 text-white" />
            <div>
              <p className="font-semibold text-white">Smishing (SMS Phishing)</p>
              <p className="text-sm text-white/80">Fake delivery notifications, bank alerts, or password reset links sent via text message.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <UserCheck className="h-5 w-5 text-white" />
            <div>
              <p className="font-semibold text-white">Impersonation Scams</p>
              <p className="text-sm text-white/80">Messages pretending to be from a CEO, colleague, or family member asking for gift cards, wire transfers, or sensitive information.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <AlertTriangle className="h-5 w-5 text-white" />
            <div>
              <p className="font-semibold text-white">Urgency & Scare Tactics</p>
              <p className="text-sm text-white/80">Fraudulent claims like &quot;Your account has been compromised&quot; or &quot;A warrant has been issued for your arrest&quot; to provoke an immediate, panicked response.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <Link className="h-5 w-5 text-white" />
            <div>
              <p className="font-semibold text-white">Malicious Links</p>
              <p className="text-sm text-white/80">Dangerous URLs hidden using popular link-shortening services to evade detection.</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-white/60">
          Data Point: A 2025 report from the Federal Trade Commission (FTC) shows that financial losses from text-based scams have surpassed those from email phishing for the first time, totaling over $350 million last year alone.
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
        <h2 className="text-3xl font-bold text-center text-white">Our Solution: Text Guardian™ — Proactive Threat Detection</h2>
        <div className="mt-8 rounded-lg bg-white/5 border border-white/10 p-4 grid place-items-center">
          <Image
            src="/visual.webp"
            alt="Text Guardian diagram placeholder"
            width={640}
            height={128}
            className="h-32 w-auto object-contain opacity-70"
          />
        </div>
        <p className="mt-6 text-lg text-white/80">
          Text Guardian™ functions as a sophisticated language analysis engine, understanding the intent and context behind every message to identify malicious behavior with incredible accuracy.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-white">LLM-Powered Intent Analysis</h4>
            <p className="mt-2 text-sm text-white/80">Powered by a proprietary Large Language Model (LLM) fine-tuned on millions of scams from our ScamNet DB™, our model goes beyond keywords to understand the true intent, urgency, and manipulative tactics in a message.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-white">Real-Time Link & URL Unmasking</h4>
            <p className="mt-2 text-sm text-white/80">The model automatically analyzes any embedded links, following redirects and checking the final destination against our ScamNet DB™ for known phishing domains, even if the link is shortened or obfuscated.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-white">Threat Actor Pattern Recognition</h4>
            <p className="mt-2 text-sm text-white/80">Text Guardian™ identifies and cross-references unique phrases, phone number blocks, and URL patterns associated with known scam campaigns, allowing it to block new attacks that share a common origin.</p>
          </div>
        </div>

        <p className="mt-6 text-sm text-white/70">
          The Output: The model&apos;s output is a clear, actionable JSON response containing a risk score, the specific scam type detected (e.g., &apos;smishing&apos;, &apos;impersonation&apos;), and any identified malicious entities.
        </p>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">Our Advantage: Why Choose Text Guardian™?</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-white" />
              <h4 className="font-semibold text-white">Millisecond-Level Response</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Optimized for high-throughput messaging platforms, ensuring instant analysis without delaying message delivery.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-white" />
              <h4 className="font-semibold text-white">Unparalleled Accuracy</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Our fine-tuned LLM, trained on the world&apos;s largest proprietary database of scam texts, dramatically reduces false positives and detects novel threats.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-white" />
              <h4 className="font-semibold text-white">Exceptional Robustness</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Effectively understands and analyzes text containing typos, slang, emojis, and multiple languages.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <BrainCircuit className="h-5 w-5 text-white" />
              <h4 className="font-semibold text-white">Constantly Evolving</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Our model is continuously re-trained with the latest scam data from ScamNet DB™, ensuring it stays ahead of evolving scammer tactics.</p>
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
          There&apos;s no need to switch between systems. Scam.ai aggregates all alerts from Text Guardian™, our Deepfake and Voice Clone Detection models, and all other services into a single, powerful, and intuitive dashboard. 👁️‍🗨️
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
        <p className="mt-4 text-lg text-white/80 text-center max-w-3xl mx-auto">
          Text Guardian™ is designed for easy integration into platforms where trust and safety are paramount.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">Telecommunications & Messaging Apps</h4>
            <p className="mt-2 text-sm text-white/80">Protect users by filtering smishing and spam directly at the network or application level.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">Enterprise Communications</h4>
            <p className="mt-2 text-sm text-white/80">Secure internal messaging platforms like Slack or Microsoft Teams from insider threats and social engineering.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">Financial Services</h4>
            <p className="mt-2 text-sm text-white/80">Monitor communications with customers to block fraudulent requests and protect sensitive account information.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">Online Marketplaces</h4>
            <p className="mt-2 text-sm text-white/80">Prevent scammers from luring buyers or sellers off-platform with fraudulent text messages.</p>
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
  const request = `// API Request:
{
  "sender": "+18885551234",
  "message_body": "Your Fedex package has a customs fee. Pay now to avoid delays: https://bit.ly/xyz123"
}`;
  const response = `// API Response:
{
  "request_id": "txt-def-456",
  "is_scam": true,
  "risk_score": 0.99,
  "scam_type": "delivery_smishing",
  "malicious_entities": [
    {
      "type": "url",
      "value": "https://bit.ly/xyz123",
      "final_destination": "https://phishing-site.example.com/payment"
    }
  ]
}`;

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">Seamless Integration & Code Example</h2>
        <p className="mt-4 text-lg text-white/80 text-center max-w-3xl mx-auto">
          Deploying Text Guardian™ is straightforward. Our developer-friendly REST API allows you to start protecting your platform in minutes.
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

export default function ScamTextDetectionProductPage() {
  return (
    <main className="max-w-5xl mx-auto px-4">
      <HeroSection />
      <InteractiveTextAnalysis />
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
