"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export default function PortfolioPreview() {
  const preview = portfolioItems.slice(0, 3);

  return (
    <section className="py-24 lg:py-36 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <SectionReveal>
              <p className="text-xs font-sans font-semibold text-[#0a0a0a]/40 uppercase tracking-[0.2em] mb-6">
                Selected Work
              </p>
            </SectionReveal>
            <h2 className="text-[clamp(36px,5vw,72px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1]">
              <AnimatedText text="Brand systems," />
              <br />
              <AnimatedText text="built from scratch." delay={0.1} />
            </h2>
          </div>
          <SectionReveal delay={0.2}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#0a0a0a]/60 hover:text-[#0a0a0a] transition-colors link-underline"
            >
              View All Work →
            </Link>
          </SectionReveal>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {preview.map((item, i) => (
            <SectionReveal key={item.id} delay={i * 0.1}>
              <Link href="/portfolio" className="group block">
                <motion.article
                  className="relative overflow-hidden"
                  whileHover="hover"
                  initial="rest"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f0f0f0]">
                    <Image
                      src={item.image}
                      alt={item.client}
                      fill
                      className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-[#0a0a0a]/70 flex items-end p-6"
                      variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="text-sm font-sans font-medium text-white/80">
                        View Case Study →
                      </span>
                    </motion.div>
                  </div>

                  {/* Meta */}
                  <div className="pt-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-base font-display font-semibold text-[#0a0a0a] tracking-[-0.02em]">
                          {item.client}
                        </p>
                        <p className="text-xs font-sans text-[#737373] mt-0.5">
                          {item.category}
                        </p>
                      </div>
                      <span className="text-xs font-sans text-[#0a0a0a]/30">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
