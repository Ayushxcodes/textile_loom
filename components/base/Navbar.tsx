"use client";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import Container from "./Container";
import { ListIcon, XIcon } from "@phosphor-icons/react/dist/ssr";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-8 left-0 right-0 z-50 px-4 md:px-0">
        <Container
          className="
            border border-black/25
            px-4 md:px-8
            rounded-b-2xl
            bg-white/70
            backdrop-blur-xl
            shadow-md
            min-h-[70px]
            flex items-center justify-center
            relative
          "
        >
          {/* LEFT INDIAN FLAG — NOW VISIBLE ON MOBILE */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Image
              src="/flag.svg"
              width={40}
              height={26}
              alt="Indian Flag"
              className="rounded-sm shadow"
            />
          </div>

          {/* CENTER TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center w-full font-bold text-lg md:text-xl text-black tracking-wide"
          >
            सत्यमेव जयते
          </motion.h1>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/70 border"
          >
            {isOpen ? (
              <XIcon weight="bold" className="size-6" />
            ) : (
              <ListIcon weight="bold" className="size-6" />
            )}
          </button>
        </Container>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              <h2 className="text-3xl font-bold text-center">सत्यमेव जयते</h2>

              <p className="text-lg text-center">
                NATIONAL TEXTILE MINISTERS CONFERENCE <br />8 – 9 January 2026
              </p>

              {/* CLOSE BUTTON */}
              <button
                onClick={toggleMenu}
                className="mt-10 px-6 py-3 rounded-lg bg-black text-white"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
