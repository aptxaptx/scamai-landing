export default function AudioDetectionPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#66b3ff]">
            AUDIO DETECTION
          </p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Detect voice cloning and synthetic audio
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Advanced AI-powered analysis to identify AI-generated voices, voice cloning attempts, and manipulated audio content with industry-leading precision.
          </p>
          <a
            href="https://app.scam.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rainbow-button inline-block"
          >
            <span className="rainbow-button-inner">
              Try Audio Detection
            </span>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Advanced Audio Analysis
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">Voice Cloning Detection</h3>
              <p className="text-gray-300">
                Identify AI-generated voice clones with 98.5% accuracy across multiple languages and accents.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">Synthetic Speech Analysis</h3>
              <p className="text-gray-300">
                Detect text-to-speech output from major AI models including ElevenLabs, PlayHT, and more.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">Real-Time Verification</h3>
              <p className="text-gray-300">
                Get instant results with processing times under 1 second for audio clips up to 30 seconds.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">Multi-Format Support</h3>
              <p className="text-gray-300">
                Works with MP3, WAV, M4A, FLAC, and all major audio formats.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">Manipulation Detection</h3>
              <p className="text-gray-300">
                Identify spliced audio, pitch modifications, and other audio manipulations.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">Simple Integration</h3>
              <p className="text-gray-300">
                Easy REST API integration for real-time or batch audio verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Use Cases
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Call Centers & Customer Service</h3>
              <p className="mb-4 text-gray-300">
                Protect against voice impersonation and fraud attempts in customer service interactions.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Caller authentication</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Voice biometric verification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Fraud prevention</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Banking & Financial Services</h3>
              <p className="mb-4 text-gray-300">
                Prevent voice phishing scams and unauthorized account access through voice authentication bypass.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Voice banking security</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Phone authentication</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Vishing detection</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Media & Broadcasting</h3>
              <p className="mb-4 text-gray-300">
                Verify the authenticity of audio recordings and prevent the spread of manipulated interviews or statements.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Audio source verification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Interview authenticity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Content integrity</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Legal & Law Enforcement</h3>
              <p className="mb-4 text-gray-300">
                Authenticate audio evidence and detect manipulated recordings in legal proceedings.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Evidence authentication</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Forensic analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Chain of custody verification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Start verifying audio authenticity today
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            100 free checks per month. No credit card required.
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
