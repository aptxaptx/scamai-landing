"use client";

import { useEffect } from "react";

export default function DemoPage() {
  useEffect(() => {
    // Open booking in a new tab and keep this page as fallback
    const url = "https://cal.com/scamai/15min";
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-white mb-4">
          Redirecting to booking...
        </h1>
        <p className="text-white/80">
          If you&rsquo;re not redirected automatically,{" "}
          <a
            href="https://cal.com/scamai/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-white/80"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
