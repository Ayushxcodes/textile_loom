import HeroSection from "@/components/landing/HeroSection";
import CourseCategory from "@/components/landing/CourseCategory";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import Footer from "@/components/base/Footer";
import HandloomVideoFrame from "../components/landing/LogoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HandloomVideoFrame
        src="/handloom.mp4"
        title="The Art of Handloom Weaving"
        subtitle="Experience the craftsmanship that defines India"
      />
      <CourseCategory />
      <HowItWorks />
      <Features />
      <Footer />
    </>
  );
}
