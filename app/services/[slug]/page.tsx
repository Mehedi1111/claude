import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { allServices } from "@/lib/data";
import { showcaseItems } from "@/lib/showcase";
import CTASection from "@/components/sections/CTASection";
import SectionReveal from "@/components/ui/SectionReveal";
import LogoShowcase from "@/components/sections/LogoShowcase";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);
  if (!service) return {};

  const categoryLabel =
    service.category === "ai" ? "AI Logo Service"
    : service.category === "digital" ? "Digital Service"
    : "Brand Design Service";
  const title = `${service.title} — From ${service.startingPrice} | Evoke Studio`;
  const description = `${service.description} ${service.turnaround} turnaround. From ${service.startingPrice}. Delivered as production-ready SVG, AI, EPS, and PDF files.`;

  return {
    title,
    description,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} service`,
      `professional ${service.title.toLowerCase()}`,
      categoryLabel.toLowerCase(),
      "Evoke Studio",
      "brand identity design",
      "logo design",
    ],
    openGraph: {
      title,
      description,
      url: `https://madebyevoke.com/services/${slug}`,
      siteName: "Evoke Studio",
      type: "website",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 400,
          alt: `${service.title} — Evoke Studio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.image],
    },
    alternates: { canonical: `https://madebyevoke.com/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceIndex = allServices.findIndex((s) => s.slug === slug);
  const nextService = allServices[(serviceIndex + 1) % allServices.length];

  const categoryLabel =
    service.category === "ai" ? "AI Logo Services"
    : service.category === "digital" ? "Digital Services"
    : "Traditional Branding";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "ProfessionalService",
      name: "Evoke Studio",
      url: "https://madebyevoke.com",
    },
    offers: {
      "@type": "Offer",
      price: service.startingPrice.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "ProfessionalService",
        name: "Evoke Studio",
      },
    },
    url: `https://madebyevoke.com/services/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 bg-[#0a0a0a] overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "48px 48px" }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-10">
              <Link href="/services" className="text-[11px] font-sans text-white/30 hover:text-white/60 transition-colors">
                ← Services
              </Link>
              <span className="text-white/10">/</span>
              <span className="text-[11px] font-sans text-white/30 uppercase tracking-[0.1em]">{categoryLabel}</span>
              <span className="text-white/10">/</span>
              <span className="text-[11px] font-sans text-white/30">{service.number}</span>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="text-[clamp(40px,6vw,90px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.9] mb-5">
              {service.title}
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-xl font-sans text-white/35 italic mb-10 max-w-lg">
              {service.tagline}
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] bg-white px-6 py-3.5 hover:bg-white/90 transition-colors"
              >
                Start This Service ↗
              </Link>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm font-sans text-white/30">
                  <span>From</span>
                  <span className="text-white font-semibold text-base">{service.startingPrice}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-sans text-white/30">
                  <span>⏱</span>
                  <span>{service.turnaround}</span>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Hero image */}
      <div className="relative aspect-[21/7] overflow-hidden bg-[#111]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover grayscale opacity-50"
          priority
          sizes="100vw"
        />
      </div>

      {/* Main content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-20">

            {/* Left content */}
            <div>
              {/* Overview */}
              <SectionReveal>
                <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-5">
                  Overview
                </p>
                <p className="text-lg lg:text-xl font-sans text-[#404040] leading-relaxed mb-12">
                  {service.longDescription}
                </p>
              </SectionReveal>

              {/* What's included */}
              <SectionReveal delay={0.1}>
                <div className="mb-12">
                  <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-5">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3.5 text-[15px] font-sans text-[#404040] py-3 border-b border-[#f0f0f0] last:border-0">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-1 shrink-0">
                          <circle cx="7" cy="7" r="6" stroke="#0a0a0a" strokeWidth="1" />
                          <path d="M4.5 7L6.5 9L9.5 5" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>

              {/* Who needs this */}
              {service.whoNeedsThis && (
                <SectionReveal delay={0.15}>
                  <div className="mb-12">
                    <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-5">
                      Who This Is For
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.whoNeedsThis.map((who, i) => (
                        <span key={i} className="text-sm font-sans text-[#404040] border border-[#e5e5e5] px-3.5 py-2">
                          {who}
                        </span>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
              )}

              {/* Common use cases */}
              {service.commonUseCases && (
                <SectionReveal delay={0.2}>
                  <div className="mb-12">
                    <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-5">
                      Common Use Cases
                    </p>
                    <ul className="space-y-2.5">
                      {service.commonUseCases.map((uc, i) => (
                        <li key={i} className="flex items-start gap-3 text-[15px] font-sans text-[#737373]">
                          <span className="mt-2 w-1 h-1 bg-[#737373] rounded-full shrink-0" />
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
              )}

              {/* Service FAQ */}
              {service.serviceFAQ && service.serviceFAQ.length > 0 && (
                <SectionReveal delay={0.25}>
                  <div>
                    <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-5">
                      Questions About This Service
                    </p>
                    <div className="space-y-5">
                      {service.serviceFAQ.map((faq, i) => (
                        <div key={i} className="bg-[#f5f5f5] p-6">
                          <p className="text-sm font-sans font-semibold text-[#0a0a0a] mb-2">{faq.q}</p>
                          <p className="text-sm font-sans text-[#737373] leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
              )}
            </div>

            {/* Right sidebar */}
            <div className="space-y-5">
              {/* Deliverables card */}
              <SectionReveal delay={0.1}>
                <div className="bg-[#f5f5f5] p-7 lg:p-8">
                  <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-5">
                    Deliverables
                  </p>
                  <ul className="space-y-0">
                    {service.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-sans text-[#404040] py-3 border-b border-[#e5e5e5] last:border-0">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                          <circle cx="6" cy="6" r="5" stroke="#0a0a0a" strokeWidth="0.8" />
                          <path d="M3.5 6L5.5 8L8.5 4" stroke="#0a0a0a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>

              {/* Pricing + CTA card */}
              <SectionReveal delay={0.15}>
                <div className="border border-[#e5e5e5] p-7 lg:p-8">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-sans font-semibold text-[#0a0a0a]/40 uppercase tracking-[0.15em]">
                      Starting from
                    </span>
                    <span className="text-3xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em]">
                      {service.startingPrice}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#e5e5e5] pt-4 pb-6">
                    <span className="text-[11px] font-sans font-semibold text-[#0a0a0a]/40 uppercase tracking-[0.15em]">
                      Turnaround
                    </span>
                    <span className="text-sm font-sans font-semibold text-[#0a0a0a]">
                      {service.turnaround}
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full text-center text-sm font-sans font-semibold text-white bg-[#0a0a0a] px-6 py-4 hover:bg-[#1f1f1f] transition-colors"
                  >
                    Get Started →
                  </Link>
                  <p className="text-[11px] font-sans text-[#737373] text-center mt-3">
                    Free quote within 1 business day
                  </p>
                </div>
              </SectionReveal>

              {/* Contact card */}
              <SectionReveal delay={0.2}>
                <div className="bg-[#0a0a0a] p-7 lg:p-8">
                  <p className="text-sm font-display font-bold text-white tracking-[-0.02em] mb-2">
                    Have a complex project?
                  </p>
                  <p className="text-[13px] font-sans text-white/40 leading-relaxed mb-5">
                    Send us your brief directly. We&apos;ll scope it and quote within 24 hours.
                  </p>
                  <a
                    href="mailto:work@madebyevoke.com"
                    className="text-[13px] font-sans font-medium text-white/60 hover:text-white transition-colors link-underline"
                  >
                    work@madebyevoke.com →
                  </a>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio showcase — social media management service */}
      {slug === "social-media-management" && (
        <section className="py-20 lg:py-28 bg-[#fafafa] border-t border-[#e5e5e5]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <SectionReveal>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                <div>
                  <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-3">
                    Real Work
                  </p>
                  <h2 className="text-[clamp(28px,3.5vw,48px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em]">
                    Social Media Portfolio 2025
                  </h2>
                </div>
                <Link
                  href="/portfolio/social-media-portfolio-2025"
                  className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] border border-[#0a0a0a] px-5 py-3 hover:bg-[#0a0a0a] hover:text-white transition-colors shrink-0"
                >
                  View Full Case Study →
                </Link>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { src: "/portfolio/social-media-2025/social-media-2025-cover.avif", alt: "Social media post design portfolio 2025 — Instagram content by Evoke Studio" },
                  { src: "/portfolio/social-media-2025/social-media-2025-2.avif", alt: "Instagram post design examples — on-brand social media graphics" },
                  { src: "/portfolio/social-media-2025/social-media-2025-3.avif", alt: "Facebook post design portfolio — brand content graphics by Evoke Studio" },
                ].map((img, i) => (
                  <Link key={i} href="/portfolio/social-media-portfolio-2025">
                    <div className="relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "4/3" }}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <p className="text-sm font-sans text-[#737373] max-w-xl">
                Instagram and Facebook post designs built from client brand identity systems — 50+ assets delivered in 2025 for brands in the USA, UK, Canada, and Australia.
              </p>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Before/After showcase — vectorization service only */}
      {slug === "ai-logo-vectorization" && showcaseItems.length > 0 && (
        <section className="py-20 lg:py-28 bg-[#fafafa] border-t border-[#e5e5e5]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <SectionReveal>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
                <div>
                  <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-3">
                    Real Work
                  </p>
                  <h2 className="text-[clamp(28px,3.5vw,48px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em]">
                    Before &amp; After
                  </h2>
                </div>
                <p className="text-sm font-sans text-[#737373] max-w-xs leading-relaxed pb-1">
                  Every project starts with an AI-generated file. This is what it looks like before and after precision vectorization.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <LogoShowcase items={showcaseItems} columns={showcaseItems.length > 2 ? 2 : 1} />
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Next service */}
      <section className="py-14 lg:py-16 bg-[#f5f5f5] border-t border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-6">
            Next Service
          </p>
          <Link href={`/services/${nextService.slug}`} className="group flex items-center justify-between gap-8">
            <div>
              <p className="text-[11px] font-sans text-[#737373] mb-1.5">{nextService.number} — {nextService.category === "ai" ? "AI Services" : "Traditional Branding"}</p>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] group-hover:text-[#0a0a0a]/50 transition-colors">
                {nextService.title}
              </h3>
            </div>
            <span className="text-3xl text-[#0a0a0a]/15 group-hover:text-[#0a0a0a] group-hover:translate-x-2 transition-all duration-300">
              →
            </span>
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
