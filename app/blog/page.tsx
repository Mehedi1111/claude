import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export const metadata: Metadata = {
  title: "Journal — AI Logo & Brand Design Insights",
  description:
    "Technical guides and brand insights from the Evoke studio. Learn about AI logo vectorization, brand systems, and professional design production.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="text-xs font-sans font-semibold text-[#0a0a0a]/40 uppercase tracking-[0.2em] mb-8">
              Journal
            </p>
          </SectionReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="text-[clamp(48px,7vw,100px)] font-display font-bold text-[#0a0a0a] tracking-[-0.04em] leading-[0.92]">
              <AnimatedText text="Ideas." />
              <br />
              <AnimatedText text="Process." delay={0.1} />
              <br />
              <AnimatedText text="Precision." delay={0.2} />
            </h1>
            <SectionReveal delay={0.3}>
              <p className="text-base font-sans text-[#737373] max-w-xs leading-relaxed">
                Technical articles, brand guides, and studio notes from the
                people who rebuild AI-generated logos for a living.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 bg-[#f5f5f5] border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <Link href={`/blog/${featured.slug}`} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="relative aspect-[16/9] lg:aspect-[4/3] overflow-hidden bg-[#e5e5e5]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-sans font-semibold text-[#0a0a0a] bg-[#0a0a0a]/8 px-2.5 py-1 uppercase tracking-[0.1em]">
                      {featured.category}
                    </span>
                    <span className="text-xs font-sans text-[#737373]">
                      {featured.readTime}
                    </span>
                    <span className="text-xs font-sans text-[#737373]">
                      {featured.date}
                    </span>
                  </div>
                  <h2 className="text-[clamp(24px,3vw,40px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1.1] mb-4 group-hover:text-[#0a0a0a]/70 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-base font-sans text-[#737373] leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <span className="text-sm font-sans font-medium text-[#0a0a0a] link-underline">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* All posts */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <SectionReveal key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article>
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#f0f0f0] mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-sans font-semibold text-[#0a0a0a] uppercase tracking-[0.1em] border border-[#e5e5e5] px-2 py-0.5">
                        {post.category}
                      </span>
                      <span className="text-xs font-sans text-[#737373]">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-[#0a0a0a] tracking-[-0.02em] leading-[1.2] mb-2 group-hover:text-[#0a0a0a]/60 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm font-sans text-[#737373] leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-sans text-[#0a0a0a]/40">
                        {post.date}
                      </span>
                      <span className="text-xs font-sans font-medium text-[#0a0a0a] group-hover:underline">
                        Read →
                      </span>
                    </div>
                  </article>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
