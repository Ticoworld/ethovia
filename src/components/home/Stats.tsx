"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const principles = [
  {
    id: 1,
    title: "Fast on 3G/4G", // Address network anxiety
    description:
      "We optimize every line of code so your site loads instantly, even on unstable mobile networks.",
    img: "/images/approach/speed-illustration.png",
  },
  {
    id: 2,
    title: "Targeted Local Reach", // Address "wasteful ads"
    description:
      "We don't guess. We target active buyers in key commercial hubs like Lagos, Abuja, and PH.",
    img: "/images/approach/precision-illustration.png",
  },
  {
    id: 3,
    title: "Mobile-First Logic", // Address 90% mobile traffic
    description:
      "90% of Nigerian traffic is mobile. We design thumb-friendly interfaces that convert on small screens.",
    img: "/images/approach/innovation-illustration.png",
  },
  {
    id: 4,
    title: "Revenue Focused", // Address "Vanity Metrics"
    description:
      "We move beyond 'likes'. We build systems that drive real inquiries and payment alerts.",
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
            Built for the Nigerian Market
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Strategies optimized for local challenges, slow networks, and
            high-growth goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle) => (
            <div
              key={principle.id}
              className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 h-full group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* TEXT LAYER - High Z-Index to sit on top */}
              <div className="relative z-10 flex flex-col justify-start h-full">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-[85%]">
                  {principle.description}
                </p>
              </div>

              {/* DECORATIVE ICON LAYER - Low Z-Index, Massive Size */}
              <div className="absolute -bottom-8 -right-16 z-0 opacity-40 rotate-12 pointer-events-none">
                <div className="relative w-56 h-56">
                  <Image
                    src={principle.img}
                    alt={principle.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
