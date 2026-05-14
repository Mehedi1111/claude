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
  title: "Evoke — AI Logo to Vector Brand Systems",
  description:
    "We manually convert AI-generated logos into professional vector brand systems. From pixel-locked AI concepts to infinite vector authority.",
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
