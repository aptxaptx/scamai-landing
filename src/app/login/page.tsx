"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      // Redirect to app.scam.ai
      window.location.href = "https://app.scam.ai";
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/scamailogo.png"
              alt="Scam AI logo"
              width={200}
              height={32}
              className="h-8 w-auto mx-auto"
            />
          </Link>
        </div>

        {/* Login Form */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
          <h1 className="text-2xl font-bold text-white text-center mb-6">
            Sign in to ScamAI
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a
                href="https://app.scam.ai/forgot-password"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Forgot your password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black py-2 px-4 rounded-md font-semibold hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              Don&apos;t have an account?{" "}
              <a
                href="https://app.scam.ai/signup"
                className="text-white hover:text-white/80 transition-colors font-medium"
              >
                Sign up
              </a>
            </p>
          </div>

          {/* Alternative Login */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <a
              href="https://app.scam.ai"
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 bg-white/10 text-white rounded-md hover:bg-white/15 transition-colors text-sm"
            >
              Continue to ScamAI App
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-white/60 hover:text-white transition-colors text-sm"
          >
            ← Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
