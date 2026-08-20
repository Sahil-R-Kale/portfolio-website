import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Nav } from '@/components/Nav';
import { siteData } from '@/content/site-data';

const researchCategories = [
  {
    title: 'LLM Self-Knowledge',
    papers: [
      { match: 'KnowRL:', keyword: 'KnowRL' },
      { match: 'Mirage of Mastery:', keyword: 'Memorization' },
      { match: 'Line of Duty:', keyword: 'Line of Duty' },
      { match: 'Future Confidence Distillation', keyword: 'Future Confidence' },
    ],
  },
  {
    title: 'Trustworthy & Reliable AI',
    papers: [
      { match: 'Lie to Me:', keyword: 'KG-Hallucination' },
      { match: 'i-Check:', keyword: 'i-Check' },
      { match: 'Look It Up:', keyword: 'LLM Web search' },
      { match: 'TeXpert:', keyword: 'TeXpert' },
    ],
  },
  {
    title: 'AI for Society & Policy',
    papers: [
      { match: 'Local Information Access in Marathi:', keyword: 'Low-resource NLP' },
      { match: 'Designing Policy with Last-Mile Stakeholders:', keyword: 'AI for Policy' },
      { match: 'Geospatial modeling study assessing population level accessibility', keyword: 'Geo-Healthcare' },
      { match: 'Assessing Population-level Accessibility', keyword: 'Healthcare access' },
    ],
  },
  {
    title: 'Applied AI & Security',
    papers: [
      { match: 'FAQ-Gen:', keyword: 'FAQ-Gen' },
      { match: 'A secure and imperceptible communication', keyword: 'Co-ordinate Steganography' },
      { match: 'A Modern Approach to Electoral Delimitation', keyword: 'Electoral Delimitation' },
    ],
  },
] as const;

const publicationId = (title: string) => `publication-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;

export default function Publications() {
  const sortedPublications = [...siteData.publications].sort((a, b) => Number(b.year) - Number(a.year) || b.month - a.month);
  const years = Array.from(new Set(sortedPublications.map((publication) => publication.year))).sort((a, b) => Number(b) - Number(a));
  return <main className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
    <Nav />
    <header className="pb-12 pt-14 sm:pt-20"><h1 className="mb-6 font-display text-5xl tracking-[-0.055em] text-ink sm:text-6xl">My Publications</h1><p className="text-base leading-8 text-ink/70">Here’s a list of my conference and journal publications, spanning my work on trustworthy AI, LLMs, NLP, and reliable machine learning systems.</p></header>
    <section aria-label="Research categories" className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {researchCategories.map((category) => <article key={category.title} className="rounded-2xl border border-ink/10 bg-white/35 p-4">
        <h2 className="font-display text-lg leading-tight tracking-[-0.03em] text-ink">{category.title}</h2>
        <div className="mt-2 divide-y divide-ink/10">
          {category.papers.map((paper) => {
            const publication = paper.match ? siteData.publications.find((item) => item.title.startsWith(paper.match as string)) : undefined;
            const content = <span className="text-[11px] font-bold uppercase leading-4 tracking-[0.06em] text-sky">{paper.keyword}</span>;
            return publication ? <Link key={paper.keyword} href={`#${publicationId(publication.title)}`} className="focus-ring flex min-h-9 items-center py-2 transition-colors hover:text-coral">{content}</Link> : <div key={paper.keyword} className="flex min-h-9 items-center py-2 text-ink/55" aria-label={`${paper.keyword}, publication details coming soon`}>{content}</div>;
          })}
        </div>
      </article>)}
    </section>
    <div className="pb-20">{years.map((year) => <section key={year} className="border-t border-ink/10 py-9 first:border-t-0 first:pt-0" aria-labelledby={`publications-${year}`}><h2 id={`publications-${year}`} className="font-display text-3xl tracking-[-0.04em] text-sky">{year}</h2><div className="mt-5">{sortedPublications.filter((publication) => publication.year === year).map((publication) => <article key={publication.title} id={publicationId(publication.title)} className="grid gap-4 border-t border-ink/10 py-7 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,1.5fr)_minmax(220px,0.5fr)] sm:gap-16"><div><h3 className="max-w-4xl font-display text-lg leading-tight tracking-[-0.02em] text-ink sm:text-xl">{publication.title}</h3><p className="mt-2 text-xs italic leading-5 text-ink/55">{publication.authors}</p><ul className="mt-3 space-y-2 text-sm leading-6 text-ink/70">{publication.contributions.map((contribution) => <li key={contribution} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-coral">{contribution}</li>)}</ul></div><div className="sm:pt-1"><p className="text-xs font-bold uppercase leading-5 tracking-[0.08em] text-sky">{publication.venue}</p><Link href={publication.url} target="_blank" rel="noreferrer" className="focus-ring mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-coral transition-colors hover:text-ink">Read the paper <ArrowUpRight size={14} /></Link></div></article>)}</div></section>)}</div>
    <footer className="flex items-center justify-between border-t border-ink/10 py-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40"><span>{siteData.name}</span><span>Research with care</span></footer>
  </main>;
}
