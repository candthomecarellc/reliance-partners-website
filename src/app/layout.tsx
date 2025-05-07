import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Reliance Partners',
  description: 'Healthcare-specialized BPO providing exceptional customer service solutions',
  icons: {
    icon: [
      { url: '/images/favicons/favicon.ico' },
      { url: '/images/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/favicons/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/images/favicons/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/images/favicons/site.webmanifest'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/favicons/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/images/favicons/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
} 