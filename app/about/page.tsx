"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe, Heart, Lightbulb, MapPin, Phone, ExternalLink, Code2, Layers, Database, Smartphone } from "lucide-react";
import Link from "next/link";

const skills = [
  { icon: <Code2 size={18} />, label: "Next.js & TypeScript" },
  { icon: <Layers size={18} />, label: "Tailwind CSS & Framer Motion" },
  { icon: <Database size={18} />, label: "PostgreSQL & Supabase" },
  { icon: <Smartphone size={18} />, label: "Responsive & RTL Design" },
];

const values = [
  {
    icon: <Globe size={22} className="text-saffron" />,
    title: "Authentic Representation",
    description: "We show Afghanistan as it truly is — rich in culture, history, and natural beauty — not through the lens of conflict or crisis.",
  },
  {
    icon: <Heart size={22} className="text-saffron" />,
    title: "Built with Pride",
    description: "AfghanRoutes is made by Afghans, for the world. Every province, attraction, and story is chosen with deep respect for the land.",
  },
  {
    icon: <Lightbulb size={22} className="text-saffron" />,
    title: "Empowering Tourism",
    description: "We believe tourism is a force for connection and economic growth. Our goal is to open Afghanistan to curious, respectful travellers.",
  },
];

const missionPoints = [
  "Provide accurate, up-to-date travel information for all 34 provinces",
  "Connect travellers with vetted hotels, guides, and local experiences",
  "Celebrate Afghan culture, history, and natural heritage",
  "Support Afghan tourism businesses and local communities",
  "Make trip planning accessible in Dari, Pashto, and English",
];

const visionPoints = [
  "Afghanistan becomes a recognized destination on the world travel map",
  "Millions of travellers discover the real Afghanistan — its warmth and wonder",
  "Local tourism creates sustainable livelihoods across all regions",
  "Afghan heritage sites are preserved and celebrated globally",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sand">

      {/* ── Header ── */}
      <div className="bg-lapis pt-32 pb-20 px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
          Who We Are
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
          About AfghanRoutes
        </h1>
        <p className="text-lapis-tint/75 text-lg max-w-xl mx-auto leading-relaxed">
          A platform built to share the beauty, culture, and spirit of Afghanistan with the world.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-24">

        {/* ── About section ── */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Our Story
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-5">
            Why AfghanRoutes Exists
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Afghanistan is one of the world's most misunderstood countries. For decades, international headlines have focused on conflict — yet beneath the surface lies a land of extraordinary beauty, ancient civilization, and some of the warmest people you will ever meet.
            </p>
            <p>
              AfghanRoutes was created to change that narrative. We believe every traveller who has ever stood at the edge of Band-e-Amir's sapphire lakes, walked the tiled courtyards of Herat's Friday Mosque, or shared tea in a Panjshir village comes home changed — carrying a story the world needs to hear.
            </p>
            <p>
              Our platform brings together detailed province guides, top attractions, vetted accommodations, and practical travel information — all in one place, in multiple languages, built by an Afghan developer who is proud of every pixel.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-white border border-lapis/10 rounded-2xl p-6 shadow-sm"
              >
                <div className="mb-3">{v.icon}</div>
                <h3 className="font-playfair text-lg font-bold text-lapis mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Mission section ── */}
        <motion.section
          id="mission"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Our Mission
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-5">
            What We're Here to Do
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our mission is to be the most trusted, comprehensive, and beautifully presented travel resource for Afghanistan — making it easier than ever for curious travellers to discover, plan, and experience this remarkable country.
          </p>
          <div className="bg-lapis rounded-2xl p-8">
            <div className="space-y-4">
              {missionPoints.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 size={18} className="text-saffron shrink-0 mt-0.5" />
                  <p className="text-white/85 text-sm leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── Vision section ── */}
        <motion.section
          id="vision"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            Our Vision
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-5">
            The Afghanistan We're Working Toward
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We envision a future where Afghanistan is celebrated as one of Asia's most extraordinary travel destinations — where its ancient Silk Road heritage, breathtaking landscapes, and legendary hospitality are known to the world.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {visionPoints.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                className="flex items-start gap-3 bg-saffron/8 border border-saffron/20 rounded-xl px-5 py-4"
              >
                <CheckCircle2 size={16} className="text-saffron shrink-0 mt-0.5" />
                <p className="text-sm text-lapis leading-relaxed font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Developer section ── */}
        <motion.section
          id="developer"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-saffron mb-3">
            The Developer
          </p>
          <h2 className="font-playfair text-3xl font-bold text-lapis mb-8">
            Built by an Afghan Developer
          </h2>

          <div className="bg-white border border-lapis/10 rounded-2xl shadow-sm overflow-hidden">
            {/* Top banner */}
            <div className="bg-lapis px-8 py-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Avatar initials */}
              <div className="w-20 h-20 rounded-2xl bg-saffron flex items-center justify-center shrink-0">
                <span className="font-playfair text-2xl font-bold text-lapis">AY</span>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-1">
                  Amanullah Yawari
                </h3>
                <p className="text-saffron text-sm font-semibold mb-2">
                  Full-Stack Developer · Kabul, Afghanistan
                </p>
                <p className="text-lapis-tint/70 text-sm leading-relaxed max-w-lg">
                  Afghan developer with 7+ years of experience building modern web applications. Passionate about using technology to showcase Afghanistan's culture and connect it with the world.
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="px-8 py-7 space-y-7">

              {/* About text */}
              <p className="text-gray-600 text-base leading-relaxed">
                I built AfghanRoutes from scratch — every component, every animation, every line of code — because I believe Afghanistan deserves a world-class travel platform. This project is personal to me: it's my home, my culture, and my people. I wanted to build something that Afghans can be proud of and that the world can use to discover the real Afghanistan.
              </p>

              {/* Skills */}
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-lapis/50 mb-4">
                  Tech Stack
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((s, i) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-3 bg-sand border border-lapis/10 rounded-xl px-4 py-3"
                    >
                      <span className="text-saffron">{s.icon}</span>
                      <span className="text-sm font-medium text-lapis">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact links */}
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-lapis/50 mb-4">
                  Get in Touch
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="https://yawari.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-lapis text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-lapis/90 transition-all"
                  >
                    <Globe size={15} />
                    Portfolio
                    <ExternalLink size={13} className="opacity-60" />
                  </Link>
                  <Link
                    href="https://wa.me/93787484323"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-all"
                  >
                    <Phone size={15} />
                    WhatsApp
                    <ExternalLink size={13} className="opacity-60" />
                  </Link>
                  <Link
                    href="tel:+93787484323"
                    className="inline-flex items-center gap-2 border border-lapis/20 text-lapis text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-lapis hover:text-white transition-all"
                  >
                    <MapPin size={15} />
                    +93 787 484 323
                  </Link>
                </div>
              </div>

            </div>
          </div>
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
              Start exploring Afghanistan
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Discover provinces, attractions, hotels, and plan your full trip.
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