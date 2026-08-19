 'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';

const links = [{ label: 'Home', href: '/' }, { label: 'About', href: '/about/' }, { label: 'Publications', href: '/publications/' }, { label: 'CV', href: '/cv.pdf' }];

export function Nav() {
  const pathname = usePathname();
  return <nav aria-label="Primary navigation" className="flex items-center justify-between gap-8 py-7">
    <Link href="/" aria-label="Sahil Kale — home" className="focus-ring text-coral"><Logo /></Link>
    <div className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink/60 sm:gap-x-7">
      {links.map((link) => <Link key={link.href} href={link.href} target={link.href.endsWith('.pdf') ? '_blank' : undefined} rel={link.href.endsWith('.pdf') ? 'noreferrer' : undefined} aria-current={pathname === link.href ? 'page' : undefined} className={`focus-ring transition-colors hover:text-coral ${pathname === link.href ? 'text-ink' : ''}`}>{link.label}</Link>)}
    </div>
  </nav>;
}
