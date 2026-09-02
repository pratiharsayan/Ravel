import { BlogIndex } from "@/components/blog-index";
import { Breadcrumbs, JsonLd } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Digital Marketing Blog",
  description:
    "Guides on digital marketing, SEO, Google Ads, Meta Ads, social media, WordPress, AI marketing, careers and freelancing from XIG Digital, Kolkata.",
  path: "/blog",
});

export default function BlogPage() {
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
        </div>
      </section>
      <section className="section-space">
        <div className="container-xig">
          <BlogIndex />
        </div>
      </section>
      <CTASection />
    </>
  );
}
