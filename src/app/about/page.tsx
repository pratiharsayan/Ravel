import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Welcome to Ravel Institute of Nursing, the premier institute for Male Nursing in West Bengal.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Premier institute for Male Nursing in West Bengal"
      />
      <section className="container-site py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="prose-site">
            <p>
              Welcome to RAVEL INSTITUTE OF NURSING, the premier institute for Male
              Nursing in West Bengal. We are dedicated to providing high-quality
              education and training for aspiring nurses, offering B.Sc. Nursing
              degree and G.N.M. (General Nursing and Midwifery) Diploma programs.
            </p>
            <p>
              Our institution boasts a team of exceptional faculty members who are
              committed to upholding the highest standards of education in nursing.
              We prioritize academic freedom, welcoming new ideas and fostering open
              discussions and inquiries among our students.
            </p>
            <p>
              At RAVEL INSTITUTE OF NURSING, we believe in ensuring that our students
              do not have to compromise on their future and career aspirations. With
              our rigorous training programs and emphasis on clinical expertise, our
              students have the privilege of being placed in recognized hospitals,
              government sectors, and even overseas opportunities.
            </p>
            <p>
              In a short span of time, we have become one of the prominent and
              preferred destinations for employable skills training, thanks to the
              trust and support of our stakeholders. With strong professional
              management and experienced faculty members, RAVEL INSTITUTE OF NURSING
              is synonymous with service excellence and stands out for its distinct
              service differentiations. Join us and embark on a rewarding journey
              towards a successful nursing career.
            </p>
          </div>
          <div className="relative min-h-[360px] rounded-xl overflow-hidden border border-line">
            <Image
              src="/images/Ravel-institute-ver-1-2-min.jpg"
              alt="Ravel Institute campus"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
