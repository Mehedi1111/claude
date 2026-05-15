"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

const categories = [
  {
    number: "01",
    label: "AI → Vector",
    title: "AI Logo\nVectorization",
    description:
      "Your Midjourney, DALL-E, or Ideogram logo — manually rebuilt as production-ready vector files. No auto-trace. No shortcuts. SVG, AI, EPS, PDF in 24–48 hours.",
    price: "From $50",
    turnaround: "24–48 hrs",
    services: [
      "AI Logo Vectorization",
      "Logo Cleanup",
      "Typography Reconstruction",
      "SVG Conversion",
      "Brand System Rebuild",
    ],
    href: "/services/ai-logo-vectorization",
    allHref: "/services",
    dark: true,
    accent: "#ffffff",
  },
  {
    number: "02",
    label: "Branding",
    title: "Brand\nIdentity Design",
    description:
      "Logo design from scratch, complete visual identity systems, brand guidelines, and stationery — crafted with the precision and permanence your brand deserves.",
    price: "From $150",
    turnaround: "5–14 days",
    services: [
      "Logo Design",
      "Brand Identity",
      "Brand Guidelines",
      "Business Stationery",
      "Visual Identity System",
    ],
    href: "/services/brand-identity",
    allHref: "/services",
    dark: false,
    accent: "#0a0a0a",
  },
  {
    number: "03",
    label: "Web Design & Dev",
    title: "Web Design &\nDevelopment",
    description:
      "Custom-designed, performance-optimised websites built on Next.js — aligned to your brand identity, ranked for search, and built to convert from launch day.",
    price: "From $500",
    turnaround: "2–4 weeks",
    services: [
      "Landing Pages",
      "Marketing Sites",
      "Next.js / React Dev",
      "CMS Integration",
      "SEO Setup",
    ],
    href: "/services/web-design-development",
    allHref: "/services",
    dark: false,
    accent: "#0a0a0a",
  },
  {
    number: "04",
    label: "Social Media",
    title: "Social Media\nManagement",
    description:
      "On-brand visuals, sharp copy, and consistent posting — fully designed, written, and scheduled for you every month. Instagram, LinkedIn, X and more.",
    price: "From $300/mo",
    turnaround: "Ongoing",
    services: [
      "Content Calendar",
      "Graphic Design",
      "Copywriting",
      "Scheduling & Publishing",
      "Monthly Reporting",
    ],
    href: "/services/social-media-management",
    allHref: "/services",
    dark: true,
    accent: "#ffffff",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-36 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-14 sm:mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <SectionReveal>
              <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-5">
                What We Do
              </p>
            </SectionReveal>
            <h2 className="text-[clamp(32px,4.5vw,64px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1]">
              <AnimatedText text="Four disciplines." />
              <br />
              <AnimatedText text="One studio." delay={0.1} />
            </h2>
          </div>
          <SectionReveal delay={0.2}>
            <p className="text-[15px] font-sans text-[#737373] max-w-xs leading-relaxed">
              From a single vector file to a complete digital presence — every service built to the same uncompromising standard.
            </p>
          </SectionReveal>
        </div>

        {/* 2×2 category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e5e5e5]">
          {categories.map((cat, i) => (
            <SectionReveal key={cat.number} delay={i * 0.08}>
              <Link
                href={cat.href}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="block group"
              >
                <motion.div
                  className={`relative h-full p-8 sm:p-10 lg:p-12 flex flex-col gap-8 transition-colors duration-500 ${
                    cat.dark ? "bg-[#0a0a0a]" : "bg-white"
                  }`}
                  animate={{
                    backgroundColor: hovered === i
                      ? (cat.dark ? "#1a1a1a" : "#f5f5f5")
                      : (cat.dark ? "#0a0a0a" : "#ffffff"),
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4">
                    <span className={`text-[11px] font-sans font-semibold uppercase tracking-[0.2em] ${cat.dark ? "text-white/25" : "text-[#0a0a0a]/30"}`}>
                      {cat.number} — {cat.label}
                    </span>
                    <motion.span
                      className={`text-2xl mt-0.5 transition-colors duration-300 ${cat.dark ? "text-white/20 group-hover:text-white" : "text-[#0a0a0a]/20 group-hover:text-[#0a0a0a]"}`}
                      animate={{ x: hovered === i ? 4 : 0, y: hovered === i ? -4 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ↗
                    </motion.span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-[clamp(28px,3.5vw,48px)] font-display font-bold tracking-[-0.03em] leading-[1.0] whitespace-pre-line ${cat.dark ? "text-white" : "text-[#0a0a0a]"}`}>
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-[14px] sm:text-[15px] font-sans leading-relaxed flex-1 ${cat.dark ? "text-white/45" : "text-[#737373]"}`}>
                    {cat.description}
                  </p>

                  {/* Services list */}
                  <div className="flex flex-wrap gap-2">
                    {cat.services.map((s) => (
                      <span
                        key={s}
                        className={`text-[11px] font-sans px-2.5 py-1 border ${
                          cat.dark
                            ? "text-white/40 border-white/10"
                            : "text-[#737373] border-[#e5e5e5]"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Bottom: price + turnaround */}
                  <div className={`flex items-center justify-between pt-6 border-t ${cat.dark ? "border-white/10" : "border-[#e5e5e5]"}`}>
                    <div>
                      <p className={`text-[10px] font-sans uppercase tracking-[0.15em] mb-1 ${cat.dark ? "text-white/25" : "text-[#0a0a0a]/30"}`}>
                        Starting from
                      </p>
                      <p className={`text-xl font-display font-bold tracking-[-0.03em] ${cat.dark ? "text-white" : "text-[#0a0a0a]"}`}>
                        {cat.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`text-[10px] font-sans uppercase tracking-[0.15em] mb-1 ${cat.dark ? "text-white/25" : "text-[#0a0a0a]/30"}`}>
                        Turnaround
                      </p>
                      <p className={`text-sm font-sans font-semibold ${cat.dark ? "text-white/60" : "text-[#404040]"}`}>
                        {cat.turnaround}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </SectionReveal>
          ))}
        </div>

        {/* CTA row */}
        <SectionReveal delay={0.35}>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] border border-[#0a0a0a] px-7 py-4 hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-sans text-[#737373] hover:text-[#0a0a0a] transition-colors"
            >
              Not sure what you need? Get a free recommendation →
            </Link>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
