// ---------------------------------------------------------------------------
// All editable site content lives here. Swap this out once the real resume
// is available — components just render whatever is in this file.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Rajat Nipane",
  tagline: "Software Engineer building fast, reliable backend systems & APIs",
  summary:
    "I design and build scalable services, real-time data pipelines, and clean developer-facing APIs. Currently exploring new opportunities where I can solve hard backend problems.",
  email: "rnipane1@binghamton.edu.com",
  github: "https://github.com/your-github",
  linkedin: "www.linkedin.com/in/rajatnipane",
  photo: "/profile.jpg",
};

export const about = {
  paragraphs: [
    "I'm a software engineer with a focus on backend development, API design, and database systems. I like building things that hold up under real traffic — services that are fast, well-tested, and easy for other engineers to reason about.",
    "Most of my recent work has been on real-time data infrastructure: streaming APIs, high-throughput pipelines, and the kind of unglamorous plumbing that makes everything else possible. I care about clean interfaces, sane defaults, and code that doesn't need a novel to explain it.",
    "Outside of day-to-day engineering, I'm always poking at side projects and new tools — this site included.",
  ],
  stats: [
    { label: "Years Experience", value: "8+" },
    { label: "Projects Shipped", value: "15+" },
    { label: "Companies", value: "3" },
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Frontend",
    items: ["Vue.js (2 & 3)", "React", "Vuetify", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Deno", "FastAPI"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "GCP (Cloud Run)", "Docker", "Kubernetes", "CI/CD (Bitbucket Pipelines)"],
  },
  {
    category: "AI/ML",
    items: ["OpenAI", "Pinecone", "Retrieval-Augmented Generation (RAG)"],
  },
  {
    category: "Tools",
    items: ["Git", "Postman", "Apidog", "K6", "SuperOak"],
  },
];

export const projects = [
  {
    title: "Real-Time Market Data API",
    description:
      "A high-throughput streaming API for delivering real-time market data to thousands of concurrent clients, built with WebSockets and Kafka.",
    tags: ["Python", "Kafka", "Redis"],
    code: "#",
    live: "#",
  },
  {
    title: "Microservices Order Platform",
    description:
      "A modular order-processing system split into independent services for inventory, payments, and notifications, communicating over gRPC.",
    tags: ["Node.js", "Docker", "PostgreSQL"],
    code: "#",
    live: "#",
  },
  {
    title: "Personal Portfolio Site",
    description:
      "This site — a React + Tailwind portfolio built to showcase projects and experience, deployed on GitHub Pages via GitHub Actions.",
    tags: ["React", "Tailwind", "Vite"],
    code: "#",
    live: "#",
  },
  {
    title: "Internal Analytics Dashboard",
    description:
      "A dashboard surfacing usage and performance metrics for internal teams, with automated daily data pipelines feeding the backend.",
    tags: ["Python", "FastAPI", "AWS"],
    code: "#",
    live: "#",
  },
];

export const experience = [
  {
    role: "Software Developer",
    org: "Advanced Robot Solutions",
    location: "Milford, CT, USA",
    dates: "Aug 2023 — Present",
    achievements: [
      "Developed and deployed a production AI-powered kiosk application for a county government system using Vue 3, Node.js, Pinia, Strapi, and Google Cloud Run, enabling conversational public service access.",
      "Designed and built scalable REST APIs using Node.js, TypeScript, and Express, integrating a Pinecone vector database and implementing RAG-based search using OpenAI GPT-4.",
      "Engineered a real-time heartbeat monitoring system using WebSockets and Supabase, reducing system status detection time from 60 minutes to under 1 minute (98% improvement).",
      "Developed serverless APIs using Deno, TypeScript, and Supabase Edge Functions, supporting a distributed and scalable backend architecture.",
      "Implemented unit and integration testing (Deno + SuperOak), achieving 95% test coverage and improving system reliability.",
      "Built and maintained CI/CD pipelines using Bitbucket, reducing deployment time by 30% and improving release efficiency.",
      "Performed load and performance testing using K6, identifying bottlenecks and improving API response times under high traffic conditions.",
      "Developed responsive dashboard UI components using Vue, Vuetify, and Vuex, enhancing usability and user experience.",
    ],
  },
  {
    role: "Intern",
    org: "Advanced Micro Devices",
    location: "Austin, TX, USA",
    dates: "Jun 2023 — Aug 2023",
    achievements: [
      "Developed Python-based tooling to analyze and decode silicon diagnostic data, enabling faster performance evaluation workflows for AMD hardware testing.",
    ],
  },
  {
    role: "System Programmer",
    org: "IBM / Kyndryl",
    location: "Pune, India",
    dates: "Jul 2016 — Dec 2021",
    achievements: [
      "Developed and optimized automation scripts and a performance testing framework for large-scale banking applications using C, LoadRunner, and HP BSM.",
    ],
  },
];

export const education = [
  {
    degree: "M.S. in Computer Science",
    school:
      "Binghamton University, State University of New York — Thomas J. Watson College of Engineering and Applied Science",
    dates: "Jan 2022 — Aug 2023",
    description: "",
  },
  {
    degree: "B.E. in Computer Science",
    school: "G.H. Raisoni College of Engineering, Nagpur",
    dates: "2012 — 2016",
    description: "",
  },
];
