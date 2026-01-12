"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function UseCasesMore() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === "dark";
  const [expanded, setExpanded] = useState(false);
  const buttonStyle = isDark
    ? "border-white/15 text-white/90 hover:text-white hover:border-white/25"
    : "border-slate-300 text-slate-800 hover:text-slate-900 hover:border-slate-400 bg-white shadow-sm";
  const divider = isDark ? "border-white/10" : "border-slate-200";
  const label = isDark ? "text-white/50" : "text-slate-500";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="mt-5">
      <div className="text-center">
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
          className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${buttonStyle}`}
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
        <div className={`mt-6 border-t pt-5 ${divider}`}>
          <div className={`text-xs tracking-widest uppercase mb-3 text-center ${label}`}>
            Other potential use cases
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Mini title="Voice spoofing authentication" desc="Verify callers during IVR/agent handoffs; flag cloned voices." isDark={isDark} />
            <Mini title="Executive impersonation (BEC)" desc="Detect spoofed emails, invoices, and voice notes in finance workflows." isDark={isDark} />
            <Mini title="Vendor and procurement fraud" desc="Validate vendor onboarding and payment‑change requests." isDark={isDark} />
            <Mini title="Customer support impersonation" desc="Spot fake agents or users across chat, email, and voice." isDark={isDark} />
            <Mini title="Brand impersonation takedown" desc="Find cloned sites, ads, and social accounts using your brand." isDark={isDark} />
            <Mini title="Marketplace seller verification" desc="Prevent synthetic sellers and doctored product media." isDark={isDark} />
            <Mini title="Social profile verification" desc="Detect bots, synthetic personas, and deepfake avatars." isDark={isDark} />
            <Mini title="Email/SMS phishing scanning" desc="Score inbound messages and attachments before delivery." isDark={isDark} />
          </div>

          {/* Integrations section removed as requested */}
        </div>
      ) : null}
    </div>
  );
}

function Mini({ title, desc, isDark }: { title: string; desc: string; isDark: boolean }) {
  const surface = isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white shadow-sm";
  const titleColor = isDark ? "text-white" : "text-slate-900";
  const bodyColor = isDark ? "text-white/60" : "text-slate-700";
  return (
    <div className={`rounded-2xl border p-5 ${surface}`}>
      <div className={`text-base font-semibold ${titleColor}`}>{title}</div>
      <p className={`mt-1.5 text-sm leading-relaxed ${bodyColor}`}>{desc}</p>
    </div>
  );
}
