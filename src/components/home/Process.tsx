"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";
import { useRef } from "react";

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Discover",
    description: "We analyze your business, competitors, and target audience to create a solid foundation for success",
    image: "/images/process/process-discover.png",
  },
  {
    id: 2,
    number: "02",
    title: "Design",
    description: "Creative concepts that align with your brand and goals, ensuring maximum impact and engagement",
    image: "/images/process/process-design.png",
  },
  {
    id: 3,
    number: "03",
    title: "Develop",
    description: "Build and optimize for performance, conversions, and exceptional user experience",
    image: "/images/process/process-develop.png",
  },
  {
    id: 4,
    number: "04",
    title: "Optimize",
    description: "Continuous testing, refinement, and improvement for maximum results and sustained growth",
    image: "/images/process/process-optimize.png",
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for different layers
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yGradient1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yGradient2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 lg:py-48 overflow-hidden lg:-mt-24 z-20"
    >
      {/* Multi-layer Parallax Background */}
      <motion.div 
        style={{ y: yBackground, opacity }} 
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/process/process-bg.png"
          alt="Process background"
          fill
          className="object-cover"
          quality={85}
          sizes="100vw"
          priority
        />
        {/* Dynamic overlay that changes on scroll */}
        <motion.div 
          className="absolute inset-0 bg-black/60"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.7, 0.5]) }}
        />
      </motion.div>
      
      {/* Animated Decorative Gradients with Parallax */}
      <motion.div 
        style={{ y: yGradient1 }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] z-0"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        style={{ y: yGradient2 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] z-0"
        animate={{
          scale: [1, 1.3, 1],
          x: [20, -20, 20],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="How We Work"
          subtitle="Our proven 4-step process for delivering exceptional results that exceed expectations"
          light
        />

        {/* Desktop Timeline */}
        <div className="hidden lg:block mt-20">
          <div className="relative">
            {/* Animated Connection Line */}
            <motion.div 
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform -translate-y-1/2 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            <div className="grid grid-cols-4 gap-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="relative group"
                >
                  {/* Number Badge with Pulse Animation */}
                  <div className="flex justify-center mb-8">
                    <motion.div 
                      className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-4xl border-4 border-accent shadow-2xl shadow-accent/40"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 5,
                        borderColor: "#ffffff",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.number}
                      {/* Animated ring */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-accent"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Image Card */}
                  <motion.div 
                    className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-white border-4 border-white shadow-2xl"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "#00F0FF",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      quality={90}
                      sizes="25vw"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-accent/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-full group-hover:translate-x-0">
                      <div className="absolute bottom-0 left-0 w-full h-full border-l-4 border-b-4 border-accent rounded-bl-2xl" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="text-center">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-accent"
                      whileHover={{ scale: 1.05 }}
                    >
                      {step.title}
                    </motion.h3>
                    <p className="text-gray-200 leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>

                  {/* Step connector dot */}
                  <motion.div
                    className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-lg shadow-accent/50"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-16 mt-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative flex items-start group"
            >
              {/* Animated Vertical Line */}
              {index < processSteps.length - 1 && (
                <motion.div 
                  className="absolute left-8 top-28 bottom-0 w-1 bg-gradient-to-b from-accent via-secondary to-transparent rounded-full transform -translate-x-1/2"
                  initial={{ scaleY: 0, originY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                />
              )}

              {/* Number Badge */}
              <div className="flex-shrink-0 mr-6 relative z-10">
                <motion.div 
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-2xl border-4 border-accent shadow-2xl shadow-accent/40"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.number}
                </motion.div>
              </div>

              {/* Content Card */}
              <motion.div 
                className="flex-grow bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden border-4 border-white shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "#00F0FF",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-56">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 75vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 transition-colors duration-300 group-hover:text-accent">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}