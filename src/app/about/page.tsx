import { CTASection } from "@/components/cta-section";
import { Breadcrumbs, JsonLd } from "@/components/chrome";
import { SectionHeading } from "@/components/section-heading";
import { ClassroomVisual } from "@/components/visuals";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About XIG Digital",
  description:
    "About XIG Digital — a practical digital marketing training institute in Kolkata focused on live projects, industry tools and career-ready skills.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <section className="bg-mist py-10">
        <div className="container-xig">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
            ]}
          />
          <SectionHeading
            eyebrow="About"
            title="A premium digital marketing institute in Kolkata"
            description="XIG Digital trains students, freshers, working professionals, business owners and entrepreneurs in practical digital marketing — not slide-only theory."
          />
        </div>
      </section>
      <section className="section-space">
        <div className="container-xig grid items-start gap-12 lg:grid-cols-2">
          <div className="prose-like grid gap-5 text-muted leading-7">
            <h2 className="text-2xl font-semibold text-navy">Learn Digital Marketing Beyond Theory</h2>
            <p>
              XIG Digital focuses on practical digital marketing education that helps learners understand how marketing actually works in the real world. Training is built around implementation: websites, search, social, paid media, content, analytics and AI tools.
            </p>
            <p>
              Learners practise through live projects, practical assignments, campaign planning, SEO implementation, social media marketing, Google Ads, Meta Ads, website development, analytics, content marketing and AI tools.
            </p>
            <p>
              The institute is based in Kolkata, West Bengal, and positions itself as a modern education brand for people who want career skills, freelance ability or better marketing for their own business.
            </p>
          </div>
          <ClassroomVisual />
        </div>
      </section>
      <CTASection />
    </>
  );
}
