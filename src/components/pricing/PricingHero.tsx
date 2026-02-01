export function PricingHero() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white sm:text-sm">
          USAGE-BASED PRICING
        </p>
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
          Pay only for <span className="text-[#0043FA]">what you use</span>
        </h1>
        <p className="mx-auto max-w-3xl text-base text-gray-300 sm:text-lg lg:text-xl leading-relaxed">
          Transparent, predictable pricing for deepfake detection.{' '}
          <span className="font-semibold text-white">500 free checks per month</span>, then $0.15/check + optional
          add-ons. No hidden fees, no long-term contracts.
        </p>
      </div>
    </section>
  );
}
