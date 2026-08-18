"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function RunesProjectsSection() {
  return (
    <section id="projects" style={{ padding: "7rem 0", background: "var(--bg-primary)", position: "relative" }}>

      {/* Atmospheric side glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 80% 50%, rgba(224,90,26,0.04) 0%, transparent 60%)" }} />

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="eyebrow-line" />
            <span style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.7rem", color: "rgba(200,169,110,0.5)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              02 — The Great Works
            </span>
          </div>
          <h2 className="rune-flicker" style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, color: "#C8A96E", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>
            Legacy Dungeons
          </h2>
          <p style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.9rem", color: "rgba(200,169,110,0.5)", lineHeight: 1.75, maxWidth: 500 }}>
            Mighty constructs forged in the heat of battle — each one a testament to craft, endurance, and ingenuity.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative group border transition-all duration-400"
              style={{
                borderColor: "rgba(200,169,110,0.22)",
                borderLeft: "3px solid rgba(200,169,110,0.4)",
                background: "rgba(12,10,8,0.75)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,110,0.45)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(200,169,110,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,110,0.22)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Corner decorations */}
              {["tl","tr","bl","br"].map(c => <div key={c} className={`rune-corner rune-corner-${c}`} />)}

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(200,169,110,0.04), transparent 60%)" }} />

              <div className="relative z-10 p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-start">
                <div>
                  {/* Quest type badge */}
                  <div className="flex items-center gap-3 mb-3">
                    {project.meta.map((m, mi) => (
                      <span key={mi} style={{
                        fontFamily: "'IM Fell English', serif", fontStyle: "italic",
                        fontSize: "0.68rem", letterSpacing: "0.06em",
                        color: mi === 0 ? "#C8A96E" : "rgba(200,169,110,0.4)",
                      }}>
                        {mi > 0 && <span style={{ marginRight: 8, opacity: 0.3 }}>·</span>}
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(1.3rem,3vw,1.7rem)", fontWeight: 900, color: "#C8A96E", letterSpacing: "-0.01em", marginBottom: "0.5rem", lineHeight: 1.1 }}>
                    {project.title}
                  </h3>

                  {/* Lore description */}
                  <p style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.92rem", lineHeight: 1.82, color: "rgba(232,220,200,0.65)", marginBottom: "1.3rem" }}>
                    {project.description}
                  </p>

                  {/* Rune materials (tech stack) */}
                  <div className="mb-4">
                    <div style={{ fontFamily: "'IM Fell English', serif", fontSize: "0.6rem", color: "rgba(200,169,110,0.35)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                      ◆ &nbsp; Materials Used
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map(tech => (
                        <span key={tech}
                          className="px-3 py-1 border text-[11px]"
                          style={{
                            fontFamily: "'Cinzel', serif",
                            borderColor: "rgba(200,169,110,0.28)",
                            background: "rgba(200,169,110,0.05)",
                            color: "#C8A96E",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons — GOW menu style */}
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border transition-all duration-200"
                      style={{ fontFamily: "'Cinzel', serif", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", borderColor: "rgba(200,169,110,0.25)", color: "rgba(200,169,110,0.6)", background: "transparent" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,110,0.55)"; (e.currentTarget as HTMLElement).style.color = "#C8A96E"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,110,0.25)"; (e.currentTarget as HTMLElement).style.color = "rgba(200,169,110,0.6)"; }}
                    >
                      ⬡ &nbsp; Scroll of Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border transition-all duration-200"
                      style={{ fontFamily: "'Cinzel', serif", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", borderColor: "rgba(224,90,26,0.35)", color: "rgba(224,90,26,0.8)", background: "rgba(224,90,26,0.05)" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(224,90,26,0.1)"; (e.currentTarget as HTMLElement).style.color = "#E05A1A"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(224,90,26,0.05)"; (e.currentTarget as HTMLElement).style.color = "rgba(224,90,26,0.8)"; }}
                    >
                      ✦ &nbsp; Enter the Dungeon
                    </a>
                  </div>
                </div>

                {/* Large rune number */}
                <div className="hidden md:block rune-flicker"
                  style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "5rem", fontWeight: 900, color: "rgba(200,169,110,0.05)", letterSpacing: "-0.04em", lineHeight: 1, userSelect: "none" }}>
                  {project.id}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
