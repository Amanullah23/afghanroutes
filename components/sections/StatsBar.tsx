"use client";

import { motion } from "framer-motion";

const stats = [
  { num: "34",   label: "Provinces covered" },
  { num: "500+", label: "Historical landmarks" },
  { num: "200+", label: "Verified hotels" },
  { num: "3,000+", label: "Years of history" },
];

export default function StatsBar() {
  return (
    <div className="bg-lapis-mid">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="px-8 py-9"
          >
            <p className="font-playfair text-4xl font-bold text-saffron-light leading-none mb-2">
              {s.num}
            </p>
            <p className="text-sm text-lapis-tint/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}