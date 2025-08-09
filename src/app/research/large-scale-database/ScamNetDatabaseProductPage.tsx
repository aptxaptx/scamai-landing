"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  Database,
  Shield,
  Globe,
  Clock,
  Link2,
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
          The Intelligence Engine Powering Next-Generation Fraud Defense
        </h1>
        <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
          Welcome to ScamNet DB™, the most comprehensive and real-time database of active scams on the planet. This is not just a static blocklist; it&apos;s a living ecosystem of threat intelligence that forms the core foundation of the entire Scam.ai platform. 🧠
        </p>
      </div>
    </section>
  );
}

function InteractiveDatabaseQuery() {
  const [queried, setQueried] = useState<{ domain: boolean; wallet: boolean }>({ domain: false, wallet: false });
  const [isQuerying, setIsQuerying] = useState<null | "domain" | "wallet">(null);

  const simulateQuery = (type: "domain" | "wallet") => {
    if (isQuerying) return;
    setIsQuerying(type);
    setTimeout(() => {
      setQueried((prev) => ({ ...prev, [type]: true }));
      setIsQuerying(null);
    }, 1500);
  };

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">
          See For Yourself: Query Our Live Intelligence
        </h2>
        <p className="mt-4 text-lg text-white/80 text-center max-w-3xl mx-auto">
          Our database provides instant, deep context on any potential threat. Run a sample query on known malicious entities to see the data you&apos;ll receive.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Query Example 1: Malicious Domain */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Query Example 1: Malicious Domain</h3>
            <div className="bg-gray-800 rounded-lg p-3 mb-4 font-mono text-sm text-gray-300">
              secure-invest-now.net
            </div>
            <button
              type="button"
              onClick={() => simulateQuery("domain")}
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isQuerying !== null}
            >
              <Search className="h-5 w-5" aria-hidden />
              {isQuerying === "domain" ? "Querying..." : "Query Entity"}
            </button>
            {queried.domain && (
              <div className="mt-4 rounded-md bg-red-500/20 p-3 text-sm font-mono text-red-300">
                <div className="text-red-400 font-bold">RISK SCORE: 1.0 (High)</div>
                <div>FIRST SEEN: 2025-08-01</div>
                <div>LINKED WALLETS: 4</div>
                <div>LINKED PHONE NUMBERS: 12</div>
                <div>ASSOCIATED CAMPAIGN: &quot;Pig Butchering Scam #42&quot;</div>
              </div>
            )}
          </div>

          {/* Query Example 2: Scammer's Crypto Wallet */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Query Example 2: Scammer&apos;s Crypto Wallet</h3>
            <div className="bg-gray-800 rounded-lg p-3 mb-4 font-mono text-sm text-gray-300">
              bc1qxyz...
            </div>
            <button
              type="button"
              onClick={() => simulateQuery("wallet")}
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isQuerying !== null}
            >
              <Search className="h-5 w-5" aria-hidden />
              {isQuerying === "wallet" ? "Querying..." : "Query Entity"}
            </button>
            {queried.wallet && (
              <div className="mt-4 rounded-md bg-red-500/20 p-3 text-sm font-mono text-red-300">
                <div className="text-red-400 font-bold">RISK SCORE: 1.0 (High)</div>
                <div>FIRST SEEN: 2025-08-08</div>
                <div>LAST SEEN: 2025-08-08</div>
                <div>LINKED DOMAINS: 1</div>
                <div>ASSOCIATED CAMPAIGN: &quot;Pig Butchering Scam #42&quot;</div>
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
          The Threat: Outpacing the Speed of Scams
        </h2>
        <div className="mt-8 rounded-lg bg-white/5 border border-white/10 p-4 grid place-items-center">
          <Image
            src="/visual.webp"
            alt="Scam speed threat landscape"
            width={640}
            height={128}
            className="h-32 w-auto object-contain opacity-70"
          />
        </div>
        <p className="mt-6 text-lg text-white/80">
          Scammers launch and discard fraudulent domains, phone numbers, and crypto wallets in minutes. By the time traditional threat intelligence reports are published, the damage is done and the attackers have moved on. Fighting a real-time threat with outdated data is a losing battle.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <Shield className="h-5 w-5 text-white" />
            <div>
              <p className="font-semibold text-white">Rapid Mutation</p>
              <p className="text-sm text-white/80">Scammers constantly change their tactics, content, and infrastructure to evade detection.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <Database className="h-5 w-5 text-white" />
            <div>
              <p className="font-semibold text-white">Siloed Information</p>
              <p className="text-sm text-white/80">Threat data is often scattered across different platforms, making it impossible to see the full picture of a coordinated attack.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <Clock className="h-5 w-5 text-white" />
            <div>
              <p className="font-semibold text-white">Data Latency</p>
              <p className="text-sm text-white/80">Static blocklists are often hours or days old, leaving a critical window of vulnerability open.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4">
            <Link2 className="h-5 w-5 text-white" />
            <div>
              <p className="font-semibold text-white">Lack of Context</p>
              <p className="text-sm text-white/80">A suspicious domain is one thing; knowing it&apos;s linked to 50 phone numbers and 10 crypto wallets from a known criminal group is another.</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-white/60">
          Data Point: In 2025, the average lifespan of a phishing website is less than 4 hours, making real-time intelligence the only effective defense.
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
        <h2 className="text-3xl font-bold text-center text-white">Our Solution: ScamNet DB™ — A Living Intelligence Ecosystem</h2>
        <div className="mt-8 rounded-lg bg-white/5 border border-white/10 p-4 grid place-items-center">
          <Image
            src="/visual.webp"
            alt="ScamNet DB architecture diagram"
            width={640}
            height={128}
            className="h-32 w-auto object-contain opacity-70"
          />
        </div>
        <p className="mt-6 text-lg text-white/80">
          ScamNet DB™ is designed to ingest, process, and act on threat data at machine speed. It provides the crucial context and ground truth needed to power effective, real-time fraud detection.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-white">Multi-Source, Global Ingestion Engine</h4>
            <p className="mt-2 text-sm text-white/80">We collect data from a massive network of reliable sources, including dark web monitoring, a global honeypot network, direct user reports, and proprietary data feeds from our partners.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-white">AI-Powered Correlation & Enrichment</h4>
            <p className="mt-2 text-sm text-white/80">Our AI engine instantly processes and enriches raw data, linking seemingly unrelated entities. It connects a scammer&apos;s phone number to the phishing link they sent, the scam content used, the crypto wallet for payment, and the time of the report.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-white">Instantaneous Verification & Propagation</h4>
            <p className="mt-2 text-sm text-white/80">Verified intelligence is propagated across our network in milliseconds. When a new scam is detected, every Scam.ai model is instantly updated and ready to block it.</p>
          </div>
        </div>

        <p className="mt-6 text-sm text-white/70">
          The Output: The API returns a rich JSON object containing an entity&apos;s risk score, history, and all known connections to other malicious infrastructure.
        </p>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">The Unbeatable Edge</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-white" />
              <h4 className="font-semibold text-white">Massive Scale</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Contains tens of millions of continuously updated, verified entries, including fraudulent phone numbers, domains, email addresses, crypto wallets, and more.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-white" />
              <h4 className="font-semibold text-white">Real-Time Speed</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Responds to API queries in milliseconds, providing instant risk assessment for your applications. New threats are added to the database the moment they are detected.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-white" />
              <h4 className="font-semibold text-white">Unmatched Richness</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">Provides deep context, not just a &quot;bad/not bad&quot; label. Understand the history, connections, and risk profile of any entity.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <BrainCircuit className="h-5 w-5 text-white" />
              <h4 className="font-semibold text-white">Platform Synergy</h4>
            </div>
            <p className="mt-2 text-sm text-white/80">This is the single source of truth that trains, validates, and powers all other Scam.ai models. It&apos;s why our detection products are always smarter and faster. ⚡️</p>
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
        <h2 className="text-3xl font-bold text-center text-white">Unified Command Center: Intelligence at Your Fingertips</h2>
        <div className="mt-8 rounded-lg bg-white/5 border border-white/10 shadow p-4 grid place-items-center">
          <Image src="/visual.webp" alt="Command center dashboard with database insights" width={680} height={160} className="h-40 w-auto object-contain opacity-70" />
        </div>
        <p className="mt-6 text-lg text-white/80">
          While ScamNet DB™ works tirelessly in the background, its intelligence is made visible in your Unified Dashboard. When an alert is triggered, the dashboard automatically enriches it with data from the database, showing you why something was flagged and revealing its connections to the broader threat landscape. 🌐
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
          ScamNet DB™ can be used as a standalone threat intelligence feed or to supercharge your existing security infrastructure.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">Threat Intelligence Enrichment</h4>
            <p className="mt-2 text-sm text-white/80">Integrate with your SIEM, SOAR, or other security platforms to enrich alerts with real-time, actionable data.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">Proactive Infrastructure Blocking</h4>
            <p className="mt-2 text-sm text-white/80">Generate up-to-the-minute blocklists for firewalls, email gateways, and content filters.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">Security Research & Forensics</h4>
            <p className="mt-2 text-sm text-white/80">Investigate incidents, map out attacker infrastructure, and uncover emerging scam trends.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 shadow-sm">
            <h4 className="font-semibold text-white">Transaction & Onboarding Risk Assessment</h4>
            <p className="mt-2 text-sm text-white/80">Check customer-provided domains, phone numbers, or wallet addresses against the world&apos;s largest scam database before processing a transaction or opening an account.</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-blue-400 font-semibold">
          <a href="#" className="hover:underline">Learn how leading companies can use our technology in our Case Studies -&gt;</a>
        </p>
      </div>
    </section>
  );
}

function ApiIntegrationSection() {
  const request = `// API Request (Querying a crypto wallet):
{
  "entity_type": "crypto_wallet",
  "value": "bc1qxyz..."
}`;
  const response = `// API Response:
{
  "request_id": "db-ghi-789",
  "entity": "bc1qxyz...",
  "is_known_scam": true,
  "risk_score": 1.0,
  "first_seen_utc": "2025-08-08T18:30:00Z",
  "last_seen_utc": "2025-08-08T19:25:00Z",
  "associated_campaigns": ["Pig Butchering Scam Campaign #42"],
  "linked_entities": {
    "domains": ["secure-invest-now.net"],
    "phone_numbers": ["+18885559876"]
  }
}`;

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">Seamless Integration & Code Example</h2>
        <p className="mt-4 text-lg text-white/80 text-center max-w-3xl mx-auto">
          Querying our database is simple. Get the critical information you need with a single, fast API call.
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
        <h2 className="text-3xl font-bold text-white">Harness Our Core Intelligence</h2>
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

export default function ScamNetDatabaseProductPage() {
  return (
    <main className="max-w-5xl mx-auto px-4">
      <HeroSection />
      <InteractiveDatabaseQuery />
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
