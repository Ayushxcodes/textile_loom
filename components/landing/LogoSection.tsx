"use client";

import Container from "@/components/base/Container";
import { motion } from "motion/react";

export default function HandloomVideoFrame({
  src,
  title = "Handloom Heritage Showcase",
  subtitle = "A glimpse into India’s timeless weaving tradition",
}: {
  src: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="w-full py-20">
      <Container>
        {/* TRICOLOR HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="
    text-4xl md:text-5xl font-extrabold tracking-wide 
    bg-gradient-to-r from-[#FF9933] via-white to-[#138808]
    text-transparent bg-clip-text 
    animate-[gradientMove_3s_ease_infinite]
    drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)]
    [text-shadow:
      2px_2px_0px_#000,
      -2px_-2px_0px_#000,
      2px_-2px_0px_#000,
      -2px_2px_0px_#000,
      3px_3px_0px_#000,
      -3px_-3px_0px_#000]
  "
          >
            {title}
          </h2>

          <style>{`
            @keyframes gradientMove {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>

          <p className="text-lg md:text-xl mt-3 text-black/70 font-medium animate-fadeIn">
            {subtitle}
          </p>
        </motion.div>

        {/* HANDLOOM FRAME WITH VIDEO */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative border-[14px] border-[#8b5a3c] rounded-lg shadow-xl bg-white overflow-hidden">
            {/* Top Beam */}
            <div className="absolute top-0 left-0 w-full h-4 bg-[#6d4024]" />

            {/* Bottom Beam */}
            <div className="absolute bottom-0 left-0 w-full h-4 bg-[#6d4024]" />

            {/* Left Warp Threads */}
            <div className="absolute top-0 left-0 h-full w-4 flex flex-col justify-between py-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[3px] h-6 bg-[#dedede] mx-auto rounded"
                />
              ))}
            </div>

            {/* Right Warp Threads */}
            <div className="absolute top-0 right-0 h-full w-4 flex flex-col justify-between py-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[3px] h-6 bg-[#dedede] mx-auto rounded"
                />
              ))}
            </div>

            {/* VIDEO */}
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
