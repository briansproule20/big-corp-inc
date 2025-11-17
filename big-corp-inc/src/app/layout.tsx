import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { SiteHeader } from '@/components/site-header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Big Corp Inc',
  description: 'Moving Forward, Together, Towards More Forward™.',
  icons: {
    icon: [{ url: '/BigCorpInc Favicon.png', type: 'image/png' }],
    shortcut: '/BigCorpInc Favicon.png',
    apple: '/BigCorpInc Favicon.png',
  },
  openGraph: {
    title: 'Big Corp Inc',
    description: 'Moving Forward, Together, Towards More Forward™.',
    images: ['/BigCorpInc Favicon.png'],
    siteName: 'Big Corp Inc',
  },
  twitter: {
    card: 'summary',
    title: 'Big Corp Inc',
    description: 'Moving Forward, Together, Towards More Forward™.',
    images: ['/BigCorpInc Favicon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-gray-50`}
      >
        <Providers>
          <SiteHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
