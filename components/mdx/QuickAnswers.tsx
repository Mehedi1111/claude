interface FAQItem {
  q: string;
  a: string;
}

export default function QuickAnswers({ items = [] }: { items?: FAQItem[] }) {
  return (
    <div className="not-prose my-8">
      {items.map((item, i) => (
        <div key={i} className="py-5 border-b border-[#e5e5e5] first:border-t first:pt-0">
          <p className="text-[15px] font-sans font-semibold text-[#0a0a0a] leading-snug mb-2">
            {item.q}
          </p>
          <p className="text-[14px] font-sans text-[#737373] leading-relaxed">
            {item.a}
          </p>
        </div>
      ))}
    </div>
  );
}
