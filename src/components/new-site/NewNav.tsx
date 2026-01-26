"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Security", href: "/security" },
  { label: "Company", href: "/company" },
];

export default function NewNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1f1f1f] bg-[#0b0b0b]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#6d5dfb] text-sm font-semibold text-white">
            SA
          </span>
          <span className="text-base font-semibold tracking-wide text-white">
            ScamAI
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#cbd5f5] transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/demo"
            className="rounded-lg border border-[#2a2a2a] px-4 py-2 text-sm font-semibold text-white transition hover:border-white"
          >
            Request Demo
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#e5e5e5]"
          >
            Talk to Sales
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2a2a2a] text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#1f1f1f] bg-[#0b0b0b] md:hidden">
          <div className="flex flex-col gap-3 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#cbd5f5] hover:bg-[#141414] hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/demo"
              className="rounded-lg border border-[#2a2a2a] px-3 py-2 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Request Demo
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-black"
              onClick={() => setOpen(false)}
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
