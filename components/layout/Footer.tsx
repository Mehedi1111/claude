import Link from "next/link";

const aiServices = [
  { label: "AI Logo Vectorization", href: "/services/ai-logo-vectorization" },
  { label: "AI Logo Cleanup", href: "/services/ai-logo-cleanup" },
  { label: "Typography Reconstruction", href: "/services/typography-reconstruction" },
  { label: "SVG Conversion", href: "/services/svg-conversion" },
  { label: "Brand System Rebuild", href: "/services/brand-system-rebuild" },
];

const brandServices = [
  { label: "Logo Design", href: "/services/logo-design" },
  { label: "Brand Identity", href: "/services/brand-identity" },
  { label: "Visual Identity System", href: "/services/visual-identity-system" },
  { label: "Business Stationery", href: "/services/business-stationery" },
  { label: "Brand Guidelines", href: "/services/brand-guidelines" },
  { label: "Web Design & Dev", href: "/services/web-design-development" },
  { label: "Social Media Design", href: "/services/social-media-management" },
];

const popularPages = [
  { label: "Logo Design Service", href: "/lp/logo-design-service" },
  { label: "Brand Identity Design", href: "/lp/brand-identity-design" },
  { label: "Startup Branding", href: "/lp/startup-branding" },
  { label: "Small Business Branding", href: "/lp/small-business-branding" },
  { label: "Branding Agency USA", href: "/lp/branding-agency-usa" },
  { label: "Logo Design Agency", href: "/lp/logo-design-agency" },
  { label: "Branding Agency UK", href: "/lp/branding-agency-uk" },
  { label: "Branding Agency Australia", href: "/lp/branding-agency-australia" },
  { label: "Rebranding Agency", href: "/lp/rebranding-agency" },
];

const morePages = [
  { label: "Logo Redesign Service", href: "/lp/logo-redesign-service" },
  { label: "Web Design for Startups", href: "/lp/web-design-for-startups" },
  { label: "AI Logo Cleanup", href: "/lp/ai-logo-cleanup" },
  { label: "Web Design Agency", href: "/lp/web-design-agency" },
  { label: "Brand Identity Package", href: "/lp/brand-identity-package" },
  { label: "SaaS Branding Agency", href: "/lp/saas-branding-agency" },
  { label: "B2B Branding Agency", href: "/lp/b2b-branding-agency" },
  { label: "E-commerce Branding", href: "/lp/ecommerce-branding-agency" },
  { label: "Affordable Logo Design", href: "/lp/affordable-logo-design" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Domains", href: "/domains" },
  { label: "Journal", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const socials = [
  { label: "Behance", href: "https://www.behance.net/mh62221352f0fFF" },
  { label: "Dribbble", href: "https://dribbble.com/madebyevoke" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/madebyevoke/" },
  { label: "X / Twitter", href: "https://x.com/MadeByEvoke" },
  { label: "Clutch", href: "https://clutch.co/profile/evoke" },
];

const geoMarkets = ["USA", "United Kingdom", "Canada", "Australia"];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">

      {/* ── Top CTA ── */}
      <div className="relative border-b border-white/[0.06] overflow-hidden">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-20">

            {/* Headline */}
            <div className="flex-1">
              <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-white/20 mb-7">
                New project?
              </p>
              <h2 className="text-[clamp(48px,8vw,110px)] font-display font-bold text-white tracking-[-0.045em] leading-[0.88]">
                Let&apos;s build<br />something<br />precise.
              </h2>
            </div>

            {/* Actions */}
            <div className="flex flex-col items-start lg:items-end gap-5 lg:pb-2">
              <a
                href="mailto:work@madebyevoke.com"
                className="group flex items-center gap-3"
              >
                <span className="text-[clamp(15px,2vw,22px)] font-display font-medium text-white/30 group-hover:text-white transition-colors duration-300 tracking-[-0.02em]">
                  work@madebyevoke.com
                </span>
                <span className="w-9 h-9 shrink-0 border border-white/10 flex items-center justify-center text-white/30 text-sm group-hover:bg-white group-hover:text-[#0a0a0a] group-hover:border-white transition-all duration-300">
                  ↗
                </span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[13px] font-sans font-semibold text-[#0a0a0a] bg-white px-6 py-4 hover:bg-white/90 transition-colors"
              >
                Start a Project →
              </Link>

              <a
                href="https://clutch.co/profile/evoke"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-white/40 text-xs group-hover:text-white/70 transition-colors">★</span>
                  ))}
                </div>
                <span className="text-[12px] font-sans text-white/25 group-hover:text-white/50 transition-colors">
                  5.0 on Clutch
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Geo markets strip ── */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-3.5 flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-white/15 shrink-0">
            Serving clients in
          </span>
          <div className="flex flex-wrap gap-2">
            {geoMarkets.map((loc) => (
              <span
                key={loc}
                className="text-[10px] font-sans font-medium text-white/30 border border-white/[0.08] px-2.5 py-1 tracking-wide"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main link grid ── */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-6">

            {/* Brand column */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-1 lg:pr-6">
              <Link
                href="/"
                className="inline-block font-display font-bold text-[20px] tracking-[-0.055em] text-white mb-4"
              >
                EVOKE
              </Link>
              <p className="text-[12px] font-sans text-white/25 leading-relaxed mb-6 max-w-[200px]">
                Precision brand design and web development for modern businesses worldwide.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-sans text-white/20 hover:text-white/60 transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* AI Services */}
            <div>
              <p className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-white/15 mb-5">
                AI Services
              </p>
              <ul className="space-y-3">
                {aiServices.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[12px] font-sans text-white/30 hover:text-white/80 transition-colors leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brand Design */}
            <div>
              <p className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-white/15 mb-5">
                Brand Design
              </p>
              <ul className="space-y-3">
                {brandServices.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[12px] font-sans text-white/30 hover:text-white/80 transition-colors leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Pages col 1 */}
            <div>
              <p className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-white/15 mb-5">
                Popular
              </p>
              <ul className="space-y-3">
                {popularPages.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[12px] font-sans text-white/30 hover:text-white/80 transition-colors leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Pages col 2 */}
            <div>
              <p className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-white/15 mb-5">
                More
              </p>
              <ul className="space-y-3">
                {morePages.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[12px] font-sans text-white/30 hover:text-white/80 transition-colors leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-white/15 mb-5">
                Company
              </p>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[12px] font-sans text-white/30 hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Giant EVOKE wordmark ── */}
      <div className="overflow-hidden select-none px-4 sm:px-6 pt-6 pb-0">
        <p
          className="font-display font-bold text-white/[0.035] tracking-[-0.05em] leading-none"
          style={{ fontSize: "clamp(100px, 19vw, 280px)" }}
          aria-hidden="true"
        >
          EVOKE
        </p>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-[11px] font-sans text-white/15">
            © {new Date().getFullYear()} Evoke Studio. All rights reserved.
          </p>
          <p className="text-[11px] font-sans text-white/10 hidden sm:block">
            Precision-crafted for USA · UK · Canada · Australia
          </p>
        </div>
      </div>

    </footer>
  );
}
