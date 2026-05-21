"use client";

import { motion } from "motion/react";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <div className="grid-bg absolute inset-0 -z-[5]" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-7 font-mono text-xs tracking-[0.35em] text-accent"
      >
        &lt;HELLO_WORLD/&gt;
      </motion.p>

      <h1
        data-text={site.name}
        className="glitch text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl"
      >
        {site.name}
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.8 }}
        className="mt-7 max-w-xl text-base text-muted sm:text-lg"
      >
        {site.tagline}
      </motion.p>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-14 font-mono text-xs text-muted/70 transition-colors hover:text-accent"
      >
        ↓ scroll
      </motion.a>
    </section>
  );
}
