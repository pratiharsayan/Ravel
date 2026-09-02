import { site } from "@/data/site";
import { courses } from "@/data/courses";
import { faqs } from "@/data/faqs";
import { absoluteUrl } from "@/lib/utils";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization", "LocalBusiness"],
    name: site.name,
    legalName: site.legalName,
    url: site.urls.website,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl("/og.svg"),
    description: site.description,
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.location.streetAddress,
      addressLocality: site.location.addressLocality,
      addressRegion: site.location.addressRegion,
      postalCode: site.location.postalCode,
      addressCountry: site.location.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.location.geo.latitude,
      longitude: site.location.geo.longitude,
    },
    areaServed: {
      "@type": "City",
      name: "Kolkata",
    },
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.youtube,
      site.social.linkedin,
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.urls.website,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function courseSchema(slug: string) {
  const course = courses.find((item) => item.slug === slug);
  if (!course) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.overview,
    provider: {
      "@type": "EducationalOrganization",
      name: site.name,
      url: site.urls.website,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: course.mode,
      location: {
        "@type": "Place",
        name: site.name,
        address: site.location.displayAddress,
      },
    },
    educationalLevel: course.level,
    timeToComplete: course.duration,
    url: absoluteUrl(`/courses/${course.slug}`),
  };
}
