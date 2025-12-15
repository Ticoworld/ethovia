"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Send,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ],
  industries: [
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "Fintech & Crypto", href: "/industries/fintech" },
    { name: "E-Commerce", href: "/industries/e-commerce" },
    { name: "Education / EdTech", href: "/industries/education" },
  ],
  services: [
    { name: "Real Estate Systems", href: "/services/real-estate-systems" },
    { name: "App Development", href: "/services/app-development" },
    { name: "Paid Advertising", href: "/services/paid-advertising" },
  ],
};

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/17xb8qfPEm/?mibextid=wwXIfr",
    label: "Facebook",
  },
  { icon: Twitter, href: "https://x.com/ethovia_agency", label: "X (Twitter)" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/ethovia.marketing.agency/",
    label: "Instagram",
  },
  {
    icon: Send,
    href: "https://t.me/ethovia_marketing_agency",
    label: "Telegram",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#000024] via-[#00024D] to-[#1A1A2E] text-white overflow-hidden">
      {/* Premium watermark logo background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <Image
          src="/images/logo/ethovia-logo.png"
          alt="Ethovia Watermark"
          fill
          className="object-contain opacity-10 scale-150 md:scale-[2.5]"
          aria-hidden="true"
          sizes="100vw"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center h-12 w-fit">
              <Image
                src="/images/logo/ethovia-logo.png"
                alt="Ethovia - Digital Marketing Agency"
                width={160}
                height={48}
                className="object-contain"
                sizes="(max-width: 768px) 140px, 160px"
                priority
              />
            </Link>
            <p className="text-white/80 text-base leading-relaxed font-medium">
              Digital Marketing That Delivers Results.
              <br />
              <span className="text-accent font-semibold">
                Empowering brands with innovative web solutions and data-driven
                campaigns.
              </span>
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5 text-accent" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={`${link.name}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">
              Industries
            </h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={`${link.name}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={`${link.name}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:ethoviamarketingagency@gmail.com"
                  className="text-white/70 hover:text-accent transition-colors duration-300"
                >
                  ethoviamarketingagency@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+2347084570264"
                  className="text-white/70 hover:text-accent transition-colors duration-300"
                >
                  +234 708 457 0264
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Lagos, Nigeria</span>
              </li>
            </ul>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-xs text-white/50 font-medium">
                Certified Meta & Google Ads Partner.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Ethovia Marketing Agency. RC 1928374. All rights
              reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-accent transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
