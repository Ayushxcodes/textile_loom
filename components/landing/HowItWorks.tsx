"use client";

import { motion } from "motion/react";
import {
  HandshakeIcon,
  LeafIcon,
  CpuIcon,
  GlobeHemisphereEastIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import Container from "../base/Container";

export default function MissionSection() {
  return (
    <section id="mission" className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffedd5_0%,_transparent_60%)] opacity-40 pointer-events-none"></div>

      <Container>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center font-space-grotesk text-gradient mb-10"
        >
          Mission
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-lg md:text-xl text-black/80 leading-relaxed mb-14"
        >
          The mission of the{" "}
          <span className="font-semibold">
            National Textile Minister&apos;s Conference
          </span>
          is to foster collaboration and build actionable frameworks that drive
          sustainable growth and global competitiveness in India’s textile
          industry. Through modern technology integration, skill enhancement,
          infrastructure upgrades, and eco-friendly practices, the conference
          seeks to position India as a global hub of textile innovation, export
          excellence, and world-class production.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white shadow-xl border border-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <HandshakeIcon
              className="size-10 text-orange-600 mb-4"
              weight="duotone"
            />
            <h3 className="text-xl font-semibold mb-2">
              Foster Collaborative Policy Making
            </h3>
            <p className="text-black/70">
              Strengthening coordination between central and state governments
              for unified sector growth.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white shadow-xl border border-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <LeafIcon
              className="size-10 text-green-600 mb-4"
              weight="duotone"
            />
            <h3 className="text-xl font-semibold mb-2">Sustainable Growth</h3>
            <p className="text-black/70">
              Encouraging eco-friendly production, waste reduction, and circular
              economy models.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white shadow-xl border border-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <CpuIcon
              className="size-10 text-indigo-600 mb-4"
              weight="duotone"
            />
            <h3 className="text-xl font-semibold mb-2">
              Technological Advancement
            </h3>
            <p className="text-black/70">
              Promoting modernization through digital tools, automation, and
              smart manufacturing.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white shadow-xl border border-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <GlobeHemisphereEastIcon
              className="size-10 text-blue-600 mb-4"
              weight="duotone"
            />
            <h3 className="text-xl font-semibold mb-2">
              Increase Global Presence
            </h3>
            <p className="text-black/70">
              Expanding India&apos;s footprint in global textile value chains and
              export markets.
            </p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white shadow-xl border border-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <UsersThreeIcon
              className="size-10 text-rose-600 mb-4"
              weight="duotone"
            />
            <h3 className="text-xl font-semibold mb-2">Empower Workforce</h3>
            <p className="text-black/70">
              Strengthening skills, training programs, and livelihood
              opportunities for textile workers.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
