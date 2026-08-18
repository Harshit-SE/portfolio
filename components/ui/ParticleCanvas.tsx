"use client";

import { useMode } from "@/context/ModeContext";
import { useParticleCanvas } from "@/hooks/useParticleCanvas";

export default function ParticleCanvas() {
  const { mode } = useMode();
  const canvasRef = useParticleCanvas(mode);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-65"
    />
  );
}
