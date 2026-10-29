export const projects = [
  {
    id: 1,
    category: 'fullstack',
    title: 'Wanderlust — Travel Platform',
    desc: 'A full-stack travel booking platform with real-time listings, user authentication, and Vercel deployment. Built with TypeScript and modern web technologies.',
    tags: ['TypeScript', 'React', 'Node.js'],
    image: '/images/project1.png',
    placeholder: 'https://placehold.co/600x400/6c63ff/ffffff?text=Wanderlust',
    github: 'https://github.com/bdshroud/b14-wanderlust-client',
    live: 'https://wanderlust-client-live.vercel.app',
    detail: {
      badges: ['Full Stack', '🟢 Live', '2026'],
      bigTitle: 'Wanderlust',
      bigSubtitle: 'Travel Platform',
      fullDesc: 'A full-stack travel booking platform with real-time listings, user authentication, and deployment on Vercel. Built with TypeScript and React on the frontend and Node.js on the backend.',
      overview: 'Wanderlust is a modern travel booking platform that allows users to discover and book travel destinations. The application is built with TypeScript and React for the frontend, with a Node.js backend deployed on Vercel.',
      features: [
        'Real-time travel listing search and filtering',
        'User authentication and profile management',
        'Booking and reservation system',
        'Responsive design for all devices',
        'Vercel deployment with CI/CD pipeline'
      ],
      challenges: [
        { title: 'Real-time data sync', desc: 'Keeping listings updated in real time across multiple users without page refreshes.' },
        { title: 'TypeScript strict typing', desc: 'Enforcing strong types across a full-stack TypeScript codebase for reliability.' }
      ],
      improvements: [
        'Add payment integration with Stripe',
        'Implement user reviews and ratings',
        'Build native mobile app with React Native'
      ],
      techStack: [
        { name: 'TypeScript', role: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React', role: 'Frontend UI', iconClass: 'fab fa-react', iconColor: '#61dafb' },
        { name: 'Node.js', role: 'Backend Runtime', iconClass: 'fab fa-node-js', iconColor: '#339933' },
        { name: 'Vercel', role: 'Deployment', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' }
      ],
      info: { category: 'Full Stack', duration: '2 months', year: '2026', status: '🟢 Live', role: 'Solo Developer' },
      otherProjects: [2, 3, 5]
    }
  },
  {
    id: 2,
    category: 'fullstack',
    title: 'DevStack — Developer Hub',
    desc: 'An interactive web app built with React 18, Vite, and Tailwind CSS to explore modern technologies, compare options, and build custom developer tech stacks with live feedback.',
    tags: ['TypeScript', 'React', 'Netlify'],
    image: '/images/project2.png',
    placeholder: 'https://placehold.co/600x400/f56565/ffffff?text=DevStack',
    github: 'https://github.com/bdshroud/devstack',
    live: 'https://silver-capybara-67135d.netlify.app/',
    detail: {
      badges: ['Full Stack', '🟢 Live', '2026'],
      bigTitle: 'DevStack',
      bigSubtitle: 'Developer Hub',
      fullDesc: 'An interactive web app to explore modern tech stacks, compare technologies, and get live feedback on your choices.',
      overview: 'DevStack helps developers choose the right tech stack for their projects by providing interactive comparisons, pros/cons analysis, and community recommendations.',
      features: [
        'Interactive tech stack builder',
        'Technology comparison tool',
        'Live feedback and recommendations',
        'Responsive UI with Tailwind CSS',
        'Deployed on Netlify with instant preview'
      ],
      challenges: [
        { title: 'Dynamic filtering', desc: 'Building a performant real-time filter/search over a large dataset of technologies.' }
      ],
      improvements: [
        'Add user accounts to save stacks',
        'Community voting on tech choices',
        'Integration with job board APIs'
      ],
      techStack: [
        { name: 'TypeScript', role: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React 18', role: 'Frontend UI', iconClass: 'fab fa-react', iconColor: '#61dafb' },
        { name: 'Vite', role: 'Build Tool', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        { name: 'Tailwind CSS', role: 'Styling', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
      ],
      info: { category: 'Full Stack', duration: '1 month', year: '2026', status: '🟢 Live', role: 'Solo Developer' },
      otherProjects: [1, 3, 6]
    }
  },
  {
    id: 3,
    category: 'frontend',
    title: 'News24 — News App',
    desc: 'A real-time news aggregation application built with React and REST APIs, featuring category filtering, search, and a clean reading experience.',
    tags: ['React', 'REST API', 'TypeScript'],
    image: '/images/project3.png',
    placeholder: 'https://placehold.co/600x400/48bb78/ffffff?text=News24',
    github: 'https://github.com/bdshroud/News24',
    live: null,
    detail: {
      badges: ['Frontend', '2026'],
      bigTitle: 'News24',
      bigSubtitle: 'News Aggregation App',
      fullDesc: 'A real-time news aggregation app built with React and REST APIs. Features category filtering, search, and a clean reading interface.',
      overview: 'News24 aggregates news from multiple sources via public REST APIs, presenting them in a clean, fast, categorized interface.',
      features: [
        'Real-time news from multiple sources',
        'Category filtering (Tech, Sports, Business, etc.)',
        'Search functionality',
        'Clean, distraction-free reading experience',
        'TypeScript for type safety'
      ],
      challenges: [
        { title: 'API rate limiting', desc: 'Handling rate limits from news APIs gracefully with caching strategies.' }
      ],
      improvements: [
        'Bookmark and save articles',
        'Offline reading with service workers',
        'Push notifications for breaking news'
      ],
      techStack: [
        { name: 'React', role: 'Frontend UI', iconClass: 'fab fa-react', iconColor: '#61dafb' },
        { name: 'TypeScript', role: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'REST API', role: 'Data Source', iconClass: 'fas fa-server', iconColor: '#6c63ff' }
      ],
      info: { category: 'Frontend', duration: '3 weeks', year: '2026', status: 'In Progress', role: 'Solo Developer' },
      otherProjects: [1, 2, 5]
    }
  },
  {
    id: 4,
    category: 'backend',
    title: 'Wanderlust — REST API Server',
    desc: 'The backend server powering the Wanderlust travel platform. Built with Node.js and Express, deployed on Vercel with REST API endpoints.',
    tags: ['Node.js', 'Express', 'Vercel'],
    image: '/images/project1.png',
    placeholder: 'https://placehold.co/600x400/ed8936/ffffff?text=Wanderlust+API',
    github: 'https://github.com/bdshroud/b14-wanderlust-server',
    live: 'https://b14-wanderlust-server.vercel.app',
    detail: {
      badges: ['Backend', '🟢 Live', '2026'],
      bigTitle: 'Wanderlust',
      bigSubtitle: 'REST API Server',
      fullDesc: 'The backend REST API powering the Wanderlust travel platform, built with Node.js and Express and deployed on Vercel.',
      overview: 'This server handles all business logic, authentication, and data operations for the Wanderlust travel platform. Built with Node.js/Express following REST principles.',
      features: [
        'RESTful API with full CRUD operations',
        'JWT authentication and authorization',
        'Input validation and error handling',
        'CORS configuration for frontend integration',
        'Deployed on Vercel serverless functions'
      ],
      challenges: [
        { title: 'Serverless cold starts', desc: 'Optimizing Vercel serverless functions to minimize cold start latency.' }
      ],
      improvements: [
        'Add GraphQL layer for flexible querying',
        'Implement Redis caching for hot routes',
        'Add rate limiting and DDoS protection'
      ],
      techStack: [
        { name: 'Node.js', role: 'Runtime', iconClass: 'fab fa-node-js', iconColor: '#339933' },
        { name: 'Express.js', role: 'Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'JavaScript', role: 'Language', iconClass: 'fab fa-js-square', iconColor: '#f7df1e' },
        { name: 'Vercel', role: 'Deployment', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' }
      ],
      info: { category: 'Backend', duration: '2 weeks', year: '2026', status: '🟢 Live', role: 'Solo Developer' },
      otherProjects: [1, 2, 6]
    }
  },
  {
    id: 5,
    category: 'frontend',
    title: 'Bazardor BD Daily — News Portal',
    desc: 'A Bangladeshi daily news portal with a clean, responsive layout. Designed and built with modern CSS and HTML for fast, accessible content delivery.',
    tags: ['CSS', 'HTML', 'Vercel'],
    image: '/images/project5.png',
    placeholder: 'https://placehold.co/600x400/dd6b20/ffffff?text=Bazardor+BD',
    github: 'https://github.com/bdshroud/bazardorbdaily',
    live: 'https://bazardorbdaily.vercel.app',
    detail: {
      badges: ['Frontend', '🟢 Live', '2025'],
      bigTitle: 'Bazardor BD Daily',
      bigSubtitle: 'News Portal',
      fullDesc: 'A Bangladeshi daily news portal with a clean, responsive layout built with modern CSS and HTML for fast, accessible content delivery.',
      overview: 'Bazardor BD Daily is a responsive Bangladeshi news portal designed to deliver news content quickly and accessibly across all devices.',
      features: [
        'Fully responsive layout for all screen sizes',
        'Fast loading with optimized CSS',
        'Clean, reader-friendly typography',
        'Category-based news organization',
        'Deployed on Vercel for global CDN delivery'
      ],
      challenges: [
        { title: 'Cross-browser CSS', desc: 'Ensuring consistent rendering across all major browsers without JavaScript dependencies.' }
      ],
      improvements: [
        'Add CMS backend for editorial team',
        'Implement AMP pages for mobile speed',
        'Dark mode support'
      ],
      techStack: [
        { name: 'HTML5', role: 'Structure', iconClass: 'fab fa-html5', iconColor: '#e34f26' },
        { name: 'CSS3', role: 'Styling', iconClass: 'fab fa-css3-alt', iconColor: '#1572b6' },
        { name: 'Vercel', role: 'Deployment', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' }
      ],
      info: { category: 'Frontend', duration: '2 weeks', year: '2025', status: '🟢 Live', role: 'Solo Developer' },
      otherProjects: [6, 1, 2]
    }
  },
  {
    id: 6,
    category: 'frontend',
    title: 'Movie Explorer — Film Discovery App',
    desc: 'A dynamic movie discovery app that lets users browse, search, and explore films using a live REST API. Clean UI with real-time search and responsive design.',
    tags: ['JavaScript', 'REST API', 'Netlify'],
    image: '/images/project6.png',
    placeholder: 'https://placehold.co/600x400/805ad5/ffffff?text=Movie+Explorer',
    github: 'https://github.com/bdshroud/Movie-Explorer',
    live: 'https://live-movie-explorer.netlify.app/',
    detail: {
      badges: ['Frontend', '🟢 Live', '2025'],
      bigTitle: 'Movie Explorer',
      bigSubtitle: 'Film Discovery App',
      fullDesc: 'A dynamic movie discovery application using the TMDB REST API. Users can search, browse, and explore film details in a clean, responsive interface.',
      overview: 'Movie Explorer integrates with the TMDB API to provide a rich film browsing experience with real-time search, genre filtering, and detailed movie pages.',
      features: [
        'Real-time movie search via TMDB API',
        'Browse by genre, popularity, or rating',
        'Detailed movie pages with cast and synopsis',
        'Responsive grid layout',
        'Deployed on Netlify with automatic builds'
      ],
      challenges: [
        { title: 'API pagination', desc: 'Implementing smooth infinite scroll with API pagination for large result sets.' },
        { title: 'Search debouncing', desc: 'Reducing API calls by debouncing the search input for better performance.' }
      ],
      improvements: [
        'Add user watchlist with localStorage',
        'Integrate trailer playback via YouTube API',
        'Add similar movies recommendations'
      ],
      techStack: [
        { name: 'JavaScript', role: 'Language', iconClass: 'fab fa-js-square', iconColor: '#f7df1e' },
        { name: 'REST API', role: 'Data Source', iconClass: 'fas fa-film', iconColor: '#6c63ff' },
        { name: 'HTML5', role: 'Structure', iconClass: 'fab fa-html5', iconColor: '#e34f26' },
        { name: 'CSS3', role: 'Styling', iconClass: 'fab fa-css3-alt', iconColor: '#1572b6' }
      ],
      info: { category: 'Frontend', duration: '3 weeks', year: '2025', status: '🟢 Live', role: 'Solo Developer' },
      otherProjects: [5, 1, 2]
    }
  }
];
