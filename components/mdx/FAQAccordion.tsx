"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items = [] }: { items?: FAQItem[] }) {
  const [open, setOpen] = useState<Set<number>>(
    new Set(items.map((_, i) => i))
  );

  function toggle(i: number) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <div className="not-prose my-8 border-t border-[#e5e5e5]">
      {items.map((item, i) => (
        <div key={i} className="border-b border-[#e5e5e5]">
          <button
            className="w-full flex items-start justify-between gap-6 py-5 text-left group"
            onClick={() => toggle(i)}
          >
            <span className="text-[15px] font-sans font-semibold text-[#0a0a0a] leading-snug group-hover:text-[#0a0a0a]/70 transition-colors">
              {item.q}
            </span>
            <span
              className="text-[#737373] text-lg shrink-0 mt-0.5 transition-transform duration-200"
              style={{ transform: open.has(i) ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>
          {open.has(i) && (
            <p className="pb-5 text-[15px] font-sans text-[#737373] leading-relaxed pr-8">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
