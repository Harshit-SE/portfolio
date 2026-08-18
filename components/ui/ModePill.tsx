"use client";

import { useMode } from "@/context/ModeContext";
import { motion, AnimatePresence } from "framer-motion";

const labels = { dev: "Dev Mode", game: "Game Mode", runes: "Runes Mode" };
const icons  = { dev: "⚙", game: "🎮", runes: "⚔" };

export default function ModePill() {
  const { mode } = useMode();

  return (
    <div className="fixed bottom-5 right-5 z-[300]">
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="mode-pill flex items-center gap-2 px-3 py-2 rounded-full font-mono text-[10px] tracking-[0.12em] uppercase backdrop-blur-md"
          style={{ fontFamily: mode === "runes" ? "'Cinzel', serif" : "var(--font-mono)" }}
        >
          <span
            className={`w-[5px] h-[5px] rounded-full ${mode === "runes" ? "ember-pulse" : "pulse-dot"}`}
            style={{ background: "var(--gold-bright)" }}
          />
          {icons[mode]} {labels[mode]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
