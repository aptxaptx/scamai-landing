"use client";

import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import SiteShell from "@/components/SiteShell";

export default function IndividualsClient() {
  const searchParams = useSearchParams();
  const sectionParam = searchParams.get("s");
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    const targetId = sectionParam === "plugin" ? "plugin" : "mobile";
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [sectionParam]);

  return (
    <SiteShell>
      {/* Mobile App Section */}
      <section id="mobile" className="scroll-mt-24">
        <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-6">
          <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
            <p className="text-white text-base mb-4">For Individuals — Mobile App</p>
            <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight max-w-4xl mx-auto">
              Mobile Scam Protection
              <br />
              That Actually Works
            </h1>
            <p className="mt-4 text-white/85 text-[clamp(14px,2vw,18px)] max-w-3xl mx-auto">
              Block scam calls and detect phishing messages on-device. Seamless protection built for everyday use.
            </p>

            <div className="mt-8 max-w-4xl mx-auto">
              <img
                src="/impersonation.webp"
                alt="Mobile scam protection preview"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="mt-8">
              <a
                href="/waitlist"
                className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </section>
      </section>

      {/* Browser Plugin Section */}
      <section id="plugin" className="scroll-mt-24">
        <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-6">
          <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
            <p className="text-white text-base mb-4">For Individuals — Browser Plugin</p>
            <h1 className="text-[clamp(32px,7.5vw,72px)] font-normal tracking-tight max-w-4xl mx-auto">
              Web Protection
              <br />
              That Actually Works
            </h1>
            <p className="mt-4 text-white/85 text-[clamp(14px,2vw,18px)] max-w-3xl mx-auto">
              Flag scam sites, misleading ads, and AI-generated media while you browse. Stay safe across the web.
            </p>

            <div className="mt-8 max-w-4xl mx-auto">
              <img
                src="/fakenews.webp"
                alt="Browser protection preview"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="mt-8">
              <a
                href="/waitlist"
                className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </section>
      </section>
    </SiteShell>
  );
}


