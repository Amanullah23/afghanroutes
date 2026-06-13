"use client";

import { hotels } from "@/data/hotels";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, CheckCircle2 } from "lucide-react";
import { use } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function HotelDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const hotel = hotels.find((h) => h.id === id);

  if (!hotel) notFound();

  // Related hotels (same province, exclude current)
  const related = hotels
    .filter((h) => h.provinceSlug === hotel.provinceSlug && h.id !== hotel.id)
    .slice(0, 3);

  // If no same-province, show other featured hotels
  const relatedFallback = related.length > 0
    ? related
    : hotels.filter((h) => h.id !== hotel.id && h.featured).slice(0, 3);

  const amenities = [
    "Free Wi-Fi",
    "24/7 Front Desk",
    "Airport Transfer",
    "Daily Housekeeping",
    "Room Service",
    "Local Tours Desk",
  ];

  return (
    <div className="min-h-screen bg-sand">

      {/* ── Hero ── */}
      <div className="relative h-[65vh] min-h-[460px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${hotel.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge + Location */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-saffron text-lapis text-[11px] font-bold px-2.5 py-1 rounded-md">
                {hotel.badge}
              </span>
              <span className="flex items-center gap-1.5 text-white/60 text-xs">
                <MapPin size={12} />
                {hotel.province}, Afghanistan
              </span>
            </div>

            {/* Hotel name */}
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
              {hotel.name}
            </h1>

            {/* Stars + Price */}
            <div className="flex items-center gap-5">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < hotel.stars ? "text-saffron text-lg" : "text-white/20 text-lg"}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-white/70 text-sm">
                <span className="font-playfair text-2xl font-bold text-white">${hotel.pricePerNight}</span> / night
              </span>
            </div>
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
            About {hotel.name}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {hotel.description}
          </p>
        </motion.section>

        {/* Amenities */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Facilities
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-6">
            Amenities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {amenities.map((item, i) => (
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-1">Location</p>
              <p className="text-white font-semibold">{hotel.province}</p>
            </div>
            <div>
              <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-1">Stars</p>
              <p className="text-white font-semibold">{hotel.stars}-Star Hotel</p>
            </div>
            <div>
              <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-1">Price</p>
              <p className="text-white font-semibold">${hotel.pricePerNight} / night</p>
            </div>
            <div>
              <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-1">Category</p>
              <p className="text-white font-semibold">{hotel.badge}</p>
            </div>
          </div>
        </motion.section>

        {/* Explore province CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-saffron/10 border border-saffron/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-playfair text-2xl font-bold text-lapis mb-2">
              Explore {hotel.province} Province
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Discover attractions, highlights, and travel tips for {hotel.province}.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href={`/provinces/${hotel.provinceSlug}`}
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

        {/* Related hotels */}
        {relatedFallback.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
              More Stays
            </p>
            <h2 className="font-playfair text-3xl font-bold text-lapis mb-6">
              {related.length > 0 ? `More in ${hotel.province}` : "Other Recommended Hotels"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {relatedFallback.map((h, i) => (
                <motion.div
                  key={h.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <Link
                    href={`/hotels/${h.id}`}
                    className="group relative block rounded-2xl overflow-hidden min-h-[180px] bg-lapis"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${h.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-[10px] font-bold uppercase text-saffron">
                        {h.badge}
                      </span>
                      <h4 className="font-playfair text-lg font-bold text-white mt-1">
                        {h.name}
                      </h4>
                      <p className="text-white/60 text-xs mt-0.5">
                        ${h.pricePerNight} / night · {h.stars}★
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