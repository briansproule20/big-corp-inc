/**
 * Image Generation Page
 *
 * AI image generation interface with Echo SDK integration
 * Supports both OpenAI and Gemini models for text-to-image and image editing
 */

import { isSignedIn } from '@/echo';
import ImageGenerator from '@/components/image-generator';
import { ImageGenSignIn } from '@/components/image-gen-signin';

export default async function ImageGenPage() {
  // Check authentication status using Echo SDK
  const _isSignedIn = await isSignedIn();

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] p-2 sm:p-4 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="mb-4 sm:mb-8 p-4 sm:p-6 bg-gray-100 rounded-xl border border-gray-300 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 font-[family-name:var(--font-geist-sans)]">
          Visual Asset Optimization Portal™
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Leveraging AI-driven paradigms to synergize visual deliverables
        </p>
      </div>

      {/* Main image generation interface */}
      <div className="relative flex-1">
        <ImageGenerator />

        {/* Overlay when not signed in */}
        {!_isSignedIn && (
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30 flex items-center justify-center rounded-xl border border-gray-300">
            <ImageGenSignIn />
          </div>
        )}
      </div>
    </div>
  );
}
