"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import Container from "./Container";
import Logo from "./Logo"; // <-- using your logo component
import { ListIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Goals", href: "#goals" },
    { name: "Mission", href: "#mission" },
    { name: "Agenda", href: "#agenda" },
    { name: "Speakers", href: "/speakers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-8 left-0 right-0 z-50 px-4 md:px-0">
        <Container
          className="
            border border-black/20 shadow-lg
            px-4 md:px-8
            rounded-2xl
            bg-white/80 backdrop-blur-xl
            min-h-[72px]
            flex items-center justify-between
          "
        >
          {/* LEFT: LOGO */}
          <div className="flex items-center gap-3">
            <Logo />
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="
                  text-sm font-medium text-black/70 hover:text-black
                  transition-colors relative
                "
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] scale-x-0 origin-left bg-gradient-to-r from-[#FF671F] via-white to-[#046A38] transition-transform duration-300 hover:scale-x-100"></span>
              </Link>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-white/90 border shadow"
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
            className="fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-10 text-center">
              <Image
                src="/flag.svg"
                width={60}
                height={40}
                alt="Indian Flag"
                className="rounded shadow"
              />

              <Logo />

              <p className="text-lg text-black/70 leading-tight">
                NATIONAL TEXTILE MINISTERS CONFERENCE
                <br />
                <span className="font-semibold">8 – 9 January 2026</span>
              </p>

              <div className="flex flex-col gap-5 mt-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-semibold text-black/80 hover:text-black transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={toggleMenu}
                className="mt-10 px-6 py-3 rounded-xl bg-black text-white text-lg shadow-md"
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
