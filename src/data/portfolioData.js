/**
 * Centralized Portfolio Data for Raihanur Rahman
 * Edit personal details, skills, projects, and education directly here.
 */

export const personalInfo = {
  name: "Raihanur Rahman",
  role: "Aspiring Full-Stack Developer",
  statusBadge: "Actively Learning & Building",
  location: "Sylhet, Bangladesh",
  githubUsername: "Raihanz697",
  avatarUrl: "https://avatars.githubusercontent.com/u/252692712?v=4",

  // EDITABLE: Add your verified email here to enable email contact features
  // When empty or null, the UI gracefully prompts visitors to connect via GitHub
  email: "raihanmc420@gmail.com",

  tagline: "Building modern web experiences while learning, experimenting, and growing one project at a time.",

  aboutSummary: "I am a Computer Science and Engineering student at Leading University with a strong passion for modern web technologies. My journey involves continuous learning, breaking down complex interfaces into modular React components, and exploring full-stack web development.",

  aboutPoints: [
    {
      title: "Consistent Learning Journey",
      description: "Dedicated to practicing daily, exploring modern frontend workflows, and mastering modern JavaScript."
    },
    {
      title: "Component-Driven Architecture",
      description: "Focused on crafting clean, reusable, accessible UI components with Tailwind CSS and React."
    },
    {
      title: "Full-Stack Aspirations",
      description: "Expanding knowledge into Node.js, Express, and database technologies to build complete end-to-end applications."
    }
  ]
};

export const navigationLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Raihanz697",
    icon: "FaGithub",
    ariaLabel: "Visit Raihanur Rahman's GitHub Profile"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/raihanur-rahman62/",
    icon: "FaLinkedin",
    ariaLabel: "Visit Raihanur Rahman's LinkedIn Profile"
  }

];

export const skillsCategories = ["All", "Frontend", "Backend", "Database", "Tools"];

export const skillsData = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    level: "Proficient",
    icon: "FaReact",
    accentColor: "#61DAFB",
    description: "Component lifecycle, state management, hooks, and responsive interfaces"
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: "Proficient",
    icon: "SiJavascript",
    accentColor: "#F7DF1E",
    description: "Asynchronous programming, DOM manipulation, array methods, and modern syntax"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Comfortable",
    icon: "SiTypescript",
    accentColor: "#3178C6",
    description: "Learning static typing, interfaces, type aliases, and safer JavaScript development"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Practicing",
    icon: "SiTailwindcss",
    accentColor: "#38BDF8",
    description: "Utility-first responsive layouts, custom themes, and modern Tailwind v4"
  },
  {
    name: "HTML5 & Semantic Markup",
    category: "Frontend",
    level: "Advanced",
    icon: "SiHtml5",
    accentColor: "#E34F26",
    description: "Semantic page structures, accessibility essentials, and SEO best practices"
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "Frontend",
    level: "Advanced",
    icon: "FaCss3Alt",
    accentColor: "#1572B6",
    description: "Flexbox, Grid, custom animations, media queries, and dark mode styling"
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Familiar",
    icon: "SiNextdotjs",
    accentColor: "#E2E8F0",
    description: "App Router conventions, server/client components, and static site generation"
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    level: "Familiar",
    icon: "FaNodeJs",
    accentColor: "#22C55E",
    description: "Server runtime environment, NPM package ecosystem, and backend scripting"
  },
  {
    name: "Express.js",
    category: "Backend",
    level: "Familiar",
    icon: "SiExpress",
    accentColor: "#CBD5E1",
    description: "RESTful API routes, middleware handling, and JSON responses"
  },

  // Database
  {
    name: "MongoDB",
    category: "Database",
    level: "Familiar",
    icon: "SiMongodb",
    accentColor: "#10B981",
    description: "Document-oriented NoSQL database fundamentals, collections, and basic queries"
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    level: "Comfortable",
    icon: "FaGitAlt",
    accentColor: "#F05032",
    description: "Version control, branching, committing, and conflict resolution"
  },
  {
    name: "GitHub",
    category: "Tools",
    level: "Comfortable",
    icon: "FaGithub",
    accentColor: "#F8FAFC",
    description: "Repository management, open-source workflow, and project hosting"
  },
  {
    name: "Vite",
    category: "Tools",
    level: "Proficient",
    icon: "SiVite",
    accentColor: "#A855F7",
    description: "Next-generation frontend tooling, lightning fast HMR, and build optimization"
  }
];

export const projectsData = [
  {
    id: "fit-log",
    title: "Fit-Log",
    shortDescription: "A modern fitness and workout logging application to plan training routines, monitor exercise sets, and follow progress.",
    description: "Fit-Log is an application designed to help fitness enthusiasts track their physical workouts and training routines. Built with Next.js, DaisyUI, and Lucide React, it features structured exercise cards, workout categorization, and a clean, responsive interface.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "DaisyUI", "Lucide React"],
    githubUrl: "https://github.com/Raihanz697/Fit-Log",
    liveUrl: null, // Set verified live deployment URL here when published
    featured: true,
    status: "Work In Progress"
  },
  {
    id: "bpl-dream-11",
    title: "BPL Dream 11",
    shortDescription: "An interactive fantasy cricket team selector for the Bangladesh Premier League with virtual coin management.",
    description: "A dynamic cricket team builder web app where users can claim virtual credits, inspect player statistics and bidding costs, toggle between available and selected rosters, and draft their dream 11-player squad with budget checks.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS v4", "React Icons"],
    githubUrl: "https://github.com/Raihanz697/BPL-Dream-11",
    liveUrl: null,
    featured: true,
    status: "Completed Project"
  },
  {
    id: "dev-stack",
    title: "Dev-Stack",
    shortDescription: "Interactive developer tool curation and stack manager with interactive selection and toast feedback.",
    description: "A technology curation dashboard allowing developers to explore various developer tools and libraries, add them to their custom workspace stack, manage selections in an interactive sidebar, and receive real-time notifications.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS v4", "React Icons", "React Toastify"],
    githubUrl: "https://github.com/Raihanz697/Dev-Stack_5",
    liveUrl: null,
    featured: true,
    status: "Completed Project"
  },
  {
    id: "book-vibe",
    title: "Book Vibe",
    shortDescription: "A book discovery and reading list tracker app featuring curated book collections and reading statuses.",
    description: "A responsive reading companion web app that lets readers explore literature categories, view detailed book summaries and page metrics, and organize books into dedicated reading lists.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "DaisyUI"],
    githubUrl: "https://github.com/Raihanz697/book-vibe",
    liveUrl: null,
    featured: false,
    status: "Completed Project"
  },
  {
    id: "bazar-dor",
    title: "Bazar Dor",
    shortDescription: "A daily commodity and market price tracking web application for Bangladesh grocery markets.",
    description: "An informative web app providing updates on daily essential commodity prices across local markets in Bangladesh, featuring animated price marquees and structured category cards.",
    technologies: ["Next.js", "React", "Tailwind CSS", "React Marquee"],
    githubUrl: "https://github.com/Raihanz697/Bazar-dor",
    liveUrl: null,
    featured: false,
    status: "Work In Progress"
  },
  {
    id: "bangla-news-24",
    title: "Bangla News 24",
    shortDescription: "A clean digital news portal interface featuring headline tickers and responsive article sections.",
    description: "A news publishing layout displaying breaking news banners, topical article cards, and rolling headline tickers for a smooth reading experience.",
    technologies: ["Next.js", "React", "Tailwind CSS", "React Marquee"],
    githubUrl: "https://github.com/Raihanz697/Bangla-News-24",
    liveUrl: null,
    featured: false,
    status: "Completed Project"
  }
];

export const experienceData = {
  hasProfessionalExperience: false,
  statusMessage: "I'm currently focused on learning, building personal projects, and developing practical full-stack skills.",
  learningHighlights: [
    {
      title: "Hands-on Project Development",
      description: "Building responsive, modern user interfaces with React, Next.js, and Tailwind CSS to solve real-world problems."
    },
    {
      title: "Core Programming Fundamentals",
      description: "Strengthening problem solving, data structures, and computer science concepts through academic studies at Leading University."
    },
    {
      title: "Full-Stack Web Foundations",
      description: "Progressively exploring server-side development with Node.js, Express, and database management with MongoDB."
    }
  ],
  // When employment or internships are verified, add items here:
  items: []
};

export const educationData = [
  {
    id: "leading-university",
    institution: "Leading University",
    degree: "Computer Science Engineering",
    qualificationType: "Bachelor of Science (B.Sc.)",
    duration: "2028",
    status: "Current Education",
    location: "Sylhet, Bangladesh",
    highlight: "Undergraduate student developing foundational computer science theory, algorithms, and software development skills."
  },
  {
    id: "border-guard-college",
    institution: "Border Guard Public School and College, Sylhet",
    degree: "Higher Secondary Certificate (HSC)",
    qualificationType: "Higher Secondary Certificate",
    group: "Science",
    duration: "January 2020 – November 2022",
    grade: "GPA 4.92",
    status: "Previous Education",
    location: "Sylhet, Bangladesh",
    highlight: "Completed secondary higher education in Science discipline with outstanding academic performance (GPA 4.92/5.00)."
  }
];

export const resumeData = {
  filePath: "/resume.pdf",
  heading: "Resume & Qualifications",
  description: "View or download my resume outlining my academic background, technical skills, and project accomplishments. Feel free to reach out for additional details.",
  instructions: "To display your real resume, place your PDF document inside the project's public/ folder named resume.pdf.",
  summaryPoints: [
    "Computer Science & Engineering undergraduate at Leading University",
    "Hands-on experience in React, Next.js, JavaScript, and Tailwind CSS",
    "Track record of building responsive, functional web applications",
    "Strong academic track record in Science (GPA 4.92)"
  ]
};
