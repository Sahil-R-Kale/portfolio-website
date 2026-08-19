'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { HighlightEntry } from '@/content/site-data';

export function Highlights({ entries }: { entries: HighlightEntry[] }) {
  const reducedMotion = useReducedMotion();
  return <section id="highlights" className="border-t border-ink/10 py-20" aria-labelledby="highlights-title">
    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky">A few markers along the way</p>
    <h2 id="highlights-title" className="mt-4 font-display text-4xl tracking-[-0.04em] text-ink sm:text-5xl">Highlights & News</h2>
    <div className="relative mt-10 max-w-none pl-1">
      <div className="absolute bottom-0 left-3 top-0 w-px bg-ink/15" aria-hidden="true" />
      {entries.map((entry, index) => <motion.div key={`${entry.year}-${entry.text}`} initial={reducedMotion ? false : { opacity: 0, x: -10 }} whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.45, delay: reducedMotion ? 0 : index * 0.04 }} className="relative grid min-h-14 grid-cols-[1.5rem_5.5rem_minmax(0,1fr)] items-center gap-x-5 py-4 sm:grid-cols-[1.5rem_6rem_minmax(0,1fr)] sm:gap-x-9">
        <span className="absolute left-3 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral ring-4 ring-cloud" aria-hidden="true" />
        <span aria-hidden="true" />
        <time className="text-xs font-bold tracking-[0.08em] text-sky">{entry.year}</time>
        <p className="text-sm leading-6 text-ink/75">{entry.text}</p>
      </motion.div>)}
    </div>
  </section>;
}
