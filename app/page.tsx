import HeroSection from "@/components/landing/HeroSection";
import CourseCategory from "@/components/landing/CourseCategory";
import Testimonial from "@/components/landing/Testimonial";
import HowItWorks from "@/components/landing/HowItWorks";
import Comparison from "@/components/landing/Comparison";
import FAQ from "@/components/landing/FAQ";
import Features from "@/components/landing/Features";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/base/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CourseCategory />
      <HowItWorks />
      <Features />
      <Footer />
    </>
  );
}
