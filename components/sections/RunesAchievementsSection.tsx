"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";

const runeLabels = ["The Duelist", "The Scholar", "The Warden", "The Shepherd"];

export default function RunesAchievementsSection() {
  return (
    <section id="achievements" style={{ padding: "7rem 0", background: "var(--bg-primary)", position: "relative" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="eyebrow-line" />
            <span style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.7rem", color: "rgba(200,169,110,0.5)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              04 — Honours & Favours
            </span>
          </div>
          <h2 className="rune-flicker" style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, color: "#C8A96E", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>
            Trophies of War
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              whileHover={{ y: -4 }}
              className="relative group border p-6 overflow-hidden transition-all duration-300 cursor-default"
              style={{ borderColor: "rgba(200,169,110,0.2)", background: "rgba(12,10,8,0.7)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,110,0.48)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(200,169,110,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,110,0.2)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Corner runes */}
              {["tl","tr","bl","br"].map(c => <div key={c} className={`rune-corner rune-corner-${c}`} />)}

              {/* Top ember bar reveal */}
              <div className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                style={{ background: "linear-gradient(90deg, #E05A1A, #C8A96E)" }} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-2xl mb-3">{item.icon}</div>

                {/* Epithet */}
                <div style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.6rem", color: "rgba(200,169,110,0.38)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                  {runeLabels[i]}
                </div>

                {/* Number */}
                {item.num && (
                  <div className="rune-flicker" style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1.8rem", fontWeight: 900, color: "#C8A96E", marginBottom: "0.15rem" }}>
                    {item.num}
                  </div>
                )}

                {/* Title */}
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "0.82rem", fontWeight: 700, color: "#E8DCC8", letterSpacing: "0.04em", marginBottom: "0.5rem" }}>
                  {item.title}
                </h3>

                <div className="gow-divider" style={{ marginBottom: "0.5rem" }}><span className="gow-divider-icon" style={{ fontSize: "0.5rem" }}>✦</span></div>

                {/* Description */}
                <p style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.78rem", lineHeight: 1.65, color: "rgba(200,169,110,0.48)" }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
