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

    // gsap.to — animate FROM 0 TO the real number (count UP)
    gsap.to(counter, {
      val: numericValue,
      duration: 2.4,
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
    <section className="py-16 sm:py-20 lg:py-28 bg-white border-b border-[#e5e5e5] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((metric, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div
                className={`py-8 sm:py-10 lg:py-14 px-5 sm:px-6 lg:px-10
                  ${i % 2 === 0 && i + 1 < trustMetrics.length ? "border-r border-[#e5e5e5]" : ""}
                  ${i >= 2 ? "border-t border-[#e5e5e5] lg:border-t-0" : ""}
                  ${i > 0 && i % 2 !== 0 && i < 3 ? "border-r border-[#e5e5e5]" : ""}
                  ${i === 1 || i === 3 ? "" : ""}
                `}
              >
                <p className="text-[clamp(32px,5vw,60px)] font-display font-bold text-[#0a0a0a] tracking-[-0.04em] leading-none tabular-nums">
                  <CountUp value={metric.value} suffix={metric.suffix} />
                  <span className="text-[#737373]">{metric.suffix}</span>
                </p>
                <p className="text-[11px] sm:text-xs font-sans font-medium text-[#737373] uppercase tracking-[0.12em] sm:tracking-[0.15em] mt-2 sm:mt-3 leading-tight">
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
