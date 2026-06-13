"use client";

import { motion } from "framer-motion";
import { FileText, Clock, DollarSign, CheckCircle2, AlertCircle, Info } from "lucide-react";
import Link from "next/link";

const visaTypes = [
  {
    type: "Tourist Visa",
    duration: "30 days",
    extendable: true,
    description: "For individuals travelling to Afghanistan for sightseeing, cultural visits, and leisure purposes.",
    requirements: ["Valid passport (6+ months)", "Completed application form", "Passport-size photo", "Travel itinerary", "Proof of accommodation", "Bank statement"],
  },
  {
    type: "Business Visa",
    duration: "30–90 days",
    extendable: true,
    description: "For foreign nationals travelling to Afghanistan for business meetings, conferences, or commercial activities.",
    requirements: ["Valid passport (6+ months)", "Invitation letter from Afghan company", "Company registration documents", "Passport-size photo", "Bank statement", "Cover letter from employer"],
  },
  {
    type: "Transit Visa",
    duration: "72 hours",
    extendable: false,
    description: "For travellers passing through Afghanistan en route to a third country.",
    requirements: ["Valid passport (6+ months)", "Onward ticket to destination country", "Valid visa for destination country", "Passport-size photo"],
  },
];

const applicationSteps = [
  {
    step: "01",
    title: "Contact the Afghan Embassy",
    detail: "Locate the nearest Afghan embassy or consulate in your country. Most applications are submitted in person or by post.",
  },
  {
    step: "02",
    title: "Complete the Application Form",
    detail: "Fill out the official Afghan visa application form. Ensure all details match your passport exactly.",
  },
  {
    step: "03",
    title: "Gather Required Documents",
    detail: "Collect all supporting documents for your visa type — passport, photos, invitation letters, and financial proof.",
  },
  {
    step: "04",
    title: "Submit & Pay the Fee",
    detail: "Submit your application with the required documents and pay the visa fee. Keep your receipt as proof of payment.",
  },
  {
    step: "05",
    title: "Wait for Processing",
    detail: "Standard processing takes 5–10 business days. Express processing (where available) takes 2–3 business days.",
  },
  {
    step: "06",
    title: "Collect Your Visa",
    detail: "Once approved, collect your visa from the embassy or have it mailed to you. Check all details carefully before travel.",
  },
];

const feesTable = [
  { type: "Tourist Visa (30 days)",   standard: "$50",  express: "$100" },
  { type: "Business Visa (30 days)",  standard: "$80",  express: "$150" },
  { type: "Business Visa (90 days)",  standard: "$160", express: "$250" },
  { type: "Transit Visa (72 hours)",  standard: "$30",  express: "$60"  },
];

const requiredDocs = [
  { doc: "Original passport", note: "Valid for at least 6 months beyond your travel dates" },
  { doc: "Completed visa application form", note: "Signed and dated, no corrections or white-out" },
  { doc: "Two recent passport photos", note: "White background, taken within the last 3 months" },
  { doc: "Bank statement", note: "Last 3 months, showing sufficient funds for your stay" },
  { doc: "Travel itinerary", note: "Confirmed flight bookings in and out of Afghanistan" },
  { doc: "Proof of accommodation", note: "Hotel bookings or invitation letter from a host" },
  { doc: "Travel insurance", note: "Recommended — covering medical and emergency evacuation" },
];

export default function VisaGuidePage() {
  return (
    <div className="min-h-screen bg-sand">

      {/* ── Header ── */}
      <div className="bg-lapis pt-32 pb-20 px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
          Travel Info
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
          Visa Guide
        </h1>
        <p className="text-lapis-tint/75 text-lg max-w-xl mx-auto leading-relaxed">
          Everything you need to know about entering Afghanistan — visa types, documents, fees, and how to apply.
        </p>
      </div>

      {/* ── Important notice ── */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-5"
        >
          <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-800 mb-1">Important Notice</p>
            <p className="text-sm text-amber-700 leading-relaxed">
              Visa requirements and procedures may change. Always verify the latest information with the official Afghan embassy or consulate in your country before travelling.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* ── Visa Types ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Step 1
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-2">
            Choose Your Visa Type
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Select the visa that matches the purpose of your visit to Afghanistan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {visaTypes.map((v, i) => (
              <motion.div
                key={v.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="bg-white border border-lapis/10 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-saffron bg-saffron/10 border border-saffron/20 px-2.5 py-1 rounded">
                    {v.duration}
                  </span>
                  {v.extendable && (
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      Extendable
                    </span>
                  )}
                </div>
                <h3 className="font-playfair text-xl font-bold text-lapis mb-2">{v.type}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{v.description}</p>
                <ul className="space-y-1.5">
                  {v.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 size={13} className="text-saffron shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Required Documents ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Step 2
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-2">
            Required Documents
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Prepare these documents before submitting your application. Incomplete applications will be rejected.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {requiredDocs.map((item, i) => (
              <motion.div
                key={item.doc}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.07 }}
                className="flex items-start gap-4 bg-white border border-lapis/10 rounded-xl px-5 py-4 shadow-sm"
              >
                <FileText size={18} className="text-saffron shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-lapis">{item.doc}</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── How to Apply ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Step 3
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-2">
            How to Apply
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Follow these steps to submit your Afghan visa application successfully.
          </p>
          <div className="space-y-4">
            {applicationSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                className="flex gap-5 bg-white border border-lapis/10 rounded-2xl px-6 py-5 shadow-sm"
              >
                <span className="font-playfair text-2xl font-bold text-saffron/40 shrink-0 w-8">
                  {s.step}
                </span>
                <div>
                  <p className="font-semibold text-lapis mb-1">{s.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Fees & Processing ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Step 4
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-2">
            Fees & Processing Time
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Fees are paid at the time of application and are non-refundable.
          </p>

          {/* Processing time info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-4 bg-lapis rounded-2xl px-6 py-5">
              <Clock size={22} className="text-saffron shrink-0" />
              <div>
                <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-0.5">Standard Processing</p>
                <p className="text-white font-bold text-lg">5 – 10 business days</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-lapis rounded-2xl px-6 py-5">
              <DollarSign size={22} className="text-saffron shrink-0" />
              <div>
                <p className="text-lapis-tint/60 text-xs uppercase tracking-wider mb-0.5">Express Processing</p>
                <p className="text-white font-bold text-lg">2 – 3 business days</p>
              </div>
            </div>
          </div>

          {/* Fees table */}
          <div className="bg-white border border-lapis/10 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-lapis px-6 py-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-lapis-tint/60">Visa Type</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-lapis-tint/60 text-center">Standard</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-lapis-tint/60 text-center">Express</span>
            </div>
            {feesTable.map((row, i) => (
              <div
                key={row.type}
                className={`grid grid-cols-3 px-6 py-4 items-center ${i !== feesTable.length - 1 ? "border-b border-lapis/8" : ""}`}
              >
                <span className="text-sm font-medium text-lapis">{row.type}</span>
                <span className="text-sm font-bold text-lapis text-center">{row.standard}</span>
                <span className="text-sm font-bold text-saffron text-center">{row.express}</span>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 mt-4">
            <Info size={15} className="text-lapis/40 shrink-0 mt-0.5" />
            <p className="text-xs text-gray-400 leading-relaxed">
              Fees may vary by embassy location and are subject to change. Payments are typically accepted in USD or local currency equivalent. Always confirm with your local embassy.
            </p>
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
              Ready to plan your trip?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Explore provinces, attractions, and hotels across Afghanistan.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/provinces"
              className="text-sm font-semibold text-lapis border border-lapis px-5 py-3 rounded-xl hover:bg-lapis hover:text-white transition-all duration-200 whitespace-nowrap"
            >
              Explore Provinces
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