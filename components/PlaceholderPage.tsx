import { Nav } from './Nav';

export function PlaceholderPage({ title }: { title: string }) {
  return <main className="mx-auto min-h-screen max-w-7xl px-6 sm:px-10 lg:px-16"><Nav /><section className="flex min-h-[70vh] items-center"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky">In progress</p><h1 className="mt-5 font-display text-6xl tracking-[-0.05em] text-ink sm:text-8xl">{title}</h1><p className="mt-6 max-w-md text-sm leading-7 text-ink/60">This page is being shaped. Check back soon.</p></div></section></main>;
}
