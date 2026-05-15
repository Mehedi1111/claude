"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items = [] }: { items?: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="not-prose my-8 border-t border-[#e5e5e5]">
      {items.map((item, i) => (
        <div key={i} className="border-b border-[#e5e5e5]">
          <button
            className="w-full flex items-start justify-between gap-6 py-5 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-[15px] font-sans font-semibold text-[#0a0a0a] leading-snug group-hover:text-[#0a0a0a]/70 transition-colors">
              {item.q}
            </span>
            <motion.span
              className="text-[#737373] text-lg shrink-0 mt-0.5"
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.25 }}
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-[15px] font-sans text-[#737373] leading-relaxed pr-8">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
