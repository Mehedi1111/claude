interface PortfolioLinksProps {
  behanceUrl?: string;
  dribbbleUrl?: string;
  siteUrl?: string;
  label?: string;
}

export default function PortfolioLinks({
  behanceUrl,
  dribbbleUrl,
  siteUrl,
  label = "View full project",
}: PortfolioLinksProps) {
  return (
    <div className="not-prose my-10 border border-[#e5e5e5] bg-[#fafafa] p-6 sm:p-8">
      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#a3a3a3] mb-5">
        {label}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        {siteUrl && (
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-5 py-3.5 text-[13px] font-sans font-semibold hover:bg-[#1f1f1f] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View Live Website ↗
          </a>
        )}
        {behanceUrl && (
          <a
            href={behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0057ff] text-white px-5 py-3.5 text-[13px] font-sans font-semibold hover:bg-[#0046cc] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.836 1.98 2.066 1.98.602 0 1.108-.19 1.473-.572l2.217.621zm-7.856-4h4.214c-.122-1.43-.836-2.18-2.046-2.18-1.28 0-2.022.73-2.168 2.18zM9.918 6.032C8.99 5.368 7.585 5 5.783 5H0v14h6.26c1.895 0 3.418-.46 4.525-1.38 1.106-.92 1.66-2.25 1.66-3.985 0-1.49-.508-2.685-1.527-3.603zm-3.29 6.897c-.432.368-1.03.553-1.793.553H2.54v-2.9h2.295c.763 0 1.361.17 1.793.511.433.34.648.823.648 1.448 0 .606-.215 1.02-.648 1.388zm.416-4.695c-.373.333-.921.5-1.643.5H2.54V6.5h2.861c.722 0 1.27.155 1.643.467.374.311.56.77.56 1.374 0 .608-.186 1.06-.56 1.393z"/>
            </svg>
            View on Behance
          </a>
        )}
        {dribbbleUrl && (
          <a
            href={dribbbleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#ea4c89] text-white px-5 py-3.5 text-[13px] font-sans font-semibold hover:bg-[#d63b77] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.986 5.52c1.336 1.588 2.143 3.63 2.165 5.862-1.966-.42-3.954-.636-5.943-.612-.293-.672-.586-1.23-.9-1.788 2.006-.84 3.68-1.98 4.678-3.462zM12 2.052c1.988 0 3.826.672 5.29 1.788-.88 1.335-2.418 2.349-4.216 3.084a51.66 51.66 0 0 0-3.15-4.633A9.963 9.963 0 0 1 12 2.052zm-3.15.504a53.43 53.43 0 0 1 3.15 4.591c-3.444.84-7.134.966-8.64.966-.126 0-.252 0-.378-.042A9.955 9.955 0 0 1 8.85 2.556zM2.262 8.934c.168 0 .336.042.504.042 1.8 0 5.964-.168 9.702-1.218.252.462.504.966.756 1.47-3.36.882-6.006 3.15-7.608 6.09a9.94 9.94 0 0 1-3.354-6.384zm9.738 11.07a9.89 9.89 0 0 1-5.71-1.81c1.26-2.772 3.738-5.04 6.972-5.964.756 1.98 1.344 3.99 1.806 6.006a9.98 9.98 0 0 1-3.068-.232zm5.038-.84a62.88 62.88 0 0 0-1.68-5.544c1.764-.252 3.57-.126 5.25.21-.504 2.268-1.848 4.2-3.57 5.334z"/>
            </svg>
            View on Dribbble
          </a>
        )}
      </div>
      <div className="mt-5 pt-5 border-t border-[#e5e5e5] flex flex-col sm:flex-row gap-4">
        <a
          href="https://www.behance.net/mh62221352f0fFF"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] font-sans font-medium text-[#737373] hover:text-[#0057ff] transition-colors"
        >
          Behance Portfolio — behance.net/mh62221352f0fFF
        </a>
        <span className="hidden sm:block text-[#e5e5e5]">|</span>
        <a
          href="https://dribbble.com/madebyevoke"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] font-sans font-medium text-[#737373] hover:text-[#ea4c89] transition-colors"
        >
          Dribbble Portfolio — dribbble.com/madebyevoke
        </a>
      </div>
    </div>
  );
}
