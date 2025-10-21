"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ApproachCardProps {
  title: string;
  description: string;
  imgSrc: string;
  alt?: string;
}

export default function ApproachCard({ title, description, imgSrc, alt }: ApproachCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group relative"
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/0 rounded-2xl border border-white/10 transition-all duration-300 group-hover:from-white/10 group-hover:border-accent/50" />

      <div className="relative rounded-2xl overflow-hidden p-8">
        {/* Text content — leave room on right for illustration */}
        <div className="pr-28">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors duration-200 group-hover:text-[#00F0FF]">
            {title}
          </h3>
          <p className="text-base text-white/70 leading-relaxed">{description}</p>
        </div>

        {/* Illustration placed to the right and visually "cut out" of the card */}
        <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 w-28 h-28">
          <Image src={imgSrc} alt={alt ?? title} width={112} height={112} className="object-contain" />
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-2xl blur-xl" />
        </div>
      </div>
    </motion.div>
  );
}
