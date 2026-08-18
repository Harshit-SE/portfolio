"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ravens = [
  { icon: "✉", label: "Raven Post", sublabel: "Email", value: "harshithihu@gmail.com", href: "mailto:harshithihu@gmail.com" },
  { icon: "⬡", label: "The Codex Network", sublabel: "GitHub", value: "https://github.com/harshitmishra" },
  { icon: "◈", label: "Alliance Registry", sublabel: "LinkedIn", value: "https://linkedin.com/in/harshitmishra" },
];

export default function RunesContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [err, setErr]     = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) { setErr("Name and email are required, traveller."); return; }
    setErr(""); setSent(true);
    setForm({ name:"", email:"", message:"" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" style={{ padding: "7rem 0", background: "var(--bg-secondary)", position: "relative", overflow: "hidden" }}>
      {/* Atmospheric glow */}
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: 700, height: 700, background: "radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="eyebrow-line" />
            <span style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.7rem", color: "rgba(200,169,110,0.5)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              05 — Send Word
            </span>
          </div>
          <h2 className="rune-flicker" style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, color: "#C8A96E", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>
            Forge an Alliance
          </h2>
          <p style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.9rem", color: "rgba(200,169,110,0.5)", lineHeight: 1.75, maxWidth: 480 }}>
            Seeking quests in Backend, Software Engineering, and Flutter realms. If your challenge is worthy — send word.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left — Raven links */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>

            <div style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.65rem", color: "rgba(200,169,110,0.38)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.8rem" }}>
              ◆ &nbsp; Channels of Communication
            </div>

            <div className="border" style={{ borderColor: "rgba(200,169,110,0.22)", background: "rgba(12,10,8,0.6)" }}>
              {ravens.map((r, i) => (
                <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer"
                  className="rune-menu-row flex items-center gap-4 transition-all duration-200"
                  style={{ textDecoration: "none" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#E8DCC8"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = ""; }}
                >
                  <div className="w-9 h-9 flex items-center justify-center border flex-shrink-0"
                    style={{ borderColor: "rgba(200,169,110,0.28)", background: "rgba(200,169,110,0.05)", color: "#C8A96E", fontSize: "1rem" }}>
                    {r.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", fontWeight: 600, color: "#E8DCC8", letterSpacing: "0.04em", marginBottom: "0.15rem" }}>
                      {r.label}
                    </div>
                    <div style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.68rem", color: "rgba(200,169,110,0.45)" }}>
                      {r.sublabel} · {r.value}
                    </div>
                  </div>
                  <span style={{ color: "rgba(200,169,110,0.25)", fontSize: "0.7rem" }}>›</span>
                </a>
              ))}
            </div>

            {/* Inscription */}
            <div className="mt-8 px-5 py-4 border-l-2" style={{ borderColor: "rgba(200,169,110,0.3)", background: "rgba(200,169,110,0.03)" }}>
              <p style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.85rem", color: "rgba(200,169,110,0.5)", lineHeight: 1.8 }}>
                &ldquo;I like to code. I like to build. And I like figuring out how things work <em>under the hood.</em>&rdquo;
              </p>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", color: "rgba(200,169,110,0.3)", marginTop: "0.4rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                — Harshit Mishra
              </div>
            </div>
          </motion.div>

          {/* Right — Parchment form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12 }}>
            <div className="relative border p-7" style={{ borderColor: "rgba(200,169,110,0.22)", background: "rgba(12,10,8,0.75)" }}>
              {["tl","tr","bl","br"].map(c => <div key={c} className={`rune-corner rune-corner-${c}`} />)}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.4), transparent)" }} />

              <div style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.65rem", color: "rgba(200,169,110,0.38)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                ◆ &nbsp; Inscribe Your Missive
              </div>

              <form onSubmit={submit} className="flex flex-col gap-4">
                {(["Name", "Email"] as const).map(f => (
                  <div key={f}>
                    <label style={{ display: "block", fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(200,169,110,0.4)", marginBottom: "0.45rem" }}>
                      {f}
                    </label>
                    <input
                      type={f === "Email" ? "email" : "text"}
                      value={form[f.toLowerCase() as "name"|"email"]}
                      onChange={e => setForm({...form, [f.toLowerCase()]: e.target.value})}
                      placeholder={f === "Email" ? "your@email.com" : "Thy name"}
                      className="w-full px-4 py-3 outline-none transition-all duration-200"
                      style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.9rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(200,169,110,0.22)", color: "rgba(232,220,200,0.85)" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.55)")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.22)")}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: "block", fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(200,169,110,0.4)", marginBottom: "0.45rem" }}>
                    Message
                  </label>
                  <textarea rows={4} value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Speak thy purpose, traveller..."
                    className="w-full px-4 py-3 outline-none transition-all duration-200 resize-none"
                    style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.9rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(200,169,110,0.22)", color: "rgba(232,220,200,0.85)" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.55)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.22)")}
                  />
                </div>

                {err && <p style={{ fontFamily: "'IM Fell English', serif", fontStyle: "italic", fontSize: "0.78rem", color: "#E05A1A" }}>{err}</p>}

                <button type="submit"
                  className="flex items-center justify-center gap-2 py-3.5 transition-all duration-300 cursor-pointer border-none"
                  style={{
                    fontFamily: "'Cinzel', serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                    background: sent ? "linear-gradient(135deg,#1a5,#2a7)" : "linear-gradient(135deg, #3A2800, #C8A96E, #3A2800)",
                    color: sent ? "#fff" : "#0c0a08",
                    boxShadow: "0 0 24px rgba(200,169,110,0.18)",
                  }}
                >
                  {sent ? <><CheckCircle size={14} /> Raven Dispatched</> : "⚔ &nbsp; Seal & Send"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
