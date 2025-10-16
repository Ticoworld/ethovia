"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Target, Users, Lightbulb, Award } from "lucide-react";
import Card from "@/components/common/Card";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";

const values = [
  {
    id: 1,
    icon: Target,
    title: "Results-Driven",
    description:
      "We focus on measurable outcomes that directly impact your bottom line",
  },
  {
    id: 2,
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our success. We build lasting partnerships, not just projects",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of trends and technologies to give you a competitive edge",
  },
  {
    id: 4,
    icon: Award,
    title: "Excellence",
    description:
      "We deliver premium quality in every project, no matter the size",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Premium Brand Gradient, No Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-[#00024D] via-[#1A1A2E] to-[#4A9FFF]">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-xl"
          >
            About <span className="text-gradient">Ethovia</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto drop-shadow"
          >
            We&apos;re a team of digital marketing experts committed to transforming businesses through innovative strategies.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At Ethovia, we believe every business deserves a digital
                presence that not only looks great but drives real results. Our
                mission is to bridge the gap between creative excellence and
                data-driven performance.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We combine cutting-edge web development with strategic paid
                advertising to create holistic marketing solutions that scale
                with your business. Whether you&apos;re a startup finding your
                voice or an established brand looking to dominate your market,
                we&apos;re here to make it happen.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg px-6 py-3">
                  <div className="text-2xl font-bold text-primary">8+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg px-6 py-3">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">
                    Projects Delivered
                  </div>
                </div>
                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg px-6 py-3">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-gray-600">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/about/about-mission.png"
                alt="Our mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide everything we do"
            gradient
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="text-center h-full">
                  <div className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Meet Our Team"
            subtitle="Talented professionals dedicated to your success"
            gradient
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our diverse team brings together experts in web development, paid
              advertising, SEO, content strategy, and design. We&apos;re united
              by our passion for helping businesses grow and our commitment to
              delivering exceptional results.
            </p>
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg p-8">
              <p className="text-xl font-semibold text-primary mb-2">
                We&apos;re Building Something Special
              </p>
              <p className="text-gray-600">
                Team profiles and photos coming soon. We&apos;re currently
                expanding our team with top talent.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#00024D] mb-6 drop-shadow-xl">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-[#1A1A2E] mb-8 max-w-2xl mx-auto">
              Let&apos;s create something amazing. Get in touch to discuss your project.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#00024D] to-[#4A9FFF] text-white font-bold shadow-lg" size="lg">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
