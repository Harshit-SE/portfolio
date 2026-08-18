"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useMode } from "@/context/ModeContext";
import { navLinks, dropdownLinks } from "@/lib/data";
import { scrollTo } from "@/lib/utils";
import HMLogo from "@/components/ui/HMLogo";

export default function Navbar() {
  const { mode, setMode, isRunes } = useMode();
  const [scrolled, setScrolled]     = useState(false);
  const [ddOpen, setDdOpen]         = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDdOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNav = (href: string) => {
    setDdOpen(false); setMobileOpen(false);
    setTimeout(() => scrollTo(href), 120);
  };

  const navBg = scrolled
    ? mode === "game"  ? "rgba(1,5,16,0.97)"
    : mode === "runes" ? "rgba(12,10,8,0.97)"
    : "rgba(5,4,0,0.97)"
    : "var(--nav-bg)";

  const logoText = isRunes
    ? "✦ Harshit Mishra ✦"
    : mode === "game" ? "[ Harshit Mishra ]"
    : "{ Harshit Mishra }";

  const modes: { key: "dev" | "game" | "runes"; label: string }[] = [
    { key: "dev",   label: "⚙ Dev"   },
    { key: "game",  label: "🎮 Game" },
    { key: "runes", label: "⚔ Runes" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[200] h-[60px] flex items-center justify-between px-6 md:px-10 border-b transition-all duration-300"
        style={{ background: navBg, borderColor: "var(--border-main)", backdropFilter: "blur(20px) saturate(160%)" }}
      >
        {/* Logo text */}
        <button
          onClick={() => scrollTo("#hero")}
          className="font-display font-bold tracking-wider transition-all duration-300 border-none bg-transparent cursor-pointer"
          style={{
            fontFamily: isRunes ? "'Cinzel Decorative', serif" : "var(--font-display)",
            fontSize: isRunes ? "0.85rem" : "1.05rem",
            color: "var(--gold-bright)",
            textShadow: "0 0 20px var(--gold-glow)",
            letterSpacing: isRunes ? "0.06em" : "0.04em",
          }}
        >
          {logoText}
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="relative group font-mono text-[11px] tracking-[0.14em] uppercase transition-colors duration-200 bg-transparent border-none cursor-pointer"
                style={{
                  fontFamily: isRunes ? "'Cinzel', serif" : "var(--font-mono)",
                  color: "var(--text-secondary)",
                  letterSpacing: isRunes ? "0.14em" : "0.14em",
                  fontSize: isRunes ? "0.68rem" : "11px",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-bright)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                  style={{ background: "var(--gold-bright)" }} />
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3 relative" ref={ddRef}>

          {/* HM Logo Button */}
          <HMLogo size={38} onClick={() => setDdOpen(v => !v)} showTooltip />

          {/* Dropdown */}
          <AnimatePresence>
            {ddOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[calc(100%+14px)] right-0 w-[260px] overflow-hidden profile-dropdown-panel"
                style={{ borderRadius: isRunes ? 0 : 8 }}
              >
                {/* Runes corner marks on dropdown */}
                {isRunes && ["tl","tr","bl","br"].map(c => <div key={c} className={`rune-corner rune-corner-${c}`} />)}

                {/* Header */}
                <div className="px-4 py-3 border-b" style={{ borderColor: "var(--border-main)" }}>
                  <div style={{
                    fontFamily: isRunes ? "'Cinzel Decorative', serif" : "var(--font-display)",
                    fontSize: isRunes ? "0.82rem" : "0.85rem",
                    fontWeight: 600,
                    color: "var(--gold-bright)",
                    letterSpacing: "0.04em",
                    marginBottom: 4,
                  }}>
                    Harshit Mishra
                  </div>
                  <div style={{
                    fontFamily: isRunes ? "'IM Fell English', serif" : "var(--font-mono)",
                    fontStyle: isRunes ? "italic" : "normal",
                    fontSize: "0.6rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                  }}>
                    {isRunes ? "✦ Software Mage · B.Tech 2027" : "// CSE · IIIT Senapati · B.Tech 2027"}
                  </div>

                  {/* Quote - visible in all modes */}
                  <div className="mt-3 pt-3 border-t" style={{ borderColor: "var(--border-main)" }}>
                    <p style={{
                      fontFamily: isRunes ? "'IM Fell English', serif" : "var(--font-mono)",
                      fontStyle: isRunes ? "italic" : "normal",
                      fontSize: "0.62rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      letterSpacing: isRunes ? "0" : "0.02em",
                    }}>
                      {isRunes
                        ? `"I like to code. I like to build. And I like figuring out how things work under the hood."`
                        : `// "I like to code. I like to build.`}
                    </p>
                    {!isRunes && (
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--text-secondary)", lineHeight: 1.65, letterSpacing: "0.02em" }}>
                        {`// And I like figuring out how`}<br />
                        {`// things work under the hood."`}
                      </p>
                    )}
                  </div>
                </div>

                {/* Nav links */}
                <nav className="py-1 border-b" style={{ borderColor: "var(--border-main)" }}>
                  {dropdownLinks.map(link => (
                    <button key={link.href}
                      onClick={() => handleNav(link.href)}
                      className="w-full flex items-center gap-3 text-left cursor-pointer border-none transition-all duration-200"
                      style={{
                        padding: "10px 16px",
                        fontFamily: isRunes ? "'Cinzel', serif" : "var(--font-mono)",
                        fontSize: isRunes ? "0.67rem" : "0.68rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        background: "transparent",
                        color: "var(--text-secondary)",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = "var(--bg-card-hover)";
                        e.currentTarget.style.color = "var(--gold-bright)";
                        e.currentTarget.style.paddingLeft = "20px";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--text-secondary)";
                        e.currentTarget.style.paddingLeft = "16px";
                      }}
                    >
                      <span className="w-4 text-center text-sm leading-none">{link.icon}</span>
                      {link.label}
                    </button>
                  ))}
                  <a
                    href="/resume.pdf"
                    download="Harshit_Mishra_Resume.pdf"
                    onClick={() => setDdOpen(false)}
                    className="w-full flex items-center gap-3 text-left cursor-pointer transition-all duration-200"
                    style={{ padding: "10px 16px", fontFamily: isRunes ? "'Cinzel', serif" : "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", background: "transparent", color: "var(--text-secondary)", textDecoration: "none", display: "flex" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--bg-card-hover)"; (e.currentTarget as HTMLElement).style.color = "var(--gold-bright)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
                  >
                    <Download size={13} /> Resume
                  </a>
                </nav>

                {/* Three-way mode toggle */}
                <div className="px-4 py-3">
                  <div style={{ fontFamily: isRunes ? "'Cinzel', serif" : "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.6rem" }}>
                    {isRunes ? "Choose Thy Path" : "Switch Mode"}
                  </div>
                  <div className="flex gap-1.5">
                    {modes.map(m => (
                      <button key={m.key}
                        onClick={() => { setMode(m.key); setDdOpen(false); }}
                        className="flex-1 py-[7px] font-mono text-[10px] tracking-widest uppercase border transition-all duration-200 cursor-pointer"
                        style={{
                          fontFamily: m.key === "runes" ? "'Cinzel', serif" : "var(--font-mono)",
                          borderRadius: "var(--card-radius)",
                          background: mode === m.key ? "var(--gold-glow)" : "transparent",
                          borderColor: mode === m.key ? "var(--border-bright)" : "var(--border-main)",
                          color: mode === m.key ? "var(--gold-bright)" : "var(--text-secondary)",
                          fontSize: "0.6rem",
                        }}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hamburger */}
          <button
            className="md:hidden transition-colors duration-200"
            style={{ color: "var(--text-secondary)", background: "none", border: "none" }}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[150] flex flex-col items-center justify-center gap-8"
            style={{ background: isRunes ? "rgba(12,10,8,0.97)" : mode === "game" ? "rgba(1,5,16,0.97)" : "rgba(5,4,0,0.97)", backdropFilter: "blur(20px)" }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNav(link.href)}
                className="font-display font-bold text-2xl transition-colors duration-200 bg-transparent border-none cursor-pointer"
                style={{ fontFamily: isRunes ? "'Cinzel Decorative', serif" : "var(--font-display)", color: "var(--text-secondary)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-bright)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
