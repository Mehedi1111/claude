"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

const projects = [
  {
    slug: "rivian-logo",
    client: "Rivian",
    category: "EV & Automotive Identity",
    year: "2024",
    image: "/portfolio/rivian-logo/cover.avif",
  },
  {
    slug: "cardark-brand-identity",
    client: "CarDark",
    category: "Automotive Brand Revitalisation",
    year: "2023",
    image: "/portfolio/cardark-brand-identity/cover.avif",
  },
  {
    slug: "nastled-logo",
    client: "Nastled",
    category: "Futuristic Typographic Logo",
    year: "2023",
    image: "/portfolio/nastled-logo/cover.avif",
  },
  {
    slug: "fitgyms-logo",
    client: "FitGyms",
    category: "Fitness Brand Identity",
    year: "2023",
    image: "/portfolio/fitgyms-logo/cover.avif",
  },
];

export default function RecentBrandWork() {
  return (
    <section className="py-24 lg:py-36 bg-[#f5f5f5] border-t border-[#e5e5e5]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">

        <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <SectionReveal>
              <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-5">
                Recent Brand Work
              </p>
            </SectionReveal>
            <h2 className="text-[clamp(28px,4vw,56px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1]">
              <AnimatedText text="Logo & brand identity" />
              <br />
              <AnimatedText text="across every category." delay={0.1} />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, i) => (
            <SectionReveal key={project.slug} delay={i * 0.07} direction="none">
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <motion.div whileHover="hover" initial="rest">
                  <div className="relative overflow-hidden bg-[#e8e8e8]" style={{ aspectRatio: "1/1" }}>
                    <Image
                      src={project.image}
                      alt={`${project.client} — logo and brand identity by Evoke Studio`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized
                    />
                    <motion.div
                      className="absolute inset-0 bg-[#0a0a0a]"
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 0.6 } }}
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
                  <div className="pt-4">
                    <p className="text-sm font-display font-bold text-[#0a0a0a] tracking-[-0.02em] group-hover:text-[#0a0a0a]/50 transition-colors">
                      {project.client}
                    </p>
                    <div className="flex items-center justify-between mt-1 gap-2">
                      <p className="text-xs font-sans text-[#737373]">{project.category}</p>
                      <span className="text-[10px] font-sans text-[#0a0a0a]/25 shrink-0">{project.year}</span>
                    </div>
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
