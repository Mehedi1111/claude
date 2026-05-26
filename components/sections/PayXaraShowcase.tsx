"use client";

import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export default function PayXaraShowcase() {
  return (
    <section className="py-24 lg:py-36 bg-white border-t border-[#e5e5e5]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-10 lg:mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8">
          <div>
            <SectionReveal>
              <p className="text-[11px] font-sans font-semibold text-[#737373] uppercase tracking-[0.2em] mb-5">
                Web Design &amp; Development · FinTech
              </p>
            </SectionReveal>
            <h2 className="text-[clamp(32px,4.5vw,64px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1]">
              <AnimatedText text="PayXara." />
              <br />
              <AnimatedText text="Domain. Brand. Website." delay={0.1} />
            </h2>
          </div>
          <SectionReveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.payxara.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] border border-[#0a0a0a] px-6 py-3.5 hover:bg-[#0a0a0a] hover:text-white transition-colors"
              >
                Open Live Site ↗
              </a>
              <Link
                href="/domains/payxara"
                className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#737373] hover:text-[#0a0a0a] transition-colors px-6 py-3.5"
              >
                View Domain Listing →
              </Link>
            </div>
          </SectionReveal>
        </div>

        {/* Description */}
        <SectionReveal delay={0.1}>
          <p className="text-base font-sans text-[#737373] max-w-2xl leading-relaxed mb-10">
            PayXara.com is a premium FinTech domain we designed, branded, and built — from name strategy and identity through to a fully deployed Next.js marketing website. A payment brand ready to scale globally.
          </p>
        </SectionReveal>

        {/* Tag strip */}
        <SectionReveal delay={0.15}>
          <div className="flex flex-wrap gap-2 mb-10">
            {["Domain Strategy", "Brand Identity", "Web Design", "Next.js Development", "FinTech"].map((tag) => (
              <span key={tag} className="text-[11px] font-sans font-semibold text-[#737373] border border-[#e5e5e5] px-3 py-1.5 uppercase tracking-[0.1em]">
                {tag}
              </span>
            ))}
          </div>
        </SectionReveal>

        {/* Browser frame */}
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
                www.payxara.com
              </span>
            </div>
            {/* Iframe */}
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.payxara.com/"
                className="w-full h-full border-0"
                title="PayXara live website preview — FinTech payment brand built by Evoke Studio"
                loading="lazy"
              />
            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
