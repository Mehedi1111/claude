"use client";

import Link from "next/link";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export default function MoissaniteShowcase() {
  return (
    <section className="py-24 lg:py-36 bg-white border-t border-[#e5e5e5]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-10 lg:mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8">
          <div>
            <SectionReveal>
              <p className="text-[11px] font-sans font-semibold text-[#737373] uppercase tracking-[0.2em] mb-5">
                Web Design &amp; Development · Jewellery & E-commerce
              </p>
            </SectionReveal>
            <h2 className="text-[clamp(32px,4.5vw,64px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1]">
              <AnimatedText text="Moissanite by Aurelia." />
              <br />
              <AnimatedText text="Luxury Jewellery, Built to Convert." delay={0.1} />
            </h2>
          </div>
          <SectionReveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://moissanitebyaurelia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] border border-[#0a0a0a] px-6 py-3.5 hover:bg-[#0a0a0a] hover:text-white transition-colors"
              >
                Open Live Site ↗
              </a>
              <Link
                href="/portfolio/moissanite-website"
                className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#737373] hover:text-[#0a0a0a] transition-colors px-6 py-3.5"
              >
                View Case Study →
              </Link>
            </div>
          </SectionReveal>
        </div>

        {/* Description */}
        <SectionReveal delay={0.1}>
          <p className="text-base font-sans text-[#737373] max-w-2xl leading-relaxed mb-10">
            Moissanite by Aurelia is a luxury moissanite jewellery brand we designed and developed — a full web design and e-commerce build serving customers across the USA, UK, Canada, and Australia. Migrated from WordPress to a fast, modern Next.js platform with a premium aesthetic built to convert high-intent jewellery buyers.
          </p>
        </SectionReveal>

        {/* Tag strip */}
        <SectionReveal delay={0.15}>
          <div className="flex flex-wrap gap-2 mb-10">
            {["Web Design", "Next.js Development", "E-commerce", "Jewellery", "Luxury Brand", "WordPress Migration"].map((tag) => (
              <span key={tag} className="text-[11px] font-sans font-semibold text-[#737373] border border-[#e5e5e5] px-3 py-1.5 uppercase tracking-[0.1em]">
                {tag}
              </span>
            ))}
          </div>
        </SectionReveal>

        {/* Browser frame with screenshot */}
        <SectionReveal delay={0.2}>
          <div className="border border-[#e5e5e5] overflow-hidden shadow-sm">
            {/* Browser chrome */}
            <div className="bg-[#fafafa] border-b border-[#e5e5e5] px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#e5e5e5]" />
                <span className="w-3 h-3 rounded-full bg-[#e5e5e5]" />
                <span className="w-3 h-3 rounded-full bg-[#e5e5e5]" />
              </div>
              <span className="text-xs font-sans text-[#b4b4b4] flex-1 text-center">
                moissanitebyaurelia.com
              </span>
              <a
                href="https://moissanitebyaurelia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-sans font-semibold text-[#0a0a0a] bg-white border border-[#e5e5e5] px-3 py-1 hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-colors shrink-0"
              >
                Open ↗
              </a>
            </div>
            {/* Screenshot */}
            <a href="https://moissanitebyaurelia.com/" target="_blank" rel="noopener noreferrer" className="block">
              <img
                src="/portfolio/moissanite-website/screenshot.avif"
                alt="Moissanite by Aurelia — luxury jewellery website designed and built by Evoke Studio"
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
