import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/section/Header';
import Footer from '@/components/section/Footer';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
