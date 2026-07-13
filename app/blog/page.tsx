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
    images: [{ url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c47385218256145.679e5b461e6a6.jpg", width: 1400, height: 933, alt: "Evoke Studio — Brand Identity & AI Logo Vectorization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Logo Vectorization Blog — Guides, Tutorials & Technical Insights | Evoke Studio",
    description: "Expert guides on AI logo vectorization, SVG, CMYK, embroidery files, and brand systems. By Mehedi Hasan, Evoke Studio.",
    images: ["https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c47385218256145.679e5b461e6a6.jpg"],
    creator: "@MadeByEvoke",
  },
  alternates: { canonical: "https://madebyevoke.com/blog" },
};

// Vivid category accents — readable on both light and dark backgrounds
const categoryAccent: Record<string, string> = {
  Guide: "#3b82f6",
  "How-To": "#10b981",
  Technical: "#8b5cf6",
  Education: "#f59e0b",
  Troubleshooting: "#ef4444",
  Comparison: "#ec4899",
  Branding: "#f97316",
  default: "#a3a3a3",
};

function getAccent(category: string) {
  return categoryAccent[category] ?? categoryAccent.default;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// ── Featured (always dark) ────────────────────────────────────────────────────
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
  const accent = getAccent(category);

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="relative border border-[#1e1e1e] overflow-hidden transition-colors duration-300 hover:bg-[#111111]">
        {/* Left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ backgroundColor: accent }} />

        <div className="pl-8 pr-8 py-10 lg:py-12 lg:pl-12 lg:pr-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            {/* Left: meta + title + excerpt */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="text-[10px] font-sans font-bold uppercase tracking-[0.18em] px-2.5 py-1"
                  style={{ color: accent, backgroundColor: `${accent}1a` }}
                >
                  {category}
                </span>
                <span className="text-[11px] font-sans text-white/30">{readTime}</span>
                <span className="text-[10px] font-sans text-white/25 lg:ml-auto">{formatDate(date)}</span>
              </div>
              <h2 className="text-[clamp(22px,3vw,40px)] font-display font-bold text-white tracking-[-0.03em] leading-[1.1] line-clamp-2 mb-4 group-hover:text-white/85 transition-colors">
                {title}
              </h2>
              <p className="text-[15px] font-sans text-white/40 leading-relaxed line-clamp-2 max-w-2xl">
                {excerpt}
              </p>
            </div>

            {/* Right: CTA */}
            <div className="mt-6 lg:mt-0 lg:shrink-0 flex lg:flex-col items-center lg:items-end lg:justify-between lg:self-stretch gap-4">
              <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white border border-white/15 px-5 py-3 group-hover:bg-white group-hover:text-[#0a0a0a] group-hover:border-white transition-all duration-300">
                Read Article
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
              <span
                className="hidden lg:block text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-[#0a0a0a] px-2.5 py-0.5"
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

// ── Grid card (light or dark variant) ────────────────────────────────────────
function PostCard({
  title,
  category,
  readTime,
  date,
  slug,
  dark,
}: {
  title: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
  dark: boolean;
}) {
  const accent = getAccent(category);

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div
        className={`h-[280px] flex flex-col overflow-hidden transition-colors duration-200 ${
          dark
            ? "bg-[#0f0f0f] hover:bg-[#161616]"
            : "bg-white hover:bg-[#fafafa]"
        }`}
      >
        {/* Top accent line */}
        <div className="h-[3px] w-full shrink-0" style={{ backgroundColor: accent }} />

        <div className="flex flex-col flex-1 p-6 lg:p-7">
          {/* Category + read time */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="text-[9px] font-sans font-bold uppercase tracking-[0.18em] px-2 py-0.5"
              style={{ color: accent, backgroundColor: `${accent}1a` }}
            >
              {category}
            </span>
            <span className={`text-[11px] font-sans ${dark ? "text-white/25" : "text-[#c0c0c0]"}`}>
              {readTime}
            </span>
          </div>

          {/* Title — clamped to 3 lines, same height on every card */}
          <h2
            className={`text-[17px] font-display font-bold tracking-[-0.025em] leading-[1.25] line-clamp-3 flex-1 transition-colors ${
              dark
                ? "text-white/85 group-hover:text-white"
                : "text-[#0a0a0a] group-hover:text-[#1a1a1a]"
            }`}
          >
            {title}
          </h2>

          {/* Bottom row */}
          <div
            className={`flex items-center justify-between pt-4 mt-4 border-t ${
              dark ? "border-white/[0.06]" : "border-[#f0f0f0]"
            }`}
          >
            <time className={`text-[11px] font-sans ${dark ? "text-white/25" : "text-[#c0c0c0]"}`}>
              {formatDate(date)}
            </time>
            <span
              className={`transition-all duration-200 text-base group-hover:translate-x-1 ${
                dark ? "text-white/20 group-hover:text-white" : "text-[#c0c0c0] group-hover:text-[#0a0a0a]"
              }`}
            >
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
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

  // Split remaining posts into rows of 3
  const rows: (typeof rest)[] = [];
  for (let i = 0; i < rest.length; i += 3) {
    rows.push(rest.slice(i, i + 3));
  }

  return (
    <>
      {/* ── HERO — dark ── */}
      <section className="pt-36 pb-16 sm:pb-20 lg:pt-44 lg:pb-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[11px] font-sans font-semibold text-white/30 uppercase tracking-[0.25em] mb-8">
              Journal — {posts.length} articles
            </p>
          </SectionReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">
            <h1 className="text-[clamp(44px,6.5vw,96px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.92]">
              <AnimatedText text="Ideas." />
              <br />
              <AnimatedText text="Process." delay={0.1} />
              <br />
              <AnimatedText text="Precision." delay={0.2} />
            </h1>
            <SectionReveal delay={0.3}>
              <p className="text-[15px] sm:text-base font-sans text-white/50 max-w-xs leading-relaxed">
                Technical articles, brand guides, and studio notes from Mehedi Hasan — 15 years of brand design experience.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── FEATURED — dark band ── */}
      <section className="bg-[#0a0a0a] pt-12 pb-5 lg:pt-16 lg:pb-6">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <SectionReveal>
            <p className="text-[10px] font-sans font-semibold text-white/20 uppercase tracking-[0.25em] mb-5">
              Latest Article
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <FeaturedCard
              title={featured.frontmatter.title}
              excerpt={featured.frontmatter.excerpt}
              category={featured.frontmatter.category}
              readTime={featured.readTime}
              date={featured.frontmatter.date}
              slug={featured.slug}
            />
          </SectionReveal>
        </div>
      </section>

      {/* ── GRID ROWS — alternating white / dark ── */}
      {rows.map((row, ri) => {
        // row 0 = white, row 1 = dark, row 2 = white …
        const isDark = ri % 2 === 1;
        const isLast = ri === rows.length - 1;

        return (
          <section
            key={ri}
            className={`${isDark ? "bg-[#0a0a0a]" : "bg-white"} ${isLast ? "pb-16 lg:pb-24" : "pb-0"}`}
          >
            <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 pt-5 lg:pt-6">
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px ${
                  isDark ? "bg-[#1e1e1e]" : "bg-[#e8e8e8]"
                }`}
              >
                {row.map((post, i) => (
                  <SectionReveal key={post.slug} delay={i * 0.07}>
                    <PostCard
                      title={post.frontmatter.title}
                      category={post.frontmatter.category}
                      readTime={post.readTime}
                      date={post.frontmatter.date}
                      slug={post.slug}
                      dark={isDark}
                    />
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
