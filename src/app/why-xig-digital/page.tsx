import { FeatureCard } from "@/components/cards";
import { Breadcrumbs, JsonLd } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { ProcessSection } from "@/components/process-section";
import { SectionHeading } from "@/components/section-heading";
import { whyFeatures } from "@/data/features";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Why XIG Digital",
  description:
    "Why learn digital marketing at XIG Digital in Kolkata — practical training, live projects, industry curriculum, mentorship, AI tools and career guidance.",
  path: "/why-xig-digital",
});

export default function WhyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Why XIG Digital", path: "/why-xig-digital" },
        ])}
      />
      <section className="bg-mist py-10">
        <div className="container-xig">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Why XIG Digital", href: "/why-xig-digital" },
            ]}
          />
          <SectionHeading
            eyebrow="Why XIG Digital"
            title="Why Learn Digital Marketing at XIG Digital?"
            description="A Kolkata training institute designed for practical skills, real projects and career-ready digital marketing."
          />
        </div>
      </section>
      <section className="section-space">
        <div className="container-xig grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyFeatures.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </section>
      <section className="section-space bg-mist">
        <div className="container-xig">
          <SectionHeading title="Don't Just Learn Digital Marketing. Practice It." align="center" />
          <div className="mt-10">
            <ProcessSection />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
