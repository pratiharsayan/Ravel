"use client";

import { useState } from "react";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/data/testimonials";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <div>
      <div className="md:hidden">
        {item ? <TestimonialCard item={item} /> : null}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            className="btn-outline px-4 py-2"
            onClick={() => setIndex((v) => (v === 0 ? testimonials.length - 1 : v - 1))}
            aria-label="Previous review"
          >
            Prev
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((review, i) => (
              <button
                key={review.id}
                type="button"
                aria-label={`Go to review ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-electric" : "bg-line"}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="btn-outline px-4 py-2"
            onClick={() => setIndex((v) => (v === testimonials.length - 1 ? 0 : v + 1))}
            aria-label="Next review"
          >
            Next
          </button>
        </div>
      </div>
      <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((review) => (
          <TestimonialCard key={review.id} item={review} />
        ))}
      </div>
    </div>
  );
}
