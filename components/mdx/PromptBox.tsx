export default function PromptBox({
  title = "The AI Prompt Used",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="not-prose my-10">
      <div className="border border-[#e5e5e5] rounded-sm overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-3.5 bg-[#0a0a0a] border-b border-[#2a2a2a]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c840]" />
          </div>
          <span className="text-[11px] font-mono font-medium text-white/40 tracking-wide">{title}</span>
        </div>
        {/* Scrollable body */}
        <div
          className="overflow-y-auto bg-[#111111] px-6 py-5"
          style={{ maxHeight: "320px" }}
        >
          <div className="text-[13px] font-mono leading-[1.75] text-[#d4d4d4] whitespace-pre-wrap break-words">
            {children}
          </div>
        </div>
        {/* Footer hint */}
        <div className="px-5 py-2.5 bg-[#0a0a0a] border-t border-[#2a2a2a] flex items-center justify-between">
          <span className="text-[11px] font-sans text-white/25">Scroll to read full prompt</span>
          <span className="text-[11px] font-sans text-white/25">ChatGPT / DALL·E</span>
        </div>
      </div>
    </div>
  );
}
