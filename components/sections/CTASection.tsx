"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-36 bg-[#0a0a0a] overflow-hidden relative">
      {/* Ghost watermark */}
      <div
        className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <p className="text-[20vw] font-display font-bold text-white/[0.025] tracking-[-0.05em] leading-none whitespace-nowrap pr-[-4vw] translate-x-[8%]">
          EVOKE
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-24 items-end">

          {/* Left: headline + description */}
          <div>
            <SectionReveal>
              <div className="flex items-center gap-3 mb-8 sm:mb-10">
                <span className="w-5 h-px bg-white/20" />
                <p className="text-[10px] sm:text-[11px] font-sans font-semibold text-white/25 uppercase tracking-[0.25em]">
                  Start Today
                </p>
              </div>
            </SectionReveal>

            <h2 className="text-[clamp(36px,5.5vw,82px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.95] mb-8 sm:mb-10">
              <AnimatedText text="Your AI logo" />
              <br />
              <AnimatedText text="deserves" delay={0.1} />
              <br />
              <AnimatedText text="better." delay={0.2} />
            </h2>

            <SectionReveal delay={0.35}>
              <p className="text-[15px] sm:text-base font-sans text-white/40 max-w-sm leading-relaxed">
                Send us your file. We&apos;ll send back a production-ready vector
                brand asset — typically within 24 to 48 hours.
              </p>
            </SectionReveal>
          </div>

          {/* Right: action block */}
          <SectionReveal delay={0.2}>
            <div className="lg:pb-4">
              <div className="space-y-3">
                <Link
                  href="/contact"
                  data-cursor="START"
                  className="group flex items-center justify-between w-full text-sm font-sans font-semibold text-[#0a0a0a] bg-white px-7 py-5 hover:bg-white/92 transition-all duration-200"
                >
                  Start a Project
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="text-base"
                  >
                    →
                  </motion.span>
                </Link>
                <Link
                  href="/services"
                  className="group flex items-center justify-between w-full text-sm font-sans font-medium text-white/50 border border-white/10 px-7 py-5 hover:border-white/25 hover:text-white transition-all duration-200"
                >
                  Explore Services
                  <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-white/[0.08]">
                <p className="text-[11px] font-sans text-white/25 mb-3 uppercase tracking-[0.15em]">
                  Or reach us directly
                </p>
                <a
                  href="mailto:work@madebyevoke.com"
                  className="text-base font-sans text-white/40 hover:text-white transition-colors link-underline"
                >
                  work@madebyevoke.com
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Bottom metrics strip */}
        <SectionReveal delay={0.5}>
          <div className="mt-20 sm:mt-24 pt-8 border-t border-white/[0.08]">
            <div className="flex flex-wrap gap-6 sm:gap-10 lg:gap-16">
              {[
                ["500+", "logos rebuilt"],
                ["24–48hr", "turnaround"],
                ["100%", "manual precision"],
                ["5.0/5", "Clutch rating"],
              ].map(([num, label]) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-lg sm:text-xl font-display font-bold text-white tracking-[-0.03em]">
                    {num}
                  </span>
                  <span className="text-[10px] font-sans text-white/30 uppercase tracking-[0.12em]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
