"use client";

import { Province } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

interface ProvinceCardProps {
  province: Province;
  large?: boolean;
  index?: number;
}

export default function ProvinceCard({ province, large, index = 0 }: ProvinceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        href={`/provinces/${province.slug}`}
        className={clsx(
          "group relative block rounded-2xl overflow-hidden bg-lapis cursor-pointer",
          large ? "min-h-[320px]" : "min-h-[220px]"
        )}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${province.image})` }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Arrow */}
        <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-200 group-hover:bg-saffron group-hover:rotate-45">
          <ArrowUpRight size={16} className="group-hover:text-lapis" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase border border-saffron/50 bg-saffron/15 text-saffron-light px-2.5 py-1 rounded mb-3">
            {province.tag}
          </span>
          <h3 className={clsx(
            "font-playfair font-bold text-white leading-tight mb-1",
            large ? "text-3xl" : "text-xl"
          )}>
            {province.name}
          </h3>
          <p className="text-sm text-lapis-tint/80 leading-relaxed line-clamp-2">
            {province.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}