import Link from "next/link";

// ── Explore ──────────────────────────────────────────
// /provinces        ✅ created
// /attractions      ❌ not yet created
// /hotels           ✅ created
// /plan-trip        ❌ not yet created
// /map              ❌ not yet created

// ── Travel Info ──────────────────────────────────────
// /visa-guide       ❌ not yet created
// /safety-tips      ❌ not yet created
// /currency         ❌ not yet created
// /best-seasons     ❌ not yet created
// /transport        ❌ not yet created

// ── About ────────────────────────────────────────────
// /about#mission    ❌ not yet created
// /contact          ❌ not yet created
// /partner          ❌ not yet created
// /advertise        ❌ not yet created

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
              <li>
                <Link href="/provinces" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">
                  All Provinces
                </Link>
              </li>
              <li>
                {/* ✅ /attractions added */}
                <Link href="/attractions" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">
                  Top Attractions
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">
                  Hotels & Stay
                </Link>
              </li>
              <li>
                {/* ✅ /plan-trip — added */}
                <Link href="/planner" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">
                  Trip Planner
                </Link>
              </li>
              <li>
                {/* ✅ /map — added */}
                <Link href="/map" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">
                  Travel Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Travel Info */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-lapis-tint/50 uppercase mb-5">Travel Info</p>
            <ul className="space-y-3">
              <li>
                {/* ✅ /visa-guide — added */}
                <Link href="/visa-guide" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">
                  Visa Guide
                </Link>
              </li>
              <li>
                {/* ❌ /safety-tips — not yet created */}
                <Link href="#" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">
                  Safety Tips
                </Link>
              </li>
              <li>
                {/* ✅ /currency — added */}
                <Link href="/currency" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">
                  Currency Info
                </Link>
              </li>
              <li>
                {/* ❌ /best-seasons — not yet created */}
                <Link href="#" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">
                  Best Seasons
                </Link>
              </li>
              <li>
                {/* ❌ /transport — not yet created */}
                <Link href="#" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">
                  Transport
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-lapis-tint/50 uppercase mb-5">About</p>
            <ul className="space-y-3">
              <li>
                {/* ❌ /about#mission — not yet created */}
                <Link href="/about#mission" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                {/* ❌ /contact — not yet created */}
                <Link href="/about#developer" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                {/* ❌ /partner — not yet created */}
                <Link href="/about#partner" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                {/* ❌ /advertise — not yet created */}
                <Link href="#" className="text-sm text-lapis-tint/70 hover:text-saffron-light transition-colors">
                  Advertise
                </Link>
              </li>
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