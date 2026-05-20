"use client";

import { useState } from "react";
import Image from "next/image";
import type { ShowcaseItem } from "@/lib/showcase";

function TransformPair({ item, index }: { item: ShowcaseItem; index: number }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + item.afterVariations.length) % item.afterVariations.length);
  const next = () => setActive((a) => (a + 1) % item.afterVariations.length);

  const hasMultiple = item.afterVariations.length > 1;

  return (
    <div className="border-t border-[#e5e5e5] pt-10 pb-10">
      {/* Project meta */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[11px] font-sans font-medium text-[#0a0a0a]/25 tracking-[0.1em]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="w-px h-3 bg-[#e5e5e5]" />
        <span className="text-[11px] font-sans font-semibold text-[#0a0a0a] tracking-[-0.01em]">
          {item.client}
        </span>
        <span className="text-[10px] font-sans text-[#737373] border border-[#e5e5e5] px-2 py-0.5">
          {item.industry}
        </span>
      </div>

      {/* Before / After pair */}
      <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6">

        {/* Before */}
        <div className="flex-1">
          <div className="relative bg-[#fafafa] border border-[#e5e5e5] aspect-square flex items-center justify-center overflow-hidden">
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.18em] text-[#737373] bg-white border border-[#e5e5e5] px-2 py-1">
                Before
              </span>
            </div>
            <Image
              src={item.beforeSrc}
              alt={`${item.client} — original AI logo`}
              fill
              className="object-contain p-8"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            />
          </div>
          <p className="mt-2.5 text-[12px] font-sans text-[#737373] leading-snug">
            {item.beforeSubtitle}
          </p>
        </div>

        {/* Arrow */}
        <div className="hidden sm:flex items-center justify-center shrink-0 self-center">
          <span className="text-[22px] text-[#0a0a0a]/15 font-light select-none">→</span>
        </div>
        <div className="flex sm:hidden items-center justify-center">
          <span className="text-[22px] text-[#0a0a0a]/15 font-light rotate-90 select-none">→</span>
        </div>

        {/* After */}
        <div className="flex-1">
          <div className="relative bg-white border border-[#e5e5e5] aspect-square flex items-center justify-center overflow-hidden group">
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.18em] text-[#0a0a0a] bg-white border border-[#0a0a0a] px-2 py-1">
                After
              </span>
            </div>

            <Image
              src={item.afterVariations[active].src}
              alt={`${item.client} — ${item.afterVariations[active].label}`}
              fill
              className="object-contain p-8 transition-opacity duration-200"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            />

            {/* Prev / Next (only when multiple variations) */}
            {hasMultiple && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous variation"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-[#e5e5e5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#0a0a0a] hover:border-[#0a0a0a] hover:text-white z-10"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M6.5 1.5L3 5l3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next variation"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-[#e5e5e5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#0a0a0a] hover:border-[#0a0a0a] hover:text-white z-10"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M3.5 1.5L7 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </>
            )}
          </div>

          <div className="mt-2.5 flex items-center justify-between">
            <p className="text-[12px] font-sans text-[#0a0a0a] font-medium">
              {item.afterVariations[active].label}
            </p>
            {hasMultiple && (
              <div className="flex items-center gap-1.5">
                {item.afterVariations.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Variation ${i + 1}`}
                    className={`w-1.5 h-1.5 transition-colors ${
                      i === active ? "bg-[#0a0a0a]" : "bg-[#e5e5e5] hover:bg-[#737373]"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

interface LogoShowcaseProps {
  items: ShowcaseItem[];
  columns?: 1 | 2;
}

export default function LogoShowcase({ items, columns = 1 }: LogoShowcaseProps) {
  if (!items.length) return null;

  if (columns === 2) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-x-16">
        {items.map((item, i) => (
          <TransformPair key={item.id} item={item} index={i} />
        ))}
      </div>
    );
  }

  return (
    <div>
      {items.map((item, i) => (
        <TransformPair key={item.id} item={item} index={i} />
      ))}
    </div>
  );
}
