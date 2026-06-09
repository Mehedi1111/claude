interface SitePreviewProps {
  url: string;
  label?: string;
}

export default function SitePreview({ url, label }: SitePreviewProps) {
  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <div className="not-prose my-10 border border-[#e5e5e5] overflow-hidden shadow-sm">
      <div className="bg-[#fafafa] border-b border-[#e5e5e5] px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#e5e5e5]" />
          <span className="w-3 h-3 rounded-full bg-[#e5e5e5]" />
          <span className="w-3 h-3 rounded-full bg-[#e5e5e5]" />
        </div>
        <span className="text-xs font-sans text-[#b4b4b4] flex-1 text-center">{displayUrl}</span>
      </div>
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        <iframe
          src={url}
          className="w-full h-full border-0"
          title={label || displayUrl}
          loading="lazy"
        />
      </div>
    </div>
  );
}
