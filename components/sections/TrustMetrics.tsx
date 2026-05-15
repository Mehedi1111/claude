"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import gsap from "gsap";
import { trustMetrics } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";

function CountUp({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current || !ref.current) return;
    hasAnimated.current = true;
    const numericValue = parseFloat(value);
    const isDecimal = value.includes(".");
    const counter = { val: 0 };
    gsap.to(counter, {
      val: numericValue,
      duration: 2.6,
      ease: "power3.out",
      onUpdate: function () {
        if (ref.current) {
          ref.current.textContent = isDecimal
            ? counter.val.toFixed(1)
            : Math.floor(counter.val).toString();
        }
      },
    });
  }, [isInView, value]);

  return <span ref={ref}>0</span>;
}

export default function TrustMetrics() {
  return (
    <section className="bg-white border-b border-[#e5e5e5] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#e5e5e5]">
          {trustMetrics.map((metric, i) => (
            <SectionReveal key={i} delay={i * 0.08}>
              <div
                className={`px-5 sm:px-6 lg:px-10 py-12 sm:py-14 lg:py-20 group ${
                  i >= 2 ? "border-t border-[#e5e5e5] lg:border-t-0" : ""
                }`}
              >
                {/* Number */}
                <p className="text-[clamp(40px,6vw,76px)] font-display font-bold text-[#0a0a0a] tracking-[-0.05em] leading-none tabular-nums mb-4 transition-transform duration-500 group-hover:-translate-y-1">
                  <CountUp value={metric.value} suffix={metric.suffix} />
                  <span className="text-[#b4b4b4]">{metric.suffix}</span>
                </p>

                {/* Divider line */}
                <div className="w-8 h-px bg-[#e5e5e5] mb-4 transition-all duration-500 group-hover:w-12 group-hover:bg-[#0a0a0a]" />

                {/* Label */}
                <p className="text-[10px] sm:text-[11px] font-sans font-semibold text-[#a3a3a3] uppercase tracking-[0.15em] leading-tight">
                  {metric.label}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
