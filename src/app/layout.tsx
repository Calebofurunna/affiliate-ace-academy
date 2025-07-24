import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Affiliate Ace Academy - Turn Your Network Into Income',
    template: '%s | Affiliate Ace Academy',
  },
  description:
    'Join Affiliate Ace Academy and transform your social presence into a profitable business. Get access to high-converting products, expert training, and earn up to 50% commissions. Start your affiliate marketing journey today!',
  keywords: [
    'affiliate marketing',
    'affiliate program',
    'digital marketing',
    'online income',
    'passive income',
    'affiliate commissions',
    'marketing training',
    'affiliate network',
    'earn money online',
    'social media marketing',
  ],
  authors: [{ name: 'Affiliate Ace Academy' }],
  creator: 'Affiliate Ace Academy',
  publisher: 'Affiliate Ace Academy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://affiliate-ace-academy.vercel.app',
    siteName: 'Affiliate Ace Academy',
    title: 'Affiliate Ace Academy - Turn Your Network Into Income',
    description:
      'Join thousands of successful affiliates earning passive income. High commissions, proven products, expert support.',
    images: [
      {
        url: '/affiliate-ace-academy-logo.png',
        width: 1200,
        height: 630,
        alt: 'Affiliate Ace Academy Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affiliate Ace Academy - Turn Your Network Into Income',
    description:
      'Join thousands of successful affiliates earning passive income. High commissions, proven products, expert support.',
    images: ['/affiliate-ace-academy-logo.png'],
    creator: '@affiliateace', // Replace with your actual Twitter handle
    site: '@affiliateace', // Replace with your actual Twitter handle
  },
  icons: {
    icon: [
      {
        url: '/affiliate-ace-academy-logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/affiliate-ace-academy-logo.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/affiliate-ace-academy-logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcut: '/affiliate-ace-academy-logo.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://affiliate-ace-academy.vercel.app'),
  alternates: {
    canonical: 'https://affiliate-ace-academy.vercel.app',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with your actual Google verification code
    // yandex: 'your-yandex-verification-code', // Add if needed
    // yahoo: 'your-yahoo-verification-code', // Add if needed
  },
  category: 'business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#ef4444" />
        <meta name="msapplication-TileColor" content="#ef4444" />
        <meta
          name="msapplication-TileImage"
          content="/affiliate-ace-academy-logo.png"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Affiliate Ace Academy',
              url: 'https://affiliate-ace-academy.vercel.app',
              logo: 'https://affiliate-ace-academy.vercel.app/affiliate-ace-academy-logo.png',
              description:
                'Join Affiliate Ace Academy and transform your social presence into a profitable business.',
              sameAs: [
                // Add your social media URLs here
                // "https://facebook.com/affiliateaceacademy",
                // "https://twitter.com/affiliateace",
                // "https://instagram.com/affiliateaceacademy"
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: 'English',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
