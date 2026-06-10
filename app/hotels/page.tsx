import { hotels } from "@/data/hotels";
import HotelCard from "@/components/ui/HotelCard";

export const metadata = { title: "Hotels — AfghanRoutes" };

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-sand">
      <div className="bg-lapis pt-32 pb-20 px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
          Where to stay
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
          Hotels & Guesthouses
        </h1>
        <p className="text-lapis-tint/75 text-lg max-w-xl mx-auto leading-relaxed">
          Vetted stays across Afghanistan — from capital city hotels to remote mountain lodges.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hotels.map((h, i) => (
            <HotelCard key={h.id} hotel={h} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}