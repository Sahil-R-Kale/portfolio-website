'use client';

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '@/content/site-data';
import { ContactLinks } from './ContactLinks';

const enter = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

export function Hero() {
  const [bio, availability] = siteData.bio.split('\n\n');
  return <motion.section initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }} className="grid min-h-[calc(100vh-92px)] items-center gap-12 pb-20 pt-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(240px,0.75fr)] lg:gap-20">
    <div className="order-2 max-w-3xl lg:order-1">
      <motion.p variants={enter} className="mb-7 text-sm font-bold uppercase tracking-[0.24em] text-sky">AI engineer & researcher · UCLA</motion.p>
      <motion.h1 variants={enter} className="font-display text-[clamp(3.8rem,9.5vw,7.6rem)] leading-[0.84] tracking-[-0.065em] text-ink">{siteData.name}</motion.h1>
      <motion.p variants={enter} className="mt-8 max-w-xl font-display text-2xl italic leading-tight text-coral sm:text-3xl">{siteData.tagline}</motion.p>
      <motion.div variants={enter} className="mt-8"><ContactLinks links={siteData.contactLinks} /></motion.div>
      <motion.p variants={enter} className="mt-10 max-w-2xl text-[15px] leading-8 text-ink/72 sm:text-base">{bio}</motion.p>
      <motion.p variants={enter} className="mt-3 max-w-2xl text-[15px] italic leading-8 text-ink/65 sm:text-base">{availability}</motion.p>
    </div>
    <motion.div variants={enter} className="relative order-1 mx-auto w-full max-w-[240px] lg:order-2 lg:justify-self-end">
      <div className="relative aspect-square overflow-hidden rounded-full border-2 border-coral bg-mist p-1 shadow-[0_15px_40px_rgba(23,36,58,0.1)]">
        <div className="relative h-full w-full overflow-hidden rounded-full"><Image src="/headshot.png" alt="Portrait of Sahil Kale" fill priority sizes="(max-width: 1024px) 210px, 240px" className="object-cover" /></div>
      </div>
      {/* <p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">Research · Language · Uncertainty</p> */}
    </motion.div>
    <motion.a variants={enter} href="#highlights" className="focus-ring group order-3 mt-auto flex w-fit items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-coral lg:col-span-2"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 transition-transform group-hover:translate-y-1"><ArrowDown size={15} /></span> Explore My Journey</motion.a>
  </motion.section>;
}
