"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

export default function BeforeAfter({
  beforeLabel = "Before",
  afterLabel = "After",
  beforeCaption,
  afterCaption,
  beforeSrc,
  afterSrc,
  bgBefore = "#d4d4d4",
  bgAfter = "#ffffff",
}: {
  beforeLabel?: string;
  afterLabel?: string;
  beforeCaption?: string;
  afterCaption?: string;
  beforeSrc?: string;
  afterSrc?: string;
  bgBefore?: string;
  bgAfter?: string;
}) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    if (!ref.current) return;
    const { left, width } = ref.current.getBoundingClientRect();
    setPos(Math.min(95, Math.max(5, ((clientX - left) / width) * 100)));
  }, []);

  return (
    <div className="not-prose my-10">
      <div
        ref={ref}
        className="relative aspect-square sm:aspect-[4/3] overflow-hidden cursor-col-resize select-none rounded-sm"
        style={{ background: bgBefore }}
        onMouseDown={() => setDragging(true)}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onMouseMove={(e) => dragging && update(e.clientX)}
        onTouchMove={(e) => update(e.touches[0].clientX)}
      >
        {/* Before panel */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: bgBefore }}>
          {beforeSrc ? (
            <Image
              src={beforeSrc}
              alt={beforeCaption || beforeLabel}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          ) : (
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-3 opacity-40">
                <svg viewBox="0 0 128 128" className="w-full h-full filter blur-[2px]">
                  <rect x="24" y="16" width="80" height="80" fill="#555" rx="4" opacity="0.7" />
                  <rect x="40" y="104" width="48" height="16" fill="#555" rx="2" opacity="0.5" />
                  <circle cx="64" cy="56" r="28" fill="#333" opacity="0.4" />
                </svg>
              </div>
              <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#737373]">
                {beforeCaption || "AI Raster Output"}
              </p>
            </div>
          )}
        </div>

        {/* After panel */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, background: bgAfter }}
        >
          {afterSrc ? (
            <Image
              src={afterSrc}
              alt={afterCaption || afterLabel}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          ) : (
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-3">
                <svg viewBox="0 0 128 128" className="w-full h-full">
                  <rect x="24" y="16" width="80" height="80" fill="#0a0a0a" rx="2" />
                  <rect x="40" y="104" width="48" height="14" fill="#0a0a0a" rx="1" />
                  <circle cx="64" cy="56" r="24" fill="white" />
                  <path d="M54 56L61 63L76 47" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#737373]">
                {afterCaption || "Precision Vector"}
              </p>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="absolute top-0 bottom-0 w-px bg-white z-10" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M4 2L1 7L4 12M10 2L13 7L10 12" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Corner labels */}
        <span className="absolute bottom-3 left-3 text-[10px] font-sans font-bold text-white uppercase tracking-[0.15em] z-10 drop-shadow-md">
          {beforeLabel}
        </span>
        <span className="absolute bottom-3 right-3 text-[10px] font-sans font-bold text-white uppercase tracking-[0.15em] z-10 drop-shadow-md">
          {afterLabel}
        </span>
      </div>
      <p className="text-center text-[12px] font-sans text-[#b4b4b4] mt-3">
        Drag to compare
      </p>
    </div>
  );
}
