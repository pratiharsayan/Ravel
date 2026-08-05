"use client";

import { useState } from "react";
import { faqs } from "@/data/site";

export function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="border border-line rounded-lg bg-white overflow-hidden"
          >
            <button
              type="button"
              className="w-full flex items-start justify-between gap-4 px-4 py-4 text-left font-semibold text-navy-deep"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className="text-gold shrink-0">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-muted text-sm leading-relaxed border-t border-line pt-3 animate-fade-in">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
