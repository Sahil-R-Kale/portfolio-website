import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Highlights } from '@/components/Highlights';
import { siteData } from '@/content/site-data';

export default function Home() {
  return <main className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16"><Nav /><Hero /><Highlights entries={siteData.highlights} /><footer className="flex items-center justify-between border-t border-ink/10 py-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40"><span>{siteData.name}</span><span>ai engineer & researcher</span></footer></main>;
}
