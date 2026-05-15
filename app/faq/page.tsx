import type { Metadata } from "next";
import { faqs } from "@/lib/data";
import CTASection from "@/components/sections/CTASection";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import FAQAccordion from "@/components/sections/FAQAccordion";

export const metadata: Metadata = {
  title: "AI Logo Vectorization FAQ — Pricing, Turnaround & File Formats | Evoke Studio",
  description:
    "Answers to every question about AI logo vectorization: pricing from $50, 24–48hr turnaround, SVG/AI/EPS/PDF formats, Pantone certification, embroidery-ready files, and our full process explained.",
  openGraph: {
    title: "AI Logo Vectorization FAQ — Pricing, Turnaround & File Formats | Evoke Studio",
    description:
      "Everything you need to know: vectorization pricing from $50, turnaround times, file formats, and what to expect from Evoke Studio.",
    url: "https://madebyevoke.com/faq",
    siteName: "Evoke Studio",
    type: "website",
  },
  alternates: { canonical: "https://madebyevoke.com/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="text-xs font-sans font-semibold text-[#0a0a0a]/40 uppercase tracking-[0.2em] mb-8">
              Frequently Asked
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1 className="text-[clamp(48px,7vw,100px)] font-display font-bold text-[#0a0a0a] tracking-[-0.04em] leading-[0.92]">
              <AnimatedText text="Questions," />
              <br />
              <AnimatedText text="answered." delay={0.1} />
            </h1>
            <SectionReveal delay={0.3}>
              <p className="text-base font-sans text-[#737373] leading-relaxed max-w-sm">
                Everything you need to know about working with Evoke — from
                file submission to final delivery.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
