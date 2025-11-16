"use client";
import { motion } from "motion/react";
import Container from "@/components/base/Container";

const logos = [
  {
    name: "Google",
    url: "https://www.svgrepo.com/show/475656/google-color.svg",
  },
  {
    name: "Microsoft",
    url: "https://www.svgrepo.com/show/452062/microsoft.svg",
  },
  { name: "Meta", url: "https://www.svgrepo.com/show/431792/meta.svg" },
  {
    name: "Amazon",
    url: "https://www.svgrepo.com/show/475634/amazon-color.svg",
  },
  { name: "Apple", url: "https://www.svgrepo.com/show/508761/apple.svg" },
  {
    name: "Netflix",
    url: "https://www.svgrepo.com/show/303341/netflix-1-logo.svg",
  },
  { name: "Stripe", url: "https://www.svgrepo.com/show/354401/stripe.svg" },
];

export default function LogoSection() {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 md:py-16 lg:py-20 border-t border-border/50 bg-muted/20 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-xs md:text-sm font-space-grotesk text-muted-foreground uppercase tracking-wider mb-3">
            Trusted by leading companies
          </p>
          <h2 className="text-xl md:text-2xl font-bold font-space-grotesk text-foreground">
            Join thousands of learners from top organizations
          </h2>
        </motion.div>

        {/* Infinite scrolling marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center px-8 md:px-12 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-8 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
