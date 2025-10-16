"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";
import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-9xl md:text-[12rem] font-bold text-gradient mb-8"
          >
            404
          </motion.div>

          {/* Error Message */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-200 mb-8"
          >
            Oops! The page you&apos;re looking for seems to have gone on a
            digital adventure. Let&apos;s get you back on track.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/">
              <Button variant="primary" size="lg">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-primary transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-gray-300 mb-4">Or explore these pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="text-accent hover:text-white transition-colors duration-300 font-medium"
              >
                About Us
              </Link>
              <span className="text-white/30">•</span>
              <Link
                href="/services"
                className="text-accent hover:text-white transition-colors duration-300 font-medium"
              >
                Services
              </Link>
              <span className="text-white/30">•</span>
              <Link
                href="/work"
                className="text-accent hover:text-white transition-colors duration-300 font-medium"
              >
                Our Work
              </Link>
              <span className="text-white/30">•</span>
              <Link
                href="/contact"
                className="text-accent hover:text-white transition-colors duration-300 font-medium"
              >
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-12"
          >
            <Search className="w-16 h-16 text-accent/50 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
