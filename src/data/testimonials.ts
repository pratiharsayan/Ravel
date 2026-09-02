export type Testimonial = {
  id: string;
  name: string;
  course: string;
  rating: 4 | 5;
  quote: string;
  initials: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "riya",
    name: "Riya Banerjee",
    course: "Digital Marketing Course",
    rating: 5,
    initials: "RB",
    role: "Career switcher, Kolkata",
    quote:
      "XIG Digital helped me understand digital marketing through practical projects instead of only theoretical classes.",
  },
  {
    id: "arjun",
    name: "Arjun Sen",
    course: "SEO Course",
    rating: 5,
    initials: "AS",
    role: "Fresher",
    quote:
      "The SEO modules were hands-on. Keyword research, on-page work and Search Console finally made sense because we practised them.",
  },
  {
    id: "meera",
    name: "Meera Dutta",
    course: "Google Ads Course",
    rating: 5,
    initials: "MD",
    role: "Working professional",
    quote:
      "I joined after office hours and still got practical campaign thinking — structure, keywords and what to optimise first.",
  },
  {
    id: "soham",
    name: "Soham Ghosh",
    course: "Advanced Digital Marketing",
    rating: 5,
    initials: "SG",
    role: "Agency executive",
    quote:
      "The advanced batch went beyond basics into funnels, analytics and performance. Useful for someone already in the field.",
  },
  {
    id: "ananya",
    name: "Ananya Roy",
    course: "Social Media Marketing Course",
    rating: 5,
    initials: "AR",
    role: "Business owner",
    quote:
      "As a small business owner I needed clarity, not jargon. The social and ads sessions helped me plan content with purpose.",
  },
  {
    id: "dev",
    name: "Dev Sharma",
    course: "Digital Marketing Course",
    rating: 4,
    initials: "DS",
    role: "Student",
    quote:
      "Live-style projects and portfolio guidance were the biggest value. I could show actual work instead of only a certificate.",
  },
];
