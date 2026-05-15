import Link from "next/link";
import type { Heading } from "@/lib/mdx";
import TableOfContents from "./TableOfContents";

interface RelatedPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
}

export default function BlogSidebar({
  headings,
  related,
}: {
  headings: Heading[];
  related: RelatedPost[];
}) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 space-y-10">

        {/* TOC */}
        {headings.length > 0 && (
          <div className="border-l border-[#e5e5e5] pl-6">
            <TableOfContents headings={headings} />
          </div>
        )}

        {/* CTA card */}
        <div className="bg-[#0a0a0a] p-6">
          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/25 mb-3">
            Got an AI logo?
          </p>
          <p className="text-base font-display font-bold text-white tracking-[-0.02em] leading-snug mb-4">
            Turn it into a professional vector in 24 hours.
          </p>
          <p className="text-[13px] font-sans text-white/45 leading-relaxed mb-5">
            Starting from $50. No auto-trace. Manual precision only.
          </p>
          <Link
            href="/contact"
            className="block text-center text-sm font-sans font-semibold text-[#0a0a0a] bg-white px-5 py-3 hover:bg-white/90 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div>
            <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#0a0a0a]/35 mb-4">
              Related reading
            </p>
            <div className="space-y-4">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block border-b border-[#f0f0f0] pb-4 last:border-0 last:pb-0"
                >
                  <span className="block text-[11px] font-sans font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-1.5">
                    {post.category} · {post.readTime}
                  </span>
                  <span className="block text-[14px] font-sans font-semibold text-[#0a0a0a] leading-snug group-hover:text-[#0a0a0a]/60 transition-colors">
                    {post.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
