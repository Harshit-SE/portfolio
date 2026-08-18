"use client";

import { useEffect, useRef, useCallback } from "react";
import type { Mode } from "@/context/ModeContext";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number; alpha: number;
  color: string;
}

export function useParticleCanvas(mode: Mode) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);
  const stateRef  = useRef<{ W: number; H: number; particles: Particle[] }>({
    W: 0, H: 0, particles: [],
  });

  const makeParticle = useCallback((W: number, H: number): Particle => {
    const isDev = mode === "dev";
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.45 + 0.1,
      color: isDev
        ? Math.random() > 0.5 ? "255,200,50" : "210,160,20"
        : Math.random() > 0.5 ? "0,200,255"  : "50,100,220",
    };
  }, [mode]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = canvas.width  = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;
    stateRef.current = {
      W, H,
      particles: Array.from({ length: 90 }, () => makeParticle(W, H)),
    };
  }, [makeParticle]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { W, H, particles } = stateRef.current;
    const lineColor = mode === "dev" ? "255,200,50" : "0,200,255";
    const connDist  = 110;

    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < connDist) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(${lineColor},${0.07 * (1 - d / connDist)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    animRef.current = requestAnimationFrame(draw);
  }, [mode]);

  useEffect(() => {
    cancelAnimationFrame(animRef.current);
    init();
    animRef.current = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => { init(); });
    const canvas = canvasRef.current;
    if (canvas) ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [init, draw]);

  return canvasRef;
}
