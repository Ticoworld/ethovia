"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/background/hero-bg.png"
          alt="Hero background"
          fill
          className="object-cover scale-100"
          priority
          quality={90}
        />
        {/* Stronger overlay for better text readability */}
        <div className="absolute inset-0 md:bg-black/30 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20  to-transparent" />
        {/* Subtle grain texture */}
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32"
      >
        <div className="max-w-7xl mx-auto">
          {/* Small intro text */}
          {/* Removed badge */}

          {/* Bold, Corporate Typography - CRO Optimized */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
            style={{
              fontFamily: "'Inter', 'Space Grotesk', sans-serif",
              textShadow: "0 4px 32px rgba(0,0,0,0.25)",
            }}
          >
            <span className="block">Scale Your Business Online</span>
            <span className="block">
              with{" "}
              <span className="text-gradient inline-block">Nigeria&apos;s</span>{" "}
              Performance Agency
            </span>
          </motion.h1>

          {/* Subheadline with value proposition */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-12 max-w-3xl leading-relaxed"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
          >
            We build fast, mobile-first websites and data-driven ad campaigns
            that turn Lagos traffic into paying customers.{" "}
            <span className="font-medium text-white">No fluff, just ROI.</span>
          </motion.p>

          {/* CTA Buttons - Low Friction CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 items-start"
          >
            <Link href="/contact" className="group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white rounded-full font-semibold text-lg overflow-hidden shadow-2xl shadow-accent/50 hover:shadow-accent/70 transition-shadow duration-300 border-2 border-white/60"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Strategy Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Hover shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </Link>

            <Link href="/work" className="group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  See Real Results
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Anchor */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-sm text-white/60 font-light"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
          >
            Specializing in Real Estate, Fintech, and Retail Growth.
          </motion.p>

          {/* Trusted by section (instead of fake stats) */}
          {/* Removed floating elements and trusted by section */}
        </div>
      </motion.div>
    </section>
  );
}
