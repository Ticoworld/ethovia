"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Transformation",
    category: "Web Development",
    year: "2024",
    image: "/images/portfolio/portfolio-placeholder-1.png",
    slug: "ecommerce-transformation",
    metric: "300% Conversion Increase",
  },
  {
    id: 2,
    title: "Social Media Campaign",
    category: "Paid Ads",
    year: "2024",
    image: "/images/portfolio/portfolio-placeholder-2.png",
    slug: "social-media-campaign",
    metric: "2M+ Impressions",
  },
  {
    id: 3,
    title: "SaaS Product Launch",
    category: "Full Stack Marketing",
    year: "2023",
    image: "/images/portfolio/portfolio-placeholder-3.png",
    slug: "saas-product-launch",
    metric: "500% ROI",
  },
];

export default function FeaturedWork() {
  // Portfolio card component with image fallback
  function PortfolioCard({ 
    item, 
    size = "large" 
  }: { 
    item: typeof portfolioItems[number]; 
    size?: "large" | "medium" | "wide";
  }) {
    const [imgError, setImgError] = useState(false);
    
    const heightClass = {
      large: "h-[500px] lg:h-[600px]",
      medium: "h-[400px] lg:h-[600px]",
      wide: "h-[350px] lg:h-[450px]"
    }[size];

    return (
      <Link 
        href={`/work/${item.slug}`}
        className="group block relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,2,77,0.3)] transition-all duration-500 border border-gray-100/50 hover:border-accent/30"
      >
        {/* Image Background with Fallback */}
        <div className={`relative ${heightClass}`}>
          {!imgError ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes={size === "wide" ? "100vw" : size === "large" ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
              onError={() => setImgError(true)}
            />
          ) : (
            // Premium fallback with abstract shapes
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center overflow-hidden">
              <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-secondary/30 blur-3xl" />
              <div className="relative text-center p-8">
                <div className="text-white/30 text-6xl font-bold mb-2">{item.category.split(' ')[0]}</div>
              </div>
            </div>
          )}
          
          {/* Strong dark overlay to ensure text legibility on light images */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Accent Glow on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-secondary/20" />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
          {/* Year Badge */}
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block self-start mb-3 px-4 py-1.5 bg-black/60 backdrop-blur-md border border-black/40 rounded-full text-white text-xs font-semibold tracking-wide"
          >
            {item.category}
          </motion.span>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`font-bold text-white mb-3 leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] group-hover:text-accent transition-colors duration-300 ${
              size === "wide" ? "text-3xl lg:text-4xl" : size === "large" ? "text-3xl lg:text-5xl" : "text-2xl lg:text-3xl"
            }`}
          >
            {item.title}
          </motion.h3>

          {/* Metric Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 self-start mb-4 px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-lg"
          >
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white font-bold text-sm">{item.metric}</span>
          </motion.div>

          {/* CTA - appears on hover */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded"
          >
            <span className="text-sm">View Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Premium corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>
    );
  }
  return (
    <section className="py-24 lg:py-40 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-accent/8 via-secondary/5 to-transparent rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-primary/5 via-accent/8 to-transparent rounded-full blur-[140px]" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,2,77,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,2,77,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionTitle
          title="Featured Work"
          subtitle="Real results from real clients — see how we've transformed businesses"
          gradient
        />

        {/* Premium Bento-style Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16">
          
          {/* Featured Card 1 - Large Hero (spans 8 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <PortfolioCard item={portfolioItems[0]} size="large" />
          </motion.div>

          {/* Featured Card 2 - Smaller Vertical (spans 4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <PortfolioCard item={portfolioItems[1]} size="medium" />
          </motion.div>

          {/* Featured Card 3 - Wide Horizontal (spans 12 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-12"
          >
            <PortfolioCard item={portfolioItems[2]} size="wide" />
          </motion.div>
        </div>

        {/* Premium CTA Section - ensure visible (higher z-index and stronger focus) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center relative z-20"
        >
          <Link href="/work" className="relative z-20 inline-block">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="View all projects"
              className="group/btn relative z-30 px-12 py-5 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-full font-bold text-lg shadow-[0_12px_50px_-12px_rgba(0,2,77,0.45)] hover:shadow-[0_24px_80px_-20px_rgba(74,159,255,0.45)] transition-all duration-500 inline-flex items-center gap-3 overflow-visible focus:outline-none focus:ring-4 focus:ring-accent/30 bg-blue-950"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <span className="relative z-10">View All Projects</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
          
          {/* Stats below CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span><strong className="text-primary font-bold">50+</strong> Projects Delivered</span>
            </div>
            <div className="w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span><strong className="text-primary font-bold">98%</strong> Client Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
