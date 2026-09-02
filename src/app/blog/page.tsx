import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { Breadcrumbs, JsonLd } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { blogCategories, blogPosts } from "@/data/blog";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Digital Marketing Blog",
  description:
    "Guides on digital marketing, SEO, Google Ads, Meta Ads, social media, WordPress, AI marketing, careers and freelancing from XIG Digital, Kolkata.",
  path: "/blog",
});

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = blogCategories.find((item) => item === category);
  const posts = active ? blogPosts.filter((post) => post.category === active) : blogPosts;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <section className="bg-mist py-10">
        <div className="container-xig">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
            ]}
          />
          <SectionHeading
            eyebrow="Blog"
            title="Learn digital marketing, not just definitions"
            description="SEO-friendly articles for learners exploring a digital marketing course in Kolkata."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            <Link
              href="/blog"
              className={`rounded-full px-4 py-2 text-sm font-medium ${!active ? "bg-navy text-white" : "bg-white text-navy border border-line"}`}
            >
              All
            </Link>
            {blogCategories.map((item) => (
              <Link
                key={item}
                href={`/blog?category=${encodeURIComponent(item)}`}
                className={`rounded-full px-4 py-2 text-sm font-medium ${active === item ? "bg-navy text-white" : "bg-white text-navy border border-line"}`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-xig grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
