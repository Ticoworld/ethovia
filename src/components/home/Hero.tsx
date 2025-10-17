"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
  // Animate the wavy SVG filter for the word IMPACT
  

export default function Hero() {
    // Animate the wavy SVG filter for the word IMPACT

    useEffect(() => {
    let frameId: number;
    const turb = document.getElementById('turb');
    let t = 0;
    function animate() {
      t += 0.01;
      if (turb) {
        // Animate baseFrequency for a wavy effect
        turb.setAttribute('baseFrequency', `${0.02 + Math.sin(t) * 0.008} 0.05`);
      }
      frameId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);
    useEffect(() => {
      let frameId: number;
      let t = 0;
      function animate() {
        t += 0.01;
        const turb = document.getElementById('turb');
        if (turb) {
          // Animate baseFrequency for a wavy effect
          turb.setAttribute('baseFrequency', `${0.02 + Math.sin(t) * 0.008} 0.05`);
        }
        frameId = requestAnimationFrame(animate);
      }
      animate();
      return () => cancelAnimationFrame(frameId);
    }, []);
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
          src="/images/hero/hero-main-3d.png"
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

          {/* Bold, Spaced Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[0.9] tracking-tight"
          >
            <span className="block">WE MAKE</span>
            <span
              className="block animate-gradient"
              style={{
                color: '#fff',
                filter: 'url(#wavy-filter)',
                display: 'inline-block',
                fontFamily: 'inherit',
                letterSpacing: '0.05em',
                fontWeight: 900,
                textShadow: '0 4px 32px rgba(0,0,0,0.25), 0 1px 0 #000',
              }}
            >
              IMPACT
              <svg width="0" height="0">
                <filter id="wavy-filter">
                  <feTurbulence id="turb" baseFrequency="0.02 0.05" numOctaves="2" result="turb" seed="2"/>
                  <feDisplacementMap in2="turb" in="SourceGraphic" scale="10" xChannelSelector="R" yChannelSelector="G"/>
                </filter>
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline with better contrast */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-white font-light mb-12 max-w-3xl leading-relaxed"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
          >
            For fast-moving brands that refuse to blend in.
            <br />
            <span className="text-white/80">
              High-performance websites. Data-driven campaigns.
            </span>
          </motion.p>

          {/* CTA Buttons with magnetic effect */}
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
                  Start Your Project
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
                  View Our Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Trusted by section (instead of fake stats) */}
          {/* Removed floating elements and trusted by section */}
        </div>
      </motion.div>
    </section>
  );
}
