import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getPost, getAllPosts, getSlugs, extractHeadings } from "@/lib/mdx";
import type { BlogFrontmatter } from "@/lib/mdx";
import mdxComponents from "@/components/mdx";
import BlogSidebar from "@/components/blog/BlogSidebar";
import ReadingProgress from "@/components/blog/ReadingProgress";
import SectionReveal from "@/components/ui/SectionReveal";

export async function generateStaticParams() {
  return getSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost<BlogFrontmatter>("blog", slug);
  if (!post) return {};
  const { frontmatter } = post;
  return {
    title: frontmatter.seo?.title || frontmatter.title,
    description: frontmatter.seo?.description || frontmatter.excerpt,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      images: [frontmatter.image],
      type: "article",
      publishedTime: frontmatter.date,
      authors: [frontmatter.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost<BlogFrontmatter>("blog", slug);
  if (!post) notFound();

  const { frontmatter, content, readTime } = post;
  const headings = extractHeadings(content);

  // Related posts
  const allPosts = getAllPosts<BlogFrontmatter>("blog");
  const related = (frontmatter.related ?? [])
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, 3)
    .map((p) => ({
      slug: p!.slug,
      title: p!.frontmatter.title,
      category: p!.frontmatter.category,
      readTime: p!.readTime,
    }));

  // JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    datePublished: frontmatter.date,
    author: { "@type": "Organization", name: frontmatter.author.name },
    image: frontmatter.image,
    publisher: { "@type": "Organization", name: "Evoke Studio" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ReadingProgress />

      {/* Article header */}
      <section className="pt-36 pb-10 lg:pt-44 lg:pb-14 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            {/* Breadcrumb + meta */}
            <SectionReveal>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <Link
                  href="/blog"
                  className="text-[12px] font-sans font-medium text-[#737373] hover:text-[#0a0a0a] transition-colors group"
                >
                  <span className="group-hover:-translate-x-0.5 inline-block transition-transform">←</span>{" "}
                  Journal
                </Link>
                <span className="w-px h-3 bg-[#e5e5e5]" />
                <span className="text-[11px] font-sans font-bold text-[#0a0a0a] uppercase tracking-[0.1em] border border-[#e5e5e5] px-2.5 py-1">
                  {frontmatter.category}
                </span>
                <span className="text-[12px] font-sans text-[#b4b4b4]">{readTime}</span>
              </div>
            </SectionReveal>

            {/* Title */}
            <h1 className="text-[clamp(28px,4.5vw,58px)] font-display font-bold text-[#0a0a0a] tracking-[-0.04em] leading-[1.05] mb-5 sm:mb-6">
              {frontmatter.title}
            </h1>

            {/* Excerpt */}
            <SectionReveal delay={0.1}>
              <p className="text-[17px] sm:text-lg font-sans text-[#737373] leading-relaxed mb-8 max-w-2xl">
                {frontmatter.excerpt}
              </p>
            </SectionReveal>

            {/* Author + date */}
            <SectionReveal delay={0.15}>
              <div className="flex items-center justify-between gap-6 pb-8 border-b border-[#e5e5e5]">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 bg-[#0a0a0a] flex items-center justify-center shrink-0">
                    <span className="text-[11px] font-display font-bold text-white">E</span>
                  </div>
                  <div>
                    <p className="text-sm font-sans font-semibold text-[#0a0a0a]">
                      {frontmatter.author.name}
                    </p>
                    <p className="text-[12px] font-sans text-[#a3a3a3]">
                      {frontmatter.author.role}
                    </p>
                  </div>
                </div>
                <time className="text-[12px] font-sans text-[#a3a3a3]">
                  {new Date(frontmatter.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="bg-[#f5f5f5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative overflow-hidden" style={{ aspectRatio: "21/8" }}>
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              fill
              className="object-cover grayscale"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {/* Content + sidebar */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px] gap-12 lg:gap-16 xl:gap-20">

            {/* Article prose */}
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

            {/* Sidebar */}
            <BlogSidebar headings={headings} related={related} />
          </div>

          {/* Tags + bottom nav */}
          <div className="mt-16 pt-10 border-t border-[#e5e5e5] max-w-3xl">
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-sans font-medium text-[#737373] border border-[#e5e5e5] px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#737373] hover:text-[#0a0a0a] transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Back to Journal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
