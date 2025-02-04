import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MLHBanner from '@/components/MLHBanner'
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DiamondHacks 2025',
  description: "ACM at UCSD's annual hackathon",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <MLHBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
