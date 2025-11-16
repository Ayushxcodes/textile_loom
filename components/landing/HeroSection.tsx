"use client";
import Container from "@/components/base/Container";

export default function HeroSection() {
  return (
    <section className="relative mt-32 w-full flex justify-center">
      <Container className="relative z-10 w-full flex justify-center">
        {/* PANEL THAT ONLY CONTAINS YOUR IMAGE */}
        <div
          className="
            w-[95%] md:w-[85%] max-w-6xl 
            rounded-3xl shadow-xl overflow-hidden
          "
        >
          <img
            src="/hero-poster.jpg" // <-- replace with your final image
            alt="Hero Poster"
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
