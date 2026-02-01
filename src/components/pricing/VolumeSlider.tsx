import { MAX_VOLUME, VOLUME_DISCOUNT_THRESHOLD } from './constants';

interface VolumeSliderProps {
  volume: number;
  onChange: (volume: number) => void;
}

export function VolumeSlider({ volume, onChange }: VolumeSliderProps) {
  const sliderPosition = (volume / MAX_VOLUME) * 100;
  const bubbleLeftPercent = Math.max(5, Math.min(95, sliderPosition));

  return (
    <div className="rounded-3xl bg-gray-900/60 border border-gray-700 p-8">
      <label className="mb-6 block text-xl font-bold text-white">Monthly Volume</label>
      <div className="relative pt-10 pb-2">
        {/* Current value above slider */}
        <div
          className="absolute top-0 bg-[#0043FA] text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap z-10"
          style={{
            left: `${bubbleLeftPercent}%`,
            transform: 'translateX(-50%)',
          }}
        >
          {volume.toLocaleString()} checks
        </div>
        <input
          type="range"
          min="0"
          max={MAX_VOLUME}
          step="100"
          value={volume}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-[#0043FA]"
        />
        <div className="mt-3 flex items-center justify-between text-sm text-gray-400">
          <span>0</span>
          <span>{MAX_VOLUME.toLocaleString()}</span>
        </div>
      </div>

      {/* Volume Discount Badge - shown when at max */}
      {volume === MAX_VOLUME && (
        <div className="mt-6 rounded-2xl border-2 border-[#0043FA] bg-gradient-to-r from-[#0043FA]/20 to-purple-500/20 p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0043FA] flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-bold text-xl text-white mb-2">Need more than {MAX_VOLUME.toLocaleString()} checks?</p>
              <p className="text-sm text-gray-300 mb-4">
                Unlock enterprise-grade features, volume discounts, and dedicated support for high-volume needs.
              </p>
              <a
                href="https://cal.com/scamai/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0043FA] text-white font-semibold hover:bg-[#0036C8] transition-colors"
              >
                Talk to Sales
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
