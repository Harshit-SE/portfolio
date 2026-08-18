"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  index: string;
  label: string;
  title: ReactNode;
  subtitle?: string;
}

export default function SectionHeader({ index, label, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14"
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3">
        <div className="eyebrow-line" />
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--gold-bright)]">
          {index} — {label}
        </span>
      </div>

      {/* Title */}
      <h2
        className="font-display font-bold leading-[1.05] mb-3"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem,4.5vw,3rem)",
          letterSpacing: "-0.02em",
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="leading-relaxed max-w-xl"
          style={{ color: "var(--text-secondary)", fontSize: "0.97rem", lineHeight: 1.75 }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
