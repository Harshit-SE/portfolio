# Harshit Mishra — Developer Portfolio v2

A cinematic dual-mode developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Theme System

### Dev Mode — Super 30 Golden Glow
- Deep black `#050400` background
- Cinematic gold `#FFD700` as primary accent
- **Cinzel** serif font (editorial weight, same feel as Super 30 title credits)
- Film grain scanlines overlay
- Warm gold particle network
- Golden glow blobs and atmospheric haze

### Game Mode — Navy Blue / Cyan Arcade
- Navy `#010510` background  
- Neon cyan `#00F5FF` as primary accent
- **Orbitron** font (retro sci-fi/arcade aesthetic)
- Blue particle network
- Subtle scanline overlay
- Every card, badge, button, border, glow switches color

## Features

- ⚙️ **Profile dropdown** (Google-style) with section navigation + mode toggle
- 🎮 **Dual mode** — Dev/Game switch persisted in localStorage
- ⚡ **Particle canvas** recolors instantly on mode switch (gold ↔ cyan)
- ⌨️ **Typewriter effect** with different titles per mode
- 🖱️ **Spotlight cursor** effect
- 📜 **Film grain scanlines** overlay (stronger in dev mode)
- 🌊 **Animated gradient blobs** with physics-like drift
- 🎞️ **Framer Motion** scroll-triggered reveals on every section
- 📱 **Fully responsive** with mobile hamburger menu
- 🔍 **SEO metadata** + Open Graph tags
- 💾 **Mode preference** saved in localStorage

## Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx           # Root layout, SEO, font links
│   ├── page.tsx             # Main page — composes all sections
│   └── globals.css          # CSS design tokens, dual-mode vars, animations
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky nav + profile dropdown + mobile menu
│   │   └── Footer.tsx       # Footer with mode-aware text
│   ├── sections/
│   │   ├── HeroSection.tsx        # Particles, typewriter, animated name
│   │   ├── AboutSection.tsx       # Split grid, stats, focus areas
│   │   ├── SkillsSection.tsx      # Color-coded skill cards
│   │   ├── ProjectsSection.tsx    # OmniScan AI + AGRIHIVE
│   │   ├── ExperienceSection.tsx  # Animated timeline
│   │   ├── AchievementsSection.tsx# Hover-reveal top-bar cards
│   │   └── ContactSection.tsx     # Links + form with validation
│   └── ui/
│       ├── SpotlightCursor.tsx    # Mouse spotlight effect
│       ├── ParticleCanvas.tsx     # Canvas wrapper
│       ├── SectionHeader.tsx      # Reusable animated section heading
│       └── ModePill.tsx           # Fixed bottom-right mode indicator
├── context/
│   └── ModeContext.tsx      # Global dev/game mode state (React context)
├── hooks/
│   ├── useParticleCanvas.ts # Canvas particle animation hook
│   └── useScrollReveal.ts   # IntersectionObserver reveal hook
└── lib/
    ├── data.ts              # ALL portfolio content — edit here
    └── utils.ts             # cn() + scrollTo()
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customizing Content

All content lives in `lib/data.ts`:
- **Projects**: title, description, stack, GitHub/demo links, accent colors per mode
- **Skills**: categories, items, colors per mode
- **Experience**: timeline entries with per-mode dot colors
- **Achievements**: icon, number, title, description

Update contact links in `components/sections/ContactSection.tsx`.

Add your resume to `public/resume.pdf`.

## Deployment

```bash
npm run build    # verify clean build
```

Deploy on **Vercel** — connect your GitHub repo, zero config needed.
