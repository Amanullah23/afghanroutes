"use client";

import { useState } from "react";
import { provinces } from "@/data/provinces";
import { MapPin, Plus, Trash2, Calendar } from "lucide-react";

export default function PlannerPage() {
  const [stops, setStops] = useState<string[]>([]);
  const [days, setDays] = useState(7);

  const addStop = (slug: string) => {
    if (!stops.includes(slug) && stops.length < 8) {
      setStops([...stops, slug]);
    }
  };
  const removeStop = (slug: string) => setStops(stops.filter((s) => s !== slug));

  return (
    <div className="min-h-screen bg-sand">
      <div className="bg-lapis pt-32 pb-16 px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
          Trip planner
        </p>
        <h1 className="font-playfair text-5xl font-bold text-white mb-4">
          Build your itinerary
        </h1>
        <p className="text-lapis-tint/75 text-lg max-w-md mx-auto">
          Select provinces, set your travel days, and get a custom route.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10">
        {/* Left — select provinces */}
        <div>
          <h2 className="font-playfair text-2xl font-bold text-lapis mb-6">Choose provinces</h2>
          <div className="space-y-3">
            {provinces.map((p) => {
              const selected = stops.includes(p.slug);
              return (
                <button
                  key={p.id}
                  onClick={() => selected ? removeStop(p.slug) : addStop(p.slug)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                    selected
                      ? "bg-lapis text-white border-lapis"
                      : "bg-white border-sand-deep hover:border-lapis/30 text-lapis"
                  }`}
                >
                  <MapPin size={16} className={selected ? "text-saffron" : "text-lapis-light"} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{p.name}</p>
                    <p className={`text-xs ${selected ? "text-lapis-tint/70" : "text-sage"}`}>{p.tag}</p>
                  </div>
                  <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs ${
                    selected ? "bg-saffron border-saffron text-lapis" : "border-sand-deep"
                  }`}>
                    {selected ? "✓" : <Plus size={12} />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right — itinerary summary */}
        <div>
          <h2 className="font-playfair text-2xl font-bold text-lapis mb-6">Your itinerary</h2>

          {/* Days slider */}
          <div className="bg-white border border-sand-deep rounded-xl p-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-lapis flex items-center gap-2">
                <Calendar size={15} className="text-lapis-light" /> Total days
              </p>
              <span className="font-playfair text-2xl font-bold text-lapis">{days}</span>
            </div>
            <input
              type="range" min={3} max={30} value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full accent-lapis"
            />
            <div className="flex justify-between text-xs text-sage mt-1">
              <span>3 days</span><span>30 days</span>
            </div>
          </div>

          {/* Selected stops */}
          {stops.length === 0 ? (
            <div className="bg-white border border-sand-deep rounded-xl p-8 text-center">
              <p className="text-sage text-sm">Select provinces on the left to build your route.</p>
            </div>
          ) : (
            <div className="bg-white border border-sand-deep rounded-xl p-5 space-y-3">
              {stops.map((slug, i) => {
                const p = provinces.find((x) => x.slug === slug)!;
                const daysHere = Math.max(1, Math.round(days / stops.length));
                return (
                  <div key={slug} className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-lapis-tint text-lapis text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-lapis">{p.name}</p>
                      <p className="text-xs text-sage">{daysHere} day{daysHere > 1 ? "s" : ""} suggested</p>
                    </div>
                    <button onClick={() => removeStop(slug)} className="text-sage hover:text-red-500 transition-colors p-1">
                      <Trash2 size={14} />
                    </button>
                  </div>
                );
              })}

              <div className="pt-4 border-t border-sand mt-2">
                <button className="w-full bg-saffron text-lapis font-semibold text-sm py-3 rounded-xl hover:bg-saffron-light transition-colors">
                  Save itinerary
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}