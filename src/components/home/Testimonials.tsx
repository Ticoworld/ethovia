"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import Card from "@/components/common/Card";
import SectionTitle from "@/components/common/SectionTitle";

const testimonials = [
  {
    id: 1,
    quote:
      "Ethovia transformed our online presence completely. Our website traffic increased by 300% in just 3 months, and conversion rates doubled. Their strategic approach to SEO and content marketing exceeded all our expectations.",
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechStart Inc.",
    avatar: "/images/testimonials/avatar-placeholder.png",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Best ROI we've ever seen from a marketing agency. The team is incredibly responsive, and their data-driven strategies consistently deliver results. Highly recommended for any serious business.",
    name: "Michael Chen",
    position: "Founder & CEO",
    company: "GrowthCo",
    avatar: "/images/testimonials/avatar-placeholder.png",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Professional, responsive, and results-driven. They truly understand digital marketing in the modern landscape. Our brand visibility has skyrocketed since partnering with Ethovia.",
    name: "Emily Rodriguez",
    position: "Marketing Director",
    company: "BrandX Solutions",
    avatar: "/images/testimonials/avatar-placeholder.png",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Working with Ethovia has been a game-changer for our e-commerce business. Their innovative campaigns and attention to detail helped us achieve a 250% increase in online sales within 6 months.",
    name: "David Park",
    position: "E-commerce Manager",
    company: "ShopFlow",
    avatar: "/images/testimonials/avatar-placeholder.png",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "The level of expertise and creativity that Ethovia brings to the table is unmatched. They don't just execute campaigns; they become true partners in your business growth journey.",
    name: "Jennifer Williams",
    position: "CMO",
    company: "InnovateTech",
    avatar: "/images/testimonials/avatar-placeholder.png",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "From strategy to execution, Ethovia delivers excellence. Our social media engagement increased 400%, and we're finally reaching our target audience effectively. Worth every penny!",
    name: "Robert Martinez",
    position: "Brand Manager",
    company: "NextGen Digital",
    avatar: "/images/testimonials/avatar-placeholder.png",
    rating: 5,
  },
];

export default function Testimonials() {
  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-32 lg:py-48 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <SectionTitle
          title="What Clients Say"
          subtitle="Real results from real clients who trust us with their growth"
          gradient
        />
      </div>

      {/* Infinite Scroll Testimonials Row 1 */}
      <div className="relative mb-8">
        <div className="flex gap-8 animate-scroll-left hover:pause-animation">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`row1-${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Infinite Scroll Testimonials Row 2 (Opposite Direction) */}
      <div className="relative">
        <div className="flex gap-8 animate-scroll-right hover:pause-animation">
          {[...duplicatedTestimonials].reverse().map((testimonial, index) => (
            <TestimonialCard key={`row2-${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-20"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-accent fill-accent" />
            ))}
          </div>
          <span className="text-2xl font-bold text-primary">5.0</span>
        </div>
        <p className="text-gray-600 text-lg font-medium">
          Average rating from 50+ satisfied clients
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Trusted by innovative companies worldwide
        </p>
      </motion.div>
    </section>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[400px] md:w-[450px]">
      <Card hover className="h-full group">
        <div className="p-8 flex flex-col h-full">
          {/* Quote Icon */}
          <div className="mb-4">
            <svg
              className="w-10 h-10 text-accent/30 group-hover:text-accent/50 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Stars */}
          <div className="flex mb-6 gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-accent fill-accent transition-transform duration-300 group-hover:scale-110"
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 flex-grow">
            {testimonial.quote}
          </blockquote>

          {/* Author */}
          <div className="flex items-center mt-auto pt-6 border-t border-gray-100">
            <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 ring-2 ring-accent/20 group-hover:ring-accent/50 transition-all duration-300">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-primary text-base group-hover:text-secondary transition-colors duration-300">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-600">
                {testimonial.position}
              </div>
              <div className="text-xs text-gray-500 font-medium mt-1">
                {testimonial.company}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
