import { Breadcrumbs, JsonLd } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Student Reviews",
  description:
    "Student reviews of practical digital marketing training at XIG Digital, Kolkata. Testimonials are editable from a central data file.",
  path: "/student-reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Student Reviews", path: "/student-reviews" },
        ])}
      />
      <section className="bg-mist py-10">
        <div className="container-xig">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Student Reviews", href: "/student-reviews" },
            ]}
          />
          <SectionHeading
            eyebrow="Student reviews"
            title="What learners say about practical training"
            description="Stories from students and professionals who trained at XIG Digital in Kolkata."
          />
        </div>
      </section>
      <section className="section-space">
        <div className="container-xig">
          <TestimonialSlider />
        </div>
      </section>
      <CTASection />
    </>
  );
}
