import type { Metadata } from 'next';
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader';
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
  verification: {
    google: 'b2PIaVnoFqFLN-SEb7rpNWx_PtfYYuYf_P5iPdfcxJA'
  },
  robots: 'index, follow',
  title: 'Trip by the Sea',
  description: 'Uncover your dream dive spot! Read diver reviews and discover the best diving destinations around the world. Find detailed info on marine life, visibility, dive sites, and more. Plan your next diving adventure with confidence!',
  keywords: 'diving reviews, best diving destinations, dive spot, marine life, scuba diving tips, raja ampat, komodo, indonesia diving area, bali, maratua, tulamben, nusa penida, scuba gear, dive trip review, diving in bali, sea trip, coral bali, sea adventures, diving trip, snorkeling trip',
  openGraph: {
    title: 'Trip by the Sea',
    description: 'Uncover your dream dive spot! Read diver reviews and discover the best diving destinations around the world. Find detailed info on marine life, visibility, dive sites, and more. Plan your next diving adventure with confidence!',
    type: 'website',
    images: ''
  }
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

        <Script
          id='google-analytics'
          src='https://www.googletagmanager.com/gtag/js?id=G-6WM74GR8ZG'
          strategy='afterInteractive'
          onLoad={() => {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-6WM74GR8ZG');
          `}}
        />
      </head>
      <body suppressHydrationWarning className={`${playfairDisplay.className} ${albertSans.className}`}>
        <NextTopLoader
          color='#BE123C'
          showSpinner={false}
          height={4}
        />
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
