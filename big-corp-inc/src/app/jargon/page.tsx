/**
 * Corporate Jargon Solutions Page
 *
 * AI-powered jargon generator with Echo SDK integration
 * Requires authentication to access
 */

import { isSignedIn } from '@/echo';
import { JargonChat } from '@/components/jargon-chat';
import { JargonSignIn } from '@/components/jargon-signin';
import { MessageSquare } from 'lucide-react';

export default async function JargonPage() {
  const _isSignedIn = await isSignedIn();

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] p-2 sm:p-4 max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="mb-4 p-4 sm:p-6 bg-gray-100 rounded-xl border border-gray-300 shadow-sm">
        <div className="flex items-start gap-3">
          <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0 mt-1 text-gray-700" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 font-[family-name:var(--font-geist-sans)]">
              Corporate Jargon Solutions
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Synergize your communication with AI-powered corporate speak optimization
            </p>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="relative flex-1 min-h-0">
        <JargonChat />

        {/* Overlay when not signed in */}
        {!_isSignedIn && (
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30 flex items-center justify-center rounded-xl border border-gray-300">
            <JargonSignIn />
          </div>
        )}
      </div>
    </div>
  );
}
