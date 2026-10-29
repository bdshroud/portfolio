# 🚀 Mohammad Yasin — Full Stack & AI Developer Portfolio

A modern, high-performance developer portfolio built with **React 18** and **Vite**.

## 💻 Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Custom CSS with CSS Variables (Dark/Light mode support)
- **Typography:** Inter & Fira Code (Google Fonts)
- **Icons:** Font Awesome 6.5.0 & Devicons

---

## 📁 Project Structure

```
portfolio/
├── index.html              ← Entry HTML file for Vite
├── vite.config.js          ← Vite configuration
├── package.json            ← Dependencies & scripts
├── public/                 ← Static assets (served directly)
│   ├── images/             ← Profile & project screenshots
│   └── Resume.pdf          ← Downloadable resume
└── src/
    ├── main.jsx            ← React root entrypoint
    ├── App.jsx             ← Main App component & routing state
    ├── index.css           ← Global styles, variables & animations
    ├── hooks/
    │   ├── useTheme.js      ← Dark / Light mode toggle hook
    │   └── useTypewriter.js ← Dynamic hero typewriter effect hook
    ├── data/
    │   ├── projects.js     ← Project list & detailed case studies
    │   ├── skills.js       ← Categorized skill levels & icons
    │   ├── experience.js   ← Work experience timeline data
    │   └── education.js    ← Academic qualifications data
    └── components/
        ├── Navbar.jsx      ← Sticky navigation & theme switch
        ├── Hero.jsx        ← Hero section with interactive effects
        ├── About.jsx       ← About bio & quick stats
        ├── Skills.jsx      ← Interactive tabbed skill bars
        ├── Education.jsx   ← Academic credentials timeline
        ├── Experience.jsx  ← Career milestones
        ├── Projects.jsx    ← Filterable projects grid
        ├── ProjectDetail.jsx ← In-depth project case study view
        ├── Contact.jsx     ← Validated contact form & direct channels
        └── Footer.jsx      ← Footer & back-to-top shortcut
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

The optimized production output will be in the `dist/` directory, ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## ✨ Key Features
- **Instant Dark/Light Mode:** Saves preference to `localStorage` and respects system preferences.
- **Typewriter Effect:** Animated hero header showcasing key specializations.
- **Project Filtering & Deep-Dive:** Filter by Full Stack, Frontend, and Backend, with full modal/page case studies.
- **Contact Form Validation:** Client-side validation with real-time feedback.
- **Responsive & Accessible:** Fully optimized across mobile, tablet, and desktop screens.
