// Google Analytics 4 event tracking utility
// All events fire through gtag() which is loaded conditionally after cookie consent

type GAEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Core gtag event helper */
export function trackEvent({ action, category, label, value }: GAEvent) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// ── Pre-built event helpers ──────────────────────────────────────

/** CTA button clicks (hero, pricing, etc.) */
export function trackCTA(ctaName: string, location: string) {
  trackEvent({
    action: "cta_click",
    category: "engagement",
    label: `${ctaName} | ${location}`,
  });
}

/** Navigation clicks */
export function trackNav(item: string, type: "desktop" | "mobile" | "dropdown") {
  trackEvent({
    action: "nav_click",
    category: "navigation",
    label: `${item} | ${type}`,
  });
}

/** External link clicks */
export function trackOutbound(url: string, label: string) {
  trackEvent({
    action: "outbound_click",
    category: "outbound",
    label: `${label} | ${url}`,
  });
}

/** Newsletter subscription */
export function trackNewsletterSignup(location: string) {
  trackEvent({
    action: "newsletter_signup",
    category: "conversion",
    label: location,
  });
}

/** Pricing interaction */
export function trackPricing(action: string, detail: string) {
  trackEvent({
    action: `pricing_${action}`,
    category: "pricing",
    label: detail,
  });
}

/** FAQ interaction */
export function trackFAQ(question: string) {
  trackEvent({
    action: "faq_open",
    category: "engagement",
    label: question,
  });
}

/** Search / Command palette */
export function trackSearch(query: string, resultClicked?: string) {
  trackEvent({
    action: resultClicked ? "search_select" : "search_query",
    category: "search",
    label: resultClicked || query,
  });
}

/** Section scroll-into-view */
export function trackSectionView(sectionName: string) {
  trackEvent({
    action: "section_view",
    category: "engagement",
    label: sectionName,
  });
}

/** Cookie consent response */
export function trackConsent(accepted: boolean) {
  trackEvent({
    action: "cookie_consent",
    category: "privacy",
    label: accepted ? "accepted" : "declined",
  });
}
