"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Building2, Star, Layers } from "lucide-react";
import Link from "next/link";
import { provinces } from "@/data/provinces";
import { attractions } from "@/data/attractions";
import { hotels } from "@/data/hotels";

// Coordinate data for provinces
const provinceCoords: Record<string, [number, number]> = {
  bamiyan:    [34.8201, 67.8278],
  herat:      [34.3482, 62.2040],
  kabul:      [34.5260, 69.1760],
  balkh:      [36.7580, 66.8975],
  panjshir:   [35.6217, 69.5183],
  badakhshan: [36.7349, 70.8116],
  kandahar:   [31.6200, 65.7200],
  nuristan:   [35.3200, 70.8500],
};

const attractionCoords: Record<string, [number, number]> = {
  "band-e-amir":           [34.8470, 67.1930],
  "bamiyan-buddhas":       [34.8279, 67.8269],
  "friday-mosque-herat":   [34.3418, 62.1998],
  "shrine-hazrat-ali":     [36.7069, 67.1128],
  "wakhan-corridor":       [37.1167, 72.6500],
  "panjshir-valley":       [35.5500, 69.4500],
  "baburs-gardens":        [34.5015, 69.1525],
  "minaret-of-jam":        [34.3964, 64.5164],
  "lapis-mines-sar-e-sang":[35.9200, 70.7800],
};

const hotelCoords: Record<string, [number, number]> = {
  "1": [34.5218, 69.1780],
  "2": [34.8201, 67.8278],
  "3": [34.3450, 62.2010],
  "4": [36.7100, 67.1100],
  "5": [35.5500, 69.4500],
  "6": [37.1000, 72.6000],
};

type FilterType = "provinces" | "attractions" | "hotels";

export default function TravelMapPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [filters, setFilters] = useState<Record<FilterType, boolean>>({
    provinces: true,
    attractions: true,
    hotels: true,
  });
  const [selected, setSelected] = useState<{
    type: FilterType;
    name: string;
    description: string;
    tag: string;
    slug?: string;
    id?: string;
    province?: string;
  } | null>(null);
  const [mapReady, setMapReady] = useState(false);

  const toggleFilter = (f: FilterType) =>
    setFilters((prev) => ({ ...prev, [f]: !prev[f] }));

useEffect(() => {
  if (typeof window === "undefined") return;
  if (mapInstanceRef.current) return;
  if (!mapRef.current) return;

  // Prevent double-init (React StrictMode)
  if (mapRef.current as any) return;

  import("leaflet").then((L) => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });

    const map = L.map(mapRef.current!, {
      center: [34.5, 66.0],
      zoom: 6,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png", {
      maxZoom: 18,
      attribution: '© <a href="https://stadiamaps.com/">Stadia Maps</a>',
    }).addTo(map);

    L.control.zoom({ position: "topright" }).addTo(map);
    L.control.attribution({ position: "bottomleft", prefix: false }).addTo(map);

    mapInstanceRef.current = map;
    setMapReady(true);
  });

  return () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }
  };
}, []);

  useEffect(() => {
    if (!mapReady || !mapInstanceRef.current) return;

    import("leaflet").then((L) => {
      const map = mapInstanceRef.current;

      // Clear existing markers
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];

      const makeIcon = (color: string, emoji: string) =>
        L.divIcon({
          className: "",
          html: `<div style="
            width:36px;height:36px;border-radius:50% 50% 50% 0;
            background:${color};
            transform:rotate(-45deg);
            border:2px solid rgba(255,255,255,0.9);
            box-shadow:0 4px 14px rgba(0,0,0,0.45);
            display:flex;align-items:center;justify-content:center;
          "><span style="transform:rotate(45deg);font-size:14px;display:block;text-align:center;line-height:32px;">${emoji}</span></div>`,
          iconSize: [36, 36],
          iconAnchor: [18, 36],
          popupAnchor: [0, -38],
        });

      const provinceIcon   = makeIcon("#1B3A6B", "🏔️");
      const attractionIcon = makeIcon("#C8860A", "⭐");
      const hotelIcon      = makeIcon("#166534", "🏨");

      // Province markers
      if (filters.provinces) {
        provinces.forEach((p) => {
          const coords = provinceCoords[p.slug];
          if (!coords) return;
          const marker = L.marker(coords, { icon: provinceIcon })
            .addTo(map)
            .on("click", () =>
              setSelected({
                type: "provinces",
                name: p.name,
                description: p.description,
                tag: p.tag,
                slug: p.slug,
              })
            );
          markersRef.current.push(marker);
        });
      }

      // Attraction markers
      if (filters.attractions) {
        attractions.forEach((a) => {
          const coords = attractionCoords[a.slug];
          if (!coords) return;
          const marker = L.marker(coords, { icon: attractionIcon })
            .addTo(map)
            .on("click", () =>
              setSelected({
                type: "attractions",
                name: a.name,
                description: a.description,
                tag: a.tag,
                slug: a.slug,
                province: a.province,
              })
            );
          markersRef.current.push(marker);
        });
      }

      // Hotel markers
      if (filters.hotels) {
        hotels.forEach((h) => {
          const coords = hotelCoords[h.id];
          if (!coords) return;
          const marker = L.marker(coords, { icon: hotelIcon })
            .addTo(map)
            .on("click", () =>
              setSelected({
                type: "hotels",
                name: h.name,
                description: h.description,
                tag: h.badge,
                id: h.id,
                province: h.province,
              })
            );
          markersRef.current.push(marker);
        });
      }
    });
  }, [mapReady, filters]);

  const getDetailHref = () => {
    if (!selected) return "#";
    if (selected.type === "provinces") return `/provinces/${selected.slug}`;
    if (selected.type === "attractions") return `/attractions/${selected.slug}`;
    if (selected.type === "hotels") return `/hotels/${selected.id}`;
    return "#";
  };

  const typeLabel: Record<FilterType, string> = {
    provinces: "Province",
    attractions: "Attraction",
    hotels: "Hotel",
  };

  const typeColor: Record<FilterType, string> = {
    provinces: "text-blue-400",
    attractions: "text-saffron",
    hotels: "text-emerald-400",
  };

  return (
    <div className="min-h-screen bg-sand flex flex-col">

      {/* ── Page header ── */}
      <div className="bg-lapis pt-32 pb-16 px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
          Navigate
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
          Travel Map
        </h1>
        <p className="text-lapis-tint/75 text-lg max-w-xl mx-auto leading-relaxed">
          Explore Afghanistan's provinces, top attractions, and hotels — all on one interactive map.
        </p>
      </div>

      {/* ── Map area ── */}
      <div className="flex-1 relative" style={{ minHeight: "70vh" }}>

        {/* Filter legend — top left overlay */}
        <div className="absolute top-5 left-5 z-[1000] bg-lapis/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/10 min-w-[190px]">
          <div className="flex items-center gap-2 mb-3">
            <Layers size={14} className="text-saffron" />
            <span className="text-xs font-semibold tracking-widest uppercase text-lapis-tint/60">Layers</span>
          </div>
          <div className="space-y-2">
            {/* Provinces */}
            <button
              onClick={() => toggleFilter("provinces")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                filters.provinces ? "bg-blue-600/20 text-blue-300" : "text-white/30"
              }`}
            >
              <span className="text-base">🏔️</span>
              <span>Provinces</span>
              <span className={`ml-auto w-2 h-2 rounded-full ${filters.provinces ? "bg-blue-400" : "bg-white/15"}`} />
            </button>
            {/* Attractions */}
            <button
              onClick={() => toggleFilter("attractions")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                filters.attractions ? "bg-saffron/20 text-saffron-light" : "text-white/30"
              }`}
            >
              <span className="text-base">⭐</span>
              <span>Attractions</span>
              <span className={`ml-auto w-2 h-2 rounded-full ${filters.attractions ? "bg-saffron" : "bg-white/15"}`} />
            </button>
            {/* Hotels */}
            <button
              onClick={() => toggleFilter("hotels")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                filters.hotels ? "bg-emerald-600/20 text-emerald-300" : "text-white/30"
              }`}
            >
              <span className="text-base">🏨</span>
              <span>Hotels</span>
              <span className={`ml-auto w-2 h-2 rounded-full ${filters.hotels ? "bg-emerald-400" : "bg-white/15"}`} />
            </button>
          </div>
        </div>

        {/* Selected item popup — bottom center */}
        {selected && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] w-[90vw] max-w-sm bg-lapis/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl border border-white/10">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <span className={`text-[11px] font-bold uppercase tracking-wider ${typeColor[selected.type]}`}>
                  {typeLabel[selected.type]}
                  {selected.province ? ` · ${selected.province}` : ""}
                </span>
                <h3 className="font-playfair text-xl font-bold text-white mt-0.5 leading-snug">
                  {selected.name}
                </h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-white/40 hover:text-white text-lg leading-none shrink-0 mt-0.5"
              >
                ✕
              </button>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-4 line-clamp-2">
              {selected.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold tracking-wider uppercase border border-saffron/40 bg-saffron/10 text-saffron-light px-2.5 py-1 rounded">
                {selected.tag}
              </span>
              <Link
                href={getDetailHref()}
                className="text-sm font-semibold bg-saffron text-lapis px-4 py-2 rounded-lg hover:bg-saffron/90 transition-all"
              >
                View details →
              </Link>
            </div>
          </div>
        )}

        {/* Leaflet map container */}
        <div ref={mapRef} className="w-full h-full" style={{ minHeight: "70vh" }} />

        {/* Leaflet CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
      </div>
    </div>
  );
}