import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cinzel","serif"],
        mono:    ["Share Tech Mono","monospace"],
        body:    ["Rajdhani","sans-serif"],
        orbitron:["Orbitron","sans-serif"],
      },
      animation: {
        "gold-shimmer": "goldShimmer 4s ease-in-out infinite alternate",
        "blob-float":   "blobFloat 12s ease-in-out infinite",
        "scroll-bounce":"scrollBounce 2.5s ease-in-out infinite",
        "pulse-dot":    "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        goldShimmer:  { "0%": { backgroundPosition: "0%" },  "100%": { backgroundPosition: "100%" } },
        blobFloat:    { "0%,100%": { transform: "translate(0,0) scale(1)" }, "33%": { transform: "translate(28px,-18px) scale(1.04)" }, "66%": { transform: "translate(-18px,14px) scale(0.97)" } },
        scrollBounce: { "0%,100%": { transform: "translateX(-50%) translateY(0)" }, "50%": { transform: "translateX(-50%) translateY(-6px)" } },
        pulseDot:     { "0%,100%": { opacity: "1", transform: "scale(1)" }, "50%": { opacity: "0.3", transform: "scale(1.6)" } },
      },
    },
  },
  plugins: [],
};

export default config;
