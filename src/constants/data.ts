import type { ComponentType, SVGProps } from "react";
import booklibrary from "../assets/ChatGPT Image Aug 6, 2026, 01_04_31 PM.webp";
import noteapp from "../assets/ChatGPT Image Aug 6, 2026, 01_49_32 PM.webp";
import headphone from "../assets/ChatGPT Image Aug 6, 2026, 01_15_30 PM.webp";
import weather from "../assets/weather-app-web.webp";
import tabibWeb from "../assets/tabib-hafiz-web.webp";
import jobMatchingMockup from "../assets/mockups/job-matching-mockup.webp";
import rihlaMockup from "../assets/mockups/rihla-mockup.webp";
import automate from "../assets/Screenshot 2026-10-06 201845.png";
import soai from "../assets/Screenshot 2026-10-06 202012.png";

// Multi-device Mockup Assets (MacBook Pro 16 + iPhone 17 Pro with transparent backgrounds)
import tabibHafezLaptop from "../assets/mockups/devices/tabib-hafez-laptop.webp";
import tabibHafezMobile from "../assets/mockups/devices/tabib-hafez-mobile.webp";
import aiMatchingLaptop from "../assets/mockups/devices/ai-matching-laptop.webp";
import aiMatchingMobile from "../assets/mockups/devices/ai-matching-mobile.webp";
import rihlaLaptop from "../assets/mockups/devices/rihla-laptop.webp";
import rihlaMobile from "../assets/mockups/devices/rihla-mobile.webp";
import noteappLaptop from "../assets/mockups/devices/noteapp-laptop.webp";
import noteappMobile from "../assets/mockups/devices/noteapp-mobile.webp";
import headphoneLaptop from "../assets/mockups/devices/headphone-laptop.webp";
import headphoneMobile from "../assets/mockups/devices/headphone-mobile.webp";
import weatherLaptop from "../assets/mockups/devices/weather-laptop.webp";
import weatherMobile from "../assets/mockups/devices/weather-mobile.webp";
import booklibraryLaptop from "../assets/mockups/devices/booklibrary-laptop.webp";
import booklibraryMobile from "../assets/mockups/devices/booklibrary-mobile.webp";

import {
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  TaillwindIcon,
  NodejsIcon,
  ExpressjsIcon,
  MongodbIcon,
  MysqlIcon,
  GithubIcon,
  FigmaIcon,
  VScodeIcon,
  LinuxIcon,
  PostmanIcon,
  GitIcon,
  HtmlIcon,
  CssIcon,
  BootsrapIcon,
  JavaIcon,
  ViteIcon,
  ReactRouterIcon,
  RestApiIcon,
  AxiosIcon,
  CIcon,
  N8nIcon,
  NextjsIcon,
  PostgreIcon,
  DjangoIcon,
  PythonIcon,
  FramerMotionIcon,
} from "./Icon";

export const techGroups = [
  {
    title: "Languages",
    items: [
      { label: "JavaScript", icon: JavascriptIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Python", icon: PythonIcon },
    ],
    hackathon: "text",
  },
  {
    title: "Frontend",
    items: [
      { label: "React", icon: ReactIcon },
      { label: "Next.js", icon: NextjsIcon },
      { label: "Tailwind", icon: TaillwindIcon },
    ],
    hackathon: "text",
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", icon: NodejsIcon },
      { label: "Express.js", icon: ExpressjsIcon },
      { label: "Django", icon: DjangoIcon },
    ],
    hackathon: "text",
  },
  {
    title: "Database",
    items: [
      { label: "PostgreSQL", icon: PostgreIcon },
      { label: "MySQL", icon: MysqlIcon },
      { label: "MongoDB", icon: MongodbIcon },
    ],
    hackathon: "text",
  },
  {
    title: "Tools",
    items: [
      { label: "Figma", icon: FigmaIcon },
      { label: "Git", icon: GitIcon },
      { label: "GitHub", icon: GithubIcon },
      { label: "Postman", icon: PostmanIcon },
    ],
    hackathon: "text",
  },
  {
    title: "Other",
    items: [
      { label: "HTML", icon: HtmlIcon },
      { label: "CSS", icon: CssIcon },
      { label: "Vite", icon: ViteIcon },
      { label: "REST API", icon: RestApiIcon },
      { label: "Axios", icon: AxiosIcon },
      { label: "React Router", icon: ReactRouterIcon },
      { label: "n8n", icon: N8nIcon },
      { label: "Linux", icon: LinuxIcon },
      { label: "VS Code", icon: VScodeIcon },
      { label: "Bootstrap", icon: BootsrapIcon },
      { label: "C", icon: CIcon },
      { label: "Java", icon: JavaIcon },
    ],
    hackathon: "text",
  },
];

export type TechItem = {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type SkillBadge = {
  label: string;
  level: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type SkillCategory = {
  title: string;
  description: string;
  items: SkillBadge[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Architecture",
    description:
      "Building fast, accessible, responsive interfaces and fluid animations.",
    items: [
      { label: "React 19", level: "Production", icon: ReactIcon },
      { label: "JavaScript", level: "Production", icon: JavascriptIcon },
      { label: "TypeScript", level: "Production", icon: TypescriptIcon },
      { label: "Next.js", level: "Intermediate", icon: NextjsIcon },
      { label: "Tailwind CSS", level: "Production", icon: TaillwindIcon },
      { label: "Vite", level: "Production", icon: ViteIcon },
      { label: "HTML5 / CSS3", level: "Production", icon: HtmlIcon },
    ],
  },
  {
    title: "Backend & Systems",
    description:
      "Designing performant REST APIs, authentication flows, and data models.",
    items: [
      { label: "Node.js", level: "Production", icon: NodejsIcon },
      { label: "Express.js", level: "Production", icon: ExpressjsIcon },
      { label: "REST APIs", level: "Production", icon: RestApiIcon },
      { label: "Python", level: "Intermediate", icon: PythonIcon },
      { label: "Django", level: "Familiar", icon: DjangoIcon },
      { label: "C / Java", level: "Core Academic", icon: CIcon },
    ],
  },
  {
    title: "Databases & Cloud",
    description:
      "Managing persistence, schema design, and cloud database instances.",
    items: [
      { label: "MongoDB", level: "Production", icon: MongodbIcon },
      { label: "PostgreSQL", level: "Intermediate", icon: PostgreIcon },
      { label: "MySQL", level: "Intermediate", icon: MysqlIcon },
      { label: "Linux / Shell", level: "Production", icon: LinuxIcon },
    ],
  },
  {
    title: "Product Design & Workflow",
    description:
      "End-to-end prototyping, design systems, and efficient workflows.",
    items: [
      { label: "Figma UI/UX", level: "Advanced", icon: FigmaIcon },
      { label: "n8n", level: "Production", icon: N8nIcon },
      { label: "Git & GitHub", level: "Production", icon: GithubIcon },
      { label: "Postman", level: "Production", icon: PostmanIcon },
    ],
  },
];

export type Typeproject = "development" | "uiux";
export type ProjectType = Typeproject;
export type ProjectRole = "fullstack" | "frontend" | "backend" | "design";
export type ProjectCategory = "personal" | "university" | "client" | "hackathon";

export const roleConfig: Record<ProjectRole, string> = {
  fullstack: "Full-Stack Developer",
  frontend: "Frontend Developer",
  backend: "Backend Developer",
  design: "UI/UX Designer",
};

export const categoryConfig: Record<ProjectCategory, string> = {
  personal: "Personal Project",
  university: "University Project",
  client: "Client Project",
  hackathon: "Hackathon",
};

export type project = {
  id: number;
  type: Typeproject;
  role: ProjectRole;
  category: ProjectCategory;
  projectType: string;
  team: string;
  status: "Completed" | "In Progress";
  year: string;
  title: string;
  problem?: string;
  solution?: string;
  description: string;
  shortDescription: string;
  keyFeatures?: string[];
  outcome?: string;
  image: string;
  laptopImage?: string;
  mobileImage?: string;
  tech: TechItem[];
  liveDemo: string;
  github: string;
  figma: string;
  linkedin?: string;
  hackathon: string;
};

export const projects: project[] = [
  {
    id: 3,
    type: "development",
    role: "fullstack",
    category: "hackathon",
    projectType: "Web App / SaaS MVP",
    team: "Team of 3 Developers",
    status: "Completed",
    year: "2026",
    title: "AI-Powered Job Matching Platform",
    problem:
      "Job seekers struggle to find roles that match their exact skill sets, while recruiters spend dozens of hours manually reviewing unstructured resumes with high mismatch rates.",
    solution:
      "Built an automated recruitment platform that analyzes candidate skill profiles, computes match compatibility scores, and streamlines candidate evaluation through automated workflows.",
    description:
      "Developed for the Automate & Innovate Hackathon. As a Full-Stack Developer, I architected frontend components in React and TypeScript, integrated backend REST endpoints with MongoDB, and connected automated notification workflows using n8n.",
    shortDescription:
      "An intelligent recruitment platform that matches candidates to job opportunities based on skill compatibility.",
    keyFeatures: [
      "Dynamic skill matching and candidate compatibility scoring",
      "Recruiter review dashboard with candidate ranking",
      "Automated webhook notification pipeline powered by n8n",
      "Responsive user interface built with React, TypeScript, and Tailwind CSS",
    ],
    outcome:
      "Designed, developed, and pitched a working MVP in 48 hours, earning a Certificate of Recognition as a hackathon finalist.",
    image: jobMatchingMockup,
    laptopImage: aiMatchingLaptop,
    mobileImage: aiMatchingMobile,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "MongoDB", icon: MongodbIcon },
      { label: "n8n", icon: N8nIcon },
      { label: "REST API", icon: RestApiIcon },
      { label: "Figma", icon: FigmaIcon },
    ],
    hackathon: "Automate & Innovate",
    liveDemo: "https://estin-hackathon.vercel.app/",
    github: "https://github.com/lo-ucif/estin-hackathon.git",
    figma:
      "https://www.figma.com/deck/h5Pmcq96LZC3Q5065s940j/Untitled?node-id=1-220&viewport=-5849%2C-109%2C0.53&t=08A4QFzdxSyXK653-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    linkedin:
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_ai-powered-job-matching-platform-activity-7492710718945943552-9YBE",
  },
  {
    id: 5,
    type: "development",
    role: "fullstack",
    category: "personal",
    projectType: "Full-Stack Web App",
    team: "Solo Developer",
    status: "Completed",
    year: "2025",
    title: "Secure Cloud Note App",
    problem:
      "Local notes are vulnerable to loss and lack cross-device synchronization, while many third-party note applications are cluttered and slow.",
    solution:
      "Built a lightweight, secure note management application with JWT authentication, categorized tagging, and real-time cloud storage.",
    description:
      "A full-stack web application designed for fast, distraction-free note taking. I built both the client and server from scratch, implementing RESTful endpoints, password hashing, and responsive UI components.",
    shortDescription:
      "A secure, cloud-synced note management application with authentication and category filters.",
    keyFeatures: [
      "User authentication and session management with JWT and bcrypt",
      "Full CRUD operations for notes with instant UI updates",
      "Tag-based categorization and live title search",
      "Responsive dark-mode interface built with React and Tailwind CSS",
    ],
    outcome:
      "Deployed a responsive full-stack platform with secure authentication and reliable cloud persistence on MongoDB Atlas.",
    image: noteapp,
    laptopImage: noteappLaptop,
    mobileImage: noteappMobile,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Node.js", icon: NodejsIcon },
      { label: "Express.js", icon: ExpressjsIcon },
      { label: "MongoDB", icon: MongodbIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "Figma", icon: FigmaIcon },
    ],
    hackathon: "",
    liveDemo: "https://note-web-seven-smoky.vercel.app/",
    github: "https://github.com/lo-ucif/note_web.git",
    figma:
      "https://www.figma.com/design/rm2Fvk9U1lDoC3paoBDvge/note-app?node-id=0-1&t=JMrUlY7hLogXADuu-1",
  },
  {
    id: 6,
    type: "development",
    role: "frontend",
    category: "personal",
    projectType: "Product Landing Page",
    team: "Solo Developer",
    status: "Completed",
    year: "2025",
    title: "Headphone Product Showcase",
    problem:
      "Consumer electronics pages often feel static and fail to showcase product features through engaging visual storytelling.",
    solution:
      "Designed and coded a modern product landing page with dynamic feature sections, responsive layout grids, and interactive browsing.",
    description:
      "A sleek e-commerce showcase page created for an audio headphone brand. Designed in Figma and built with React, focusing on visual hierarchy, clean spacing, and mobile responsiveness.",
    shortDescription:
      "A modern product landing page for audio gear featuring responsive design and fluid visuals.",
    keyFeatures: [
      "Hero section with product focal point and value callouts",
      "Interactive audio specification and feature breakdown",
      "Responsive typography and cross-device grid system",
      "Smooth micro-interactions and transitions",
    ],
    outcome:
      "Created a pixel-perfect, mobile-friendly landing page with clean modular components.",
    image: headphone,
    laptopImage: headphoneLaptop,
    mobileImage: headphoneMobile,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "JavaScript", icon: JavascriptIcon },
      { label: "CSS", icon: CssIcon },
      { label: "Figma", icon: FigmaIcon },
    ],
    hackathon: "",
    liveDemo: "https://headphone-olive.vercel.app/",
    github: "https://github.com/lo-ucif/headphone.git",
    figma:
      "https://www.figma.com/design/8CyxT9T0MwuaRxzPNhJDl3/headbods?node-id=0-1&t=hLAwadaGzomyeBGf-1",
  },
  {
    id: 7,
    type: "development",
    role: "frontend",
    category: "personal",
    projectType: "API Web Application",
    team: "",
    status: "Completed",
    year: "2025",
    title: "Weather Insights App",
    description:
      "A lightweight educational frontend project built to learn and practice connecting external REST weather APIs with modern React and TypeScript. Features real-time temperature tracking, atmospheric metrics, and city search integration.",
    shortDescription:
      "An educational frontend project built to practice consuming and integrating real-time weather APIs in React and TypeScript.",
    keyFeatures: [
      "Real-time temperature, humidity, and wind condition display",
      "Multi-day forecast breakdown with dynamic weather condition icons",
      "City search with debounced API queries and error handling",
      "Responsive, clean card layout built with Tailwind CSS",
    ],
    outcome:
      "Delivered a fast, zero-ad weather tool with clean state management and responsive mobile behavior.",
    image: weather,
    laptopImage: weatherLaptop,
    mobileImage: weatherMobile,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "REST API", icon: RestApiIcon },
      { label: "Axios", icon: AxiosIcon },
      { label: "Figma", icon: FigmaIcon },
    ],
    hackathon: "",
    liveDemo: "https://weather-azure-phi.vercel.app/",
    github: "https://github.com/lo-ucif/weather.git",
    figma:
      "https://www.figma.com/design/wXIbw0NNKQHh5LXUW9SMsg/weather-web?node-id=0-1&t=onOswin6pBI3t0Tu-1",
  },
  {
    id: 8,
    type: "development",
    role: "frontend",
    category: "personal",
    projectType: "Website Component",
    team: "Solo Developer",
    status: "Completed",
    year: "2025",
    title: "Digital Library Hero Section",
    problem:
      "Online reading platforms often lack engaging entry points that encourage users to explore literary collections.",
    solution:
      "Designed and coded a modern hero component featuring trending book spotlights, clear navigation, and subtle hover interactions.",
    description:
      "An editorial-style hero section for a digital book platform. Explored balanced typography, clean imagery placement, and engaging micro-interactions.",
    shortDescription:
      "A modern hero section for a digital book platform designed for visual clarity and engagement.",
    keyFeatures: [
      "Curated book showcase with interactive hover states",
      "Quick search bar interaction for immediate book discovery",
      "Responsive typography and fluid scaling",
      "Clean component structure ready for CMS integration",
    ],
    outcome:
      "Refined front-end styling skills and component reusability with clean CSS layouts.",
    image: booklibrary,
    laptopImage: booklibraryLaptop,
    mobileImage: booklibraryMobile,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "JavaScript", icon: JavascriptIcon },
      { label: "CSS", icon: CssIcon },
      { label: "Figma", icon: FigmaIcon },
    ],
    hackathon: "",
    liveDemo: "https://library-book-imur.vercel.app/",
    github: "https://github.com/lo-ucif/library-book.git",
    figma:
      "https://www.figma.com/design/jqsnmcwi1RK0rZuzMR3ESr/book-library?node-id=0-1&t=JBJeWvcJ6pyxEyGx-1",
  },
  {
    id: 9,
    type: "development",
    role: "frontend",
    category: "hackathon",
    projectType: "Web App / SaaS Prototype",
    team: "Team of 3 Developers",
    status: "Completed",
    year: "2026",
    title: "Rihla Web — Smart Travel Planner",
    problem:
      "Travelers in Algeria often struggle to discover organized excursions, find verified local tour guides, and budget multi-day trips across diverse regions.",
    solution:
      "Developed a smart travel planning platform that builds personalized itineraries based on user budget and destination preferences, complete with route guidance and guide coordination.",
    description:
      "Built during the W-Hackathon. As Frontend Developer, I built responsive itinerary views, interactive budget calculations, and dynamic tour guide directory components using Next.js and TypeScript.",
    shortDescription:
      "A smart travel planning platform that generates personalized itineraries based on budget and destinations.",
    keyFeatures: [
      "Dynamic itinerary builder tailored to budget and travel dates",
      "Local tour guide directory and group travel coordination",
      "Route discovery with destination highlights and recommendations",
      "Responsive layout built with Next.js, TypeScript, and Tailwind CSS",
    ],
    outcome:
      "Pitched and demonstrated a functional travel platform MVP during the W-Hackathon.",
    image: rihlaMockup,
    laptopImage: rihlaLaptop,
    mobileImage: rihlaMobile,
    tech: [
      { label: "Next.js", icon: NextjsIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "REST API", icon: RestApiIcon },
      { label: "Figma", icon: FigmaIcon },
    ],
    hackathon: "W-Hackathon Participant",
    liveDemo: "",
    github: "",
    figma: "https://www.figma.com/deck/F8gNPiNluy6D8r2CgLmZSQ",
  },
  {
    id: 12,
    type: "development",
    role: "frontend",
    category: "client",
    projectType: "Web Application",
    team: "Collaborative Project",
    status: "Completed",
    year: "2026",
    title: "Al-Tabib Al-Hafiz",
    problem:
      "Medical students struggle to manage memorization sessions and track student progress alongside demanding medical studies, making consistent Quran learning difficult to sustain.",
    solution:
      "A centralized platform that simplifies Quran learning, session management, and student progress monitoring in one organized, accessible workspace.",
    description:
      "A digital platform helping medical students manage their Quran memorization journey through organized learning circles and progress tracking. As Front-End Developer, I built the responsive interfaces, reusable components, and smooth animations that power the experience, using React.js, TypeScript, Vite, and Tailwind CSS with motion design from Framer Motion.",
    shortDescription:
      "A digital platform helping medical students manage Quran memorization through organized learning circles and progress tracking.",
    keyFeatures: [
      "Student management with centralized profiles and enrollment records",
      "Quran memorization tracking with structured daily and weekly progress",
      "Learning circles (Halaqat) management for teachers and supervisors",
      "Remote learning support for sessions held outside the classroom",
      "Teacher dashboard for supervising circles and reviewing student work",
      "Progress monitoring with clear visual indicators and statistics",
    ],
    outcome:
      "Delivered a modern, responsive interface for a more organized and accessible Quran learning experience, launched in production at tabibhafiz.com.",
    image: tabibWeb,
    laptopImage: tabibHafezLaptop,
    mobileImage: tabibHafezMobile,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Vite", icon: ViteIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "Framer Motion", icon: FramerMotionIcon },
    ],
    hackathon: "",
    liveDemo: "https://tabibhafiz.com/",
    github: "",
    figma: "",
  },
];

export const experienceItems = [
  {
    year: "2025 - Present",
    title: "Web Developer & UI/UX Designer",
    organization: "Independent & Client Projects",
    description:
      "Designing and developing responsive.",
  },
  {
    year: "2026",
    title: "Full-Stack Developer & Hackathon Finalist",
    organization: "Hackathons (Automate & Innovate, W-Hackathon)",
    description:
      "Engineered functional MVPs under 48-hour sprints, including an AI-powered talent matching platform and a smart travel itinerary planner. Collaborated in multidisciplinary teams to solve real-world challenges under tight deadlines.",
  },
];

export const certificateItems = [
  {
    title: "Design Member Recognition",
    label: "School of AI Bejaia",
    description:
      "Recognized for outstanding dedication and active contribution throughout the 2025/2026 season as a member of the Design team, supporting club activities, visual identity, and tech community events.",
    image: soai,
    alt: "Recognition Certificate - School of AI Bejaia",
  },
  {
    title: "Certificate of Recognition",
    label: "Automate & Innovate Hackathon",
    description:
      "Recognized for valuable technical contributions, teamwork, and creative execution in developing digital solutions during the Automate & Innovate Hackathon event.",
    image: automate,
    alt: "Certificate of Recognition - Automate & Innovate Hackathon",
  },
];

export const statusBadgeData = {
  text: "Under Modification",
  dotColor: "#F59E0B",
};
