"use client";

import { useMode } from "@/context/ModeContext";

export default function Footer() {
  const { mode, isRunes } = useMode();

  return (
    <footer
      className="border-t py-8 text-center"
      style={{ background: "var(--bg-primary)", borderColor: "var(--border-main)" }}
    >
      {/* Runes top divider */}
      {isRunes && (
        <div className="gow-divider max-w-xs mx-auto mb-4">
          <span className="gow-divider-icon" style={{ fontSize: "0.6rem" }}>◆</span>
        </div>
      )}

      <p style={{
        fontFamily: isRunes ? "'Cinzel', serif" : "var(--font-mono)",
        fontSize: isRunes ? "0.65rem" : "0.65rem",
        letterSpacing: "0.08em",
        color: "var(--text-muted)",
      }}>
        {isRunes
          ? "✦ Forged by Harshit Mishra · Anno 2025 · IIIT Senapati, Manipur ✦"
          : mode === "game"
          ? ">> Built by Harshit Mishra · 2025 · CSE @ IIIT Senapati, Manipur"
          : "// Designed & Built by Harshit Mishra · 2025 · CSE @ IIIT Senapati, Manipur"}
      </p>

      {isRunes ? (
        <p style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.68rem", color: "var(--text-muted)", marginTop: "0.5rem", opacity: 0.6 }}>
          &ldquo;I like to code. I like to build. And I like figuring out how things work under the hood.&rdquo;
        </p>
      ) : (
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.06em", color: "var(--text-muted)", marginTop: "0.4rem", opacity: 0.6 }}>
          Targeting Backend · Software Engineering · Flutter Internships
        </p>
      )}
    </footer>
  );
}
