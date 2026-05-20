import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import ShareButtons from "@/components/blog/ShareButtons";

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
  const metaUrl = `https://madebyevoke.com/blog/${slug}`;
  return {
    title: frontmatter.seo?.title || frontmatter.title,
    description: frontmatter.seo?.description || frontmatter.excerpt,
    alternates: { canonical: metaUrl },
    openGraph: {
      title: frontmatter.seo?.title || frontmatter.title,
      description: frontmatter.seo?.description || frontmatter.excerpt,
      url: metaUrl,
      siteName: "Evoke Studio",
      type: "article",
      publishedTime: frontmatter.date,
      authors: [frontmatter.author.name],
      ...(frontmatter.image ? { images: [frontmatter.image] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.seo?.title || frontmatter.title,
      description: frontmatter.seo?.description || frontmatter.excerpt,
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

  const isMehedi = frontmatter.author.name === "Mehedi Hasan";

  const canonicalUrl = `https://madebyevoke.com/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    keywords: frontmatter.tags?.join(", "),
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    url: canonicalUrl,
    author: isMehedi
      ? {
          "@type": "Person",
          name: "Mehedi Hasan",
          jobTitle: "Founder & CEO",
          worksFor: { "@type": "Organization", name: "Evoke Studio" },
          sameAs: [
            "https://www.linkedin.com/in/m-mehedi-h-hasan/",
            "https://www.upwork.com/freelancers/~011af9123385f97f10",
            "https://www.behance.net/mh62221352f0fFF",
          ],
        }
      : { "@type": "Organization", name: frontmatter.author.name },
    publisher: {
      "@type": "Organization",
      name: "Evoke Studio",
      url: "https://madebyevoke.com",
      logo: { "@type": "ImageObject", url: "https://madebyevoke.com/icon.png" },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://madebyevoke.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://madebyevoke.com/blog" },
      { "@type": "ListItem", position: 3, name: frontmatter.title, item: canonicalUrl },
    ],
  };

  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ReadingProgress />

      {/* ── HERO: dark typographic header ── */}
      <section className="relative bg-[#0a0a0a] pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        {/* subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          {/* breadcrumb + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Link
              href="/blog"
              className="text-[12px] font-sans font-medium text-white/35 hover:text-white/70 transition-colors group"
            >
              <span className="group-hover:-translate-x-0.5 inline-block transition-transform">←</span>{" "}
              Blog
            </Link>
            <span className="w-px h-3 bg-white/10" />
            <span className="text-[11px] font-sans font-bold text-white/50 uppercase tracking-[0.12em] border border-white/10 px-2.5 py-1">
              {frontmatter.category}
            </span>
            <span className="text-[12px] font-sans text-white/30">{readTime}</span>
          </div>

          {/* Title — the visual centerpiece */}
          <h1 className="text-[clamp(30px,5.5vw,76px)] font-display font-bold text-white tracking-[-0.04em] leading-[1.0] max-w-5xl mb-7">
            {frontmatter.title}
          </h1>

          {/* Excerpt */}
          <p className="text-[16px] sm:text-lg font-sans text-white/45 leading-relaxed max-w-2xl mb-10">
            {frontmatter.excerpt}
          </p>

          {/* Author row + share */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/[0.08]">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                <span className="text-[13px] font-display font-bold text-white">M</span>
              </div>
              <div>
                <p className="text-sm font-sans font-semibold text-white">
                  {frontmatter.author.name}
                </p>
                <p className="text-[12px] font-sans text-white/35">
                  {frontmatter.author.role}
                </p>
              </div>
            </div>
            <time className="text-[12px] font-sans text-white/30">{formattedDate}</time>
          </div>

          {/* Mobile share row — sits inside hero */}
          <div className="mt-6 pt-6 border-t border-white/[0.06] lg:hidden">
            <ShareButtons title={frontmatter.title} slug={slug} />
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px] gap-12 lg:gap-16 xl:gap-20">

            {/* Article prose */}
            <article className="prose-evoke min-w-0">
              <MDXRemote
                source={content}
                components={mdxComponents}
                options={{
                  blockJS: false,
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeSlug,
                      [rehypeAutolinkHeadings, { behavior: "wrap" }],
                    ],
                  },
                }}
              />

              {/* Desktop share — inside article after content */}
              <div className="hidden lg:block mt-14 pt-10 border-t border-[#e5e5e5]">
                <ShareButtons title={frontmatter.title} slug={slug} />
              </div>
            </article>

            {/* Sidebar */}
            <BlogSidebar headings={headings} related={related} />
          </div>

          {/* Author bio */}
          {isMehedi && (
            <div className="mt-16 pt-10 border-t border-[#e5e5e5] max-w-3xl">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#0a0a0a] flex items-center justify-center shrink-0">
                  <span className="text-[18px] font-display font-bold text-white">M</span>
                </div>
                <div>
                  <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.12em] text-[#b4b4b4] mb-1.5">
                    Written by
                  </p>
                  <p className="text-[19px] font-display font-bold text-[#0a0a0a] tracking-[-0.02em] mb-1.5">
                    Mehedi Hasan
                  </p>
                  <p className="text-[13px] font-sans text-[#737373] leading-relaxed mb-4 max-w-lg">
                    Founder & CEO of Evoke Studio. 15 years of brand identity design, AI logo vectorization, and visual systems for clients across technology, wellness, professional services, and consumer brands.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://www.linkedin.com/in/m-mehedi-h-hasan/" target="_blank" rel="noopener noreferrer" className="text-[12px] font-sans font-semibold text-[#0a0a0a] hover:underline underline-offset-2">LinkedIn ↗</a>
                    <a href="https://www.upwork.com/freelancers/~011af9123385f97f10" target="_blank" rel="noopener noreferrer" className="text-[12px] font-sans font-semibold text-[#0a0a0a] hover:underline underline-offset-2">Upwork ↗</a>
                    <a href="https://www.behance.net/mh62221352f0fFF" target="_blank" rel="noopener noreferrer" className="text-[12px] font-sans font-semibold text-[#0a0a0a] hover:underline underline-offset-2">Behance ↗</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tags + back nav */}
          <div className="mt-10 pt-10 border-t border-[#e5e5e5] max-w-3xl">
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
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
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
