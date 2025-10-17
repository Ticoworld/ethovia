"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
  className?: string;
  light?: boolean; // For dark backgrounds
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  gradient = false,
  className = "",
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          gradient ? "text-gradient" : light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
          light ? "text-gray-300" : "text-gray-600"
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
