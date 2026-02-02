export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#66b3ff]">
            PRODUCTS
          </p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            All-in-one deepfake detection platform
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Comprehensive AI-powered detection for images, audio, and video. One platform, complete protection.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Vision Detection */}
            <a 
              href="/products/vision-detection"
              className="group rounded-lg border border-gray-800 bg-gray-900/40 p-8 hover:border-[#66b3ff] transition-colors"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#66b3ff]/10 group-hover:bg-[#66b3ff]/20 transition-colors">
                <svg className="h-8 w-8 text-[#66b3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">Vision Detection</h3>
              <p className="mb-4 text-gray-300">
                Detect deepfakes in images and videos with 95.3%* accuracy. Identify face swaps, manipulated faces, and synthetic generation.
              </p>
              <div className="text-[#66b3ff] group-hover:underline">
                Learn more →
              </div>
            </a>

            {/* Audio Detection */}
            <a 
              href="/products/audio-detection"
              className="group rounded-lg border border-gray-800 bg-gray-900/40 p-8 hover:border-[#66b3ff] transition-colors"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#66b3ff]/10 group-hover:bg-[#66b3ff]/20 transition-colors">
                <svg className="h-8 w-8 text-[#66b3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">Audio Detection</h3>
              <p className="mb-4 text-gray-300">
                Identify AI-generated voices and voice cloning with 98.5% accuracy. Detect synthetic speech from major AI models.
              </p>
              <div className="text-[#66b3ff] group-hover:underline">
                Learn more →
              </div>
            </a>

            {/* Scam Database - Coming Soon */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8 opacity-60">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#66b3ff]/10">
                <svg className="h-8 w-8 text-[#66b3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                Scam Database
                <span className="ml-2 text-sm font-normal text-gray-500">(Coming Soon)</span>
              </h3>
              <p className="text-gray-300">
                Access a comprehensive database of known scams, deepfake campaigns, and synthetic media threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-4 px-6 text-left text-white font-bold">Feature</th>
                  <th className="py-4 px-6 text-center text-white font-bold">Vision</th>
                  <th className="py-4 px-6 text-center text-white font-bold">Audio</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800/50">
                  <td className="py-4 px-6">Detection Accuracy</td>
                  <td className="py-4 px-6 text-center">95.3%*</td>
                  <td className="py-4 px-6 text-center">98.5%</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-4 px-6">Processing Speed</td>
                  <td className="py-4 px-6 text-center">&lt;200ms</td>
                  <td className="py-4 px-6 text-center">3s</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-4 px-6">Supported Formats</td>
                  <td className="py-4 px-6 text-center">JPG, PNG, GIF, MP4</td>
                  <td className="py-4 px-6 text-center">MP3, WAV, M4A</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-4 px-6">Real-Time Analysis</td>
                  <td className="py-4 px-6 text-center text-[#66b3ff]">✓</td>
                  <td className="py-4 px-6 text-center text-[#66b3ff]">✓</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-4 px-6">Batch Processing</td>
                  <td className="py-4 px-6 text-center text-[#66b3ff]">✓</td>
                  <td className="py-4 px-6 text-center text-[#66b3ff]">✓</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-4 px-6">API Integration</td>
                  <td className="py-4 px-6 text-center text-[#66b3ff]">✓</td>
                  <td className="py-4 px-6 text-center text-[#66b3ff]">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Built for Every Industry
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-2 text-lg font-bold text-white">Social Media</h3>
              <p className="text-sm text-gray-300">Content moderation and user protection</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-2 text-lg font-bold text-white">Finance</h3>
              <p className="text-sm text-gray-300">KYC verification and fraud prevention</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-2 text-lg font-bold text-white">Media</h3>
              <p className="text-sm text-gray-300">Fact-checking and source verification</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-2 text-lg font-bold text-white">E-commerce</h3>
              <p className="text-sm text-gray-300">Profile and product authenticity</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Start detecting deepfakes today
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            200 free images per month. No credit card required.
          </p>
          <a
            href="https://app.scam.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rainbow-button inline-block"
          >
            <span className="rainbow-button-inner">
              Get Started Free
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
