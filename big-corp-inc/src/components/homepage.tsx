'use client';

import React from 'react';
import Image from 'next/image';
import { CorporateCatchphrases } from '@/components/corporate-catchphrases';

export function Homepage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/BigCorpInc Favicon.png"
              alt="Big Corp Inc"
              width={120}
              height={120}
              className=""
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4 font-[family-name:var(--font-geist-sans)]">
            Welcome to{' '}
            <span className="text-black">
              Big Corp Inc.
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 tracking-wide">
            Business is our Business™
          </h2>

          {/* Animated Catchphrases */}
          <CorporateCatchphrases />

          {/* Corporate Description */}
          <div className="max-w-3xl mx-auto mb-8 space-y-4 text-left">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              At Big Corp Inc., we leverage synergy to synergize leverage. Our scalable paradigms deliver dynamic deliverables that redefine redefining itself. Through cross-functional alignment matrices, we ensure stakeholders remain aligned with our alignment strategy—maximizing holistic outcomes across all verticals, especially the vertical ones.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We don&apos;t just think outside the box—we monetize it, rebrand it as a thought-leadership container, and charge you for the webinar. With cutting-edge buzzword integration and a relentless commitment to whatever &ldquo;the future of business&rdquo; means this quarter, Big Corp Inc. optimizes the optimization process itself.
            </p>

            <p className="text-base sm:text-lg text-gray-900 font-semibold leading-relaxed pt-2">
              Big Corp Inc. — Moving Forward, Together, Towards More Forward™.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Big Corp Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
