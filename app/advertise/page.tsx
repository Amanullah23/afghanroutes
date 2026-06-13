"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BarChart3, Users, Globe, TrendingUp, CheckCircle2, Star, Layers, FileText, Send } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: <Users size={22} className="text-saffron" />,     value: "50,000+",  label: "Monthly Visitors" },
  { icon: <Globe size={22} className="text-saffron" />,     value: "80+",      label: "Countries Reached" },
  { icon: <BarChart3 size={22} className="text-saffron" />, value: "200,000+", label: "Monthly Page Views" },
  { icon: <TrendingUp size={22} className="text-saffron" />,value: "4.2 min",  label: "Avg. Time on Site" },
];

const advertisers = [
  { emoji: "🏨", label: "Hotels & Guesthouses" },
  { emoji: "✈️", label: "Airlines & Transport" },
  { emoji: "🍽️", label: "Local Restaurants" },
];

const placements = [
  {
    icon: <Layers size={20} className="text-saffron" />,
    title: "Banner Ads",
    description: "High-visibility banner placements on homepage, province pages, and attraction detail pages. Reach travellers at the moment of discovery.",
    positions: ["Homepage hero banner", "Province listing page", "Attraction detail sidebar", "Hotel listing page"],
  },
  {
    icon: <Star size={20} className="text-saffron" />,
    title: "Featured Listings",
    description: "Appear at the top of hotel, attraction, or province listings with a 'Featured' badge. The most effective way to stand out.",
    positions: ["Featured hotel card", "Top of search results", "Homepage featured section", "Province page spotlight"],
  },
  {
    icon: <FileText size={20} className="text-saffron" />,
    title: "Sponsored Content",
    description: "A dedicated article or guide about your business, attraction, or service — written professionally and published on AfghanRoutes.",
    positions: ["Sponsored province guide", "Travel tips article", "Hotel spotlight feature", "Destination story"],
  },
];

const packages = [
  {
    name: "Starter",
    price: "$49",
    period: "/ month",
    description: "Perfect for small guesthouses and local restaurants just getting started.",
    color: "border-lapis/15",
    badge: "",
    features: [
      "1 banner ad placement",
      "Province page visibility",
      "Basic listing page",
      "Monthly performance report",
      "Email support",
    ],
    notIncluded: ["Featured listing badge", "Sponsored content article", "Priority placement"],
  },
  {
    name: "Growth",
    price: "$119",
    period: "/ month",
    description: "Ideal for hotels, restaurants, and transport businesses wanting more reach.",
    color: "border-lapis",
    badge: "Most Popular",
    features: [
      "3 banner ad placements",
      "Featured listing badge",
      "Homepage visibility",
      "Weekly performance report",
      "Priority email support",
      "Social media mention",
    ],
    notIncluded: ["Sponsored content article"],
  },
  {
    name: "Premium",
    price: "$249",
    period: "/ month",
    description: "Full-visibility package for airlines, hotel chains, and major travel brands.",
    color: "border-saffron/40",
    badge: "Best Value",
    features: [
      "Unlimited banner placements",
      "Featured listing — all pages",
      "1 sponsored content article",
      "Homepage hero feature",
      "Daily performance dashboard",
      "Dedicated account manager",
      "Social media campaign",
    ],
    notIncluded: [],
  },
];

export default function AdvertisePage() {
  const [form, setForm] = useState({
    name: "", business: "", email: "", phone: "", type: "", package: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with Web3Forms or your API
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-sand">

      {/* ── Header ── */}
      <div className="bg-lapis pt-32 pb-20 px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
          Grow Your Business
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
          Advertise With Us
        </h1>
        <p className="text-lapis-tint/75 text-lg max-w-xl mx-auto leading-relaxed">
          Reach thousands of travellers planning their trip to Afghanistan — put your business in front of the right audience.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-24">

        {/* ── Audience stats ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Our Audience
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-2">
            Who You'll Reach
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            AfghanRoutes attracts a highly engaged global audience of travellers, researchers, and diaspora actively planning trips to Afghanistan.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="bg-white border border-lapis/10 rounded-2xl p-5 text-center shadow-sm"
              >
                <div className="flex justify-center mb-3">{s.icon}</div>
                <p className="font-playfair text-2xl font-bold text-lapis mb-1">{s.value}</p>
                <p className="text-xs text-gray-400 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Who advertises */}
          <div className="mt-8 bg-lapis rounded-2xl px-8 py-6">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-4">
              Who Advertises on AfghanRoutes
            </p>
            <div className="flex flex-wrap gap-4">
              {advertisers.map((a) => (
                <div key={a.label} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <span className="text-lg">{a.emoji}</span>
                  <span className="text-white text-sm font-medium">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── Ad placements ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Ad Options
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-2">
            Placement Options
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Choose how and where your business appears across AfghanRoutes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {placements.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-white border border-lapis/10 rounded-2xl p-6 shadow-sm"
              >
                <div className="mb-3">{p.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-lapis mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.description}</p>
                <ul className="space-y-2">
                  {p.positions.map((pos) => (
                    <li key={pos} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle2 size={13} className="text-saffron shrink-0" />
                      {pos}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Pricing packages ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Pricing
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-2">
            Choose Your Package
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Flexible monthly plans for every budget. Cancel anytime.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                className={`relative bg-white border-2 ${pkg.color} rounded-2xl p-6 shadow-sm flex flex-col`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-saffron text-lapis text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {pkg.badge}
                  </span>
                )}
                <div className="mb-5">
                  <h3 className="font-playfair text-xl font-bold text-lapis mb-1">{pkg.name}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">{pkg.description}</p>
                  <div className="flex items-end gap-1">
                    <span className="font-playfair text-4xl font-bold text-lapis">{pkg.price}</span>
                    <span className="text-gray-400 text-sm mb-1">{pkg.period}</span>
                  </div>
                </div>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-saffron shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                  {pkg.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300 line-through">
                      <CheckCircle2 size={14} className="text-gray-200 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    setForm((prev) => ({ ...prev, package: pkg.name }));
                    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full text-sm font-semibold py-3 rounded-xl transition-all duration-200 ${
                    pkg.badge === "Most Popular"
                      ? "bg-lapis text-white hover:bg-lapis/90"
                      : pkg.badge === "Best Value"
                      ? "bg-saffron text-lapis hover:bg-saffron/90"
                      : "border border-lapis text-lapis hover:bg-lapis hover:text-white"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Inquiry form ── */}
        <motion.section
          id="inquiry"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Get In Touch
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-2">
            Send an Inquiry
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Fill in the form below and we'll get back to you within 24 hours.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center"
            >
              <CheckCircle2 size={40} className="text-emerald-500 mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-bold text-lapis mb-2">Inquiry Sent!</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Thank you for reaching out. We'll review your inquiry and get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-lapis/10 rounded-2xl p-8 shadow-sm space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-lapis/60 uppercase tracking-wider block mb-1.5">Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full border border-lapis/15 rounded-xl px-4 py-3 text-sm text-lapis placeholder:text-gray-300 focus:outline-none focus:border-lapis transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-lapis/60 uppercase tracking-wider block mb-1.5">Business Name *</label>
                  <input
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    required
                    placeholder="Your hotel, restaurant, or brand"
                    className="w-full border border-lapis/15 rounded-xl px-4 py-3 text-sm text-lapis placeholder:text-gray-300 focus:outline-none focus:border-lapis transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-lapis/60 uppercase tracking-wider block mb-1.5">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full border border-lapis/15 rounded-xl px-4 py-3 text-sm text-lapis placeholder:text-gray-300 focus:outline-none focus:border-lapis transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-lapis/60 uppercase tracking-wider block mb-1.5">Phone / WhatsApp</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+93 ..."
                    className="w-full border border-lapis/15 rounded-xl px-4 py-3 text-sm text-lapis placeholder:text-gray-300 focus:outline-none focus:border-lapis transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-lapis/60 uppercase tracking-wider block mb-1.5">Business Type *</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="w-full border border-lapis/15 rounded-xl px-4 py-3 text-sm text-lapis focus:outline-none focus:border-lapis transition-colors bg-white"
                  >
                    <option value="">Select type...</option>
                    <option>Hotel / Guesthouse</option>
                    <option>Airline / Transport</option>
                    <option>Restaurant / Café</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-lapis/60 uppercase tracking-wider block mb-1.5">Preferred Package</label>
                  <select
                    name="package"
                    value={form.package}
                    onChange={handleChange}
                    className="w-full border border-lapis/15 rounded-xl px-4 py-3 text-sm text-lapis focus:outline-none focus:border-lapis transition-colors bg-white"
                  >
                    <option value="">Select package...</option>
                    <option>Starter — $49/mo</option>
                    <option>Growth — $119/mo</option>
                    <option>Premium — $249/mo</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-lapis/60 uppercase tracking-wider block mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your business and what you're looking to achieve..."
                  className="w-full border border-lapis/15 rounded-xl px-4 py-3 text-sm text-lapis placeholder:text-gray-300 focus:outline-none focus:border-lapis transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-lapis text-white text-sm font-semibold py-3.5 rounded-xl hover:bg-lapis/90 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? "Sending..." : (
                  <>
                    <Send size={15} />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </motion.section>

        {/* ── CTA ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-saffron/10 border border-saffron/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-playfair text-2xl font-bold text-lapis mb-2">
              Have questions first?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reach out directly via WhatsApp or visit the About page to learn more.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="https://wa.me/93787484323"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-emerald-600 text-white px-5 py-3 rounded-xl hover:bg-emerald-700 transition-all duration-200 whitespace-nowrap"
            >
              WhatsApp Us
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold bg-lapis text-white px-5 py-3 rounded-xl hover:bg-lapis/90 transition-all duration-200 whitespace-nowrap"
            >
              About Us
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
  );
}