"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides, siteConfig } from "@/data/site";

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="relative min-h-[58vh] md:min-h-[68vh]">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide absolute inset-0 ${
              i === index ? "opacity-100 z-[1]" : "opacity-0 z-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-dark/70 to-navy/35" />
          </div>
        ))}

        <div className="relative z-[2] container-site flex min-h-[58vh] md:min-h-[68vh] items-center py-16">
          <div className="max-w-2xl animate-fade-up">
            <p className="section-kicker text-gold-bright mb-3">
              {siteConfig.name}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {heroSlides[index].title}
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-xl">
              {heroSlides[index].subtitle}. Nestled in the heart of Kolkata, our
              institute stands as a beacon of quality nursing education.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/admission" className="btn-primary">
                Enrol Today
              </Link>
              <Link href="/courses" className="btn-outline">
                Explore Courses
              </Link>
              <a
                href={siteConfig.prospectus}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Prospectus
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[3] flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-8 bg-gold-bright" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
