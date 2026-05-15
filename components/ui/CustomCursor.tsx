"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [label, setLabel] = useState("");
  const rafRef = useRef<number | null>(null);

  const springConfig = { damping: 30, stiffness: 500, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
    };

    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closest = target.closest("a, button, [data-cursor]") as HTMLElement | null;
      if (closest) {
        setHovered(true);
        setLabel(closest.dataset.cursor || "");
      }
    };

    const handleLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closest = target.closest("a, button, [data-cursor]");
      if (closest) {
        setHovered(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleEnter);
    window.addEventListener("mouseout", handleLeave);
    document.documentElement.addEventListener("mouseleave", () => setHidden(true));
    document.documentElement.addEventListener("mouseenter", () => setHidden(false));

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleEnter);
      window.removeEventListener("mouseout", handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference hidden md:flex items-center justify-center"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? (label ? 80 : 40) : 12,
          height: hovered ? (label ? 80 : 40) : 12,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 400, mass: 0.6 }}
      >
        <div
          className="w-full h-full rounded-full flex items-center justify-center"
          style={{ background: "#ffffff" }}
        >
          {label && (
            <span className="text-[9px] font-sans font-bold text-[#0a0a0a] uppercase tracking-[0.15em] leading-tight text-center px-1">
              {label}
            </span>
          )}
        </div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ opacity: hidden || hovered ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
