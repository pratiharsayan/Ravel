"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  loginLinks,
  moreLinks,
  navLinks,
  siteConfig,
} from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
    setLoginOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-navy-deep text-white text-sm">
        <div className="container-site flex flex-wrap items-center justify-between gap-2 py-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {siteConfig.phones.map((phone, i) => (
              <a
                key={phone}
                href={siteConfig.phoneHrefs[i]}
                className="hover:text-gold-bright transition-colors"
              >
                {phone}
              </a>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-gold-bright transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <Link href="/payment" className="hover:text-gold-bright transition-colors">
              Payment
            </Link>
            <span className="opacity-40">|</span>
            <div className="relative">
              <button
                type="button"
                className="hover:text-gold-bright transition-colors"
                onClick={() => {
                  setLoginOpen((v) => !v);
                  setMoreOpen(false);
                }}
                aria-expanded={loginOpen}
              >
                Login ▾
              </button>
              {loginOpen && (
                <div className="absolute right-0 mt-2 min-w-40 rounded-md border border-line bg-white text-ink shadow-lg animate-fade-in">
                  {loginLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 hover:bg-sky text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-line">
        <div className="container-site flex items-center justify-between gap-4 py-2.5">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo-full.png"
              alt={siteConfig.name}
              width={160}
              height={68}
              className="h-12 w-auto sm:h-14"
              priority
            />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-navy-deep text-base md:text-lg font-bold">
                Ravel Institute
              </div>
              <div className="text-xs text-muted tracking-wide uppercase">
                of Nursing
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 text-[0.92rem] font-semibold text-navy-dark">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-2 rounded-md transition-colors ${
                  isActive(link.href)
                    ? "bg-sky text-navy"
                    : "hover:bg-sky-soft hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="relative">
              <button
                type="button"
                className="px-2.5 py-2 rounded-md hover:bg-sky-soft"
                onClick={() => {
                  setMoreOpen((v) => !v);
                  setLoginOpen(false);
                }}
              >
                More ▾
              </button>
              {moreOpen && (
                <div className="absolute right-0 mt-2 min-w-44 rounded-md border border-line bg-white shadow-lg animate-fade-in">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 hover:bg-sky text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/admission"
              className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 whitespace-nowrap"
            >
              Admission Open {siteConfig.admissionYear}
            </Link>
            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-navy"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-line bg-white animate-fade-in">
            <nav className="container-site flex flex-col py-3 gap-1">
              {[...navLinks, ...moreLinks, ...loginLinks, { href: "/payment", label: "Payment" }].map(
                (link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2.5 rounded-md font-semibold ${
                      isActive(link.href) ? "bg-sky text-navy" : "hover:bg-sky-soft"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
