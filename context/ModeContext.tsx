"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Mode = "dev" | "game" | "runes";

interface ModeContextType {
  mode: Mode;
  setMode: (m: Mode) => void;
  isGame:  boolean;
  isDev:   boolean;
  isRunes: boolean;
}

const ModeContext = createContext<ModeContextType>({
  mode:    "dev",
  setMode: () => {},
  isGame:  false,
  isDev:   true,
  isRunes: false,
});

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("dev");

  const setMode = (m: Mode) => {
    setModeState(m);
    document.documentElement.setAttribute("data-mode", m);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("portfolio-mode", m);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-mode") as Mode | null;
    if (saved === "game" || saved === "dev" || saved === "runes") {
      setModeState(saved);
      document.documentElement.setAttribute("data-mode", saved);
    }
  }, []);

  return (
    <ModeContext.Provider
      value={{
        mode,
        setMode,
        isGame:  mode === "game",
        isDev:   mode === "dev",
        isRunes: mode === "runes",
      }}
    >
      {children}
    </ModeContext.Provider>
  );
}

export const useMode = () => useContext(ModeContext);
