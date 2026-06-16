import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/lib/data";
import { showcaseItems } from "@/lib/showcase";
import CTASection from "@/components/sections/CTASection";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import LogoShowcase from "@/components/sections/LogoShowcase";

export const metadata: Metadata = {
  title: "Brand Identity, Social Media Design & Web Portfolio | Evoke Studio",
  description:
    "Real brand identity, logo design, social media graphics, and web design projects by Evoke Studio. 13 case studies across USA, UK, Canada & Australia — from AI logo vectorization to full brand systems and Instagram content design.",
  keywords: [
    "brand identity portfolio",
    "logo design portfolio",
    "social media design portfolio",
    "web design portfolio",
    "brand identity designer",
    "Instagram post design",
    "Facebook post design",
    "social media graphics",
  ],
  openGraph: {
    title: "Brand Identity, Social Media Design & Web Portfolio | Evoke Studio",
    description:
      "13 brand identity, social media design, and web design case studies. From AI logo vectorization to on-brand Instagram content and live Next.js websites.",
    url: "https://madebyevoke.com/portfolio",
    siteName: "Evoke Studio",
    type: "website",
    images: [{ url: "https://madebyevoke.com/portfolio/social-media-2025/social-media-2025-cover.avif", width: 1920, alt: "Evoke Studio Portfolio — Brand Identity, Social Media Design & Web Design" }],
  },
  alternates: { canonical: "https://madebyevoke.com/portfolio" },
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
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized={item.image.endsWith(".avif")}
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

      {/* Before/After Transformations */}
      {showcaseItems.length > 0 && (
        <section className="py-20 lg:py-28 bg-[#fafafa] border-t border-[#e5e5e5]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <SectionReveal>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
                <div>
                  <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-3">
                    Transformations
                  </p>
                  <h2 className="text-[clamp(32px,4vw,56px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em]">
                    AI to Vector
                  </h2>
                </div>
                <p className="text-sm font-sans text-[#737373] max-w-xs leading-relaxed pb-1">
                  AI-generated logos rebuilt as production-ready vector files — ready for print, embroidery, and screen printing.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <LogoShowcase items={showcaseItems} columns={2} />
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Social Media Design */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
              <div>
                <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-3">
                  Social Media Design
                </p>
                <h2 className="text-[clamp(32px,4vw,56px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em]">
                  On-brand. Every post.
                </h2>
              </div>
              <p className="text-sm font-sans text-[#737373] max-w-xs leading-relaxed pb-1">
                Instagram and Facebook graphics built from established brand identity systems — not templates. Every post is a continuation of the brand, not a departure from it.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-10">
              {[
                { src: "/portfolio/social-media-2025/social-media-2025-cover.avif", alt: "Social media design portfolio 2025 — Instagram post designs by Evoke Studio" },
                { src: "/portfolio/social-media-2025/social-media-2025-2.avif", alt: "Instagram post design examples — on-brand social media graphics by Evoke Studio" },
                { src: "/portfolio/social-media-2025/social-media-2025-3.avif", alt: "Facebook post design portfolio 2025 — brand content graphics by Evoke Studio" },
              ].map((img, i) => (
                <div key={i} className="relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/portfolio/social-media-portfolio-2025"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white bg-[#0a0a0a] px-6 py-3.5 hover:bg-[#1f1f1f] transition-colors"
              >
                View Case Study →
              </Link>
              <a
                href="https://www.behance.net/gallery/225081509/Social-Media-Portfolio-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0057ff] border border-[#0057ff]/30 px-6 py-3.5 hover:bg-[#0057ff] hover:text-white transition-colors"
              >
                View on Behance ↗
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Live Websites — Web Design & Development */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[11px] font-sans font-semibold text-white/30 uppercase tracking-[0.2em] mb-4">
              Web Design &amp; Development
            </p>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white tracking-[-0.03em] mb-4">
              Live websites we built.
            </h2>
            <p className="text-base font-sans text-white/50 max-w-xl leading-relaxed mb-16">
              Beyond logos — we design and build complete websites. Each starts with a domain and brand identity, ending in a fully deployed, performance-optimised marketing site. Here are four live examples.
            </p>
          </SectionReveal>

          {/* ZoningGraph */}
          <SectionReveal delay={0.1}>
            <div className="mb-14">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-sans font-semibold text-white/30 uppercase tracking-[0.15em] mb-1">
                    PropTech · Real Estate Intelligence
                  </p>
                  <h3 className="text-2xl font-display font-bold text-white tracking-[-0.03em]">ZoningGraph.com</h3>
                  <p className="text-sm font-sans text-white/50 mt-1">The data layer for zoning intelligence — domain, brand identity, and Next.js website.</p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <a
                    href="https://www.zoninggraph.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white border border-white/20 px-5 py-3 hover:border-white/50 transition-colors"
                  >
                    Open Live Site ↗
                  </a>
                  <Link href="/portfolio/zoninggraph-website" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-white/50 hover:text-white transition-colors px-5 py-3">
                    Case Study →
                  </Link>
                </div>
              </div>
              <div className="border border-white/10 overflow-hidden">
                <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <span className="text-xs font-sans text-white/30 flex-1 text-center">www.zoninggraph.com</span>
                </div>
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    src="https://www.zoninggraph.com/"
                    className="w-full h-full border-0"
                    title="ZoningGraph website — PropTech web design and development by Evoke Studio"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* PayXara */}
          <SectionReveal delay={0.15}>
            <div className="mb-14">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-sans font-semibold text-white/30 uppercase tracking-[0.15em] mb-1">
                    FinTech · Payments
                  </p>
                  <h3 className="text-2xl font-display font-bold text-white tracking-[-0.03em]">PayXara.com</h3>
                  <p className="text-sm font-sans text-white/50 mt-1">A payment brand ready to scale globally — domain, brand identity, and Next.js website.</p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <a
                    href="https://www.payxara.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white border border-white/20 px-5 py-3 hover:border-white/50 transition-colors"
                  >
                    Open Live Site ↗
                  </a>
                  <Link href="/domains/payxara" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-white/50 hover:text-white transition-colors px-5 py-3">
                    Domain Listing →
                  </Link>
                </div>
              </div>
              <div className="border border-white/10 overflow-hidden">
                <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <span className="text-xs font-sans text-white/30 flex-1 text-center">www.payxara.com</span>
                </div>
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    src="https://www.payxara.com/"
                    className="w-full h-full border-0"
                    title="PayXara website — FinTech web design and development by Evoke Studio"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* ZoningOps */}
          <SectionReveal delay={0.2}>
            <div className="mb-14">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-sans font-semibold text-white/30 uppercase tracking-[0.15em] mb-1">
                    PropTech · Real Estate Operations
                  </p>
                  <h3 className="text-2xl font-display font-bold text-white tracking-[-0.03em]">ZoningOps.com</h3>
                  <p className="text-sm font-sans text-white/50 mt-1">Operations infrastructure for zoning professionals — domain, brand identity, and Next.js website.</p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <a
                    href="https://www.zoningops.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white border border-white/20 px-5 py-3 hover:border-white/50 transition-colors"
                  >
                    Open Live Site ↗
                  </a>
                  <Link href="/domains/zoningops" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-white/50 hover:text-white transition-colors px-5 py-3">
                    Domain Listing →
                  </Link>
                </div>
              </div>
              <div className="border border-white/10 overflow-hidden">
                <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <span className="text-xs font-sans text-white/30 flex-1 text-center">www.zoningops.com</span>
                </div>
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    src="https://www.zoningops.com/"
                    className="w-full h-full border-0"
                    title="ZoningOps website — PropTech web design and development by Evoke Studio"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Orange Kannel Club */}
          <SectionReveal delay={0.25}>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-sans font-semibold text-white/30 uppercase tracking-[0.15em] mb-1">
                    Dog Club · Community · Australia
                  </p>
                  <h3 className="text-2xl font-display font-bold text-white tracking-[-0.03em]">Orange Kannel Club</h3>
                  <p className="text-sm font-sans text-white/50 mt-1">Professional dog club website for a DogsNSW-affiliated kennel club — 12,000+ members, 180+ dog breeds, 500+ annual events.</p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <a
                    href="https://orange-kannel-club.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white border border-white/20 px-5 py-3 hover:border-white/50 transition-colors"
                  >
                    Open Live Site ↗
                  </a>
                  <Link href="/portfolio/kannel-club-website" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-white/50 hover:text-white transition-colors px-5 py-3">
                    Case Study →
                  </Link>
                </div>
              </div>
              <div className="border border-white/10 overflow-hidden">
                <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <span className="text-xs font-sans text-white/30 flex-1 text-center">orange-kannel-club.vercel.app</span>
                </div>
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    src="https://orange-kannel-club.vercel.app/"
                    className="w-full h-full border-0"
                    title="Orange Kannel Club — dog club website design and development by Evoke Studio"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
