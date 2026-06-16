import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";

// Below-fold sections are lazy-loaded so their JS is not in the critical bundle.
// SSR is preserved (no ssr: false) so content still renders in the initial HTML
// for SEO and prevents CLS.
const Showcase = dynamic(() => import("@/components/sections/Showcase"));
const TrustMetrics = dynamic(() => import("@/components/sections/TrustMetrics"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Process = dynamic(() => import("@/components/sections/Process"));
const PortfolioPreview = dynamic(() => import("@/components/sections/PortfolioPreview"));
const ZoningGraphShowcase = dynamic(() => import("@/components/sections/ZoningGraphShowcase"));
const PayXaraShowcase = dynamic(() => import("@/components/sections/PayXaraShowcase"));
const KannelClubShowcase = dynamic(() => import("@/components/sections/KannelClubShowcase"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const FAQPreview = dynamic(() => import("@/components/sections/FAQPreview"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));

export const metadata: Metadata = {
  title: "AI Logo Vectorization, Brand Identity & Web Design | Evoke Studio",
  description:
    "Convert your AI-generated logo into a production-ready vector file — manually traced, Pantone-certified, printer-approved. From $50. Also: brand identity design, web design & development, and premium domains. SVG, AI, EPS, PDF delivered in 24–48 hours.",
  keywords:
    "AI logo vectorization, logo vectorization service, brand identity design, web design and development, premium domains for sale, fintech domain, proptech domain, PayXara, ZoningGraph, Evoke Studio",
  openGraph: {
    title: "AI Logo Vectorization, Brand Identity & Web Design | Evoke Studio",
    description:
      "Convert your AI-generated logo into a production-ready vector file — manually traced, Pantone-certified, printer-approved. From $50. Brand identity, web design, and premium domains.",
    url: "https://madebyevoke.com",
    siteName: "Evoke Studio",
    type: "website",
  },
  alternates: { canonical: "https://madebyevoke.com" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Showcase />
      <TrustMetrics />
      <Services />
      <Process />
      <PortfolioPreview />
      <ZoningGraphShowcase />
      <PayXaraShowcase />
      <KannelClubShowcase />
      <Testimonials />
      <FAQPreview />
      <CTASection />
    </>
  );
}
