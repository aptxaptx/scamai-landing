import { FORENSIC_REPORT_PRICE } from './constants';

interface ForensicAddOnsProps {
  currencySymbol: string;
  formatPrice: (price: number) => string;
}

export function ForensicAddOns({ currencySymbol, formatPrice }: ForensicAddOnsProps) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-purple-500/10 to-gray-900/60 border-2 border-purple-500/50 p-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Forensic Add-ons</h3>
          <p className="text-sm text-gray-400">Enterprise-grade investigation tools</p>
        </div>
        <span className="rounded-full bg-purple-500/20 border border-purple-500/50 px-3 py-1 text-xs font-semibold text-purple-300">
          Enterprise
        </span>
      </div>

      <div className="space-y-4">
        {/* Forensic PDF Reports */}
        <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h4 className="font-semibold text-white mb-1">Forensic PDF Reports</h4>
              <p className="text-sm text-gray-400 mb-3">
                Comprehensive provenance report with detailed analysis, chain of custody, and legal documentation
              </p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-purple-400">
                  {currencySymbol}{formatPrice(FORENSIC_REPORT_PRICE)}
                </span>
                <span className="text-sm text-gray-400">per image</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-500 mb-3">Includes:</p>
            <ul className="space-y-2 text-xs text-gray-400">
              {[
                'Detailed manipulation timeline & techniques used',
                'Chain of custody documentation',
                'Legal-ready evidence package',
                'Expert witness support available',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    className="h-4 w-4 flex-shrink-0 text-purple-400 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Sales CTA */}
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 w-full rounded-xl border-2 border-purple-500/50 bg-purple-500/10 py-3 text-center font-semibold text-purple-300 hover:bg-purple-500/20 hover:border-purple-500 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Talk to sales for forensic features
        </a>
      </div>
    </div>
  );
}
