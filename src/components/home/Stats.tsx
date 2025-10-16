"use client";

import { motion } from "framer-motion";
import { Zap, Target, Sparkles, Rocket } from "lucide-react";

const principles = [
  {
    id: 1,
    icon: Zap,
    title: "Speed",
    description: "Lightning-fast execution without compromising quality",
  },
  {
    id: 2,
    icon: Target,
    title: "Precision",
    description: "Data-driven strategies that hit the mark every time",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Innovation",
    description: "Cutting-edge solutions that set you apart",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Growth",
    description: "Scalable systems built for exponential success",
  },
];

export default function Stats() {
  return (
    <section className="relative py-32 lg:py-48 bg-[#00024D] overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-float delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our Approach
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Four core principles that drive everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card background with hover effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/0 rounded-2xl border border-white/10 transition-all duration-500 group-hover:from-white/10 group-hover:border-accent/50" />
              
              {/* Card content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4A9FFF] to-[#00F0FF] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                    <principle.icon className="w-8 h-8 text-white drop-shadow-md" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#00F0FF]">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-base text-white/70 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-2xl blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
