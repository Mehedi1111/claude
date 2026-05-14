"use client";

import { processSteps } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Process() {
  return (
    <section className="py-24 lg:py-36 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <SectionReveal>
            <p className="text-xs font-sans font-semibold text-white/30 uppercase tracking-[0.2em] mb-6">
              How It Works
            </p>
          </SectionReveal>
          <h2 className="text-[clamp(36px,5vw,72px)] font-display font-bold text-white tracking-[-0.03em] leading-[1]">
            <AnimatedText text="Four steps" />
            <br />
            <AnimatedText text="to precision." delay={0.1} />
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {processSteps.map((step, i) => (
            <SectionReveal key={step.number} delay={i * 0.1}>
              <div
                className={`py-14 sm:py-16 lg:py-20 px-0 sm:pr-10 lg:px-10
                  ${i < processSteps.length - 1 ? "lg:border-r border-white/10" : ""}
                  ${i % 2 === 0 && i + 1 < processSteps.length ? "md:border-r md:border-white/10 lg:border-r-0" : ""}
                  ${i >= 2 ? "md:border-t md:border-white/10 lg:border-t-0" : ""}
                  ${i > 0 ? "border-t lg:border-t-0 border-white/10" : ""}
                  ${i === 0 ? "lg:pl-0" : ""}
                  ${i === processSteps.length - 1 ? "lg:pr-0" : ""}
                `}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[11px] font-sans font-semibold text-white/25 tracking-[0.15em]">
                    {step.number}
                  </span>
                  <div className="flex-1 h-px bg-white/10 max-w-[40px]" />
                </div>
                <h3 className="text-[22px] sm:text-2xl lg:text-[26px] font-display font-bold text-white tracking-[-0.03em] leading-tight mb-5">
                  {step.title}
                </h3>
                <p className="text-sm font-sans text-white/45 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
