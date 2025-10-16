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
    heroImage: "/images/portfolio/portfolio-placeholder-1.png",
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
    title: "Social Media Campaign",
    client: "FitLife Nutrition",
    category: "Paid Ads",
    date: "Q3 2024",
    heroImage: "/images/portfolio/portfolio-placeholder-2.png",
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
    slug: "saas-product-launch",
    title: "SaaS Product Launch",
    client: "CloudSync Pro",
    category: "Web Development",
    date: "Q4 2023",
    heroImage: "/images/portfolio/portfolio-placeholder-3.png",
    excerpt: "Full-stack marketing for successful product launch",
    challenge:
      "CloudSync Pro was launching a new cloud storage solution in a competitive market. They needed a professional website, landing pages, and a comprehensive digital marketing strategy to attract early adopters and establish credibility.",
    solution:
      "We built a high-performance website with interactive product demos, created conversion-optimized landing pages, and implemented SEO best practices. Launched coordinated Google Ads and content marketing campaigns to drive qualified traffic.",
    results: [
      {
        iconName: "Users",
        metric: "12K",
        label: "Sign-ups in First Month",
        detail: "Exceeded target by 240%",
      },
      {
        iconName: "TrendingUp",
        metric: "28%",
        label: "Conversion Rate",
        detail: "Landing page to trial sign-up",
      },
      {
        iconName: "Star",
        metric: "4.8/5",
        label: "Product Rating",
        detail: "From 850+ reviews",
      },
      {
        iconName: "DollarSign",
        metric: "$450K",
        label: "MRR After 3 Months",
        detail: "Monthly recurring revenue",
      },
    ],
    testimonial: {
      quote:
        "Ethovia was instrumental in our successful product launch. Their expertise in web development and digital marketing helped us achieve our first-year goals in just three months. Incredible team!",
      author: "Jennifer Lee",
      position: "Founder & CEO, CloudSync Pro",
      avatar: "/images/icons/avatar-placeholder.png",
    },
    technologies: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Google Ads",
    ],
  },
  {
    id: 4,
    slug: "instagram-influencer",
    title: "Instagram Influencer Campaign",
    client: "BeautyGlow Cosmetics",
    category: "Social Media",
    date: "Q1 2024",
    heroImage: "/images/portfolio/portfolio-placeholder-1.png",
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
  {
    id: 5,
    slug: "google-ads-optimization",
    title: "Google Ads Optimization",
    client: "Elite Legal Services",
    category: "Paid Ads",
    date: "Q2 2024",
    heroImage: "/images/portfolio/portfolio-placeholder-2.png",
    excerpt: "45% reduction in CPA with doubled lead volume",
    challenge:
      "Elite Legal Services was spending heavily on Google Ads but seeing poor results. Their cost per acquisition was too high, and many leads were unqualified. They needed a complete overhaul of their paid search strategy.",
    solution:
      "We conducted comprehensive keyword research, restructured campaigns with tightly themed ad groups, implemented negative keywords, created compelling ad copy with strong CTAs, and optimized landing pages for conversion. Set up advanced conversion tracking and remarketing.",
    results: [
      {
        iconName: "DollarSign",
        metric: "45%",
        label: "Reduction in CPA",
        detail: "From $285 to $157 per lead",
      },
      {
        iconName: "TrendingUp",
        metric: "118%",
        label: "Increase in Leads",
        detail: "Same ad budget, better targeting",
      },
      {
        iconName: "Target",
        metric: "78%",
        label: "Lead Quality Score",
        detail: "Up from 42% qualified leads",
      },
      {
        iconName: "Star",
        metric: "8.5/10",
        label: "Quality Score Average",
        detail: "Improved from 4.2/10",
      },
    ],
    testimonial: {
      quote:
        "Ethovia turned our Google Ads disaster into a lead generation machine. We're now getting more qualified leads at half the cost. Their expertise in paid search is unmatched.",
      author: "Robert Williams",
      position: "Managing Partner, Elite Legal Services",
      avatar: "/images/icons/avatar-placeholder.png",
    },
    technologies: [
      "Google Ads",
      "Google Tag Manager",
      "Google Analytics 4",
      "Unbounce",
      "CallRail",
      "Looker Studio",
    ],
  },
  {
    id: 6,
    slug: "restaurant-redesign",
    title: "Restaurant Website Redesign",
    client: "Bella Cucina Restaurant",
    category: "Web Development",
    date: "Q3 2024",
    heroImage: "/images/portfolio/portfolio-placeholder-3.png",
    excerpt: "Mobile-first design boosting reservations by 200%",
    challenge:
      "Bella Cucina's outdated website was not mobile-friendly and lacked online reservation capabilities. They were losing customers to competitors with better online presence and missing out on the growing trend of online ordering.",
    solution:
      "We created a stunning mobile-first website with integrated online reservations, menu management system, and seamless online ordering integration. Implemented local SEO optimization and added high-quality food photography galleries to showcase their dishes.",
    results: [
      {
        iconName: "ShoppingCart",
        metric: "200%",
        label: "Increase in Reservations",
        detail: "Online booking system impact",
      },
      {
        iconName: "DollarSign",
        metric: "$180K",
        label: "Additional Revenue",
        detail: "From online orders in 6 months",
      },
      {
        iconName: "Eye",
        metric: "85%",
        label: "Mobile Traffic",
        detail: "Perfect responsive experience",
      },
      {
        iconName: "Star",
        metric: "#1",
        label: "Google Maps Ranking",
        detail: "For local restaurant searches",
      },
    ],
    testimonial: {
      quote:
        "The new website has transformed our business. Online reservations have tripled, and we're seeing customers we never reached before. Ethovia understood our vision and delivered beyond expectations.",
      author: "Antonio Rossi",
      position: "Owner, Bella Cucina Restaurant",
      avatar: "/images/icons/avatar-placeholder.png",
    },
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "OpenTable API",
      "Stripe",
      "Google My Business",
    ],
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
