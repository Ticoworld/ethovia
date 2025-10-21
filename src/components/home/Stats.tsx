"use client";

import { motion } from "framer-motion";
import ApproachCard from "./ApproachCard";

const principles = [
  {
    id: 1,
    title: "Speed",
    description: "Lightning-fast execution without compromising quality",
    img: "/images/approach/speed-illustration.png",
  },
  {
    id: 2,
    title: "Precision",
    description: "Data-driven strategies that hit the mark every time",
    img: "/images/approach/precision-illustration.png",
  },
  {
    id: 3,
    title: "Innovation",
    description: "Cutting-edge solutions that set you apart",
    img: "/images/approach/innovation-illustration.png",
  },
  {
    id: 4,
    title: "Growth",
    description: "Scalable systems built for exponential success",
    img: "/images/approach/growth-illustration.png",
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
          transition={{ duration: 0.5 }}
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
          {principles.map((p) => (
            <ApproachCard
              key={p.id}
              title={p.title}
              description={p.description}
              imgSrc={p.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
