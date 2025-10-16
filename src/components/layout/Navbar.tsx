"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const portalContainerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mark mounted for portal usage (avoids SSR mismatch)
  useEffect(() => {
    setMounted(true);
    // Create or reuse a dedicated portal container (persist across navigations/HMR)
    let el = document.getElementById("mobile-menu-portal") as HTMLDivElement | null;
    if (!el) {
      el = document.createElement("div");
      el.setAttribute("id", "mobile-menu-portal");
      document.body.appendChild(el);
    }
    portalContainerRef.current = el;

    return () => {
      // Do NOT remove the element to avoid races during route changes/HMR.
      // Just release our ref; container persists for the app lifetime.
      portalContainerRef.current = null;
    };
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Glass morphism navbar with premium styling
  const navBgClass = isScrolled
    ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-2xl"
    : "bg-transparent";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBgClass}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with animation - no text */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-40 h-40">
              <Image
                src="/images/logo/ethovia-logo.png"
                alt="Ethovia Logo"
                width={160}
                height={160}
                className="object-contain drop-shadow-2xl"
                quality={100}
                sizes="(max-width: 768px) 120px, 160px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.div
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-cyan-400"
                      : "text-white hover:text-accent"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {/* Active indicator */}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-accent to-cyan-400 rounded-full shadow-lg shadow-accent/50"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop - Enhanced Premium Style */}
          <div className="hidden md:block">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 bg-gradient-to-r from-secondary to-accent text-white rounded-full font-semibold text-sm overflow-hidden shadow-lg shadow-accent/40 hover:shadow-accent/60 transition-all duration-300 border border-white/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Hover shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button (only visible when menu is closed) */}
          {!isMobileMenuOpen && (
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden transition-colors duration-300 p-2 relative text-white hover:text-accent"
              style={{ zIndex: 10000 }}
              aria-label="Open mobile menu"
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Mobile Menu - Portal: Full Screen Takeover with glassmorphism */}
      {mounted && portalContainerRef.current
        ? createPortal(
            <AnimatePresence initial={false}>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden fixed inset-0 z-[9999] overflow-y-auto"
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '100dvh',
                    overflowX: 'hidden',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(24px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                  }}
                  aria-modal="true"
                  role="dialog"
                >
                  {/* Mobile menu close button (top right) */}
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-6 right-6 p-2 text-white hover:text-accent transition-colors duration-300 z-[10000]"
                    aria-label="Close mobile menu"
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-8 h-8" />
                  </motion.button>

                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative flex flex-col items-center justify-center min-h-screen min-h-[100dvh] space-y-8 px-8 py-24">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: index * 0.06 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-4xl font-bold transition-colors duration-300 ${
                            pathname === link.href
                              ? "text-cyan-400"
                              : "text-white hover:text-accent"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.4 }}
                      className="mt-8"
                    >
                      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        <button className="px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white rounded-full font-semibold text-lg shadow-2xl shadow-accent/50">
                          Get Started
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>,
            portalContainerRef.current
          )
        : null}
    </motion.nav>
  );
}
