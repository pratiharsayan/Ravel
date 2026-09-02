"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { EnquiryButton } from "@/components/enquiry-button";
import { IconClose, IconMenu } from "@/components/icons";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled || open ? "border-line bg-white/92 backdrop-blur-xl" : "border-transparent bg-white/80 backdrop-blur-md",
      )}
    >
      <div className="container-xig flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 focus-ring rounded-lg">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric to-navy text-sm font-bold text-white">
            X
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-bold tracking-tight text-navy">{site.name}</span>
            <span className="hidden text-[11px] font-medium text-muted sm:block">Kolkata · Digital Marketing</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  active ? "bg-mist text-navy" : "text-muted hover:bg-mist hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <EnquiryButton className="hidden sm:inline-flex">Enquire Now</EnquiryButton>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-navy xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-white xl:hidden">
          <nav className="container-xig grid gap-1 py-4" aria-label="Mobile">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-navy hover:bg-mist"
              >
                {item.label}
              </Link>
            ))}
            <EnquiryButton className="mt-2 w-full">Enquire Now</EnquiryButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
