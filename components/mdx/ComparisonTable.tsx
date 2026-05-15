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
    <div className="not-prose my-10 overflow-x-auto">
      <table className="w-full border-collapse text-sm font-sans">
        <thead>
          <tr>
            <th className="text-left py-3 px-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#737373] border-b border-[#e5e5e5] w-[40%]">
              Feature
            </th>
            <th className="text-left py-3 px-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#737373] border-b border-[#e5e5e5] bg-[#f5f5f5]">
              {beforeLabel}
            </th>
            <th className="text-left py-3 px-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#0a0a0a] border-b border-[#e5e5e5] bg-[#0a0a0a]">
              <span className="text-white">{afterLabel}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="group">
              <td className="py-3.5 px-4 text-[14px] font-medium text-[#0a0a0a] border-b border-[#f0f0f0]">
                {row.feature}
              </td>
              <td className="py-3.5 px-4 border-b border-[#f0f0f0] bg-[#f5f5f5]">
                {typeof row.before === "boolean" ? (
                  <span className={row.before ? "text-green-600" : "text-red-500"}>
                    {row.before ? "✓" : "✗"}
                  </span>
                ) : (
                  <span className="text-[14px] text-[#737373]">{row.before}</span>
                )}
              </td>
              <td className="py-3.5 px-4 border-b border-[#1a1a1a] bg-[#0a0a0a]">
                {typeof row.after === "boolean" ? (
                  <span className={row.after ? "text-[#4ade80]" : "text-red-400"}>
                    {row.after ? "✓" : "✗"}
                  </span>
                ) : (
                  <span className="text-[14px] text-white/80">{row.after}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
