"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: "🏔️",
    title: "Untouched landscapes",
    desc: "From the azure lakes of Band-e-Amir to the Wakhan Corridor — some of the world's most dramatic and least-visited landscapes await.",
  },
  {
    icon: "🏛️",
    title: "Living history",
    desc: "Walk through 3,000 years of civilization — Alexander the Great, the Silk Road, Timurid architecture, and Mughal gardens.",
  },
  {
    icon: "🫖",
    title: "Legendary hospitality",
    desc: "Afghans say: 'A guest is a gift from God.' Experience melmastia — hospitality so genuine it changes how you see the world.",
  },
];

export default function WhyVisit() {
  return (
    <section className="bg-lapis py-24 px-6" id="why">
      <div className="max-w-6xl mx-auto">
        <div className="[&_.section-title]:text-white [&_.section-sub]:text-lapis-tint/80">
          <SectionHeader
            eyebrow="Why Afghanistan"
            // ✅ FIX: Keep as a plain string — SectionHeader uses dangerouslySetInnerHTML
            // so <br/> renders as a real line break. No JSX fragment needed.
            title="The world's best-kept<br/>travel secret"
            subtitle="A land of extraordinary hospitality, ancient heritage, and landscapes that challenge every expectation."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/8 rounded-2xl overflow-hidden mt-14">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-10 bg-white/4 hover:bg-white/8 transition-colors border-r border-white/6 last:border-r-0"
            >
              <div className="w-13 h-13 rounded-xl bg-saffron/15 border border-saffron/25 flex items-center justify-center text-2xl mb-6">
                {r.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold text-white mb-3">{r.title}</h3>
              <p className="text-sm text-lapis-tint/70 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}