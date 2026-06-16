import type { MDXComponents } from "mdx/types";
import Callout from "./Callout";
import FAQAccordion from "./FAQAccordion";
import QuickAnswers from "./QuickAnswers";
import BeforeAfter from "./BeforeAfter";
import ComparisonTable from "./ComparisonTable";
import MDXCTASection from "./MDXCTASection";
import TestimonialQuote from "./TestimonialQuote";
import ImageCaption from "./ImageCaption";
import PortfolioLinks from "./PortfolioLinks";
import SitePreview from "./SitePreview";

const mdxComponents: MDXComponents = {
  // MDX custom components
  Callout,
  FAQAccordion,
  QuickAnswers,
  BeforeAfter,
  ComparisonTable,
  CTASection: MDXCTASection,
  TestimonialQuote,
  ImageCaption,
  PortfolioLinks,
  SitePreview,

  // Override default HTML elements
  img: ({ src, alt }) => (
    <span className="not-prose block my-8">
      {src && (
        <img
          src={src}
          alt={alt || ""}
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      )}
    </span>
  ),

  // Styled blockquote
  blockquote: ({ children }) => (
    <blockquote className="not-prose my-8 border-l-[3px] border-[#0a0a0a] pl-6 py-1">
      <div className="text-[clamp(18px,2.2vw,24px)] font-display font-bold text-[#0a0a0a] tracking-[-0.02em] leading-[1.3] italic">
        {children}
      </div>
    </blockquote>
  ),

  // Inline code
  code: ({ children, className }) => {
    if (className) {
      return (
        <code className={`${className} block bg-[#f5f5f5] border border-[#e5e5e5] px-5 py-4 text-[13px] font-mono overflow-x-auto rounded-sm`}>
          {children}
        </code>
      );
    }
    return (
      <code className="bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[0.85em] px-1.5 py-0.5 rounded-[2px]">
        {children}
      </code>
    );
  },

  // Table
  table: ({ children }) => (
    <div className="not-prose my-8 overflow-x-auto">
      <table className="w-full text-sm font-sans border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="text-left py-3 px-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#737373] border-b-2 border-[#0a0a0a] bg-[#fafafa]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="py-3 px-4 text-[14px] text-[#404040] border-b border-[#f0f0f0]">
      {children}
    </td>
  ),
  tr: ({ children }) => (
    <tr className="hover:bg-[#fafafa] transition-colors">{children}</tr>
  ),
};

export default mdxComponents;
