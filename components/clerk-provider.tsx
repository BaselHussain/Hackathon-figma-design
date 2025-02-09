'use client';

import { ClerkProvider as OriginalClerkProvider } from '@clerk/nextjs';
import { type ReactNode, useEffect, useState } from 'react';

export function ClerkProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <OriginalClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#000000',
          colorText: '#000000',
        },
      }}
    >
      {children}
    </OriginalClerkProvider>
  );
}