"use client";

import { motion } from "framer-motion";
import { scrollTo } from "@/lib/utils";

const stats = [
  { label: "Vigor",      value: 87, icon: "♥", desc: "Endurance & resilience" },
  { label: "Mind",       value: 94, icon: "✦", desc: "Intelligence & creativity" },
  { label: "Strength",   value: 81, icon: "⚔", desc: "Backend power" },
  { label: "Dexterity",  value: 92, icon: "◈", desc: "Code precision" },
  { label: "Arcane",     value: 96, icon: "☽", desc: "AI & ML mastery" },
  { label: "Faith",      value: 78, icon: "★", desc: "System reliability" },
];

const titles = ["Architect of Systems", "Slayer of Bugs", "Seeker of Root Cause"];

export default function RunesHeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 60, background: "var(--bg-primary)" }}
    >
      {/* ── Stone texture grain overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 50% at 15% 40%, rgba(200,169,110,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 40% 60% at 85% 60%, rgba(224,90,26,0.04) 0%, transparent 55%)
          `,
        }}
      />

      {/* ── GOW-style vertical rune lines ── */}
      {[8, 16, 84, 92].map((pos, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute top-0 bottom-0 w-px pointer-events-none"
          style={{
            left: `${pos}%`,
            background: `linear-gradient(to bottom, transparent, rgba(200,169,110,${i % 2 === 0 ? "0.12" : "0.06"}), transparent)`,
          }}
        />
      ))}

      {/* ── Horizontal divider lines ── */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ top: "18%", background: "linear-gradient(to right, transparent, rgba(200,169,110,0.15), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ bottom: "14%", background: "linear-gradient(to right, transparent, rgba(200,169,110,0.12), transparent)" }}
      />

      {/* ── Main layout: Left portrait panel + Right info panel ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">

        {/* ─── LEFT: Character Portrait Panel (GOW style) ─── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Portrait frame */}
          <div
            className="relative mx-auto"
            style={{ maxWidth: 340 }}
          >
            {/* Outer border frame */}
            <div
              className="relative border-2 p-1"
              style={{
                borderColor: "rgba(200,169,110,0.45)",
                background: "linear-gradient(160deg, rgba(30,22,10,0.9), rgba(15,11,5,0.95))",
              }}
            >
              {/* Corner rune marks */}
              {["tl","tr","bl","br"].map(c => (
                <div key={c} className={`rune-corner rune-corner-${c}`} />
              ))}

              {/* Inner frame */}
              <div
                className="border p-6"
                style={{ borderColor: "rgba(200,169,110,0.2)" }}
              >
                {/* Avatar / Rune circle */}
                <div className="relative flex items-center justify-center mb-6" style={{ height: 180 }}>
                  {/* Outer glow ring */}
                  <div
                    className="absolute w-[180px] h-[180px] rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)",
                      border: "1px solid rgba(200,169,110,0.2)",
                    }}
                  />
                  {/* Middle ring */}
                  <div
                    className="absolute w-[140px] h-[140px] rounded-full ember-pulse"
                    style={{
                      border: "1px solid rgba(224,90,26,0.25)",
                    }}
                  />
                  {/* Inner ring */}
                  <div
                    className="absolute w-[100px] h-[100px] rounded-full"
                    style={{
                      border: "2px solid rgba(200,169,110,0.4)",
                      background: "radial-gradient(circle, rgba(200,169,110,0.08) 0%, rgba(12,10,8,0.9) 70%)",
                    }}
                  />
                  {/* Logo SVG mark */}
                  <div className="relative z-10 rune-flicker" style={{ width: 74, height: 74 }}>
                    <svg viewBox="0 0 1101 821" fill="none" xmlns="http://www.w3.org/2000/svg"
                      style={{ width: "100%", height: "100%", filter: "drop-shadow(0 0 8px rgba(200,169,110,0.55))" }}>
                      <path d="M941.953 397.862C902.441 415.934 859.216 421.271 815.513 418.17C771.81 415.069 711.692 382.875 677.599 413.898C643.525 444.956 616.723 465.462 585.44 495.392C554.149 525.35 522.898 544.514 495.03 575.907C467.154 607.329 429.948 629.024 410.006 666.038C434.418 650.04 460.817 637.753 486.354 626.018C511.891 614.283 534.631 601.083 562.031 588.902C589.431 576.72 613.303 564.31 642.199 555.7C671.114 547.126 697.618 540.315 728.258 537.114C758.925 533.921 787.594 514.206 820.571 525.59C853.548 536.975 877.566 512.033 893.349 483.299C909.151 454.6 930.475 428.664 941.953 397.862Z" fill="#C8A96E"/>
                      <path d="M204.799 769.136C237.753 750.02 273.846 734.038 303.187 709.091C332.499 684.145 357.768 660.889 384.967 634.309C412.195 607.728 442.904 589.058 469.955 562.374C497.036 535.717 516.856 507.278 547.658 483.976C578.46 460.673 595.044 429.873 628.299 408.183C661.553 386.494 670.725 354.689 700.876 325.236C731.026 295.783 699.499 258.007 666.31 239.918C633.094 221.859 607.838 195.915 573.362 178.613C538.887 161.34 509.699 141.337 474.828 123.604C439.93 105.902 406.494 89.8718 369.751 75.97C333.034 62.0383 294.312 48.2832 254.912 39.338C215.512 30.3928 177.399 14.9547 136.562 6.66316C95.6963 -1.62667 40.5831 -0.349633 0.0732633 3.49008C24.9638 7.16994 51.1456 16.3086 74.5332 25.2452C311.998 133.311 409.763 186.705 429.26 250.446C455.937 251.72 471.681 267.189 486.209 288.919C500.737 310.649 483.271 344.767 454.922 345.438C427.539 462.925 374.791 547.249 246.119 714.715C230.708 731.42 211.218 748.767 204.799 769.136Z" fill="#C8A96E"/>
                      <path d="M1098.91 127.054C1077.91 150.191 1069.34 188.726 1055.49 218.981C1041.67 249.259 1030.9 280.871 1015.42 310.809C999.926 340.748 989.392 370.391 968.815 398.058C948.237 425.725 934.507 453.715 917.358 481.901C900.21 510.088 879.065 535.179 860.98 562.293C842.895 589.407 821.822 619.002 801.318 642.829C780.815 666.656 766.76 699.191 742.151 721.265C717.541 743.338 695.335 786.31 726.564 804.565L888.132 811.502C888.132 811.502 960.749 809.341 1001.94 820.236C952.444 784.328 905.947 715.496 928.864 653.956C951.809 592.411 969.806 543.33 1000.42 488.754C1031 434.155 1041.92 377.224 1064.03 317.983C1086.15 258.742 1104.49 190.495 1098.91 127.054Z" fill="#C8A96E"/>
                    </svg>
                  </div>
                </div>

                {/* Name plate */}
                <div className="text-center mb-4">
                  <div
                    style={{
                      fontFamily: "'Cinzel Decorative', serif",
                      fontSize: "1.1rem", fontWeight: 700,
                      color: "#C8A96E",
                      letterSpacing: "0.06em",
                      textShadow: "0 0 20px rgba(200,169,110,0.3)",
                    }}
                  >
                    Harshit Mishra
                  </div>
                  <div
                    style={{
                      fontFamily: "'IM Fell English', serif",
                      fontStyle: "italic",
                      fontSize: "0.78rem",
                      color: "rgba(200,169,110,0.55)",
                      marginTop: 3,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {titles[0]}
                  </div>
                </div>

                {/* Class / level row */}
                <div className="gow-divider"><span className="gow-divider-icon">◆</span></div>

                <div className="flex justify-between items-center mt-3 px-1">
                  <div>
                    <div style={{ fontFamily: "'IM Fell English', serif", fontSize: "0.6rem", color: "rgba(200,169,110,0.45)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Class</div>
                    <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.78rem", color: "#E8DCC8", fontWeight: 600 }}>Software Mage</div>
                  </div>
                  <div className="text-right">
                    <div style={{ fontFamily: "'IM Fell English', serif", fontSize: "0.6rem", color: "rgba(200,169,110,0.45)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Level</div>
                    <div
                      style={{
                        fontFamily: "'Cinzel Decorative', serif",
                        fontSize: "1.3rem", fontWeight: 900,
                        color: "#C8A96E",
                        textShadow: "0 0 15px rgba(200,169,110,0.4)",
                      }}
                    >
                      42
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soul count (Elden Ring Runes) */}
            <div className="mt-3 flex items-center justify-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "radial-gradient(circle, #C8A96E, #8B6914)", boxShadow: "0 0 8px rgba(200,169,110,0.5)" }}
              />
              <span style={{ fontFamily: "'IM Fell English', serif", fontSize: "0.75rem", color: "rgba(200,169,110,0.7)", fontStyle: "italic" }}>
                127,450 Runes Accumulated
              </span>
            </div>
          </div>
        </motion.div>

        {/* ─── RIGHT: Stats + Info Panel ─── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Panel header (GOW options style) */}
          <div
            className="mb-6 pb-4 border-b"
            style={{ borderColor: "rgba(200,169,110,0.25)" }}
          >
            <div style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.7rem", color: "rgba(200,169,110,0.45)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
              ✦ Character Sheet ✦
            </div>
            <h1
              className="rune-flicker"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: 900,
                color: "#C8A96E",
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              Harshit Mishra
            </h1>
            <p style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.88rem", color: "rgba(200,169,110,0.55)", marginTop: "0.4rem" }}>
              CSE Undergraduate · IIIT Senapati, Manipur · B.Tech 2027
            </p>
          </div>

          {/* Quote — GOW inscription style */}
          <div
            className="relative mb-6 px-5 py-4"
            style={{
              borderLeft: "2px solid rgba(224,90,26,0.5)",
              background: "rgba(224,90,26,0.04)",
            }}
          >
            <div
              style={{
                fontFamily: "'IM Fell English', serif",
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: "rgba(232,220,200,0.75)",
                lineHeight: 1.8,
              }}
            >
              &ldquo;I like to code. I like to build.<br />
              And I like figuring out how things<br />
              work <em>under the hood.</em>&rdquo;
            </div>
            <div
              style={{
                fontFamily: "'IM Fell English', serif",
                fontSize: "0.62rem",
                color: "rgba(200,169,110,0.4)",
                marginTop: "0.5rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              — The Architect&apos;s Creed
            </div>
          </div>

          {/* Attribute Stats (Elden Ring level-up style) */}
          <div
            className="border p-4 mb-5"
            style={{ borderColor: "rgba(200,169,110,0.2)", background: "rgba(12,10,8,0.6)" }}
          >
            <div
              className="mb-3 pb-2 border-b flex items-center gap-2"
              style={{ borderColor: "rgba(200,169,110,0.18)" }}
            >
              <span style={{ color: "#C8A96E", fontSize: "0.7rem" }}>◆</span>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(200,169,110,0.55)" }}>
                Attributes
              </span>
            </div>

            <div className="space-y-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                  className="rune-menu-row"
                  style={{ padding: "0.4rem 0.5rem" }}
                >
                  <div className="flex items-center gap-2.5 flex-1">
                    <span style={{ color: "#C8A96E", fontSize: "0.75rem", width: 14, textAlign: "center" }}>{stat.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div className="flex items-center justify-between mb-1">
                        <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.68rem", letterSpacing: "0.08em", color: "#E8DCC8" }}>
                          {stat.label}
                        </span>
                        <span style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "0.75rem", fontWeight: 700, color: "#C8A96E" }}>
                          {stat.value}
                        </span>
                      </div>
                      <div className="stat-bar-track">
                        <div
                          className="stat-bar-fill"
                          style={{
                            width: `${stat.value}%`,
                            animationDelay: `${0.5 + i * 0.08}s`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA buttons — Elden Ring menu style */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => scrollTo("#projects")}
              className="w-full flex items-center justify-between px-5 py-3.5 border transition-all duration-200 group"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "linear-gradient(135deg, rgba(200,169,110,0.08), rgba(12,10,8,0.8))",
                borderColor: "rgba(200,169,110,0.4)",
                color: "#C8A96E",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(200,169,110,0.15), rgba(12,10,8,0.9))";
                e.currentTarget.style.borderColor = "rgba(200,169,110,0.7)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(200,169,110,0.08), rgba(12,10,8,0.8))";
                e.currentTarget.style.borderColor = "rgba(200,169,110,0.4)";
              }}
            >
              <span>⚔ &nbsp; View Quests (Projects)</span>
              <span style={{ color: "rgba(200,169,110,0.4)", fontSize: "0.7rem" }}>›</span>
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              className="w-full flex items-center justify-between px-5 py-3.5 border transition-all duration-200"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "rgba(224,90,26,0.06)",
                borderColor: "rgba(224,90,26,0.35)",
                color: "rgba(232,220,200,0.7)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(224,90,26,0.12)";
                e.currentTarget.style.color = "#E8DCC8";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(224,90,26,0.06)";
                e.currentTarget.style.color = "rgba(232,220,200,0.7)";
              }}
            >
              <span>✉ &nbsp; Send a Raven (Contact)</span>
              <span style={{ color: "rgba(224,90,26,0.4)", fontSize: "0.7rem" }}>›</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-1.5 scroll-bounce"
      >
        <span style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.65rem", color: "rgba(200,169,110,0.35)", letterSpacing: "0.12em" }}>
          descend
        </span>
        <div style={{ width:1, height:32, background:"linear-gradient(to bottom, rgba(200,169,110,0.3), transparent)" }} />
      </motion.div>
    </section>
  );
}
