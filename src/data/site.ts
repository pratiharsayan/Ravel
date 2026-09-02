export const site = {
  name: "XIG Digital",
  legalName: "XIG Digital",
  tagline: "Digital Marketing Training Institute",
  shortDescription:
    "Practical, career-focused digital marketing training in Kolkata with live projects, industry tools and hands-on learning.",
  description:
    "XIG Digital is a professional digital marketing training institute in Kolkata helping students, freshers, working professionals, business owners and entrepreneurs learn practical digital marketing skills through live projects, campaigns and industry-focused training.",
  location: {
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    postalCode: "700064",
    streetAddress: "Salt Lake, Sector V",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
    displayAddress:
      "Salt Lake, Sector V, Kolkata, West Bengal 700064, India",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Salt%20Lake%20Sector%20V%20Kolkata&t=&z=14&ie=UTF8&iwloc=&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Salt+Lake+Sector+V+Kolkata",
    geo: {
      latitude: 22.5735,
      longitude: 88.4331,
    },
  },
  contact: {
    phone: "+91 90000 00000",
    phoneHref: "tel:+919000000000",
    email: "hello@xigdigital.in",
    emailHref: "mailto:hello@xigdigital.in",
    whatsapp: "919000000000",
    whatsappHref:
      "https://wa.me/919000000000?text=Hi%20XIG%20Digital%2C%20I%20would%20like%20to%20enquire%20about%20digital%20marketing%20courses.",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
    linkedin: "https://www.linkedin.com/",
  },
  urls: {
    website: "https://xigdigital.in",
  },
  hours: "Mon–Sat: 10:00 AM – 7:00 PM",
  foundingYear: 2020,
} as const;

export type SiteConfig = typeof site;
