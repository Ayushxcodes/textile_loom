"use client";

import Container from "@/components/base/Container";

export default function HandloomVideoFrame({ src }: { src: string }) {
  return (
    <section className="w-full py-16">
      <Container>
        <div className="relative w-full max-w-5xl mx-auto">
          {/* HANDLOOM FRAME */}
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
                  className="w-[3px] h-6 bg-[#e9e9e9] mx-auto rounded"
                />
              ))}
            </div>

            {/* Right Warp Threads */}
            <div className="absolute top-0 right-0 h-full w-4 flex flex-col justify-between py-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[3px] h-6 bg-[#e9e9e9] mx-auto rounded"
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
