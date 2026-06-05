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
    <div className="not-prose my-10 overflow-x-auto rounded-xl border border-[#e5e5e5]">
      <table className="w-full border-collapse text-sm font-sans">
        <thead>
          <tr>
            <th className="text-left py-4 pl-8 pr-10 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#737373] border-b border-[#e5e5e5] w-[36%] bg-white">
              Feature
            </th>
            <th className="text-left py-4 pl-8 pr-10 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#737373] border-b border-[#e5e5e5] bg-[#fafafa] border-l-2 border-l-[#e0e0e0]">
              {beforeLabel}
            </th>
            <th className="text-left py-4 pl-8 pr-10 text-[11px] font-semibold uppercase tracking-[0.12em] text-white border-b border-[#1a1a1a] bg-[#0a0a0a] border-l-2 border-l-[#2a2a2a]">
              {afterLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="group transition-colors hover:bg-[#f7f7f7]"
            >
              <td className="py-5 pl-8 pr-10 text-[14px] font-medium text-[#0a0a0a] border-b border-[#f0f0f0] last:border-b-0 leading-snug align-top">
                {row.feature}
              </td>
              <td className="py-5 pl-8 pr-10 border-b border-[#f0f0f0] last:border-b-0 bg-[#fafafa] border-l-2 border-l-[#e0e0e0] align-top">
                {typeof row.before === "boolean" ? (
                  <span
                    className={`inline-flex items-center gap-1 text-[13px] font-medium ${
                      row.before ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {row.before ? "✓" : "✗"}
                  </span>
                ) : (
                  <span className="text-[14px] text-[#525252] leading-snug">
                    {row.before}
                  </span>
                )}
              </td>
              <td className="py-5 pl-8 pr-10 border-b border-[#1a1a1a] last:border-b-0 bg-[#0a0a0a] border-l-2 border-l-[#2a2a2a] align-top">
                {typeof row.after === "boolean" ? (
                  <span
                    className={`inline-flex items-center gap-1 text-[13px] font-medium ${
                      row.after ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {row.after ? "✓" : "✗"}
                  </span>
                ) : (
                  <span className="text-[14px] text-white/75 leading-snug">
                    {row.after}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
