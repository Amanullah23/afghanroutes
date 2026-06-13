"use client";

import { Attraction } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import clsx from "clsx";

interface AttractionCardProps {
  attraction: Attraction;
  index?: number;
  large?: boolean;
}

const categoryColors: Record<string, string> = {
  nature:    "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  history:   "bg-amber-500/15 text-amber-300 border-amber-500/30",
  culture:   "bg-purple-500/15 text-purple-300 border-purple-500/30",
  adventure: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  religious: "bg-saffron/15 text-saffron-light border-saffron/30",
};

export default function AttractionCard({ attraction, index = 0, large }: AttractionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link
        href={`/attractions/${attraction.slug}`}
        className={clsx(
          "group relative block rounded-2xl overflow-hidden bg-lapis cursor-pointer",
          large ? "min-h-[320px]" : "min-h-[240px]"
        )}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${attraction.image})` }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Arrow */}
        <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-200 group-hover:bg-saffron group-hover:rotate-45">
          <ArrowUpRight size={16} className="group-hover:text-lapis" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Tag */}
          <span className={clsx(
            "inline-block text-[11px] font-semibold tracking-wider uppercase border px-2.5 py-1 rounded mb-3",
            categoryColors[attraction.category]
          )}>
            {attraction.tag}
          </span>

          {/* Name */}
          <h3 className={clsx(
            "font-playfair font-bold text-white leading-tight mb-2",
            large ? "text-3xl" : "text-xl"
          )}>
            {attraction.name}
          </h3>

          {/* Province */}
          <div className="flex items-center gap-1.5 text-white/50 text-xs mb-1">
            <MapPin size={11} />
            {attraction.province}
          </div>

          {/* Description */}
          <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
            {attraction.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}