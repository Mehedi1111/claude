"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-36 bg-[#0a0a0a] overflow-hidden relative">
      {/* Background mark */}
      <div className="absolute right-[-4vw] top-1/2 -translate-y-1/2 select-none pointer-events-none">
        <p className="text-[22vw] font-display font-bold text-white/[0.03] tracking-[-0.04em] leading-none whitespace-nowrap">
          EVOKE
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <SectionReveal>
            <p className="text-xs font-sans font-semibold text-white/30 uppercase tracking-[0.2em] mb-8">
              Start Today
            </p>
          </SectionReveal>

          <h2 className="text-[clamp(40px,6vw,88px)] font-display font-bold text-white tracking-[-0.03em] leading-[1] mb-8">
            <AnimatedText text="Your AI logo" />
            <br />
            <AnimatedText text="deserves better." delay={0.1} />
          </h2>

          <SectionReveal delay={0.3}>
            <p className="text-base lg:text-lg font-sans text-white/50 max-w-sm leading-relaxed mb-12">
              Send us your file. We&apos;ll send back a production-ready vector
              brand asset — typically within 24 to 48 hours.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] bg-white px-8 py-4 hover:bg-white/90 transition-colors duration-200"
              >
                Start a Project
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-sans font-medium text-white/50 hover:text-white px-8 py-4 border border-white/10 hover:border-white/30 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </SectionReveal>
        </div>

        {/* Bottom stat bar */}
        <SectionReveal delay={0.5}>
          <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap gap-8 lg:gap-16">
            {["500+ logos rebuilt", "24–48hr turnaround", "All AI tools supported", "White-label available"].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span className="text-xs font-sans font-medium text-white/40 uppercase tracking-[0.15em]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
