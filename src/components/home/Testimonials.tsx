"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [paused, setPaused] = useState(false);

  // reduce threshold so swipes feel responsive on touch devices
  const swipeConfidenceThreshold = 500;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      const step = itemsPerPage;
      const next = (prevIndex + newDirection * step + testimonials.length) % testimonials.length;
      return next;
    });
  }, [itemsPerPage]);

  // keyboard support: left/right arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paginate]);

  // responsive: determine itemsPerPage via matchMedia (md = 768px)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setItemsPerPage(mq.matches ? 2 : 1);
    update();
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  // normalize currentIndex when itemsPerPage changes
  useEffect(() => {
    setCurrentIndex((prev) => {
      const page = Math.floor(prev / itemsPerPage);
      return (page * itemsPerPage) % testimonials.length;
    });
  }, [itemsPerPage]);

  // autoplay with pause-on-hover
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => paginate(1), 5000);
    return () => clearInterval(id);
  }, [paused, paginate]);

  const totalPages = Math.max(1, Math.ceil(testimonials.length / itemsPerPage));

  // Calculate visible testimonials based on currentIndex and itemsPerPage
  const getVisibleTestimonials = () => {
    const visible = [] as typeof testimonials;
    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Subtle decorative gradients */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/3 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/3 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 lg:mb-16">
          <SectionTitle
            title="What Clients Say"
            subtitle="Real results from real clients who trust us with their growth"
            gradient
          />
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {getVisibleTestimonials().map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="w-full"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ y: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.25 } }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white hover:bg-gray-50 text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10 group focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white hover:bg-gray-50 text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10 group focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots Navigation (per page) */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, page) => (
              <button
                key={page}
                onClick={() => setCurrentIndex(page * itemsPerPage)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  page === Math.floor(currentIndex / itemsPerPage)
                    ? "w-8 bg-accent"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonials page ${page + 1}`}
              />
            ))}
          </div>

          {/* Structured data for SEO: basic review aggregate + examples */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                name: "Client Testimonials - Ethovia",
                description: "Real client testimonials and reviews showcasing results delivered by Ethovia.",
                mainEntity: testimonials.slice(0, 3).map((t) => ({
                  "@type": "Review",
                  author: t.name,
                  reviewBody: t.quote,
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: t.rating,
                    bestRating: 5,
                  },
                })),
              }),
            }}
          />

          {/* screen reader announcement for slide changes */}
          <div className="sr-only" aria-live="polite">
            {`${currentIndex + 1} of ${testimonials.length}: ${testimonials[currentIndex].name}`}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>
            <span className="text-xl font-bold text-primary">5.0</span>
          </div>
          <p className="text-gray-600 font-medium">
            Average rating from 50+ satisfied clients
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Trusted by innovative companies worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card hover className="h-full group">
      <div className="p-6 lg:p-8 flex flex-col h-full">
        {/* Quote Icon */}
        <div className="mb-4">
          <svg
            className="w-8 h-8 lg:w-10 lg:h-10 text-accent/20 group-hover:text-accent/40 transition-colors duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Stars */}
        <div className="flex mb-5 gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 lg:w-5 lg:h-5 text-accent fill-accent transition-transform duration-200 group-hover:scale-110"
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6 flex-grow">
          {testimonial.quote}
        </blockquote>

        {/* Author */}
        <div className="flex items-center mt-auto pt-5 border-t border-gray-100">
          <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 ring-2 ring-accent/10 group-hover:ring-accent/30 transition-all duration-200">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-bold text-primary text-base group-hover:text-secondary transition-colors duration-200">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-600">
              {testimonial.position}
            </div>
            <div className="text-xs text-gray-500 font-medium mt-0.5">
              {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
