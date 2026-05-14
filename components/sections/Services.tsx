"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Services() {
  return (
    <section className="py-24 lg:py-36 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <SectionReveal>
              <p className="text-xs font-sans font-semibold text-[#0a0a0a]/40 uppercase tracking-[0.2em] mb-6">
                Our Services
              </p>
            </SectionReveal>
            <h2 className="text-[clamp(36px,5vw,72px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1]">
              <AnimatedText text="Every mark." />
              <br />
              <AnimatedText text="Perfected." delay={0.1} />
            </h2>
          </div>
          <SectionReveal delay={0.2}>
            <p className="text-base font-sans text-[#737373] max-w-xs leading-relaxed">
              Technical precision applied to every layer of your brand assets.
              From a single file to a complete identity system.
            </p>
          </SectionReveal>
        </div>

        {/* Services list */}
        <div className="border-t border-[#e5e5e5]">
          {services.map((service, i) => (
            <SectionReveal key={service.slug} delay={i * 0.05}>
              <Link href={`/services/${service.slug}`}>
                <motion.div
                  className="group flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#e5e5e5] py-8 lg:py-10 gap-4"
                  whileHover="hover"
                  initial="rest"
                >
                  <div className="flex items-start sm:items-center gap-6 lg:gap-10">
                    <span className="text-xs font-sans font-medium text-[#0a0a0a]/30 tracking-[0.1em] mt-1 sm:mt-0 w-8 shrink-0">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-display font-semibold text-[#0a0a0a] tracking-[-0.02em] group-hover:text-[#0a0a0a] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm font-sans text-[#737373] mt-1 max-w-md">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 sm:gap-10 ml-14 sm:ml-0">
                    <div className="hidden lg:flex gap-2 flex-wrap max-w-xs">
                      {service.features.slice(0, 2).map((f, j) => (
                        <span
                          key={j}
                          className="text-[11px] font-sans text-[#737373] border border-[#e5e5e5] px-2.5 py-1"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    <motion.span
                      className="text-2xl text-[#0a0a0a] font-light"
                      variants={{
                        rest: { x: 0, opacity: 0.4 },
                        hover: { x: 6, opacity: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.div>
              </Link>
            </SectionReveal>
          ))}
        </div>

        {/* CTA */}
        <SectionReveal delay={0.3}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] border border-[#0a0a0a] px-8 py-4 hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
            >
              View All Services ↗
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
