export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#66b3ff]">
            ABOUT SCAMAI
          </p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Building trust in the AI era
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            We're on a mission to protect individuals and organizations from the growing threat of synthetic media and deepfakes with industry-leading AI detection technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
                Our Mission
              </h2>
              <p className="mb-4 text-lg text-gray-300">
                As AI-generated content becomes increasingly sophisticated, the line between real and fake is blurring. Deepfakes and synthetic media threaten trust, security, and truth across industries.
              </p>
              <p className="mb-4 text-lg text-gray-300">
                ScamAI was founded to solve this critical challenge. We provide the most accurate, fastest, and most accessible deepfake detection platform in the world.
              </p>
              <p className="text-lg text-gray-300">
                Our technology protects billions of users across social media, financial services, media organizations, and enterprises worldwide.
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-4xl font-bold text-[#66b3ff]">99.2%</h3>
                  <p className="text-gray-300">Detection accuracy</p>
                </div>
                <div>
                  <h3 className="mb-2 text-4xl font-bold text-[#66b3ff]">&lt;200ms</h3>
                  <p className="text-gray-300">Average processing time</p>
                </div>
                <div>
                  <h3 className="mb-2 text-4xl font-bold text-[#66b3ff]">10M+</h3>
                  <p className="text-gray-300">Checks performed monthly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Accuracy First</h3>
              <p className="text-gray-300">
                We obsess over accuracy. Our models are continuously trained on the latest synthetic media techniques to maintain industry-leading detection rates.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Privacy & Security</h3>
              <p className="text-gray-300">
                Your data is yours. We're SOC 2 Type II compliant, GDPR-ready, and never use customer data for model training without explicit consent.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Developer Experience</h3>
              <p className="text-gray-300">
                We build tools developers love. Simple APIs, clear documentation, and transparent pricing mean you can integrate in minutes, not weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Backed By Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
            Backed and trusted by
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="/berkeley.svg" alt="Berkeley SkyDeck" className="h-12" />
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="/meta.png" alt="Meta" className="h-8" />
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="/hp.png" alt="HP" className="h-10" />
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="/sbi.png" alt="SBI" className="h-10" />
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="/lg.png" alt="LG" className="h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-3xl font-bold sm:text-4xl">
            Our Team
          </h2>
          <p className="mb-12 text-center text-lg text-gray-300 max-w-3xl mx-auto">
            We're a team of AI researchers, security experts, and engineers from leading tech companies and research institutions, united by a mission to combat synthetic media threats.
          </p>
          <div className="text-center">
            <a
              href="/contact"
              className="rainbow-button inline-block"
            >
              <span className="rainbow-button-inner">
                Join Our Team
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Ready to protect your platform?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Join thousands of developers and companies using ScamAI to fight synthetic media.
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
