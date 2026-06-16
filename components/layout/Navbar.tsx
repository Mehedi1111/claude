"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// ─── Mega menu data ────────────────────────────────────────────────────────────

const servicesColumns = [
  {
    label: "AI Services",
    items: [
      { href: "/services/ai-logo-vectorization", label: "AI Logo Vectorization", desc: "Raster → production vector" },
      { href: "/services/ai-logo-cleanup", label: "AI Logo Cleanup", desc: "Fix AI-generated logos" },
      { href: "/services/typography-reconstruction", label: "Typography Reconstruction", desc: "Exact typeface matching" },
      { href: "/services/svg-conversion", label: "SVG Conversion", desc: "Any format to clean SVG" },
      { href: "/services/brand-system-rebuild", label: "Brand System Rebuild", desc: "Full identity reconstruction" },
    ],
  },
  {
    label: "Brand Design",
    items: [
      { href: "/services/logo-design", label: "Logo Design", desc: "Custom geometric marks" },
      { href: "/services/brand-identity", label: "Brand Identity", desc: "Complete identity systems" },
      { href: "/services/visual-identity-system", label: "Visual Identity System", desc: "End-to-end brand language" },
      { href: "/services/business-stationery", label: "Business Stationery", desc: "Cards, letterhead, envelope" },
      { href: "/services/brand-guidelines", label: "Brand Guidelines", desc: "Rules for consistent use" },
    ],
  },
  {
    label: "Digital",
    items: [
      { href: "/services/web-design-development", label: "Web Design & Development", desc: "Next.js sites that convert" },
      { href: "/services/social-media-management", label: "Social Media Design", desc: "On-brand platform content" },
    ],
  },
];

const workItems = [
  { href: "/portfolio/logofolio-2025", label: "Logofolio 2025", category: "12 Logo Marks · 2025", image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/185a22226624279.68319be67c506.jpg" },
  { href: "/portfolio/asprey-logo-brand-identity", label: "Asprey", category: "Luxury Brand · 2025", image: "/portfolio/asprey-logo/cover.avif" },
  { href: "/portfolio/rapidweld-brand-identity", label: "RapidWeld", category: "Industrial Brand · 2023", image: "/portfolio/rapidweld-logo/cover.avif" },
  { href: "/portfolio/social-media-portfolio-2025", label: "Social Media 2025", category: "Content Design · 2025", image: "/portfolio/social-media-2025/social-media-2025-cover.avif" },
];

const journalItems = [
  { href: "/blog/ai-logo-vectorization-complete-guide", label: "The Complete AI Logo Vectorization Guide", tag: "Guide" },
  { href: "/blog/vectorize-midjourney-logo", label: "How to Vectorize a Midjourney Logo", tag: "Tutorial" },
  { href: "/blog/logo-file-formats-explained", label: "SVG vs AI vs EPS vs PDF — Explained", tag: "Reference" },
  { href: "/blog/manual-vectorization-explained", label: "Manual vs Automated Vectorization", tag: "Deep Dive" },
];

type MegaMenu = "services" | "work" | "journal" | null;

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<MegaMenu>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isDark = !scrolled && pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setVisible(y < lastScrollY || y < 100);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    setScrolled(false);
    setVisible(true);
    setActiveMenu(null);
    setMenuOpen(false);
  }, [pathname]);

  const open = (menu: MegaMenu) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };

  const close = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const keep = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const triggerCls = (active: boolean) =>
    `text-sm font-sans font-medium transition-colors duration-200 flex items-center gap-1.5 ${
      isDark
        ? active ? "text-white" : "text-white/60 hover:text-white"
        : active ? "text-[#0a0a0a]" : "text-[#404040] hover:text-[#0a0a0a]"
    }`;

  const linkCls = (href: string) =>
    `text-sm font-sans font-medium transition-colors duration-200 link-underline ${
      isDark
        ? pathname === href ? "text-white" : "text-white/60 hover:text-white"
        : pathname === href ? "text-[#0a0a0a]" : "text-[#404040] hover:text-[#0a0a0a]"
    }`;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled || !isDark || activeMenu
            ? "bg-white/97 backdrop-blur-md border-b border-[#e5e5e5]"
            : "bg-transparent"
        }`}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link
              href="/"
              className={`shrink-0 font-display font-bold text-[19px] tracking-[-0.055em] select-none transition-colors duration-300 ${
                isDark && !activeMenu ? "text-white" : "text-[#0a0a0a]"
              }`}
            >
              EVOKE
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="/about" className={linkCls("/about")}>About</Link>

              {/* Services trigger */}
              <button
                onMouseEnter={() => open("services")}
                onMouseLeave={close}
                className={triggerCls(pathname.startsWith("/services") || activeMenu === "services")}
              >
                Services
                <motion.svg
                  width="10" height="10" viewBox="0 0 10 10" fill="none"
                  animate={{ rotate: activeMenu === "services" ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="opacity-40"
                >
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </button>

              {/* Work trigger */}
              <button
                onMouseEnter={() => open("work")}
                onMouseLeave={close}
                className={triggerCls(pathname.startsWith("/portfolio") || activeMenu === "work")}
              >
                Work
                <motion.svg
                  width="10" height="10" viewBox="0 0 10 10" fill="none"
                  animate={{ rotate: activeMenu === "work" ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="opacity-40"
                >
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </button>

              <Link href="/domains" className={linkCls("/domains")}>Domains</Link>

              {/* Journal trigger */}
              <button
                onMouseEnter={() => open("journal")}
                onMouseLeave={close}
                className={triggerCls(pathname.startsWith("/blog") || activeMenu === "journal")}
              >
                Journal
                <motion.svg
                  width="10" height="10" viewBox="0 0 10 10" fill="none"
                  animate={{ rotate: activeMenu === "journal" ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="opacity-40"
                >
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </button>

              <Link href="/faq" className={linkCls("/faq")}>FAQ</Link>
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className={`hidden md:inline-flex items-center gap-1.5 text-sm font-sans font-semibold px-4 py-2.5 border transition-all duration-300 ${
                  isDark && !activeMenu
                    ? "text-white border-white/30 hover:bg-white hover:text-[#0a0a0a] hover:border-white"
                    : "text-[#0a0a0a] border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white"
                }`}
              >
                Start a Project
                <span className="text-[10px]">↗</span>
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
                aria-label="Toggle menu"
              >
                <motion.span
                  className={`block w-5 h-px transition-colors ${isDark && !menuOpen ? "bg-white" : "bg-[#0a0a0a]"}`}
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`block w-5 h-px transition-colors ${isDark && !menuOpen ? "bg-white" : "bg-[#0a0a0a]"}`}
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`block w-5 h-px transition-colors ${isDark && !menuOpen ? "bg-white" : "bg-[#0a0a0a]"}`}
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ── Mega menu panel ── */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              onMouseEnter={keep}
              onMouseLeave={close}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.33, 1, 0.68, 1] }}
              className="border-t border-[#e5e5e5] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
            >
              <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 py-8 lg:py-10">

                {/* ── Services ── */}
                {activeMenu === "services" && (
                  <div className="grid grid-cols-[auto_1fr_1fr_1fr] gap-12 lg:gap-16">
                    {/* Left label */}
                    <div className="flex flex-col justify-between border-r border-[#f0f0f0] pr-12">
                      <div>
                        <p className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#b4b4b4] mb-2">Services</p>
                        <p className="text-[28px] font-display font-bold text-[#0a0a0a] tracking-[-0.04em] leading-[1.1]">What<br/>we do</p>
                      </div>
                      <Link
                        href="/services"
                        onClick={() => setActiveMenu(null)}
                        className="text-[12px] font-sans font-semibold text-[#0a0a0a]/40 hover:text-[#0a0a0a] transition-colors mt-6 flex items-center gap-1.5 group"
                      >
                        All services
                        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </Link>
                    </div>

                    {/* Columns */}
                    {servicesColumns.map((col, ci) => (
                      <div key={ci}>
                        <p className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#b4b4b4] mb-5">
                          {col.label}
                        </p>
                        <ul className="space-y-0">
                          {col.items.map((item, ii) => (
                            <motion.li
                              key={ii}
                              initial={{ opacity: 0, x: -4 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: ii * 0.03 + ci * 0.04, duration: 0.2 }}
                            >
                              <Link
                                href={item.href}
                                onClick={() => setActiveMenu(null)}
                                className="group flex flex-col py-2.5 border-b border-[#f5f5f5] last:border-0 hover:border-[#e5e5e5] transition-colors"
                              >
                                <span className="text-[14px] font-sans font-medium text-[#0a0a0a] group-hover:text-[#0a0a0a]/70 transition-colors leading-snug">
                                  {item.label}
                                </span>
                                <span className="text-[12px] font-sans text-[#b4b4b4] mt-0.5">
                                  {item.desc}
                                </span>
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* ── Work ── */}
                {activeMenu === "work" && (
                  <div className="grid grid-cols-[auto_1fr] gap-12 lg:gap-16">
                    {/* Left label */}
                    <div className="flex flex-col justify-between border-r border-[#f0f0f0] pr-12 min-w-[120px]">
                      <div>
                        <p className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#b4b4b4] mb-2">Work</p>
                        <p className="text-[28px] font-display font-bold text-[#0a0a0a] tracking-[-0.04em] leading-[1.1]">Selected<br/>projects</p>
                      </div>
                      <Link
                        href="/portfolio"
                        onClick={() => setActiveMenu(null)}
                        className="text-[12px] font-sans font-semibold text-[#0a0a0a]/40 hover:text-[#0a0a0a] transition-colors mt-6 flex items-center gap-1.5 group"
                      >
                        Full portfolio
                        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </Link>
                    </div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {workItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.22 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group block"
                          >
                            <div className="relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "4/3" }}>
                              <Image
                                src={item.image}
                                alt={item.label}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                unoptimized={item.image.endsWith(".avif")}
                              />
                            </div>
                            <div className="pt-3">
                              <p className="text-[11px] font-sans text-[#b4b4b4] mb-0.5">{item.category}</p>
                              <p className="text-[14px] font-sans font-semibold text-[#0a0a0a] group-hover:text-[#0a0a0a]/60 transition-colors">
                                {item.label}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Journal ── */}
                {activeMenu === "journal" && (
                  <div className="grid grid-cols-[auto_1fr_auto] gap-12 lg:gap-16">
                    {/* Left label */}
                    <div className="flex flex-col justify-between border-r border-[#f0f0f0] pr-12 min-w-[120px]">
                      <div>
                        <p className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#b4b4b4] mb-2">Journal</p>
                        <p className="text-[28px] font-display font-bold text-[#0a0a0a] tracking-[-0.04em] leading-[1.1]">Writing<br/>& guides</p>
                      </div>
                      <Link
                        href="/blog"
                        onClick={() => setActiveMenu(null)}
                        className="text-[12px] font-sans font-semibold text-[#0a0a0a]/40 hover:text-[#0a0a0a] transition-colors mt-6 flex items-center gap-1.5 group"
                      >
                        All articles
                        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </Link>
                    </div>

                    {/* Articles list */}
                    <div>
                      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#b4b4b4] mb-5">Popular</p>
                      <ul className="space-y-0">
                        {journalItems.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -4 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04, duration: 0.2 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group flex items-start justify-between gap-6 py-3 border-b border-[#f5f5f5] last:border-0 hover:border-[#e5e5e5] transition-colors"
                            >
                              <span className="text-[14px] font-sans font-medium text-[#0a0a0a] group-hover:text-[#0a0a0a]/60 transition-colors leading-snug">
                                {item.label}
                              </span>
                              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-[#b4b4b4] shrink-0 mt-0.5 border border-[#e5e5e5] px-2 py-0.5">
                                {item.tag}
                              </span>
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Right aside */}
                    <div className="border-l border-[#f0f0f0] pl-12 min-w-[180px]">
                      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#b4b4b4] mb-5">Topics</p>
                      <ul className="space-y-1">
                        {[
                          { href: "/blog", label: "All Articles" },
                          { href: "/services/ai-logo-vectorization", label: "AI Vectorization" },
                          { href: "/services/logo-design", label: "Logo Design" },
                          { href: "/services/brand-identity", label: "Brand Identity" },
                          { href: "/services/web-design-development", label: "Web Design" },
                        ].map((t, i) => (
                          <li key={i}>
                            <Link
                              href={t.href}
                              onClick={() => setActiveMenu(null)}
                              className="text-[13px] font-sans text-[#737373] hover:text-[#0a0a0a] transition-colors py-1.5 flex items-center gap-2 group"
                            >
                              <span className="w-3 h-px bg-[#e5e5e5] group-hover:bg-[#0a0a0a] group-hover:w-4 transition-all duration-200" />
                              {t.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Mobile full-screen menu ── */}
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
                {[
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/portfolio", label: "Work" },
                  { href: "/domains", label: "Domains" },
                  { href: "/blog", label: "Journal" },
                  { href: "/faq", label: "FAQ" },
                ].map((link, i) => (
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
