export type BlogCategory =
  | "Digital Marketing"
  | "SEO"
  | "Google Ads"
  | "Meta Ads"
  | "Social Media"
  | "WordPress"
  | "AI Marketing"
  | "Career"
  | "Freelancing";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  imageLabel: string;
  content: { heading: string; paragraphs: string[] }[];
};

export const blogCategories: BlogCategory[] = [
  "Digital Marketing",
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Social Media",
  "WordPress",
  "AI Marketing",
  "Career",
  "Freelancing",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "digital-marketing",
    title: "What Is Digital Marketing? A Practical Guide for Learners in Kolkata",
    description:
      "Understand digital marketing channels, skills and career paths — written for students and professionals considering a digital marketing course in Kolkata.",
    category: "Digital Marketing",
    date: "2026-06-12",
    readTime: "8 min",
    imageLabel: "Digital marketing channels",
    content: [
      {
        heading: "Digital marketing is a skill set, not a slogan",
        paragraphs: [
          "Digital marketing is how businesses get found, build trust and generate enquiries using websites, search, social media, paid ads, content and analytics. For learners in Kolkata, it is one of the most practical career and business skills because almost every local brand now needs online visibility.",
          "A strong digital marketing course should teach how these channels work together, not as isolated theory chapters. Search brings intent, social builds presence, ads accelerate reach, content explains the offer, and analytics shows what is actually working.",
        ],
      },
      {
        heading: "Core channels you should learn",
        paragraphs: [
          "SEO helps websites appear when people search for services. Social media marketing builds community and brand recall. Google Ads and Meta Ads put offers in front of the right audience with a budget. WordPress and landing pages give campaigns a place to convert. Email and CRM nurture leads after the first click.",
          "At XIG Digital, training is built around this full picture so learners can contribute in agencies, in-house teams, freelance work or their own business.",
        ],
      },
      {
        heading: "How to choose a digital marketing training institute in Kolkata",
        paragraphs: [
          "Look for practical assignments, live-style projects, current tools and honest career guidance. Certificates matter less than whether you can audit a page, plan a campaign, read a report and explain your decisions.",
          "If you are comparing a digital marketing course in Kolkata, ask how much time is spent on implementation versus slides. Practical institutes will talk about projects, tools and portfolio work first.",
        ],
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO Course in Kolkata: Skills That Actually Get Used at Work",
    description:
      "A clear overview of SEO skills — keyword research, on-page, local SEO and Search Console — for anyone considering an SEO course in Kolkata.",
    category: "SEO",
    date: "2026-06-18",
    readTime: "7 min",
    imageLabel: "SEO analytics",
    content: [
      {
        heading: "SEO is research plus implementation",
        paragraphs: [
          "Search engine optimisation is the practice of helping the right pages appear for the right searches. In agencies and businesses, SEO work is rarely just 'adding keywords'. It includes intent research, content structure, technical hygiene, local presence and measurement.",
          "An SEO course in Kolkata should therefore include keyword research, on-page optimisation, Google Business Profile, Search Console and a simple audit process you can repeat.",
        ],
      },
      {
        heading: "Local SEO matters in Kolkata",
        paragraphs: [
          "Many Kolkata businesses depend on Maps and local pack visibility: clinics, coaching centres, restaurants, service companies. Local SEO — categories, photos, reviews, NAP consistency and location pages — is a high-value skill for both jobs and freelance work.",
        ],
      },
      {
        heading: "What to practise",
        paragraphs: [
          "Practise writing title tags, mapping keywords to pages, checking coverage issues and explaining why a page should rank. Employers hire people who can show a before-and-after thought process, not only a tool login.",
        ],
      },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads Course in Kolkata: How Search Campaigns Really Work",
    description:
      "Learn the building blocks of Google Ads — keywords, ads, bidding and landing pages — before you join a Google Ads course in Kolkata.",
    category: "Google Ads",
    date: "2026-06-24",
    readTime: "7 min",
    imageLabel: "Google Ads dashboard",
    content: [
      {
        heading: "Search ads capture intent",
        paragraphs: [
          "Google Ads is powerful because people type what they want. A good Search campaign matches that intent with relevant keywords, useful ads and a landing page that continues the promise.",
          "A Google Ads course in Kolkata should cover account structure, match types, ad assets, bidding and conversion tracking — the work performance marketers actually do.",
        ],
      },
      {
        heading: "Structure before spend",
        paragraphs: [
          "Beginners often launch messy campaigns. Professionals group keywords by intent, write ads that match the query, and send traffic to a focused page. Learning this structure early saves budget later.",
        ],
      },
      {
        heading: "Measurement is part of the job",
        paragraphs: [
          "Clicks are not the goal. Leads, calls, purchases or qualified traffic are. Training should include what to track and how to read search terms so you can improve campaigns with evidence.",
        ],
      },
    ],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads for Beginners: Facebook and Instagram Advertising Explained",
    description:
      "A practical introduction to Meta Ads Manager, audiences and creatives for learners joining a Meta Ads course.",
    category: "Meta Ads",
    date: "2026-07-02",
    readTime: "6 min",
    imageLabel: "Meta Ads Manager",
    content: [
      {
        heading: "Paid social is creative plus targeting",
        paragraphs: [
          "Meta Ads run across Facebook and Instagram. Unlike search, users are not always looking for you. Your job is to interrupt usefully — with a clear offer, strong creative and an audience that could care.",
        ],
      },
      {
        heading: "What you will learn in training",
        paragraphs: [
          "Campaign objectives, ad sets, audiences, placements, creative testing and basic pixel thinking. The Meta Ads course at XIG Digital focuses on how marketers plan and optimise these campaigns in Ads Manager.",
        ],
      },
    ],
  },
  {
    slug: "social-media",
    title: "Social Media Marketing Course in Kolkata: Beyond Random Posting",
    description:
      "How social media marketing training should cover strategy, content systems and reporting — not only posting tips.",
    category: "Social Media",
    date: "2026-07-08",
    readTime: "6 min",
    imageLabel: "Social media analytics",
    content: [
      {
        heading: "Social media is a system",
        paragraphs: [
          "Effective social media marketing uses positioning, a content calendar, platform-native formats, community replies and simple reporting. Random posting is not a strategy.",
          "A social media marketing course in Kolkata should teach you how brands in education, retail, services and D2C actually plan weeks of content.",
        ],
      },
      {
        heading: "Organic and paid work together",
        paragraphs: [
          "Organic content builds assets and trust. Ads amplify what already resonates. Learning both makes you more useful in a team and more credible as a freelancer.",
        ],
      },
    ],
  },
  {
    slug: "wordpress",
    title: "Why Digital Marketers Should Learn WordPress",
    description:
      "WordPress skills help marketers launch landing pages, blogs and small business sites without waiting on every development request.",
    category: "WordPress",
    date: "2026-07-14",
    readTime: "5 min",
    imageLabel: "Website builder",
    content: [
      {
        heading: "Campaigns need pages",
        paragraphs: [
          "SEO content, lead magnets and ads all need a destination. WordPress remains one of the most common ways Indian businesses publish pages and blogs. Marketers who can build a clean page move faster.",
        ],
      },
      {
        heading: "What to learn",
        paragraphs: [
          "Admin basics, pages vs posts, menus, forms, essential plugins and on-page SEO fields. You do not need to become a full-stack developer to be effective.",
        ],
      },
    ],
  },
  {
    slug: "ai-marketing",
    title: "AI Tools for Digital Marketing: How Learners Should Practise",
    description:
      "How ChatGPT and similar tools help with research, content and SEO support — and why human strategy still leads.",
    category: "AI Marketing",
    date: "2026-07-20",
    readTime: "6 min",
    imageLabel: "AI marketing workflow",
    content: [
      {
        heading: "AI is a multiplier, not a replacement",
        paragraphs: [
          "AI tools can speed research, outlines, variations and first drafts. They cannot replace understanding of the customer, the offer or the channel. Good training teaches both the shortcuts and the review process.",
        ],
      },
      {
        heading: "Practical workflows",
        paragraphs: [
          "Use AI to cluster keywords, draft outlines, generate ad variations and summarise reports — then edit for accuracy, brand and local context. That is how teams in 2026 actually work.",
        ],
      },
    ],
  },
  {
    slug: "digital-marketing-career",
    title: "Digital Marketing Career Paths After Training in Kolkata",
    description:
      "Roles you can aim for after a digital marketing course — SEO, social, performance, content, analytics and freelance work.",
    category: "Career",
    date: "2026-07-28",
    readTime: "8 min",
    imageLabel: "Career growth",
    content: [
      {
        heading: "There is more than one job title",
        paragraphs: [
          "After a digital marketing course, learners often start as executives in SEO, social media, performance marketing or content. Specialists grow into ads, analytics or strategy. Others freelance or apply skills inside a family business.",
        ],
      },
      {
        heading: "What employers look for",
        paragraphs: [
          "A portfolio of practice work, familiarity with tools, and the ability to explain a campaign. Career guidance at XIG Digital covers resumes, interviews and project presentation. Placement is never guaranteed — preparation is.",
        ],
      },
    ],
  },
  {
    slug: "freelancing",
    title: "Freelancing in Digital Marketing: A Realistic Starting Point",
    description:
      "How to package SEO, ads and social services after training, including clients, scope and delivery basics.",
    category: "Freelancing",
    date: "2026-08-05",
    readTime: "7 min",
    imageLabel: "Freelance client work",
    content: [
      {
        heading: "Start with a clear offer",
        paragraphs: [
          "Freelancing works better when you sell a defined service: local SEO setup, Google Business Profile, a Search campaign, a content calendar. Vague 'I do digital marketing' offers are harder to buy.",
        ],
      },
      {
        heading: "Delivery builds reputation",
        paragraphs: [
          "Scope the work, report simply, and do not overpromise rankings or leads. Training at XIG Digital includes client management and portfolio thinking so freelance work stays professional.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category?: BlogCategory) {
  if (!category) return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}
