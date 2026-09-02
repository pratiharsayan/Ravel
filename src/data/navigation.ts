export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Why XIG Digital", href: "/why-xig-digital" },
  { label: "Placements", href: "/placements" },
  { label: "Student Reviews", href: "/student-reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLegalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export const footerCourseLinks: NavItem[] = [
  { label: "Digital Marketing", href: "/courses/digital-marketing" },
  { label: "SEO", href: "/courses/seo" },
  { label: "Social Media Marketing", href: "/courses/social-media-marketing" },
  { label: "Google Ads", href: "/courses/google-ads" },
  { label: "Meta Ads", href: "/courses/meta-ads" },
  { label: "WordPress", href: "/courses/wordpress" },
];
