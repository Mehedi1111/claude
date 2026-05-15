import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import Showcase from "@/components/sections/Showcase";
import TrustMetrics from "@/components/sections/TrustMetrics";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Testimonials from "@/components/sections/Testimonials";
import FAQPreview from "@/components/sections/FAQPreview";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Logo Vectorization & Brand Identity Design | Evoke Studio",
  description:
    "Convert your AI-generated logo into a production-ready vector file — manually traced, Pantone-certified, printer-approved. From $50. SVG, AI, EPS, PDF delivered in 24–48 hours.",
  openGraph: {
    title: "AI Logo Vectorization & Brand Identity Design | Evoke Studio",
    description:
      "Convert your AI-generated logo into a production-ready vector file — manually traced, Pantone-certified, printer-approved. From $50.",
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
      <Testimonials />
      <FAQPreview />
      <CTASection />
    </>
  );
}
