import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getPost, getSlugs } from "@/lib/mdx";
import { portfolioItems } from "@/lib/data";
import type { CaseStudyFrontmatter } from "@/lib/mdx";
import mdxComponents from "@/components/mdx";
import ReadingProgress from "@/components/blog/ReadingProgress";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";
import CTASection from "@/components/sections/CTASection";

export async function generateStaticParams() {
  // MDX files take precedence; fall back to data.ts slugs for items without MDX
  const mdxSlugs = new Set(getSlugs("case-studies"));
  const dataSlugs = portfolioItems.map((p) => p.slug);
  const all = [...new Set([...mdxSlugs, ...dataSlugs])];
  return all.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost<CaseStudyFrontmatter>("case-studies", slug);
  if (post) {
    const fm = post.frontmatter;
    return {
      title: fm.seo?.title || `${fm.client} — Case Study | Evoke Studio`,
      description: fm.seo?.description || fm.challenge,
      keywords: fm.seo?.keywords,
      openGraph: {
        title: fm.seo?.title || `${fm.client} — Case Study`,
        description: fm.seo?.description || fm.challenge,
        images: [fm.coverImage],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: fm.seo?.title || `${fm.client} — Case Study`,
        description: fm.seo?.description || fm.challenge,
      },
    };
  }
  const item = portfolioItems.find((p) => p.slug === slug);
  return item ? { title: `${item.client} — Case Study`, description: item.description } : {};
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost<CaseStudyFrontmatter>("case-studies", slug);

  // MDX case study
  if (post) {
    const { frontmatter, content } = post;
    const allSlugs = getSlugs("case-studies");
    const currentIndex = allSlugs.indexOf(slug);
    const nextSlug = allSlugs[(currentIndex + 1) % allSlugs.length];
    const nextPost = nextSlug ? getPost<CaseStudyFrontmatter>("case-studies", nextSlug) : null;

    return (
      <>
        <ReadingProgress />

        {/* Hero */}
        <section className="pt-36 pb-0 lg:pt-44 bg-[#0a0a0a] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
            <SectionReveal>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-[12px] font-sans font-medium text-white/30 hover:text-white/70 transition-colors mb-10 sm:mb-12 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                All Work
              </Link>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7 sm:mb-8">
                <span className="text-[11px] font-sans font-semibold text-white/25 uppercase tracking-[0.2em]">
                  {frontmatter.category}
                </span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="text-[11px] font-sans text-white/25">{frontmatter.year}</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="text-[11px] font-sans text-white/25">{frontmatter.service}</span>
              </div>
            </SectionReveal>

            <h1 className="text-[clamp(44px,7.5vw,108px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.9] mb-16 sm:mb-20">
              <AnimatedText text={frontmatter.client} />
            </h1>
          </div>

          {/* Cover image */}
          <div className="relative overflow-hidden" style={{ aspectRatio: "21/8" }}>
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.client}
              fill
              className="object-cover grayscale opacity-55"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-transparent to-[#0a0a0a]/30" />
          </div>
        </section>

        {/* Content */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr] gap-12 lg:gap-16 xl:gap-24">

              {/* Sidebar */}
              <div className="lg:pt-1">
                <SectionReveal>
                  <div className="space-y-7 lg:sticky lg:top-28">
                    {[
                      { label: "Client", value: frontmatter.client },
                      { label: "Service", value: frontmatter.service },
                      { label: "Year", value: frontmatter.year },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#b4b4b4] mb-1.5">
                          {label}
                        </p>
                        <p className="text-[14px] font-sans text-[#0a0a0a] leading-snug">{value}</p>
                      </div>
                    ))}

                    <div>
                      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#b4b4b4] mb-2">
                        Tags
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {frontmatter.tags.map((tag) => (
                          <span key={tag} className="text-[11px] font-sans text-[#737373] border border-[#e5e5e5] px-2.5 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="block text-center text-[13px] font-sans font-semibold text-white bg-[#0a0a0a] px-5 py-3.5 hover:bg-[#1f1f1f] transition-colors"
                      >
                        Similar project →
                      </Link>
                    </div>
                  </div>
                </SectionReveal>
              </div>

              {/* MDX content */}
              <article className="prose-evoke min-w-0">
                <MDXRemote
                  source={content}
                  components={mdxComponents}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [
                        rehypeSlug,
                        [rehypeAutolinkHeadings, { behavior: "wrap" }],
                      ],
                    },
                  }}
                />
              </article>
            </div>
          </div>
        </section>

        {/* Next case study */}
        {nextPost && (
          <section className="border-t border-[#e5e5e5] bg-[#fafafa]">
            <Link href={`/portfolio/${nextPost.slug}`} className="group block">
              <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 py-14 sm:py-16 lg:py-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <p className="text-[11px] font-sans font-bold text-[#b4b4b4] uppercase tracking-[0.2em] mb-3">
                      Next Case Study
                    </p>
                    <p className="text-[clamp(22px,3.5vw,48px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] group-hover:text-[#0a0a0a]/55 transition-colors">
                      {nextPost.frontmatter.client}
                    </p>
                    <p className="text-sm font-sans text-[#a3a3a3] mt-1">{nextPost.frontmatter.category}</p>
                  </div>
                  <span className="text-3xl text-[#0a0a0a]/20 group-hover:text-[#0a0a0a] group-hover:translate-x-3 transition-all duration-300 shrink-0">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        <CTASection />
      </>
    );
  }

  // Fallback: data.ts case study (for items without MDX yet)
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) notFound();

  const currentIndex = portfolioItems.findIndex((p) => p.slug === slug);
  const nextItem = portfolioItems[(currentIndex + 1) % portfolioItems.length];

  return (
    <>
      <section className="pt-36 pb-0 lg:pt-44 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-[12px] font-sans font-medium text-white/30 hover:text-white/70 transition-colors mb-12 group">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> All Work
            </Link>
          </SectionReveal>
          <h1 className="text-[clamp(44px,7.5vw,108px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.9] mb-16">
            <AnimatedText text={item.client} />
          </h1>
        </div>
        <div className="relative overflow-hidden" style={{ aspectRatio: "21/8" }}>
          <Image src={item.coverImage} alt={item.client} fill className="object-cover grayscale opacity-55" priority sizes="100vw" />
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-24">
            <SectionReveal>
              <div className="space-y-7 lg:sticky lg:top-28">
                {[{ label: "Client", value: item.client }, { label: "Service", value: item.service }, { label: "Year", value: item.year }].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#b4b4b4] mb-1.5">{label}</p>
                    <p className="text-[14px] font-sans text-[#0a0a0a]">{value}</p>
                  </div>
                ))}
                {"websiteUrl" in item && item.websiteUrl && (
                  <a
                    href={item.websiteUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[13px] font-sans font-semibold text-[#0a0a0a] border border-[#0a0a0a] px-5 py-3.5 hover:bg-[#0a0a0a] hover:text-white transition-colors mb-3"
                  >
                    View Live Site ↗
                  </a>
                )}
                <Link href="/contact" className="block text-center text-[13px] font-sans font-semibold text-white bg-[#0a0a0a] px-5 py-3.5 hover:bg-[#1f1f1f] transition-colors">
                  Similar project →
                </Link>
              </div>
            </SectionReveal>
            <div className="space-y-12 prose-evoke">
              <SectionReveal><div><p className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#b4b4b4] mb-5">The Challenge</p><p className="text-lg lg:text-xl font-sans text-[#404040] leading-relaxed">{item.challenge}</p></div></SectionReveal>
              <SectionReveal><div className="relative overflow-hidden bg-[#f0f0f0]" style={{ aspectRatio: "16/9" }}><Image src={item.image} alt={item.client} fill className="object-cover grayscale" sizes="(max-width: 768px) 100vw, 66vw" /></div></SectionReveal>
              <SectionReveal><div><p className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#b4b4b4] mb-5">The Approach</p><p className="text-lg lg:text-xl font-sans text-[#404040] leading-relaxed">{item.solution}</p></div></SectionReveal>
              <SectionReveal><div className="border-t border-[#e5e5e5] pt-10"><p className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#b4b4b4] mb-7">Outcomes</p><div className="space-y-4">{item.outcomes.map((o, i) => (<div key={i} className="flex items-start gap-5"><span className="text-[10px] font-sans text-[#b4b4b4] tracking-[0.1em] pt-1 w-6 shrink-0">0{i + 1}</span><p className="text-base font-sans font-medium text-[#0a0a0a]">{o}</p></div>))}</div></div></SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e5e5e5] bg-[#fafafa]">
        <Link href={`/portfolio/${nextItem.slug}`} className="group block">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 py-16 flex items-center justify-between gap-6">
            <div>
              <p className="text-[11px] font-sans font-bold text-[#b4b4b4] uppercase tracking-[0.2em] mb-3">Next Project</p>
              <p className="text-[clamp(22px,3.5vw,48px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] group-hover:text-[#0a0a0a]/55 transition-colors">{nextItem.client}</p>
            </div>
            <span className="text-3xl text-[#0a0a0a]/20 group-hover:text-[#0a0a0a] group-hover:translate-x-3 transition-all duration-300 shrink-0">→</span>
          </div>
        </Link>
      </section>
      <CTASection />
    </>
  );
}
