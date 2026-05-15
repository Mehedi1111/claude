import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/mdx";
import type { BlogFrontmatter } from "@/lib/mdx";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export const metadata: Metadata = {
  title: "Journal — AI Logo & Brand Design Insights",
  description:
    "Technical guides and brand insights from the Evoke studio. Learn about AI logo vectorization, brand systems, and professional design production.",
};

export default function BlogPage() {
  const posts = getAllPosts<BlogFrontmatter>("blog");
  const [featured, ...rest] = posts;

  if (!featured) {
    return (
      <section className="pt-44 pb-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[#737373] font-sans">No posts yet.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 sm:pb-20 lg:pt-44 lg:pb-28 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-8">
              Journal
            </p>
          </SectionReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">
            <h1 className="text-[clamp(44px,6.5vw,96px)] font-display font-bold text-[#0a0a0a] tracking-[-0.04em] leading-[0.92]">
              <AnimatedText text="Ideas." />
              <br />
              <AnimatedText text="Process." delay={0.1} />
              <br />
              <AnimatedText text="Precision." delay={0.2} />
            </h1>
            <SectionReveal delay={0.3}>
              <p className="text-[15px] sm:text-base font-sans text-[#737373] max-w-xs leading-relaxed">
                Technical articles, brand guides, and studio notes from the
                people who rebuild AI-generated logos for a living.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#f5f5f5] border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="relative overflow-hidden bg-[#e5e5e5]" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={featured.frontmatter.image}
                    alt={featured.frontmatter.title}
                    fill
                    className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-[11px] font-sans font-bold text-[#0a0a0a] uppercase tracking-[0.12em] border border-[#0a0a0a]/15 px-2.5 py-1">
                      {featured.frontmatter.category}
                    </span>
                    <span className="text-[12px] font-sans text-[#a3a3a3]">
                      {featured.readTime}
                    </span>
                    <span className="text-[12px] font-sans text-[#a3a3a3]">
                      {new Date(featured.frontmatter.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                  <h2 className="text-[clamp(22px,2.8vw,38px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1.1] mb-4 group-hover:text-[#0a0a0a]/65 transition-colors">
                    {featured.frontmatter.title}
                  </h2>
                  <p className="text-[15px] sm:text-base font-sans text-[#737373] leading-relaxed mb-6">
                    {featured.frontmatter.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] group-hover:gap-3 transition-all">
                    Read Article
                    <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Post grid */}
      {rest.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {rest.map((post, i) => (
                <SectionReveal key={post.slug} delay={i * 0.08}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <article>
                      <div className="relative overflow-hidden bg-[#f0f0f0] mb-5" style={{ aspectRatio: "16/9" }}>
                        <Image
                          src={post.frontmatter.image}
                          alt={post.frontmatter.title}
                          fill
                          className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="text-[10px] font-sans font-bold text-[#0a0a0a] uppercase tracking-[0.12em] border border-[#e5e5e5] px-2 py-0.5">
                          {post.frontmatter.category}
                        </span>
                        <span className="text-[11px] font-sans text-[#b4b4b4]">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-[17px] sm:text-lg font-display font-bold text-[#0a0a0a] tracking-[-0.025em] leading-[1.2] mb-2.5 group-hover:text-[#0a0a0a]/60 transition-colors">
                        {post.frontmatter.title}
                      </h3>
                      <p className="text-[14px] font-sans text-[#737373] leading-relaxed mb-4 line-clamp-3">
                        {post.frontmatter.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#f5f5f5]">
                        <time className="text-[11px] font-sans text-[#b4b4b4]">
                          {new Date(post.frontmatter.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </time>
                        <span className="text-[12px] font-sans font-semibold text-[#0a0a0a] group-hover:underline">
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
      )}
    </>
  );
}
