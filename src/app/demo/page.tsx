"use client";

import { useEffect } from "react";

export default function DemoPage() {
  useEffect(() => {
    // Redirect to Cal.com booking page
    window.location.href = "https://cal.com/scamai/15min";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-white mb-4">
          Redirecting to booking...
        </h1>
        <p className="text-white/80">
          If you're not redirected automatically,{" "}
          <a
            href="https://cal.com/scamai/15min"
            className="text-white underline hover:text-white/80"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
