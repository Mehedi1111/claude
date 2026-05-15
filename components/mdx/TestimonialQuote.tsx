export default function TestimonialQuote({
  quote,
  author,
  role,
  company,
  rating = 5,
}: {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  rating?: number;
}) {
  return (
    <div className="not-prose my-10 bg-[#0a0a0a] px-8 py-10 sm:px-10 sm:py-12">
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-white/40 text-[12px]">★</span>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-[clamp(18px,2.5vw,26px)] font-display font-bold text-white tracking-[-0.02em] leading-[1.25] mb-8">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-6 border-t border-white/10">
        <div className="w-8 h-8 bg-white/10 flex items-center justify-center shrink-0">
          <span className="text-[11px] font-display font-bold text-white/50">
            {author[0]}
          </span>
        </div>
        <div>
          <p className="text-sm font-sans font-semibold text-white">{author}</p>
          {(role || company) && (
            <p className="text-[12px] font-sans text-white/40 mt-0.5">
              {[role, company].filter(Boolean).join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
