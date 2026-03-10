export default function AgeEstimationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative px-4 sm:px-6" style={{ paddingTop: '160px', paddingBottom: '120px' }}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
            COMPLIANCE
          </p>
          <h1
            className="text-[2.5rem] sm:text-[3.5rem] font-semibold"
            style={{ lineHeight: '1em', letterSpacing: '-.015em' }}
          >
            Age Estimation
          </h1>
          <p
            className="mt-6 text-lg sm:text-xl mx-auto max-w-[600px]"
            style={{
              background: 'radial-gradient(50% 150% at 50% 0%, #fff 60%, rgba(255,255,255,0.6) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Facial age verification powered by AI
          </p>
        </div>
      </section>
    </main>
  );
}
