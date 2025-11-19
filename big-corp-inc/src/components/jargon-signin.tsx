'use client';

import { EchoSignIn } from '@merit-systems/echo-next-sdk/client';
import { useRouter } from 'next/navigation';

export function JargonSignIn() {
  const router = useRouter();

  return (
    <EchoSignIn
      onSuccess={() => {
        // Refresh the page to update auth state
        router.refresh();
      }}
    />
  );
}
