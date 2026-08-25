import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Highlights } from '@/components/Highlights';
import { siteData } from '@/content/site-data';

const title = 'Sahil Kale | AI & NLP Researcher — Trustworthy, Reliable AI';
const description = 'Sahil Kale is an AI/NLP researcher at UCLA working on LLM self-knowledge, hallucination detection, and calibration under uncertainty. Published at NeurIPS, ACL, NAACL, and SIGIR.';
export const metadata: Metadata = { title, description, alternates: { canonical: 'https://sahil-kale.is-a.dev/' }, openGraph: { type: 'website', title, description, url: 'https://sahil-kale.is-a.dev/', images: [{ url: 'https://sahil-kale.is-a.dev/headshot.png' }] }, twitter: { card: 'summary_large_image', title, description, images: ['https://sahil-kale.is-a.dev/headshot.png'] } };

export default function Home() {
  return <main className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16"><Nav /><Hero /><Highlights entries={siteData.highlights} /><footer className="flex items-center justify-between border-t border-ink/10 py-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40"><span>{siteData.name}</span><span>ai engineer & researcher</span></footer></main>;
}
