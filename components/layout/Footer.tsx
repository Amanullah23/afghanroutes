import Link from "next/link";

const exploreLinks = ["All provinces","Top attractions","Hotels & stay","Trip planner","Travel map"];
const infoLinks    = ["Visa guide","Safety tips","Currency info","Best seasons","Transport"];
const aboutLinks   = ["Our mission","Contact us","Partner with us","Advertise"];

export default function Footer() {
  return (
    <footer className="bg-lapis text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-playfair text-xl font-bold mb-3">
              Afghan<span className="text-saffron">Routes</span>
            </p>
            <p className="text-sm text-lapis-tint/70 leading-relaxed mb-4">
              Your complete guide to discovering Afghanistan — province by province, story by story.
            </p>
            <p className="font-['Noto_Nastaliq_Urdu',serif] text-saffron-light text-base leading-loose" dir="rtl">
              افغان روتس — کشف افغانستان
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-lapis-tint/50 uppercase mb-5">Explore</p>
            <ul className="space-y-3">
              {exploreLinks.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel info */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-lapis-tint/50 uppercase mb-5">Travel info</p>
            <ul className="space-y-3">
              {infoLinks.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-lapis-tint/50 uppercase mb-5">About</p>
            <ul className="space-y-3">
              {aboutLinks.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="#" className="text-xs text-lapis-tint/50 hover:text-saffron-light transition-colors border border-white/10 px-3 py-1 rounded-full">دری</Link>
              <Link href="#" className="text-xs text-lapis-tint/50 hover:text-saffron-light transition-colors border border-white/10 px-3 py-1 rounded-full">پښتو</Link>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-lapis-tint/40">© 2026 AfghanRoutes.com — All rights reserved</p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-lapis-tint/40 hover:text-saffron-light transition-colors">English</Link>
            <Link href="#" className="text-xs text-lapis-tint/40 hover:text-saffron-light transition-colors">دری</Link>
            <Link href="#" className="text-xs text-lapis-tint/40 hover:text-saffron-light transition-colors">پښتو</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}