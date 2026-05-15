"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-36 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-14 sm:mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <SectionReveal>
              <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-5">
                Our Services
              </p>
            </SectionReveal>
            <h2 className="text-[clamp(32px,4.5vw,64px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1]">
              <AnimatedText text="Every mark." />
              <br />
              <AnimatedText text="Perfected." delay={0.1} />
            </h2>
          </div>
          <SectionReveal delay={0.2}>
            <p className="text-[15px] font-sans text-[#737373] max-w-xs leading-relaxed">
              Technical precision applied to every layer of your brand assets —
              from a single file to a complete identity system.
            </p>
          </SectionReveal>
        </div>

        {/* Services list */}
        <div className="border-t border-[#e5e5e5]">
          {services.map((service, i) => (
            <SectionReveal key={service.slug} delay={i * 0.05}>
              <Link
                href={`/services/${service.slug}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="group relative border-b border-[#e5e5e5] overflow-hidden">
                  {/* Hover fill */}
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        className="absolute inset-0 bg-[#0a0a0a] origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0, originX: 1 }}
                        transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                      />
                    )}
                  </AnimatePresence>

                  <div className={`relative z-10 flex flex-col sm:flex-row sm:items-center justify-between py-7 sm:py-8 lg:py-10 gap-3 sm:gap-6 transition-colors duration-200 ${hovered === i ? "text-white" : ""}`}>
                    <div className="flex items-start sm:items-center gap-5 lg:gap-10 flex-1">
                      <span className={`text-[11px] font-sans font-medium tracking-[0.1em] pt-0.5 sm:pt-0 w-7 shrink-0 transition-colors duration-200 ${hovered === i ? "text-white/40" : "text-[#0a0a0a]/25"}`}>
                        {service.number}
                      </span>
                      <div>
                        <h3 className={`text-lg sm:text-xl lg:text-2xl font-display font-bold tracking-[-0.02em] transition-colors duration-200 ${hovered === i ? "text-white" : "text-[#0a0a0a]"}`}>
                          {service.title}
                        </h3>
                        <p className={`text-[13px] font-sans mt-1 transition-colors duration-200 ${hovered === i ? "text-white/55" : "text-[#737373]"}`}>
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 lg:gap-8 ml-12 sm:ml-0 shrink-0">
                      <span className={`text-[13px] font-sans font-semibold transition-colors duration-200 ${hovered === i ? "text-white/70" : "text-[#0a0a0a]/40"}`}>
                        From {service.startingPrice}
                      </span>
                      <motion.span
                        className={`text-xl transition-colors duration-200 ${hovered === i ? "text-white" : "text-[#0a0a0a]/25"}`}
                        animate={{ x: hovered === i ? 6 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>

        {/* CTA */}
        <SectionReveal delay={0.3}>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] border border-[#0a0a0a] px-7 py-4 hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
            <p className="text-sm font-sans text-[#737373]">
              AI logo vectorisation from{" "}
              <span className="text-[#0a0a0a] font-semibold">$50</span>
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
