"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

const COOKIE_KEY = "ravel-admission-popup";

export function AdmissionPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(COOKIE_KEY)) return;
    } catch {
      /* ignore */
    }
    const timer = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(COOKIE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-deep/65 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admission-popup-title"
    >
      <div className="popup-panel relative w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="bg-gradient-to-br from-navy to-navy-dark px-6 pt-8 pb-6 text-center text-white">
          <div className="text-4xl mb-2" aria-hidden>
            🎓
          </div>
          <h2 id="admission-popup-title" className="font-display text-2xl font-bold">
            Admissions Open!
          </h2>
          <p className="mt-1 text-gold-bright font-semibold tracking-wide">
            SESSION {siteConfig.admissionYear}
          </p>
        </div>
        <div className="px-6 py-6 text-center">
          <p className="text-muted mb-2">Take the next step toward your future.</p>
          <p className="text-sm text-crimson font-semibold mb-5">
            ⏳ Seats are filling fast. Secure your spot today.
          </p>
          <Link href="/admission" onClick={close} className="btn-primary w-full">
            Apply Now
          </Link>
        </div>
        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 h-8 w-8 rounded-full bg-white/15 text-white hover:bg-white/25"
          aria-label="Close admission popup"
        >
          ×
        </button>
      </div>
    </div>
  );
}
