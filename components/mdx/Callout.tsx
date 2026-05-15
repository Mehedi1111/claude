import { ReactNode } from "react";

type CalloutType = "info" | "tip" | "warning" | "note";

const variants: Record<CalloutType, { bg: string; border: string; icon: string; label: string }> = {
  info: {
    bg: "bg-[#f0f7ff]",
    border: "border-[#bfdbfe]",
    icon: "ℹ",
    label: "Info",
  },
  tip: {
    bg: "bg-[#f0fdf4]",
    border: "border-[#bbf7d0]",
    icon: "✦",
    label: "Tip",
  },
  warning: {
    bg: "bg-[#fffbeb]",
    border: "border-[#fde68a]",
    icon: "⚠",
    label: "Warning",
  },
  note: {
    bg: "bg-[#fafafa]",
    border: "border-[#e5e5e5]",
    icon: "◆",
    label: "Note",
  },
};

export default function Callout({
  type = "note",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}) {
  const v = variants[type];
  return (
    <div className={`not-prose my-8 border-l-[3px] ${v.bg} ${v.border} px-6 py-5 rounded-r-sm`}>
      <p className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-[#0a0a0a]/50 mb-2">
        <span className="text-xs">{v.icon}</span>
        {title || v.label}
      </p>
      <div className="prose-callout text-[15px] font-sans text-[#404040] leading-relaxed [&>p]:m-0">
        {children}
      </div>
    </div>
  );
}
