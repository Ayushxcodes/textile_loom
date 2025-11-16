"use client";

import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { FlowerLotusIcon } from "@phosphor-icons/react/dist/ssr"; // Clean official-looking icon

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-xl md:text-2xl font-bold font-space-grotesk flex items-center gap-2 group"
    >
      {/* Animated Icon */}
      <motion.div
        whileHover={{ rotate: [0, -8, 8, -5, 0] }}
        transition={{ duration: 0.6 }}
      >
        <FlowerLotusIcon
          weight="duotone"
          className="size-8 md:size-10 text-[#046A38] group-hover:text-[#FF671F] transition-colors"
        />
      </motion.div>

      {/* Name */}
      <span className="group-hover:text-[#046A38] transition-colors tracking-wide">
        National Textile Ministers’ Conference
      </span>
    </Link>
  );
}
