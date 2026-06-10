"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PROVINCES = [
  "Bamiyan", "Herat", "Panjshir", "Balkh",
  "Kabul", "Badakhshan", "Kandahar", "Nuristan", "Kunduz",
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pIdx, setPIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  // Province cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPIdx((i) => (i + 1) % PROVINCES.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Star particles canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars = Array.from({ length: 130 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.3,
      o: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.00018 + 0.00004,
      drift: (Math.random() - 0.5) * 0.00008,
      phase: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.001;
      stars.forEach((s) => {
        const opacity = s.o * (0.6 + 0.4 * Math.sin(t + s.phase));
        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,233,238,${opacity.toFixed(2)})`;
        ctx.fill();
        s.y -= s.speed;
        s.x += s.drift;
        if (s.y < -0.01) { s.y = 1.01; s.x = Math.random(); }
        if (s.x < 0) s.x = 1;
        if (s.x > 1) s.x = 0;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-lapis overflow-hidden">
      {/* Stars */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-125 h-125 rounded-full bg-lapis-light/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/5 w-100 h-100 rounded-full bg-saffron/6 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <span className="h-px w-8 bg-saffron/60" />
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-saffron">
            Discover Afghanistan
          </span>
          <span className="h-px w-8 bg-saffron/60" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-playfair text-5xl md:text-7xl lg:text-[88px] font-bold text-white leading-[1.05] mb-5"
        >
          Where every route<br />tells an{" "}
          <em className="not-italic text-saffron-light">ancient story</em>
        </motion.h1>

        {/* Province cycling line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-playfair text-xl md:text-2xl text-lapis-tint/80 mb-8 h-10"
        >
          Explore breathtaking{" "}
          <span
            className="text-saffron-light font-semibold not-italic inline-block transition-all duration-400"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)" }}
          >
            {PROVINCES[pIdx]}
          </span>
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-base md:text-lg text-lapis-tint/75 max-w-xl mx-auto leading-relaxed mb-11"
        >
          From the sapphire lakes of Bamiyan to the minarets of Herat — plan
          your journey across Afghanistan's 34 spectacular provinces.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Link
            href="/provinces"
            className="bg-saffron text-lapis text-sm font-semibold px-8 py-4 rounded-xl hover:bg-saffron-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,160,32,0.4)] transition-all duration-200"
          >
            Explore provinces
          </Link>
          <Link
            href="/planner"
            className="text-white text-sm font-medium px-8 py-4 rounded-xl border border-white/25 hover:border-white/60 hover:bg-white/6 hover:-translate-y-0.5 transition-all duration-200"
          >
            Plan my trip
          </Link>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-lapis-tint/40 text-[11px] tracking-widest uppercase"
      >
        <div className="w-px h-12 bg-linear-to-b from-lapis-tint/50 to-transparent animate-pulse" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}