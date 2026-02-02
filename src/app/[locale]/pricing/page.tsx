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
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] gap-8">
            {/* Volume Slider - Always First */}
            <div className="space-y-8 lg:order-1">
              <VolumeSlider volume={volume} onChange={setVolume} />

              {/* Add-on Features - Hidden on Mobile, Shown on Desktop */}
              <div className="hidden lg:block space-y-8">
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
                <ForensicAddOns currencySymbol={currencySymbol} formatPrice={formatPrice} />
              </div>
            </div>

            {/* Price Summary - Second on Mobile, Right Side on Desktop */}
            <div className="lg:order-2">
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

            {/* Add-on Features - Shown on Mobile After Price Summary */}
            <div className="lg:hidden space-y-8 lg:order-1">
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
              <ForensicAddOns currencySymbol={currencySymbol} formatPrice={formatPrice} />
            </div>
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
