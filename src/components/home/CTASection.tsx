"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";

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
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to Dominate the{" "}
              <span className="text-gradient inline-block animate-gradient">
                Nigerian Market?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto">
              Stop guessing. Start converting with Nigeria&apos;s #1 performance
              agency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#00024D] bg-white rounded-full shadow-lg hover:bg-gray-100 transition-transform active:scale-95"
              >
                Schedule a Free Consultation
              </Link>
              <a
                href="https://wa.me/2347084570264?text=Hi%20Ethovia,%20I%20want%20to%20dominate%20my%20market."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust Anchor */}
            <p className="text-white/60 text-sm mt-8 mb-12">
              Join 50+ Nigerian brands growing with us.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white text-lg">
              <a
                href="mailto:ethoviamarketingagency@gmail.com"
                className="flex items-center gap-3 hover:text-accent transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="font-medium">
                  ethoviamarketingagency@gmail.com
                </span>
              </a>
              <div className="hidden sm:block w-px h-8 bg-white/20" />
              <a
                href="tel:+2347084570264"
                className="flex items-center gap-3 hover:text-accent transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="font-medium">+234 708 457 0264</span>
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
          duration: 3,
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
          duration: 3.5,
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
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-accent/10 blur-2xl"
      />
    </section>
  );
}
