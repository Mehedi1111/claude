import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { landingPages } from "@/lib/landing-pages";
import CTASection from "@/components/sections/CTASection";
import SectionReveal from "@/components/ui/SectionReveal";
import FAQAccordion from "@/components/sections/FAQAccordion";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = landingPages.find((p) => p.slug === slug);
  if (!page) return {};

  const url = `https://madebyevoke.com/lp/${slug}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      siteName: "Evoke Studio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const page = landingPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const url = `https://madebyevoke.com/lp/${slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.metaDescription,
    url,
    provider: {
      "@type": "ProfessionalService",
      name: "Evoke Studio",
      url: "https://madebyevoke.com",
      logo: { "@type": "ImageObject", url: "https://madebyevoke.com/icon.png" },
      address: { "@type": "PostalAddress", addressCountry: "US" },
      areaServed: ["US", "GB", "CA", "AU"],
      sameAs: [
        "https://www.linkedin.com/company/evoke-studio",
        "https://www.behance.net/mh62221352f0fFF",
        "https://x.com/MadeByEvoke",
      ],
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: page.startingPrice.replace(/[^0-9.]/g, ""),
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${page.title} Packages`,
      itemListElement: page.included.slice(0, 5).map((item, i) => ({
        "@type": "Offer",
        position: i + 1,
        name: item,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://madebyevoke.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://madebyevoke.com/services" },
      { "@type": "ListItem", position: 3, name: page.title, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".lp-what-is-answer", ".lp-hero-description"],
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Evoke Studio",
    url: "https://madebyevoke.com",
    logo: "https://madebyevoke.com/icon.png",
    description: "AI logo vectorization, logo design, and brand identity design agency serving US, UK, Canada, and Australia.",
    areaServed: ["US", "GB", "CA", "AU"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "work@madebyevoke.com",
      contactType: "customer service",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      {/* ── HERO ── */}
      <section className="relative bg-[#0a0a0a] pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-10 flex-wrap">
            <Link href="/" className="text-[12px] font-sans text-white/35 hover:text-white/70 transition-colors">Home</Link>
            <span className="text-white/20 text-[12px]">/</span>
            <Link href="/services" className="text-[12px] font-sans text-white/35 hover:text-white/70 transition-colors">Services</Link>
            <span className="text-white/20 text-[12px]">/</span>
            <span className="text-[12px] font-sans text-white/55">{page.title}</span>
          </nav>

          <SectionReveal>
            <h1 className="text-[clamp(36px,5.5vw,80px)] font-display font-bold text-white tracking-[-0.04em] leading-[1.0] max-w-5xl mb-6">
              {page.title}
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="lp-hero-description text-lg sm:text-xl font-sans text-white/45 leading-relaxed max-w-2xl mb-10">
              {page.tagline}
            </p>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] bg-white px-7 py-4 hover:bg-white/90 transition-colors"
              >
                Get a Free Quote →
              </Link>
              <a
                href="mailto:work@madebyevoke.com"
                className="inline-flex items-center gap-2 text-sm font-sans font-medium text-white/50 border border-white/15 px-7 py-4 hover:border-white/40 hover:text-white transition-all"
              >
                work@madebyevoke.com
              </a>
            </div>
          </SectionReveal>

          {/* Trust strip */}
          <SectionReveal delay={0.3}>
            <div className="flex flex-wrap gap-8 lg:gap-14 pt-10 border-t border-white/[0.08]">
              {page.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-display font-bold text-white tracking-[-0.03em]">{s.value}</p>
                  <p className="text-[11px] font-sans text-white/30 uppercase tracking-[0.12em] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── WHAT IS + HERO DESCRIPTION ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <SectionReveal>
              <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-5">
                Overview
              </p>
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] mb-6">
                {page.whatIs.question}
              </h2>
              <p className="lp-what-is-answer text-base lg:text-lg font-sans text-[#404040] leading-relaxed">
                {page.whatIs.answer}
              </p>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-5">
                About This Service
              </p>
              <p className="text-base lg:text-lg font-sans text-[#404040] leading-relaxed mb-8">
                {page.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-sm font-sans font-semibold text-white bg-[#0a0a0a] px-6 py-4 hover:bg-[#1f1f1f] transition-colors"
                >
                  Start a Project →
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 text-sm font-sans font-medium text-[#737373] border border-[#e5e5e5] px-6 py-4 hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-all"
                >
                  See Our Work
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 lg:py-28 bg-[#f5f5f5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-3">
              Deliverables
            </p>
            <h2 className="text-2xl lg:text-4xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] mb-12">
              What&apos;s included in {page.title.toLowerCase()}
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e5e5]">
            {page.included.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.04}>
                <div className="bg-white p-6 lg:p-7 h-full">
                  <div className="flex items-start gap-3.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                      <circle cx="8" cy="8" r="7" stroke="#0a0a0a" strokeWidth="1" />
                      <path d="M5 8L7 10L11 6" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-[14px] font-sans text-[#404040] leading-snug">{item}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Price + CTA sidebar strip */}
          <SectionReveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-[#0a0a0a] p-7 lg:p-8">
              <div>
                <p className="text-[11px] font-sans text-white/40 uppercase tracking-[0.15em] mb-1">Starting from</p>
                <p className="text-3xl font-display font-bold text-white tracking-[-0.03em]">{page.startingPrice}</p>
                <p className="text-sm font-sans text-white/40 mt-1">{page.turnaround} turnaround · Free quote in 24hrs</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] bg-white px-7 py-4 hover:bg-white/90 transition-colors shrink-0"
              >
                Get a Free Quote →
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-3">
              Process
            </p>
            <h2 className="text-2xl lg:text-4xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] mb-12">
              How it works
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {page.process.map((step, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="border-t-2 border-[#0a0a0a] pt-6">
                  <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/25 tracking-[0.15em] mb-4">{step.step}</p>
                  <h3 className="text-lg font-display font-bold text-[#0a0a0a] tracking-[-0.02em] mb-3">{step.title}</h3>
                  <p className="text-sm font-sans text-[#737373] leading-relaxed">{step.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="py-20 lg:py-24 bg-[#f5f5f5] border-t border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-3">
              Audience
            </p>
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] mb-10">
              Who this service is for
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {page.whoFor.map((who, i) => (
                <span
                  key={i}
                  className="text-sm font-sans text-[#404040] border border-[#d5d5d5] bg-white px-4 py-2.5"
                >
                  {who}
                </span>
              ))}
            </div>
          </SectionReveal>

          {/* Internal links */}
          <SectionReveal delay={0.15}>
            <div className="mt-14 pt-10 border-t border-[#e5e5e5]">
              <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-6">
                Further Reading
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {page.internalLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="text-sm font-sans font-medium text-[#404040] hover:text-[#0a0a0a] transition-colors underline underline-offset-4 decoration-[#d5d5d5] hover:decoration-[#0a0a0a]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-3">
              FAQ
            </p>
            <h2 className="text-2xl lg:text-4xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] mb-4">
              Common questions about {page.primaryKeyword}
            </h2>
            <p className="text-base font-sans text-[#737373] mb-12 max-w-xl">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link href="/contact" className="text-[#0a0a0a] font-medium underline underline-offset-2">
                Ask us directly
              </Link>{" "}
              — we respond within one business day.
            </p>
          </SectionReveal>

          <FAQAccordion faqs={page.faqs.map((f) => ({ question: f.q, answer: f.a }))} />
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="py-16 lg:py-20 bg-[#f5f5f5] border-t border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-8">
              Related Services
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e5e5]">
            {page.relatedServices.map((svc, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <Link
                  href={svc.href}
                  className="group flex items-center justify-between bg-white px-6 py-5 hover:bg-[#0a0a0a] transition-colors duration-200"
                >
                  <span className="text-sm font-sans font-medium text-[#0a0a0a] group-hover:text-white transition-colors">
                    {svc.title}
                  </span>
                  <span className="text-[#0a0a0a]/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
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
