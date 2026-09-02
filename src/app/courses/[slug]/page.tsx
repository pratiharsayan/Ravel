import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, JsonLd } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { EnquiryButton } from "@/components/enquiry-button";
import { CurriculumAccordion } from "@/components/faq-accordion";
import { IconCheck } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { courses, getCourse } from "@/data/courses";
import { breadcrumbSchema, courseSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return buildMetadata({
    title: `${course.title} in Kolkata`,
    description: course.overview,
    path: `/courses/${course.slug}`,
  });
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  const schema = courseSchema(course.slug);

  return (
    <>
      {schema ? <JsonLd data={schema} /> : null}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Courses", path: "/courses" },
          { name: course.title, path: `/courses/${course.slug}` },
        ])}
      />
      <section className="bg-navy py-14 text-white">
        <div className="container-xig">
          <Breadcrumbs
            light
            items={[
              { name: "Home", href: "/" },
              { name: "Courses", href: "/courses" },
              { name: course.shortTitle, href: `/courses/${course.slug}` },
            ]}
          />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-sky">Course</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">{course.title}</h1>
          <p className="mt-4 max-w-2xl text-white/70">{course.overview}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <EnquiryButton course={course.title}>Apply Now</EnquiryButton>
            <EnquiryButton variant="secondary" course={course.title}>
              Enquire Now
            </EnquiryButton>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-xig grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading title="Course overview" description={course.summary} />
            <h2 className="mt-10 text-2xl font-semibold text-navy">What you will learn</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {course.modules.map((module) => (
                <li key={module} className="flex gap-2 rounded-2xl border border-line bg-white p-3 text-sm text-navy-800">
                  <IconCheck size={16} className="mt-0.5 text-electric" />
                  {module}
                </li>
              ))}
            </ul>
            <h2 className="mt-12 text-2xl font-semibold text-navy">Complete curriculum</h2>
            <div className="mt-5">
              <CurriculumAccordion modules={course.curriculum} />
            </div>
          </div>
          <aside className="h-fit rounded-[1.75rem] border border-line bg-mist p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold text-navy">Programme snapshot</h2>
            <dl className="mt-4 grid gap-4 text-sm">
              <Item label="Duration" value={course.duration} />
              <Item label="Course mode" value={course.mode} />
              <Item label="Level" value={course.level} />
              <Item label="Certification" value={course.certification} />
              <Item label="Practical training" value={course.practicalTraining} />
              <Item label="Projects" value={course.projects} />
            </dl>
            <h3 className="mt-6 font-semibold text-navy">Career opportunities</h3>
            <ul className="mt-2 grid gap-1 text-sm text-muted">
              {course.careerOpportunities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <EnquiryButton className="mt-6 w-full" course={course.title}>
              Apply Now
            </EnquiryButton>
          </aside>
        </div>
      </section>
      <CTASection title="Apply for this course" text={`Talk to a counsellor about the ${course.title} at XIG Digital, Kolkata.`} />
    </>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-1 font-medium text-navy">{value}</dd>
    </div>
  );
}
