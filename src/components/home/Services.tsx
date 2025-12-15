"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Smartphone,
  TrendingUp,
  Share2,
  Target,
  ArrowRight,
} from "lucide-react";
import Card from "@/components/common/Card";
import SectionTitle from "@/components/common/SectionTitle";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Real Estate Sales Engines",
    description:
      "Turn Lagos & Abuja leads into inspections. High-speed mobile sites with WhatsApp integration and auto-lead capture.",
    image: "/images/services/service-realestate-website-ads.png",
    icon: Building2,
    href: "/services#real-estate",
    size: "large",
    proof: "Avg. 3x More Inquiries",
  },
  {
    id: 2,
    title: "Fintech & Mobile Apps",
    description:
      "Native apps built for Nigerian networks. Offline-first architecture with seamless Paystack/Flutterwave integration.",
    image: "/images/services/service-app-development.png",
    icon: Smartphone,
    href: "/services#app-development",
    size: "large",
    proof: "Offline-First Tech",
  },
  {
    id: 3,
    title: "Instagram & Meta Ads",
    description:
      "Stop burning cash. We build data-driven campaigns that target actual buyers in Nigeria, not just window shoppers.",
    image: "/images/services/service-social-ads.png",
    icon: TrendingUp,
    href: "/services#social-media-management",
    size: "large",
    proof: "Lower CPA by 40%",
  },
  {
    id: 4,
    title: "Branding & Identity",
    description:
      "Stand out in the crowded Lagos market with a visual identity that screams 'Premium' and builds instant trust.",
    image: "/images/services/service-branding.png",
    icon: Share2,
    href: "/services#branding",
    size: "medium",
    proof: "Trusted by 20+ Brands",
  },
  {
    id: 5,
    title: "Growth Strategy",
    description:
      "Research-backed roadmaps to scale your revenue. We align channels, budget, and KPIs to your business goals.",
    image: "/images/services/service-strategy.png",
    icon: Target,
    href: "/services#strategy",
    size: "medium",
    proof: "Data-Driven ROI",
  },
];

export default function Services() {
  // Small ServiceCard allows graceful fallback when images fail to load
  function ServiceCard({
    service,
    variant = "large",
  }: {
    service: (typeof services)[number] & { proof?: string };
    variant?: "large" | "medium";
  }) {
    const [imgError, setImgError] = useState(false);
    const height = variant === "large" ? "h-72" : "h-56";

    return (
      <Card hover className="h-full group overflow-hidden flex flex-col">
        <div
          className={`relative ${height} bg-gradient-to-tr from-primary/10 to-accent/6`}
        >
          {!imgError ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              quality={variant === "large" ? 90 : 80}
              sizes={
                variant === "large"
                  ? "(max-width: 768px) 100vw, 33vw"
                  : "(max-width: 768px) 100vw, 50vw"
              }
              onError={() => setImgError(true)}
            />
          ) : (
            // Fallback visual: subtle gradient with centered icon
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="w-full h-full rounded-md flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/6">
                <service.icon className="w-12 h-12 text-primary/80" />
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          {service.proof && (
            <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
              {service.proof}
            </span>
          )}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
            <service.icon className="w-6 h-6 text-primary" />
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3
            className={`font-bold text-primary mb-3 ${
              variant === "large" ? "text-2xl" : "text-xl"
            }`}
          >
            {service.title}
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
            {service.description}
          </p>

          <Link
            href={service.href}
            className="inline-flex items-center mt-auto"
          >
            <span className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-primary bg-accent rounded-md hover:bg-accent/90 transition-all duration-200 shadow-md hover:shadow-lg">
              See Results
              <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </Link>
        </div>
      </Card>
    );
  }

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

        {/* Layout: Primary services on top (3 columns on large), supporting below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services
            .filter((s) => s.size === "large")
            .map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <ServiceCard service={service} variant="large" />
              </motion.div>
            ))}
        </div>

        {/* Supporting services row */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services
            .filter((s) => s.size === "medium")
            .map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <ServiceCard service={service} variant="medium" />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
