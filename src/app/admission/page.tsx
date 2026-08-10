import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AdmissionForm } from "@/components/AdmissionForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Admission",
  description:
    "Admission open 2026–27 session at Ravel Institute of Nursing. Apply online for B.Sc Nursing and GNM.",
};

export default function AdmissionPage() {
  return (
    <>
      <PageHero
        title="Admission"
        subtitle={`Admissions Open ${siteConfig.admissionYear} Session`}
      />
      <section className="container-site py-12 md:py-16 space-y-12">
        <div className="rounded-xl bg-navy text-white p-6 md:p-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div>
            <h2 className="font-display text-2xl mb-2">Prospectus</h2>
            <p className="text-white/80 max-w-2xl text-sm">
              RAVEL INSTITUTE OF NURSING has thrown up many opportunities as well as
              challenges. One of the most formidable challenges for the youngsters is
              the challenge of career planning. We are focused with a professional
              approach and offer students the right courses and skills so that they
              can achieve their career goals.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <a
              href={siteConfig.prospectus}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Check Details
            </a>
            <Link href="/scholarship" className="btn-outline">
              Scholarships
            </Link>
          </div>
        </div>

        <AdmissionForm />
      </section>
    </>
  );
}
