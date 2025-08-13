import { Project, Skill } from "@/app/types";

export const personalInfo = {
  name: "Võ Văn Quốc",
  title: "Fullstack Developer",
  tagline: "Turning ideas into powerful, user-friendly solutions — from concept to deployment.",
  aboutMeShort:
     "As a driven Fullstack Developer, I combine strong problem-solving skills with a deep focus on clean, maintainable code. My journey spans from building sleek front-end interfaces with React/Next.js to designing efficient back-end APIs. I’m committed to continuous learning, tackling challenges head-on, and delivering solutions that make an impact.",
  profilePicture: "/images/profile/profile.jpg",
};

export const allProjects: Project[] = [
  {
    slug: "rug-pull",
    title: "Rug-Pull-Detection",
    shortDescription:
      "Machine learning-powered tool to identify and prevent rug pull scams in Solana DeFi.",
    description:
      "This project develops a machine learning model to detect rug pull scams within the Solana decentralized finance (DeFi) ecosystem. Rug pulls occur when malicious developers abandon projects after withdrawing investor funds, leading to financial loss. The system leverages blockchain data analysis and machine learning classification to flag suspicious activities early, helping investors make informed decisions.",
    image: "/images/projects/project1.png",
    liveDemoUrl: "https://demo.example.com/ecommerce",
    githubUrl:
      "https://github.com/Vanquoc0201/Rug-Pull-Detection/tree/main",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    role: "Frontend Developer",
    challenges: [
      "Integrating blockchain data sources from the Solana network.",
      "Preprocessing large amounts of transaction data for ML analysis.",
      "Designing an intuitive UI for complex fraud detection metrics."
    ],
    solutions: [
      "Used Solana API to fetch and parse transaction data efficiently.",
      "Implemented data cleaning and feature engineering pipelines before feeding to the ML model.",
      "Built a clean and responsive frontend with Tailwind CSS for accessible data visualization."
    ]
  },
  {
    slug: "movie-booking-clone",
    title: "App Movie Booking Web Clone",
    shortDescription:
      "A modern movie ticket booking website with PayOS payment integration, built with Next.js frontend and NestJS + MySQL backend.",
    description:
      "Developed a movie ticket booking web application inspired by modern cinema systems: browse movies, view showtimes, select seats via an interactive seating chart, and pay securely through PayOS. The frontend was built with Next.js (App Router) + TypeScript + Tailwind CSS; state management handled by Zustand/React Query; forms managed with React Hook Form. The backend was implemented with NestJS using a modular architecture, ORM (Prisma/TypeORM) connected to MySQL, providing REST APIs, basic authentication (JWT), and PayOS webhooks for payment verification. The UI is fully responsive, features user notifications via toast, and follows a clear client/server separation.",
    image: "/images/projects/project2.png",
    liveDemoUrl: "https://demo.example.com/movie-booking",
    githubUrl: "https://github.com/Vanquoc0201/AppMovie",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Zustand",
      "React Hook Form",
      "NestJS",
      "Node.js",
      "MySQL",
      "Prisma",
      "JWT",
      "PayOS",
      "Docker"
    ],
    role: "Fullstack Developer",
    challenges: [
      "Synchronizing seat selection and booking status across multiple users in real-time.",
      "Implementing secure payment flow with PayOS webhooks.",
      "Maintaining clean separation between frontend and backend logic."
    ],
    solutions: [
      "Used optimistic updates with Zustand and server-side checks to prevent double bookings.",
      "Implemented PayOS webhook handlers in NestJS for payment verification.",
      "Adopted a modular backend architecture to keep services decoupled."
    ]
  },
  {
    slug: "be-baemin-microservices",
    title: "BE-Baemin Microservices",
    shortDescription:
      "A backend system built with a microservices architecture, simulating the core features of a Baemin-like food delivery app.",
    description:
      "Developed a backend system based on microservices architecture, replicating key functionalities of a food delivery platform similar to Baemin. The system consists of independent services such as order management, payment, product, user, and delivery. Integrated Elasticsearch for fast and accurate search on products and orders, and implemented caching (Redis) to store frequently accessed data. An API Gateway serves as the single entry point to route, secure, and manage requests across all microservices. The project is fully containerized using Docker and orchestrated via Docker Compose for simplified setup and deployment.",
    image: "/images/projects/project3.png",
    liveDemoUrl: "https://demo.example.com/be-baemin",
    githubUrl: "https://github.com/Vanquoc0201/BE-Baemin-Microservices",
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "MySQL",
      "Redis",
      "Elasticsearch",
      "Docker",
      "Docker Compose",
      "API Gateway",
      "Microservices Architecture",
      "REST API"
    ],
    role: "Backend Developer",
    challenges: [
      "Managing communication between multiple independent microservices.",
      "Ensuring fast search and filtering for large datasets.",
      "Reducing latency and avoiding bottlenecks in high-traffic scenarios."
    ],
    solutions: [
      "Implemented inter-service communication via REST and message queues.",
      "Integrated Elasticsearch for fast search capabilities.",
      "Used Redis caching to minimize database queries for frequently accessed data."
    ]
  },
  {
    slug: "nova-ledger-fraud-detection",
    title: "NovaLedger On-Chain Fraud Risk Analysis for Ethereum",
    shortDescription:
      "A blockchain analysis tool that checks Ethereum wallets, transactions, and smart contracts for potential risks using AI and network graph models.",
    description:
      "NovaLedger helps users detect and understand possible fraud on the Ethereum network. It collects on-chain data, processes it, and uses AI models to spot risky activities. You can search by wallet address, transaction hash, or ENS name right from the homepage. The app features risk scores, historical activity charts, and detailed breakdowns of suspicious patterns.",
    image: "/images/projects/project4.jpg",
    liveDemoUrl: "https://demo.example.com/nova-ledger",
    githubUrl:
      "https://github.com/pexa8335/Graph-based_Ethereum_Fraud_Detection",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Covalent API",
      "Telegram Bot API"
    ],
    role: "Frontend Developer",
    challenges: [
      "Visualizing large-scale blockchain transaction graphs in a browser environment.",
      "Optimizing API calls to handle high-latency blockchain data sources.",
      "Designing an interface that conveys complex fraud risk metrics clearly."
    ],
    solutions: [
      "Integrated graph visualization libraries optimized for large datasets.",
      "Used batched and cached API requests to improve performance.",
      "Designed a clean, data-focused UI with Tailwind CSS for clarity and responsiveness."
    ]
  }
];
export const featuredProjects: Project[] = allProjects.slice(0, 3);
export const allSkills: Skill[] = [
  { name: "HTML5", icon: "/images/icons/html.svg", category: "Frontend" },
  { name: "CSS3", icon: "/images/icons/css.svg", category: "Frontend" },
  { name: "Sass", icon: "/images/icons/sass.svg", category: "Frontend" },
  { name: "Redux", icon: "/images/icons/redux.svg", category: "Frontend" },
  { name: "React.js", icon: "/images/icons/react.png", category: "Frontend" },
  { name: "Next.js", icon: "/images/icons/next.png", category: "Frontend" },
  {
    name: "Tailwind CSS",
    icon: "/images/icons/tailwind.png",
    category: "Frontend",
  },
  { name: "ShadcnUI", icon: "/images/icons/shadcnui.png", category: "Frontend" },
  { name: "TypeScript", icon: "/images/icons/ts.png", category: "Frontend" },
  { name: "JavaScript", icon: "/images/icons/javascript.svg", category: "Frontend" },
  { name: "Node.js", icon: "/images/icons/node-js.png", category: "Backend" },
  { name: "Nest.js", icon: "/images/icons/nestjs.png", category: "Backend" },
  { name: "Prisma", icon: "/images/icons/prisma.png", category: "Backend" },
  { name: "SocketIO", icon: "/images/icons/socket-io.png", category: "Backend" },
  { name: "RabbitMQ", icon: "/images/icons/rabbitmq.png", category: "Backend" },
  { name: "Elasticsearch", icon: "/images/icons/elasticsearch.png", category: "Backend" },
  { name: "Kibana", icon: "/images/icons/kibana.png", category: "Backend" },
  { name: "Logstach", icon: "/images/icons/logstach.png", category: "Backend" },
  { name: "Prometheus", icon: "/images/icons/prometheus.png", category: "Backend" },
  { name: "MySQL", icon: "/images/icons/mysql.png", category: "Backend" },
  { name: "Docker", icon: "/images/icons/docker.png", category: "Devops" },
  { name: "Vercel", icon: "/images/icons/vercel.png", category: "Devops" },


];
export const experiences = [
  {
    title: "Fullstack Development Student",
    company: "Cybersoft Academy",
    duration: "2024 - Present",
    description: [
      "Completed intensive courses in Frontend (React, Next.js) and Backend (Node.js, Express, MongoDB) development.",
      "Advanced training in Backend Microservices architecture, API design, and system scalability.",
      "Built multiple hands-on projects, including e-commerce platforms, admin dashboards, and RESTful APIs.",
      "Gained experience with Git, Agile workflow, and modern development best practices.",
    ],
  },
  {
    title: "Independent Fullstack Projects",
    company: "Self-directed Learning",
    duration: "2024 - Present",
    description: [
      "Designed and developed personal projects from scratch, integrating both frontend and backend systems.",
      "Worked with real-world APIs and mock backends to simulate production scenarios.",
      "Focused on clean code, maintainability, and performance optimization.",
    ],
  },
];
export const education = [
  {
    degree: "Bachelor of Engineering in Electronics and Telecommunications",
    institution: "Posts and Telecommunications Institute of Technology (PTIT), Ho Chi Minh City",
    duration: "2024 - Present",
    gpa: "2.32",
    details:
      "Building a solid foundation in electronics, telecommunications, and computer science. Actively developing skills in fullstack web development, data structures & algorithms, and emerging technologies such as IoT, cloud computing, and blockchain.",
  },
];
export const contactInfo = {
  email: 'vovanquoc0201@gmail.com',
  phone: '+84 342701549', 
  location: 'Ho Chi Minh City, Vietnam', 
};
