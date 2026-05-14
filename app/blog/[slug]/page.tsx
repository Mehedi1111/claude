import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import BlogPostClient from "@/components/blog/BlogPostClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author.name,
    },
    image: post.image,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-12 lg:pt-44 lg:pb-16 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <Link
                href="/blog"
                className="text-xs font-sans font-medium text-[#737373] hover:text-[#0a0a0a] transition-colors link-underline"
              >
                ← Journal
              </Link>
              <span className="w-px h-3 bg-[#e5e5e5]" />
              <span className="text-xs font-sans font-semibold text-[#0a0a0a] uppercase tracking-[0.1em] border border-[#e5e5e5] px-2 py-0.5">
                {post.category}
              </span>
              <span className="text-xs font-sans text-[#737373]">{post.readTime}</span>
            </div>
            <h1 className="text-[clamp(32px,4.5vw,60px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1.05] mb-6">
              {post.title}
            </h1>
            <p className="text-lg font-sans text-[#737373] leading-relaxed mb-8">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 pb-8 border-b border-[#e5e5e5]">
              <div className="w-8 h-8 bg-[#0a0a0a] flex items-center justify-center">
                <span className="text-[10px] font-display font-bold text-white">E</span>
              </div>
              <div>
                <p className="text-sm font-sans font-semibold text-[#0a0a0a]">
                  {post.author.name}
                </p>
                <p className="text-xs font-sans text-[#737373]">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="bg-[#f5f5f5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="relative aspect-[16/7] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover grayscale"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {/* Article layout */}
      <BlogPostClient post={post} related={related} />
    </>
  );
}
