import Link from "next/link";
import HotelCard from "@/components/ui/HotelCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { hotels } from "@/data/hotels";

export default function HotelsSection() {
  const featured = hotels.filter((h) => h.featured);

  return (
    <section className="bg-white py-24 px-6" id="hotels">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Where to stay"
          title="Curated stays across<br/>every province"
          subtitle="From boutique guesthouses to city hotels — vetted and reviewed for every budget."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {featured.map((hotel, i) => (
            <HotelCard key={hotel.id} hotel={hotel} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/hotels"
            className="inline-block bg-lapis text-white text-sm font-semibold px-8 py-4 rounded-xl hover:bg-lapis-mid hover:-translate-y-0.5 transition-all duration-200"
          >
            Browse all hotels
          </Link>
        </div>
      </div>
    </section>
  );
}