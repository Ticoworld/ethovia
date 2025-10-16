import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow usage of quality values used in the app (85, 90, 100)
    // Next.js 15+ requires explicit qualities configuration
    // Note: This doesn't force these qualities globally; it's an allowlist.
    qualities: [60, 70, 75, 80, 85, 90, 95, 100],
    // For local images we don't need remotePatterns
  },
  experimental: {
    // Ensure Next 15 app features if needed
  },
};

export default nextConfig;
