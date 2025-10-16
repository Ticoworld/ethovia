"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  ShoppingCart,
  Eye,
  LucideIcon
} from "lucide-react";
import { CaseStudy } from "@/data/portfolioData";

interface CaseStudyClientProps {
  caseStudy: CaseStudy;
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Users,
  DollarSign,
  Star,
  Target,
  ShoppingCart,
  Eye,
};

export default function CaseStudyClient({ caseStudy }: CaseStudyClientProps) {
  const heroBackgrounds: Record<string, string> = {
    "Web Development": "from-[#000024] via-[#00024D] to-[#1A1A2E]",
    "Paid Ads": "from-[#1A1A2E] via-[#2F3A8F] to-[#4A9FFF]",
    "Full Stack Marketing": "from-[#000036] via-[#1D274F] to-[#3C5BA9]",
    "Social Media": "from-[#18002F] via-[#3F1C7F] to-[#8B48FF]",
  };

  const heroGradient = heroBackgrounds[caseStudy.category] ?? "from-[#000024] via-[#00024D] to-[#1A1A2E]";

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-24 pb-16">
        <div className={`absolute inset-0 bg-gradient-to-br ${heroGradient}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link
              href="/work"
              className="inline-flex items-center text-white hover:text-accent transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Link>
            <span className="inline-block px-4 py-2 bg-accent/90 text-white rounded-full text-sm font-medium mb-6">
              {caseStudy.category}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              {caseStudy.title}
            </h1>
            <div className="flex flex-wrap gap-8 text-white/90 text-lg mt-12">
              <div className="flex flex-col">
                <span className="font-semibold text-accent mb-1">Client</span>
                <span className="text-white">{caseStudy.client}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-accent mb-1">Date</span>
                <span className="text-white">{caseStudy.date}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              The Challenge
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Our Solution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {caseStudy.solution}
            </p>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              The Results
            </h2>
            <p className="text-xl text-primary/80 max-w-2xl mx-auto">
              Measurable impact that transformed the business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {caseStudy.results.map((result, index) => {
              const IconComponent = iconMap[result.iconName] || Star;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2">
                    {result.metric}
                  </div>
                  <div className="text-lg font-semibold text-primary mb-2">
                    {result.label}
                  </div>
                  <div className="text-sm text-gray-600">{result.detail}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-accent" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
              &ldquo;{caseStudy.testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-4 ring-accent/20">
                <Image
                  src="/images/testimonials/avatar-placeholder.png"
                  alt={caseStudy.testimonial.author}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <div className="font-bold text-primary text-lg">
                  {caseStudy.testimonial.author}
                </div>
                <div className="text-gray-600 text-sm">
                  {caseStudy.testimonial.position}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready for Similar Results?
            </h2>
            <p className="text-xl text-primary/90 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can transform your business
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-black/30 transition-all duration-300 border border-white/10"
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
