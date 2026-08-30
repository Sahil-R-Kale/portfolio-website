import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: '400', variable: '--font-roboto' });
const siteUrl = new URL('https://sahil-kale.is-a.dev');

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Sahil Kale | AI & NLP Researcher — Trustworthy, Reliable AI',
  description: 'Sahil Kale is an AI/NLP researcher at UCLA working on LLM self-knowledge, hallucination detection, and calibration under uncertainty. Published at NeurIPS, ACL, NAACL, and SIGIR.',
  verification: { google: 'u2_0X9eHgUP3RI4Rsbii4inyaGE1ZmIcsHnB8Qeq-Pw' },
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
