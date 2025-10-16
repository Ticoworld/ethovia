"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Transformation",
    category: "Web Development",
    year: "2024",
    image: "/images/portfolio/portfolio-placeholder-1.png",
    slug: "ecommerce-transformation",
    bgColor: "from-blue-900/95 to-purple-900/95",
  },
  {
    id: 2,
    title: "Social Media Campaign",
    category: "Paid Ads",
    year: "2024",
    image: "/images/portfolio/portfolio-placeholder-2.png",
    slug: "social-media-campaign",
    bgColor: "from-purple-900/95 to-pink-900/95",
  },
  {
    id: 3,
    title: "SaaS Product Launch",
    category: "Full Stack Marketing",
    year: "2023",
    image: "/images/portfolio/portfolio-placeholder-3.png",
    slug: "saas-product-launch",
    bgColor: "from-indigo-900/95 to-blue-900/95",
  },
];

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !horizontalRef.current) return;

    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    let mm: gsap.Context | null = null;
    const setup = () => {
      const scrollDistance = horizontal.scrollWidth - window.innerWidth;
      mm = gsap.context(() => {
        const tween = gsap.to(horizontal, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${scrollDistance + window.innerHeight}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        return () => tween.kill();
      }, container);
    };

    setup();
    const onResize = () => {
      // Refresh ScrollTrigger on resize to keep distances correct
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', onResize);

    return () => {
      try {
        window.removeEventListener('resize', onResize);
        ScrollTrigger.getAll().forEach((st) => st.kill());
        mm?.revert();
      } catch {
        // best-effort cleanup; avoid throwing during navigation
      }
    };
  }, []);

  return (
    <>
      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        {/* Fixed Background Decorations */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] animate-float" style={{ animationDelay: '2s' }} />

        <div 
          ref={horizontalRef}
          className="flex items-center will-change-transform"
        >
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-screen h-screen"
            >
              <Link 
                href={`/work/${item.slug}`} 
                className="w-full h-full block group cursor-none"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`relative w-full h-full overflow-hidden bg-gradient-to-br ${item.bgColor} shadow-2xl`}
                >
                  {/* Custom Cursor */}
                  <div className="absolute inset-0 z-50 pointer-events-none">
                    <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-white/50 flex items-center justify-center backdrop-blur-sm bg-white/10">
                        <span className="text-white font-bold text-sm">VIEW</span>
                      </div>
                    </div>
                  </div>

                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                      sizes="100vw"
                      priority={index === 0}
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor}`} />

                  {/* Content Container */}
                  <div className="relative h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 xl:p-20">
                    {/* Top Section - Logo/Brand (optional) */}
                    <div className="flex justify-between items-start">
                      <motion.span 
                        className="text-white/60 text-sm md:text-base font-semibold uppercase tracking-widest"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        Project
                      </motion.span>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-white flex items-center gap-2 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <span className="font-semibold">View Project</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>

                    {/* Center Section - Main Content */}
                    <div className="flex-1 flex items-center">
                      <div className="space-y-6">
                        <motion.h2
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4, duration: 0.8 }}
                          className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.9] tracking-tight"
                          style={{
                            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                          }}
                        >
                          {item.title.split(' ').map((word, i) => (
                            <span key={i} className="block">
                              {i === 0 && (
                                <span className="text-white">{word}</span>
                              )}
                              {i === 1 && (
                                <span className="text-white/40 font-outline-2" style={{
                                  WebkitTextStroke: '2px white',
                                  WebkitTextFillColor: 'transparent',
                                }}>{word}</span>
                              )}
                              {i > 1 && (
                                <span className="text-white">{word}</span>
                              )}
                            </span>
                          ))}
                        </motion.h2>
                      </div>
                    </div>

                    {/* Bottom Section - Meta Info */}
                    <div className="flex justify-between items-end">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="space-y-2"
                      >
                        <p className="text-white/90 text-base md:text-lg font-semibold">
                          {item.year}
                        </p>
                        <p className="text-white/70 text-sm md:text-base">
                          {item.category}
                        </p>
                      </motion.div>

                      {/* Decorative Element */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="hidden md:block w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}

          {/* Final CTA Screen - Centered */}
          <div className="flex-shrink-0 w-screen h-screen flex items-center justify-center px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h3 
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Want to see{" "}
                <span className="block mt-4">
                  <span className="text-gradient">more</span>?
                </span>
              </motion.h3>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Explore our full portfolio of success stories
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link href="/work" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 bg-gradient-to-r from-[#00024D] to-[#4A9FFF] text-white rounded-full font-bold text-xl shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 inline-flex items-center gap-4"
                  >
                    View All Projects
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
