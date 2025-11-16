"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import Logo from "@/components/base/Logo";
import {
  TwitterLogoIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  InstagramLogoIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  conference: [
    { label: "About the Conference", href: "#about" },
    { label: "Mission & Vision", href: "#mission" },
    { label: "Key Discussion Topics", href: "#topics" },
    { label: "Speakers & Delegates", href: "#speakers" },
  ],
  information: [
    { label: "Agenda", href: "#agenda" },
    { label: "Venue & Logistics", href: "#venue" },
    { label: "Travel & Accommodation", href: "#travel" },
    { label: "Media & Press", href: "#press" },
  ],
  resources: [
    { label: "Reports & Documents", href: "#reports" },
    { label: "Textile Policies", href: "#policies" },
    { label: "Ministry Resources", href: "#ministry" },
    { label: "FAQs", href: "#faqs" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Accessibility", href: "#accessibility" },
  ],
};

const socialLinks = [
  { icon: TwitterLogoIcon, href: "#", label: "Twitter" },
  { icon: LinkedinLogoIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramLogoIcon, href: "#", label: "Instagram" },
  { icon: GithubLogoIcon, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-gradient-to-b from-white via-[#f3f3f3] to-[#e6e6e6] relative overflow-hidden">
      {/* Tricolour glow top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FF671F] via-white to-[#046A38]" />

      <Container>
        <div className="py-12 md:py-16 lg:py-20">
          {/* Main Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand / About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2"
            >
              <Logo />

              <p className="text-sm md:text-base text-muted-foreground font-space-grotesk mt-4 max-w-md leading-relaxed">
                The National Textile Ministers’ Conference brings together state
                leadership, industry experts, and innovators to shape the future
                of India’s textile sector through collaboration, sustainability,
                and technology-driven growth.
              </p>

              {/* Newsletter */}
              <div className="mt-6">
                <p className="text-sm font-semibold font-space-grotesk text-foreground mb-3">
                  Stay informed
                </p>
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-background border-border/50"
                  />
                  <Button type="submit" size="default" className="shrink-0">
                    Subscribe
                    <ArrowRightIcon className="size-4 ml-2" weight="bold" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Conference Links */}
            <FooterColumn
              title="Conference"
              links={footerLinks.conference}
              delay={0.1}
            />

            {/* Information Links */}
            <FooterColumn
              title="Information"
              links={footerLinks.information}
              delay={0.2}
            />

            {/* Resources Links */}
            <FooterColumn
              title="Resources"
              links={footerLinks.resources}
              delay={0.3}
            />
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border/40 mt-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-sm text-muted-foreground font-space-grotesk"
              >
                © {new Date().getFullYear()} National Textile Ministers’
                Conference. All Rights Reserved.
              </motion.p>

              {/* Legal */}
              <div className="flex flex-wrap items-center gap-4 justify-center md:justify-end">
                {footerLinks.legal.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm text-muted-foreground font-space-grotesk hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center size-10 rounded-lg bg-background border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      <Icon className="size-5" weight="regular" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* Footer Column Component */
function FooterColumn({ title, links, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <h3 className="text-sm font-bold font-space-grotesk text-foreground mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link: any) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground font-space-grotesk hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
