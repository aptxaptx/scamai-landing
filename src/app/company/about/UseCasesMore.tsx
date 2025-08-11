"use client";

import { useState } from "react";

export default function UseCasesMore() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-5">
      <div className="text-center">
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/90 hover:text-white hover:border-white/25"
        >
          {expanded ? (
            <>
              Show less <span aria-hidden>↑</span>
            </>
          ) : (
            <>
              More… <span aria-hidden>→</span>
            </>
          )}
        </button>
      </div>

      {expanded ? (
        <div className="mt-6 border-t border-white/10 pt-5">
          <div className="text-xs tracking-widest uppercase text-white/50 mb-3 text-center">
            Other potential use cases
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Mini title="Voice spoofing authentication" desc="Verify callers during IVR/agent handoffs; flag cloned voices." />
            <Mini title="Executive impersonation (BEC)" desc="Detect spoofed emails, invoices, and voice notes in finance workflows." />
            <Mini title="Vendor and procurement fraud" desc="Validate vendor onboarding and payment‑change requests." />
            <Mini title="Customer support impersonation" desc="Spot fake agents or users across chat, email, and voice." />
            <Mini title="Brand impersonation takedown" desc="Find cloned sites, ads, and social accounts using your brand." />
            <Mini title="Marketplace seller verification" desc="Prevent synthetic sellers and doctored product media." />
            <Mini title="Social profile verification" desc="Detect bots, synthetic personas, and deepfake avatars." />
            <Mini title="Email/SMS phishing scanning" desc="Score inbound messages and attachments before delivery." />
          </div>

          {/* Integrations section removed as requested */}
        </div>
      ) : null}
    </div>
  );
}

function Mini({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5">
      <div className="text-base font-semibold text-white">{title}</div>
      <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{desc}</p>
    </div>
  );
}


