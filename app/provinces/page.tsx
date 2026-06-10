"use client";

import { provinces } from "@/data/provinces";
import ProvinceCard from "@/components/ui/ProvinceCard";

export default function ProvincesPage() {
  return (
    <div className="min-h-screen bg-sand">
      {/* Page header */}
      <div className="bg-lapis pt-32 pb-20 px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
          Explore
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
          All 34 Provinces
        </h1>
        <p className="text-lapis-tint/75 text-lg max-w-xl mx-auto leading-relaxed">
          Afghanistan spans five regions — each with its own landscapes, cultures, and stories.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {provinces.map((p, i) => (
            <ProvinceCard key={p.id} province={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}