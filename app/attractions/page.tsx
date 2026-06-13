"use client";

import { useState } from "react";
import { attractions } from "@/data/attractions";
import AttractionCard from "@/components/ui/AttractionCard";
import { motion } from "framer-motion";

const categories = [
  { value: "all",       label: "All" },
  { value: "nature",    label: "Nature" },
  { value: "history",   label: "History" },
  { value: "culture",   label: "Culture" },
  { value: "adventure", label: "Adventure" },
  { value: "religious", label: "Religious" },
];

export default function AttractionsPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? attractions
    : attractions.filter((a) => a.category === active);

  return (
    <div className="min-h-screen bg-sand">

      {/* ── Page header ── */}
      <div className="bg-lapis pt-32 pb-20 px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
          Discover
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
          Top Attractions
        </h1>
        <p className="text-lapis-tint/75 text-lg max-w-xl mx-auto leading-relaxed">
          From ancient Silk Road monuments to sapphire mountain lakes — Afghanistan's most remarkable places to visit.
        </p>
      </div>

      {/* ── Filter tabs ── */}
      <div className="sticky top-0 z-20 bg-sand border-b border-lapis/10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`shrink-0 text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 ${
                active === cat.value
                  ? "bg-lapis text-white"
                  : "bg-white border border-lapis/15 text-lapis/70 hover:border-lapis hover:text-lapis"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Count */}
        <motion.p
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-lapis/50 mb-8"
        >
          {filtered.length} attraction{filtered.length !== 1 ? "s" : ""}
          {active !== "all" ? ` in ${categories.find(c => c.value === active)?.label}` : " across Afghanistan"}
        </motion.p>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-lapis/40">
            <p className="font-playfair text-2xl mb-2">No attractions found</p>
            <p className="text-sm">Try a different category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <AttractionCard key={a.id} attraction={a} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}