import type { MetadataRoute } from "next";
import { getSlugs } from "@/lib/mdx";
import { allServices } from "@/lib/data";
import { domains } from "@/lib/domains";
import { landingPages } from "@/lib/landing-pages";

export const dynamic = "force-static";

const BASE = "https://madebyevoke.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getSlugs("blog");
  const portfolioSlugs = getSlugs("case-studies");
  const serviceSlugs = allServices.map((s) => s.slug);

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/portfolio`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const portfolioPages: MetadataRoute.Sitemap = portfolioSlugs.map((slug) => ({
    url: `${BASE}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const domainPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/domains`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...domains.map((d) => ({
      url: `${BASE}/domains/${d.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];

  const landingPageUrls: MetadataRoute.Sitemap = landingPages.map((p) => ({
    url: `${BASE}/lp/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...landingPageUrls, ...servicePages, ...domainPages, ...portfolioPages, ...blogPages];
}
