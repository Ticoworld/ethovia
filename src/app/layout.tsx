import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import SmoothScroll from "@/components/common/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ethovia - Digital Marketing Agency | Web Development & Paid Ads",
  description:
    "Transform your digital presence with Ethovia. We craft high-performance websites and data-driven ad campaigns that convert. Expert web development, Google Ads, and social media advertising.",
  keywords: [
    "digital marketing",
    "web development",
    "google ads",
    "social media advertising",
    "marketing agency",
    "SEO",
    "paid advertising",
  ],
  authors: [{ name: "Ethovia Marketing Agency" }],
  openGraph: {
    title: "Ethovia - Digital Marketing Agency",
    description:
      "Transform your digital presence with high-performance websites and data-driven ad campaigns",
    type: "website",
    locale: "en_US",
    siteName: "Ethovia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethovia - Digital Marketing Agency",
    description:
      "Transform your digital presence with high-performance websites and data-driven ad campaigns",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <SmoothScroll />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

