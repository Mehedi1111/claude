import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import type { BlogFrontmatter } from "@/lib/mdx";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export const metadata: Metadata = {
  title: "AI Logo Vectorization Blog — Guides, Tutorials & Technical Insights | Evoke Studio",
  description:
    "In-depth guides on AI logo vectorization, SVG optimization, CMYK conversion, embroidery-ready files, and brand identity. Written by Mehedi Hasan — 15 years of brand design experience.",
  openGraph: {
    title: "AI Logo Vectorization Blog — Guides, Tutorials & Technical Insights | Evoke Studio",
    description:
      "Expert guides on AI logo vectorization, SVG, CMYK, embroidery files, and brand systems. By Mehedi Hasan, Evoke Studio.",
    url: "https://madebyevoke.com/blog",
    siteName: "Evoke Studio",
    type: "website",
  },
  alternates: { canonical: "https://madebyevoke.com/blog" },
};

// Category accent colors
const categoryColor: Record<string, string> = {
  Guide: "#ffffff",
  "How-To": "#d4f4dd",
  Technical: "#d4e8ff",
  Education: "#fff0c2",
  Troubleshooting: "#ffd4d4",
  Comparison: "#e8d4ff",
  Branding: "#ffe8d4",
  "Social Media": "#d4fff4",
  "Web Design": "#d4ecff",
  default: "#ffffff",
};

function TitleCard({
  title,
  category,
  readTime,
  date,
  slug,
  featured,
}: {
  title: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
  featured?: boolean;
}) {
  const accent = categoryColor[category] ?? categoryColor.default;
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <div
        className={`relative bg-[#0a0a0a] overflow-hidden transition-all duration-300 group-hover:bg-[#111] ${
          featured ? "min-h-[300px] sm:min-h-[360px] lg:min-h-[400px]" : "min-h-[200px] sm:min-h-[220px]"
        } flex flex-col justify-between p-7 sm:p-8 lg:p-10`}
      >
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Top: category + meta */}
        <div className="relative z-10 flex items-center justify-between gap-4">
          <span
            className="text-[10px] font-sans font-bold uppercase tracking-[0.18em] px-2.5 py-1"
            style={{ color: "#0a0a0a", backgroundColor: accent }}
          >
            {category}
          </span>
          <span className="text-[11px] font-sans text-white/30">{readTime}</span>
        </div>

        {/* Title */}
        <div className="relative z-10 mt-6">
          <h2
            className={`font-display font-bold text-white tracking-[-0.035em] leading-[1.05] group-hover:text-white/85 transition-colors ${
              featured
                ? "text-[clamp(24px,3.5vw,48px)]"
                : "text-[clamp(18px,2vw,26px)]"
            }`}
          >
            {title}
          </h2>
        </div>

        {/* Bottom: date + arrow */}
        <div className="relative z-10 flex items-center justify-between mt-8 pt-5 border-t border-white/[0.07]">
          <time className="text-[11px] font-sans text-white/30">
            {new Date(date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 text-lg">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

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
      <section className="pt-36 pb-16 sm:pb-20 lg:pt-44 lg:pb-24 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/35 uppercase tracking-[0.2em] mb-8">
              Blog
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
                Technical articles, brand guides, and studio notes from Mehedi Hasan — 15 years of brand design experience.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[10px] font-sans font-semibold text-white/25 uppercase tracking-[0.2em] mb-6">
              Latest Article
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <TitleCard
              title={featured.frontmatter.title}
              category={featured.frontmatter.category}
              readTime={featured.readTime}
              date={featured.frontmatter.date}
              slug={featured.slug}
              featured
            />
          </SectionReveal>
        </div>
      </section>

      {/* Post grid */}
      {rest.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-28 bg-[#fafafa]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
            <SectionReveal>
              <p className="text-[10px] font-sans font-semibold text-[#0a0a0a]/30 uppercase tracking-[0.2em] mb-8">
                All Articles — {rest.length + 1} published
              </p>
            </SectionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e5e5]">
              {rest.map((post, i) => (
                <SectionReveal key={post.slug} delay={i * 0.05}>
                  <TitleCard
                    title={post.frontmatter.title}
                    category={post.frontmatter.category}
                    readTime={post.readTime}
                    date={post.frontmatter.date}
                    slug={post.slug}
                  />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
