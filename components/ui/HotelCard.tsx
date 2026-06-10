"use client";

import { Hotel } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";

interface HotelCardProps {
  hotel: Hotel;
  index?: number;
}

export default function HotelCard({ hotel, index = 0 }: HotelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white border border-sand-deep rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl hover:border-lapis-tint transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden bg-lapis">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${hotel.image})` }}
        />
        <span className="absolute top-3.5 left-3.5 bg-saffron text-lapis text-[11px] font-bold px-2.5 py-1 rounded-md">
          {hotel.badge}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1.5 text-lapis-light text-xs font-semibold tracking-wide uppercase mb-2">
          <MapPin size={12} />
          {hotel.province}
        </div>
        <h3 className="font-playfair text-lg font-semibold text-lapis mb-2 leading-snug">
          {hotel.name}
        </h3>
        <p className="text-sm text-sage leading-relaxed mb-5 line-clamp-2">
          {hotel.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-sand">
          <div>
            <div className="flex gap-0.5 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < hotel.stars ? "text-saffron text-sm" : "text-sand-deep text-sm"}>
                  ★
                </span>
              ))}
            </div>
            <p className="text-xs text-sage">
              <span className="font-playfair text-xl font-bold text-lapis">${hotel.pricePerNight}</span> / night
            </p>
          </div>
          <Link
            href={`/hotels/${hotel.id}`}
            className="text-sm font-semibold text-lapis-light bg-lapis-tint px-4 py-2 rounded-lg hover:bg-lapis hover:text-white transition-all"
          >
            View hotel
          </Link>
        </div>
      </div>
    </motion.div>
  );
}