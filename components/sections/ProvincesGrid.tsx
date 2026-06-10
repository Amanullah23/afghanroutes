import Link from "next/link";
import ProvinceCard from "@/components/ui/ProvinceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { provinces } from "@/data/provinces";

export default function ProvincesGrid() {
  const featured = provinces.filter((p) => p.featured).slice(0, 5);

  return (
    <section className="bg-sand py-24 px-6" id="provinces">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Explore by province"
            title="34 provinces,<br/>infinite wonder"
          />
          <div>
            <p className="text-base text-sage leading-relaxed max-w-sm mb-4">
              Each province holds its own culture, landscape, and history.
            </p>
            <Link
              href="/provinces"
              className="text-sm font-semibold text-lapis-light hover:text-lapis transition-colors"
            >
              View all provinces →
            </Link>
          </div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Large card — col-span-2 */}
          <div className="md:col-span-2">
            <ProvinceCard province={featured[0]} large index={0} />
          </div>
          {/* Regular card */}
          <div>
            <ProvinceCard province={featured[1]} index={1} />
          </div>
          {/* Bottom row — 3 equal cards */}
          {featured.slice(2).map((p, i) => (
            <ProvinceCard key={p.id} province={p} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}