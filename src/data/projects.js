export const projects = [
  {
    id: 1,
    category: 'fullstack',
    title: 'Wanderlust — Travel Platform',
    desc: 'A full-stack travel booking platform with real-time listings, user authentication, and Vercel deployment. Built with TypeScript and modern web technologies.',
    tags: ['TypeScript', 'React', 'Node.js', 'Vercel'],
    image: '/images/project1.png',
    placeholder: 'https://placehold.co/600x400/6c63ff/ffffff?text=Wanderlust',
    github: 'https://github.com/bdshroud/b14-wanderlust-client',
    live: 'https://wanderlust-client-live.vercel.app',
    detail: {
      badges: ['Full Stack', '🟢 Live', '2026'],
      bigTitle: 'Wanderlust',
      bigSubtitle: 'Travel & Destination Platform',
      fullDesc: 'A complete end-to-end travel booking and discovery platform featuring dynamic accommodation listings, verified user authentication, real-time availability checking, and instant cloud deployment.',
      overview: 'Wanderlust was engineered to solve common bottlenecks in modern vacation planning by unifying destination discovery, dynamic filtering, user reviews, and secure booking into an intuitive single-page interface. The frontend is built with React and TypeScript for bulletproof type safety, interfacing with a high-throughput Node.js microservice architecture deployed globally on Vercel CDN nodes.',
      features: [
        'Dynamic listing exploration with live geolocation and price-bracket filters',
        'Secure JWT-based authentication system with automatic refresh token rotation',
        'Interactive booking calendar with instant availability checks and conflict prevention',
        'User dashboard to manage upcoming reservations, saved wishlists, and travel history',
        'Optimized image delivery pipeline with placeholder blur effects and lazy loading',
        'Full responsive layout adhering to WCAG 2.1 AA accessibility guidelines',
        'Integrated error boundaries and graceful offline fallback states',
        'Continuous Integration & Deployment (CI/CD) automated via GitHub Actions to Vercel'
      ],
      challenges: [
        {
          title: 'Real-time Booking Concurrency',
          desc: 'Simultaneous reservation attempts on the last available dates caused potential double-booking. Resolved by implementing atomic database operations and optimistic locking on reservation slots.'
        },
        {
          title: 'Full-Stack TypeScript Contract Parity',
          desc: 'Ensuring strict schema parity between backend API responses and frontend React state. Established shared DTO interfaces and runtime schema validation with Zod to eliminate contract drift.'
        },
        {
          title: 'Asset Loading & Core Web Vitals',
          desc: 'High-resolution travel photography impacted initial Largest Contentful Paint (LCP). Implemented responsive WebP image srcset attributes and client-side memory caching.'
        },
        {
          title: 'State Hydration & Session Preservation',
          desc: 'Preserving active booking drafts and filter parameters across accidental browser refreshes. Engineered a synchronized localStorage persistence layer with session expiry.'
        }
      ],
      improvements: [
        'Migrate from Vite SPA to Next.js 14 App Router for Server-Side Rendering (SSR) and dynamic OG social cards',
        'Integrate Stripe Checkout and multi-currency exchange rate conversions',
        'Add AI-assisted destination recommendations powered by Google Gemini API',
        'Implement WebSockets or Server-Sent Events (SSE) for live host-to-guest messaging',
        'Develop native companion apps using React Native with shared TypeScript models',
        'Incorporate interactive 3D map previews with Mapbox GL / Google Maps Platform'
      ],
      techStack: [
        { name: 'TypeScript', role: 'Language & Type System', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React 18', role: 'Frontend UI Library', iconClass: 'fab fa-react', iconColor: '#61dafb' },
        { name: 'Node.js', role: 'Backend Runtime', iconClass: 'fab fa-node-js', iconColor: '#339933' },
        { name: 'Express.js', role: 'REST API Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'Vercel', role: 'Edge Deployment & CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
        { name: 'CSS Variables', role: 'Modular Design System', iconClass: 'fab fa-css3-alt', iconColor: '#1572b6' }
      ],
      info: {
        category: 'Full Stack Web App',
        duration: '2 Months',
        year: '2026',
        status: '🟢 Live in Production',
        role: 'Lead Full Stack Developer',
        architecture: 'Decoupled Client-Server SPA'
      },
      otherProjects: [2, 3, 4]
    }
  },
  {
    id: 2,
    category: 'fullstack',
    title: 'DevStack — Developer Hub',
    desc: 'An interactive web app built with React 18, Vite, and Tailwind CSS to explore modern technologies, compare options, and build custom developer tech stacks with live feedback.',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Netlify'],
    image: '/images/project2.png',
    placeholder: 'https://placehold.co/600x400/f56565/ffffff?text=DevStack',
    github: 'https://github.com/bdshroud/devstack',
    live: 'https://silver-capybara-67135d.netlify.app/',
    detail: {
      badges: ['Full Stack', '🟢 Live', '2026'],
      bigTitle: 'DevStack',
      bigSubtitle: 'Interactive Developer Architecture Hub',
      fullDesc: 'An interactive technology discovery and architectural comparison platform empowering software engineers to explore modern frameworks, benchmark tooling, and assemble validated tech stacks with instant feedback.',
      overview: 'DevStack was created to eliminate architectural guesswork when scaffolding modern software projects. Developers can explore hundreds of curated programming languages, databases, cloud providers, and libraries, compare them side-by-side across maturity and bundle size metrics, and export customized stack configurations with one click.',
      features: [
        'Interactive drag-and-drop stack builder supporting Frontend, Backend, Database, and DevOps layers',
        'Side-by-side technology comparison matrix evaluating performance, community size, and learning curve',
        'Instant stack compatibility advisor flagging conflicting or redundant package choices',
        'Exportable configuration generators producing boilerplate configs (Dockerfile, package.json, CI workflows)',
        'Faceted search with sub-millisecond filtering across categories and runtime environments',
        'Dark mode-first developer aesthetic with high-contrast typography and syntax accents',
        'Client-side state persistence allowing users to bookmark and share stack blueprints via unique URLs',
        'Deployed with automated preview builds and atomic rollbacks on Netlify'
      ],
      challenges: [
        {
          title: 'High-Performance In-Memory Filtering',
          desc: 'Querying and filtering hundreds of technology records across multi-dimensional criteria caused dropped frames during rapid keystrokes. Resolved using useMemo memoization pipelines and debounced search triggers.'
        },
        {
          title: 'Stack Compatibility Graph Modeling',
          desc: 'Designing a lightweight dependency graph to accurately detect ecosystem mismatches (e.g., incompatible ORM and database pairings) without inflating client bundle size.'
        },
        {
          title: 'Shareable State Serialization',
          desc: 'Encoding multi-selection stack selections into compressed URL search parameters so teams could share direct links without requiring a database backend.'
        }
      ],
      improvements: [
        'Add GitHub OAuth integration allowing users to save stacks directly to their developer profile',
        'Integrate live NPM package download statistics and GitHub star history charts via API',
        'Provide one-click GitHub template repository scaffolding via GitHub Octokit API',
        'Implement community upvoting and verified expert architectural reviews',
        'Migrate to Next.js App Router for dynamic server-rendered comparison landing pages'
      ],
      techStack: [
        { name: 'TypeScript', role: 'Strict Typing & Schemas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React 18', role: 'Component UI Architecture', iconClass: 'fab fa-react', iconColor: '#61dafb' },
        { name: 'Vite', role: 'Lightning-fast Build Tooling', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        { name: 'Tailwind CSS', role: 'Utility-first Design Tokens', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Netlify', role: 'Cloud Edge Hosting & CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' }
      ],
      info: {
        category: 'Developer Tool & Platform',
        duration: '1 Month',
        year: '2026',
        status: '🟢 Live in Production',
        role: 'Creator & Frontend Architect',
        architecture: 'Single Page App + Client Graph'
      },
      otherProjects: [1, 3, 6]
    }
  },
  {
    id: 3,
    category: 'frontend',
    title: 'News24 — News App',
    desc: 'A real-time news aggregation application built with React and REST APIs, featuring category filtering, search, and a clean reading experience.',
    tags: ['React', 'REST API', 'TypeScript', 'Responsive'],
    image: '/images/project3.png',
    placeholder: 'https://placehold.co/600x400/48bb78/ffffff?text=News24',
    github: 'https://github.com/bdshroud/News24',
    live: null,
    detail: {
      badges: ['Frontend', '🚀 Active Development', '2026'],
      bigTitle: 'News24',
      bigSubtitle: 'Real-Time News Aggregation Engine',
      fullDesc: 'A fast, distraction-free news aggregation reader built with React and TypeScript that streams global headlines from international news wire APIs with instant topic filtering and reading mode.',
      overview: 'News24 was engineered as an antidote to cluttered, ad-heavy digital newspapers. It collects stories from reputable global feeds across Technology, Business, Science, and World Politics, presenting them in a clean editorial layout optimized for readability, low latency, and minimal data consumption.',
      features: [
        'Multi-category feed aggregation across Tech, Markets, Science, Entertainment, and Politics',
        'Live search with instant keyword highlighting and debounced API queries',
        'Distraction-free Reader Mode stripping extraneous trackers and heavy banner ads',
        'Estimated read time calculation and clean typography scale designed for long-form reading',
        'Cached article snapshots with offline-friendly localStorage bookmarking system',
        'Dynamic time-ago formatting and live breaking news ticker',
        'Customizable text sizing and high-contrast night reading theme'
      ],
      challenges: [
        {
          title: 'Third-Party API Rate Limiting & Throttling',
          desc: 'External news APIs impose strict hourly call thresholds. Solved by implementing an in-memory client cache with TTL (Time-To-Live) invalidation and fallback mock data for graceful degradation.'
        },
        {
          title: 'Inconsistent Feed Payloads',
          desc: 'Different news providers returned varying image aspect ratios, missing author fields, and malformed HTML entities. Built a normalization pipeline that sanitizes content before rendering.'
        },
        {
          title: 'Mobile Layout & Smooth Infinite Scrolling',
          desc: 'Infinite list rendering caused DOM bloat on lower-end mobile devices. Integrated virtualized windowing to keep memory overhead steady during long browsing sessions.'
        }
      ],
      improvements: [
        'Migrate to Next.js with Incremental Static Regeneration (ISR) to cache and serve pages at the edge',
        'Add text-to-speech AI audio narration for articles',
        'Implement PWA service worker with full offline reading mode',
        'Introduce push notifications for breaking alerts using Web Push API'
      ],
      techStack: [
        { name: 'React 18', role: 'Frontend UI Framework', iconClass: 'fab fa-react', iconColor: '#61dafb' },
        { name: 'TypeScript', role: 'Static Type Checking', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'REST APIs', role: 'Upstream Headline Data', iconClass: 'fas fa-network-wired', iconColor: '#6c63ff' },
        { name: 'CSS3 Modules', role: 'Responsive Typography & Styling', iconClass: 'fab fa-css3-alt', iconColor: '#1572b6' }
      ],
      info: {
        category: 'Frontend Web Application',
        duration: '3 Weeks',
        year: '2026',
        status: '🚀 In Active Development',
        role: 'Sole Frontend Engineer',
        architecture: 'RESTful Client Application'
      },
      otherProjects: [1, 2, 5]
    }
  },
  {
    id: 4,
    category: 'backend',
    title: 'Wanderlust — REST API Server',
    desc: 'The backend server powering the Wanderlust travel platform. Built with Node.js and Express, deployed on Vercel with REST API endpoints.',
    tags: ['Node.js', 'Express', 'Vercel', 'REST API'],
    image: '/images/project1.png',
    placeholder: 'https://placehold.co/600x400/ed8936/ffffff?text=Wanderlust+API',
    github: 'https://github.com/bdshroud/b14-wanderlust-server',
    live: 'https://b14-wanderlust-server.vercel.app',
    detail: {
      badges: ['Backend', '🟢 Live', '2026'],
      bigTitle: 'Wanderlust Server',
      bigSubtitle: 'High-Performance RESTful Microservice',
      fullDesc: 'The cloud-native backend powering the Wanderlust travel ecosystem, providing secure endpoints for authentication, destination indexing, booking transactions, and administrative oversight.',
      overview: 'Engineered with Node.js and Express, this server provides the transactional backbone for Wanderlust. It utilizes stateless JWT sessions, strict payload validation schemas, robust error handling middleware, and is deployed as scalable serverless functions on Vercel.',
      features: [
        'Complete RESTful API surface implementing strict HTTP verb semantics and standardized error schemas',
        'JWT authentication with salted password hashing (bcrypt) and cryptographically secure tokens',
        'Role-Based Access Control (RBAC) separating guest, verified user, and platform administrator privileges',
        'Centralized request logging, timing metrics, and unhandled exception capture',
        'Comprehensive CORS configuration and security headers via Helmet middleware',
        'Scalable serverless deployment on Vercel Edge with zero-maintenance cold execution',
        'Automated database seeding and migration routines for continuous delivery testing'
      ],
      challenges: [
        {
          title: 'Serverless Cold-Start Optimization',
          desc: 'Initial cold execution on Vercel serverless containers caused brief latency spikes. Streamlined bundle size by stripping unused dev dependencies and refactoring connection pooling logic.'
        },
        {
          title: 'Stateless Token Lifecycle & Invalidation',
          desc: 'Handling immediate logout and credential revocation across distributed serverless nodes without a persistent database hit on every request. Implemented hybrid token verification with short expiry.'
        },
        {
          title: 'Input Sanitization & Injection Defense',
          desc: 'Securing public API endpoints against NoSQL injection, XSS vectors, and malformed query payloads using declarative input validation pipelines.'
        }
      ],
      improvements: [
        'Add Redis caching layer via Upstash for high-frequency destination queries',
        'Introduce GraphQL endpoint alongside REST for granular mobile payload fetching',
        'Implement rate limiting with sliding window algorithm to prevent brute-force attacks',
        'Deploy automated OpenAPI / Swagger documentation suite with interactive playground'
      ],
      techStack: [
        { name: 'Node.js', role: 'Server Runtime', iconClass: 'fab fa-node-js', iconColor: '#339933' },
        { name: 'Express.js', role: 'HTTP Routing & Middleware', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'JavaScript ES6+', role: 'Core Language', iconClass: 'fab fa-js-square', iconColor: '#f7df1e' },
        { name: 'Vercel', role: 'Serverless Functions Deployment', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
        { name: 'JWT & Bcrypt', role: 'Authentication & Cryptography', iconClass: 'fas fa-shield-alt', iconColor: '#48bb78' }
      ],
      info: {
        category: 'Backend Microservice',
        duration: '2 Weeks',
        year: '2026',
        status: '🟢 Live in Production',
        role: 'Backend Architect',
        architecture: 'Serverless REST API'
      },
      otherProjects: [1, 2, 6]
    }
  },
  {
    id: 5,
    category: 'frontend',
    title: 'Bazardor BD Daily — News Portal',
    desc: 'A Bangladeshi daily news portal with a clean, responsive layout. Designed and built with modern CSS and HTML for fast, accessible content delivery.',
    tags: ['CSS3', 'HTML5', 'Responsive', 'Vercel'],
    image: '/images/project5.png',
    placeholder: 'https://placehold.co/600x400/dd6b20/ffffff?text=Bazardor+BD',
    github: 'https://github.com/bdshroud/bazardorbdaily',
    live: 'https://bazardorbdaily.vercel.app',
    detail: {
      badges: ['Frontend', '🟢 Live', '2025'],
      bigTitle: 'Bazardor BD Daily',
      bigSubtitle: 'Fast & Accessible Digital News Portal',
      fullDesc: 'A lightweight, content-first news portal crafted specifically for Bangladeshi readers, engineered for lightning-quick load times even on spotty 3G/4G cellular connections.',
      overview: 'Bazardor BD Daily was created with a hyper-focus on performance and web accessibility. Built using clean, modern semantic HTML5 and vanilla CSS custom properties without bloated UI libraries, it achieves near-perfect Google Lighthouse scores and renders instantaneously across all device categories.',
      features: [
        'Ultra-lightweight markup achieving sub-second First Contentful Paint (FCP) on mobile networks',
        'Fully responsive multi-column editorial newspaper layout using CSS Grid and Flexbox',
        'Semantic HTML5 structure ensuring 100% screen-reader and search engine crawler accessibility',
        'Bengali & English bilingual typography balancing readability with font-load efficiency',
        'Fluid image scaling with aspect-ratio containers preventing Cumulative Layout Shift (CLS)',
        'Zero external runtime dependencies ensuring rock-solid stability and zero vulnerability footprint',
        'Deployed with instant global CDN distribution via Vercel'
      ],
      challenges: [
        {
          title: 'Cross-Device Typography & Bengali Font Rendering',
          desc: 'Complex Bengali script glyphs often render unevenly across legacy operating systems. Configured specialized font fallbacks with subset loading to minimize download weight while preserving visual elegance.'
        },
        {
          title: 'Zero-JS Layout Responsiveness',
          desc: 'Constructing complex responsive mega-menus and multi-column article grids without JavaScript overhead by leveraging pure CSS media queries, CSS variables, and modern pseudoclasses.'
        }
      ],
      improvements: [
        'Integrate a headless CMS (Sanity / Strapi) allowing editors to publish articles via web dashboard',
        'Convert to Next.js App Router for dynamic server-rendered article pages and rich SEO metadata',
        'Add automated daily market price tracker widgets for daily commodities',
        'Implement PWA manifest for offline reading during commutes'
      ],
      techStack: [
        { name: 'HTML5', role: 'Semantic Document Structure', iconClass: 'fab fa-html5', iconColor: '#e34f26' },
        { name: 'CSS3', role: 'Custom Variables & Grid Layouts', iconClass: 'fab fa-css3-alt', iconColor: '#1572b6' },
        { name: 'Vercel', role: 'Global Edge CDN Delivery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' }
      ],
      info: {
        category: 'Editorial Web Portal',
        duration: '2 Weeks',
        year: '2025',
        status: '🟢 Live in Production',
        role: 'Frontend UI Designer & Developer',
        architecture: 'Semantic Static Architecture'
      },
      otherProjects: [6, 1, 2]
    }
  },
  {
    id: 6,
    category: 'frontend',
    title: 'Movie Explorer — Film Discovery App',
    desc: 'A dynamic movie discovery app that lets users browse, search, and explore films using a live REST API. Clean UI with real-time search and responsive design.',
    tags: ['JavaScript', 'REST API', 'Netlify', 'UI/UX'],
    image: '/images/project6.png',
    placeholder: 'https://placehold.co/600x400/805ad5/ffffff?text=Movie+Explorer',
    github: 'https://github.com/bdshroud/Movie-Explorer',
    live: 'https://live-movie-explorer.netlify.app/',
    detail: {
      badges: ['Frontend', '🟢 Live', '2025'],
      bigTitle: 'Movie Explorer',
      bigSubtitle: 'Cinematic Discovery & Recommendations App',
      fullDesc: 'An engaging, visually immersive movie exploration application powered by the TMDB REST API, enabling movie enthusiasts to discover trending titles, filter by genres, and inspect cast filmographies.',
      overview: 'Movie Explorer delivers a rich cinematic catalog right to the user’s fingertips. Built with vanilla JavaScript, modern DOM manipulation, and dynamic REST API integrations, it offers fluid search capabilities, responsive poster galleries, and detailed modal views without third-party framework overhead.',
      features: [
        'Live film search with instant auto-suggestions and debounced API queries',
        'Curated discovery carousels for Trending Now, Top Rated, and Upcoming Releases',
        'Comprehensive modal view featuring movie synopsis, runtime, IMDb ratings, and full cast list',
        'Genre-based discovery allowing users to filter by Action, Drama, Sci-Fi, and more',
        'Local storage integration allowing users to build a persistent personal Watchlist',
        'Responsive poster card grid with smooth hover transitions and backdrop blur effects',
        'Continuous deployment with automated build triggers on Netlify'
      ],
      challenges: [
        {
          title: 'Search Debouncing & API Optimization',
          desc: 'Triggering an HTTP request on every keystroke exhausted API quotas and caused race conditions where stale requests resolved after newer ones. Implemented a 400ms debounce controller and AbortController request cancellation.'
        },
        {
          title: 'Dynamic Image Resolution Handling',
          desc: 'TMDB provides image backdrops and posters in various resolutions. Engineered an adaptive image URL builder that requests smaller assets on mobile screens to save user bandwidth.'
        },
        {
          title: 'Watchlist State Synchronization',
          desc: 'Maintaining consistent button states ("Add to Watchlist" vs "Remove from Watchlist") across searches and page transitions by syncing directly with a reactive local storage state observer.'
        }
      ],
      improvements: [
        'Port the application to Next.js 14 with React Server Components for instant initial page loads and SEO',
        'Integrate YouTube Player API for trailer playback directly within the app',
        'Add AI-driven "What to watch tonight" recommendation engine powered by Gemini API',
        'Include user ratings and community reviews submission'
      ],
      techStack: [
        { name: 'JavaScript (ES6+)', role: 'Core Logic & DOM Manipulation', iconClass: 'fab fa-js-square', iconColor: '#f7df1e' },
        { name: 'TMDB REST API', role: 'Movie Metadata & Imagery', iconClass: 'fas fa-film', iconColor: '#01d277' },
        { name: 'HTML5 & CSS3', role: 'Cinematic Grid & Poster Layout', iconClass: 'fab fa-html5', iconColor: '#e34f26' },
        { name: 'Netlify', role: 'Hosting & Automated Deployment', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' }
      ],
      info: {
        category: 'Entertainment Web App',
        duration: '3 Weeks',
        year: '2025',
        status: '🟢 Live in Production',
        role: 'Frontend Developer & UI Designer',
        architecture: 'Client-Side REST Architecture'
      },
      otherProjects: [5, 1, 2]
    }
  }
];
