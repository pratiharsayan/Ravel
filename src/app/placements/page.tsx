import { Breadcrumbs, JsonLd } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { placementSupport } from "@/data/features";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Career Support and Placements",
  description:
    "Career support at XIG Digital in Kolkata includes resume building, interview preparation, portfolio development, project experience and freelancing guidance. Placement is not guaranteed.",
  path: "/placements",
});

export default function PlacementsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Placements", path: "/placements" },
        ])}
      />
      <section className="bg-mist py-10">
        <div className="container-xig">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Placements", href: "/placements" },
            ]}
          />
          <SectionHeading
            eyebrow="Career support"
            title="From Classroom Learning to Career Growth"
            description="XIG Digital helps learners present their skills professionally. We do not make guaranteed placement claims. Outcomes depend on practice, performance and market opportunities."
          />
        </div>
      </section>
      <section className="section-space">
        <div className="container-xig grid gap-5 md:grid-cols-2">
          {placementSupport.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h2 className="text-lg font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection title="Prepare for digital marketing roles" text="Enquire about career guidance, portfolio support and the right course for your goals." />
    </>
  );
}
