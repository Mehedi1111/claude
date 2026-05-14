"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroVisual from "./HeroVisual";

gsap.registerPlugin(ScrollTrigger);

const lines = ["From Pixel.", "To Vector.", "To Authority."];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#0a0a0a] flex items-end overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial gradient vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 50%, transparent 30%, #0a0a0a 80%)" }}
      />

      {/* Top-right metric */}
      <motion.div
        className="absolute top-24 right-6 lg:right-12 text-right hidden lg:block"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <p className="text-xs font-sans text-white/20 uppercase tracking-[0.2em]">Rated</p>
        <div className="flex items-center gap-1 justify-end mt-1">
          {[1,2,3,4,5].map(s => (
            <span key={s} className="text-white/40 text-[10px]">★</span>
          ))}
        </div>
        <p className="text-[10px] font-sans text-white/20 mt-0.5">5.0 on Clutch</p>
      </motion.div>

      {/* Main grid layout */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 lg:pb-28 pt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-0 items-end">

          {/* LEFT: Text */}
          <div>
            {/* Animated lines */}
            <div className="mb-8 lg:mb-10">
              {lines.map((line, i) => (
                <div key={i} className="overflow-hidden" style={{ lineHeight: "0.92" }}>
                  <motion.div
                    className="text-[clamp(52px,9vw,130px)] font-display font-bold text-white tracking-[-0.04em]"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.4 + i * 0.14,
                      duration: 0.95,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    {line}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <motion.div
              className="h-px bg-white/10 mb-7"
              style={{ originX: 0 }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.85, duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
            />

            {/* Subtitle + CTAs row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              <motion.p
                className="text-base lg:text-[17px] font-sans text-white/45 max-w-xs leading-relaxed"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.75 }}
              >
                We build brands from scratch and convert AI-generated logos
                into precision-crafted vector systems.
              </motion.p>

              <motion.div
                className="flex items-center gap-3 shrink-0"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.18, duration: 0.75 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] bg-white px-6 py-3.5 hover:bg-white/90 transition-all duration-200"
                >
                  Start a Project
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-sm font-sans font-medium text-white/50 border border-white/15 px-5 py-3.5 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  View Work
                </Link>
              </motion.div>
            </div>

            {/* Bottom mini stats row */}
            <motion.div
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/[0.07]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.45, duration: 0.8 }}
            >
              {["500+ Logos rebuilt", "24–48hr turnaround", "AI & Traditional branding"].map((s, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[11px] font-sans text-white/30 uppercase tracking-[0.15em]">{s}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Animated visual */}
          <motion.div
            className="hidden lg:flex items-center justify-center h-[440px] relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll line */}
      <motion.div
        className="absolute bottom-8 left-6 lg:left-12 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          className="w-8 h-px bg-white/20 origin-left"
          animate={{ scaleX: [0, 1, 1, 0], originX: [0, 0, 1, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
        />
        <span className="text-[10px] font-sans text-white/20 uppercase tracking-[0.2em]">Scroll</span>
      </motion.div>
    </section>
  );
}
