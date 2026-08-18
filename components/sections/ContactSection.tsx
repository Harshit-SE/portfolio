"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Link2, GitFork, Send, CheckCircle } from "lucide-react";
import { useMode } from "@/context/ModeContext";
import SectionHeader from "@/components/ui/SectionHeader";

const contactLinks = [
  {
    icon: <Mail size={15} />,
    label: "Email",
    value: "harshithihu@gmail.com",
    href: "mailto:harshithihu@gmail.com",
    bg: "rgba(255,215,0,0.1)",
    color: "#FFD700",
  },
  {
    icon: <Phone size={15} />,
    label: "Phone",
    value: "+91 9628492644",
    href: "tel:+919628492644",
    bg: "rgba(0,200,255,0.1)",
    color: "#00AAFF",
  },
  {
    icon: <Link2 size={15} />,
    label: "LinkedIn",
    value: "linkedin.com/in/harshitmishra",
    href: "https://linkedin.com/in/harshitmishra",
    bg: "rgba(6,214,160,0.1)",
    color: "#06d6a0",
  },
  {
    icon: <GitFork size={15} />,
    label: "GitHub",
    value: "github.com/harshitmishra",
    href: "https://github.com/harshitmishra",
    bg: "rgba(180,100,255,0.1)",
    color: "#B46FFF",
  },
];

const card = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as { once: boolean; margin: string },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
});

export default function ContactSection() {
  const { isGame } = useMode();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) { setError("Please fill in name and email."); return; }
    setError("");
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" style={{ padding: "7rem 0", background: "var(--bg-secondary)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: 700, height: 700, background: "radial-gradient(circle,var(--gold-glow-soft) 0%,transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div {...card(0)}>
            <SectionHeader index="05" label="Contact"
              title={<>Let&apos;s Build<br /><em className="not-italic" style={{ color: "var(--gold-bright)" }}>Something Great</em></>}
            />
            <p className="text-[0.97rem] leading-relaxed mb-8 -mt-8" style={{ color: "var(--text-secondary)" }}>
              Actively looking for backend, data analytics, and AI/ML internship or full-time roles.
              If you have an interesting problem — let&apos;s talk.
            </p>

            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border transition-all duration-200 group"
                  style={{ borderRadius: "var(--card-radius)", borderColor: "var(--border-main)", background: "var(--bg-card)", color: "var(--text-secondary)", textDecoration: "none" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border-bright)"; el.style.color = "var(--text-primary)"; el.style.transform = "translateX(5px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border-main)"; el.style.color = "var(--text-secondary)"; el.style.transform = "none"; }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: link.bg, color: link.color }}>
                    {link.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-[14px] mb-0.5" style={{ color: "var(--text-primary)" }}>{link.label}</div>
                    <div className="font-mono text-[11px]" style={{ fontFamily: "var(--font-mono)" }}>{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div {...card(0.15)}>
            <div className="relative border p-8 overflow-hidden"
              style={{ borderRadius: 8, borderColor: "var(--border-main)", background: "var(--bg-card)" }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg,transparent,var(--gold-bright),transparent)", opacity: 0.5 }} />

              <div className="font-mono text-[10px] tracking-[0.14em] uppercase mb-6"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                {isGame ? ">> SEND A MESSAGE" : "// SEND A MESSAGE"}
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {["Name", "Email"].map((f) => (
                  <div key={f}>
                    <label className="block font-mono text-[10px] tracking-[0.12em] uppercase mb-1.5"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>{f}</label>
                    <input type={f === "Email" ? "email" : "text"}
                      value={form[f.toLowerCase() as "name" | "email"]}
                      onChange={e => setForm({ ...form, [f.toLowerCase()]: e.target.value })}
                      placeholder={f === "Email" ? "your@email.com" : "Your name"}
                      className="w-full px-4 py-3 text-[15px] outline-none transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-main)", borderRadius: "var(--card-radius)", color: "var(--text-primary)", fontFamily: "var(--font-body)" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "var(--border-bright)")}
                      onBlur={e => (e.currentTarget.style.borderColor = "var(--border-main)")}
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.12em] uppercase mb-1.5"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Message</label>
                  <textarea rows={5} value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the role or project..."
                    className="w-full px-4 py-3 text-[15px] outline-none transition-all duration-200 resize-none"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-main)", borderRadius: "var(--card-radius)", color: "var(--text-primary)", fontFamily: "var(--font-body)" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "var(--border-bright)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "var(--border-main)")}
                  />
                </div>
                {error && <p className="font-mono text-[11px]" style={{ color: "#ff6b6b" }}>{error}</p>}
                <button type="submit"
                  className="flex items-center justify-center gap-2 py-3.5 font-bold text-[13px] tracking-[0.1em] uppercase mt-1 transition-all duration-300 cursor-pointer border-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    background: sent ? "linear-gradient(135deg,#0a5,#0d7)" : "var(--btn-bg)",
                    color: "var(--btn-text)",
                    borderRadius: "var(--card-radius)",
                    boxShadow: "0 0 24px var(--gold-glow)",
                  }}
                >
                  {sent ? <><CheckCircle size={15} /> Message Sent!</> : <><Send size={14} /> Send Message</>}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
