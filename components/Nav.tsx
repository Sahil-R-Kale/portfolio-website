 'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';

const links = [{ label: 'Home', href: '/' }, { label: 'About', href: '/about/' }, { label: 'Publications', href: '/publications/' }, { label: 'CV', href: '/cv.pdf' }];

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return <nav aria-label="Primary navigation" className="relative flex items-center justify-between gap-8 py-7">
    <Link href="/" aria-label="Sahil Kale — home" className="focus-ring text-coral"><Logo /></Link>
    <div className="hidden flex-wrap justify-end gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink/60 sm:flex sm:gap-x-7">
      {links.map((link) => <Link key={link.href} href={link.href} target={link.href.endsWith('.pdf') ? '_blank' : undefined} rel={link.href.endsWith('.pdf') ? 'noreferrer' : undefined} aria-current={pathname === link.href ? 'page' : undefined} className={`focus-ring transition-colors hover:text-coral ${pathname === link.href ? 'text-ink' : ''}`}>{link.label}</Link>)}
    </div>
    <button type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)} className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/45 text-ink sm:hidden">
      <span aria-hidden="true" className="flex w-4 flex-col gap-1"><span className="h-px w-full bg-current" /><span className="h-px w-full bg-current" /><span className="h-px w-full bg-current" /></span>
    </button>
    {menuOpen && <div id="mobile-navigation" className="absolute right-0 top-full z-50 mt-[-0.5rem] w-[min(14rem,calc(100vw-3rem))] rounded-2xl border border-ink/10 bg-white p-2 shadow-[0_15px_35px_rgba(23,36,58,0.12)] sm:hidden">
      {links.map((link) => <Link key={link.href} href={link.href} target={link.href.endsWith('.pdf') ? '_blank' : undefined} rel={link.href.endsWith('.pdf') ? 'noreferrer' : undefined} aria-current={pathname === link.href ? 'page' : undefined} onClick={closeMenu} className={`focus-ring block rounded-xl px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink/60 hover:bg-cloud hover:text-coral ${pathname === link.href ? 'text-ink' : ''}`}>{link.label}</Link>)}
    </div>}
  </nav>;
}
