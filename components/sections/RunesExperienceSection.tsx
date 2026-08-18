"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

const runeChapters = ["I", "II", "III"];

export default function RunesExperienceSection() {
  return (
    <section id="experience" style={{ padding: "7rem 0", background: "var(--bg-secondary)", position: "relative" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="eyebrow-line" />
            <span style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.7rem", color: "rgba(200,169,110,0.5)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              03 — The Saga
            </span>
          </div>
          <h2 className="rune-flicker" style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, color: "#C8A96E", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>
            Journey of the Architect
          </h2>
        </motion.div>

        {/* Timeline — Grace sites (Elden Ring bonfire equivalent) */}
        <div className="relative pl-10 md:pl-14">
          {/* Rune timeline line */}
          <div className="absolute left-0 top-3 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #C8A96E, rgba(200,169,110,0.3), transparent)" }} />

          <div className="flex flex-col gap-14">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative"
              >
                {/* Grace site marker */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 280 }}
                  className="absolute ember-pulse"
                  style={{
                    left: "-3.2rem",
                    top: 4,
                    width: 18,
                    height: 18,
                    border: "2px solid #C8A96E",
                    background: "radial-gradient(circle, rgba(200,169,110,0.25) 0%, rgba(12,10,8,0.9) 70%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: 6, height: 6, background: "#C8A96E", borderRadius: "50%" }} />
                </motion.div>

                {/* Chapter card */}
                <div className="relative border p-6" style={{ borderColor: "rgba(200,169,110,0.18)", background: "rgba(12,10,8,0.6)" }}>
                  {["tl","tr","bl","br"].map(c => <div key={c} className={`rune-corner rune-corner-${c}`} />)}

                  {/* Chapter label */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.65rem", color: "rgba(200,169,110,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                        Chapter {runeChapters[i]} &nbsp;·&nbsp; {exp.period}
                      </div>
                      <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.05rem", fontWeight: 700, color: "#E8DCC8", letterSpacing: "0.02em", marginBottom: "0.2rem" }}>
                        {exp.role}
                      </h3>
                      <div style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.82rem", color: "#C8A96E" }}>
                        {exp.company}
                      </div>
                    </div>
                    {/* Roman numeral */}
                    <div className="rune-flicker hidden md:block"
                      style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "2rem", fontWeight: 900, color: "rgba(200,169,110,0.08)" }}>
                      {runeChapters[i]}
                    </div>
                  </div>

                  <div className="gow-divider" style={{ marginBottom: "0.75rem" }}><span className="gow-divider-icon" style={{ fontSize: "0.55rem" }}>✦</span></div>

                  <p style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(232,220,200,0.6)", maxWidth: 680 }}>
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
