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
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "SVMCMS",
              full: "Swami Vivekananda Merit cum Means Scholarship",
              body: "Swami Vivekananda Merit cum Means Scholarship is a scholarship program that was initiated by the Government of West Bengal in India to provide financial assistance to the economically backward and meritorious students of the state. The scholarship is named after Swami Vivekananda, a renowned Indian philosopher and social reformer. The scholarship is renewable every year, subject to meeting eligibility criteria and maintaining good academic performance. This scheme has provided significant support to students in West Bengal who would otherwise struggle to finance their education, thereby promoting the cause of education and socio-economic development of the state.",
            },
            {
              title: "OASIS",
              full: "Online Application for Scholarship in Studies (OASIS)",
              body: "Online Application for Scholarship in Studies (OASIS) is a scholarship portal launched by the Government of India, to provide financial assistance to students belonging to the state who are pursuing various courses, including nursing. The objective of the scholarship is to encourage students from economically weaker sections to continue their education and pursue higher studies. It is important to note that the selection process may differ for each scholarship scheme, and students should carefully check the instructions provided while applying for any scholarship through the OASIS portal.",
            },
            {
              title: "SCC",
              full: "Student Credit Card",
              body: "Student credit cards aim to assist students in building a credit history and managing their finances during their academic pursuits. These cards generally provide lower credit limits and distinctive features like rewards programs, cash-back offers, and discounts on specific purchases. A student credit card can be a useful tool for helping students establish and build their credit history while also providing rewards, cash-back, and other benefits. It’s important to use a student credit card responsibly and pay off the balance each month to avoid interest charges and fees.",
            },
          ].map((item) => (
            <article key={item.title} className="site-card">
              <p className="text-gold font-bold text-sm tracking-wide">{item.title}!</p>
              <h2 className="font-display text-xl text-navy-deep mt-1 mb-3">
                {item.full}
              </h2>
              <p className="text-sm text-muted">{item.body}</p>
            </article>
          ))}
        </div>

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
