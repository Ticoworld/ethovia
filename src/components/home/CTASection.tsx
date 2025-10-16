"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Button from "@/components/common/Button";

export default function CTASection() {
  return (
    <section className="relative py-40 lg:py-56 overflow-hidden">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta/cta-background.png"
          alt="CTA background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay to reduce brightness */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle brand tint on top */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00024D]/40 via-transparent to-[#4A9FFF]/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to Grow Your{" "}
              <span className="text-gradient inline-block animate-gradient">Business?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your marketing
              goals
            </p>

            {/* CTA Button */}
            <Link href="/contact">
              <Button variant="primary" size="lg" className="mb-12 text-lg px-10 py-6">
                Schedule a Free Consultation
              </Button>
            </Link>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white text-lg">
              <a
                href="mailto:hello@ethovia.com"
                className="flex items-center gap-3 hover:text-accent transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="font-medium">hello@ethovia.com</span>
              </a>
              <div className="hidden sm:block w-px h-8 bg-white/20" />
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 hover:text-accent transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="font-medium">+1 (234) 567-890</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-secondary/20 blur-3xl"
      />
      
      {/* Additional floating orbs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-accent/10 blur-2xl"
      />
    </section>
  );
}
