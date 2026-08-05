import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Insights and articles from Ravel Institute of Nursing.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHero title="Blogs" subtitle="News, guides, and career insights" />
      <section className="container-site py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="site-card !p-0 overflow-hidden block"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <time className="text-xs text-muted">{post.date}</time>
                <h2 className="font-display text-xl text-navy-deep mt-1 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-muted line-clamp-3">{post.excerpt}</p>
                <span className="inline-block mt-3 text-sm font-semibold text-blue">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
