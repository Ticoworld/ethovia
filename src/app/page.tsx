import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import FeaturedWork from "@/components/home/FeaturedWork";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <FeaturedWork />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  );
}
