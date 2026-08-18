"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { focusAreas } from "@/lib/data";

const stats = [
  { num: "7.02",  label: "CGPA / 10" },
  { num: "3+",    label: "Projects" },
  { num: "1",     label: "Internship" },
];

const tags = ["Backend Dev", "Data Analytics", "AI / ML", "Flutter", "Problem Solver", "DSA", "C++17"];

const card = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as { once: boolean; margin: string },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
});

export default function AboutSection() {
  const { isGame } = useMode();

  return (
    <section id="about" style={{ padding: "7rem 0", background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div {...card(0)}>
            <SectionHeader index="00" label="About"
              title={<>Building things<br />that <em className="not-italic" style={{ color: "var(--gold-bright)" }}>matter.</em></>}
            />

            <div className="space-y-4 text-[0.97rem] leading-[1.85]" style={{ color: "var(--text-secondary)" }}>
              <p>
                I&apos;m a CSE undergraduate at{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>IIIT Senapati, Manipur</strong>{" "}
                (B.Tech 2023–2027), driven by curiosity about how systems work at their core — from backend APIs to low-level C++ engines.
              </p>
              <p>
                I recently completed a{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>Data Analyst Internship at Varun Beverages Limited</strong>{" "}
                where I built Market Basket Analysis and Customer Churn Prediction pipelines with interactive Streamlit dashboards for real business decisions.
              </p>
              <p>
                Beyond data, I build{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>AI security tools</strong> (OmniScan AI — local LLM + RAG),{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>production mobile apps</strong> (AGRIHIVE — 92% accurate CNN, Flutter), and{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>systems software</strong> (NovaVCS — custom VCS in C++17).
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display font-black text-3xl"
                    style={{ fontFamily: "var(--font-display)", background: "linear-gradient(135deg,var(--gold-mid),var(--gold-bright))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {s.num}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.12em] uppercase mt-1"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((t) => (
                <span key={t}
                  className="px-3 py-1 font-mono text-[11px] tracking-[0.06em] border transition-all duration-200 cursor-default"
                  style={{ fontFamily: "var(--font-mono)", borderRadius: "var(--card-radius)", background: "var(--bg-card)", borderColor: "var(--border-main)", color: "var(--text-secondary)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-bright)"; e.currentTarget.style.color = "var(--gold-bright)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-main)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Focus Card */}
          <motion.div {...card(0.15)}>
            <div className="relative rounded-lg border p-8 overflow-hidden"
              style={{ borderRadius: 8, borderColor: "var(--border-main)", background: "var(--bg-card)" }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg,transparent,var(--gold-bright),transparent)", opacity: 0.6 }} />

              <div className="font-mono text-[10px] tracking-[0.14em] uppercase mb-6"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                {isGame ? ">> FOCUS AREAS" : "// FOCUS AREAS"}
              </div>

              <div className="space-y-5">
                {focusAreas.map((area) => (
                  <div key={area.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: area.bg }}>
                      {area.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-[15px] mb-1" style={{ color: "var(--text-primary)" }}>{area.title}</div>
                      <div className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{area.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
