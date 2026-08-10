import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Scholarship",
  description:
    "A small investment in your education can yield lifelong returns — SVMCMS, OASIS, and Student Credit Card.",
};

export default function ScholarshipPage() {
  return (
    <>
      <PageHero
        title="Scholarship"
        subtitle="A small investment in your education can yield lifelong returns"
      />
      <section className="container-site py-12 md:py-16 space-y-6">
        {[
          {
            title: "SVMCMS!",
            heading: "Swami Vivekananda Merit cum Means Scholarship",
            body: "Swami Vivekananda Merit cum Means Scholarship is a scholarship program that was initiated by the Government of West Bengal in India to provide financial assistance to the economically backward and meritorious students of the state. The scholarship is named after Swami Vivekananda, a renowned Indian philosopher and social reformer. The scholarship is renewable every year, subject to meeting eligibility criteria and maintaining good academic performance. This scheme has provided significant support to students in West Bengal who would otherwise struggle to finance their education, thereby promoting the cause of education and socio-economic development of the state.",
          },
          {
            title: "OASIS!",
            heading: "Online Application for Scholarship in Studies (OASIS)",
            body: "Online Application for Scholarship in Studies (OASIS) is a scholarship portal launched by the Government of India, to provide financial assistance to students belonging to the state who are pursuing various courses, including nursing. The objective of the scholarship is to encourage students from economically weaker sections to continue their education and pursue higher studies. It is important to note that the selection process may differ for each scholarship scheme, and students should carefully check the instructions provided while applying for any scholarship through the OASIS portal.",
          },
          {
            title: "SCC",
            heading: "Student Credit Card",
            body: "Student credit cards aim to assist students in building a credit history and managing their finances during their academic pursuits. These cards generally provide lower credit limits and distinctive features like rewards programs, cash-back offers, and discounts on specific purchases. A student credit card can be a useful tool for helping students establish and build their credit history while also providing rewards, cash-back, and other benefits. It’s important to use a student credit card responsibly and pay off the balance each month to avoid interest charges and fees.",
          },
        ].map((item) => (
          <article key={item.title} className="site-card">
            <p className="text-gold font-bold tracking-wide">{item.title}</p>
            <h2 className="font-display text-2xl text-navy-deep mt-1 mb-3">
              {item.heading}
            </h2>
            <p className="text-muted">{item.body}</p>
          </article>
        ))}
        <Link href="/admission" className="btn-primary inline-flex">
          Apply for Admission
        </Link>
      </section>
    </>
  );
}
