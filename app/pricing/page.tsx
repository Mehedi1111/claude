import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Pricing — Logo Design, Brand Identity & Web Design | Evoke Studio",
  description:
    "Transparent, fixed pricing for every service. AI logo vectorization from $50 · Logo design from $150 · Brand identity from $500 · Web design from $1,500. Free quote in 24hrs. No hourly rates, no surprises.",
  openGraph: {
    title: "Pricing — Logo Design, Brand Identity & Web Design | Evoke Studio",
    description:
      "Fixed pricing for AI logo vectorization, logo design, brand identity, and web design. From $50. Free quote in 24hrs.",
    url: "https://madebyevoke.com/pricing",
    siteName: "Evoke Studio",
    type: "website",
  },
  alternates: { canonical: "https://madebyevoke.com/pricing" },
};

const aiServices = [
  {
    slug: "ai-logo-vectorization",
    name: "AI Logo Vectorization",
    tagline: "Raw pixels rebuilt as print-ready vectors.",
    price: "$50",
    turnaround: "24–48 hrs",
    popular: true,
    deliverables: [
      "Full manual path reconstruction — no auto-trace",
      "SVG, AI, EPS, PDF, PNG file delivery",
      "Pantone + CMYK colour translation",
      "Scalable from favicon to billboard",
    ],
  },
  {
    slug: "ai-logo-cleanup",
    name: "AI Logo Cleanup",
    tagline: "Fix broken paths, distorted letterforms, and uneven strokes.",
    price: "$35",
    turnaround: "12–24 hrs",
    popular: false,
    deliverables: [
      "Node and anchor point cleanup",
      "Stroke-to-path conversion",
      "Alignment and symmetry correction",
      "Colour swatch normalisation",
    ],
  },
  {
    slug: "svg-conversion",
    name: "SVG Conversion",
    tagline: "Production-ready SVG code, not just an exported file.",
    price: "$40",
    turnaround: "12–24 hrs",
    popular: false,
    deliverables: [
      "Optimised, minimal SVG code",
      "Animation-ready layer structure",
      "React component version (.tsx)",
      "CSS-themeable colour variables",
    ],
  },
  {
    slug: "typography-reconstruction",
    name: "Typography Reconstruction",
    tagline: "Letterforms rebuilt to professional vector standard.",
    price: "$60",
    turnaround: "24–48 hrs",
    popular: false,
    deliverables: [
      "Custom letterform vector reconstruction",
      "Kerning and tracking correction",
      "Typeface identification and sourcing",
      "Outlined paths for production",
    ],
  },
  {
    slug: "brand-system-rebuild",
    name: "Brand System Rebuild",
    tagline: "Extend your logo into a complete visual identity system.",
    price: "$350",
    turnaround: "5–7 days",
    popular: false,
    deliverables: [
      "Brand guidelines PDF",
      "Colour system (HEX, RGB, CMYK, Pantone)",
      "Typography hierarchy",
      "Business card + stationery templates",
    ],
  },
];

const brandServices = [
  {
    slug: "logo-design",
    name: "Logo Design",
    tagline: "Custom mark, wordmark, or combination — from a blank canvas.",
    price: "$150",
    turnaround: "5–7 days",
    popular: false,
    deliverables: [
      "3 distinct logo concepts",
      "2 rounds of revisions",
      "Primary, reversed + monochrome variants",
      "SVG, AI, EPS, PDF, PNG delivery",
    ],
  },
  {
    slug: "brand-identity",
    name: "Brand Identity Design",
    tagline: "Logo, colour, typography, and guidelines — fully unified.",
    price: "$500",
    turnaround: "10–14 days",
    popular: true,
    deliverables: [
      "Custom logo design included",
      "Full colour system (HEX, RGB, CMYK, Pantone)",
      "Typography hierarchy (2–3 typefaces)",
      "Brand guidelines PDF (30–50 pages)",
      "Social media templates",
    ],
  },
  {
    slug: "brand-guidelines",
    name: "Brand Guidelines",
    tagline: "Document your brand so anyone can execute it correctly.",
    price: "$250",
    turnaround: "4–6 days",
    popular: false,
    deliverables: [
      "Logo usage rules and misuse examples",
      "Clear space and minimum size specs",
      "Full colour documentation",
      "Typography rules and specimens",
    ],
  },
  {
    slug: "business-stationery",
    name: "Business Stationery",
    tagline: "Business cards, letterhead, and email signature — print-ready.",
    price: "$200",
    turnaround: "3–5 days",
    popular: false,
    deliverables: [
      "Business card (front and back)",
      "A4 letterhead + compliments slip",
      "Envelope design",
      "HTML email signature",
    ],
  },
  {
    slug: "visual-identity-system",
    name: "Visual Identity System",
    tagline: "Every brand element — logo to asset library — in one engagement.",
    price: "$800",
    turnaround: "14–21 days",
    popular: false,
    deliverables: [
      "Everything in Brand Identity Design",
      "Complete stationery suite",
      "Social media template kit",
      "Full asset library ZIP",
      "Complete brand guidelines",
    ],
  },
];

const digitalServices = [
  {
    slug: "web-design-development",
    name: "Web Design & Development",
    tagline: "Custom Next.js websites that load fast, rank well, and convert.",
    price: "$1,500",
    turnaround: "3–6 weeks",
    popular: true,
    deliverables: [
      "Custom visual design (Figma files included)",
      "Next.js development — sub-2s load times",
      "Mobile-first, fully responsive",
      "On-page SEO, schema, sitemap, IndexNow",
      "Vercel deployment + 30-day support",
    ],
  },
  {
    slug: "social-media-management",
    name: "Social Media Design",
    tagline: "On-brand content designed, written, and scheduled monthly.",
    price: "$300/mo",
    turnaround: "Ongoing",
    popular: false,
    deliverables: [
      "15–30 posts per month",
      "Custom-designed graphics",
      "Captions + hashtag strategy",
      "Scheduled across Instagram, LinkedIn, X",
    ],
  },
];

function ServiceCard({
  service,
  ctaHref,
}: {
  service: (typeof aiServices)[0];
  ctaHref: string;
}) {
  return (
    <div className={`relative flex flex-col border ${service.popular ? "border-[#0a0a0a]" : "border-[#e5e5e5]"} bg-white`}>
      {service.popular && (
        <div className="bg-[#0a0a0a] px-4 py-1.5 text-center">
          <span className="text-[10px] font-sans font-bold text-white uppercase tracking-[0.2em]">
            Most Popular
          </span>
        </div>
      )}

      <div className="flex-1 p-7 lg:p-8">
        {/* Price */}
        <div className="flex items-end justify-between gap-4 mb-5">
          <div>
            <p className="text-[11px] font-sans font-semibold text-[#737373] uppercase tracking-[0.15em] mb-1">
              Starting from
            </p>
            <p className="text-[clamp(36px,4vw,48px)] font-display font-bold text-[#0a0a0a] tracking-[-0.04em] leading-none">
              {service.price}
            </p>
          </div>
          <span className="text-[11px] font-sans font-medium text-[#737373] border border-[#e5e5e5] px-3 py-1.5 shrink-0">
            {service.turnaround}
          </span>
        </div>

        {/* Name + tagline */}
        <h3 className="text-lg font-display font-bold text-[#0a0a0a] tracking-[-0.02em] mb-1.5">
          {service.name}
        </h3>
        <p className="text-sm font-sans text-[#737373] leading-relaxed mb-6">
          {service.tagline}
        </p>

        {/* Deliverables */}
        <ul className="space-y-2.5 mb-8">
          {service.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2.5">
              <span className="mt-[3px] shrink-0 w-4 h-4 border border-[#0a0a0a]/20 flex items-center justify-center">
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path d="M1 3L3 5L7 1" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[13px] font-sans text-[#4a4a4a] leading-snug">{d}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-7 lg:px-8 pb-7 lg:pb-8">
        <Link
          href={ctaHref}
          className={`w-full flex items-center justify-center gap-2 text-sm font-sans font-semibold py-3.5 transition-colors ${
            service.popular
              ? "bg-[#0a0a0a] text-white hover:bg-[#1f1f1f]"
              : "border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white"
          }`}
        >
          Get a Free Quote →
        </Link>
        <p className="text-center text-[11px] font-sans text-[#b4b4b4] mt-2.5">
          Fixed price. Quoted before work begins.
        </p>
      </div>
    </div>
  );
}

const pricingFAQs = [
  {
    q: "Are prices fixed or hourly?",
    a: "Every project at Evoke Studio is fixed-price — quoted in full before work begins. You'll never receive an unexpected invoice. No hourly rates, no retainers, no scope-creep charges.",
  },
  {
    q: "How do I get a quote?",
    a: "Submit your brief via the contact form at madebyevoke.com/contact. We'll review your project and reply within one business day with a detailed, itemised quote. For AI logo services, we typically quote within 2 hours.",
  },
  {
    q: "Do you offer package discounts?",
    a: "Yes. If you need multiple services in a single engagement — for example, AI logo vectorization plus brand guidelines, or logo design plus a website — we bundle them at a reduced combined rate. Mention all your requirements in your brief and we'll quote accordingly.",
  },
  {
    q: "What if the project scope is larger than the starting price?",
    a: "Starting prices reflect the simplest version of each service. Complex marks, additional concepts, extra revision rounds, or larger page counts are quoted individually after reviewing your brief. You always know the full price before we start.",
  },
  {
    q: "Do you offer payment plans?",
    a: "For projects over $500, we offer a 50% deposit and 50% on delivery payment structure. For larger projects, we can discuss staged milestones. Payments are accepted via bank transfer, PayPal, or Stripe.",
  },
  {
    q: "Is there a rush fee?",
    a: "Rush delivery — faster than our standard turnaround — is available on most services for an additional fee typically ranging from 25–50% of the project price. Mention your deadline in your brief and we'll advise on feasibility.",
  },
  {
    q: "What countries do you serve?",
    a: "We serve clients in the USA, UK, Canada, and Australia — and beyond. Our entire process is remote. All pricing is in USD; we accept payment in any currency.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0a0a0a] pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[11px] font-sans font-bold text-white/25 uppercase tracking-[0.3em] mb-8">
              Pricing
            </p>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h1 className="text-[clamp(48px,7.5vw,110px)] font-display font-bold text-white tracking-[-0.045em] leading-[0.88] mb-8">
              Transparent.<br />Fixed price.<br />No surprises.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="text-base font-sans text-white/45 max-w-xl leading-relaxed mb-12">
              Every project is quoted in full before work begins. No hourly rates, no retainers, no scope-creep invoices. You approve the price — we deliver the work.
            </p>
          </SectionReveal>

          {/* Trust strip */}
          <SectionReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {[
                { value: "500+", label: "Projects delivered" },
                { value: "5.0/5", label: "Clutch rating" },
                { value: "24hr", label: "Quote turnaround" },
                { value: "USA · UK · CA · AU", label: "Markets served" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="text-white font-display font-bold text-lg tracking-[-0.02em]">{stat.value}</span>
                  <span className="text-white/25 text-[12px] font-sans">{stat.label}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Nav anchors ── */}
      <div className="bg-white border-b border-[#e5e5e5] sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
            {[
              { label: "AI Logo Services", href: "#ai-services" },
              { label: "Brand Design", href: "#brand-design" },
              { label: "Web & Digital", href: "#web-digital" },
              { label: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] font-sans font-semibold text-[#737373] hover:text-[#0a0a0a] transition-colors py-4 px-5 shrink-0 border-r border-[#e5e5e5] last:border-r-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── AI Logo Services ── */}
      <section id="ai-services" className="py-20 lg:py-28 bg-[#fafafa] border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <p className="text-[11px] font-sans font-semibold text-[#737373] uppercase tracking-[0.2em] mb-4">
                  AI Logo Services
                </p>
                <h2 className="text-[clamp(28px,3.5vw,48px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1]">
                  Fix, clean, or convert<br />your AI-generated logo.
                </h2>
              </div>
              <p className="text-sm font-sans text-[#737373] max-w-xs leading-relaxed lg:text-right">
                Fast turnaround. Fixed price. Every service is manual — no auto-trace, no shortcuts.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiServices.map((service, i) => (
              <SectionReveal key={service.slug} delay={i * 0.07}>
                <ServiceCard
                  service={service}
                  ctaHref="/contact"
                />
              </SectionReveal>
            ))}
          </div>

          {/* Internal links */}
          <SectionReveal delay={0.1}>
            <div className="mt-10 pt-8 border-t border-[#e5e5e5] flex flex-wrap gap-x-6 gap-y-2 items-center">
              <span className="text-[11px] font-sans font-bold text-[#737373] uppercase tracking-[0.15em]">Learn more:</span>
              {[
                { label: "AI Logo Vectorization Service", href: "/lp/ai-logo-vectorization" },
                { label: "AI Logo Cleanup Service", href: "/lp/ai-logo-cleanup" },
                { label: "AI logo vectorization guide", href: "/services/ai-logo-vectorization" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-[13px] font-sans text-[#0a0a0a] hover:underline underline-offset-2">
                  {l.label} →
                </Link>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Brand Design ── */}
      <section id="brand-design" className="py-20 lg:py-28 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <p className="text-[11px] font-sans font-semibold text-[#737373] uppercase tracking-[0.2em] mb-4">
                  Brand Design
                </p>
                <h2 className="text-[clamp(28px,3.5vw,48px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1]">
                  Build a brand identity<br />that earns trust.
                </h2>
              </div>
              <p className="text-sm font-sans text-[#737373] max-w-xs leading-relaxed lg:text-right">
                Custom design from scratch. No templates, no AI generation. Strategy-first, every time.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brandServices.map((service, i) => (
              <SectionReveal key={service.slug} delay={i * 0.07}>
                <ServiceCard
                  service={service}
                  ctaHref="/contact"
                />
              </SectionReveal>
            ))}
          </div>

          {/* Internal links */}
          <SectionReveal delay={0.1}>
            <div className="mt-10 pt-8 border-t border-[#e5e5e5] flex flex-wrap gap-x-6 gap-y-2 items-center">
              <span className="text-[11px] font-sans font-bold text-[#737373] uppercase tracking-[0.15em]">Learn more:</span>
              {[
                { label: "Logo Design Agency", href: "/lp/logo-design-agency" },
                { label: "Brand Identity Package", href: "/lp/brand-identity-package" },
                { label: "Rebranding Agency", href: "/lp/rebranding-agency" },
                { label: "How to build brand identity", href: "/blog/what-is-brand-identity-design" },
                { label: "View portfolio", href: "/portfolio" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-[13px] font-sans text-[#0a0a0a] hover:underline underline-offset-2">
                  {l.label} →
                </Link>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Web & Digital ── */}
      <section id="web-digital" className="py-20 lg:py-28 bg-[#fafafa] border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <p className="text-[11px] font-sans font-semibold text-[#737373] uppercase tracking-[0.2em] mb-4">
                  Web & Digital
                </p>
                <h2 className="text-[clamp(28px,3.5vw,48px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1]">
                  Websites and content<br />that convert.
                </h2>
              </div>
              <p className="text-sm font-sans text-[#737373] max-w-xs leading-relaxed lg:text-right">
                Built on Next.js. Deployed on Vercel. Sub-2s load times and SEO from day one.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
            {digitalServices.map((service, i) => (
              <SectionReveal key={service.slug} delay={i * 0.07}>
                <ServiceCard
                  service={service}
                  ctaHref="/contact"
                />
              </SectionReveal>
            ))}
          </div>

          {/* Internal links */}
          <SectionReveal delay={0.1}>
            <div className="mt-10 pt-8 border-t border-[#e5e5e5] flex flex-wrap gap-x-6 gap-y-2 items-center">
              <span className="text-[11px] font-sans font-bold text-[#737373] uppercase tracking-[0.15em]">Learn more:</span>
              {[
                { label: "Web Design Agency", href: "/lp/web-design-agency" },
                { label: "Web Design for Startups", href: "/lp/web-design-for-startups" },
                { label: "SaaS Branding Agency", href: "/lp/saas-branding-agency" },
                { label: "How much does web design cost", href: "/blog/how-much-does-web-design-cost" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-[13px] font-sans text-[#0a0a0a] hover:underline underline-offset-2">
                  {l.label} →
                </Link>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── "Not sure?" guidance block ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SectionReveal>
              <div className="lg:col-span-1">
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] mb-4">
                  Not sure what you need?
                </h2>
                <p className="text-sm font-sans text-[#737373] leading-relaxed mb-6">
                  Describe your project and we&apos;ll recommend the right service and price. Free, no obligation.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white bg-[#0a0a0a] px-6 py-3.5 hover:bg-[#1f1f1f] transition-colors"
                >
                  Ask us →
                </Link>
              </div>
            </SectionReveal>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  scenario: "I have an AI logo file",
                  recommendation: "Start with AI Logo Vectorization ($50) — we'll flag if cleanup is also needed.",
                  href: "/lp/ai-logo-vectorization",
                },
                {
                  scenario: "I need a logo for my business",
                  recommendation: "Logo Design ($150) for a standalone mark, or Brand Identity Package ($500) for the full system.",
                  href: "/lp/logo-design-service",
                },
                {
                  scenario: "I need a website",
                  recommendation: "Web Design & Development from $1,500. Tell us your page count and we'll quote exactly.",
                  href: "/lp/web-design-agency",
                },
              ].map((item) => (
                <SectionReveal key={item.scenario}>
                  <Link href={item.href} className="group block border border-[#e5e5e5] p-6 hover:border-[#0a0a0a] transition-colors h-full">
                    <p className="text-[11px] font-sans font-bold text-[#0a0a0a]/40 uppercase tracking-[0.15em] mb-3">
                      If…
                    </p>
                    <p className="text-sm font-sans font-semibold text-[#0a0a0a] mb-3 leading-snug">
                      {item.scenario}
                    </p>
                    <p className="text-[13px] font-sans text-[#737373] leading-relaxed">
                      {item.recommendation}
                    </p>
                    <p className="text-[12px] font-sans font-semibold text-[#0a0a0a] mt-4 group-hover:underline">
                      Learn more →
                    </p>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 lg:py-28 bg-[#fafafa] border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] mb-12">
              Pricing questions, answered.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl">
            {pricingFAQs.map((faq, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div>
                  <h3 className="text-base font-display font-semibold text-[#0a0a0a] tracking-[-0.01em] mb-2.5">
                    {faq.q}
                  </h3>
                  <p className="text-sm font-sans text-[#737373] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="text-[clamp(36px,5vw,72px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.92] mb-6">
              Ready to start?
            </h2>
            <p className="text-base font-sans text-white/45 max-w-md mx-auto mb-10">
              Submit your brief and receive a detailed, fixed-price quote within one business day. No commitment required.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] bg-white px-8 py-4 hover:bg-white/90 transition-colors"
              >
                Get a Free Quote →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-sans font-medium text-white/50 hover:text-white transition-colors px-6 py-4"
              >
                View all services
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
