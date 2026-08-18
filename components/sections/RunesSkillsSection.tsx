"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const runeColors: Record<string, { col: string; glyph: string; label: string }> = {
  "Backend":     { col: "#C8A96E", glyph: "⚔", label: "Combat Arts" },
  "Programming": { col: "#9BA8B4", glyph: "☽", label: "Arcane Tomes" },
  "Mobile":      { col: "#7DBF8E", glyph: "◈", label: "Incantations" },
  "AI / ML":     { col: "#E05A1A", glyph: "✦", label: "Sorceries" },
  "Tools":       { col: "#8A7A6A", glyph: "⬡", label: "Equipment" },
};

export default function RunesSkillsSection() {
  return (
    <section id="skills" style={{ padding: "7rem 0", background: "var(--bg-secondary)", position: "relative" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="eyebrow-line" />
            <span style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.7rem", color: "rgba(200,169,110,0.5)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              01 — Spell & Skill Tree
            </span>
          </div>
          <h2 className="rune-flicker" style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, color: "#C8A96E", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>
            Learned Abilities
          </h2>
          <p style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.9rem", color: "rgba(200,169,110,0.5)", lineHeight: 1.75, maxWidth: 500 }}>
            Spells, incantations, and combat arts mastered through countless cycles of study and battle.
          </p>
        </motion.div>

        {/* Skill grid — Elden Ring item grid style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => {
            const meta = runeColors[skill.category] ?? { col: "#C8A96E", glyph: "◆", label: skill.category };
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                className="relative group border transition-all duration-300"
                style={{
                  borderColor: "rgba(200,169,110,0.2)",
                  background: "rgba(12,10,8,0.7)",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${meta.col}55`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${meta.col}18`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,110,0.2)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Corner marks */}
                {["tl","tr","bl","br"].map(c => <div key={c} className={`rune-corner rune-corner-${c}`} style={{ borderColor: `${meta.col}40` }} />)}

                {/* Glow overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 80% 60% at 30% 30%, ${meta.col}08, transparent)` }} />

                <div className="relative z-10 p-5">
                  {/* Category header */}
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b" style={{ borderColor: "rgba(200,169,110,0.18)" }}>
                    <div className="w-8 h-8 flex items-center justify-center border text-sm"
                      style={{ borderColor: `${meta.col}35`, background: `${meta.col}0c`, color: meta.col }}>
                      {meta.glyph}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: meta.col }}>
                        {skill.category}
                      </div>
                      <div style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.6rem", color: "rgba(200,169,110,0.35)", letterSpacing: "0.06em" }}>
                        {meta.label}
                      </div>
                    </div>
                  </div>

                  {/* Skill items — GOW list style */}
                  <div className="space-y-1.5">
                    {skill.items.map((item, j) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 + j * 0.04 }}
                        className="flex items-center gap-2 py-1 px-2 transition-all duration-200"
                        style={{ borderLeft: "1px solid transparent" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderLeftColor = meta.col; (e.currentTarget as HTMLElement).style.paddingLeft = "10px"; (e.currentTarget as HTMLElement).style.background = `${meta.col}06`; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent"; (e.currentTarget as HTMLElement).style.paddingLeft = "8px"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                      >
                        <span style={{ color: `${meta.col}60`, fontSize: "0.45rem" }}>◆</span>
                        <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.7rem", letterSpacing: "0.06em", color: "rgba(232,220,200,0.75)" }}>
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
