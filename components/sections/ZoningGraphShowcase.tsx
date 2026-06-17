"use client";

import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export default function ZoningGraphShowcase() {
  return (
    <section className="py-24 lg:py-36 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-10 lg:mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8">
          <div>
            <SectionReveal>
              <p className="text-[11px] font-sans font-semibold text-white/30 uppercase tracking-[0.2em] mb-5">
                Web Design &amp; Development
              </p>
            </SectionReveal>
            <h2 className="text-[clamp(32px,4.5vw,64px)] font-display font-bold text-white tracking-[-0.03em] leading-[1]">
              <AnimatedText text="Built and live." />
              <br />
              <AnimatedText text="See it in action." delay={0.1} />
            </h2>
          </div>
          <SectionReveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.zoninggraph.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white border border-white/20 px-6 py-3.5 hover:border-white/50 transition-colors"
              >
                Open Live Site ↗
              </a>
              <Link
                href="/domains/zoninggraph"
                className="inline-flex items-center gap-2 text-sm font-sans font-medium text-white/50 hover:text-white transition-colors px-6 py-3.5"
              >
                About the Domain →
              </Link>
            </div>
          </SectionReveal>
        </div>

        {/* Description */}
        <SectionReveal delay={0.1}>
          <p className="text-base font-sans text-white/50 max-w-2xl leading-relaxed mb-10">
            ZoningGraph is a live product we designed and built — from domain and brand identity through to full Next.js deployment. This is what we mean when we say web design and development.
          </p>
        </SectionReveal>

        {/* Browser frame */}
        <SectionReveal delay={0.2}>
          <div className="border border-white/10 overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-white/10" />
                <span className="w-3 h-3 rounded-full bg-white/10" />
                <span className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <span className="text-xs font-sans text-white/30 flex-1 text-center">
                www.zoninggraph.com
              </span>
            </div>
            {/* Iframe */}
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.zoninggraph.com/"
                className="w-full h-full border-0"
                title="ZoningGraph live website preview"
                loading="lazy"
              />
            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
