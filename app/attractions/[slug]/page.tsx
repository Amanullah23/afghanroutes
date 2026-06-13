"use client";

import { attractions } from "@/data/attractions";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, CheckCircle2 } from "lucide-react";
import { use } from "react";
import clsx from "clsx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const categoryColors: Record<string, string> = {
  nature:    "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  history:   "bg-amber-500/15 text-amber-300 border-amber-500/30",
  culture:   "bg-purple-500/15 text-purple-300 border-purple-500/30",
  adventure: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  religious: "bg-saffron/15 text-saffron-light border-saffron/30",
};

const regionLabel: Record<string, string> = {
  north:   "Northern Afghanistan",
  south:   "Southern Afghanistan",
  east:    "Eastern Afghanistan",
  west:    "Western Afghanistan",
  central: "Central Afghanistan",
};

export default function AttractionDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const attraction = attractions.find((a) => a.slug === slug);

  if (!attraction) notFound();

  // Related: same category, exclude current
  const related = attractions
    .filter((a) => a.category === attraction.category && a.slug !== attraction.slug)
    .slice(0, 3);

  const relatedFallback = related.length > 0
    ? related
    : attractions.filter((a) => a.slug !== attraction.slug && a.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-sand">

      {/* ── Hero ── */}
      <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${attraction.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/38 to-black/15" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Tag + Location */}
            <div className="flex items-center gap-3 mb-4">
              <span className={clsx(
                "inline-block text-[11px] font-semibold tracking-wider uppercase border px-2.5 py-1 rounded",
                categoryColors[attraction.category]
              )}>
                {attraction.tag}
              </span>
              <span className="flex items-center gap-1.5 text-white/60 text-xs">
                <MapPin size={12} />
                {attraction.province} · {regionLabel[attraction.region]}
              </span>
            </div>

            {/* Name */}
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
              {attraction.name}
            </h1>

            {/* Short description */}
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              {attraction.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* About */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            About
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-5">
            About This Attraction
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {attraction.longDescription}
          </p>
        </motion.section>

        {/* Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            What to See
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-6">
            Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {attraction.highlights.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-3 bg-white border border-lapis/10 rounded-xl px-5 py-4 shadow-sm"
              >
                <CheckCircle2 size={18} className="text-saffron shrink-0" />
                <span className="text-lapis font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quick facts */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="bg-lapis rounded-2xl p-8 text-white"
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Quick Facts
          </p>
          <h2 className="font-playfair text-2xl font-bold mb-6">
            At a Glance
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-1">Province</p>
              <p className="text-white font-semibold">{attraction.province}</p>
            </div>
            <div>
              <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-1">Region</p>
              <p className="text-white font-semibold capitalize">{attraction.region}</p>
            </div>
            <div>
              <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-1">Category</p>
              <p className="text-white font-semibold capitalize">{attraction.category}</p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-saffron/10 border border-saffron/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-playfair text-2xl font-bold text-lapis mb-2">
              Planning to visit {attraction.province}?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Explore the full province guide or start building your trip itinerary.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href={`/provinces/${attraction.provinceSlug}`}
              className="text-sm font-semibold text-lapis border border-lapis px-5 py-3 rounded-xl hover:bg-lapis hover:text-white transition-all duration-200 whitespace-nowrap"
            >
              View Province
            </Link>
            <Link
              href="/plan-trip"
              className="text-sm font-semibold bg-lapis text-white px-5 py-3 rounded-xl hover:bg-lapis/90 transition-all duration-200 whitespace-nowrap"
            >
              Plan Your Trip
            </Link>
          </div>
        </motion.section>

        {/* Related attractions */}
        {relatedFallback.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
              Keep Exploring
            </p>
            <h2 className="font-playfair text-3xl font-bold text-lapis mb-6">
              {related.length > 0 ? `More ${attraction.category} attractions` : "Other Top Attractions"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {relatedFallback.map((a, i) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <Link
                    href={`/attractions/${a.slug}`}
                    className="group relative block rounded-2xl overflow-hidden min-h-[180px] bg-lapis"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${a.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-[10px] font-semibold uppercase text-saffron-light">
                        {a.tag}
                      </span>
                      <h4 className="font-playfair text-lg font-bold text-white mt-1 leading-snug">
                        {a.name}
                      </h4>
                      <p className="text-white/50 text-xs mt-0.5 flex items-center gap-1">
                        <MapPin size={10} /> {a.province}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

      </div>
    </div>
  );
}