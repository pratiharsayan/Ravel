import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogs";

const base = "https://ravelinstitute.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/affiliation",
    "/courses",
    "/admission",
    "/career",
    "/blogs",
    "/contact",
    "/gallery",
    "/placement",
    "/scholarship",
    "/faculty",
    "/payment",
    "/login/admin",
    "/login/user",
    "/login/student",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const blogs = blogPosts.map((post) => ({
    url: `${base}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogs];
}
