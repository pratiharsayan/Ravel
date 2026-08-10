import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdmissionPopup } from "@/components/AdmissionPopup";
import { siteConfig } from "@/data/site";

const display = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Best Male Nursing College in Kolkata, West Bengal`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Male Nursing College Kolkata",
    "B.Sc Nursing",
    "GNM Nursing",
    "Ravel Institute of Nursing",
    "Best Nursing College West Bengal",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased bg-atmosphere`}>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <AdmissionPopup />
      </body>
    </html>
  );
}
