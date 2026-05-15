"use client";

import { testimonials } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#0a0a0a] text-[11px]">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials.slice(0, 4);

  return (
    <section className="py-24 lg:py-36 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16 lg:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <SectionReveal>
              <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-5">
                Client Voices
              </p>
            </SectionReveal>
            <h2 className="text-[clamp(32px,4.5vw,64px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1]">
              <AnimatedText text="Trusted by" />
              <br />
              <AnimatedText text="founders." delay={0.08} />
            </h2>
          </div>
          <SectionReveal delay={0.2}>
            <p className="text-sm font-sans text-[#737373] max-w-[200px] leading-relaxed">
              500+ brands rebuilt. Rated 5.0 on Clutch.
            </p>
          </SectionReveal>
        </div>

        {/* Featured quote — full width */}
        <SectionReveal>
          <div className="bg-[#0a0a0a] p-8 sm:p-10 lg:p-16 mb-4 group">
            <Stars count={featured.rating} />
            <blockquote className="mt-6 sm:mt-8 text-[clamp(20px,2.8vw,34px)] font-display font-bold text-white tracking-[-0.03em] leading-[1.2] mb-8 sm:mb-10 max-w-4xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-white/10 flex items-center justify-center shrink-0">
                <span className="text-[11px] font-display font-bold text-white/60">
                  {featured.author[0]}
                </span>
              </div>
              <div>
                <p className="text-sm font-sans font-semibold text-white">
                  {featured.author}
                </p>
                <p className="text-xs font-sans text-white/40 mt-0.5">
                  {featured.title}, {featured.company}
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Remaining 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.slice(0, 3).map((t, i) => (
            <SectionReveal key={t.id} delay={i * 0.08}>
              <div className="bg-white p-7 sm:p-8 h-full flex flex-col">
                <Stars count={t.rating} />
                <blockquote className="mt-5 text-[15px] sm:text-base font-sans text-[#0a0a0a] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-5 border-t border-[#f0f0f0] flex items-center gap-3">
                  <div className="w-7 h-7 bg-[#f0f0f0] flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-display font-bold text-[#737373]">
                      {t.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-sans font-semibold text-[#0a0a0a]">{t.author}</p>
                    <p className="text-[11px] font-sans text-[#737373] mt-0.5">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
