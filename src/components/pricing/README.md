# Pricing Components

This folder contains modular, reusable components for the pricing page.

## Structure

```
pricing/
├── constants.ts              # Pricing constants and types
├── usePricingCalculator.ts   # Custom hook for pricing logic
├── PricingHero.tsx           # Hero section component
├── VolumeSlider.tsx          # Volume slider with discount badge
├── AddOnFeatures.tsx         # Per-check add-on features
├── ForensicAddOns.tsx        # Enterprise forensic features
├── PriceSummary.tsx          # Price summary card with currency selector
├── PricingCards.tsx          # Self-Serve and Enterprise plan cards
├── index.ts                  # Barrel export file
└── README.md                 # This file
```

## Key Features

### 1. **Modular Architecture**
- Each component is self-contained and reusable
- Clear separation of concerns
- Easy to test and maintain

### 2. **Custom Hook (usePricingCalculator)**
- Centralizes all pricing logic
- Manages state and calculations
- Provides currency conversion utilities

### 3. **Type Safety**
- TypeScript types for all components
- Currency type safety
- Proper prop interfaces

### 4. **Multi-Currency Support**
- 7 currencies supported: USD, EUR, GBP, SGD, HKD, JPY, KRW
- Automatic conversion with real-time rates
- Smart decimal formatting (no decimals for JPY/KRW)

### 5. **Responsive Design**
- Mobile-first approach
- Sticky price summary on desktop
- Adaptive layouts for all screen sizes

## Usage

```tsx
import {
  usePricingCalculator,
  PricingHero,
  VolumeSlider,
  AddOnFeatures,
  PriceSummary,
} from '@/components/pricing';

function PricingPage() {
  const calculator = usePricingCalculator();
  
  return (
    <>
      <PricingHero />
      <VolumeSlider volume={calculator.volume} onChange={calculator.setVolume} />
      <AddOnFeatures {...calculator} />
      <PriceSummary {...calculator} />
    </>
  );
}
```

## Pricing Logic

### Free Tier
- First 200 images per month are FREE with Eva-v1-Fast model
- No credit card required

### Paid Tier
- Base price: $0.15 per check (after free tier)
- Optional add-ons:
  - Adaptive Defense: +$0.20/check (Real-time GenAI, deepfake & injection attack detection)
  - Active Liveness: +$0.10/check (Live face detection to verify real human presence and prevent GenAI-generated deepfakes)
  - Express Lane: +$0.10/check (Ultra-low latency processing with <1s response time)

### Enterprise Tier
- Recommended for volumes > 5,000 checks/month
- Eva-v1-Pro Model (forensic-grade with lower false positives)
- Thinking (advanced reasoning capabilities)
- Custom pricing and volume discounts
- Dedicated support and features

### Forensic Add-ons
- Forensic PDF Reports: $500/image
- Enterprise-grade investigation tools
- Legal-ready documentation

## Constants

All pricing values are centralized in `constants.ts`:
- `FREE_CHECKS`: 200 (Eva-v1-Fast model)
- `BASE_PRICE`: 0.15
- `ADAPTIVE_DEFENSE_PRICE`: 0.20
- `ACTIVE_LIVENESS_PRICE`: 0.10
- `EXPRESS_LANE_PRICE`: 0.10
- `FORENSIC_REPORT_PRICE`: 500
- `VOLUME_DISCOUNT_THRESHOLD`: 5000

## Best Practices

1. **Always use the custom hook** for pricing calculations
2. **Update constants.ts** for any price changes
3. **Use formatPrice()** for all currency displays
4. **Test with multiple currencies** before deploying
5. **Maintain component isolation** - avoid tight coupling

## Future Enhancements

- [ ] Add animation transitions
- [ ] Implement pricing comparison table
- [ ] Add FAQ section
- [ ] Support for custom enterprise quotes
- [ ] A/B testing for pricing models
