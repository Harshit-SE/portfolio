"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { achievements } from "@/lib/data";

export default function AchievementsSection() {
  return (
    <section id="achievements" style={{ padding: "7rem 0", background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader
          index="04"
          label="Achievements"
          title="Wins & Milestones"
          subtitle="Benchmarks that reflect consistency, problem-solving ability, and real-world delivery."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative border p-7 overflow-hidden transition-all duration-300 cursor-default"
              style={{
                borderRadius: "var(--card-radius)",
                borderColor: "var(--border-main)",
                background: "var(--bg-card)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-bright)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-main)";
              }}
            >
              {/* Top bar reveal on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left"
                style={{
                  background: "linear-gradient(90deg,var(--gold-bright),var(--accent2))",
                }}
              />

              <div className="text-[1.7rem] mb-4">{item.icon}</div>

              {item.num && (
                <div
                  className="font-display font-black text-3xl mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    background: "linear-gradient(135deg,var(--gold-mid),var(--gold-bright))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.num}
                </div>
              )}

              <h3
                className="font-display font-semibold text-[1rem] mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                {item.title}
              </h3>

              <p className="text-[0.84rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
