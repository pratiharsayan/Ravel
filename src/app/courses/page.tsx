import { CourseGrid } from "@/components/course-card";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs, JsonLd } from "@/components/chrome";
import { SectionHeading } from "@/components/section-heading";
import { courses, getFlagshipCourses, getShortCourses } from "@/data/courses";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Digital Marketing Courses in Kolkata",
  description:
    "Explore digital marketing courses in Kolkata at XIG Digital — complete training, advanced performance marketing, and short-term SEO, Google Ads, Meta Ads, WordPress and AI courses.",
  path: "/courses",
  keywords: ["Digital Marketing Course Kolkata", "SEO Course Kolkata", "Google Ads Course Kolkata"],
});

export default function CoursesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Courses", path: "/courses" },
        ])}
      />
      <section className="bg-mist py-10">
        <div className="container-xig">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Courses", href: "/courses" },
            ]}
          />
          <SectionHeading
            eyebrow="Courses"
            title="Choose Your Digital Marketing Learning Path"
            description={`${courses.length} programmes covering complete digital marketing, advanced performance skills and focused short-term courses.`}
          />
        </div>
      </section>
      <section className="section-space">
        <div className="container-xig">
          <h2 className="text-2xl font-semibold text-navy">Flagship programmes</h2>
          <div className="mt-8">
            <CourseGrid courses={getFlagshipCourses()} />
          </div>
          <h2 className="mt-16 text-2xl font-semibold text-navy">Short-term courses</h2>
          <div className="mt-8">
            <CourseGrid courses={getShortCourses()} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
