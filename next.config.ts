import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
