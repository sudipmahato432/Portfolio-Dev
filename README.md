<div align="center">

# Sudip Mahato — Portfolio

**A dark, techy personal portfolio website built with React + Vite**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

[Live Demo](https://sudipmahato.vercel.app) · [LinkedIn](https://linkedin.com/in/sudipmahato) · [GitHub](https://github.com/sudipmahato)

</div>

---

## Overview

A fully responsive, animated personal portfolio website showcasing my experience as a Systems Engineer, full-stack developer, and automation engineer. Built with a dark terminal aesthetic — neon green accents, JetBrains Mono type, and a live particle-network canvas that runs across every page.

The site has three pages:

- **Home** — Hero section with typewriter role switcher, skills grid, work experience timeline, featured project cards, and education section
- **Blogs** — Six in-depth technical posts covering automation, React, MongoDB, DSA, and DevOps; filterable by topic with expand/collapse reading
- **Contact** — Validated contact form with a decorative terminal widget and direct links to LinkedIn and GitHub

---

## Screenshots

> *(Add screenshots here after deployment — Home / Blogs / Contact)*

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Routing | React Router DOM 7 |
| Animations | Framer Motion 12 |
| Fonts | JetBrains Mono + Syne (Google Fonts) |
| Canvas FX | Custom particle network (vanilla Canvas API) |
| Deployment | Vercel (frontend) |

No UI component library — every element is hand-crafted with CSS variables and inline styles for full control over the terminal aesthetic.

---

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Responsive nav with hamburger menu
│   │   ├── PageWrapper.jsx       # Framer Motion page transition wrapper
│   │   └── ParticleBackground.jsx # Animated canvas particle network
│   ├── pages/
│   │   ├── Home.jsx              # Hero, Skills, Experience, Projects, Education
│   │   ├── Blogs.jsx             # Blog grid with tag filtering & read-more
│   │   └── Contact.jsx           # Contact form + social links + terminal card
│   ├── App.jsx                   # Router + AnimatePresence setup
│   ├── main.jsx                  # React root
│   └── index.css                 # Global CSS variables & reset
├── index.html
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/sudipmahato/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be running at `http://localhost:5173`.

### Available Scripts

```bash
npm run dev       # Start development server with HMR
npm run build     # Build for production (output: /dist)
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## Deployment

### Vercel (Recommended — Free)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Vercel auto-detects Vite. Confirm these settings:

   | Setting | Value |
   |---|---|
   | Framework Preset | Vite |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
   | Install Command | `npm install` |

4. Click **Deploy** — done. Every push to `main` triggers an automatic redeploy.

### Manual / Static Hosting

```bash
npm run build
# Upload the contents of /dist to any static host
# (Netlify, GitHub Pages, Cloudflare Pages, AWS S3, etc.)
```

---

## Customisation

All personal content lives directly in the page files — no separate data file needed.

| What to change | Where |
|---|---|
| Name, role, bio, stats | `src/pages/Home.jsx` → Hero section |
| Skills | `src/pages/Home.jsx` → `skills` array |
| Work experience | `src/pages/Home.jsx` → `experiences` array |
| Projects | `src/pages/Home.jsx` → `projects` array |
| Education | `src/pages/Home.jsx` → Education section |
| Blog posts | `src/pages/Blogs.jsx` → `blogs` array |
| Social links | `src/pages/Contact.jsx` → social link `href` values |
| Color palette | `src/index.css` → CSS custom properties under `:root` |
| Fonts | `index.html` → Google Fonts link + `src/index.css` → `--font-*` variables |

To change the accent color globally, edit a single variable:

```css
/* src/index.css */
:root {
  --green: #00ff88; /* ← change this */
}
```

---

## Features at a Glance

- **Animated particle canvas** — 80 interconnected nodes drifting and pulsing in the background, persistent across all page navigations
- **Typewriter hero** — cycles through role titles with realistic typing and deletion speed
- **Glitch name animation** — subtle CSS glitch effect on the hero heading
- **Smooth page transitions** — Framer Motion `AnimatePresence` with coordinated enter/exit animations
- **Scroll-triggered reveals** — sections animate in as they enter the viewport using `whileInView`
- **Blog tag filter** — instantly filters posts by category with layout animations
- **Expandable blog posts** — full article content toggles open inline with motion
- **Contact form validation** — real-time field validation with error states before submit
- **Terminal widget** — decorative fake terminal on the Contact page showing availability status
- **Responsive navbar** — collapses to an animated hamburger menu on mobile
- **Custom scrollbar** — thin green accent scrollbar matching the overall theme

---

## Performance

| Metric | Value |
|---|---|
| Production bundle (JS) | ~401 KB (127 KB gzipped) |
| Production bundle (CSS) | ~0.9 KB (0.5 KB gzipped) |
| Build time | ~1s |
| Lighthouse Performance | 90+ (Vercel CDN) |

---

## License

This project is open source under the [MIT License](./LICENSE).
Feel free to fork it, adapt it for your own portfolio, and give it a star ⭐ if it helped you.

---

<div align="center">

Designed & built by **Sudip Mahato**  
Systems Engineer @ TCS · NIT Durgapur '24

</div>