"use client";

import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const url = `https://madebyevoke.com/blog/${slug}`;
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Desktop: floating vertical sidebar */}
      <div className="hidden lg:flex fixed left-6 xl:left-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3">
        <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.2em] text-[#b4b4b4] rotate-180 [writing-mode:vertical-lr] mb-1">
          Share
        </span>

        <a
          href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on X"
          className="group w-9 h-9 border border-[#e5e5e5] flex items-center justify-center hover:bg-[#0a0a0a] hover:border-[#0a0a0a] transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#737373] group-hover:text-white transition-colors">
            <path d="M10.85 1.5H12.82L8.72 6.22L13.5 12.5H9.73L6.87 8.83L3.6 12.5H1.63L6.01 7.45L1.5 1.5H5.37L7.95 4.84L10.85 1.5ZM10.17 11.34H11.26L4.88 2.61H3.71L10.17 11.34Z" fill="currentColor"/>
          </svg>
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on LinkedIn"
          className="group w-9 h-9 border border-[#e5e5e5] flex items-center justify-center hover:bg-[#0057b8] hover:border-[#0057b8] transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#737373] group-hover:text-white transition-colors">
            <path d="M2.33 4.67H4.67V11.67H2.33V4.67ZM3.5 3.67C2.76 3.67 2.17 3.07 2.17 2.33C2.17 1.59 2.76 1 3.5 1C4.24 1 4.83 1.59 4.83 2.33C4.83 3.07 4.24 3.67 3.5 3.67ZM11.83 11.67H9.5V8.17C9.5 7.22 9.48 6 8.17 6C6.83 6 6.67 7.03 6.67 8.1V11.67H4.33V4.67H6.58V5.73H6.61C6.93 5.12 7.71 4.5 8.9 4.5C11.27 4.5 11.83 6.07 11.83 8.1V11.67Z" fill="currentColor"/>
          </svg>
        </a>

        <button
          onClick={handleCopy}
          title="Copy link"
          className="group w-9 h-9 border border-[#e5e5e5] flex items-center justify-center hover:bg-[#0a0a0a] hover:border-[#0a0a0a] transition-all duration-200"
        >
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white">
              <path d="M2 7L5.5 10.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#737373] group-hover:text-white transition-colors">
              <rect x="5" y="1" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M3 4H2C1.45 4 1 4.45 1 5V12C1 12.55 1.45 13 2 13H9C9.55 13 10 12.55 10 12V11" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile: inline share row */}
      <div className="flex lg:hidden items-center gap-3 flex-wrap">
        <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.15em] text-[#b4b4b4]">Share</span>
        <a
          href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-[12px] font-sans font-medium text-[#737373] border border-[#e5e5e5] px-3 py-2 hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-all duration-200"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="shrink-0">
            <path d="M10.85 1.5H12.82L8.72 6.22L13.5 12.5H9.73L6.87 8.83L3.6 12.5H1.63L6.01 7.45L1.5 1.5H5.37L7.95 4.84L10.85 1.5ZM10.17 11.34H11.26L4.88 2.61H3.71L10.17 11.34Z" fill="currentColor"/>
          </svg>
          X / Twitter
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-[12px] font-sans font-medium text-[#737373] border border-[#e5e5e5] px-3 py-2 hover:bg-[#0057b8] hover:text-white hover:border-[#0057b8] transition-all duration-200"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="shrink-0">
            <path d="M2.33 4.67H4.67V11.67H2.33V4.67ZM3.5 3.67C2.76 3.67 2.17 3.07 2.17 2.33C2.17 1.59 2.76 1 3.5 1C4.24 1 4.83 1.59 4.83 2.33C4.83 3.07 4.24 3.67 3.5 3.67ZM11.83 11.67H9.5V8.17C9.5 7.22 9.48 6 8.17 6C6.83 6 6.67 7.03 6.67 8.1V11.67H4.33V4.67H6.58V5.73H6.61C6.93 5.12 7.71 4.5 8.9 4.5C11.27 4.5 11.83 6.07 11.83 8.1V11.67Z" fill="currentColor"/>
          </svg>
          LinkedIn
        </a>
        <button
          onClick={handleCopy}
          className="group flex items-center gap-2 text-[12px] font-sans font-medium text-[#737373] border border-[#e5e5e5] px-3 py-2 hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-all duration-200"
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </>
  );
}
