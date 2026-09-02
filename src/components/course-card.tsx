import Link from "next/link";
import { EnquiryButton } from "@/components/enquiry-button";
import { IconArrow, IconCheck } from "@/components/icons";
import type { Course } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="surface-card group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between gap-3">
        <p className="rounded-full bg-mist px-3 py-1 text-xs font-semibold uppercase tracking-wider text-electric">
          {course.level}
        </p>
        <p className="text-sm font-medium text-muted">{course.duration}</p>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-navy">{course.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{course.summary}</p>
      <ul className="mt-5 grid flex-1 gap-2">
        {course.modules.slice(0, 8).map((module) => (
          <li key={module} className="flex items-start gap-2 text-sm text-navy-800">
            <IconCheck size={16} className="mt-0.5 shrink-0 text-electric" />
            {module}
          </li>
        ))}
        {course.modules.length > 8 ? (
          <li className="text-sm font-medium text-electric">+ more modules in the full curriculum</li>
        ) : null}
      </ul>
      <p className="mt-5 text-sm text-muted">
        <span className="font-semibold text-navy">Practical training:</span> {course.practicalTraining}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={`/courses/${course.slug}`} className="btn-primary">
          {course.ctaLabel} <IconArrow size={16} />
        </Link>
        <EnquiryButton variant="outline" course={course.title}>
          Apply Now
        </EnquiryButton>
      </div>
    </article>
  );
}

export function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.slug} course={course} />
      ))}
    </div>
  );
}
