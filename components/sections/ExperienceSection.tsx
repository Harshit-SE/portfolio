"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  const { isGame } = useMode();

  return (
    <section id="experience" style={{ padding: "7rem 0", background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader
          index="03"
          label="Experience"
          title="Journey So Far"
          subtitle="Academic projects and self-driven engineering, building a foundation for industry work."
        />

        {/* Timeline */}
        <div className="relative pl-8 md:pl-10">
          {/* Line */}
          <div
            className="absolute left-0 top-2 bottom-0 w-px"
            style={{ background: "var(--timeline-line)" }}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => {
              const dotColor = isGame ? exp.gameDotColor : exp.dotColor;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* Dot */}
                  <motion.div
                    className="absolute top-1.5 w-[13px] h-[13px] rounded-full border-2"
                    style={{
                      left: "-2.55rem",
                      borderColor: dotColor,
                      background: "var(--bg-secondary)",
                      boxShadow: `0 0 12px ${dotColor}55`,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 300 }}
                  />

                  <div
                    className="font-mono text-[11px] tracking-[0.1em] mb-2"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
                  >
                    {exp.period}
                  </div>

                  <h3
                    className="font-display font-semibold text-[1.12rem] mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    {exp.role}
                  </h3>

                  <div
                    className="font-mono text-[13px] mb-3"
                    style={{ fontFamily: "var(--font-mono)", color: dotColor }}
                  >
                    {isGame ? `>> ${exp.company}` : exp.company}
                  </div>

                  <p
                    className="text-[0.9rem] leading-[1.75] max-w-2xl"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {exp.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
