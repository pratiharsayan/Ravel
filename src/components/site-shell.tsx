"use client";

import { EnquiryProvider } from "@/components/enquiry-context";
import { EnquiryModal } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { MobileBottomCta, WhatsAppButton } from "@/components/chrome";
import { Navbar } from "@/components/navbar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <EnquiryProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1 pb-16 md:pb-0">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomCta />
      <EnquiryModal />
    </EnquiryProvider>
  );
}
