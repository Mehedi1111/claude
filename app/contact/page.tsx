import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export const metadata: Metadata = {
  title: "Get a Quote — AI Logo Vectorization & Brand Design | Evoke Studio",
  description:
    "Start your AI logo vectorization or brand identity project today. Share your file, receive a detailed quote within 1 business day. From $50 — SVG, AI, EPS, PDF delivered in 24–48 hours.",
  openGraph: {
    title: "Get a Quote — AI Logo Vectorization & Brand Design | Evoke Studio",
    description:
      "Share your AI logo and get a quote within 1 business day. Manual vectorization, Pantone-certified, printer-approved. From $50.",
    url: "https://madebyevoke.com/contact",
    siteName: "Evoke Studio",
    type: "website",
  },
  alternates: { canonical: "https://madebyevoke.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-20 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="text-xs font-sans font-semibold text-white/30 uppercase tracking-[0.2em] mb-8">
              Get In Touch
            </p>
          </SectionReveal>
          <h1 className="text-[clamp(48px,7vw,100px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.92] mb-8">
            <AnimatedText text="Let's build" />
            <br />
            <AnimatedText text="your brand." delay={0.1} />
          </h1>
          <SectionReveal delay={0.3}>
            <p className="text-base font-sans text-white/50 max-w-sm leading-relaxed">
              Tell us about your project. We&apos;ll respond within one business day
              with a brief and a quote.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Form section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: info */}
            <div>
              <SectionReveal>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] mb-8">
                  What to expect
                </h2>
              </SectionReveal>
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Submit your brief",
                    desc: "Use the form to share your AI logo file, tell us about your brand, and describe the scope.",
                  },
                  {
                    step: "02",
                    title: "Receive a quote",
                    desc: "We'll review your brief and respond within one business day with a clear, itemized quote.",
                  },
                  {
                    step: "03",
                    title: "We begin work",
                    desc: "On approval, we begin reconstruction immediately. Standard turnaround is 24–48 hours.",
                  },
                  {
                    step: "04",
                    title: "Files delivered",
                    desc: "All formats land in your inbox, organized and production-tested. Revisions included.",
                  },
                ].map((item, i) => (
                  <SectionReveal key={i} delay={i * 0.1}>
                    <div className="flex gap-6">
                      <span className="text-xs font-sans font-medium text-[#0a0a0a]/30 tracking-[0.1em] pt-0.5 w-6 shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-base font-sans font-semibold text-[#0a0a0a] mb-1">
                          {item.title}
                        </p>
                        <p className="text-sm font-sans text-[#737373] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>

              <SectionReveal delay={0.5}>
                <div className="mt-12 pt-10 border-t border-[#e5e5e5]">
                  <p className="text-xs font-sans font-semibold text-[#0a0a0a]/40 uppercase tracking-[0.15em] mb-3">
                    Direct contact
                  </p>
                  <a
                    href="mailto:work@madebyevoke.com"
                    className="text-base font-sans font-medium text-[#0a0a0a] link-underline"
                  >
                    work@madebyevoke.com
                  </a>
                </div>
              </SectionReveal>
            </div>

            {/* Right: form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
