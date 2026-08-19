import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: '400', variable: '--font-roboto' });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Sahil Kale — AI Researcher',
  description: 'Personal research portfolio of Sahil Kale.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', title: 'Sahil Kale — AI Researcher', description: 'Personal research portfolio of Sahil Kale.', url: '/' },
  twitter: { card: 'summary_large_image', title: 'Sahil Kale — AI Researcher', description: 'Personal research portfolio of Sahil Kale.' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${roboto.variable} font-sans antialiased`}>{children}</body></html>;
}
