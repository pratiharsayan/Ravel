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
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative overflow-hidden bg-navy-deep">
      {/* Match original site banner sizing: full-width images, fixed responsive heights */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[650px]">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide absolute inset-0 ${
              i === index ? "opacity-100 z-[1]" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 z-[3] -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy-deep/55 text-white hover:bg-navy-deep/80"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 z-[3] -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy-deep/55 text-white hover:bg-navy-deep/80"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 z-[3] flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-gold-bright" : "w-2.5 bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-navy text-white">
        <div className="container-site flex flex-wrap items-center justify-between gap-3 py-3">
          <p className="text-sm sm:text-base font-semibold">
            Admission Open — {siteConfig.admissionYear} Session
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/admission" className="btn-primary text-sm py-2 px-4">
              Enrol Today
            </Link>
            <a
              href={siteConfig.prospectus}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm py-2 px-4"
            >
              Prospectus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
