"use client";

import { motion } from "framer-motion";
import { focusAreas } from "@/lib/data";

const loreItems = [
  {
    icon: "⚔",
    title: "Backend Warlord",
    desc: "Node.js, Flask, REST APIs, Docker, Firebase — forging battle-tested server-side systems that hold under siege.",
    ember: false,
  },
  {
    icon: "📜",
    title: "Mobile Rune-Scribe",
    desc: "Flutter & Dart — inscribing cross-platform spells that run natively on every device.",
    ember: false,
  },
  {
    icon: "☽",
    title: "Arcane AI Weaver",
    desc: "RAG pipelines, LLM integration, TensorFlow — channeling machine intelligence into real artifacts.",
    ember: true,
  },
  {
    icon: "🛡",
    title: "Guardian of Systems",
    desc: "SAST/DAST, Docker, Linux — protecting the realm with a security-first engineering ethos.",
    ember: false,
  },
];

const fade = (delay = 0, x = 0) => ({
  initial: { opacity: 0, y: 24, x },
  whileInView: { opacity: 1, y: 0, x: 0 },
  viewport: { once: true, margin: "-60px" } as { once: boolean; margin: string },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
});

export default function RunesAboutSection() {
  return (
    <section id="about" style={{ padding: "7rem 0", background: "var(--bg-primary)", position: "relative" }}>

      {/* Vertical side lines */}
      {[0, 100].map((pos, i) => (
        <div key={i} aria-hidden="true" className="absolute top-0 bottom-0 w-px pointer-events-none"
          style={{ left: `${pos}%`, background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.08), transparent)" }} />
      ))}

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* ── Section header ── */}
        <motion.div {...fade(0)} className="mb-14 text-center">
          <div style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.7rem", color: "rgba(200,169,110,0.4)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            ✦ &nbsp; Lore of the Architect &nbsp; ✦
          </div>
          <h2 className="rune-flicker" style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#C8A96E", letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: "0.5rem" }}>
            The Codex
          </h2>
          <div className="gow-divider max-w-xs mx-auto"><span className="gow-divider-icon">◆</span></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT — Lore text */}
          <motion.div {...fade(0.1, -20)}>
            {/* Parchment-style text block */}
            <div className="relative p-6 border" style={{ borderColor: "rgba(200,169,110,0.22)", background: "rgba(12,10,8,0.7)" }}>
              {/* Corner runes */}
              {["tl","tr","bl","br"].map(c => <div key={c} className={`rune-corner rune-corner-${c}`} />)}

              <div className="space-y-4" style={{ fontFamily: "'IM Fell English', serif", fontSize: "0.94rem", lineHeight: 1.9, color: "rgba(232,220,200,0.72)", fontStyle: "italic" }}>
                <p>
                  In the ancient scrolls of <strong style={{ color: "#C8A96E", fontStyle: "normal", fontFamily: "'Cinzel', serif" }}>IIIT Senapati, Manipur</strong>, there is written of a craftsman who wields both axe and rune — one who builds not for glory, but to understand the deep machinery beneath all things.
                </p>
                <p>
                  He walks the path of <strong style={{ color: "#C8A96E", fontStyle: "normal", fontFamily: "'Cinzel', serif" }}>Backend Engineering</strong>, scribing REST scrolls and kindling Docker fires. His Flutter incantations run on all realms simultaneously, without compromise.
                </p>
                <p>
                  In the arcane arts, he channels <strong style={{ color: "#C8A96E", fontStyle: "normal", fontFamily: "'Cinzel', serif" }}>RAG pipelines</strong> and local LLMs — intelligence without surrender to the cloud. His OmniScan ward detects threats before they manifest.
                </p>
              </div>

              {/* Quote inscribed at bottom */}
              <div className="mt-5 pt-4 border-t" style={{ borderColor: "rgba(200,169,110,0.2)" }}>
                <p style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.85rem", color: "rgba(200,169,110,0.55)", textAlign: "center", lineHeight: 1.7 }}>
                  &ldquo;I like to code. I like to build.<br />
                  And I like figuring out how things work <em>under the hood.</em>&rdquo;
                </p>
              </div>
            </div>

            {/* Rune stats row */}
            <div className="flex gap-6 mt-6 justify-center">
              {[{ num: "2+", label: "Seasons" }, { num: "5+", label: "Quests" }, { num: "3", label: "Realms" }].map(s => (
                <div key={s.label} className="text-center">
                  <div className="rune-flicker" style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1.7rem", fontWeight: 900, color: "#C8A96E" }}>{s.num}</div>
                  <div style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.62rem", color: "rgba(200,169,110,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Ability cards (GOW options list style) */}
          <motion.div {...fade(0.18, 20)}>
            <div style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.65rem", color: "rgba(200,169,110,0.38)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.8rem" }}>
              ◆ &nbsp; Skills & Abilities
            </div>

            <div className="border" style={{ borderColor: "rgba(200,169,110,0.22)", background: "rgba(12,10,8,0.5)" }}>
              {loreItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  className="rune-menu-row group"
                >
                  <div className="flex gap-3.5 items-start w-full">
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0 text-base border"
                      style={{
                        borderColor: item.ember ? "rgba(224,90,26,0.35)" : "rgba(200,169,110,0.25)",
                        background: item.ember ? "rgba(224,90,26,0.07)" : "rgba(200,169,110,0.05)",
                        color: item.ember ? "#E05A1A" : "#C8A96E",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.78rem", fontWeight: 600, color: "#E8DCC8", letterSpacing: "0.06em", marginBottom: "0.2rem" }}>
                        {item.title}
                      </div>
                      <div style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.78rem", color: "rgba(200,169,110,0.5)", lineHeight: 1.6 }}>
                        {item.desc}
                      </div>
                    </div>
                    <span style={{ color: "rgba(200,169,110,0.25)", fontSize: "0.7rem", flexShrink: 0, alignSelf: "center" }}>›</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Rune tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {["Backend Dev", "Flutter", "AI / ML", "Open Source", "Problem Solver", "DSA"].map(tag => (
                <span key={tag}
                  className="px-3 py-1 border text-[11px] transition-all duration-200 cursor-default"
                  style={{ fontFamily: "'Cinzel', serif", borderColor: "rgba(200,169,110,0.2)", background: "rgba(200,169,110,0.04)", color: "rgba(200,169,110,0.5)", letterSpacing: "0.06em" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(200,169,110,0.5)"; e.currentTarget.style.color = "#C8A96E"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(200,169,110,0.2)"; e.currentTarget.style.color = "rgba(200,169,110,0.5)"; }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
