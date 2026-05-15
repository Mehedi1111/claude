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

// Category accent colors — used as left border and badge tint
const categoryAccent: Record<string, string> = {
  Guide: "#2563eb",
  "How-To": "#059669",
  Technical: "#7c3aed",
  Education: "#d97706",
  Troubleshooting: "#dc2626",
  Comparison: "#db2777",
  Branding: "#ea580c",
  default: "#0a0a0a",
};

const categoryBg: Record<string, string> = {
  Guide: "#eff6ff",
  "How-To": "#ecfdf5",
  Technical: "#f5f3ff",
  Education: "#fffbeb",
  Troubleshooting: "#fef2f2",
  Comparison: "#fdf2f8",
  Branding: "#fff7ed",
  default: "#f5f5f5",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// ── Featured card — wide, taller, shows excerpt ──────────────────────────────
function FeaturedCard({
  title,
  excerpt,
  category,
  readTime,
  date,
  slug,
}: {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
}) {
  const accent = categoryAccent[category] ?? categoryAccent.default;
  const bg = categoryBg[category] ?? categoryBg.default;

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="relative bg-white border border-[#e8e8e8] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
        {/* Left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: accent }} />

        <div className="pl-8 pr-8 py-10 lg:py-12 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            {/* Left: meta + title */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-[10px] font-sans font-bold uppercase tracking-[0.18em] px-2.5 py-1"
                  style={{ color: accent, backgroundColor: bg }}
                >
                  {category}
                </span>
                <span className="text-[11px] font-sans text-[#b4b4b4]">{readTime}</span>
                <span className="text-[10px] font-sans text-[#b4b4b4] ml-auto">{formatDate(date)}</span>
              </div>
              <h2 className="text-[clamp(22px,3vw,38px)] font-display font-bold text-[#0a0a0a] tracking-[-0.03em] leading-[1.1] line-clamp-2 mb-4 group-hover:text-[#1a1a1a] transition-colors">
                {title}
              </h2>
              <p className="text-[15px] font-sans text-[#737373] leading-relaxed line-clamp-2 max-w-2xl">
                {excerpt}
              </p>
            </div>

            {/* Right: CTA */}
            <div className="mt-6 lg:mt-0 lg:shrink-0 flex lg:flex-col items-center lg:items-end lg:justify-between lg:self-stretch gap-4">
              <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0a0a0a] border border-[#0a0a0a] px-5 py-3 group-hover:bg-[#0a0a0a] group-hover:text-white transition-all duration-300">
                Read Article
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
              <span
                className="hidden lg:block text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-white px-2 py-0.5"
                style={{ backgroundColor: accent }}
              >
                Latest
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ── Regular card — fixed height, uniform grid ─────────────────────────────────
function PostCard({
  title,
  category,
  readTime,
  date,
  slug,
}: {
  title: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
}) {
  const accent = categoryAccent[category] ?? categoryAccent.default;
  const bg = categoryBg[category] ?? categoryBg.default;

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="h-[280px] bg-white border border-[#e8e8e8] flex flex-col overflow-hidden transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 relative">
        {/* Top accent line */}
        <div className="h-[3px] w-full shrink-0" style={{ backgroundColor: accent }} />

        <div className="flex flex-col flex-1 p-6 lg:p-7">
          {/* Category + read time */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="text-[9px] font-sans font-bold uppercase tracking-[0.18em] px-2 py-0.5"
              style={{ color: accent, backgroundColor: bg }}
            >
              {category}
            </span>
            <span className="text-[11px] font-sans text-[#c0c0c0]">{readTime}</span>
          </div>

          {/* Title — always 3 lines clamped so all cards are same height */}
          <h2 className="text-[17px] font-display font-bold text-[#0a0a0a] tracking-[-0.025em] leading-[1.25] line-clamp-3 flex-1 group-hover:text-[#1a1a1a] transition-colors">
            {title}
          </h2>

          {/* Bottom */}
          <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#f0f0f0]">
            <time className="text-[11px] font-sans text-[#c0c0c0]">
              {formatDate(date)}
            </time>
            <span className="text-[#c0c0c0] group-hover:text-[#0a0a0a] group-hover:translate-x-1 transition-all duration-200 text-base">
              →
            </span>
          </div>
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
      {/* ── HERO ── */}
      <section className="pt-36 pb-16 sm:pb-20 lg:pt-44 lg:pb-24 bg-white border-b border-[#e8e8e8]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[11px] font-sans font-semibold text-[#0a0a0a]/30 uppercase tracking-[0.25em] mb-8">
              Journal — {posts.length} articles
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
              <p className="text-[15px] sm:text-base font-sans text-[#8a8a8a] max-w-xs leading-relaxed">
                Technical articles, brand guides, and studio notes from Mehedi Hasan — 15 years of brand design experience.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── ALL ARTICLES ── */}
      <section className="py-14 sm:py-16 lg:py-24 bg-[#f7f7f5]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">

          {/* Featured */}
          <SectionReveal>
            <FeaturedCard
              title={featured.frontmatter.title}
              excerpt={featured.frontmatter.excerpt}
              category={featured.frontmatter.category}
              readTime={featured.readTime}
              date={featured.frontmatter.date}
              slug={featured.slug}
            />
          </SectionReveal>

          {/* Grid */}
          {rest.length > 0 && (
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post, i) => (
                <SectionReveal key={post.slug} delay={Math.min(i * 0.04, 0.3)}>
                  <PostCard
                    title={post.frontmatter.title}
                    category={post.frontmatter.category}
                    readTime={post.readTime}
                    date={post.frontmatter.date}
                    slug={post.slug}
                  />
                </SectionReveal>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
