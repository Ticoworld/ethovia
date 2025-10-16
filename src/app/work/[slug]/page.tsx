"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, TrendingUp, Users, DollarSign } from "lucide-react";
import Button from "@/components/common/Button";

// This would typically come from a CMS or database
const caseStudyData = {
  title: "E-Commerce Transformation",
  client: "TechGear Online",
  category: "Web Development",
  date: "Q2 2024",
  heroImage: "/images/portfolio/portfolio-placeholder-1.png",
  challenge:
    "TechGear Online was struggling with an outdated website that had poor mobile experience, slow load times, and a confusing checkout process. Their conversion rate was below 1%, and cart abandonment was at 75%.",
  solution:
    "We completely redesigned their e-commerce platform with a mobile-first approach, implemented performance optimizations, streamlined the checkout process, and integrated advanced analytics to track user behavior and conversion funnels.",
  results: [
    {
      icon: TrendingUp,
      metric: "300%",
      label: "Increase in Conversion Rate",
      detail: "From 0.8% to 3.2% within 3 months",
    },
    {
      icon: DollarSign,
      metric: "$2.5M",
      label: "Additional Annual Revenue",
      detail: "Projected revenue increase from improvements",
    },
    {
      icon: Users,
      metric: "65%",
      label: "Reduction in Cart Abandonment",
      detail: "Streamlined checkout process",
    },
    {
      icon: Star,
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
};

export default function CaseStudyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={caseStudyData.heroImage}
            alt={caseStudyData.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center text-white hover:text-accent transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Link>
            <span className="inline-block px-4 py-2 bg-accent/80 text-white rounded-full text-sm font-medium mb-4">
              {caseStudyData.category}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              {caseStudyData.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-200 text-lg">
              <div>
                <span className="font-semibold">Client:</span>{" "}
                {caseStudyData.client}
              </div>
              <div>
                <span className="font-semibold">Date:</span>{" "}
                {caseStudyData.date}
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
              {caseStudyData.challenge}
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
              {caseStudyData.solution}
            </p>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {caseStudyData.technologies.map((tech, index) => (
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Measurable impact that transformed the business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {caseStudyData.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-lg"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <result.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-accent mb-2">
                  {result.metric}
                </div>
                <div className="text-lg font-semibold text-primary mb-2">
                  {result.label}
                </div>
                <div className="text-sm text-gray-600">{result.detail}</div>
              </motion.div>
            ))}
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
            className="bg-white rounded-lg shadow-xl p-8 md:p-12"
          >
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-accent" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-800 leading-relaxed mb-8">
              &ldquo;{caseStudyData.testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={caseStudyData.testimonial.avatar}
                  alt={caseStudyData.testimonial.author}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <div className="font-semibold text-primary text-lg">
                  {caseStudyData.testimonial.author}
                </div>
                <div className="text-gray-600">
                  {caseStudyData.testimonial.position}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Similar Results?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can transform your business
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
