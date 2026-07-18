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
    items: ["Python", "JavaScript", "TypeScript", "Java", "Go", "SQL"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "FastAPI", "Django", "REST", "GraphQL", "gRPC"],
  },
  {
    category: "Data & Infra",
    items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "AWS"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "CI/CD", "Linux", "Testing", "System Design", "Agile"],
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
    role: "Software Engineer",
    org: "Databento",
    dates: "2024 — Present",
    description:
      "Built and maintained APIs for real-time financial data streaming and analytics, serving high-volume client traffic with low-latency requirements.",
  },
  {
    role: "Backend Engineer",
    org: "XYZ Corp",
    dates: "2020 — 2024",
    description:
      "Developed and maintained microservices, optimized database queries, and improved system reliability across core product infrastructure.",
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
