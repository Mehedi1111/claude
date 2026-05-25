import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old WordPress blog posts → closest matching new blog posts (301 permanent)
      { source: "/ai-logo-to-vector/", destination: "/blog/ai-logo-vectorization-complete-guide", permanent: true },
      { source: "/ai-logo-artifacts/", destination: "/blog/ai-logo-vs-professional-designer", permanent: true },
      { source: "/how-to-use-ai-in-branding-design/", destination: "/blog/ai-branding-complete-workflow", permanent: true },
      { source: "/typography-for-ai-logos/", destination: "/blog/how-to-choose-logo-fonts", permanent: true },
      { source: "/what-typeface-did-paula-scher-create/", destination: "/blog/how-to-choose-logo-fonts", permanent: true },
      { source: "/movies-with-serif-font/", destination: "/blog/how-to-choose-logo-fonts", permanent: true },
      { source: "/paula-scher-creation-of-typeface-franklin-gothic-font/", destination: "/blog/how-to-choose-logo-fonts", permanent: true },
      { source: "/primary-colors-in-design/", destination: "/blog/color-psychology-logo-design", permanent: true },
      { source: "/interior-design-company-logo-secret/", destination: "/blog/logo-design-for-luxury-brands", permanent: true },
      { source: "/drift-cars-wrap-design-with-sponsor-logo/", destination: "/blog/logo-for-vehicle-wrap", permanent: true },
      { source: "/what-can-adobe-dimension-do/", destination: "/blog/ai-branding-complete-workflow", permanent: true },
      { source: "/what-is-conceptualization-phase-in-ux-design-process/", destination: "/blog", permanent: true },
      // Old portfolio items → portfolio page
      { source: "/portfolio/item/star-eat/", destination: "/portfolio", permanent: true },
      { source: "/portfolio/item/walk-branding-ui-ux-design/", destination: "/portfolio", permanent: true },
    ];
  },
  images: {
    // Cache images for 30 days — drastically reduces Vercel Image Optimization cache writes
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Limit device size variants to reduce unique cache entries
    deviceSizes: [640, 1080, 1920],
    imageSizes: [16, 48, 96, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "madebyevoke.com",
      },
      {
        protocol: "https",
        hostname: "mir-s3-cdn-cf.behance.net",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
    ],
  },
};

export default nextConfig;
