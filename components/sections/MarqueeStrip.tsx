"use client";

import { marqueeItems } from "@/lib/data";

interface MarqueeStripProps {
  dark?: boolean;
}

export default function MarqueeStrip({ dark = false }: MarqueeStripProps) {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className={`overflow-hidden border-y py-4 ${
        dark
          ? "bg-[#0a0a0a] border-white/10"
          : "bg-white border-[#e5e5e5]"
      }`}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 mx-8">
            <span
              className={`text-xs font-sans font-semibold tracking-[0.2em] uppercase ${
                dark ? "text-white/30" : "text-[#0a0a0a]/30"
              }`}
            >
              {item}
            </span>
            <span
              className={`text-[6px] ${dark ? "text-white/20" : "text-[#0a0a0a]/20"}`}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
