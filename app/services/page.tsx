import type { Metadata } from "next";
import Link from "next/link";
import { services, traditionalServices, digitalServices } from "@/lib/data";
import CTASection from "@/components/sections/CTASection";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export const metadata: Metadata = {
  title: "Logo Design, AI Vectorization & Web Design Services | Evoke Studio",
  description:
    "AI logo vectorization from $50 · Logo design from $150 · Brand identity from $500 · Web design and development for startups and brands. Manual reconstruction, Pantone-certified, 24–48hr delivery. SVG, AI, EPS, PDF for print, web, and embroidery.",
  keywords:
    "AI logo vectorization, logo vectorization service, logo design, brand identity design, web design and development, website design for startups, FinTech web design, PropTech web design, Evoke Studio services",
  openGraph: {
    title: "Logo Design, AI Vectorization & Web Design Services | Evoke Studio",
    description:
      "AI logo vectorization from $50 · Logo design from $150 · Brand identity from $500 · Web design and development. Manual precision, 24–48hr turnaround.",
    url: "https://madebyevoke.com/services",
    siteName: "Evoke Studio",
    type: "website",
    images: [{ url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c47385218256145.679e5b461e6a6.jpg", width: 1400, height: 933, alt: "Evoke Studio — Brand Identity & AI Logo Vectorization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Design, AI Vectorization & Web Design Services | Evoke Studio",
    description: "AI logo vectorization from $50 · Logo design from $150 · Brand identity from $500 · Web design and development. Manual precision, 24–48hr turnaround.",
    images: ["https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c47385218256145.679e5b461e6a6.jpg"],
    creator: "@MadeByEvoke",
  },
  alternates: { canonical: "https://madebyevoke.com/services" },
};

function ServiceRow({
  number,
  title,
  tagline,
  features,
  slug,
  startingPrice,
  turnaround,
  index,
}: {
  number: string;
  title: string;
  tagline: string;
  features: string[];
  slug: string;
  startingPrice: string;
  turnaround: string;
  index: number;
}) {
  return (
    <SectionReveal delay={index * 0.06}>
      <Link href={`/services/${slug}`}>
        <div className="group border-b border-[#e5e5e5] py-8 lg:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#fafafa] transition-colors duration-200 px-1">
          <div className="flex items-start lg:items-center gap-6 lg:gap-10 flex-1">
            <span className="text-xs font-sans font-medium text-[#0a0a0a]/25 tracking-[0.1em] pt-0.5 lg:pt-0 w-7 shrink-0">
              {number}
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="text-lg lg:text-xl font-display font-semibold text-[#0a0a0a] tracking-[-0.02em]">
                  {title}
                </h3>
                <span className="text-[11px] font-sans text-[#0a0a0a] bg-[#0a0a0a]/[0.06] px-2.5 py-1 shrink-0">
                  From {startingPrice}
                </span>
              </div>
              <p className="text-sm font-sans text-[#737373] italic">{tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 lg:gap-8 ml-13 lg:ml-0">
            <div className="hidden xl:flex gap-2 flex-wrap max-w-[280px]">
              {features.slice(0, 2).map((f, j) => (
                <span key={j} className="text-[11px] font-sans text-[#737373] border border-[#e5e5e5] px-2.5 py-1 whitespace-nowrap">
                  {f.length > 28 ? f.slice(0, 28) + "…" : f}
                </span>
              ))}
            </div>
            <div className="hidden lg:block text-xs font-sans text-[#737373] whitespace-nowrap">
              {turnaround}
            </div>
            <span className="text-xl text-[#0a0a0a]/20 group-hover:text-[#0a0a0a] group-hover:translate-x-1.5 transition-all duration-300">
              →
            </span>
          </div>
        </div>
      </Link>
    </SectionReveal>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[11px] font-sans font-semibold text-white/30 uppercase tracking-[0.25em] mb-8">
              Services
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <h1 className="text-[clamp(48px,7vw,100px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.9]">
              <AnimatedText text="Every service." />
              <br />
              <AnimatedText text="One standard." delay={0.1} />
            </h1>
            <SectionReveal delay={0.25}>
              <p className="text-base lg:text-lg font-sans text-white/50 leading-relaxed">
                AI logo services for modern brands. Traditional branding for brands
                built from scratch. Both delivered with the same uncompromising
                technical precision.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Pricing banner */}
      <div className="bg-[#0a0a0a] py-4">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm font-sans text-white/60">
            <span className="text-white font-semibold">AI Logo Vectorisation</span> starts from{" "}
            <span className="text-white font-semibold">$50</span> — depending on complexity.
          </p>
          <Link
            href="/contact"
            className="text-xs font-sans font-semibold text-white/70 hover:text-white transition-colors link-underline shrink-0"
          >
            Upload your logo for a free quote →
          </Link>
        </div>
      </div>

      {/* AI Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-10">
              <p className="text-[11px] font-sans font-semibold text-[#0a0a0a] bg-[#0a0a0a]/[0.07] px-3 py-1.5 uppercase tracking-[0.15em]">
                AI Logo Services
              </p>
              <p className="text-sm font-sans text-[#737373]">
                Transform existing AI-generated logos into professional assets.
              </p>
            </div>
          </SectionReveal>

          <div className="border-t border-[#e5e5e5]">
            {services.map((service, i) => (
              <ServiceRow
                key={service.slug}
                number={service.number}
                title={service.title}
                tagline={service.tagline}
                features={service.features}
                slug={service.slug}
                startingPrice={service.startingPrice}
                turnaround={service.turnaround}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Services */}
      <section className="py-20 lg:py-28 bg-[#f5f5f5] border-t border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-10">
              <p className="text-[11px] font-sans font-semibold text-white bg-[#0a0a0a] px-3 py-1.5 uppercase tracking-[0.15em]">
                Traditional Branding
              </p>
              <p className="text-sm font-sans text-[#737373]">
                Brand design built entirely from scratch. No AI. Pure craft.
              </p>
            </div>
          </SectionReveal>

          <div className="border-t border-[#e5e5e5]">
            {traditionalServices.map((service, i) => (
              <ServiceRow
                key={service.slug}
                number={service.number}
                title={service.title}
                tagline={service.tagline}
                features={service.features}
                slug={service.slug}
                startingPrice={service.startingPrice}
                turnaround={service.turnaround}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-10">
              <p className="text-[11px] font-sans font-semibold text-white bg-[#0a0a0a] px-3 py-1.5 uppercase tracking-[0.15em]">
                Digital Services
              </p>
              <p className="text-sm font-sans text-[#737373]">
                Web presence and social media — built around your brand.
              </p>
            </div>
          </SectionReveal>

          <div className="border-t border-[#e5e5e5]">
            {digitalServices.map((service, i) => (
              <ServiceRow
                key={service.slug}
                number={service.number}
                title={service.title}
                tagline={service.tagline}
                features={service.features}
                slug={service.slug}
                startingPrice={service.startingPrice}
                turnaround={service.turnaround}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Live Work — Web Design & Development */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[11px] font-sans font-semibold text-white/30 uppercase tracking-[0.2em] mb-4">
              Web Design &amp; Development · Live Work
            </p>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white tracking-[-0.03em] mb-4">
              Websites we designed and built.
            </h2>
            <p className="text-base font-sans text-white/50 max-w-xl leading-relaxed mb-16">
              Every website we build is designed from the brand up — custom layout, identity-led visuals, and performance-optimised code. Here are three live examples: two PropTech platforms and a FinTech payment brand.
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
                  <iframe src="https://www.zoninggraph.com/" className="w-full h-full border-0" title="ZoningGraph website — PropTech web design by Evoke Studio" loading="lazy" />
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
                  <iframe src="https://www.payxara.com/" className="w-full h-full border-0" title="PayXara website — FinTech web design by Evoke Studio" loading="lazy" />
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* ZoningOps */}
          <SectionReveal delay={0.2}>
            <div>
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
                  <iframe src="https://www.zoningops.com/" className="w-full h-full border-0" title="ZoningOps website — PropTech web design by Evoke Studio" loading="lazy" />
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Custom quote CTA */}
      <section className="py-16 lg:py-20 bg-white border-y border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <SectionReveal>
              <h2 className="text-2xl lg:text-4xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em]">
                Not sure which service you need?
              </h2>
              <p className="text-base font-sans text-[#737373] mt-4 leading-relaxed max-w-sm">
                Upload your logo or describe your project. We&apos;ll assess it and
                come back within one business day with a clear recommendation and
                a custom quote.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-sm font-sans font-semibold text-white bg-[#0a0a0a] px-7 py-4 hover:bg-[#1f1f1f] transition-colors"
                >
                  Get a Custom Quote ↗
                </Link>
                <a
                  href="mailto:work@madebyevoke.com"
                  className="inline-flex items-center justify-center gap-2 text-sm font-sans font-medium text-[#737373] border border-[#e5e5e5] px-7 py-4 hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-all"
                >
                  work@madebyevoke.com
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
