import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="bg-black/80 text-white py-16 mt-0 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image src="/scamailogo.png" alt="Scam AI" className="h-8 w-auto" width={100} height={32} />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Combat deepfakes, voice clones, and synthetic media fraud.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/scamai" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/models/deepfakes" className="hover:text-white transition-colors">Deepfake Detection</a></li>
              <li><a href="/models/voice-clones" className="hover:text-white transition-colors">Voice Clone Detection</a></li>
              <li><a href="/models/ai-generated-media" className="hover:text-white transition-colors">AI Media Detection</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/company/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/research/publication" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="https://cal.com/scamai/15min" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 Reality Inc. All rights reserved. ScamAI is a product of Reality Inc.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
