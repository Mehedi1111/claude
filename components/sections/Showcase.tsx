"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";

export default function Showcase() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const pos = Math.min(Math.max(((clientX - left) / width) * 100, 5), 95);
    setSliderPos(pos);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  return (
    <section className="py-24 lg:py-36 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text */}
          <div>
            <SectionReveal>
              <p className="text-xs font-sans font-semibold text-[#0a0a0a]/40 uppercase tracking-[0.2em] mb-6">
                The Transformation
              </p>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="text-[clamp(36px,4vw,56px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1] mb-6">
                The gap between
                <br />
                <em className="not-italic text-[#0a0a0a]/40">AI output</em>
                <br />
                and brand asset.
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="text-base font-sans text-[#404040] leading-relaxed max-w-sm mb-8">
                AI tools generate stunning visual concepts. But the files they produce
                are raster-based, technically flawed, and unsuitable for professional use.
                We bridge that gap — manually.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-2xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em]">Before</p>
                  <p className="text-xs font-sans text-[#737373] mt-1">AI-generated raster</p>
                </div>
                <div className="w-8 h-px bg-[#d4d4d4]" />
                <div>
                  <p className="text-2xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em]">After</p>
                  <p className="text-xs font-sans text-[#737373] mt-1">Precision vector</p>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Comparison slider */}
          <SectionReveal delay={0.2} direction="none">
            <div
              ref={containerRef}
              className="relative aspect-square overflow-hidden cursor-col-resize select-none"
              style={{ background: "#f5ede0" }}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* Before image — full background */}
              <Image
                src="/before-logo-nael.jpg"
                alt="Before — AI-generated raster logo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* After image — revealed from the left by slider */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <Image
                  src="/after-logo-nael.jpg"
                  alt="After — Precision vector rebuild"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Divider line */}
              <div
                className="absolute top-0 bottom-0 w-px bg-white/70 z-10 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              />

              {/* Drag handle */}
              <div
                className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing"
                style={{ left: `${sliderPos}%` }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2L2 7L5 12M9 2L12 7L9 12" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Labels */}
              <div className="absolute bottom-4 left-4 z-10 bg-black/35 backdrop-blur-sm text-white text-[10px] font-sans font-semibold uppercase tracking-[0.15em] px-2.5 py-1">
                Before
              </div>
              <div className="absolute bottom-4 right-4 z-10 bg-black/35 backdrop-blur-sm text-white text-[10px] font-sans font-semibold uppercase tracking-[0.15em] px-2.5 py-1">
                After
              </div>
            </div>

            <p className="text-xs font-sans text-[#737373] mt-4 text-center">
              Drag to compare ← →
            </p>
          </SectionReveal>

        </div>
      </div>
    </section>
  );
}
