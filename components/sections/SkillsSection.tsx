"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { skills } from "@/lib/data";

export default function SkillsSection() {
  const { isGame } = useMode();

  return (
    <section id="skills" style={{ padding: "7rem 0", background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader
          index="01"
          label="Skills"
          title="Tech Arsenal"
          subtitle="Tools and technologies powering production-grade systems, mobile apps, and AI pipelines."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => {
            const color = isGame ? skill.gameColor : skill.color;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="group relative border p-6 overflow-hidden transition-all duration-300 cursor-default"
                style={{
                  borderRadius: "var(--card-radius)",
                  borderColor: "var(--border-main)",
                  background: "var(--bg-card)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border-bright)";
                  el.style.boxShadow = "var(--shadow-glow)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border-main)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 30% 30%, ${color}12, transparent)`,
                  }}
                />

                {/* Category */}
                <div
                  className="flex items-center gap-2 mb-4 font-mono text-[11px] tracking-[0.14em] uppercase relative z-10"
                  style={{ fontFamily: "var(--font-mono)", color }}
                >
                  <span
                    className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                    style={{ background: color }}
                  />
                  {skill.category}
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-[5px] font-mono text-[11px] tracking-[0.04em] border transition-all duration-200"
                      style={{
                        fontFamily: "var(--font-mono)",
                        borderRadius: "var(--card-radius)",
                        background: "var(--bg-card)",
                        borderColor: "var(--border-main)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
