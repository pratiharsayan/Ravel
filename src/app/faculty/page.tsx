import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Faculty",
  description: "Messages from our authorities — Chairman and Principal, Ravel Institute of Nursing.",
};

export default function FacultyPage() {
  return (
    <>
      <PageHero
        title="Faculty"
        subtitle="Ravel Institute of Nursing — Messages from our authorities"
      />
      <section className="container-site py-12 md:py-16 grid gap-6 lg:grid-cols-2">
        <article className="site-card">
          <p className="section-kicker">Leadership</p>
          <h2 className="font-display text-2xl text-navy-deep mb-4">
            Chairman&apos;s Message
          </h2>
          <p className="text-muted">
            Ravel Institute of Nursing thrown up many opportunites as well as
            challenges. one of the most formidable challenge for the youngstar in the
            challenges of carrer planing the career oriented students continue to look
            for the course and qualification needed to broaden their knowledge and
            skills. we at the ravek institute of Nursing are focused with professional
            approach and offer the student the right course and skills so that they
            can achieve their career goals to excel in any competitive enviorment.
          </p>
        </article>
        <article className="site-card">
          <p className="section-kicker">Academics</p>
          <h2 className="font-display text-2xl text-navy-deep mb-4">
            Principal&apos;s Message
          </h2>
          <p className="text-muted mb-3">
            Nursing is a healthcare profession focused on the care of individuals,
            famlies,and communities so they many attain,maintain or recover optimal
            health and quality of life from conception to the end of the life.Nurse
            have wide opportunites in the hospitals,colleges, communities,reserch and
            health development programmes.
          </p>
          <p className="text-muted mb-3">
            i am impressed by the professionalism,enthusiam, imagination and
            commitment of the management. i am dlighted and proud to lead this
            institution on behalf of the management.faculites,and on my wn behalf
          </p>
          <p className="text-muted">
            I look foward to welcoming you to intution to fulfill your dream & stay
            dedicated to your profession.
          </p>
        </article>
      </section>
    </>
  );
}
