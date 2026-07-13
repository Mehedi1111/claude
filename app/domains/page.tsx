import type { Metadata } from "next";
import Link from "next/link";
import { domains } from "@/lib/domains";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

const liveSites = domains.filter((d) => d.available && d.websiteUrl);

export const metadata: Metadata = {
  title: "Premium Domains for Sale — PropTech, FinTech & AgriFinance | Evoke Studio",
  description:
    "Acquire a premium .com domain with brand identity and website included. ZoningGraph.com, ZoningOps.com, PayXara.com, Fundegrity.com, FundAgri.com — each a strategic asset in a high-growth industry. Full ownership transfer, optional branding and web design packages.",
  keywords:
    "premium domains for sale, buy domain name, PropTech domain, FinTech domain, ZoningGraph, PayXara, ZoningOps, Fundegrity, FundAgri, domain with brand identity, domain and website package, Evoke Studio",
  openGraph: {
    title: "Premium Domains for Sale — PropTech, FinTech & AgriFinance | Evoke Studio",
    description:
      "Acquire a premium .com domain with brand identity included. PropTech, FinTech, and AgriFinance domains available now with optional website packages.",
    url: "https://madebyevoke.com/domains",
    siteName: "Evoke Studio",
    type: "website",
    images: [{ url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c47385218256145.679e5b461e6a6.jpg", width: 1400, height: 933, alt: "Evoke Studio — Brand Identity & AI Logo Vectorization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Domains for Sale — PropTech, FinTech & AgriFinance | Evoke Studio",
    description: "Acquire a premium .com domain with brand identity included. PropTech, FinTech, and AgriFinance domains available now with optional website packages.",
    images: ["https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c47385218256145.679e5b461e6a6.jpg"],
    creator: "@MadeByEvoke",
  },
  alternates: { canonical: "https://madebyevoke.com/domains" },
};

const industryColours: Record<string, string> = {
  PropTech: "bg-[#0a0a0a] text-white",
  FinTech: "bg-[#0a0a0a] text-white",
  AgriFinance: "bg-[#0a0a0a] text-white",
};

export default function DomainsPage() {
  const available = domains.filter((d) => d.available);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="text-xs font-sans font-semibold text-white/30 uppercase tracking-[0.2em] mb-8">
              Domain Portfolio
            </p>
          </SectionReveal>
          <h1 className="text-[clamp(48px,7vw,100px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.92] mb-8">
            <AnimatedText text="Premium domains." />
            <br />
            <AnimatedText text="Ready to launch." delay={0.1} />
          </h1>
          <SectionReveal delay={0.3}>
            <p className="text-base font-sans text-white/50 max-w-lg leading-relaxed">
              Each domain is a strategic asset — a premium .com name in a
              high-growth industry, available with full brand identity and
              website if you need it. Acquire the name. Build the business.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.45}>
            <div className="flex items-center gap-8 mt-12">
              <div className="text-center">
                <p className="text-[clamp(32px,4vw,56px)] font-display font-bold text-white tracking-[-0.04em] leading-none">
                  {available.length}
                </p>
                <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em] mt-1">
                  Available
                </p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-[clamp(32px,4vw,56px)] font-display font-bold text-white tracking-[-0.04em] leading-none">
                  3
                </p>
                <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em] mt-1">
                  Industries
                </p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-[clamp(32px,4vw,56px)] font-display font-bold text-white tracking-[-0.04em] leading-none">
                  3
                </p>
                <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em] mt-1">
                  Packages
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Domain grid ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {available.map((domain, i) => (
              <SectionReveal key={domain.slug} delay={i * 0.07}>
                <Link
                  href={`/domains/${domain.slug}`}
                  className="group block border border-[#e5e5e5] hover:border-[#0a0a0a] transition-colors duration-200 bg-white hover:bg-[#0a0a0a] overflow-hidden"
                >
                  <div className="p-8 lg:p-10">
                    {/* Industry pill */}
                    <span
                      className={`inline-block text-[10px] font-sans font-semibold uppercase tracking-[0.15em] px-2.5 py-1 mb-6 ${
                        industryColours[domain.industry] ||
                        "bg-[#0a0a0a] text-white"
                      } group-hover:bg-white group-hover:text-[#0a0a0a] transition-colors`}
                    >
                      {domain.industry}
                    </span>

                    {/* Domain name */}
                    <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0a0a0a] group-hover:text-white tracking-[-0.03em] leading-tight mb-3 transition-colors">
                      {domain.name}
                    </h2>

                    {/* Tagline */}
                    <p className="text-sm font-sans text-[#737373] group-hover:text-white/60 leading-relaxed mb-8 transition-colors">
                      {domain.tagline}
                    </p>

                    {/* Niche */}
                    <p className="text-[11px] font-sans font-semibold text-[#b4b4b4] group-hover:text-white/30 uppercase tracking-[0.12em] transition-colors">
                      {domain.niche}
                    </p>
                  </div>

                  {/* Footer bar */}
                  <div className="px-8 lg:px-10 py-4 border-t border-[#e5e5e5] group-hover:border-white/10 flex items-center justify-between transition-colors">
                    <span className="text-[11px] font-sans font-semibold text-[#0a0a0a] group-hover:text-white uppercase tracking-[0.12em] transition-colors">
                      View details
                    </span>
                    <span className="text-[#0a0a0a] group-hover:text-white transition-colors">
                      →
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Live website previews ─────────────────────────────────── */}
      {liveSites.length > 0 && (
        <section className="py-20 lg:py-28 bg-[#0a0a0a]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <SectionReveal>
              <p className="text-[11px] font-sans font-semibold text-white/30 uppercase tracking-[0.2em] mb-4">
                Live Websites
              </p>
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-white tracking-[-0.03em] mb-4">
                Domains with live websites.
              </h2>
              <p className="text-base font-sans text-white/50 max-w-xl leading-relaxed mb-16">
                Some domains in this portfolio already have a full brand identity and marketing website built and deployed — so you can see exactly what your brand could look like before you acquire.
              </p>
            </SectionReveal>
            <div className="space-y-16">
              {liveSites.map((domain, i) => (
                <SectionReveal key={domain.slug} delay={i * 0.1}>
                  <div>
                    {/* Label row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div>
                        <p className="text-xs font-sans font-semibold text-white/30 uppercase tracking-[0.15em] mb-1">
                          {domain.industry} · {domain.niche}
                        </p>
                        <h3 className="text-2xl font-display font-bold text-white tracking-[-0.03em]">
                          {domain.name}
                        </h3>
                        <p className="text-sm font-sans text-white/50 mt-1">{domain.tagline}</p>
                      </div>
                      <div className="flex flex-wrap gap-3 shrink-0">
                        <a
                          href={domain.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white border border-white/20 px-5 py-3 hover:border-white/50 transition-colors"
                        >
                          Open Live Site ↗
                        </a>
                        <Link
                          href={`/domains/${domain.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-sans font-medium text-white/50 hover:text-white transition-colors px-5 py-3"
                        >
                          Acquisition Details →
                        </Link>
                      </div>
                    </div>
                    {/* Browser frame */}
                    <div className="border border-white/10 overflow-hidden">
                      <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                        <div className="flex gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-white/10" />
                          <span className="w-3 h-3 rounded-full bg-white/10" />
                          <span className="w-3 h-3 rounded-full bg-white/10" />
                        </div>
                        <span className="text-xs font-sans text-white/30 flex-1 text-center">
                          {domain.websiteUrl}
                        </span>
                      </div>
                      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                        <iframe
                          src={domain.websiteUrl}
                          className="w-full h-full border-0"
                          title={`${domain.name} live website preview — web design by Evoke Studio`}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── What's included section ────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#fafafa] border-t border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="text-xs font-sans font-semibold text-[#737373] uppercase tracking-[0.2em] mb-4">
              Packages
            </p>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] mb-4">
              Every domain. Three ways to acquire.
            </h2>
            <p className="text-base font-sans text-[#737373] max-w-xl leading-relaxed mb-16">
              Buy the name alone, or bundle it with brand identity and a
              ready-to-launch website — all from one studio.
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Domain Only",
                desc: "You get the .com, cleanly transferred to your registrar. Full DNS support included.",
                items: ["Domain transfer", "Full ownership", "DNS configuration"],
              },
              {
                name: "Domain + Brand",
                desc: "Domain plus a professional logo and brand identity system ready for production.",
                items: ["Domain transfer", "Custom logo design", "Colour palette & typography", "Vector files (AI, EPS, SVG)", "Brand guidelines"],
                highlight: true,
              },
              {
                name: "Domain + Brand + Website",
                desc: "The complete package: domain, brand identity, and a launch-ready marketing website.",
                items: ["Domain transfer", "Full brand identity", "5-page marketing website", "SEO-ready structure", "Ready to launch"],
              },
            ].map((pkg) => (
              <SectionReveal key={pkg.name}>
                <div
                  className={`p-8 lg:p-10 border h-full flex flex-col ${
                    pkg.highlight
                      ? "border-[#0a0a0a] bg-[#0a0a0a]"
                      : "border-[#e5e5e5] bg-white"
                  }`}
                >
                  {pkg.highlight && (
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-white/40 mb-4 block">
                      Most popular
                    </span>
                  )}
                  <h3
                    className={`text-xl font-display font-bold tracking-[-0.02em] mb-3 ${
                      pkg.highlight ? "text-white" : "text-[#0a0a0a]"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-sm font-sans leading-relaxed mb-8 ${
                      pkg.highlight ? "text-white/60" : "text-[#737373]"
                    }`}
                  >
                    {pkg.desc}
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span
                          className={`text-sm ${
                            pkg.highlight ? "text-white/30" : "text-[#b4b4b4]"
                          }`}
                        >
                          ✓
                        </span>
                        <span
                          className={`text-sm font-sans ${
                            pkg.highlight ? "text-white/70" : "text-[#0a0a0a]"
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
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] mb-6">
              Interested in a domain?
            </h2>
            <p className="text-base font-sans text-[#737373] max-w-md mx-auto leading-relaxed mb-10">
              Enquire about any domain or bundle. We respond within one business
              day with full details, pricing, and next steps.
            </p>
            <Link
              href="/contact?inquiry=domain"
              className="inline-block bg-[#0a0a0a] text-white font-sans font-semibold text-sm px-8 py-4 hover:bg-[#262626] transition-colors"
            >
              Enquire About a Domain
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
