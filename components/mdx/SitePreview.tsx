import Image from "next/image";

interface SitePreviewProps {
  url: string;
  label?: string;
  screenshotUrl?: string;
}

export default function SitePreview({ url, label, screenshotUrl }: SitePreviewProps) {
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
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-sans font-semibold text-[#0a0a0a] bg-white border border-[#e5e5e5] px-3 py-1 hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-colors shrink-0"
        >
          Open ↗
        </a>
      </div>

      {screenshotUrl ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block">
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            <Image
              src={screenshotUrl}
              alt={label || displayUrl}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 65vw"
              unoptimized={screenshotUrl.endsWith(".avif")}
            />
          </div>
        </a>
      ) : (
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <iframe
            src={url}
            className="w-full h-full border-0"
            title={label || displayUrl}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
