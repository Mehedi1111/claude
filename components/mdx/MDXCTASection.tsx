import Link from "next/link";

export default function MDXCTASection({
  headline = "Ready to transform your AI logo?",
  description = "Send us your file and we'll send back a production-ready vector brand asset within 24–48 hours.",
  cta = "Start a Project",
  href = "/contact",
  secondary,
  secondaryHref,
}: {
  headline?: string;
  description?: string;
  cta?: string;
  href?: string;
  secondary?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="not-prose my-12 bg-[#0a0a0a] px-8 py-10 sm:px-10 sm:py-12 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
      <div className="max-w-md">
        <p className="text-xl sm:text-2xl font-display font-bold text-white tracking-[-0.03em] leading-snug mb-3">
          {headline}
        </p>
        <p className="text-[14px] font-sans text-white/50 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-3 shrink-0">
        <Link
          href={href}
          className="inline-flex items-center justify-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] bg-white px-7 py-3.5 hover:bg-white/90 transition-colors whitespace-nowrap"
        >
          {cta}
        </Link>
        {secondary && secondaryHref && (
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center gap-2 text-sm font-sans font-medium text-white/50 border border-white/15 px-7 py-3.5 hover:text-white hover:border-white/30 transition-all whitespace-nowrap"
          >
            {secondary}
          </Link>
        )}
      </div>
    </div>
  );
}
