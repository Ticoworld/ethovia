"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  TrendingUp,
  Share2,
  Target,
  Check,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/common/Button";

const services = [
  {
    id: "web-development",
    icon: Code,
    title: "Website Development",
    tagline: "Build Your Digital Foundation",
    description:
      "We create lightning-fast, mobile-responsive websites that convert visitors into customers. Every pixel is crafted with purpose, every line of code optimized for performance.",
    image: "/images/services/service-web-development.png",
    benefits: [
      "Custom design tailored to your brand",
      "Mobile-first responsive development",
      "SEO-optimized architecture",
      "Lightning-fast page load speeds",
      "Conversion-focused user experience",
      "Ongoing maintenance and support",
    ],
    process: [
      {
        step: "Discovery",
        detail: "Understand your brand, goals, and target audience",
      },
      { step: "Design", detail: "Create mockups and iterate based on feedback" },
      { step: "Development", detail: "Build with modern tech stack" },
      { step: "Launch", detail: "Deploy, test, and optimize" },
    ],
    caseStudy: {
      title: "E-Commerce Success Story",
      metric: "300% increase in conversions",
      description:
        "We redesigned a struggling e-commerce site, resulting in triple the conversion rate and 200% revenue growth in 6 months.",
    },
  },
  {
    id: "paid-advertising",
    icon: TrendingUp,
    title: "Paid Advertising",
    tagline: "Maximize ROI Across Channels",
    description:
      "Integrated paid advertising across Google, Facebook, Instagram, TikTok and more — data-driven campaigns that maximize ROI and reduce CPA.",
    image: "/images/services/service-paid-ads.png",
    benefits: [
      "Strategic keyword research and targeting",
      "Compelling ad copy that converts",
      "Continuous A/B testing and optimization",
      "Detailed performance tracking and reporting",
      "Reduced cost per acquisition (CPA)",
      "Increased qualified leads and sales",
    ],
    process: [
      {
        step: "Audit",
        detail: "Analyze current campaigns and competitor landscape",
      },
      { step: "Strategy", detail: "Develop targeting and bidding strategy" },
      { step: "Launch", detail: "Create and launch optimized campaigns" },
      { step: "Optimize", detail: "Monitor, test, and refine continuously" },
    ],
    caseStudy: {
      title: "Omnichannel Lead Generation",
      metric: "45% reduction in CPA",
      description:
        "We combined search and social channels for a SaaS client, reducing CPA by 45% while increasing qualified leads.",
    },
  },
  {
    id: "app-development",
    icon: Code,
    title: "App Development",
    tagline: "Mobile-first Experiences",
    description:
      "Native and cross-platform mobile applications with thoughtful UX and reliable backend integrations.",
    image: "/images/services/service-app-development.png",
    benefits: [
      "iOS & Android development",
      "Cross-platform (React Native / Flutter)",
      "API & 3rd-party integrations",
      "App Store deployment and ASO",
      "Ongoing support and updates",
    ],
    process: [
      { step: "Discovery", detail: "Requirements, users and technical scope" },
      { step: "Design", detail: "UX/UI and interactive prototypes" },
      { step: "Development", detail: "Implementation, testing and QA" },
      { step: "Launch", detail: "Deployment and monitoring" },
    ],
    caseStudy: {
      title: "Consumer App Launch",
      metric: "150k+ downloads",
      description:
        "Built and launched a consumer app that reached 150k downloads within 6 months through product-led growth and paid acquisition.",
    },
  },
  {
    id: "branding",
    icon: Share2,
    title: "Branding & Graphics",
    tagline: "Make Your Brand Memorable",
    description:
      "Logo systems, visual identity, and marketing collateral that communicate your brand's voice and value.",
    image: "/images/services/service-branding.png",
    benefits: [
      "Logo & identity systems",
      "Brand guidelines",
      "Marketing collateral",
      "Social and ad creative",
    ],
    process: [
      { step: "Discovery", detail: "Brand audit and positioning" },
      { step: "Concepts", detail: "Direction and visual exploration" },
      { step: "Refinement", detail: "Iterate and finalize assets" },
      { step: "Delivery", detail: "Guidelines and source files" },
    ],
    caseStudy: {
      title: "Rebrand & Relaunch",
      metric: "+80% brand recall",
      description:
        "Led a full rebrand that improved brand recall and lifted campaign performance across channels.",
    },
  },
  {
    id: "strategy",
    icon: Target,
    title: "Digital Strategy",
    tagline: "Your Roadmap to Success",
    description:
      "We create comprehensive digital marketing strategies that align with your business goals. From market research to execution plans, we map your path to growth.",
    image: "/images/services/service-strategy.png",
    benefits: [
      "Comprehensive market and competitor analysis",
      "Custom marketing strategy and roadmap",
      "Channel selection and budget allocation",
      "Content strategy and calendar",
      "KPI definition and tracking setup",
      "Quarterly strategy reviews and adjustments",
    ],
    process: [
      {
        step: "Analysis",
        detail: "Deep dive into your business and market",
      },
      {
        step: "Planning",
        detail: "Develop multi-channel strategy",
      },
      {
        step: "Implementation",
        detail: "Execute tactics and campaigns",
      },
      {
        step: "Review",
        detail: "Measure results and refine approach",
      },
    ],
    caseStudy: {
      title: "Tech Startup Growth Strategy",
      metric: "500% ROI in first year",
      description:
        "Our holistic strategy helped a B2B tech startup achieve 500% ROI through integrated SEO, content, and paid campaigns.",
    },
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section - Consistent Brand Gradient */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-[#00024D] via-[#1A1A2E] to-[#4A9FFF]">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-xl"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto drop-shadow"
          >
            Comprehensive digital marketing solutions designed to grow your business
          </motion.p>
        </div>
      </section>

      {/* Services Details */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-28 ${
            index % 2 === 0 ? "bg-white" : "bg-light"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-accent font-semibold">
                    {service.tagline}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <h3 className="text-2xl font-bold text-primary mb-4">
                  What You Get
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Process */}
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Process
                </h3>
                <div className="space-y-3 mb-8">
                  {service.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start bg-gradient-to-r from-secondary/5 to-accent/5 rounded-lg p-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-sm mr-3">
                        <span className="text-[#00024D]">{idx + 1}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">
                          {step.step}
                        </div>
                        <div className="text-sm text-gray-600">
                          {step.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <Button variant="primary" size="lg" className="border-2 border-[#00024D] rounded-full px-6 py-2 flex items-center">
                    <span className="text-[#00024D] font-bold">Get Started</span>
                    <ArrowRight className="w-5 h-5 ml-2 text-[#00024D]" />
                  </Button>
                </Link>
              </motion.div>

              {/* Image & Case Study */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="relative h-[28rem] rounded-lg overflow-hidden shadow-2xl mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Case Study Card */}
                <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-600 mr-2" />
                    <span className="text-sm font-semibold uppercase tracking-wide text-[#4A9FFF]">
                      Case Study
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-[#00024D]">
                    {service.caseStudy.title}
                  </h4>
                  <div className="text-3xl font-bold text-green-600 mb-3">
                    {service.caseStudy.metric}
                  </div>
                  <p className="text-primary leading-relaxed">
                    {service.caseStudy.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
  <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#00024D] mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-[#1A1A2E] mb-8 max-w-2xl mx-auto">
              Schedule a free consultation and we&apos;ll help you create the perfect strategy
            </p>
            <Link href="/contact">
              <Button
                className="bg-white text-[#00024D] font-bold border-2 border-[#00024D] rounded-full px-6 py-2 shadow-none hover:shadow-lg hover:shadow-[#00024D]/20 transition-all duration-300 flex items-center justify-center"
                size="lg"
              >
                <span className="text-[#00024D] font-bold">Schedule Free Consultation</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
