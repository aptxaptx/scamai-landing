export default function VisionDetectionPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#66b3ff]">
            VISION DETECTION
          </p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Detect deepfakes in images and videos
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Industry-leading AI models that analyze visual content in real-time to identify synthetic media, manipulated faces, and deepfake videos with unprecedented accuracy.
          </p>
          <a
            href="https://app.scam.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rainbow-button inline-block"
          >
            <span className="rainbow-button-inner">
              Try Vision Detection
            </span>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Powerful Visual Analysis
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">Face Manipulation Detection</h3>
              <p className="text-gray-300">
                Identify face swaps, expression changes, and facial attribute manipulations with 99.2% accuracy.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">Video Frame Analysis</h3>
              <p className="text-gray-300">
                Analyze every frame of video content to detect inconsistencies, artifacts, and synthetic generation patterns.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">Real-Time Processing</h3>
              <p className="text-gray-300">
                Get instant results with processing times under 200ms for images and under 2 seconds for videos.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">Multi-Format Support</h3>
              <p className="text-gray-300">
                Works with JPG, PNG, GIF, MP4, MOV, and all major image and video formats.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">Detailed Reports</h3>
              <p className="text-gray-300">
                Receive comprehensive analysis reports with confidence scores, manipulated regions, and evidence markers.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">API Integration</h3>
              <p className="text-gray-300">
                Simple REST API for seamless integration into your existing workflows and platforms.
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
              <h3 className="mb-4 text-2xl font-bold text-white">Social Media Platforms</h3>
              <p className="mb-4 text-gray-300">
                Protect your users from manipulated content and deepfake campaigns. Automatically flag suspicious media before it spreads.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Content moderation automation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>User-generated content verification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Misinformation prevention</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Financial Services</h3>
              <p className="mb-4 text-gray-300">
                Prevent identity fraud and KYC bypass attempts with advanced deepfake detection during onboarding and verification.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>KYC verification enhancement</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Identity fraud prevention</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Document authenticity checks</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Media & Publishing</h3>
              <p className="mb-4 text-gray-300">
                Verify the authenticity of visual content before publication to maintain credibility and avoid spreading misinformation.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Fact-checking workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Source verification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Editorial integrity protection</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">E-commerce & Dating</h3>
              <p className="mb-4 text-gray-300">
                Build trust on your platform by ensuring profile photos and product images are authentic and unmanipulated.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Profile verification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Product image authenticity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#66b3ff]">•</span>
                  <span>Scam prevention</span>
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
            Start detecting deepfakes today
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
