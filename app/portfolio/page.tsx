import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/lib/data";
import CTASection from "@/components/sections/CTASection";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export const metadata: Metadata = {
  title: "Work — Brand Systems & Logo Vectorization Portfolio",
  description:
    "Selected projects from Evoke. AI logo vectorization, brand system rebuilds, and precision vector reconstruction for founders and companies.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="text-xs font-sans font-semibold text-white/30 uppercase tracking-[0.2em] mb-8">
              Selected Work
            </p>
          </SectionReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="text-[clamp(48px,7vw,100px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.92]">
              <AnimatedText text="Marks" />
              <br />
              <AnimatedText text="rebuilt." delay={0.1} />
            </h1>
            <SectionReveal delay={0.3}>
              <p className="text-base font-sans text-white/50 max-w-xs leading-relaxed">
                Every project begins with an AI-generated file and ends with a
                precision-crafted vector brand asset.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <SectionReveal key={item.id} delay={i * 0.07}>
                <Link href={`/portfolio/${item.slug}`} className="group block">
                  <article>
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f0f0f0] mb-4">
                      <Image
                        src={item.image}
                        alt={item.client}
                        fill
                        className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/50 transition-all duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                        <span className="text-sm font-sans font-semibold text-white">
                          View Case Study →
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display font-semibold text-[#0a0a0a] tracking-[-0.02em] group-hover:text-[#0a0a0a]/60 transition-colors">
                          {item.client}
                        </p>
                        <p className="text-xs font-sans text-[#737373] mt-1">
                          {item.category}
                        </p>
                      </div>
                      <div className="flex flex-wrap justify-end gap-1 max-w-[140px]">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-sans font-medium text-[#737373] border border-[#e5e5e5] px-2 py-0.5 whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
