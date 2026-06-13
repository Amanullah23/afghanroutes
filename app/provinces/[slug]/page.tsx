"use client";

import { provinces } from "@/data/provinces";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, CheckCircle2 } from "lucide-react";
import { use } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProvinceDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const province = provinces.find((p) => p.slug === slug);

  if (!province) notFound();

  const regionLabel: Record<string, string> = {
    north: "Northern Afghanistan",
    south: "Southern Afghanistan",
    east: "Eastern Afghanistan",
    west: "Western Afghanistan",
    central: "Central Afghanistan",
  };

  // Related provinces (same region, exclude current)
  const related = provinces
    .filter((p) => p.region === province.region && p.slug !== province.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-sand">

      {/* ── Hero ── */}
      <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${province.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

        {/* Back button */}
        {/*<div className="absolute top-8 left-6 z-10">
          <Link
            href="/provinces"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-200"
          >
            <ArrowLeft size={15} />
            All Provinces
          </Link>
        </div>*/}

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Tag + Region */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-[11px] font-semibold tracking-wider uppercase border border-saffron/50 bg-saffron/15 text-saffron-light px-2.5 py-1 rounded">
                {province.tag}
              </span>
              <span className="flex items-center gap-1.5 text-white/60 text-xs">
                <MapPin size={12} />
                {regionLabel[province.region]}
              </span>
            </div>

            {/* Province name */}
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
              {province.name}
            </h1>

            {/* Short description */}
            <p className="text-lapis-tint/85 text-lg max-w-2xl leading-relaxed">
              {province.description}
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
            Discover {province.name}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {province.longDescription}
          </p>
        </motion.section>

        {/* Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Must-See
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-6">
            Top Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {province.highlights.map((highlight, i) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-3 bg-white border border-lapis/10 rounded-xl px-5 py-4 shadow-sm"
              >
                <CheckCircle2 size={18} className="text-saffron shrink-0" />
                <span className="text-lapis font-medium text-sm">{highlight}</span>
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
            {province.name} at a Glance
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-1">Region</p>
              <p className="text-white font-semibold capitalize">{province.region}</p>
            </div>
            <div>
              <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-1">Category</p>
              <p className="text-white font-semibold">{province.tag}</p>
            </div>
            <div>
              <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-1">Highlights</p>
              <p className="text-white font-semibold">{province.highlights.length} Attractions</p>
            </div>
          </div>
        </motion.section>

        {/* Plan your trip CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-saffron/10 border border-saffron/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-playfair text-2xl font-bold text-lapis mb-2">
              Ready to visit {province.name}?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Plan your full itinerary, find accommodations, and discover the best time to visit.
            </p>
          </div>
          <Link
            href="/plan-trip"
            className="shrink-0 bg-lapis hover:bg-lapis/90 text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 text-sm whitespace-nowrap"
          >
            Plan Your Trip
          </Link>
        </motion.section>

        {/* Related provinces */}
        {related.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
              Explore More
            </p>
            <h2 className="font-playfair text-3xl font-bold text-lapis mb-6">
              Also in {regionLabel[province.region]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {related.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <Link
                    href={`/provinces/${p.slug}`}
                    className="group relative block rounded-2xl overflow-hidden min-h-[180px] bg-lapis"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${p.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-saffron-light">
                        {p.tag}
                      </span>
                      <h4 className="font-playfair text-lg font-bold text-white mt-1">
                        {p.name}
                      </h4>
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