"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-[#e5e5e5]">
      {faqs.map((faq, i) => (
        <SectionReveal key={i} delay={i * 0.04}>
          <div className="border-b border-[#e5e5e5]">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between py-7 lg:py-8 text-left group"
            >
              <span className="text-base lg:text-lg font-sans font-medium text-[#0a0a0a] pr-12 group-hover:text-[#0a0a0a]/60 transition-colors leading-snug">
                {faq.question}
              </span>
              <motion.span
                className="text-2xl text-[#0a0a0a]/30 shrink-0 font-light"
                animate={{ rotate: openIndex === i ? 45 : 0 }}
                transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-base font-sans text-[#737373] pb-8 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}
