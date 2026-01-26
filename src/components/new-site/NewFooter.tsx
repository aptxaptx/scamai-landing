import Link from "next/link";

export default function NewFooter() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#0b0b0b]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center">
            <img
              src="/scamai-logo.svg"
              alt="ScamAI"
              className="h-8 w-auto"
            />
          </div>
          <p className="text-sm text-[#9ca3af]">
            Defense-grade detection for synthetic media and fraud at scale.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold text-white">Platform</p>
          <Link href="/platform" className="block text-[#9ca3af] hover:text-white">Overview</Link>
          <Link href="/solutions" className="block text-[#9ca3af] hover:text-white">Solutions</Link>
          <Link href="/security" className="block text-[#9ca3af] hover:text-white">Security</Link>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold text-white">Company</p>
          <Link href="/company" className="block text-[#9ca3af] hover:text-white">About</Link>
          <Link href="/careers" className="block text-[#9ca3af] hover:text-white">Careers</Link>
          <Link href="/contact" className="block text-[#9ca3af] hover:text-white">Contact</Link>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold text-white">Legal</p>
          <Link href="/privacy" className="block text-[#9ca3af] hover:text-white">Privacy</Link>
          <Link href="/terms" className="block text-[#9ca3af] hover:text-white">Terms</Link>
        </div>
      </div>

      <div className="border-t border-[#1f1f1f]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 text-xs text-[#6b7280] sm:flex-row sm:items-center sm:px-6">
          <span>© 2026 ScamAI. All rights reserved.</span>
          <span>Built for trust, speed, and safety.</span>
        </div>
      </div>
    </footer>
  );
}
