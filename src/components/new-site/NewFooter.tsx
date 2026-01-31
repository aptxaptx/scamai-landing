import Link from "next/link";

export default function NewFooter() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-black">
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
            All-in-one AI Trust Platform
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold text-white">Product</p>
          <Link href="/products/vision-detection" className="block text-[#9ca3af] hover:text-white">Vision Detection</Link>
          <Link href="/products/audio-detection" className="block text-[#9ca3af] hover:text-white">Audio Detection</Link>
          <Link href="/pricing" className="block text-[#9ca3af] hover:text-white">Pricing</Link>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold text-white">Resources</p>
          <Link href="/resources/documentation" className="block text-[#9ca3af] hover:text-white">Docs</Link>
          <Link href="/resources/security-compliance" className="block text-[#9ca3af] hover:text-white">Security & Compliance</Link>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold text-white">Company</p>
          <Link href="/company" className="block text-[#9ca3af] hover:text-white">About</Link>
          <Link href="/contact" className="block text-[#9ca3af] hover:text-white">Contact</Link>
          <Link href="/privacy" className="block text-[#9ca3af] hover:text-white">Privacy</Link>
          <Link href="/terms" className="block text-[#9ca3af] hover:text-white">Terms</Link>
          <Link href="/cookies" className="block text-[#9ca3af] hover:text-white">Cookies</Link>
        </div>
      </div>

      <div className="border-t border-[#1f1f1f]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 text-xs text-[#6b7280] sm:flex-row sm:items-center sm:px-6">
          <span>© 2026 Reality Inc. All rights reserved.</span>
          <span>Built for trust in AI Era</span>
        </div>
      </div>
    </footer>
  );
}
