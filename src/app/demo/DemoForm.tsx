"use client";

import { useState } from "react";

const FREE_EMAIL_PATTERNS = [
  /@gmail\./i,
  /@yahoo\./i,
  /@hotmail\./i,
  /@outlook\./i,
  /@live\./i,
  /@icloud\./i,
  /@aol\./i,
  /@protonmail\./i,
  /@proton\.me$/i,
  /@pm\.me$/i,
  /@gmx\./i,
  /@mail\.com$/i,
  /@zoho\./i,
  /@yandex\./i,
  /@hey\.com$/i,
];

function isCompanyEmail(email: string): boolean {
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return false;
  return !FREE_EMAIL_PATTERNS.some((re) => re.test(email));
}

export default function DemoForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    useCase: "KYC/ID Verification",
    volume: "<10k / month",
    notes: "",
    timezone: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.name || !form.email) {
      setError("Please provide your name and work email.");
      return;
    }
    if (!isCompanyEmail(form.email)) {
      setError("Please use your company email address (no personal providers like gmail.com).");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, page: "demo" }),
      });
      if (!res.ok) {
        throw new Error("Failed to submit. Please try again.");
      }
      // Redirect to our demo page first; scheduling happens there
      window.location.href = "/demo";
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/80 mb-1" htmlFor="name">Full name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} className="w-full bg-white/5 border border-white/15 px-3 py-2" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-sm text-white/80 mb-1" htmlFor="company">Company</label>
          <input id="company" name="company" value={form.company} onChange={handleChange} className="w-full bg-white/5 border border-white/15 px-3 py-2" placeholder="Acme Inc." />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/80 mb-1" htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="w-full bg-white/5 border border-white/15 px-3 py-2" placeholder="jane@acme.com" />
          <p className="mt-1 text-xs text-white/60">Please use your company email. Personal addresses (gmail, outlook, etc.) are not accepted.</p>
        </div>
        <div>
          <label className="block text-sm text-white/80 mb-1" htmlFor="timezone">Time zone</label>
          <input id="timezone" name="timezone" value={form.timezone} onChange={handleChange} className="w-full bg-white/5 border border-white/15 px-3 py-2" placeholder="e.g., PST / UTC‑8" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/80 mb-1" htmlFor="useCase">Primary use case</label>
          <select id="useCase" name="useCase" value={form.useCase} onChange={handleChange} className="w-full bg-white/5 border border-white/15 px-3 py-2">
            <option>KYC/ID Verification</option>
            <option>Dating Apps</option>
            <option>Impersonation</option>
            <option>Fake News & Misinformation</option>
            <option>IP/Copyright Protection</option>
            <option>Legal & Compliance</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-white/80 mb-1" htmlFor="volume">Expected volume</label>
          <select id="volume" name="volume" value={form.volume} onChange={handleChange} className="w-full bg-white/5 border border-white/15 px-3 py-2">
            <option>&lt;10k / month</option>
            <option>10k–100k / month</option>
            <option>100k–1M / month</option>
            <option>&gt;1M / month</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm text-white/80 mb-1" htmlFor="notes">Describe your requirements</label>
        <textarea id="notes" name="notes" rows={5} value={form.notes} onChange={handleChange} className="w-full bg-white/5 border border-white/15 px-3 py-2" placeholder="What flows are you securing? Any target KPIs or regions?" />
      </div>

      {error && <p className="text-red-300 text-sm">{error}</p>}

      <div className="mt-2 text-sm text-white/70">
        By submitting, you&apos;ll be redirected to book a <strong>15‑minute discovery call</strong>. We&apos;ll then schedule a <strong>30‑minute live demo</strong> tailored to your use case.
      </div>

      <div className="mt-4">
        <button type="submit" className="bg-white text-black px-6 py-3 font-semibold" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit & Schedule"}
        </button>
      </div>
    </form>
  );
}