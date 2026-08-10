import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { galleryImages } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Campus gallery — Ravel Institute of Nursing.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" subtitle="Our Gallery — campus life and celebrations" />
      <section className="container-site py-12 md:py-16 space-y-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Lamp Lighting Ceremony",
              subtitle: "2023 — Ravel Institute of Nursing",
            },
            {
              title: "Yuva Day Celebration",
              subtitle: "12th January — Ravel Institute of Nursing",
            },
            {
              title: "Become a Skilled and Confident Nurse!",
              subtitle: "Best Male Nursing College in Kolkata, West Bengal",
            },
          ].map((item) => (
            <div key={item.title} className="site-card">
              <h2 className="font-display text-xl text-navy-deep">{item.title}</h2>
              <p className="text-sm text-muted mt-2">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-white"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
