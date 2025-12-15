"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ApproachCardProps {
  title: string;
  description: string;
  imgSrc: string;
  alt?: string;
}

export default function ApproachCard({
  title,
  description,
  imgSrc,
  alt,
}: ApproachCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-white/10 to-transparent border border-white/10 hover:-translate-y-1 transition-transform duration-300"
    >
      {/* Text content with higher z-index */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed max-w-[80%]">
          {description}
        </p>
      </div>

      {/* Huge static 3D icon bleeding off the corner */}
      <Image
        src={imgSrc}
        alt={alt ?? title}
        width={192}
        height={192}
        className="absolute -bottom-8 -right-8 w-48 h-48 opacity-80 object-contain rotate-12 z-0 pointer-events-none"
      />
    </motion.div>
  );
}
