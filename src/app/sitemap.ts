import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { courses } from "@/data/courses";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/about",
    "/courses",
    "/why-xig-digital",
    "/placements",
    "/student-reviews",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${site.urls.website}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...courses.map((course) => ({
      url: `${site.urls.website}/courses/${course.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${site.urls.website}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
