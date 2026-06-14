import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";
import { blogPosts, projects, services, subsidyPages } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/case-studies", "/solar-calculator", "/government-subsidies", "/emi-financing", "/blog", "/faqs", "/testimonials", "/contact", "/book-site-survey"];
  const dynamicRoutes = [
    ...services.map((item) => `/services/${item.slug}`),
    ...projects.map((item) => `/projects/${item.slug}`),
    ...subsidyPages.map((item) => `/government-subsidies/${item.slug}`),
    ...blogPosts.map((item) => `/blog/${item.slug}`)
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
