import Link from "next/link";
import Image from "next/image";

const aiServices = [
  { label: "AI Logo Vectorization", href: "/services/ai-logo-vectorization" },
  { label: "AI Logo Cleanup", href: "/services/ai-logo-cleanup" },
  { label: "Typography Reconstruction", href: "/services/typography-reconstruction" },
  { label: "SVG Conversion", href: "/services/svg-conversion" },
  { label: "Brand System Rebuild", href: "/services/brand-system-rebuild" },
];

const traditionalServices = [
  { label: "Logo Design", href: "/services/logo-design" },
  { label: "Brand Identity", href: "/services/brand-identity" },
  { label: "Business Stationery", href: "/services/business-stationery" },
  { label: "Brand Guidelines", href: "/services/brand-guidelines" },
  { label: "Visual Identity System", href: "/services/visual-identity-system" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Journal", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">

      {/* === TOP CTA BLOCK === */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <p className="text-[11px] font-sans font-semibold text-white/25 uppercase tracking-[0.25em] mb-8">
            Let&apos;s work together
          </p>
          <h2 className="text-[clamp(44px,8vw,120px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.88] mb-10">
            Start your<br />project today.
          </h2>
          <a
            href="mailto:work@madebyevoke.com"
            className="group inline-flex items-center gap-4"
          >
            <span className="text-[clamp(18px,3vw,40px)] font-display font-medium text-white/30 group-hover:text-white transition-colors duration-400 tracking-[-0.02em]">
              work@madebyevoke.com
            </span>
            <span className="text-white/20 group-hover:text-white transition-colors duration-400 text-2xl translate-y-px">
              ↗
            </span>
          </a>

          {/* Clutch rating */}
          <a
            href="https://clutch.co/profile/evoke"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex items-center gap-4 border border-white/10 px-5 py-3.5 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => (
                <span key={s} className="text-white/60 text-sm group-hover:text-white/90 transition-colors">★</span>
              ))}
            </div>
            <span className="text-sm font-sans font-medium text-white/50 group-hover:text-white/80 transition-colors">
              5.0 on Clutch
            </span>
            <span className="text-[10px] font-sans text-white/20 group-hover:text-white/40 transition-colors uppercase tracking-[0.15em]">
              View Reviews ↗
            </span>
          </a>
        </div>
      </div>

      {/* === MAIN LINK GRID === */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-14 lg:py-18">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

            {/* Brand column */}
            <div className="col-span-2 lg:col-span-1">
              <div className="relative mb-5" style={{ width: 100, height: 28 }}>
                <Image
                  src="https://madebyevoke.com/wp-content/uploads/2023/07/EVOKE-NEW-LOGO-WHITE-1.png"
                  alt="Evoke"
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
              <p className="text-[13px] font-sans text-white/35 leading-relaxed max-w-[200px] mb-6">
                From pixel-locked AI concepts to infinite vector authority.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com/MadeByEvoke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-sans font-medium text-white/30 hover:text-white transition-colors uppercase tracking-[0.1em]"
                >
                  X / Twitter
                </a>
                <a
                  href="https://www.linkedin.com/company/madebyevoke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-sans font-medium text-white/30 hover:text-white transition-colors uppercase tracking-[0.1em]"
                >
                  LinkedIn
                </a>
                <a
                  href="https://clutch.co/profile/evoke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-sans font-medium text-white/30 hover:text-white transition-colors uppercase tracking-[0.1em]"
                >
                  Clutch
                </a>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <p className="text-[10px] font-sans font-semibold text-white/20 uppercase tracking-[0.2em] mb-5">
                AI Services
              </p>
              <ul className="space-y-3">
                {aiServices.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-sans text-white/40 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Traditional */}
            <div>
              <p className="text-[10px] font-sans font-semibold text-white/20 uppercase tracking-[0.2em] mb-5">
                Branding
              </p>
              <ul className="space-y-3">
                {traditionalServices.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-sans text-white/40 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-[10px] font-sans font-semibold text-white/20 uppercase tracking-[0.2em] mb-5">
                Company
              </p>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-sans text-white/40 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact block */}
            <div>
              <p className="text-[10px] font-sans font-semibold text-white/20 uppercase tracking-[0.2em] mb-5">
                Contact
              </p>
              <a
                href="mailto:work@madebyevoke.com"
                className="text-[13px] font-sans text-white/50 hover:text-white transition-colors block mb-4"
              >
                work@madebyevoke.com
              </a>
              <p className="text-[11px] font-sans text-white/20 mb-2">Response time</p>
              <p className="text-[13px] font-sans text-white/40">Within 1 business day</p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[12px] font-sans font-semibold text-[#0a0a0a] bg-white px-4 py-2.5 hover:bg-white/90 transition-colors"
                >
                  Get a Quote →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === BOTTOM BAR === */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-[11px] font-sans text-white/20">
          © {new Date().getFullYear()} Evoke Studio. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="text-[11px] font-sans text-white/20 hover:text-white/50 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[11px] font-sans text-white/20 hover:text-white/50 transition-colors">
            Terms
          </Link>
          <span className="text-[11px] font-sans text-white/10">
            Crafted with precision.
          </span>
        </div>
      </div>
    </footer>
  );
}
