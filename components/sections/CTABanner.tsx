"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="bg-sand-deep py-24 px-6 text-center" id="plan">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-lapis-light mb-4">
          Start your journey
        </p>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-lapis leading-tight mb-5">
          Ready to explore the<br />
          <em className="not-italic text-lapis-light">heart of Asia?</em>
        </h2>
        <p className="text-base text-sage leading-relaxed mb-10">
          Build your custom itinerary across any of Afghanistan's 34 provinces. We'll guide you through every step — from visa to guesthouse.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/planner"
            className="bg-lapis text-white text-sm font-semibold px-8 py-4 rounded-xl hover:bg-lapis-mid hover:-translate-y-0.5 transition-all duration-200"
          >
            Plan my trip
          </Link>
          <Link
            href="/provinces"
            className="text-lapis text-sm font-medium px-8 py-4 rounded-xl border border-lapis/25 hover:border-lapis/50 hover:bg-lapis/5 transition-all duration-200"
          >
            Browse provinces
          </Link>
        </div>
      </motion.div>
    </section>
  );
}