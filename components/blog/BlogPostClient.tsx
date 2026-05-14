"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Section {
  heading: string;
  body: string;
}

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: {
    intro: string;
    sections: Section[];
  };
  tags: string[];
  readTime: string;
  date: string;
  image: string;
  author: { name: string; role: string };
  category: string;
}

export default function BlogPostClient({
  post,
  related,
}: {
  post: Post;
  related: Post[];
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toc = post.content.sections.map((s) => s.heading);

  return (
    <>
      {/* Reading progress bar */}
      <div
        id="reading-progress"
        style={{ width: `${progress}%` }}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 xl:gap-24">
            {/* Main content */}
            <article>
              {/* Intro */}
              <p className="text-lg lg:text-xl font-sans text-[#0a0a0a] leading-relaxed mb-10 font-medium">
                {post.content.intro}
              </p>

              {/* Sections */}
              {post.content.sections.map((section, i) => (
                <div key={i} className="mb-10" id={`section-${i}`}>
                  <h2 className="text-xl lg:text-2xl font-display font-bold text-[#0a0a0a] tracking-[-0.02em] mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-base lg:text-lg font-sans text-[#404040] leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-[#e5e5e5]">
                <p className="text-xs font-sans font-semibold text-[#0a0a0a]/40 uppercase tracking-[0.15em] mb-4">
                  Topics
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-sans font-medium text-[#737373] border border-[#e5e5e5] px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author */}
              <div className="mt-12 p-8 bg-[#f5f5f5]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0a0a0a] flex items-center justify-center shrink-0">
                    <span className="text-sm font-display font-bold text-white">E</span>
                  </div>
                  <div>
                    <p className="text-sm font-sans font-semibold text-[#0a0a0a]">
                      {post.author.name}
                    </p>
                    <p className="text-xs font-sans text-[#737373]">{post.author.role}</p>
                  </div>
                </div>
                <p className="text-sm font-sans text-[#737373] leading-relaxed">
                  Evoke Studio specializes in transforming AI-generated logos into
                  professional vector brand systems. Every article is written from
                  direct production experience.
                </p>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-8">
                {/* TOC */}
                <div className="border border-[#e5e5e5] p-6">
                  <p className="text-xs font-sans font-semibold text-[#0a0a0a]/40 uppercase tracking-[0.15em] mb-4">
                    In this article
                  </p>
                  <ul className="space-y-3">
                    {toc.map((heading, i) => (
                      <li key={i}>
                        <a
                          href={`#section-${i}`}
                          className="text-sm font-sans text-[#737373] hover:text-[#0a0a0a] transition-colors leading-snug link-underline"
                        >
                          {heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-[#0a0a0a] p-6">
                  <p className="text-sm font-display font-bold text-white tracking-[-0.02em] mb-3">
                    Ready to vectorize your logo?
                  </p>
                  <p className="text-xs font-sans text-white/50 leading-relaxed mb-5">
                    Send us your AI-generated logo. We&apos;ll rebuild it as a
                    precision vector within 48 hours.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center text-xs font-sans font-semibold text-[#0a0a0a] bg-white px-4 py-3 hover:bg-white/90 transition-colors"
                  >
                    Start a Project →
                  </Link>
                </div>

                {/* Newsletter */}
                <div className="border border-[#e5e5e5] p-6">
                  <p className="text-sm font-sans font-semibold text-[#0a0a0a] mb-1">
                    Brand insights. Monthly.
                  </p>
                  <p className="text-xs font-sans text-[#737373] mb-4">
                    No noise. Just useful.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 border border-[#e5e5e5] px-3 py-2 text-xs font-sans text-[#0a0a0a] placeholder-[#d4d4d4] focus:border-[#0a0a0a] focus:outline-none"
                    />
                    <button className="text-xs font-sans font-semibold text-white bg-[#0a0a0a] px-3 py-2 hover:bg-[#1f1f1f] transition-colors shrink-0">
                      →
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#f5f5f5] border-t border-[#e5e5e5]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <p className="text-xs font-sans font-semibold text-[#0a0a0a]/40 uppercase tracking-[0.2em] mb-8">
              Continue Reading
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group">
                  <article className="flex gap-5 items-start">
                    <div className="relative w-24 aspect-square shrink-0 overflow-hidden bg-[#e5e5e5]">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                        sizes="96px"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-sans font-semibold text-[#737373] uppercase tracking-[0.1em]">
                        {rel.category}
                      </span>
                      <h3 className="text-base font-display font-semibold text-[#0a0a0a] tracking-[-0.02em] leading-snug mt-1 group-hover:text-[#0a0a0a]/60 transition-colors">
                        {rel.title}
                      </h3>
                      <p className="text-xs font-sans text-[#737373] mt-1">{rel.readTime}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
