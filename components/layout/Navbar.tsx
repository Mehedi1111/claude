"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/blog", label: "Journal" },
  { href: "/faq", label: "FAQ" },
];

const WHITE_LOGO = "https://madebyevoke.com/wp-content/uploads/2023/07/EVOKE-NEW-LOGO-WHITE-1.png";
const BLACK_LOGO = "https://madebyevoke.com/wp-content/uploads/2023/07/EVOKE-NEW-LOGO-BLACK.png";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  // null = loading, true = success, false = error
  const [whiteLoaded, setWhiteLoaded] = useState<boolean | null>(null);
  const [blackLoaded, setBlackLoaded] = useState<boolean | null>(null);

  // Only use dark (white text) mode on home page when at the very top
  const isDark = !scrolled && pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      setVisible(currentY < lastScrollY || currentY < 100);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Reset scroll state on route change
  useEffect(() => {
    setScrolled(false);
    setVisible(true);
  }, [pathname]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || !isDark
            ? "bg-white/95 backdrop-blur-md border-b border-[#e5e5e5]"
            : "bg-transparent"
        }`}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo with image + text fallback */}
            <Link href="/" className="flex items-center relative shrink-0" style={{ minWidth: 100, height: 32 }}>
              {/* Text fallback – shown only when the logo image explicitly fails */}
              <span
                className={`font-display font-bold text-[18px] tracking-[-0.05em] select-none transition-opacity duration-300 ${
                  isDark ? "text-white" : "text-[#0a0a0a]"
                } ${
                  (isDark ? whiteLoaded === false : blackLoaded === false) ? "opacity-100" : "opacity-0"
                }`}
              >
                EVOKE
              </span>
              {/* White logo */}
              <Image
                src={WHITE_LOGO}
                alt="Evoke"
                fill
                unoptimized
                priority
                className={`object-contain object-left absolute inset-0 transition-opacity duration-300 ${
                  isDark && whiteLoaded === true ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setWhiteLoaded(true)}
                onError={() => setWhiteLoaded(false)}
              />
              {/* Black logo */}
              <Image
                src={BLACK_LOGO}
                alt="Evoke"
                fill
                unoptimized
                priority
                className={`object-contain object-left absolute inset-0 transition-opacity duration-300 ${
                  !isDark && blackLoaded === true ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setBlackLoaded(true)}
                onError={() => setBlackLoaded(false)}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-sans font-medium transition-colors duration-200 link-underline ${
                    isDark
                      ? "text-white/60 hover:text-white"
                      : "text-[#404040] hover:text-[#0a0a0a]"
                  } ${pathname === link.href ? (isDark ? "text-white" : "text-[#0a0a0a]") : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className={`hidden md:inline-flex items-center gap-1.5 text-sm font-sans font-semibold px-4 py-2.5 border transition-all duration-300 ${
                  isDark
                    ? "text-white border-white/30 hover:bg-white hover:text-[#0a0a0a] hover:border-white"
                    : "text-[#0a0a0a] border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white"
                }`}
              >
                Start a Project
                <span className="text-[10px]">↗</span>
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
                aria-label="Toggle menu"
              >
                <motion.span
                  className={`block w-5 h-px transition-colors ${isDark ? "bg-white" : "bg-[#0a0a0a]"}`}
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`block w-5 h-px transition-colors ${isDark ? "bg-white" : "bg-[#0a0a0a]"}`}
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`block w-5 h-px transition-colors ${isDark ? "bg-white" : "bg-[#0a0a0a]"}`}
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="flex flex-col justify-end h-full px-7 pb-14 pt-24">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ delay: 0.18 + i * 0.07, duration: 0.45 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-[clamp(32px,10vw,48px)] font-display font-bold text-white tracking-[-0.03em] hover:text-white/50 transition-colors py-1"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white border border-white/20 px-6 py-3.5 w-fit hover:bg-white hover:text-black transition-all duration-300"
                >
                  Start a Project ↗
                </Link>
                <a
                  href="mailto:work@madebyevoke.com"
                  className="text-[13px] font-sans text-white/35 hover:text-white/70 transition-colors"
                >
                  work@madebyevoke.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
