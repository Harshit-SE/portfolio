"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import { useMode } from "@/context/ModeContext";
import { scrollTo } from "@/lib/utils";
import ParticleCanvas from "@/components/ui/ParticleCanvas";

const DEV_TITLES  = ["Backend Developer", "Software Engineer", "Flutter Developer"];
const GAME_TITLES = ["Code Warrior", "System Architect", "App Crafter"];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wIdx, setWIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word    = words[wIdx % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWIdx((i) => i + 1);
        }
      }
    }, isDeleting ? 55 : 90);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wIdx, words]);

  return text;
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
});

export default function HeroSection() {
  const { mode, isGame } = useMode();
  const titles   = isGame ? GAME_TITLES : DEV_TITLES;
  const typeText = useTypewriter(titles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: 60 }}
    >
      {/* Particle network */}
      <ParticleCanvas />

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--border-main) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-main) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 25%, transparent 100%)",
          opacity: 0.45,
        }}
      />

      {/* Atmospheric blobs */}
      {[
        { cls: "blob-float-1", top: "-10%", left: "-8%",  size: 580, c: isGame ? "rgba(0,100,255,0.07)" : "rgba(255,180,0,0.06)" },
        { cls: "blob-float-2", bottom: "-5%",right: "-5%", size: 420, c: isGame ? "rgba(0,200,255,0.05)" : "rgba(255,140,0,0.04)" },
        { cls: "blob-float-3", top: "40%",  left: "48%",  size: 300, c: isGame ? "rgba(100,0,200,0.04)": "rgba(255,215,0,0.03)"  },
      ].map((b, i) => (
        <div
          key={i}
          aria-hidden="true"
          className={`absolute rounded-full pointer-events-none ${b.cls}`}
          style={{
            width: b.size, height: b.size,
            top: b.top, left: b.left, bottom: (b as { bottom?: string }).bottom, right: (b as { right?: string }).right,
            background: b.c,
            filter: "blur(110px)",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Badge */}
        <motion.div {...fade(0.1)} className="mb-7 inline-flex">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[11px] tracking-[0.14em] uppercase border backdrop-blur-md"
            style={{
              fontFamily: "var(--font-mono)",
              borderColor: "var(--border-bright)",
              background: "var(--gold-glow-soft)",
              color: "var(--gold-bright)",
            }}
          >
            <span
              className="w-[6px] h-[6px] rounded-full pulse-dot"
              style={{ background: "var(--gold-bright)", boxShadow: "0 0 8px var(--gold-bright)" }}
            />
            {isGame ? "Player One · Ready · 2026" : "Available for Internships · 2026"}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fade(0.2)}
          className="leading-[0.92] mb-3"
          style={{ letterSpacing: "-0.02em", fontSize: "clamp(3.5rem,9vw,7rem)" }}
        >
          <span
            className="block font-display font-black"
            style={{ fontFamily: "var(--font-hero)", color: "var(--text-primary)" }}
          >
            Harshit
          </span>
          <span
            className="block font-display font-black shimmer-text"
            style={{ fontFamily: "var(--font-hero)" }}
          >
            Mishra
          </span>
        </motion.h1>

        {/* Typewriter title */}
        <motion.p
          {...fade(0.3)}
          className="font-mono text-[13px] md:text-[15px] tracking-[0.1em] mb-2 mt-3 min-h-[24px]"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--gold-bright)" }}>&gt;</span>{" "}
          {typeText}
          <span
            className="inline-block w-[2px] h-[14px] ml-0.5 align-middle"
            style={{ background: "var(--gold-bright)", animation: "pulseDot 1s ease-in-out infinite" }}
          />
        </motion.p>

        {/* Sub-titles (static) */}
        <motion.p
          {...fade(0.32)}
          className="font-mono text-[11px] tracking-[0.08em] mb-6"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
        >
          {isGame
            ? "[ Software Engineering · Flutter Craft · AI Systems ]"
            : "Backend Developer · Software Engineer · Flutter Developer"}
        </motion.p>

        {/* Tagline */}
        <motion.p
          {...fade(0.4)}
          className="text-lg leading-relaxed max-w-[580px] mx-auto mb-10 font-light"
          style={{ color: "var(--text-secondary)" }}
        >
          B.Tech CSE student at IIIT Senapati building{" "}
          <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>backend systems</strong>,{" "}
          <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>AI-powered applications</strong>, and{" "}
          <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>cross-platform mobile apps</strong>{" "}
          that scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fade(0.5)} className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => scrollTo("#projects")}
            className="inline-flex items-center gap-2 px-6 py-3 font-bold text-[13px] tracking-[0.1em] uppercase transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border-none"
            style={{
              fontFamily: "var(--font-display)",
              background: "var(--btn-bg)",
              color: "var(--btn-text)",
              borderRadius: "var(--card-radius)",
              boxShadow: "0 0 30px var(--gold-glow), 0 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            ⚡ View Projects <ArrowRight size={14} />
          </button>

          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[12px] tracking-[0.1em] uppercase transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border backdrop-blur-md"
            style={{
              fontFamily: "var(--font-mono)",
              borderColor: "var(--border-bright)",
              color: "var(--gold-bright)",
              background: "transparent",
              borderRadius: "var(--card-radius)",
            }}
          >
            <Mail size={14} /> Contact Me
          </button>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[12px] tracking-[0.1em] uppercase transition-all duration-200 hover:-translate-y-0.5 border"
            style={{
              fontFamily: "var(--font-mono)",
              borderColor: "var(--border-main)",
              color: "var(--text-secondary)",
              background: "transparent",
              borderRadius: "var(--card-radius)",
            }}
          >
            <Download size={14} /> Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-1.5 scroll-bounce"
      >
        <span
          className="font-mono text-[10px] tracking-[0.14em] uppercase"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
        >
          scroll
        </span>
        <div
          className="w-px h-9"
          style={{ background: "linear-gradient(to bottom, var(--text-muted), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
