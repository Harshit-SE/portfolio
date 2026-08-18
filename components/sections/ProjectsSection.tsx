"use client";

import { motion } from "framer-motion";
import { GitFork, ExternalLink } from "lucide-react";
import { useMode } from "@/context/ModeContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const { isGame } = useMode();

  return (
    <section id="projects" style={{ padding: "7rem 0", background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader
          index="02"
          label="Projects"
          title="What I've Built"
          subtitle="Production-grade projects spanning AI security, agriculture ML, and mobile. Each one ships real value."
        />

        <div className="flex flex-col gap-5">
          {projects.map((project, i) => {
            const accent = isGame ? project.gameAccent : project.accentColor;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="group relative border p-9 md:p-10 overflow-hidden transition-all duration-400"
                style={{
                  borderRadius: "var(--card-radius)",
                  borderColor: `${accent}25`,
                  background: "var(--bg-card)",
                  ...(isGame ? { borderLeft: `2px solid ${accent}40` } : {}),
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${accent}45`;
                  el.style.boxShadow = "var(--shadow-glow)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${accent}25`;
                  el.style.boxShadow = "none";
                }}
              >
                {/* Hover glow */}
                <div className="card-glow-overlay" />

                <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-start">
                  <div>
                    {/* Meta */}
                    <div
                      className="flex flex-wrap gap-3 mb-3 font-mono text-[11px] tracking-[0.06em]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {project.meta.map((m, mi) => (
                        <span key={mi} style={{ color: mi === 0 ? accent : "var(--text-muted)" }}>
                          {m}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3
                      className="font-display font-bold mb-2 leading-tight"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.4rem,3vw,1.7rem)",
                        letterSpacing: "-0.02em",
                        color: "var(--text-primary)",
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[0.94rem] leading-[1.78] mb-5"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {project.description}
                    </p>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 font-mono text-[11px] border"
                          style={{
                            fontFamily: "var(--font-mono)",
                            borderRadius: "var(--card-radius)",
                            background: `${accent}0d`,
                            borderColor: `${accent}35`,
                            color: accent,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 font-mono text-[11px] tracking-wider border transition-all duration-200"
                        style={{
                          fontFamily: "var(--font-mono)",
                          borderRadius: "var(--card-radius)",
                          background: "var(--bg-card)",
                          borderColor: "var(--border-main)",
                          color: "var(--text-secondary)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--text-primary)";
                          e.currentTarget.style.color = "var(--text-primary)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-main)";
                          e.currentTarget.style.color = "var(--text-secondary)";
                        }}
                      >
                        <GitFork size={13} /> GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 font-mono text-[11px] tracking-wider border transition-all duration-200"
                        style={{
                          fontFamily: "var(--font-mono)",
                          borderRadius: "var(--card-radius)",
                          background: `${accent}0d`,
                          borderColor: `${accent}38`,
                          color: accent,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${accent}18`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `${accent}0d`;
                        }}
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Big number */}
                  <div
                    className="hidden md:block font-display font-black leading-none select-none"
                    style={{
                      fontFamily: isGame ? "'Orbitron',sans-serif" : "var(--font-display)",
                      fontSize: "5rem",
                      color: "rgba(255,255,255,0.04)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {project.id}
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
