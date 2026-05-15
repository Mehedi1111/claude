import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioItems } from "@/lib/data";
import CTASection from "@/components/sections/CTASection";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) return {};
  return {
    title: `${item.client} — Case Study`,
    description: item.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) notFound();

  const currentIndex = portfolioItems.findIndex((p) => p.slug === slug);
  const nextItem = portfolioItems[(currentIndex + 1) % portfolioItems.length];

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-0 lg:pt-44 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Back link */}
          <SectionReveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-sans font-medium text-white/30 hover:text-white/70 transition-colors mb-12 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              All Work
            </Link>
          </SectionReveal>

          {/* Meta */}
          <SectionReveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="text-[11px] font-sans font-semibold text-white/25 uppercase tracking-[0.2em]">
                {item.category}
              </span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="text-[11px] font-sans text-white/25 tracking-[0.1em]">
                {item.year}
              </span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="text-[11px] font-sans text-white/25 tracking-[0.1em]">
                {item.service}
              </span>
            </div>
          </SectionReveal>

          <h1 className="text-[clamp(48px,8vw,110px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.9] mb-16">
            <AnimatedText text={item.client} />
          </h1>
        </div>

        {/* Full-bleed cover image */}
        <div className="relative aspect-[21/9] overflow-hidden">
          <Image
            src={item.coverImage}
            alt={item.client}
            fill
            className="object-cover grayscale opacity-60"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/20" />
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

            {/* Left: sidebar info */}
            <div className="lg:pt-2">
              <SectionReveal>
                <div className="space-y-8 sticky top-32">
                  <div>
                    <p className="text-[10px] font-sans font-semibold text-[#0a0a0a]/30 uppercase tracking-[0.2em] mb-2">
                      Client
                    </p>
                    <p className="text-base font-sans font-medium text-[#0a0a0a]">{item.client}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-sans font-semibold text-[#0a0a0a]/30 uppercase tracking-[0.2em] mb-2">
                      Service
                    </p>
                    <p className="text-base font-sans text-[#0a0a0a]">{item.service}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-sans font-semibold text-[#0a0a0a]/30 uppercase tracking-[0.2em] mb-2">
                      Year
                    </p>
                    <p className="text-base font-sans text-[#0a0a0a]">{item.year}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-sans font-semibold text-[#0a0a0a]/30 uppercase tracking-[0.2em] mb-3">
                      Tags
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-sans text-[#737373] border border-[#e5e5e5] px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white bg-[#0a0a0a] px-6 py-3.5 hover:bg-[#1f1f1f] transition-colors"
                    >
                      Similar project ↗
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Right: main content */}
            <div className="space-y-16">
              {/* Challenge */}
              <SectionReveal>
                <div>
                  <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/30 uppercase tracking-[0.2em] mb-6">
                    The Challenge
                  </p>
                  <p className="text-lg lg:text-xl font-sans text-[#404040] leading-relaxed">
                    {item.challenge}
                  </p>
                </div>
              </SectionReveal>

              {/* Divider image */}
              <SectionReveal>
                <div className="relative aspect-[16/9] overflow-hidden bg-[#f0f0f0]">
                  <Image
                    src={item.image}
                    alt={`${item.client} detail`}
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                </div>
              </SectionReveal>

              {/* Solution */}
              <SectionReveal>
                <div>
                  <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/30 uppercase tracking-[0.2em] mb-6">
                    The Approach
                  </p>
                  <p className="text-lg lg:text-xl font-sans text-[#404040] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </SectionReveal>

              {/* Outcomes */}
              <SectionReveal>
                <div className="border-t border-[#e5e5e5] pt-12">
                  <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/30 uppercase tracking-[0.2em] mb-8">
                    Outcomes
                  </p>
                  <div className="space-y-4">
                    {item.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start gap-5">
                        <span className="text-[10px] font-sans text-[#0a0a0a]/25 tracking-[0.1em] pt-1 w-6 shrink-0">
                          0{i + 1}
                        </span>
                        <p className="text-base font-sans font-medium text-[#0a0a0a]">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-[#e5e5e5] bg-white">
        <Link href={`/portfolio/${nextItem.slug}`} className="group block">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/30 uppercase tracking-[0.2em] mb-3">
                  Next Project
                </p>
                <p className="text-2xl lg:text-4xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] group-hover:text-[#0a0a0a]/60 transition-colors">
                  {nextItem.client}
                </p>
                <p className="text-sm font-sans text-[#737373] mt-1">{nextItem.category}</p>
              </div>
              <span className="text-3xl text-[#0a0a0a]/20 group-hover:text-[#0a0a0a] group-hover:translate-x-3 transition-all duration-400">
                →
              </span>
            </div>
          </div>
        </Link>
      </section>

      <CTASection />
    </>
  );
}
