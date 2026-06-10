"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const links = [
  { href: "/provinces", label: "Provinces" },
  { href: "/hotels",    label: "Hotels" },
  { href: "/#why",      label: "Why visit" },
  { href: "/planner",   label: "Trip planner" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        scrolled
          ? "bg-lapis/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-18 py-4">
        {/* Logo */}
        <Link href="/" className="font-playfair text-xl font-bold text-white tracking-tight">
          Afghan<span className="text-saffron">Routes</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-saffron-light transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/planner"
            className="bg-saffron text-lapis text-sm font-semibold px-5 py-2 rounded-lg hover:bg-saffron-light transition-all hover:-translate-y-0.5"
          >
            Plan trip
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-lapis border-t border-white/10 px-6 py-6 flex flex-col gap-4"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 text-base font-medium hover:text-saffron-light transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/planner"
              onClick={() => setOpen(false)}
              className="bg-saffron text-lapis text-sm font-semibold px-5 py-3 rounded-lg text-center mt-2"
            >
              Plan trip
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}