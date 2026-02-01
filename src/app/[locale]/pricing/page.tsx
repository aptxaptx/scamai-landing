"use client";

import {
  usePricingCalculator,
  PricingHero,
  VolumeSlider,
  AddOnFeatures,
  ForensicAddOns,
  PriceSummary,
  PricingCards,
} from '@/components/pricing';

export default function PricingPage() {
  const {
    // State
    volume,
    setVolume,
    adaptiveDefense,
    setAdaptiveDefense,
    activeLiveness,
    setActiveLiveness,
    expressLane,
    setExpressLane,
    currency,
    setCurrency,
    // Calculations
    pricePerCheck,
    monthlyEstimate,
    // Currency
    currencySymbol,
    decimals,
    formatPrice,
  } = usePricingCalculator();

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Hero Section */}
      <PricingHero />

      {/* Pricing Calculator & Plans */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
            {/* Left Side - Calculator */}
            <div className="space-y-8">
              {/* Volume Slider */}
              <VolumeSlider volume={volume} onChange={setVolume} />

              {/* Add-on Features */}
              <AddOnFeatures
                adaptiveDefense={adaptiveDefense}
                setAdaptiveDefense={setAdaptiveDefense}
                activeLiveness={activeLiveness}
                setActiveLiveness={setActiveLiveness}
                expressLane={expressLane}
                setExpressLane={setExpressLane}
                currencySymbol={currencySymbol}
                formatPrice={formatPrice}
              />

              {/* Forensic Add-ons */}
              <ForensicAddOns currencySymbol={currencySymbol} formatPrice={formatPrice} />
            </div>

            {/* Right Side - Price Summary */}
            <PriceSummary
              volume={volume}
              pricePerCheck={pricePerCheck}
              monthlyEstimate={monthlyEstimate}
              adaptiveDefense={adaptiveDefense}
              activeLiveness={activeLiveness}
              expressLane={expressLane}
              currency={currency}
              setCurrency={setCurrency}
              currencySymbol={currencySymbol}
              decimals={decimals}
              formatPrice={formatPrice}
            />
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl text-center mb-16">
          <p className="text-lg text-gray-300 sm:text-xl">
            Transparent pricing with no hidden fees.{' '}
            <span className="font-bold text-white">Scale confidently as your business grows.</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto max-w-6xl">
          <PricingCards
            volume={volume}
            pricePerCheck={pricePerCheck}
            currencySymbol={currencySymbol}
            decimals={decimals}
            formatPrice={formatPrice}
          />
        </div>
      </section>
    </main>
  );
}
