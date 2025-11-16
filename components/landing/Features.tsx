"use client";

import { motion } from "motion/react";
import Container from "../base/Container";

import {
  GlobeHemisphereEastIcon,
  RocketLaunchIcon,
  RecycleIcon,
  CpuIcon,
  GraduationCapIcon,
  FactoryIcon,
  CoinsIcon,
  HandHeartIcon,
  AtomIcon,
  PaletteIcon,
  DeviceMobileCameraIcon,
  LeafIcon,
  TrendUpIcon,
  ShapesIcon,
  PencilRulerIcon,
  UsersThreeIcon, // ✅ FIXED ICON
} from "@phosphor-icons/react/dist/ssr";

export default function DiscussionTopicsSection() {
  const mainTopics = [
    { text: "Review of State Textile Policies", icon: GlobeHemisphereEastIcon },
    {
      text: "Boosting Exports & Global Competitiveness",
      icon: RocketLaunchIcon,
    },
    { text: "Sustainability & Eco-Friendly Textiles", icon: RecycleIcon },
    { text: "Technology Up-gradation", icon: CpuIcon },
    { text: "Skill Development & Employment", icon: GraduationCapIcon },
    { text: "Infrastructure Development", icon: FactoryIcon },
    { text: "Investment & Industry Support", icon: CoinsIcon },
    { text: "Promotion of Handloom & Handicraft Sector", icon: HandHeartIcon },
    { text: "Technical Textiles Growth", icon: AtomIcon },
  ];

  const designTopics = [
    { text: "Design Innovation for Global Markets", icon: PaletteIcon },
    {
      text: "Support for MSMEs & Weavers Through Design Intervention",
      icon: UsersThreeIcon, // ✅ FIXED
    },
    {
      text: "Research & Development in Textile Design",
      icon: AtomIcon,
    },
    {
      text: "Use of Technology in Design",
      icon: DeviceMobileCameraIcon,
    },
    { text: "Sustainability in Design", icon: LeafIcon },
    {
      text: "Trend Forecasting & Design Education",
      icon: TrendUpIcon,
    },
    {
      text: "Promotion of Regional & Traditional Designs",
      icon: ShapesIcon,
    },
    {
      text: "Collaboration with Fashion Institutes & Industry",
      icon: PencilRulerIcon,
    },
  ];

  return (
    <Container>
      <section id ="agenda" className="py-20 space-y-16">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center font-space-grotesk"
        >
          <span className="bg-gradient-to-r from-orange-600 via-white to-green-600 bg-clip-text text-transparent">
            Key Discussion Topics
          </span>
          <br />
          for the National Textile Ministers’ Conference
        </motion.h2>

        {/* TWO COLUMNS */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT MAIN TOPICS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {mainTopics.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-md shadow border border-black/10 hover:shadow-lg hover:scale-[1.02] transition-transform"
                >
                  <Icon size={32} className="text-orange-600 animate-pulse" />
                  <p className="text-lg font-semibold text-black">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT DESIGN TOPICS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {designTopics.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-md shadow border border-black/10 hover:shadow-lg hover:scale-[1.02] transition-transform"
                >
                  <Icon size={32} className="text-green-700 animate-pulse" />
                  <p className="text-lg font-semibold text-black">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </Container>
  );
}
