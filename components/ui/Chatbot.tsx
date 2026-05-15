"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  quickReplies?: string[];
  cta?: { label: string; href: string };
};

type BotEntry = {
  patterns: string[];
  text: string;
  quickReplies?: string[];
  cta?: { label: string; href: string };
};

// ── Response data (all pulled from site content) ──────────────────────────────

const BOT_DATA: BotEntry[] = [
  // Greeting
  {
    patterns: ["hello", "hi", "hey", "howdy", "good morning", "good afternoon", "good evening"],
    text: "Welcome to Evoke Studio. I can help with questions about our services, pricing, turnaround, and process.\n\nWhat can I help you with?",
    quickReplies: ["What services do you offer?", "Pricing overview", "How long does it take?", "How do I get started?"],
  },

  // Services overview
  {
    patterns: ["service", "what do you do", "what do you offer", "what can you do", "help with", "speciali"],
    text: "We offer three categories of services:\n\nAI Logo Services\nVectorization · Cleanup · Typography reconstruction · SVG conversion · Brand system rebuild\n\nTraditional Branding\nLogo design · Brand identity · Stationery · Guidelines · Visual identity system\n\nDigital Services\nWeb design & development · Social media management",
    quickReplies: ["AI logo vectorization", "Brand identity design", "Web design pricing", "Social media management"],
  },

  // Pricing overview
  {
    patterns: ["price", "pricing", "cost", "how much", "rates", "fee", "charge", "afford", "budget"],
    text: "Here is a quick overview of our pricing:\n\nAI Logo Vectorization — from $50\nAI Logo Cleanup — from $35\nSVG Conversion — from $40\nTypography Reconstruction — from $60\nBrand System Rebuild — from $350\nLogo Design — from $150\nBrand Identity Design — from $500\nBusiness Stationery — from $200\nBrand Guidelines — from $250\nVisual Identity System — from $800\nWeb Design & Development — from $500\nSocial Media Management — from $300/mo",
    quickReplies: ["AI logo vectorization", "Brand identity design", "How do I get started?"],
  },

  // Vectorization
  {
    patterns: ["vectoriz", "vector", "midjourney", "dall-e", "dalle", "ideogram", "stable diffusion", "firefly", "ai logo", "ai-generated", "raster to vector", "png to svg", "jpg to vector", "image to vector"],
    text: "AI Logo Vectorization starts from $50.\n\nWe manually trace your AI-generated logo into clean vector paths — no auto-trace shortcuts. You receive:\n· SVG, AI, EPS, PDF (vector formats)\n· PNG at multiple resolutions\n· Pantone, CMYK, and hex color specs\n\nStandard delivery: 24–48 hours.\nRush (12-hour) delivery is available.",
    quickReplies: ["What file formats do I get?", "Do you use auto-trace?", "What AI tools do you accept?", "Get started"],
  },

  // AI Cleanup
  {
    patterns: ["cleanup", "clean up", "fix logo", "broken path", "fix paths", "tidy", "improve"],
    text: "AI Logo Cleanup starts from $35, delivered in 12–24 hours.\n\nWe audit every element for technical issues: misaligned nodes, inconsistent stroke weights, broken paths, and colour irregularities — then rebuild what needs rebuilding.",
    quickReplies: ["AI logo vectorization", "What's the difference between cleanup and vectorization?", "Get started"],
  },

  // Auto-trace
  {
    patterns: ["auto trace", "auto-trace", "autotrace", "automatic", "image trace", "illustrator trace"],
    text: "We never use auto-trace.\n\nAuto-trace produces hundreds of redundant anchor points and imprecise curves. Files built this way look acceptable on screen but fail in embroidery, high-quality print, and brand guidelines.\n\nEvery path we deliver is drawn by hand, deliberately, point by point.",
    quickReplies: ["AI logo vectorization pricing", "How long does manual vectorization take?", "Get started"],
  },

  // Turnaround
  {
    patterns: ["turnaround", "how long", "delivery time", "when will", "how fast", "time frame", "days", "hours", "timeline", "eta"],
    text: "Delivery times by service:\n\nAI Logo Cleanup — 12–24 hours\nSVG Conversion — 12–24 hours\nAI Logo Vectorization — 24–48 hours\nTypography Reconstruction — 24–48 hours\nBusiness Stationery — 3–5 business days\nBrand Guidelines — 4–6 business days\nLogo Design — 5–7 business days\nBrand System Rebuild — 5–7 business days\nBrand Identity Design — 10–14 business days\nVisual Identity System — 14–21 business days\nWeb Design & Development — 2–4 weeks\nSocial Media Management — Ongoing monthly\n\nRush delivery (12 hours) is available on most projects.",
    quickReplies: ["Rush delivery options", "How do I submit my logo?", "Get started"],
  },

  // Rush delivery
  {
    patterns: ["rush", "urgent", "asap", "today", "tonight", "emergency", "immediately", "same day", "overnight", "express"],
    text: "Rush delivery is available on most projects for an additional fee.\n\nFor vectorization and cleanup we can deliver in as little as 12 hours.\n\nMention your deadline when you contact us and we'll confirm availability.",
    cta: { label: "Contact us about rush delivery →", href: "/contact" },
  },

  // File formats
  {
    patterns: ["file format", "file type", "what files", "which format", "formats", "deliverable", "receive", "get back"],
    text: "Every vectorization order includes:\n\n· SVG — for web and modern design tools\n· AI (Adobe Illustrator) — native working file\n· EPS — universal vector, required by most print vendors\n· PDF — for presentations and documentation\n· PNG — at multiple resolutions, transparent background\n\nReact SVG components (.tsx) and Figma-ready assets available on request.",
    quickReplies: ["Which format for print?", "Which format for web?", "Which format for embroidery?", "Get started"],
  },

  // Print format
  {
    patterns: ["for print", "printer", "print vendor", "offset", "print ready", "print-ready"],
    text: "For print production, you need EPS or PDF — both are vector formats accepted by all professional print vendors.\n\nJPG and PNG are raster files that cannot be used for high-quality print. If your logo is currently a JPG or PNG, our vectorization service converts it to production-ready vector files from $50.",
    quickReplies: ["AI logo vectorization pricing", "What about Pantone colors?", "Get started"],
  },

  // Web format
  {
    patterns: ["for web", "website logo", "website format", "web format"],
    text: "For web use, SVG is the best format. It scales perfectly at any screen density, loads fast, and can be themed with CSS.\n\nPNG (2x resolution) is a good fallback for contexts where SVG cannot be used — email templates, certain third-party embeds.\n\nNever use JPG for logos on web — compression creates visible artifacts around edges.",
    quickReplies: ["Web design & development service", "Get started"],
  },

  // Embroidery format
  {
    patterns: ["embroidery", "embroider", "stitch", "stitching", "hat", "polo", "uniform", "apparel", "digitiz"],
    text: "For embroidery, your logo needs to be:\n\n· Vector format (AI or EPS)\n· Simplified to flat colors — no gradients or glow effects\n· 1–3 colors maximum for clean results\n\nOur vectorization service prepares your logo specifically for embroidery production — clean paths, flat colors, and Pantone specs the digitizer can use.",
    quickReplies: ["AI logo vectorization pricing", "Get started"],
  },

  // Merchandise
  {
    patterns: ["merchandise", "merch", "t-shirt", "tshirt", "screen print", "screenprint", "packaging", "product", "promotional"],
    text: "For merchandise — screen printing, pad printing, heat transfer, or packaging — your logo must be a clean vector file (EPS or SVG) with flat colors and Pantone specifications.\n\nAI-generated logos need to be vectorized before merchandise production. Our service prepares the full production-ready file set.",
    quickReplies: ["AI logo vectorization pricing", "What is Pantone?", "Get started"],
  },

  // Pantone / Color
  {
    patterns: ["pantone", "pms", "cmyk", "color spec", "colour spec", "color certif", "colour certif"],
    text: "Pantone (PMS) is a standardised ink color system used by printers, sign makers, embroiderers, and manufacturers worldwide.\n\nA Pantone number guarantees the same color from every vendor, in every country. Without it, each vendor converts your brand color independently — which means inconsistency across every printed touchpoint.\n\nEvery logo we vectorize includes full color specification: Pantone, CMYK, RGB, and hex.",
    quickReplies: ["AI logo vectorization pricing", "Brand identity design", "Get started"],
  },

  // What AI tools accepted
  {
    patterns: ["which ai", "what ai", "what tool", "which tool", "accept", "generator", "generative"],
    text: "We accept files from all AI image generators:\n\nMidjourney · DALL-E 3 · Ideogram · Stable Diffusion · Adobe Firefly · Leonardo AI · ChatGPT image generation · Canva AI\n\nAny tool that produces a raster image — we can vectorize it. Submit the highest-resolution PNG or JPG your tool can export.",
    quickReplies: ["How do I submit?", "AI logo vectorization pricing", "Get started"],
  },

  // Logo Design (from scratch)
  {
    patterns: ["logo design", "design a logo", "design my logo", "custom logo", "from scratch", "create a logo", "new logo", "hand crafted", "handcrafted", "traditional logo", "no ai"],
    text: "Logo Design from scratch starts from $150, delivered in 5–7 business days.\n\nIncludes: brand discovery brief, 3 distinct concept directions, 2 rounds of refinement, and final files in all formats (SVG, AI, EPS, PDF, PNG) — colour and monochrome versions.",
    quickReplies: ["Logo design vs brand identity", "Brand identity design pricing", "Get started"],
  },

  // Brand Identity
  {
    patterns: ["brand identity", "brand system", "brand design", "complete brand", "full brand", "identity design", "visual identity"],
    text: "Brand Identity Design starts from $500, delivered in 10–14 business days.\n\nIncludes:\n· Custom logo design (or from your existing mark)\n· Full color system — hex, RGB, CMYK, Pantone\n· Typography hierarchy (2–3 typefaces)\n· Secondary graphic elements\n· Brand guidelines PDF (30–50 pages)",
    quickReplies: ["Logo design vs brand identity?", "Visual identity system", "Do you build from an AI logo?", "Get started"],
  },

  // Build brand from AI logo
  {
    patterns: ["ai logo brand", "build brand", "brand around", "extend", "brand my ai"],
    text: "Yes — we regularly build complete brand identity systems around AI-generated logos.\n\nThe process:\n1. Vectorize your AI logo (24–48 hours, from $50)\n2. Build the full brand identity system around it (10–14 days, from $500)\n\nThe vectorized mark becomes the foundation — colors, typography, guidelines, and the full asset library are built from there.",
    quickReplies: ["AI logo vectorization pricing", "Brand identity design", "Get started"],
  },

  // Brand System Rebuild
  {
    patterns: ["brand system rebuild", "rebuild", "system rebuild"],
    text: "Brand System Rebuild starts from $350, delivered in 5–7 business days.\n\nThis extends your existing vectorized logo into a full brand system: color palette with all production values, typography hierarchy, usage rules, and a print-ready brand guidelines document.",
    quickReplies: ["Brand identity design", "Visual identity system", "Get started"],
  },

  // Visual Identity System
  {
    patterns: ["visual identity system", "identity system", "complete system", "everything included", "full package"],
    text: "The Visual Identity System is our most comprehensive offering, starting from $800, delivered in 14–21 business days.\n\nIncludes everything in Brand Identity Design plus: complete stationery suite, social media template kit, and a full asset library ZIP.",
    quickReplies: ["Brand identity vs visual identity", "What's in the social media kit?", "Get started"],
  },

  // Brand Guidelines
  {
    patterns: ["guideline", "brand guide", "brand book", "standards doc", "brand standard", "documentation"],
    text: "Brand Guidelines documentation starts from $250, delivered in 4–6 business days.\n\nCovers: logo usage rules, clear space specs, full color documentation, typography specimens, do/don't examples, and application mockups. Can be built around any existing brand — even if we didn't design it.",
    quickReplies: ["Brand identity design", "How do I submit existing files?", "Get started"],
  },

  // Stationery
  {
    patterns: ["stationery", "business card", "letterhead", "envelope", "email signature", "compliment slip"],
    text: "Business Stationery design starts from $200, delivered in 3–5 business days.\n\nIncludes: business card (front & back), A4 letterhead, compliments slip, envelope design, and HTML email signature.\n\nDelivered in print-ready PDF with bleed and crop marks — ready to send directly to your printer.",
    quickReplies: ["Brand identity design", "Do you recommend printers?", "Get started"],
  },

  // Web Design
  {
    patterns: ["web design", "web development", "website", "landing page", "marketing site", "next.js", "react site", "build a site", "redesign"],
    text: "Web Design & Development starts from $500, with standard delivery in 2–4 weeks.\n\nWe build custom, brand-consistent websites on Next.js — performance-optimised, fully responsive, with CMS integration and on-page SEO. Core Web Vitals 90+ and 30-day post-launch support included.",
    quickReplies: ["What tech stack?", "Do you handle hosting?", "Social media management", "Get started"],
  },

  // Tech stack
  {
    patterns: ["tech stack", "technology", "built with", "framework", "what tech", "nextjs", "vercel"],
    text: "Our web stack: Next.js · React · Tailwind CSS · TypeScript.\n\nFor CMS we integrate Sanity, Contentful, or simple Notion-based setups. Hosting and deployment on Vercel — fast, reliable, globally distributed.",
    quickReplies: ["Web design pricing", "Do you handle hosting?", "Get started"],
  },

  // Hosting
  {
    patterns: ["hosting", "deploy", "domain", "ssl", "server"],
    text: "Yes — we handle initial deployment to Vercel including custom domain setup, SSL, and environment configuration.\n\nOngoing hosting costs are paid directly by you to Vercel — typically $0–20/month depending on traffic.",
    quickReplies: ["Web design pricing", "Get started"],
  },

  // Social Media
  {
    patterns: ["social media", "instagram", "linkedin", "twitter", "content", "post", "posting", "social management", "content creation"],
    text: "Social Media Management starts from $300/month.\n\nIncludes: monthly content calendar (15–30 posts), custom-designed graphics using your brand system, platform-optimised copy, scheduling across Instagram, LinkedIn, and X, and a monthly analytics report.\n\nYou approve all content before anything is published.",
    quickReplies: ["Which platforms?", "Do you run paid ads?", "Web design service", "Get started"],
  },

  // Which social platforms
  {
    patterns: ["which platform", "what platform", "facebook", "tiktok", "pinterest", "youtube"],
    text: "Standard platforms: Instagram, LinkedIn, X (Twitter), and Facebook.\n\nTikTok and Pinterest are available as add-ons. We focus on the platforms where your audience is actually active — not spreading thin across all channels.",
    quickReplies: ["Social media pricing", "Get started"],
  },

  // Paid ads
  {
    patterns: ["paid ad", "paid social", "ads", "meta ads", "facebook ads", "advertising", "ppc"],
    text: "Our core Social Media Management service covers organic content only.\n\nPaid social advertising (Meta Ads, LinkedIn Ads) is available as a separate add-on, with ad spend managed directly by you. Contact us to discuss your paid social requirements.",
    cta: { label: "Discuss paid social →", href: "/contact" },
  },

  // Typography
  {
    patterns: ["typography", "typeface", "font", "wordmark", "letterform", "type reconstruction"],
    text: "Typography Reconstruction starts from $60, delivered in 24–48 hours.\n\nWe rebuild every letterform as clean, editable vector paths — or identify and correctly apply the source typeface — with correct kerning, tracking, and optical balance.",
    quickReplies: ["AI logo vectorization", "Brand identity design", "Get started"],
  },

  // SVG conversion
  {
    patterns: ["svg conversion", "svg code", "svg optim", "react svg", "tsx component", "react component"],
    text: "SVG Conversion starts from $40, delivered in 12–24 hours.\n\nWe deliver hand-optimised SVG code — minimal file size, semantic IDs, animation-ready layer structure, responsive viewBox, and CSS-themeable colour variables.\n\nReact component (.tsx) versions available on request.",
    quickReplies: ["AI logo vectorization", "What file formats do I get?", "Get started"],
  },

  // Revisions
  {
    patterns: ["revision", "change", "edit", "modify", "update", "adjust", "redo", "not happy", "not satisfied"],
    text: "All orders include two rounds of revisions at no additional cost, requested within 7 days of delivery.\n\nAdditional revision rounds are available at a nominal fee per round.",
    quickReplies: ["Get started"],
  },

  // White label
  {
    patterns: ["white label", "whitelabel", "agency", "resell", "partner", "wholesale", "studio partnership"],
    text: "We work with design agencies and studios as a white-label partner.\n\nDeliveries carry no Evoke branding — files and communications are completely neutral. Volume pricing is available for ongoing partnerships.",
    cta: { label: "Discuss white-label partnership →", href: "/contact" },
  },

  // Portfolio
  {
    patterns: ["portfolio", "examples", "see your work", "case study", "previous work", "sample", "project"],
    text: "Our portfolio includes brand identity projects across technology, aviation, cannabis wellness, pet care, architecture, logistics, and media.\n\nFeatured: PHYTOS cannabis wellness brand, Aerion aviation identity, Caravel Solutions B2B brand, Transam freight & logistics, and the 2025 logofolio collection.",
    cta: { label: "View portfolio →", href: "/portfolio" },
  },

  // Submit / How to start
  {
    patterns: ["submit", "how to send", "upload", "order", "place order", "how to order", "start my project", "begin", "how do i"],
    text: "Getting started is simple:\n\n1. Go to our contact page\n2. Upload your logo (highest resolution available)\n3. Describe your brand and intended use\n4. We respond with a quote within one business day\n\nMost projects begin within 24 hours of confirmation.",
    cta: { label: "Go to contact page →", href: "/contact" },
  },

  // Recommend printers
  {
    patterns: ["recommend printer", "print partner", "printing company", "where to print"],
    text: "Yes — we work with a vetted network of premium print vendors and can facilitate your print order directly if required. Mention this when you contact us.",
    cta: { label: "Contact us →", href: "/contact" },
  },

  // Contact / human
  {
    patterns: ["contact", "talk to", "speak to", "email", "reach you", "human", "person", "team", "someone", "real person"],
    text: "You can reach us directly via our contact page.\n\nWe respond to all enquiries within one business day.\n\nEmail: work@madebyevoke.com",
    cta: { label: "Go to contact page →", href: "/contact" },
  },

  // Clutch / trust
  {
    patterns: ["review", "rating", "clutch", "testimonial", "trustworthy", "trust", "reputation", "reliable"],
    text: "Evoke Studio is rated 4.9/5 on Clutch and has completed 500+ logo vectorization and brand identity projects since 2023.\n\nWe work with founders, SaaS companies, agencies, and creators across the USA, Canada, UK, and Indonesia.",
    quickReplies: ["View portfolio", "Get started"],
  },

  // About / team
  {
    patterns: ["who are you", "about you", "about evoke", "team", "founder", "mehedi", "who built"],
    text: "Evoke Studio is led by Mehedi Hasan — Founder & CEO with 15+ years of brand identity experience.\n\nWe are a team of 10+ designers, technicians, and strategists based across the USA, Canada, UK, and Indonesia, specialising in AI logo vectorization and complete brand identity systems.",
    quickReplies: ["What services do you offer?", "Pricing overview", "Get started"],
  },
];

// Fallback for unrecognised input
const FALLBACK: Omit<Message, "id" | "from"> = {
  text: "I'm not sure I have a specific answer for that. Here are some things I can help with:",
  quickReplies: ["Pricing overview", "What services do you offer?", "How do I get started?", "Talk to the team"],
};

// Opening message
const GREETING: Omit<Message, "id" | "from"> = {
  text: "Hi there! I'm the Evoke assistant.\n\nAsk me anything about our services, pricing, or process — I'll point you in the right direction.",
  quickReplies: ["What services do you offer?", "Pricing overview", "How long does it take?", "How do I submit my logo?"],
};

function findResponse(input: string): Omit<Message, "id" | "from"> {
  const lower = input.toLowerCase().trim();
  // handle "get started" and similar contact-funnel phrases
  if (
    lower.includes("get started") ||
    lower.includes("contact") ||
    lower.includes("talk to the team") ||
    lower.includes("go to contact") ||
    lower.includes("view portfolio") ||
    lower.includes("view our work")
  ) {
    if (lower.includes("portfolio") || lower.includes("view our work")) {
      return { text: "Here's a link to our portfolio — take a look at our recent work.", cta: { label: "View portfolio →", href: "/portfolio" } };
    }
    return {
      text: "Ready to get started? Use the contact page to submit your brief — we respond within one business day.",
      cta: { label: "Go to contact page →", href: "/contact" },
    };
  }

  for (const entry of BOT_DATA) {
    if (entry.patterns.some((p) => lower.includes(p))) {
      return { text: entry.text, quickReplies: entry.quickReplies, cta: entry.cta };
    }
  }
  return FALLBACK;
}

// ── Component ─────────────────────────────────────────────────────────────────

let idCounter = 1;
function nextId() { return idCounter++; }

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [exchangeCount, setExchangeCount] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input & show greeting when first opened
  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages([{ id: nextId(), from: "bot", ...GREETING }]);
        setTimeout(() => inputRef.current?.focus(), 50);
      }, 700);
    } else if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen, hasOpened]);

  const botReply = useCallback((response: Omit<Message, "id" | "from">, count: number) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const newMsg: Message = { id: nextId(), from: "bot", ...response };
      // Suggest contact after 3 exchanges unless a CTA is already included
      if (count >= 3 && !newMsg.cta) {
        newMsg.cta = { label: "Ready to get started? Contact us →", href: "/contact" };
      }
      setMessages((prev) => [...prev, newMsg]);
    }, 700 + Math.random() * 300);
  }, []);

  const handleSend = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      setInput("");
      setMessages((prev) => [...prev, { id: nextId(), from: "user", text: trimmed }]);
      const count = exchangeCount + 1;
      setExchangeCount(count);
      botReply(findResponse(trimmed), count);
    },
    [exchangeCount, botReply]
  );

  const handleQuickReply = useCallback(
    (text: string) => {
      setMessages((prev) => [...prev, { id: nextId(), from: "user", text }]);
      const count = exchangeCount + 1;
      setExchangeCount(count);
      botReply(findResponse(text), count);
    },
    [exchangeCount, botReply]
  );

  return (
    <>
      {/* ── Chat window ── */}
      {isOpen && (
        <div className="fixed bottom-[88px] right-4 sm:right-6 z-[60] w-[calc(100vw-32px)] sm:w-[380px] flex flex-col bg-white border border-[#e0e0e0] shadow-[0_24px_72px_rgba(0,0,0,0.18)] overflow-hidden">

          {/* Header */}
          <div className="bg-[#0a0a0a] flex items-center gap-3 px-5 py-4 shrink-0">
            <div className="w-8 h-8 bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
              <span className="text-[13px] font-display font-bold text-white leading-none">E</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-display font-bold text-white tracking-[-0.01em] leading-none">
                Evoke Assistant
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <p className="text-[10px] font-sans text-white/35 leading-none">
                  Usually replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="w-7 h-7 flex items-center justify-center text-white/30 hover:text-white/80 transition-colors shrink-0"
            >
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1 1l9 9M10 1L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f7f7f5]"
            style={{ minHeight: 260, maxHeight: 380 }}
          >
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[88%] ${msg.from === "user" ? "" : "w-full"}`}>
                  {/* Bubble */}
                  <div
                    className={`px-4 py-3 text-[13px] font-sans leading-[1.6] whitespace-pre-line ${
                      msg.from === "user"
                        ? "bg-[#0a0a0a] text-white"
                        : "bg-white text-[#1a1a1a] border border-[#e8e8e8]"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Quick reply chips */}
                  {msg.from === "bot" && msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {msg.quickReplies.map((qr) => (
                        <button
                          key={qr}
                          onClick={() => handleQuickReply(qr)}
                          className="text-[11px] font-sans font-medium text-[#0a0a0a] border border-[#d0d0d0] bg-white px-2.5 py-1 hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-all duration-150"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* CTA button */}
                  {msg.from === "bot" && msg.cta && (
                    <Link
                      href={msg.cta.href}
                      className="inline-flex items-center gap-2 mt-2.5 text-[12px] font-sans font-semibold text-white bg-[#0a0a0a] px-4 py-2.5 hover:bg-[#1f1f1f] transition-colors"
                    >
                      {msg.cta.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#e8e8e8] px-4 py-3.5 flex items-center gap-1.5">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="w-1.5 h-1.5 rounded-full bg-[#b4b4b4] animate-bounce"
                      style={{ animationDelay: `${delay}ms`, animationDuration: "1s" }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="bg-white border-t border-[#e8e8e8] px-4 py-3 flex items-center gap-3 shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleSend(input); }}
              placeholder="Ask a question…"
              className="flex-1 text-[13px] font-sans text-[#0a0a0a] placeholder:text-[#c0c0c0] bg-transparent outline-none border-none min-w-0"
            />
            <button
              onClick={() => handleSend(input)}
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className="w-8 h-8 bg-[#0a0a0a] flex items-center justify-center text-white shrink-0 disabled:opacity-25 hover:bg-[#1f1f1f] transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M12 6.5L1 1l2.2 5.5L1 12l11-5.5z" fill="currentColor" />
              </svg>
            </button>
          </div>

          {/* Footer note */}
          <div className="bg-white border-t border-[#f0f0f0] px-4 py-2 text-center">
            <p className="text-[10px] font-sans text-[#c0c0c0]">
              Answers based on Evoke Studio services ·{" "}
              <Link href="/contact" className="underline underline-offset-2 hover:text-[#737373] transition-colors">
                Contact us
              </Link>{" "}
              for custom questions
            </p>
          </div>
        </div>
      )}

      {/* ── Toggle button ── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-4 sm:right-6 z-[60] w-14 h-14 bg-[#0a0a0a] flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.28)] hover:bg-[#1f1f1f] transition-colors"
      >
        {isOpen ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="1.5" y="1.5" width="19" height="15" rx="2" stroke="white" strokeWidth="1.5" />
            <path d="M5.5 17v3.5L11 17h5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 8h10M6 11.5h6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
        {/* Unread dot — shows before first open */}
        {!hasOpened && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
        )}
      </button>
    </>
  );
}
