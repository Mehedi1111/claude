import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export const metadata: Metadata = {
  title: "About Evoke Studio — Mehedi Hasan, Brand Identity & AI Logo Vectorization",
  description:
    "Evoke Studio is led by Mehedi Hasan, a brand identity designer with 15 years of experience. We specialize in AI logo vectorization and complete brand identity systems — manual precision, Pantone-certified, 24–48hr delivery.",
  openGraph: {
    title: "About Evoke Studio — Mehedi Hasan, Brand Identity & AI Logo Vectorization",
    description:
      "Meet Mehedi Hasan — 15 years of brand identity experience, founder of Evoke Studio. AI logo vectorization and brand design for modern businesses.",
    url: "https://madebyevoke.com/about",
    siteName: "Evoke Studio",
    type: "website",
  },
  alternates: { canonical: "https://madebyevoke.com/about" },
};

const values = [
  {
    number: "01",
    title: "Manual precision, always.",
    description:
      "We do not use auto-trace. We do not take shortcuts. Every anchor point is placed deliberately. This is slower — and it is why our output is better.",
  },
  {
    number: "02",
    title: "Technical accuracy over visual approximation.",
    description:
      "A logo that looks correct on screen and a logo that is technically correct are not the same thing. We build files that survive every professional environment.",
  },
  {
    number: "03",
    title: "Speed without compromise.",
    description:
      "24–48 hour turnaround is not a marketing line. It is a process discipline. Our workflow is structured so that quality and speed are not in conflict.",
  },
  {
    number: "04",
    title: "Your brand is the brief.",
    description:
      "We do not impose a style. We study your mark, understand your context, and make decisions that serve your brand — not our portfolio.",
  },
];

const stats = [
  { value: "500+", label: "Logos vectorised" },
  { value: "10+", label: "Team members" },
  { value: "48h", label: "Standard delivery" },
  { value: "4", label: "Countries" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-24 bg-[#0a0a0a] overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "48px 48px" }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <SectionReveal>
            <p className="text-[11px] font-sans font-semibold text-white/25 uppercase tracking-[0.25em] mb-10">
              About Evoke
            </p>
          </SectionReveal>
          <h1 className="text-[clamp(48px,8vw,110px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.9] mb-12">
            <AnimatedText text="We are Evoke." />
          </h1>
          <SectionReveal delay={0.3}>
            <div className="max-w-2xl">
              <p className="text-xl lg:text-2xl font-sans text-white/50 leading-relaxed">
                A brand identity and vectorisation studio built for the AI era.
                We build brands from scratch and convert AI-generated logos into
                production-grade vector systems — with the precision and craft
                that modern brands require.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#e5e5e5]">
            {stats.map((stat, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="py-10 lg:py-14 px-6 lg:px-10">
                  <p className="text-[clamp(36px,4.5vw,56px)] font-display font-bold text-[#0a0a0a] tracking-[-0.04em] leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-sans font-medium text-[#737373] uppercase tracking-[0.15em] mt-2">
                    {stat.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 lg:py-36 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Photo */}
            <SectionReveal>
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e4dc] max-w-[480px]">
                  <Image
                    src="/mehedi-hasan.jpg"
                    alt="Mehedi Hasan — Founder & CEO, Evoke Studio"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 480px"
                    priority
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 max-w-[480px] bg-[#0a0a0a] px-6 py-5">
                  <p className="text-white font-display font-bold text-lg tracking-[-0.02em]">Mehedi Hasan</p>
                  <p className="text-white/45 text-xs font-sans tracking-[0.1em] uppercase mt-1">Founder & CEO, Evoke Studio</p>
                </div>
              </div>
            </SectionReveal>

            {/* Story */}
            <div className="pt-0 lg:pt-4">
              <SectionReveal>
                <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-6">
                  Our Story
                </p>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <h2 className="text-[clamp(28px,3.5vw,46px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1.05] mb-8">
                  Built for the gap between AI output and professional production.
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <div className="space-y-5 text-base lg:text-[17px] font-sans text-[#404040] leading-relaxed">
                  <p>
                    AI image generation changed everything about how brands start.
                    Founders no longer need a full agency engagement to have a visual
                    starting point. Within minutes, you can have a compelling logo
                    concept — at a fraction of the traditional cost.
                  </p>
                  <p>
                    But there&apos;s a gap. The files AI tools produce are technically
                    unsuitable for professional use. They&apos;re raster-based, their paths
                    are undefined, and their colour systems are not print-compatible.
                    Sending them to a printer, a developer, or a brand partner fails.
                  </p>
                  <p>
                    Evoke was built to close that gap. I&apos;m Mehedi Hasan — and I lead
                    a team of 10+ designers, technicians, and strategists spread across
                    the USA, Canada, UK, and Indonesia. Together we specialise in one
                    thing: taking whatever visual asset you have — AI-generated or
                    otherwise — and producing professional, production-grade brand files
                    that work everywhere.
                  </p>
                  <p>
                    We also design brands from scratch. Because sometimes the right
                    answer is a mark that was never generated — it was crafted.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-3">
                  {["USA", "Canada", "UK", "Indonesia"].map((country) => (
                    <span key={country} className="text-xs font-sans font-medium text-[#0a0a0a] border border-[#e5e5e5] px-4 py-2">
                      {country}
                    </span>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[11px] font-sans font-semibold text-white/25 uppercase tracking-[0.25em] mb-8">
              How We Work
            </p>
          </SectionReveal>
          <h2 className="text-[clamp(36px,5vw,72px)] font-display font-bold text-white tracking-[-0.03em] leading-[1] mb-16 lg:mb-20">
            <AnimatedText text="Four principles." />
            <br />
            <AnimatedText text="No exceptions." delay={0.1} />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/10">
            {values.map((v, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className={`py-10 lg:py-12 ${i % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:border-l border-white/10"} border-b border-white/10`}>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-[11px] font-sans text-white/20 tracking-[0.1em]">{v.number}</span>
                    <div className="w-6 h-px bg-white/15" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-white tracking-[-0.02em] mb-4">
                    {v.title}
                  </h3>
                  <p className="text-sm font-sans text-white/45 leading-relaxed max-w-md">
                    {v.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionReveal>
                <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-6">
                  What We Do
                </p>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <h2 className="text-[clamp(32px,4vw,52px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1.05] mb-6">
                  Three disciplines. One uncompromising standard.
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <p className="text-base font-sans text-[#737373] leading-relaxed mb-10">
                  Whether you need an AI-generated logo vectorised, a brand built from
                  scratch, a website that reflects your identity, or a social presence
                  that looks consistent everywhere — Evoke delivers to the same
                  standard of precision.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <Link href="/services" className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] border border-[#0a0a0a] px-6 py-3.5 hover:bg-[#0a0a0a] hover:text-white transition-all duration-300">
                  View All Services ↗
                </Link>
              </SectionReveal>
            </div>
            <div className="space-y-4">
              {[
                {
                  label: "AI Logo Services",
                  items: ["Vectorisation", "Cleanup", "Typography reconstruction", "SVG conversion", "Brand system rebuild"],
                  dark: true,
                },
                {
                  label: "Traditional Branding",
                  items: ["Logo design", "Brand identity", "Business stationery", "Brand guidelines", "Visual identity system"],
                  dark: false,
                },
                {
                  label: "Digital Services",
                  items: ["Web design & development", "Social media management", "Social media content", "Brand consistency"],
                  dark: true,
                },
              ].map((block, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className={`p-8 ${block.dark ? "bg-[#0a0a0a]" : "bg-[#f5f5f5]"}`}>
                    <p className={`text-[10px] font-sans font-semibold uppercase tracking-[0.2em] mb-5 ${block.dark ? "text-white/30" : "text-[#0a0a0a]/40"}`}>
                      {block.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {block.items.map((item) => (
                        <span key={item} className={`text-xs font-sans px-3 py-1.5 border ${block.dark ? "text-white/60 border-white/10" : "text-[#404040] border-[#e5e5e5]"}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
