import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { domains, getDomain } from "@/lib/domains";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export async function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const domain = getDomain(slug);
  if (!domain) return {};

  const title = `${domain.name} — Premium Domain for Sale | Evoke Studio`;
  const description = `${domain.name} is a premium .com domain available for acquisition. ${domain.tagline} Industry: ${domain.niche}. Available with optional brand identity and website package.`;

  return {
    title,
    description,
    keywords: domain.keywords.join(", "),
    openGraph: {
      title,
      description,
      url: `https://madebyevoke.com/domains/${domain.slug}`,
      siteName: "Evoke Studio",
      type: "website",
    },
    alternates: { canonical: `https://madebyevoke.com/domains/${domain.slug}` },
  };
}

export default async function DomainPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const domain = getDomain(slug);
  if (!domain) notFound();

  const packageHighlightIndex = 1; // "Domain + Brand" is the featured package

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-8">
              <Link
                href="/domains"
                className="text-xs font-sans font-semibold text-white/30 uppercase tracking-[0.2em] hover:text-white/60 transition-colors"
              >
                Domain Portfolio
              </Link>
              <span className="text-white/20">→</span>
              <span className="text-xs font-sans font-semibold text-white/30 uppercase tracking-[0.2em]">
                {domain.industry}
              </span>
            </div>
          </SectionReveal>

          {/* Availability badge */}
          <SectionReveal delay={0.05}>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-sans font-semibold text-emerald-400 uppercase tracking-[0.15em]">
                Available Now
              </span>
            </div>
          </SectionReveal>

          <h1 className="text-[clamp(56px,9vw,130px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.88] mb-6">
            <AnimatedText text={domain.name} />
          </h1>

          <SectionReveal delay={0.2}>
            <p className="text-xl lg:text-2xl font-sans text-white/50 max-w-2xl leading-relaxed mb-10">
              {domain.tagline}
            </p>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs font-sans font-semibold text-white/40 uppercase tracking-[0.15em] border border-white/10 px-3 py-1.5">
                {domain.industry}
              </span>
              <span className="text-xs font-sans font-semibold text-white/40 uppercase tracking-[0.15em] border border-white/10 px-3 py-1.5">
                Premium .com
              </span>
              <span className="text-xs font-sans font-semibold text-white/40 uppercase tracking-[0.15em] border border-white/10 px-3 py-1.5">
                Full transfer
              </span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Description + Niche ───────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <SectionReveal>
              <p className="text-xs font-sans font-semibold text-[#737373] uppercase tracking-[0.2em] mb-6">
                About This Domain
              </p>
              <p className="text-lg font-sans text-[#0a0a0a] leading-relaxed">
                {domain.description}
              </p>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="text-xs font-sans font-semibold text-[#737373] uppercase tracking-[0.2em] mb-6">
                Industry & Niche
              </p>
              <p className="text-2xl font-display font-bold text-[#0a0a0a] tracking-[-0.02em] mb-3">
                {domain.industry}
              </p>
              <p className="text-base font-sans text-[#737373] leading-relaxed">
                {domain.niche}
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── Why this domain is premium ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="text-xs font-sans font-semibold text-[#737373] uppercase tracking-[0.2em] mb-4">
              Why It&apos;s Premium
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] mb-12">
              What makes {domain.name} valuable
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {domain.whyPremium.map((point, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div className="flex gap-5 p-6 bg-white border border-[#e5e5e5]">
                  <span className="text-xs font-sans font-bold text-[#b4b4b4] mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] font-sans text-[#0a0a0a] leading-relaxed">
                    {point}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ideal buyer ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="text-xs font-sans font-semibold text-[#737373] uppercase tracking-[0.2em] mb-4">
              Ideal For
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] mb-12">
              Who should acquire {domain.name}
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {domain.idealFor.map((buyer, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div className="p-6 border border-[#e5e5e5] bg-[#fafafa]">
                  <p className="text-[15px] font-sans text-[#0a0a0a] leading-relaxed">
                    {buyer}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="text-xs font-sans font-semibold text-white/30 uppercase tracking-[0.2em] mb-4">
              Acquisition Options
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white tracking-[-0.03em] mb-12">
              How to acquire {domain.name}
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {domain.packages.map((pkg, i) => (
              <SectionReveal key={pkg.name} delay={i * 0.08}>
                <div
                  className={`p-8 border h-full flex flex-col ${
                    i === packageHighlightIndex
                      ? "border-white bg-white"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  {i === packageHighlightIndex && (
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-[#737373] mb-4 block">
                      Most popular
                    </span>
                  )}
                  <h3
                    className={`text-xl font-display font-bold tracking-[-0.02em] mb-2 ${
                      i === packageHighlightIndex ? "text-[#0a0a0a]" : "text-white"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-2xl font-display font-bold tracking-[-0.02em] mb-8 ${
                      i === packageHighlightIndex ? "text-[#0a0a0a]" : "text-white"
                    }`}
                  >
                    {pkg.price}
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className={`text-sm mt-0.5 shrink-0 ${
                            i === packageHighlightIndex
                              ? "text-[#737373]"
                              : "text-white/30"
                          }`}
                        >
                          ✓
                        </span>
                        <span
                          className={`text-sm font-sans leading-snug ${
                            i === packageHighlightIndex
                              ? "text-[#0a0a0a]"
                              : "text-white/70"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/contact?inquiry=domain&domain=${domain.name}`}
                className="inline-block bg-white text-[#0a0a0a] font-sans font-semibold text-sm px-8 py-4 hover:bg-white/90 transition-colors text-center"
              >
                Enquire About {domain.name}
              </Link>
              <Link
                href="/domains"
                className="inline-block border border-white/20 text-white font-sans font-semibold text-sm px-8 py-4 hover:border-white/40 transition-colors text-center"
              >
                View All Domains
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── JSON-LD structured data for AI + Google ───────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: domain.name,
            description: domain.description,
            brand: { "@type": "Organization", name: "Evoke Studio" },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "Evoke Studio",
                url: "https://madebyevoke.com",
              },
            },
            category: domain.niche,
            url: `https://madebyevoke.com/domains/${domain.slug}`,
          }),
        }}
      />
    </>
  );
}
