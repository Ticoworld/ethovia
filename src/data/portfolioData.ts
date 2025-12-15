export interface PortfolioResult {
  iconName: string; // Icon name as string for serialization
  metric: string;
  label: string;
  detail: string;
}

export interface PortfolioTestimonial {
  quote: string;
  author: string;
  position: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  client: string;
  category: string;
  date: string;
  heroImage: string;
  excerpt: string;
  challenge: string;
  solution: string;
  results: PortfolioResult[];
  testimonial: PortfolioTestimonial;
  technologies: string[];
}

export const portfolioData: CaseStudy[] = [
  {
    id: 1,
    slug: "lekki-luxury-realty",
    title: "Lekki Luxury Realty Sales System",
    client: "Lekki Luxury Homes",
    category: "Real Estate Marketing",
    date: "Nov 2024",
    heroImage: "/images/portfolio/portfolio-placeholder-1.png",
    excerpt: "How we generated 50+ qualified property inspections in 30 days using Meta Ads.",
    challenge: "The client was spending ₦500k/month on ads but only getting 'window shoppers' and zero actual site visits.",
    solution: "We built a high-speed landing page optimized for mobile data, integrated a WhatsApp booking bot, and targeted high-net-worth individuals in Ikoyi & V.I.",
    results: [
      { iconName: "Users", metric: "150+", label: "Qualified Leads", detail: "High-intent property seekers" },
      { iconName: "Target", metric: "52", label: "Inspections Booked", detail: "Within 30 days of campaign launch" },
      { iconName: "TrendingUp", metric: "₦1,500", label: "Cost Per Lead", detail: "70% lower than industry average" },
      { iconName: "DollarSign", metric: "₦850M", label: "Revenue Potential", detail: "From qualified pipeline" },
    ],
    testimonial: {
      quote: "I was skeptical at first, but Ethovia delivered. My agents are fully booked with inspections for the first time in months.",
      author: "Chinedu Okafor",
      position: "CEO, Lekki Luxury Homes",
    },
    technologies: ["Next.js", "Facebook Ads", "WhatsApp API", "Paystack"],
  },
  {
    id: 2,
    slug: "lagos-fashion-scaleup",
    title: "Lagos Fashion Brand Scale-Up",
    client: "Ziva Republic",
    category: "E-Commerce",
    date: "Oct 2024",
    heroImage: "/images/portfolio/portfolio-placeholder-2.png",
    excerpt: "Scaling a local fashion brand from ₦2M to ₦15M monthly revenue with Shopify & Instagram Ads.",
    challenge: "Reliance on organic DM sales was limiting growth. They needed an automated system to handle orders 24/7.",
    solution: "We migrated them to Shopify with a Paystack checkout, set up automated email flows, and ran conversion-focused Instagram catalog ads.",
    results: [
      { iconName: "TrendingUp", metric: "₦15M+", label: "Monthly Revenue", detail: "Up from ₦2M baseline" },
      { iconName: "Target", metric: "4.5x", label: "ROAS", detail: "Return on ad spend" },
      { iconName: "ShoppingCart", metric: "1,200+", label: "Online Orders", detail: "Per month average" },
      { iconName: "Users", metric: "85%", label: "Customer Retention", detail: "Repeat purchase rate" },
    ],
    testimonial: {
      quote: "Our sales used to stop when we slept. Now I wake up to alerts of payments from Paystack every morning.",
      author: "Amina Yusuf",
      position: "Founder, Ziva Republic",
    },
    technologies: ["Shopify", "Klaviyo", "Instagram Ads", "Paystack"],
  },
  {
    id: 3,
    slug: "swift-pay-launch",
    title: "SwiftPay App Launch",
    client: "SwiftPay Nigeria",
    category: "Fintech Growth",
    date: "Sept 2024",
    heroImage: "/images/portfolio/portfolio-placeholder-3.png",
    excerpt: "Acquiring 5,000 active users for a new fintech wallet in just 6 weeks.",
    challenge: "Entering a crowded fintech market with a limited budget compared to the giants.",
    solution: "We executed a 'Micro-Influencer' campaign on Twitter/X and a referral loop that rewarded users with airtime.",
    results: [
      { iconName: "Users", metric: "12k+", label: "App Installs", detail: "Across iOS and Android" },
      { iconName: "Target", metric: "5,000", label: "Active Users", detail: "Monthly active users (MAU)" },
      { iconName: "TrendingUp", metric: "₦400", label: "CPA", detail: "Cost per acquisition" },
      { iconName: "Star", metric: "4.8/5", label: "App Rating", detail: "Average user satisfaction" },
    ],
    testimonial: {
      quote: "Ethovia's understanding of the Nigerian youth market is unmatched. They made our launch viral.",
      author: "Tunde Bakare",
      position: "Marketing Director, SwiftPay",
    },
    technologies: ["React Native", "Firebase", "Twitter Ads", "AppsFlyer"],
  },
];

// Helper function to get case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return portfolioData.find((item) => item.slug === slug);
}

// Helper function to get all slugs
export function getAllSlugs(): string[] {
  return portfolioData.map((item) => item.slug);
}

// Helper function to get portfolio items for the work page
export function getPortfolioItems() {
  return portfolioData.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    image: item.heroImage,
    slug: item.slug,
    excerpt: item.excerpt,
  }));
}
