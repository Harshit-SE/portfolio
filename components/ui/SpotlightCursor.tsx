"use client";

import { useEffect, useRef } from "react";

export default function SpotlightCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = `${e.clientX}px`;
      ref.current.style.top  = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed pointer-events-none z-[998] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
      style={{
        width: 500,
        height: 500,
        background: "radial-gradient(circle, var(--cursor-glow) 0%, transparent 65%)",
        transition: "opacity 0.3s",
      }}
    />
  );
}
