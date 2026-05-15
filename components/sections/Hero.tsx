"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const headline = [
  { text: "From Pixel.", accent: false },
  { text: "To Vector.", accent: false },
  { text: "To", accent: false },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#0a0a0a] flex flex-col justify-end overflow-hidden"
    >
      {/* Fine grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 0%, transparent 40%, #0a0a0a 100%)",
        }}
      />

      {/* Top-right: Clutch rating */}
      <motion.div
        className="absolute top-24 right-6 lg:right-12 text-right hidden sm:block"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
      >
        <p className="text-[10px] font-sans text-white/20 uppercase tracking-[0.2em] mb-1.5">Rated on Clutch</p>
        <div className="flex items-center gap-0.5 justify-end">
          {[1, 2, 3, 4, 5].map((s) => (
            <span key={s} className="text-white/35 text-[11px]">★</span>
          ))}
        </div>
        <p className="text-[11px] font-sans font-medium text-white/30 mt-1">5.0 / 5.0</p>
      </motion.div>

      {/* Main content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 pb-16 sm:pb-20 lg:pb-28 pt-28"
      >
        {/* Overline */}
        <motion.div
          className="flex items-center gap-3 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className="w-6 h-px bg-white/20" />
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold text-white/30 uppercase tracking-[0.25em]">
            Brand Identity Studio
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-10 sm:mb-12">
          {headline.map((line, i) => (
            <div
              key={i}
              className="overflow-hidden"
              style={{ lineHeight: i < 2 ? "0.95" : "0.92" }}
            >
              <motion.div
                className={`font-display font-bold tracking-[-0.04em] ${
                  line.accent
                    ? "text-white/30 italic"
                    : "text-white"
                } ${
                  i === 2
                    ? "text-[clamp(44px,7.5vw,115px)] inline-block mr-[0.3em]"
                    : "text-[clamp(44px,7.5vw,115px)]"
                }`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.35 + i * 0.12,
                  duration: 1,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                {line.text}
                {i === 2 && (
                  <motion.span
                    className="text-white not-italic"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.35 + 3 * 0.12, duration: 1, ease: [0.33, 1, 0.68, 1] }}
                  >
                    {" "}Authority.
                  </motion.span>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-white/[0.08] mb-8 sm:mb-10"
          style={{ originX: 0 }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 sm:gap-12">
          {/* Left: description */}
          <motion.p
            className="text-[15px] sm:text-base font-sans text-white/40 max-w-[340px] leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            We build brands from scratch and convert AI-generated logos
            into precision-crafted vector systems.
          </motion.p>

          {/* Right: CTAs */}
          <motion.div
            className="flex items-center gap-3 shrink-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8 }}
          >
            <Link
              href="/contact"
              data-cursor="START"
              className="inline-flex items-center gap-2.5 text-[13px] font-sans font-semibold text-[#0a0a0a] bg-white px-5 sm:px-7 py-3.5 hover:bg-white/90 transition-all duration-200"
            >
              Start a Project
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[13px] font-sans font-medium text-white/40 border border-white/12 px-5 sm:px-6 py-3.5 hover:text-white hover:border-white/25 transition-all duration-200"
            >
              View Work
            </Link>
          </motion.div>
        </div>

        {/* Anchor scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-6 lg:right-12 flex items-center gap-2.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span className="text-[9px] font-sans text-white/18 uppercase tracking-[0.25em]">Scroll</span>
          <motion.div
            className="w-6 h-px bg-white/20 origin-left"
            animate={{ scaleX: [0, 1, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
