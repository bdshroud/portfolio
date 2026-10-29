# 🚀 Mohammad Yasin — Full Stack & AI Developer Portfolio

[![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0.7-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen.svg)]()

> A modern, lightning-fast developer portfolio showcasing full-stack web applications, backend APIs, and engineering case studies. Built with **React 18**, **Vite**, and **custom CSS variables**, featuring dark/light mode persistence, deep-linked project case studies, and a complete architectural roadmap for migrating to **Next.js**.

---

## 📋 Table of Contents
1. [Overview & Evolution](#-overview--evolution)
2. [Tech Stack](#-tech-stack)
3. [Key Features](#-key-features)
4. [Project Architecture](#-project-architecture)
5. [Detail HTML to React Migration](#-detail-html-to-react-migration)
6. [Next.js Migration & Architectural Plan](#-nextjs-migration--architectural-plan)
7. [Getting Started & Local Development](#-getting-started--local-development)
8. [Deployment Guide](#-deployment-guide)
9. [Author & Contact](#-author--contact)

---

## 🌟 Overview & Evolution

This project originally began as a traditional multi-page static website built with pure HTML5, CSS3, and vanilla JavaScript (`index.html` with separate project detail documents in `pages/project1.html`, `project2.html`, etc.). 

To elevate performance, maintainability, code reusability, and user experience, the entire portfolio was refactored into a **single-page React 18 application powered by Vite**:
- **Eliminated Code Duplication:** Shared navigation, theme logic, and footers are now reusable modular components.
- **Declarative Data Layer:** All projects, skills, education, and career milestones live in structured data files (`src/data/`).
- **Dynamic Case Study Engine:** Multi-page HTML files were replaced with an in-depth dynamic `ProjectDetail` component with deep-link URL synchronization (`#project-1`).
- **Zero Framework Lock-in:** Clean CSS architecture using native CSS variables with zero bloated CSS dependencies.

---

## 💻 Tech Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 18.3 | Declarative component UI and reactive state management |
| **Bundler & Dev Server** | Vite 6.0 | Instant HMR, tree-shaking, and optimized production builds |
| **Styling** | Vanilla CSS + Variables | Responsive design tokens, light/dark themes, zero runtime overhead |
| **Icons & Typography** | Font Awesome 6.5 & Devicons | Vector iconography and tech logos |
| **Fonts** | Google Fonts (Inter & Fira Code) | Clean modern sans-serif paired with developer monospace |
| **Deployment** | Vercel & Netlify | Global Edge CDN hosting and continuous deployment |

---

## ✨ Key Features

- 🌓 **Instant Dark / Light Mode:**
  - Persists preference in `localStorage`.
  - Automatically respects OS-level `prefers-color-scheme`.
  - Smooth color transitions across all containers.
- ⌨️ **Dynamic Typewriter Hero:**
  - Powered by a custom React hook (`useTypewriter.js`) displaying rotating professional titles.
- 🗂️ **Categorized Project Filter:**
  - Filter showcase items by **All**, **Full Stack**, **Frontend**, and **Backend** with instant state updates.
- 🔍 **Deep-Linked Project Case Studies:**
  - Deep-dive pages with Project Overview, Key Features, Real Architectural Challenges Faced & Solutions, Future Improvements, Interactive Tech Stack Breakdown, and metadata.
  - Full browser history (`popstate`) and URL hash support (`#project-1`, `#project-2`).
- ⚡ **Legacy HTML Redirect Bridge:**
  - Legacy `pages/project*.html` pages seamlessly redirect users and bots directly into the matching React view.
- 📱 **100% Mobile & Tablet Responsive:**
  - Fluid grids, hamburger drawer navigation, and accessible touch targets.
- ✉️ **Validated Contact System:**
  - Form state validation with direct channels (Email, GitHub, Socials).

---

## 📁 Project Architecture

```
portfolio/
├── index.html                 ← Vite HTML entrypoint with font & icon CDNs
├── vite.config.js             ← Vite configuration with @vitejs/plugin-react
├── package.json               ← Project metadata, dependencies & scripts
├── public/                    ← Static assets served directly
│   ├── images/                ← Project screenshots and profile avatars
│   └── Resume.pdf             ← Downloadable curriculum vitae
├── pages/                     ← Backward compatibility redirect bridges
│   ├── project1.html          ← Redirects to /#project-1 (Wanderlust)
│   ├── project2.html          ← Redirects to /#project-2 (DevStack)
│   ├── project3.html          ← Redirects to /#project-3 (News24)
│   └── project4.html          ← Redirects to /#project-4 (Wanderlust Server)
└── src/
    ├── main.jsx               ← React DOM root mount
    ├── App.jsx                ← Top-level router & state orchestration
    ├── index.css              ← Global design system, theme tokens & styles
    ├── hooks/
    │   ├── useTheme.js         ← Dark/light mode management & listener hook
    │   └── useTypewriter.js    ← Smooth typewriter animation hook
    ├── data/
    │   ├── projects.js        ← Detailed project data & deep case studies
    │   ├── skills.js          ← Categorized skill groups with proficiency
    │   ├── experience.js      ← Career milestones and timeline entries
    │   └── education.js       ← Academic qualifications and degrees
    └── components/
        ├── Navbar.jsx         ← Glassmorphism navbar with scroll detection
        ├── Hero.jsx           ← Animated introduction & social quick-links
        ├── About.jsx          ← Biography, quick stats & resume CTA
        ├── Skills.jsx         ← Tabbed interactive skill badges
        ├── Education.jsx      ← Academic credentials timeline
        ├── Experience.jsx     ← Career experience milestones
        ├── Projects.jsx       ← Filterable project showcase grid
        ├── ProjectDetail.jsx  ← Full-screen comprehensive project case study
        ├── Contact.jsx        ← Validated contact form & direct reach-outs
        └── Footer.jsx         ← Footer links, copyright & back-to-top button
```

---

## 🔄 Detail HTML to React Migration

In the original static portfolio, project details resided in standalone HTML documents (`pages/project1.html` through `pages/project4.html`). While simple, this architecture created several issues:
1. **Maintenance Overhead:** Updating navbar links, logos, or styles required manual edits across every HTML file.
2. **Slow Navigation:** Switching between the home page and project pages triggered full browser page reloads.
3. **Template Inconsistencies:** Some detail pages held outdated placeholder content rather than actual project data.

### How it was Solved in React:
1. **Normalized Data Model (`src/data/projects.js`):**
   - Each project contains structured fields for `badges`, `bigTitle`, `bigSubtitle`, `fullDesc`, `overview`, `features[]`, `challenges[{ title, desc }]`, `improvements[]`, `techStack[{ name, role, icon, iconClass }]`, and `info{}`.
2. **Unified Case Study View (`src/components/ProjectDetail.jsx`):**
   - A single, highly optimized component renders rich case studies dynamically based on the active project ID.
   - Includes "Other Projects" recommendations at the bottom to encourage portfolio browsing.
3. **Deep URL Synchronization (`src/App.jsx`):**
   - Synchronizes `activeProject` with `window.location.hash` (e.g. `#project-1`).
   - Supports direct sharing, browser bookmarks, and natural Back/Forward browser button navigation using `popstate` and `hashchange` listeners.
4. **Zero Broken Links:**
   - The legacy `pages/project*.html` files include lightweight instant redirect scripts (`window.location.replace('../#project=X')`), ensuring backward compatibility with any previously shared links or search engine indices.

---

## 🗺️ Next.js Migration & Architectural Plan

Migrating this portfolio to **Next.js (App Router)** is the next major evolutionary milestone. Next.js unlocks Server-Side Rendering (SSR), Static Site Generation (SSG), automatic image optimization, and first-class SEO.

```
       Current (Vite SPA)                   Target (Next.js App Router)
 ┌─────────────────────────────┐        ┌─────────────────────────────────┐
 │ • Client-Side Rendering     │   ──►  │ • Hybrid SSG + Dynamic SSR      │
 │ • Hash Routing (#project-1) │        │ • Clean URLs (/projects/wanderlust)│
 │ • Client-only SEO tags      │        │ • Dynamic OpenGraph per project │
 │ • Static <img> tags         │        │ • next/image Auto WebP/AVIF     │
 │ • Form without server route │        │ • Server Actions / API Routes   │
 └─────────────────────────────┘        └─────────────────────────────────┘
```

### 1. Architectural Advantages of Next.js for this Portfolio
- **Per-Project SEO & OpenGraph:** Each project gets its own dynamic canonical URL (e.g., `/projects/wanderlust`) with dedicated `<title>`, `<meta name="description">`, and custom OG images when shared on LinkedIn, Twitter, or Discord.
- **Blazing Fast Image Optimization (`next/image`):** Automatically serves responsive WebP/AVIF images with blur-up placeholders, eliminating layout shifts (CLS).
- **Static Site Generation (`generateStaticParams`):** Pre-renders every project page at build time for near-instant edge delivery.
- **Server Actions for Contact Form:** Process contact inquiries securely via a server-side route handler (`/api/contact`) utilizing **Resend** or **Nodemailer** without exposing API credentials.

---

### 2. Proposed Next.js Directory Layout

```
nextjs-portfolio/
├── app/
│   ├── layout.jsx             ← Global RootLayout (fonts, theme provider, metadata)
│   ├── page.jsx               ← Home page (Hero, About, Skills, Projects, Contact)
│   ├── projects/
│   │   └── [slug]/
│   │       ├── page.jsx       ← Dynamic Project Detail Page (SSG)
│   │       └── opengraph-image.jsx ← Dynamic Open Graph card generator
│   ├── api/
│   │   └── contact/
│   │       └── route.js       ← Contact form email dispatch API handler
│   ├── sitemap.js             ← Automated XML sitemap generation
│   ├── robots.js              ← Search engine crawler rules
│   └── not-found.jsx          ← Custom 404 page
├── components/                ← Reusable client & server UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProjectCard.jsx
│   ├── ContactForm.jsx
│   └── ThemeToggle.jsx
├── content/ (or data/)
│   └── projects.json (or .ts) ← Single source of truth for portfolio data
└── public/
    └── images/                ← Static assets & resume
```

---

### 3. Step-by-Step Implementation Roadmap

#### Phase 1: Project Initialization & Configuration
- Initialize Next.js with App Router and Tailwind CSS:
  ```bash
  npx create-next-app@latest portfolio-next --app --use-npm
  ```
- Port the CSS design tokens (`:root` variables) or translate them into `tailwind.config.js` theme extensions.
- Configure `next-themes` for seamless dark/light mode toggle without hydration mismatch.

#### Phase 2: Core Layout & Home Sections
- Port `Hero.jsx`, `About.jsx`, `Skills.jsx`, `Education.jsx`, and `Experience.jsx` into React Server Components (RSC) where possible, reserving `'use client'` for interactive widgets (like the typewriter and theme toggle).
- Replace Google Fonts link tags with `next/font/google` (`Inter` and `Fira_Code`) for zero layout shift and automatic self-hosting.

#### Phase 3: Dynamic Project Case Studies (`app/projects/[slug]/page.jsx`)
- Use `generateStaticParams()` to pre-render all 6 project detail pages at build time:
  ```jsx
  export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
  }
  ```
- Implement `generateMetadata()` for dynamic SEO tags:
  ```jsx
  export async function generateMetadata({ params }) {
    const project = getProjectBySlug(params.slug);
    return {
      title: `${project.title} — Case Study | Mohammad Yasin`,
      description: project.desc,
      openGraph: {
        title: project.title,
        description: project.desc,
        images: [{ url: project.image }],
      },
    };
  }
  ```

#### Phase 4: Serverless Contact Form & Email Integration
- Create an API Route in `app/api/contact/route.js`:
  ```javascript
  import { NextResponse } from 'next/server';
  import { Resend } from 'resend';

  const resend = new Resend(process.env.RESEND_API_KEY);

  export async function POST(req) {
    const { name, email, subject, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'business.bdshroud@gmail.com',
      subject: `[Portfolio Contact] ${subject || 'New Message'} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    return NextResponse.json({ success: true });
  }
  ```

#### Phase 5: Image & Asset Optimization
- Upgrade all `<img>` tags to `next/image` with explicit `width`, `height`, and `placeholder="blur"` to achieve 100/100 Core Web Vitals (LCP & CLS).

#### Phase 6: Edge Deployment & Verification
- Link repository to Vercel for zero-config global edge deployment, preview branches, and automated builds.

---

## 🛠️ Getting Started & Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
- `npm` or `pnpm` / `yarn`

### 1. Clone the repository
```bash
git clone https://github.com/bdshroud/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the Vite development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to see the live portfolio with Hot Module Replacement (HMR).

### 4. Build for production
```bash
npm run build
```
This produces an optimized production bundle inside the `dist/` directory.

### 5. Preview production build locally
```bash
npm run preview
```

---

## 🚀 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your code to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Vercel will build and provide a globally distributed `.vercel.app` URL with automatic SSL.

### Deploying to Netlify
1. Connect your repository in [Netlify](https://netlify.com).
2. Set Build Command: `npm run build`.
3. Set Publish Directory: `dist`.
4. Deploy site!

---

## 👨‍💻 Author & Contact

**Mohammad Yasin**  
*Full Stack & AI Developer*

- 🌐 **Website:** [next-gentech.co.uk](https://next-gentech.co.uk)
- 🐙 **GitHub:** [@bdshroud](https://github.com/bdshroud)
- 💼 **Email:** [business.bdshroud@gmail.com](mailto:business.bdshroud@gmail.com)
- 🐦 **X / Twitter:** [@bdShroud](https://twitter.com/bdShroud)

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
