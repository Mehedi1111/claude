"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
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
              className="relative aspect-[4/3] overflow-hidden cursor-col-resize select-none bg-[#e5e5e5]"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* Before: blurry/pixelated panel */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#d4d4d4]">
                <div className="relative">
                  <div
                    className="w-48 h-48 filter blur-[3px]"
                    style={{
                      background: `
                        repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(0,0,0,0.08) 8px, rgba(0,0,0,0.08) 9px),
                        repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.08) 8px, rgba(0,0,0,0.08) 9px)
                      `,
                    }}
                  >
                    <svg viewBox="0 0 200 200" className="w-full h-full opacity-60">
                      <rect x="60" y="40" width="80" height="80" fill="#555" opacity="0.7" rx="4" />
                      <rect x="75" y="140" width="50" height="20" fill="#555" opacity="0.5" rx="2" />
                      <circle cx="100" cy="80" r="25" fill="#333" opacity="0.4" />
                    </svg>
                  </div>
                  <p className="absolute bottom-[-28px] left-0 right-0 text-center text-[10px] font-sans text-[#737373] uppercase tracking-[0.15em]">
                    AI Raster Output
                  </p>
                </div>
              </div>

              {/* After: clean vector panel */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-white"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <div className="relative">
                  <div className="w-48 h-48">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <rect x="60" y="40" width="80" height="80" fill="#0a0a0a" rx="2" />
                      <rect x="75" y="140" width="50" height="18" fill="#0a0a0a" rx="1" />
                      <circle cx="100" cy="80" r="22" fill="white" />
                      <path
                        d="M88 80 L96 88 L114 70"
                        stroke="#0a0a0a"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <p className="absolute bottom-[-28px] left-0 right-0 text-center text-[10px] font-sans text-[#737373] uppercase tracking-[0.15em]">
                    Precision Vector
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                className="absolute top-0 bottom-0 w-px bg-[#0a0a0a] z-10"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-[#0a0a0a] rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4 2L1 6L4 10M8 2L11 6L8 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute bottom-4 left-4 text-[10px] font-sans font-semibold text-[#737373] uppercase tracking-[0.15em]">
                Before
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] font-sans font-semibold text-[#737373] uppercase tracking-[0.15em]">
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
