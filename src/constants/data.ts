import type { ComponentType, SVGProps } from "react";
import booklibrary from "../assets/ChatGPT Image Aug 6, 2026, 01_04_31 PM.webp";
import noteapp from "../assets/ChatGPT Image Aug 6, 2026, 01_49_32 PM.webp";
import headphone from "../assets/ChatGPT Image Aug 6, 2026, 01_15_30 PM.webp";
import weather from "../assets/ChatGPT Image Aug 6, 2026, 01_37_13 PM.webp";
import estinhackathon from "../assets/ChatGPT Image Aug 6, 2026, 02_06_12 PM.webp";
import rihlaweb from "../assets/ChatGPT Image Aug 6, 2026, 01_40_47 PM.webp";
import sewing from "../assets/ChatGPT Image Aug 6, 2026, 01_57_53 PM.webp";
import hotel from "../assets/ChatGPT Image Aug 6, 2026, 12_56_04 PM.webp";
import shoes from "../assets/ChatGPT Image Aug 6, 2026, 12_50_35 PM.webp";
import rokhsa from "../assets/ChatGPT Image Aug 5, 2026, 11_48_00 PM 13.webp";
import tabib from "../assets/Slide 4_3 - 1.webp";
import automate from "../assets/Screenshot 2026-10-06 201845.png";
import soai from "../assets/Screenshot 2026-10-06 202012.png";

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
  tech: TechItem[];
  liveDemo: string;
  github: string;
  figma: string;
  hackathon: string;
};

export const projects: project[] = [
  {
    id: 1,
    type: "uiux",
    role: "design",
    category: "personal",
    projectType: "Mobile App Concept",
    team: "Solo Designer",
    status: "Completed",
    year: "2026",
    title: "Al-Tabib Al-Hafed",
    problem:
      "Medical students face demanding academic workloads that make it difficult to balance coursework with consistent Quran memorization and progress tracking.",
    solution:
      "Designed an empathetic, distraction-free mobile interface with clear daily revision schedules, habit consistency reminders, and structured progress tracking.",
    description:
      "A dedicated habit tracking and revision app concept designed specifically for medical students. As a UI/UX Designer, I focused on clean typography, calm visual hierarchy, and an intuitive user flow that eliminates cognitive fatigue.",
    shortDescription:
      "A UI/UX mobile design helping students balance Quran memorization with demanding academic schedules.",
    keyFeatures: [
      "Structured daily revision planner built around study breaks",
      "Progress analytics and habit consistency tracking",
      "Distraction-free reading view with soft night-friendly contrast",
      "Complete interactive high-fidelity prototype in Figma",
    ],
    outcome:
      "Delivered a comprehensive interactive prototype with verified positive usability feedback from medical student peers.",
    image: tabib,
    tech: [{ label: "Figma", icon: FigmaIcon }],
    hackathon: "",
    liveDemo:
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_Ui/Ux Design-uidesign-uxdesign-activity-7492710718945943552-9YBE",
    github: "",
    figma: "",
  },
  {
    id: 2,
    type: "uiux",
    role: "design",
    category: "personal",
    projectType: "Web App / Mobile App",
    team: "Solo Designer",
    status: "Completed",
    year: "2026",
    title: "Rokhsa — Smart Driving School Platform",
    problem:
      "Driving education in Algeria is largely managed through paper ledgers, phone calls, and manual records, leading to scheduling conflicts, lost student files, and administrative overhead.",
    solution:
      "Designed a dual-interface platform that digitizes the driving school workflow: a mobile app for learners to book sessions and track readiness, alongside a centralized web dashboard for schools to manage instructors, fleets, and exams.",
    description:
      "A modern digital ecosystem connecting driving students and schools. As the UI/UX Designer, I conducted user research, designed the responsive layout system, and built an interactive design system in Figma.",
    shortDescription:
      "A smart platform that digitizes driving school operations, lesson bookings, and student tracking.",
    keyFeatures: [
      "Intuitive student lesson booking and availability calendar",
      "Progress tracking for traffic law and practical driving exams",
      "Centralized school dashboard for student records and schedules",
      "Accessible design system with clear visual status indicators",
    ],
    outcome:
      "Created an end-to-end design system with over 20 high-fidelity screens spanning mobile and desktop viewports.",
    image: rokhsa,
    tech: [{ label: "Figma", icon: FigmaIcon }],
    hackathon: "",
    liveDemo:
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_Ui/Ux Design-uxdesign-figma-ugcPost-7490915921327198208-KWqx/",
    github: "",
    figma:
      "https://www.figma.com/design/NzHDINBZtitHegyQ5X1jCS/rukhsa-app?node-id=435-2&t=kM44AgQOkcenheHH-1",
  },
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
    image: estinhackathon,
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
  },
  {
    id: 4,
    type: "development",
    role: "frontend",
    category: "client",
    projectType: "Client Web Application",
    team: "Solo Developer",
    status: "Completed",
    year: "2026",
    title: "Works Exhibition — أم وائل",
    problem:
      "Managing custom bespoke tailoring orders through unorganized messaging apps led to lost client specifications, repetitive pricing questions, and lack of a professional brand showcase.",
    solution:
      "Developed a dedicated digital portfolio that organizes fashion collections by category, showcases high-resolution garment details, and provides a direct path for client inquiries.",
    description:
      "A production client platform built for a tailoring and couture atelier. As Frontend Developer and UI Designer, I crafted the interface in Figma and implemented the responsive web application using React, TypeScript, and Tailwind CSS.",
    shortDescription:
      "A digital portfolio platform that centralizes tailoring projects and client inquiry management.",
    keyFeatures: [
      "Categorized fashion collections and garment gallery",
      "High-performance responsive image grid optimized with Vite",
      "Detailed project specifications and pricing display",
      "Direct WhatsApp contact integration for streamlined customer inquiries",
    ],
    outcome:
      "Successfully launched into production, giving the client a central professional showcase that elevated brand perception and client inquiry flow.",
    image: sewing,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "Vite", icon: ViteIcon },
      { label: "Figma", icon: FigmaIcon },
    ],
    hackathon: "",
    liveDemo: "https://sewing-oum-wail-web.vercel.app/",
    github: "https://github.com/lo-ucif/sewing-web.git",
    figma:
      "https://www.figma.com/design/LvzYoaNIgykoqBLv3c3SHR/Untitled?node-id=11-2&t=gQHOkTD7sn2QKCNR-1",
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
    team: "Solo Developer",
    status: "Completed",
    year: "2025",
    title: "Weather Insights App",
    problem:
      "Standard weather websites are often crowded with heavy advertisements, slow loading times, and cluttered visual displays.",
    solution:
      "Built a streamlined weather forecasting app that integrates external meteorological APIs to deliver current atmospheric data and location forecasts instantaneously.",
    description:
      "A responsive weather application built with React, TypeScript, and Axios. Features location-based lookups, debounced city searches, and dynamic weather condition cards.",
    shortDescription:
      "A real-time weather forecasting app with location-based insights and API integration.",
    keyFeatures: [
      "Real-time temperature, humidity, and wind condition display",
      "Multi-day forecast breakdown with dynamic weather condition icons",
      "City search with debounced API queries and error handling",
      "Responsive, clean card layout built with Tailwind CSS",
    ],
    outcome:
      "Delivered a fast, zero-ad weather tool with clean state management and responsive mobile behavior.",
    image: weather,
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
    image: rihlaweb,
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
    id: 10,
    type: "uiux",
    role: "design",
    category: "personal",
    projectType: "Web App UI/UX",
    team: "Solo Designer",
    status: "Completed",
    year: "2025",
    title: "Hotel Booking Platform",
    problem:
      "Many hospitality websites suffer from confusing navigation, hidden fees, and cluttered checkout flows that lead to reservation abandonment.",
    solution:
      "Designed an intuitive reservation platform with clear pricing transparency, instant room comparison, and a simplified 3-step booking flow.",
    description:
      "A comprehensive UI/UX case study for a hospitality booking platform. Focused on clean user journeys, transparent pricing breakdowns, and component reusability in Figma.",
    shortDescription:
      "A UI/UX design for a hotel booking platform focused on clear navigation and streamlined checkout.",
    keyFeatures: [
      "Clean room comparison cards with amenity indicators",
      "Transparent pricing breakdown without hidden costs",
      "Simplified 3-step reservation workflow",
      "Structured Figma design system with reusable UI tokens",
    ],
    outcome:
      "Built a complete interactive Figma prototype covering search, room inspection, and checkout flows.",
    image: hotel,
    tech: [{ label: "Figma", icon: FigmaIcon }],
    hackathon: "",
    liveDemo: "",
    github: "",
    figma:
      "https://www.figma.com/design/Ud9huPl27nRy6pMLPBIlZb/Latest-Hotel-Booking-Website-Prototype--Community---Copy-?node-id=0-1&t=tG3MIkJrcfgWfCgy-1",
  },
  {
    id: 11,
    type: "uiux",
    role: "design",
    category: "personal",
    projectType: "Mobile E-Commerce Design",
    team: "Solo Designer",
    status: "Completed",
    year: "2025",
    title: "Footwear E-Commerce Store",
    problem:
      "E-commerce stores often fail to provide effortless mobile browsing and clean product filtering on smaller viewports.",
    solution:
      "Crafted a modern, visual-first mobile shopping experience with bold product imagery, intuitive size and color selectors, and an uncluttered cart flow.",
    description:
      "A mobile-focused e-commerce concept designed in Figma. Emphasizes clean typography, organized product displays, and an effortless purchasing flow.",
    shortDescription:
      "An e-commerce mobile design offering organized product displays and an intuitive shopping experience.",
    keyFeatures: [
      "Visual product cards with variant and size quick-selectors",
      "Streamlined slide-out cart and frictionless checkout screen",
      "Clean mobile-first navigation and search filter drawer",
      "Consistent typography and spacing hierarchy in Figma",
    ],
    outcome:
      "Created an interactive mobile e-commerce prototype demonstrating modern UI patterns and retail UX principles.",
    image: shoes,
    tech: [{ label: "Figma", icon: FigmaIcon }],
    hackathon: "",
    liveDemo: "",
    github: "",
    figma:
      "https://www.figma.com/design/u3jcnp3N1n5IUYPxVqatKM/store-web?node-id=0-1&t=wlj0ZBzy51ESbxgt-1",
  },
];

export const experienceItems = [
  {
    year: "2025 - Present",
    title: "Web Developer & UI/UX Designer",
    organization: "Independent & Client Projects",
    description:
      "Designing and developing responsive, user-centered web applications. Collaborating with clients to build digital solutions with React, TypeScript, Node.js, and Figma — from wireframes and design systems to deployed products.",
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
  text: "Open To Work",
  dotColor: "#16FF08",
};
