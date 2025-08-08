"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import SiteShell from "@/components/SiteShell";

export default function IndividualsClient() {
  type SectionId = "mobile" | "plugin";
  const searchParams = useSearchParams();
  const s = searchParams.get("s");
  const active: SectionId = s === "plugin" ? "plugin" : "mobile";

  return (
    <SiteShell hideTopbar>
      <section className="grid gap-4 md:grid-cols-1 items-start">
        {/* Content: render a single section at a time */}
        <div className="space-y-4">
          {active === "mobile" ? (
            <section className="relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[url('/visual.webp')] bg-cover bg-left-top opacity-30" />
              <div className="absolute inset-0 -z-10 bg-black/30" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-sm text-white/80">
                    <span className="inline-flex h-2 w-2 rounded-full bg-white/60" />
                    Mobile App
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">Block scam calls and texts</h2>
                  <p className="mt-2 text-white/80 max-w-2xl">
                    Real‑time detection for incoming calls and SMS. Private, on‑device signals with cloud
                    intelligence for the latest scam patterns.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm">Coming soon</span>
                    <a
                      href="/waitlist"
                      className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 font-semibold shadow-sm"
                    >
                      Join waitlist
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section className="relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[url('/window.svg')] bg-no-repeat bg-right-top opacity-20" />
              <div className="absolute inset-0 -z-10 bg-black/20" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-sm text-white/80">
                    <span className="inline-flex h-2 w-2 rounded-full bg-white/60" />
                    Browser Plugin
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">Flag risky pages and messages</h2>
                  <p className="mt-2 text-white/80 max-w-2xl">
                    Highlights suspicious websites, popups, and chat prompts. Warns before you sign in or
                    enter sensitive information.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm">Coming soon</span>
                    <a
                      href="/waitlist"
                      className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 font-semibold shadow-sm"
                    >
                      Join waitlist
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </SiteShell>
  );
}


