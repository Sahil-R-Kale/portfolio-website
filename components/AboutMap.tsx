'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MapAchievement } from '@/content/about-data';

const project = (longitude: number, latitude: number) => ({ left: `${((longitude + 180) / 360) * 100}%`, top: `${((90 - latitude) / 180) * 100}%` });
const mapAlignmentCorrection = { x: -2.9, y: -1.4 };

export function AboutMap({ achievements }: { achievements: MapAchievement[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const highlightTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) setActiveId(null);
    };
    document.addEventListener('pointerdown', dismiss);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      if (highlightTimeoutRef.current) clearTimeout(highlightTimeoutRef.current);
    };
  }, []);

  const highlightAchievement = (id: string) => {
    if (highlightTimeoutRef.current) clearTimeout(highlightTimeoutRef.current);
    setHighlightedId(id);
    highlightTimeoutRef.current = setTimeout(() => setHighlightedId(null), 1600);
  };

  const seen = new Map<string, number>();
  return <>
  <div ref={mapRef} className="relative mt-8 aspect-[1.8/1] w-full overflow-visible rounded-[2rem] border border-ink/10 bg-white/35 p-2 shadow-[0_18px_50px_rgba(23,36,58,0.06)] sm:p-4">
    <img src="/about-world-map.svg" alt="Map showing Sahil Kale's research presentations and achievements across countries including the United States, Australia, Austria, Germany, Spain, Italy, France, Switzerland, Portugal, Denmark, China, India, and Sweden." className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] object-contain opacity-25 sm:inset-4 sm:h-[calc(100%-2rem)] sm:w-[calc(100%-2rem)]" />
    <div className="absolute left-6 top-5 z-20 sm:left-8 sm:top-7">
      <p className="text-[10px] font-bold tracking-[0.1em] text-coral sm:text-sm sm:tracking-[0.12em]">A MAP OF ACHIEVEMENTS</p>
      <p className="mt-1 hidden text-xs font-semibold uppercase tracking-[0.1em] text-ink/45 sm:block">Hover pins for details</p>
    </div>
    <div className="pointer-events-none absolute inset-2 z-10 sm:z-30 sm:inset-4">
      {achievements.map((achievement) => {
        const key = `${achievement.city}-${achievement.country}`;
        const index = seen.get(key) ?? 0;
        seen.set(key, index + 1);
        const offsets = index === 0 ? [0, 0] : index === 1 ? [1.8, -1.8] : [-1.8, 1.8];
        const position = project(achievement.longitude, achievement.latitude);
        const style = { left: `calc(${position.left} + ${offsets[0] + mapAlignmentCorrection.x}%)`, top: `calc(${position.top} + ${offsets[1] + mapAlignmentCorrection.y}%)` };
        const isActive = activeId === achievement.id;
        const horizontal = parseFloat(position.left) > 76 ? 'right-0' : parseFloat(position.left) < 24 ? 'left-0' : 'left-1/2 -translate-x-1/2';
        const vertical = parseFloat(position.top) < 28 ? 'top-7' : 'bottom-7';
        return <div key={achievement.id} className={`absolute -translate-x-1/2 -translate-y-1/2 sm:pointer-events-auto ${isActive ? 'z-40' : 'z-0'}`} style={style} onMouseEnter={() => setActiveId(achievement.id)} onMouseLeave={() => setActiveId(null)}>
          <Link href={`#achievement-${achievement.id}`} onClick={() => highlightAchievement(achievement.id)} aria-label={`View details for ${achievement.event}`} className="focus-ring pointer-events-auto relative flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-coral shadow-[0_0_0_2px_rgba(217,108,79,0.25)] sm:hidden"><span aria-hidden="true" className="h-1 w-1 rounded-full bg-white" /></Link>
          <button type="button" aria-label={`${achievement.event}, ${achievement.city}, ${achievement.country}`} aria-expanded={isActive} onClick={() => setActiveId(isActive ? null : achievement.id)} onFocus={() => setActiveId(achievement.id)} className="focus-ring relative hidden h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-coral shadow-[0_0_0_3px_rgba(217,108,79,0.25)] transition-transform hover:scale-125 focus:scale-125 sm:flex sm:h-5 sm:w-5"><span className="h-1.5 w-1.5 rounded-full bg-white" /></button>
          {isActive && <div role="status" className={`absolute z-20 hidden w-[min(14rem,calc(100vw-3rem))] rounded-xl border border-ink/10 bg-white p-4 text-left shadow-[0_15px_35px_rgba(23,36,58,0.16)] sm:block ${horizontal} ${vertical}`}>
            <p className="text-[11px] font-bold leading-4 text-ink">{achievement.event}</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-sky">{achievement.city}, {achievement.country}</p>
            <p className="mt-2 text-xs leading-5 text-ink/65">{achievement.description}</p>
          </div>}
        </div>;
      })}
    </div>
    <div className="absolute bottom-5 left-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-ink/45 sm:left-8"><span className="h-2 w-2 rounded-full bg-coral" /><span className="sm:hidden">Tap a pin for details below</span><span className="hidden sm:inline">Research &amp; impact milestones</span></div>
  </div>
  <div className="mt-6 space-y-3 sm:hidden">
    {achievements.slice().reverse().map((achievement) => <article key={achievement.id} id={`achievement-${achievement.id}`} className={`scroll-mt-24 rounded-2xl border p-4 transition-colors duration-500 ${highlightedId === achievement.id ? 'border-coral bg-coral/5' : 'border-ink/10 bg-white/45'}`}>
      <p className="text-sm font-bold leading-5 text-ink">{achievement.event}</p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-sky">{achievement.city}, {achievement.country}</p>
      <p className="mt-2 text-sm leading-6 text-ink/65">{achievement.description}</p>
    </article>)}
  </div>
  </>;
}
