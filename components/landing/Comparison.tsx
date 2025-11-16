"use client";

import React from "react";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import { Card } from "@/components/ui/card";
import { CheckIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

const comparisonData = [
  {
    feature: "Structured Courses",
    levelupLabs: "Yes, generated with AI",
    ai: "No structure",
    levelupLabsHas: true,
    aiHas: false,
  },
  {
    feature: "Personalized Roadmaps",
    levelupLabs: "Personalized Roadmaps",
    ai: "One-time responses",
    levelupLabsHas: true,
    aiHas: false,
  },
  {
    feature: "Progress Tracking",
    levelupLabs: "LevelupScore built in",
    ai: "No learning history",
    levelupLabsHas: true,
    aiHas: false,
  },
  {
    feature: "Practice with Projects",
    levelupLabs: "Integrated Projects and feedback",
    ai: "Not built for assessment",
    levelupLabsHas: true,
    aiHas: false,
  },
  {
    feature: "Built for Education",
    levelupLabs: "Yes, purpose-built platform",
    ai: "No focus on learning journeys",
    levelupLabsHas: true,
    aiHas: false,
  },
];

export default function Comparison() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-12 md:gap-16"
        >
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-space-grotesk text-gradient leading-tight mb-4">
              LevelupLab vs. <span className="text-primary">AI</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-space-grotesk">
              See how our platform compares to OtherAI (Claude, Gemini, ChatGPT)
              for learning
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="space-y-4">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
              >
                <Card className="border-neutral-300 shadow-custom overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
                      {/* Feature Name */}
                      <div className="md:col-span-1">
                        <h3 className="text-lg md:text-xl font-bold font-space-grotesk text-foreground">
                          {row.feature}
                        </h3>
                      </div>

                      {/* Levelup Labs */}
                      <div className="md:col-span-1 flex items-center gap-4">
                        <div
                          className={cn(
                            "flex items-center justify-center size-10 rounded-full shrink-0",
                            row.levelupLabsHas ? "bg-primary/10" : "bg-muted"
                          )}
                        >
                          {row.levelupLabsHas ? (
                            <CheckIcon
                              className="size-5 text-primary"
                              weight="bold"
                            />
                          ) : (
                            <XIcon
                              className="size-5 text-muted-foreground"
                              weight="bold"
                            />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm md:text-base text-foreground font-space-grotesk font-medium">
                            Levelup Labs
                          </p>
                          <p className="text-xs md:text-sm text-muted-foreground font-space-grotesk mt-1">
                            {row.levelupLabs}
                          </p>
                        </div>
                      </div>

                      {/* AI (Claude, Gemini, ChatGPT) */}
                      <div className="md:col-span-1 flex items-center gap-4">
                        <div
                          className={cn(
                            "flex items-center justify-center size-10 rounded-full shrink-0",
                            row.aiHas ? "bg-primary/10" : "bg-muted"
                          )}
                        >
                          {row.aiHas ? (
                            <CheckIcon
                              className="size-5 text-primary"
                              weight="bold"
                            />
                          ) : (
                            <XIcon
                              className="size-5 text-muted-foreground"
                              weight="bold"
                            />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm md:text-base text-foreground font-space-grotesk font-medium">
                            Other AI&apos;s
                          </p>
                          <p className="text-xs md:text-sm text-muted-foreground font-space-grotesk mt-1">
                            {row.ai}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
