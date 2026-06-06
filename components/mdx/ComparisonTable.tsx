type Row = {
  feature: string;
  before: string | boolean;
  after: string | boolean;
};

export default function ComparisonTable({
  beforeLabel = "Raster / AI Output",
  afterLabel = "Vector / Rebuilt",
  rows = [],
}: {
  beforeLabel?: string;
  afterLabel?: string;
  rows?: Row[];
}) {
  return (
    <div className="not-prose my-10 border border-[#e5e5e5] overflow-hidden font-sans text-sm">

      {/* Header */}
      <div className="flex border-b border-[#e5e5e5]">
        <div className="w-[36%] shrink-0 px-8 py-4 bg-white text-[11px] font-semibold uppercase tracking-[0.12em] text-[#737373]">
          Feature
        </div>
        <div className="flex-1 px-8 py-4 bg-[#f5f5f5] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#555] border-l-2 border-[#e0e0e0]">
          {beforeLabel}
        </div>
        <div className="flex-1 px-8 py-4 bg-[#0a0a0a] text-[11px] font-semibold uppercase tracking-[0.12em] text-white border-l-2 border-[#2a2a2a]">
          {afterLabel}
        </div>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={i}
          className="flex border-b border-[#f0f0f0] last:border-b-0 group"
        >
          {/* Feature label */}
          <div className="w-[36%] shrink-0 px-8 py-5 text-[14px] font-medium text-[#0a0a0a] leading-snug bg-white group-hover:bg-[#fafafa] transition-colors align-top">
            {row.feature}
          </div>

          {/* Before */}
          <div className="flex-1 px-8 py-5 bg-[#f5f5f5] border-l-2 border-[#e0e0e0] leading-snug align-top">
            {typeof row.before === "boolean" ? (
              <span className={`text-[14px] font-semibold ${row.before ? "text-emerald-600" : "text-red-500"}`}>
                {row.before ? "✓" : "✗"}
              </span>
            ) : (
              <span className="text-[14px] text-[#555] leading-snug">{row.before}</span>
            )}
          </div>

          {/* After */}
          <div className="flex-1 px-8 py-5 bg-[#0a0a0a] border-l-2 border-[#2a2a2a] leading-snug align-top">
            {typeof row.after === "boolean" ? (
              <span className={`text-[14px] font-semibold ${row.after ? "text-emerald-400" : "text-red-400"}`}>
                {row.after ? "✓" : "✗"}
              </span>
            ) : (
              <span className="text-[14px] text-white/80 leading-snug">{row.after}</span>
            )}
          </div>
        </div>
      ))}

    </div>
  );
}
