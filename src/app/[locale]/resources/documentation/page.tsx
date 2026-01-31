export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#66b3ff]">
            DOCUMENTATION
          </p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Developer Documentation
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Everything you need to integrate ScamAI's deepfake detection API into your application in minutes.
          </p>
          <a
            href="https://app.scam.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rainbow-button inline-block"
          >
            <span className="rainbow-button-inner">
              Get API Key
            </span>
          </a>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
            Quick Start
          </h2>
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#66b3ff]/10 text-[#66b3ff] font-bold text-xl">
                1
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Sign Up</h3>
              <p className="text-gray-300">
                Create a free account at app.scam.ai and get your API key instantly.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#66b3ff]/10 text-[#66b3ff] font-bold text-xl">
                2
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Make API Call</h3>
              <p className="text-gray-300">
                Use our simple REST API to analyze images, audio, or video files.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#66b3ff]/10 text-[#66b3ff] font-bold text-xl">
                3
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Get Results</h3>
              <p className="text-gray-300">
                Receive instant analysis with confidence scores and detailed reports.
              </p>
            </div>
          </div>

          {/* Code Example */}
          <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-8">
            <h3 className="mb-4 text-xl font-bold text-white">Basic Example</h3>
            <div className="bg-black/60 text-green-400 p-6 rounded-lg font-mono text-sm border border-gray-700 overflow-x-auto">
              <div className="mb-4">
                <span className="text-gray-500"># Detect deepfakes in an image</span>
              </div>
              <div>curl -X POST https://api.scam.ai/v1/detect \</div>
              <div className="ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
              <div className="ml-4">-F "file=@image.jpg"</div>
              <div className="mt-6 mb-4">
                <span className="text-gray-500"># Response</span>
              </div>
              <div>{'{'}</div>
              <div className="ml-4">"is_synthetic": false,</div>
              <div className="ml-4">"confidence": 0.98,</div>
              <div className="ml-4">"processing_time_ms": 145,</div>
              <div className="ml-4">"model": "Eva-v1"</div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
            API Endpoints
          </h2>
          <div className="space-y-6">
            {/* Image Detection */}
            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded font-mono text-sm font-semibold">
                  POST
                </span>
                <code className="text-[#66b3ff]">/v1/detect/image</code>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Image Detection</h3>
              <p className="mb-4 text-gray-300">
                Analyze images for deepfakes, face swaps, and synthetic generation.
              </p>
              <div className="text-sm text-gray-400">
                <p><strong className="text-white">Rate Limit:</strong> 100 requests/minute</p>
                <p><strong className="text-white">Max File Size:</strong> 10MB</p>
                <p><strong className="text-white">Supported Formats:</strong> JPG, PNG, GIF, WebP</p>
              </div>
            </div>

            {/* Audio Detection */}
            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded font-mono text-sm font-semibold">
                  POST
                </span>
                <code className="text-[#66b3ff]">/v1/detect/audio</code>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Audio Detection</h3>
              <p className="mb-4 text-gray-300">
                Detect AI-generated voices, voice cloning, and synthetic speech.
              </p>
              <div className="text-sm text-gray-400">
                <p><strong className="text-white">Rate Limit:</strong> 100 requests/minute</p>
                <p><strong className="text-white">Max File Size:</strong> 50MB</p>
                <p><strong className="text-white">Supported Formats:</strong> MP3, WAV, M4A, FLAC</p>
              </div>
            </div>

            {/* Video Detection */}
            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded font-mono text-sm font-semibold">
                  POST
                </span>
                <code className="text-[#66b3ff]">/v1/detect/video</code>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Video Detection</h3>
              <p className="mb-4 text-gray-300">
                Analyze video content for deepfakes and manipulated frames.
              </p>
              <div className="text-sm text-gray-400">
                <p><strong className="text-white">Rate Limit:</strong> 50 requests/minute</p>
                <p><strong className="text-white">Max File Size:</strong> 100MB</p>
                <p><strong className="text-white">Supported Formats:</strong> MP4, MOV, AVI, WebM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
            SDKs & Libraries
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6 text-center">
              <h3 className="mb-2 text-lg font-bold text-white">Python</h3>
              <p className="mb-4 text-sm text-gray-400">pip install scamai</p>
              <code className="text-xs text-gray-500">Coming Soon</code>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6 text-center">
              <h3 className="mb-2 text-lg font-bold text-white">Node.js</h3>
              <p className="mb-4 text-sm text-gray-400">npm install scamai</p>
              <code className="text-xs text-gray-500">Coming Soon</code>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6 text-center">
              <h3 className="mb-2 text-lg font-bold text-white">Go</h3>
              <p className="mb-4 text-sm text-gray-400">go get scamai</p>
              <code className="text-xs text-gray-500">Coming Soon</code>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-6 text-center">
              <h3 className="mb-2 text-lg font-bold text-white">Ruby</h3>
              <p className="mb-4 text-sm text-gray-400">gem install scamai</p>
              <code className="text-xs text-gray-500">Coming Soon</code>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
            Best Practices
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-4 text-xl font-bold text-white">Error Handling</h3>
              <p className="text-gray-300">
                Always handle API errors gracefully. Implement retry logic with exponential backoff for temporary failures.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-4 text-xl font-bold text-white">Rate Limiting</h3>
              <p className="text-gray-300">
                Respect rate limits to avoid 429 errors. Implement request queuing for high-volume applications.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-4 text-xl font-bold text-white">File Optimization</h3>
              <p className="text-gray-300">
                Compress large files before uploading to reduce processing time and costs. Optimize video resolution when possible.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#0b0b0b] p-6">
              <h3 className="mb-4 text-xl font-bold text-white">Caching Results</h3>
              <p className="text-gray-300">
                Cache detection results for frequently checked content to reduce API calls and improve response times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Need help getting started?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Our team is here to help you integrate successfully.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="rainbow-button inline-block"
            >
              <span className="rainbow-button-inner">
                Contact Support
              </span>
            </a>
            <a
              href="https://app.scam.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-gray-700 bg-gray-800 px-8 py-3 font-semibold text-white hover:bg-gray-700 transition-colors"
            >
              Get API Key
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
