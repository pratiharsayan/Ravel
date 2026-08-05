import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { placementPartners } from "@/data/site";

export const metadata: Metadata = {
  title: "Placement",
  description:
    "100% placement assistance — Ravel Institute graduates placed in Apollo, Fortis, Narayana Health, and more.",
};

export default function PlacementPage() {
  return (
    <>
      <PageHero
        title="Placement"
        subtitle="Placement In Association With leading healthcare organizations"
      />
      <section className="container-site py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="prose-site">
            <p>
              A placement guarantee doesn&apos;t happen by accident. Ravel Institute
              operates a proactive, year-round Training and Placement Cell that
              actively bridges the gap between students and the corporate healthcare
              ecosystem.
            </p>
            <p>
              The placement cell maintains long-standing, strategic hiring ties with
              leading healthcare organizations and hospitals. Ravel graduates are
              frequently placed in reputed medical facilities, including{" "}
              {placementPartners.join(", ")}, providing students with excellent career
              opportunities in the healthcare sector and helping them build successful
              careers in nursing and patient care.
            </p>
          </div>
          <div className="relative min-h-[280px] rounded-xl overflow-hidden border border-line">
            <Image
              src="/images/placement.png"
              alt="Placement at Ravel Institute"
              fill
              className="object-contain bg-white p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {placementPartners.map((partner) => (
            <div
              key={partner}
              className="rounded-lg border border-line bg-white px-4 py-5 text-center font-semibold text-navy"
            >
              {partner}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
