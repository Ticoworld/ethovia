export interface PortfolioResult {
  iconName: string; // Changed from icon component to icon name
  metric: string;
  label: string;
  detail: string;
}

export interface PortfolioTestimonial {
  quote: string;
  author: string;
  position: string;
  avatar: string;
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
    slug: "ecommerce-transformation",
    title: "E-Commerce Transformation",
    client: "TechGear Online",
    category: "Web Development",
    date: "Q2 2024",
    heroImage: "/images/portfolio/ecommerce-transformation.png",
    excerpt: "Complete redesign that tripled conversion rates",
    challenge:
      "TechGear Online was struggling with an outdated website that had poor mobile experience, slow load times, and a confusing checkout process. Their conversion rate was below 1%, and cart abandonment was at 75%.",
    solution:
      "We completely redesigned their e-commerce platform with a mobile-first approach, implemented performance optimizations, streamlined the checkout process, and integrated advanced analytics to track user behavior and conversion funnels.",
    results: [
      {
        iconName: "TrendingUp",
        metric: "300%",
        label: "Increase in Conversion Rate",
        detail: "From 0.8% to 3.2% within 3 months",
      },
      {
        iconName: "DollarSign",
        metric: "$2.5M",
        label: "Additional Annual Revenue",
        detail: "Projected revenue increase from improvements",
      },
      {
        iconName: "Users",
        metric: "65%",
        label: "Reduction in Cart Abandonment",
        detail: "Streamlined checkout process",
      },
      {
        iconName: "Star",
        metric: "0.8s",
        label: "Page Load Time",
        detail: "Down from 4.2s average load time",
      },
    ],
    testimonial: {
      quote:
        "Ethovia completely transformed our online business. The new website not only looks incredible but has tripled our conversion rate. Our revenue has grown by over 200% since the launch.",
      author: "Sarah Chen",
      position: "CEO, TechGear Online",
      avatar: "/images/icons/avatar-placeholder.png",
    },
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Shopify",
      "Google Analytics 4",
    ],
  },
  {
    id: 2,
    slug: "social-media-campaign",
    title: "Facebook and Instagram Ads",
    client: "FitLife Nutrition",
    category: "Paid Ads",
    date: "Q3 2024",
    heroImage: "/images/portfolio/social-media-campaign.png",
    excerpt: "Multi-platform campaign generating 2M+ impressions",
    challenge:
      "FitLife Nutrition needed to expand their market reach and build brand awareness among health-conscious millennials and Gen Z consumers. Their previous campaigns had low engagement and poor ROI.",
    solution:
      "We developed a comprehensive multi-platform social media advertising strategy leveraging Instagram, Facebook, and TikTok. Created engaging video content, implemented A/B testing, and used advanced audience targeting based on health and fitness interests.",
    results: [
      {
        iconName: "Eye",
        metric: "2.5M",
        label: "Total Impressions",
        detail: "Across all social platforms",
      },
      {
        iconName: "Users",
        metric: "45K",
        label: "New Followers",
        detail: "Organic and paid growth combined",
      },
      {
        iconName: "TrendingUp",
        metric: "8.2%",
        label: "Engagement Rate",
        detail: "Triple the industry average",
      },
      {
        iconName: "DollarSign",
        metric: "$1.85",
        label: "Cost Per Acquisition",
        detail: "62% lower than previous campaigns",
      },
    ],
    testimonial: {
      quote:
        "The social media campaign exceeded all our expectations. Ethovia's creative approach and data-driven strategy helped us reach our target audience effectively. We saw massive growth in brand awareness and sales.",
      author: "Marcus Johnson",
      position: "Marketing Director, FitLife Nutrition",
      avatar: "/images/icons/avatar-placeholder.png",
    },
    technologies: [
      "Facebook Ads Manager",
      "Instagram Ads",
      "TikTok Ads",
      "Canva",
      "Adobe Premiere Pro",
      "Hootsuite",
    ],
  },
  {
    id: 3,
    slug: "instagram-influencer",
    title: "Social Media Management",
    client: "BeautyGlow Cosmetics",
    category: "Social Media",
    date: "Q1 2024",
    heroImage: "/images/portfolio/instagram-influencer-campaign.png",
    excerpt: "Viral campaign with 15K new customers",
    challenge:
      "BeautyGlow Cosmetics wanted to launch their new product line but had limited brand recognition. They needed to quickly build credibility and reach their target demographic of young women aged 18-35.",
    solution:
      "We orchestrated a strategic influencer marketing campaign partnering with 25 micro and macro influencers. Created authentic content showcasing product benefits, implemented unique discount codes for tracking, and amplified reach through paid social promotion.",
    results: [
      {
        iconName: "Users",
        metric: "15.2K",
        label: "New Customers",
        detail: "Within campaign period",
      },
      {
        iconName: "Eye",
        metric: "8.5M",
        label: "Total Reach",
        detail: "Combined influencer audience",
      },
      {
        iconName: "TrendingUp",
        metric: "425%",
        label: "ROI",
        detail: "Return on ad spend",
      },
      {
        iconName: "Star",
        metric: "92%",
        label: "Positive Sentiment",
        detail: "From social listening analysis",
      },
    ],
    testimonial: {
      quote:
        "The influencer campaign was a game-changer for our brand. Ethovia's careful selection of partners and strategic approach resulted in authentic engagement and amazing sales. We couldn't be happier!",
      author: "Olivia Martinez",
      position: "Brand Manager, BeautyGlow Cosmetics",
      avatar: "/images/icons/avatar-placeholder.png",
    },
    technologies: [
      "Instagram Business",
      "Influencer Marketing Hub",
      "Sprout Social",
      "Google Analytics",
      "Shopify",
      "Later",
    ],
  },
  // Added: Real estate website/ads case study
  {
    id: 4,
    slug: "real-estate-website-ads",
    title: "Real Estate Website/Ads",
    client: "PrimeLiving Realty",
    category: "Web Development",
    date: "Q2 2024",
    heroImage: "/images/services/service-realestate-website-ads.png",
    excerpt: "Lead-gen focused site and ads for property listings",
    challenge:
      "PrimeLiving needed a modern property site with MLS integrations and a proven ad engine to capture seller and buyer leads in competitive locales.",
    solution:
      "Built a conversion-focused real estate website, integrated listings search, and launched targeted Google/Facebook lead ads with smart audience segmentation.",
    results: [
      { iconName: "Users", metric: "3x", label: "Qualified Leads", detail: "Month-over-month growth" },
      { iconName: "TrendingUp", metric: "+62%", label: "CTR", detail: "Across paid channels" },
      { iconName: "DollarSign", metric: "$98", label: "CPL", detail: "Average cost per lead" },
    ],
    testimonial: {
      quote:
        "Our pipeline exploded after the site went live. The ads consistently bring in high-intent buyers and sellers.",
      author: "Daniel Brooks",
      position: "Broker, PrimeLiving Realty",
      avatar: "/images/icons/avatar-placeholder.png",
    },
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Google Ads", "Facebook Ads"],
  },
  // Existing: Google & YouTube Ads Optimization
  {
    id: 5,
    slug: "google-ads-optimization",
    title: "Google & YouTube Ads Optimization",
    client: "Elite Legal Services",
    category: "Paid Ads",
    date: "Q2 2024",
    heroImage: "/images/portfolio/google-ads-optimization.png",
    excerpt: "45% reduction in CPA with doubled lead volume",
    challenge:
      "Elite Legal Services was spending heavily on Google Ads but seeing poor results. Their cost per acquisition was too high, and many leads were unqualified. They needed a complete overhaul of their paid search strategy.",
    solution:
      "We conducted comprehensive keyword research, restructured campaigns with tightly themed ad groups, implemented negative keywords, created compelling ad copy with strong CTAs, and optimized landing pages for conversion. Set up advanced conversion tracking and remarketing.",
    results: [
      { iconName: "DollarSign", metric: "45%", label: "Reduction in CPA", detail: "From $285 to $157 per lead" },
      { iconName: "TrendingUp", metric: "118%", label: "Increase in Leads", detail: "Same ad budget, better targeting" },
      { iconName: "Target", metric: "78%", label: "Lead Quality Score", detail: "Up from 42% qualified leads" },
      { iconName: "Star", metric: "8.5/10", label: "Quality Score Average", detail: "Improved from 4.2/10" },
    ],
    testimonial: {
      quote:
        "Ethovia turned our Google Ads disaster into a lead generation machine. We're now getting more qualified leads at half the cost. Their expertise in paid search is unmatched.",
      author: "Robert Williams",
      position: "Managing Partner, Elite Legal Services",
      avatar: "/images/icons/avatar-placeholder.png",
    },
    technologies: ["Google Ads", "Google Tag Manager", "Google Analytics 4", "Unbounce", "CallRail", "Looker Studio"],
  },
  // Added: App Development case study
  {
    id: 6,
    slug: "app-development",
    title: "App Development",
    client: "SwiftGo Mobility",
    category: "App Development",
    date: "Q3 2024",
    heroImage: "/images/services/service-app-development.png",
    excerpt: "Cross-platform app delivering fast onboarding and high retention",
    challenge:
      "SwiftGo needed a reliable mobile app with seamless auth, offline caching and real-time updates to scale to thousands of daily users.",
    solution:
      "Delivered a cross-platform app with robust backend integrations, analytics, and a polished UX to drive engagement and retention.",
    results: [
      { iconName: "Users", metric: "25K", label: "MAU", detail: "Within 60 days of launch" },
      { iconName: "Star", metric: "4.7/5", label: "App Store Rating", detail: "Across iOS and Android" },
      { iconName: "TrendingUp", metric: "+38%", label: "Retention", detail: "Month 2 vs Month 1" },
    ],
    testimonial: {
      quote:
        "The app is rock solid and users love it. Ethovia nailed the UX and performance.",
      author: "Priya Nair",
      position: "Product Lead, SwiftGo Mobility",
      avatar: "/images/icons/avatar-placeholder.png",
    },
    technologies: ["React Native", "TypeScript", "Firebase", "Stripe"],
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
