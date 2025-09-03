import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="mt-20">
      <div className="w-full px-5 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* For Business */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Business</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/business" className="text-white/70 hover:text-white text-sm transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/api-platform" className="text-white/70 hover:text-white text-sm transition-colors">
                  API Platform
                </Link>
              </li>
              <li>
                <a href="https://docu.scam.ai" className="text-white/70 hover:text-white text-sm transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <Link href="/demo" className="text-white/70 hover:text-white text-sm transition-colors">
                  Contact Sales
                </Link>
              </li>
            </ul>
          </div>

          {/* For Individuals */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Individuals</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/individuals?s=mobile" className="text-white/70 hover:text-white text-sm transition-colors">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="/individuals?s=plugin" className="text-white/70 hover:text-white text-sm transition-colors">
                  Browser Plugin
                </Link>
              </li>
            </ul>
          </div>

          {/* Models */}
          <div>
            <h3 className="text-white font-semibold mb-4">Models</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/models/deepfakes" className="text-white/70 hover:text-white text-sm transition-colors">
                  Deepfakes (Faceswap)
                </Link>
              </li>
              <li>
                <Link href="/models/ai-generated-media" className="text-white/70 hover:text-white text-sm transition-colors">
                  GenAI Media Detection
                </Link>
              </li>
              <li>
                <Link href="/models/voice-clones" className="text-white/70 hover:text-white text-sm transition-colors">
                  Voice Cloning
                </Link>
              </li>
            </ul>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-white font-semibold mb-4">Research</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/research/publication" className="text-white/70 hover:text-white text-sm transition-colors">
                  Publications & Datasets
                </Link>
              </li>
            </ul>
          </div>

          {/* Stories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/stories/news" className="text-white/70 hover:text-white text-sm transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/stories/type-of-scams" className="text-white/70 hover:text-white text-sm transition-colors">
                  Type of Scams
                </Link>
              </li>
              <li>
                <Link href="/stories/scam-trends" className="text-white/70 hover:text-white text-sm transition-colors">
                  Scam Trends
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company/about" className="text-white/70 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/company/partnership" className="text-white/70 hover:text-white text-sm transition-colors">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="/company/investors" className="text-white/70 hover:text-white text-sm transition-colors">
                  Investors
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-white/60">
              <Link href="#" className="hover:text-white transition-colors">Stories</Link>
              <Link href="/company/about" className="hover:text-white transition-colors">Company</Link>
              <Link href="/demo" className="hover:text-white transition-colors">Get Demo</Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <Link href="#" className="hover:text-white transition-colors">Manage Cookies</Link>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <span>© 2025 Reality Inc. All rights reserved.</span>
            </div>
          </div>
          
          {/* Compliance Logos */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center gap-6">
                <Image
                  src="/seal_GDPR.svg"
                  alt="GDPR Compliant"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/seal_SOC2.svg"
                  alt="SOC 2 Compliant"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
