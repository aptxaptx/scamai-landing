import {
  ADAPTIVE_DEFENSE_PRICE,
  ACTIVE_LIVENESS_PRICE,
  EXPRESS_LANE_PRICE,
} from './constants';

interface AddOnFeaturesProps {
  adaptiveDefense: boolean;
  setAdaptiveDefense: (value: boolean) => void;
  activeLiveness: boolean;
  setActiveLiveness: (value: boolean) => void;
  expressLane: boolean;
  setExpressLane: (value: boolean) => void;
  currencySymbol: string;
  formatPrice: (price: number) => string;
}

export function AddOnFeatures({
  adaptiveDefense,
  setAdaptiveDefense,
  activeLiveness,
  setActiveLiveness,
  expressLane,
  setExpressLane,
  currencySymbol,
  formatPrice,
}: AddOnFeaturesProps) {
  const features = [
    {
      id: 'adaptive-defense',
      name: 'Adaptive Defense',
      description: 'Real-time deepfake & injection attack detection with advanced AI models',
      price: ADAPTIVE_DEFENSE_PRICE,
      checked: adaptiveDefense,
      onChange: setAdaptiveDefense,
    },
    {
      id: 'active-liveness',
      name: 'Active Liveness',
      description: 'Interactive KYC movement verification for enhanced identity validation',
      price: ACTIVE_LIVENESS_PRICE,
      checked: activeLiveness,
      onChange: setActiveLiveness,
    },
    {
      id: 'express-lane',
      name: 'Express Lane',
      description: 'Ultra-low latency processing with <1s response time guarantee',
      price: EXPRESS_LANE_PRICE,
      checked: expressLane,
      onChange: setExpressLane,
    },
  ];

  return (
    <div className="rounded-3xl bg-gray-900/60 border border-gray-700 p-8">
      <h3 className="mb-6 text-xl font-bold text-white">Add-on Features</h3>
      <p className="mb-6 text-sm text-gray-400">Enhance your detection capabilities with optional features</p>

      <div className="space-y-4">
        {features.map((feature) => (
          <label
            key={feature.id}
            className="flex items-start gap-4 cursor-pointer group p-4 rounded-xl hover:bg-gray-800/50 transition-colors"
          >
            <input
              type="checkbox"
              checked={feature.checked}
              onChange={(e) => feature.onChange(e.target.checked)}
              className="mt-1 h-5 w-5 rounded-md border-gray-700 bg-gray-900 text-[#0043FA] focus:ring-2 focus:ring-[#0043FA]/20"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-white group-hover:text-[#0043FA] transition-colors">
                  {feature.name}
                </span>
                <span className="text-sm font-semibold text-[#0043FA]">
                  +{currencySymbol}{formatPrice(feature.price)}/check
                </span>
              </div>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
