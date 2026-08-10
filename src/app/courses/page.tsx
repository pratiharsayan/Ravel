import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CourseCards } from "@/components/FeatureGrid";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Courses for your career success — GNM Nursing and B.Sc Nursing at Ravel Institute of Nursing.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Courses"
        subtitle="Courses For Your Career Success"
      />
      <section className="container-site py-12 md:py-16">
        <CourseCards />
        <p className="mt-8 text-sm text-muted">
          Fees structure for student obtaining for Bank loan may vary Bank to Bank,
          however the fees remain same.
        </p>
      </section>
    </>
  );
}
