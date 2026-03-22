import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ivlytes.com";
  const now = new Date();

  const routes = [
    "/",
    "/ivfluids",
    "/colonic",
    "/biote",
    "/weight-loss",
    "/skinpen",
    "/contact",
    "/resources",
    "/staff",
    "/blog",
    "/blog/iv-infusion-therapy-benefits",
    "/blog/colonic-hydrotherapy-benefits",
    "/blog/myers-cocktail-chronic-fatigue",
    "/blog/immunity-plus-drip",
    "/blog/microneedling-magic",
    "/blog/vitamin-c-antioxidant",
    "/blog/nad-iv-drip-therapy",
    "/blog/colonics-embarrassing-questions",
    "/blog/diet-mental-health",
    "/colonprep",
    "/biote-store",
    "/privacy-policy",
    "/terms-of-use",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/blog/") ? 0.6 : 0.8,
  }));
}
