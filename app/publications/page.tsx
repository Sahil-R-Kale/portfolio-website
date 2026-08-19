import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Nav } from '@/components/Nav';
import { siteData } from '@/content/site-data';

export default function Publications() {
  const years = Array.from(new Set(siteData.publications.map((publication) => publication.year))).sort((a, b) => Number(b) - Number(a));
  return <main className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
    <Nav />
    <header className="pb-12 pt-14 sm:pt-20"><h1 className="mb-6 font-display text-5xl tracking-[-0.055em] text-ink sm:text-6xl">My Publications</h1><p className="text-base leading-8 text-ink/70">Here’s a list of my conference and journal publications, spanning my work on trustworthy AI, LLMs, NLP, and reliable machine learning systems.</p></header>
    <div className="pb-20">{years.map((year) => <section key={year} className="border-t border-ink/10 py-9 first:border-t-0 first:pt-0" aria-labelledby={`publications-${year}`}><h2 id={`publications-${year}`} className="font-display text-3xl tracking-[-0.04em] text-sky">{year}</h2><div className="mt-5">{siteData.publications.filter((publication) => publication.year === year).map((publication) => <article key={publication.title} className="grid gap-4 border-t border-ink/10 py-7 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,1.5fr)_minmax(220px,0.5fr)] sm:gap-16"><div><h3 className="max-w-4xl font-display text-xl leading-tight tracking-[-0.02em] text-ink sm:text-2xl">{publication.title}</h3><ul className="mt-3 space-y-2 text-sm leading-6 text-ink/70">{publication.contributions.map((contribution) => <li key={contribution} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-coral">{contribution}</li>)}</ul></div><div className="sm:pt-1"><p className="text-xs font-bold uppercase leading-5 tracking-[0.08em] text-sky">{publication.venue}</p><Link href={publication.url} target="_blank" rel="noreferrer" className="focus-ring mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-coral transition-colors hover:text-ink">Read the paper <ArrowUpRight size={14} /></Link></div></article>)}</div></section>)}</div>
    <footer className="flex items-center justify-between border-t border-ink/10 py-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40"><span>{siteData.name}</span><span>Research with care</span></footer>
  </main>;
}
