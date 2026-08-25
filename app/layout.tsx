import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: '400', variable: '--font-roboto' });
const siteUrl = new URL('https://sahil-kale.is-a.dev');

export const metadata: Metadata = {
  metadataBase: siteUrl,
  verification: { google: 'google9a9d3d4516e5fd27.html' },
};

const personJsonLd = {
  '@context': 'https://schema.org', '@type': 'Person', name: 'Sahil Kale',
  url: 'https://sahil-kale.is-a.dev', image: 'https://sahil-kale.is-a.dev/headshot.png',
  jobTitle: 'AI Researcher', email: 'mailto:sahilrkale05@gmail.com',
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of California, Los Angeles' },
  knowsAbout: ['Natural Language Processing', 'Large Language Models', 'Trustworthy AI', 'Hallucination Detection', 'Model Calibration', 'Machine Learning'],
  sameAs: ['https://www.linkedin.com/in/sahil-r-kale/', 'https://scholar.google.com/citations?hl=en&user=_Kho5oEAAAAJ']
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${roboto.variable} font-sans antialiased`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />{children}</body></html>;
}
