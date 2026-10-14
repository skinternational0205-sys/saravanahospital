import type { MetadataRoute } from "next";
import specialitiesData from "@/data/specialities.json";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/specialities"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/health-packages"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/appointment"), lastModified, changeFrequency: "yearly", priority: 0.9 },
    { url: absoluteUrl("/laboratory"), lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/pharmacy"), lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/insurance"), lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/gallery"), lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/careers"), lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/fmtalks"), lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];

  const specialityRoutes: MetadataRoute.Sitemap = specialitiesData.map((spec) => ({
    url: absoluteUrl(`/specialities/${spec.slug}`),
    lastModified,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...specialityRoutes];
}