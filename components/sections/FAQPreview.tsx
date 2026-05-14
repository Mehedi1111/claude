"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";

function AccordionItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border-b border-[#e5e5e5]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base lg:text-lg font-sans font-medium text-[#0a0a0a] pr-8 group-hover:text-[#0a0a0a]/70 transition-colors">
          {question}
        </span>
        <motion.span
          className="text-xl text-[#0a0a0a]/40 shrink-0"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm lg:text-base font-sans text-[#737373] pb-6 leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPreview() {
  const preview = faqs.slice(0, 4);

  return (
    <section className="py-24 lg:py-36 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <SectionReveal>
              <p className="text-xs font-sans font-semibold text-[#0a0a0a]/40 uppercase tracking-[0.2em] mb-6">
                Common Questions
              </p>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="text-[clamp(36px,4vw,56px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1.05] mb-6">
                Everything you need to know.
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="text-base font-sans text-[#737373] leading-relaxed mb-8">
                Answers to the questions founders, designers, and brand managers
                ask most. Can&apos;t find what you&apos;re looking for?
              </p>
              <Link
                href="/contact"
                className="text-sm font-sans font-medium text-[#0a0a0a] link-underline"
              >
                Send us a message →
              </Link>
            </SectionReveal>
          </div>

          {/* Right: FAQ accordion */}
          <div>
            <div className="border-t border-[#e5e5e5]">
              {preview.map((faq, i) => (
                <SectionReveal key={i} delay={i * 0.05}>
                  <AccordionItem
                    question={faq.question}
                    answer={faq.answer}
                    index={i}
                  />
                </SectionReveal>
              ))}
            </div>
            <SectionReveal delay={0.3}>
              <div className="mt-8">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#0a0a0a]/60 hover:text-[#0a0a0a] transition-colors link-underline"
                >
                  View all questions →
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
