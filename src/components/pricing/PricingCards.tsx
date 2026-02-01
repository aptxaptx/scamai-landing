import { FREE_CHECKS, VOLUME_DISCOUNT_THRESHOLD } from './constants';

interface PricingCardsProps {
  volume: number;
  pricePerCheck: number;
  currencySymbol: string;
  decimals: number;
  formatPrice: (price: number, forceDecimals?: number) => string;
}

export function PricingCards({ volume, pricePerCheck, currencySymbol, decimals, formatPrice }: PricingCardsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {/* Self-Serve Plan */}
      <div
        className={`relative rounded-3xl bg-gray-900/60 p-8 ${
          volume < VOLUME_DISCOUNT_THRESHOLD ? 'border-2 border-[#0043FA]' : 'border border-gray-700'
        }`}
      >
        {volume < VOLUME_DISCOUNT_THRESHOLD && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="rounded-full border-2 border-[#0043FA] bg-[#0043FA] px-4 py-1 text-xs font-semibold text-white">
              Recommended
            </span>
          </div>
        )}

        <h3 className="mb-6 text-2xl font-bold text-white">Self-Serve</h3>

        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-white">
              {currencySymbol}
              {volume <= FREE_CHECKS ? (decimals === 0 ? '0' : '0') : formatPrice(pricePerCheck, decimals === 0 ? 0 : 3)}
            </span>
            <span className="text-lg text-gray-400">per check</span>
          </div>
          {volume <= FREE_CHECKS && (
            <p className="mt-2 text-sm text-green-400">✓ Free for first 200 images with Eva-v1-Fast</p>
          )}
        </div>

        <p className="mb-2 text-sm font-semibold text-[#0043FA]">200 free images/month (Eva-v1-Fast)</p>

        <p className="mb-8 text-sm text-gray-300 leading-relaxed">
          For businesses ready to scale with flexible pricing. First 200 images free with Eva-v1-Fast model, then $0.15/image + optional
          add-ons.
        </p>

        <a
          href="https://app.scam.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 block w-full rounded-full bg-[#0043FA] py-3.5 text-center font-semibold text-white hover:bg-[#0036C8] transition-colors"
        >
          Start now →
        </a>

        <ul className="space-y-3 text-sm text-gray-300">
          {['GenAI Detection', 'Deepfake Analysis', 'Eva-v1-Fast Model', 'API Access', 'All optional add-ons'].map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className={`mr-2 h-5 w-5 flex-shrink-0 ${index === 4 ? 'text-gray-600' : 'text-[#0043FA]'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className={index === 4 ? 'text-gray-500' : ''}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Enterprise Plan */}
      <div
        className={`relative rounded-3xl bg-gray-900/40 p-8 ${
          volume >= VOLUME_DISCOUNT_THRESHOLD ? 'border-2 border-[#0043FA]' : 'border border-gray-700'
        }`}
      >
        {volume >= VOLUME_DISCOUNT_THRESHOLD && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="rounded-full border-2 border-[#0043FA] bg-[#0043FA] px-4 py-1 text-xs font-semibold text-white">
              Recommended
            </span>
          </div>
        )}
        <h3 className="mb-6 text-2xl font-bold text-white">Enterprise</h3>

        <div className="mb-6">
          <span className="text-5xl font-bold text-white">Custom</span>
        </div>

        {volume >= VOLUME_DISCOUNT_THRESHOLD ? (
          <div className="mb-8">
            <div className="mb-4 rounded-xl bg-gradient-to-r from-[#0043FA]/20 to-purple-500/20 border border-[#0043FA]/50 px-4 py-3">
              <p className="text-sm font-semibold text-white mb-1">🎯 Perfect for your volume</p>
              <p className="text-xs text-gray-300">Get volume discounts + enterprise features for 5,000+ checks/month</p>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Unlock custom pricing, Eva-v1-Pro forensic-grade model with lower false positives, advanced Thinking capabilities, and dedicated support for high-volume operations
            </p>
          </div>
        ) : (
          <p className="mb-8 text-sm text-gray-300 leading-relaxed">
            For large organizations requiring forensic-grade accuracy, lower false positives, and dedicated support. Includes Eva-v1-Pro model and advanced Thinking capabilities.
          </p>
        )}

        <a
          href="https://cal.com/scamai/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 block w-full rounded-full border-2 border-[#0043FA] bg-gray-800/50 py-3.5 text-center font-semibold text-white hover:bg-[#0043FA] transition-colors"
        >
          Talk to sales →
        </a>

        <ul className="space-y-3 text-sm text-gray-300">
          {[
            'Everything in Self-Serve',
            'Eva-v1-Pro Model',
            'Thinking (Advanced Reasoning)',
            'Volume Discounts',
            'Priority Support & SLA',
            'Dedicated Account Manager',
            'Custom Integration & Training',
          ].map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[#0043FA]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
