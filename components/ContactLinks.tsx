'use client';

import { BookOpen, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ContactLink } from '@/content/site-data';

const icons = { email: Mail, linkedin: Linkedin, scholar: BookOpen };

export function ContactLinks({ links }: { links: ContactLink[] }) {
  return <div className="flex items-center gap-3" aria-label="Contact links">
    {links.map((link) => { const Icon = icons[link.kind]; return <motion.a key={link.kind} href={link.href} target={link.kind === 'email' ? undefined : '_blank'} rel={link.kind === 'email' ? undefined : 'noreferrer'} aria-label={`${link.label}: ${link.hint}`} title={link.hint} className="focus-ring group flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white/60 text-ink transition-colors hover:border-coral hover:bg-coral hover:text-white"><Icon size={18} strokeWidth={1.8} aria-hidden="true" /><span className="sr-only">{link.label}</span></motion.a>; })}
  </div>;
}
