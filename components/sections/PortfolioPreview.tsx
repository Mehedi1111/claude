"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export default function PortfolioPreview() {
  const [featured, second, third] = portfolioItems;

  return (
    <section className="py-24 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8">
          <div>
            <SectionReveal>
              <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-5">
                Selected Work
              </p>
            </SectionReveal>
            <h2 className="text-[clamp(32px,4.5vw,64px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1]">
              <AnimatedText text="Brand systems," />
              <br />
              <AnimatedText text="built to last." delay={0.1} />
            </h2>
          </div>
          <SectionReveal delay={0.2}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#0a0a0a]/50 hover:text-[#0a0a0a] transition-colors link-underline shrink-0"
            >
              View All Work
            </Link>
          </SectionReveal>
        </div>

        {/* Editorial grid: featured (large) + 2 smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 lg:gap-5">

          {/* Featured — large left */}
          <SectionReveal direction="none">
            <Link href={`/portfolio/${featured.slug}`} className="group block" data-cursor="VIEW">
              <motion.div whileHover="hover" initial="rest">
                <div className="relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={featured.image}
                    alt={featured.client}
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <motion.div
                    className="absolute inset-0 bg-[#0a0a0a]"
                    variants={{ rest: { opacity: 0 }, hover: { opacity: 0.55 } }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-end p-8"
                    variants={{ rest: { opacity: 0, y: 12 }, hover: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.4 }}
                  >
                    <div>
                      <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white">
                        View Case Study
                        <motion.span
                          variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                          transition={{ duration: 0.3 }}
                        >
                          →
                        </motion.span>
                      </span>
                    </div>
                  </motion.div>
                </div>
                <div className="pt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-lg sm:text-xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] group-hover:text-[#0a0a0a]/60 transition-colors">
                      {featured.client}
                    </p>
                    <p className="text-xs font-sans text-[#737373] mt-1">{featured.category}</p>
                  </div>
                  <div className="flex gap-1.5 flex-wrap justify-end max-w-[180px]">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-sans text-[#737373] border border-[#e5e5e5] px-2.5 py-1 whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          </SectionReveal>

          {/* Right column: 2 stacked */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {[second, third].map((item, i) => (
              <SectionReveal key={item.id} delay={0.1 + i * 0.08} direction="none">
                <Link href={`/portfolio/${item.slug}`} className="group block" data-cursor="VIEW">
                  <motion.div whileHover="hover" initial="rest">
                    <div className="relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "4/3" }}>
                      <Image
                        src={item.image}
                        alt={item.client}
                        fill
                        className="object-cover grayscale"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <motion.div
                        className="absolute inset-0 bg-[#0a0a0a]"
                        variants={{ rest: { opacity: 0 }, hover: { opacity: 0.55 } }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div
                        className="absolute inset-0 flex items-end p-6"
                        variants={{ rest: { opacity: 0, y: 10 }, hover: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className="text-sm font-sans font-semibold text-white">
                          View Case Study →
                        </span>
                      </motion.div>
                    </div>
                    <div className="pt-4 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-base font-display font-bold text-[#0a0a0a] tracking-[-0.02em] group-hover:text-[#0a0a0a]/60 transition-colors">
                          {item.client}
                        </p>
                        <p className="text-xs font-sans text-[#737373] mt-0.5">{item.category}</p>
                      </div>
                      <span className="text-[10px] font-sans text-[#0a0a0a]/25">{item.year}</span>
                    </div>
                  </motion.div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
