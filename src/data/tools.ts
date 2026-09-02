export type ToolItem = {
  name: string;
  category: string;
  initials: string;
};

export const tools: ToolItem[] = [
  { name: "Google Ads", category: "Paid Media", initials: "GA" },
  { name: "Google Analytics", category: "Analytics", initials: "GA4" },
  { name: "Google Search Console", category: "SEO", initials: "GSC" },
  { name: "Meta Ads Manager", category: "Paid Media", initials: "MA" },
  { name: "WordPress", category: "Web", initials: "WP" },
  { name: "Canva", category: "Creative", initials: "CV" },
  { name: "ChatGPT", category: "AI", initials: "AI" },
  { name: "SEMrush", category: "SEO", initials: "SR" },
  { name: "Ahrefs", category: "SEO", initials: "AH" },
  { name: "Microsoft Clarity", category: "Analytics", initials: "MC" },
  { name: "Google Business Profile", category: "Local SEO", initials: "GBP" },
];
