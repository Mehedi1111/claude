"use client";

import { testimonials } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#0a0a0a] text-xs">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-36 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <SectionReveal>
            <p className="text-xs font-sans font-semibold text-[#0a0a0a]/40 uppercase tracking-[0.2em] mb-6">
              Client Voices
            </p>
          </SectionReveal>
          <h2 className="text-[clamp(36px,5vw,72px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1]">
            <AnimatedText text="Trusted by" />
            <br />
            <AnimatedText text="founders." delay={0.08} />
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {testimonials.slice(0, 4).map((t, i) => (
            <SectionReveal key={t.id} delay={i * 0.1}>
              <div
                className={`p-8 lg:p-10 ${
                  i === 0 ? "md:col-span-2 bg-[#0a0a0a] text-white" : "bg-white"
                }`}
              >
                <Stars count={t.rating} />
                <blockquote
                  className={`mt-6 text-lg lg:text-xl font-sans leading-relaxed ${
                    i === 0 ? "text-white/80" : "text-[#0a0a0a]"
                  } ${i === 0 ? "lg:text-2xl" : ""}`}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className={`mt-8 pt-6 border-t ${i === 0 ? "border-white/10" : "border-[#e5e5e5]"}`}>
                  <p
                    className={`text-sm font-sans font-semibold ${
                      i === 0 ? "text-white" : "text-[#0a0a0a]"
                    }`}
                  >
                    {t.author}
                  </p>
                  <p
                    className={`text-xs font-sans mt-0.5 ${
                      i === 0 ? "text-white/40" : "text-[#737373]"
                    }`}
                  >
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
