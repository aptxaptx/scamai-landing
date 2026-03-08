"use client";

import { useState, useEffect, useCallback } from "react";
import { Link } from "@/i18n/navigation";

const CONSENT_KEY = "scamai_cookie_consent";
const GA_ID = "G-NNX4SFN50V";

type ConsentState = "pending" | "accepted" | "declined";

function getStoredConsent(): ConsentState {
  if (typeof window === "undefined") return "pending";
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === "accepted" || stored === "declined") return stored;
  return "pending";
}

/** Inject GA4 script tags dynamically after consent */
function loadGA() {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga-script")) return; // already loaded

  // gtag.js loader
  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // gtag config
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, {
    anonymize_ip: true,
    cookie_flags: "SameSite=None;Secure",
  });
}

/** Remove GA cookies when user declines */
function removeGACookies() {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const name = cookie.split("=")[0].trim();
    if (name.startsWith("_ga") || name.startsWith("_gid")) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  }
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>("pending");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    setConsent(stored);

    if (stored === "accepted") {
      loadGA();
    } else if (stored === "pending") {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
    loadGA();

    // Track consent after GA loads
    setTimeout(() => {
      if (window.gtag) {
        window.gtag("event", "cookie_consent", {
          event_category: "privacy",
          event_label: "accepted",
        });
      }
    }, 1000);
  }, []);

  const handleDecline = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
    setVisible(false);
    removeGACookies();
  }, []);

  if (consent !== "pending" || !visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[300] p-4 sm:p-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-[#111111]/95 backdrop-blur-xl p-5 sm:p-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-white mb-1.5">
              We value your privacy
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              We use cookies and analytics to understand how you use our site and improve your experience.
              You can accept or decline non-essential cookies.{" "}
              <Link href="/cookies" className="text-[#245FFF] hover:underline">
                Cookie Policy
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none rounded-full border border-white/10 bg-transparent px-5 py-2 text-xs font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none rounded-full bg-[#245FFF] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#1d4acc]"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
