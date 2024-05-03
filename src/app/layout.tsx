import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Playfair_Display, Albert_Sans} from 'next/font/google';
import Header from '@/components/section/Header';
import Footer from '@/components/section/Footer';

import '../styles/globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfairDisplay',
  display: 'swap',
});

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albertSans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Trip By The Sea',
  description: 'Trip By The Sea',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#e11d48' />
        <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body suppressHydrationWarning className={`${playfairDisplay.className} ${albertSans.className}`}>
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
