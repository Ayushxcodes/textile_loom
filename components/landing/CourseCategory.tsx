"use client";

import React from "react";
import { motion } from "motion/react";
import Container from "../base/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TextileConferenceSection() {
  return (
    <Container>
      <section className="py-16 md:py-20 relative">
        {/* ===== SECTION TITLE ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            text-4xl md:text-5xl lg:text-6xl font-bold 
            text-center font-space-grotesk tracking-wide 
            text-black drop-shadow 
          "
        >
          राष्ट्रीय वस्त्र मंत्री सम्मेलन
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="block text-xl md:text-2xl text-primary mt-2"
          >
            8 – 9 January 2026
          </motion.span>
        </motion.h2>

        {/* ===== UNDERLINE ANIMATION ===== */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-4 h-1 w-32 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full"
        />

        {/* ===== CONTENT GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* ================= BACKGROUND CARD ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/10 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-orange-700">
                  Background
                </CardTitle>
              </CardHeader>
              <CardContent className="text-black/80 leading-relaxed">
                India&apos;s textile industry is a major pillar of the economy,
                celebrated for its heritage, skilled workforce, and global
                reach. However, challenges such as outdated machinery,
                infrastructure gaps, and global competition persist.
                <br />
                <br />
                To address these issues, the Ministry of Textiles is organizing
                the{" "}
                <strong>
                  National Textile Minister&apos;s Conference (8–9 January 2026)
                </strong>
                , bringing central & state governments together to align
                strategies, share insights, and build a unified growth roadmap.
              </CardContent>
            </Card>
          </motion.div>

          {/* ================= OBJECTIVE CARD ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <Card className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/10 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-700">
                  Objective
                </CardTitle>
              </CardHeader>
              <CardContent className="text-black/80 leading-relaxed">
                The conference aims to align the vision and priorities of
                India&apos;s textile sector with national goals.
                <br />
                <br />
                It fosters collaboration between the central and state
                governments to address key challenges, unlock new opportunities,
                and set a unified policy direction for a future-ready textile
                industry.
              </CardContent>
            </Card>
          </motion.div>

          {/* ================= VISION CARD ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <Card className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/10 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-indigo-700">
                  Vision 2030
                </CardTitle>
              </CardHeader>
              <CardContent className="text-black/80 leading-relaxed">
                India&apos;s textile sector will emerge as a global leader
                through:
                <ul className="list-disc ml-5 mt-3 space-y-2">
                  <li>Global Competitiveness</li>
                  <li>Innovation & Sustainability</li>
                  <li>Inclusive Workforce Development</li>
                  <li>Strong Industrial Ecosystem</li>
                  <li>Excellence in Exports & Trade</li>
                </ul>
                <br />
                By 2030, the industry will be recognized for cutting-edge tech,
                skilled talent, and world-class production capabilities.
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Container>
  );
}
