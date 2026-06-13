"use client";

import { motion } from "framer-motion";
import { DollarSign, TrendingUp, MapPin, AlertCircle, Info, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

const exchangeRates = [
  { currency: "US Dollar",       code: "USD", symbol: "$",  rate: "64.5",  flag: "🇺🇸" },
  { currency: "Euro",            code: "EUR", symbol: "€",  rate: "76.2",  flag: "🇪🇺" },
  { currency: "British Pound",   code: "GBP", symbol: "£",  rate: "89.4",  flag: "🇬🇧" },
  { currency: "Pakistani Rupee", code: "PKR", symbol: "₨",  rate: "0.25",  flag: "🇵🇰" },
  { currency: "Iranian Rial",    code: "IRR", symbol: "﷼",  rate: "0.0017",flag: "🇮🇷" },
  { currency: "UAE Dirham",      code: "AED", symbol: "د.إ",rate: "19.2",  flag: "🇦🇪" },
];

const budgetTiers = [
  {
    tier: "Budget",
    perDay: "$20 – $40",
    color: "bg-emerald-50 border-emerald-200",
    labelColor: "text-emerald-700 bg-emerald-100 border-emerald-200",
    items: ["Basic guesthouse: $10–15/night", "Local restaurant meal: $2–5", "Shared taxi: $1–3", "Bottled water: $0.30"],
  },
  {
    tier: "Mid-Range",
    perDay: "$50 – $100",
    color: "bg-blue-50 border-blue-200",
    labelColor: "text-blue-700 bg-blue-100 border-blue-200",
    items: ["3-star hotel: $40–65/night", "Restaurant meal: $8–15", "Private taxi: $10–20/day", "Local SIM card: $3–5"],
  },
  {
    tier: "Comfort",
    perDay: "$120 – $200+",
    color: "bg-saffron/5 border-saffron/25",
    labelColor: "text-amber-700 bg-amber-50 border-amber-200",
    items: ["4–5 star hotel: $80–150/night", "Fine dining: $20–40", "Private driver: $40–70/day", "Guided tour: $50–100"],
  },
];

const paymentTips = [
  { ok: true,  tip: "USD is widely accepted across major cities and tourist areas" },
  { ok: true,  tip: "Carry small denomination bills — change is often scarce" },
  { ok: true,  tip: "Bazaars and local shops prefer Afghani (AFN) cash" },
  { ok: true,  tip: "Money changers (sarrafi) offer competitive rates in cities" },
  { ok: false, tip: "Credit and debit cards are not accepted almost anywhere" },
  { ok: false, tip: "ATMs are extremely rare — do not rely on them" },
  { ok: false, tip: "Avoid exchanging money at airports — rates are poor" },
  { ok: false, tip: "Traveller's cheques are not accepted in Afghanistan" },
];

const cityPrices = [
  { city: "Kabul",     meal: "$3–12",  hotel: "$25–150", taxi: "$2–15",  sim: "$3" },
  { city: "Herat",     meal: "$2–8",   hotel: "$20–80",  taxi: "$1–10",  sim: "$3" },
  { city: "Mazar",     meal: "$2–7",   hotel: "$15–60",  taxi: "$1–8",   sim: "$3" },
  { city: "Bamiyan",   meal: "$2–6",   hotel: "$15–50",  taxi: "$2–10",  sim: "$4" },
  { city: "Kandahar",  meal: "$2–7",   hotel: "$15–55",  taxi: "$1–8",   sim: "$3" },
];

export default function CurrencyPage() {
  return (
    <div className="min-h-screen bg-sand">

      {/* ── Header ── */}
      <div className="bg-lapis pt-32 pb-20 px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
          Travel Info
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
          Currency Info
        </h1>
        <p className="text-lapis-tint/75 text-lg max-w-xl mx-auto leading-relaxed">
          Afghanistan's currency, exchange rates, daily budgets, and essential money tips for travellers.
        </p>
      </div>

      {/* ── Currency overview cards ── */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          <div className="bg-lapis rounded-2xl p-6 text-white">
            <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-1">Official Currency</p>
            <p className="font-playfair text-3xl font-bold">Afghani</p>
            <p className="text-saffron text-sm font-semibold mt-1">AFN · ؋</p>
          </div>
          <div className="bg-lapis rounded-2xl p-6 text-white">
            <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-1">1 USD equals</p>
            <p className="font-playfair text-3xl font-bold">≈ 64.5 AFN</p>
            <p className="text-lapis-tint/50 text-xs mt-1">Approximate — check live rates</p>
          </div>
          <div className="bg-lapis rounded-2xl p-6 text-white">
            <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-1">Best to carry</p>
            <p className="font-playfair text-3xl font-bold">USD + AFN</p>
            <p className="text-saffron text-sm font-semibold mt-1">Cash only — no cards</p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* ── Important notice ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-5"
        >
          <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-800 mb-1">Cash is King in Afghanistan</p>
            <p className="text-sm text-amber-700 leading-relaxed">
              Afghanistan operates almost entirely on cash. Credit cards, ATMs, and digital payments are not reliably available. Always carry enough USD and Afghan Afghani in small bills before you travel.
            </p>
          </div>
        </motion.div>

        {/* ── Exchange rates ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Exchange Rates
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-2">
            Common Currencies to AFN
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Approximate rates — always verify with a local money changer or bank before exchanging.
          </p>
          <div className="bg-white border border-lapis/10 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-lapis px-6 py-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-lapis-tint/60">Currency</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-lapis-tint/60 text-center">Code</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-lapis-tint/60 text-right">1 Unit = AFN</span>
            </div>
            {exchangeRates.map((r, i) => (
              <div
                key={r.code}
                className={`grid grid-cols-3 px-6 py-4 items-center ${i !== exchangeRates.length - 1 ? "border-b border-lapis/8" : ""}`}
              >
                <span className="text-sm font-medium text-lapis flex items-center gap-2">
                  <span className="text-lg">{r.flag}</span> {r.currency}
                </span>
                <span className="text-sm text-gray-400 text-center font-mono">{r.code}</span>
                <span className="text-sm font-bold text-lapis text-right">
                  {r.rate} <span className="text-saffron font-semibold">AFN</span>
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-3 mt-4">
            <Info size={15} className="text-lapis/40 shrink-0 mt-0.5" />
            <p className="text-xs text-gray-400 leading-relaxed">
              Rates are approximate and fluctuate daily. Money changers (sarrafi) in Kabul, Herat, and Mazar typically offer the best rates. Avoid exchanging at airports or hotels.
            </p>
          </div>
        </motion.section>

        {/* ── Daily budget ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Daily Budget
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-2">
            How Much Will You Spend?
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Afghanistan is an affordable destination. Here's what to expect at different comfort levels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {budgetTiers.map((b, i) => (
              <motion.div
                key={b.tier}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                className={`border rounded-2xl p-6 ${b.color}`}
              >
                <span className={`text-xs font-bold uppercase tracking-wider border px-2.5 py-1 rounded mb-3 inline-block ${b.labelColor}`}>
                  {b.tier}
                </span>
                <p className="font-playfair text-2xl font-bold text-lapis mb-4">{b.perDay}<span className="text-sm font-normal text-gray-500"> /day</span></p>
                <ul className="space-y-2">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 size={13} className="text-saffron shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── City price guide ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            City Prices
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-2">
            Prices by City
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Typical costs across Afghanistan's main cities in USD.
          </p>
          <div className="bg-white border border-lapis/10 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-5 bg-lapis px-6 py-3">
              {["City", "Meal", "Hotel/night", "Taxi", "SIM card"].map((h) => (
                <span key={h} className="text-xs font-semibold uppercase tracking-wider text-lapis-tint/60 text-center first:text-left">{h}</span>
              ))}
            </div>
            {cityPrices.map((row, i) => (
              <div
                key={row.city}
                className={`grid grid-cols-5 px-6 py-4 items-center text-sm ${i !== cityPrices.length - 1 ? "border-b border-lapis/8" : ""}`}
              >
                <span className="font-semibold text-lapis flex items-center gap-1.5">
                  <MapPin size={12} className="text-saffron" />{row.city}
                </span>
                <span className="text-gray-600 text-center">{row.meal}</span>
                <span className="text-gray-600 text-center">{row.hotel}</span>
                <span className="text-gray-600 text-center">{row.taxi}</span>
                <span className="text-gray-600 text-center">{row.sim}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Payment tips ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Money Tips
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-2">
            Do's & Don'ts
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Essential tips to manage your money safely and efficiently in Afghanistan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {paymentTips.map((item, i) => (
              <motion.div
                key={item.tip}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.35 + i * 0.06 }}
                className={`flex items-start gap-3 rounded-xl px-5 py-4 border ${
                  item.ok
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-red-50 border-red-200"
                }`}
              >
                {item.ok
                  ? <CheckCircle2 size={17} className="text-emerald-500 shrink-0 mt-0.5" />
                  : <XCircle size={17} className="text-red-400 shrink-0 mt-0.5" />
                }
                <p className={`text-sm leading-relaxed ${item.ok ? "text-emerald-800" : "text-red-700"}`}>
                  {item.tip}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── CTA ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="bg-saffron/10 border border-saffron/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-playfair text-2xl font-bold text-lapis mb-2">
              Ready to start planning?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Browse hotels, explore provinces, and build your Afghanistan itinerary.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/hotels"
              className="text-sm font-semibold text-lapis border border-lapis px-5 py-3 rounded-xl hover:bg-lapis hover:text-white transition-all duration-200 whitespace-nowrap"
            >
              Browse Hotels
            </Link>
            <Link
              href="/plan-trip"
              className="text-sm font-semibold bg-lapis text-white px-5 py-3 rounded-xl hover:bg-lapis/90 transition-all duration-200 whitespace-nowrap"
            >
              Plan Your Trip
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
  );
}