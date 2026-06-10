import { highlights } from "@/data/provinces";

export default function HighlightsStrip() {
  const doubled = [...highlights, ...highlights];

  return (
    <div className="bg-sand py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-5">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-lapis-light">
          Popular destinations
        </p>
      </div>
      <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max">
        {doubled.map((h, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 bg-white border border-sand-deep rounded-full px-5 py-3 whitespace-nowrap text-sm font-medium text-lapis shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-saffron shrink-0" />
            {h}
          </div>
        ))}
      </div>
    </div>
  );
}