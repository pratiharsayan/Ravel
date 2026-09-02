"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/blog-card";
import { blogCategories, blogPosts, type BlogCategory } from "@/data/blog";

export function BlogIndex() {
  const [active, setActive] = useState<BlogCategory | "All">("All");
  const posts = useMemo(
    () => (active === "All" ? blogPosts : blogPosts.filter((post) => post.category === active)),
    [active],
  );

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("All")}
          className={`rounded-full px-4 py-2 text-sm font-medium ${active === "All" ? "bg-navy text-white" : "bg-white text-navy border border-line"}`}
        >
          All
        </button>
        {blogCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setActive(item)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${active === item ? "bg-navy text-white" : "bg-white text-navy border border-line"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
