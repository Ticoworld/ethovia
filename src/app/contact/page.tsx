"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Twitter,
  Facebook,
  Instagram,
  CheckCircle2,
} from "lucide-react";
import Button from "@/components/common/Button";

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <>
      {/* Hero Section - Consistent Brand Gradient */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-[#00024D] via-[#1A1A2E] to-[#4A9FFF]">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-xl"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto drop-shadow"
          >
            Let&apos;s discuss your project and how we can help you achieve your
            goals
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-success/10 border border-success rounded-lg flex items-center"
                  >
                    <CheckCircle2 className="w-6 h-6 text-success mr-3" />
                    <div>
                      <div className="font-semibold text-success">
                        Message Sent Successfully!
                      </div>
                      <div className="text-sm text-gray-600">
                        We&apos;ll get back to you within 24 hours.
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        id="email"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone (Optional)
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                  </div>

                  {/* Service & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Service Interested In *
                      </label>
                      <select
                        {...register("service")}
                        id="service"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                          errors.service ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        <option value="">Select a service</option>
                        <option value="website">Website Development</option>
                        <option value="paid-advertising">
                          Paid Advertising
                        </option>
                        <option value="paid-advertising">
                          Paid Advertising
                        </option>
                        <option value="strategy">Digital Strategy</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.service.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Budget Range *
                      </label>
                      <select
                        {...register("budget")}
                        id="budget"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                          errors.budget ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        <option value="">Select budget range</option>
                        <option value="200k-500k">₦200k - ₦500k</option>
                        <option value="500k-1m">₦500k - ₦1M</option>
                        <option value="1m-3m">₦1M - ₦3M</option>
                        <option value="3m+">₦3M+</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                      {errors.budget && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.budget.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full bg-black text-white hover:bg-primary border border-white/10"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {/* What Happens Next Section */}
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-semibold text-primary mb-4">
                      What happens next?
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <p className="text-gray-600 text-sm">
                          We review your details within 24 hours.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <p className="text-gray-600 text-sm">
                          We schedule a quick discovery call.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <p className="text-gray-600 text-sm">
                          You get a tailored proposal.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Contact Details */}
              <div className="bg-white rounded-lg shadow-xl p-6">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-700">Email</div>
                      <a
                        href="mailto:ethoviamarketingagency@gmail.com"
                        className="text-secondary hover:text-accent transition-colors"
                      >
                        ethoviamarketingagency@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-700">Phone</div>
                      <a
                        href="tel:+2347084570264"
                        className="text-secondary hover:text-accent transition-colors"
                      >
                        +234 708 457 0264
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-700">Address</div>
                      <div className="text-gray-600">Lagos, Nigeria</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-700">
                        Business Hours
                      </div>
                      <div className="text-gray-600">
                        Mon - Fri: 9:00 AM - 6:00 PM
                        <br />
                        Sat - Sun: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-xl p-6">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/share/17xb8qfPEm/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 border border-primary/20"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://x.com/ethovia_agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 border border-primary/20"
                    aria-label="X (Twitter)"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/ethovia.marketing.agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 border border-primary/20"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://t.me/ethovia_marketing_agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 border border-primary/20"
                    aria-label="Telegram"
                  >
                    <Send className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Quick Response Badge */}
              <div className="bg-gradient-to-br from-[#00024D] to-[#4A9FFF] rounded-lg p-6 text-white">
                <div className="text-4xl font-bold mb-2 text-white">24h</div>
                <div className="text-lg font-semibold mb-1 text-[#4A9FFF]">
                  Response Time
                </div>
                <div className="text-sm text-white/90">
                  We typically respond to all inquiries within 24 hours on
                  business days
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
