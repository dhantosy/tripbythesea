import type { Metadata } from 'next';
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
    <html lang="en" className='scroll-smooth'>
      <body suppressHydrationWarning className={`${playfairDisplay.className} ${albertSans.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
