"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Code, TrendingUp, Share2, Target, ArrowRight } from "lucide-react";
import Card from "@/components/common/Card";
import SectionTitle from "@/components/common/SectionTitle";

const services = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Custom websites that are fast, beautiful, and conversion-focused",
    image: "/images/services/service-web-development.png",
    icon: Code,
    href: "/services#web-development",
  },
  {
    id: 2,
    title: "Google Ads Management",
    description:
      "Data-driven campaigns that maximize ROI and reduce cost per acquisition",
    image: "/images/services/service-google-ads.png",
    icon: TrendingUp,
    href: "/services#google-ads",
  },
  {
    id: 3,
    title: "Social Media Advertising",
    description:
      "Reach your audience on Facebook, TikTok, Instagram with precision targeting",
    image: "/images/services/service-social-ads.png",
    icon: Share2,
    href: "/services#social-ads",
  },
  {
    id: 4,
    title: "Digital Strategy",
    description:
      "Comprehensive marketing strategies aligned with your business goals",
    image: "/images/services/service-strategy.png",
    icon: Target,
    href: "/services#strategy",
  },
];

export default function Services() {
  return (
    <section className="py-32 lg:py-48 bg-white relative overflow-hidden">
      {/* Subtle decorative gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="What We Do"
          subtitle="Comprehensive digital marketing solutions to grow your business"
          gradient
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card hover className="h-full group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-secondary font-semibold hover:text-accent transition-colors duration-200 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/link:translate-x-2" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
