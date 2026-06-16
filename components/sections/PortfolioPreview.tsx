"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

const FEATURED_SLUGS = [
  "caravel-solutions",
  "moissanite-website",
  "rivian-logo",
  "transam",
  "nastled-logo",
  "asprey-logo-brand-identity",
];

export default function PortfolioPreview() {
  const slugMap = Object.fromEntries(portfolioItems.map((p) => [p.slug, p]));
  const items = FEATURED_SLUGS.map((s) => slugMap[s]).filter(Boolean);

  const [hero, ...rest] = items;

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
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#0a0a0a]/50 hover:text-[#0a0a0a] transition-colors shrink-0"
            >
              View All Work →
            </Link>
          </SectionReveal>
        </div>

        {/* Hero row: large left + 2 stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 lg:gap-5 mb-4 lg:mb-5">

          {/* Hero item */}
          <SectionReveal direction="none">
            <Link href={`/portfolio/${hero.slug}`} className="group block">
              <motion.div whileHover="hover" initial="rest">
                <div className="relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={hero.image}
                    alt={`${hero.client} — brand identity by Evoke Studio`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <motion.div
                    className="absolute inset-0 bg-[#0a0a0a]"
                    variants={{ rest: { opacity: 0 }, hover: { opacity: 0.5 } }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-end p-8"
                    variants={{ rest: { opacity: 0, y: 10 }, hover: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.35 }}
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white">
                      View Case Study →
                    </span>
                  </motion.div>
                </div>
                <div className="pt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-lg sm:text-xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] group-hover:text-[#0a0a0a]/50 transition-colors">
                      {hero.client}
                    </p>
                    <p className="text-xs font-sans text-[#737373] mt-1">{hero.category}</p>
                  </div>
                  <div className="flex gap-1.5 flex-wrap justify-end max-w-[200px]">
                    {hero.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] font-sans text-[#737373] border border-[#e5e5e5] px-2.5 py-1 whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          </SectionReveal>

          {/* Stacked pair */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {rest.slice(0, 2).map((item, i) => (
              <SectionReveal key={item.id} delay={0.08 + i * 0.07} direction="none">
                <Link href={`/portfolio/${item.slug}`} className="group block">
                  <motion.div whileHover="hover" initial="rest">
                    <div className="relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={item.image}
                        alt={`${item.client} — brand identity by Evoke Studio`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <motion.div
                        className="absolute inset-0 bg-[#0a0a0a]"
                        variants={{ rest: { opacity: 0 }, hover: { opacity: 0.5 } }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.div
                        className="absolute inset-0 flex items-end p-6"
                        variants={{ rest: { opacity: 0, y: 8 }, hover: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.35 }}
                      >
                        <span className="text-sm font-sans font-semibold text-white">
                          View Case Study →
                        </span>
                      </motion.div>
                    </div>
                    <div className="pt-4 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-base font-display font-bold text-[#0a0a0a] tracking-[-0.02em] group-hover:text-[#0a0a0a]/50 transition-colors">
                          {item.client}
                        </p>
                        <p className="text-xs font-sans text-[#737373] mt-0.5">{item.category}</p>
                      </div>
                      <span className="text-[10px] font-sans text-[#0a0a0a]/25 shrink-0">{item.year}</span>
                    </div>
                  </motion.div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* Bottom row: 3 equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
          {rest.slice(2).map((item, i) => (
            <SectionReveal key={item.id} delay={0.1 + i * 0.07} direction="none">
              <Link href={`/portfolio/${item.slug}`} className="group block">
                <motion.div whileHover="hover" initial="rest">
                  <div className="relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={item.image}
                      alt={`${item.client} — brand identity by Evoke Studio`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <motion.div
                      className="absolute inset-0 bg-[#0a0a0a]"
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 0.5 } }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute inset-0 flex items-end p-5"
                      variants={{ rest: { opacity: 0, y: 8 }, hover: { opacity: 1, y: 0 } }}
                      transition={{ duration: 0.35 }}
                    >
                      <span className="text-xs font-sans font-semibold text-white">
                        View Case Study →
                      </span>
                    </motion.div>
                  </div>
                  <div className="pt-4 flex items-end justify-between gap-2">
                    <div>
                      <p className="text-sm font-display font-bold text-[#0a0a0a] tracking-[-0.02em] group-hover:text-[#0a0a0a]/50 transition-colors">
                        {item.client}
                      </p>
                      <p className="text-xs font-sans text-[#737373] mt-0.5">{item.category}</p>
                    </div>
                    <span className="text-[10px] font-sans text-[#0a0a0a]/25 shrink-0">{item.year}</span>
                  </div>
                </motion.div>
              </Link>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
