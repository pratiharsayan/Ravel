"use client";

import Image from "next/image";
import Link from "next/link";
import { notifications } from "@/data/site";

export function NotificationBar() {
  const items = [...notifications, ...notifications];

  return (
    <div className="bg-navy text-white border-y border-navy-deep">
      <div className="container-site flex items-stretch gap-3 py-0">
        <div className="shrink-0 bg-crimson px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wide flex items-center">
          Notices
        </div>
        <div className="marquee flex-1 py-2.5 overflow-hidden">
          <div className="marquee-track text-sm">
            {items.map((item, i) => (
              <Link
                key={`${item.text}-${i}`}
                href={item.href}
                className="inline-flex items-center gap-2 hover:text-gold-bright transition-colors"
                target={item.href.endsWith(".pdf") ? "_blank" : undefined}
              >
                <span>{item.text}</span>
                {item.isNew && (
                  <Image
                    src="/images/new.gif"
                    alt="New"
                    width={30}
                    height={14}
                    unoptimized
                  />
                )}
                <span className="opacity-40">•</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
