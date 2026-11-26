import booklibraryWeb from "@/assets/book-library-web.webp";
import noteappWeb from "@/assets/note-app-web.webp";
import headphone from "@/assets/headphone-showcase-web.webp";
import weather from "@/assets/weather-app-web.webp";
import tabibWeb from "@/assets/tabib-hafiz-web.webp";
import aiMatchingWeb from "@/assets/ai-matching-web.webp";
import rihlaWeb from "@/assets/rihla-web.webp";
import hafezWeb from "@/assets/hafez-web.webp";

// Multi-device Mockup Assets (MacBook Pro 16 + iPhone 17 Pro with transparent backgrounds)
import tabibHafezLaptop from "@/assets/mockups/devices/tabib-hafez-laptop.webp";
import tabibHafezMobile from "@/assets/mockups/devices/tabib-hafez-mobile.webp";
import hafezLaptop from "@/assets/mockups/devices/hafez-laptop.webp";
import hafezMobile from "@/assets/mockups/devices/hafez-mobile.webp";
import aiMatchingLaptop from "@/assets/mockups/devices/ai-matching-laptop.webp";
import aiMatchingMobile from "@/assets/mockups/devices/ai-matching-mobile.webp";
import rihlaLaptop from "@/assets/mockups/devices/rihla-laptop.webp";
import rihlaMobile from "@/assets/mockups/devices/rihla-mobile.webp";
import noteappLaptop from "@/assets/mockups/devices/noteapp-laptop.webp";
import noteappMobile from "@/assets/mockups/devices/noteapp-mobile.webp";
import headphoneLaptop from "@/assets/mockups/devices/headphone-laptop.webp";
import headphoneMobile from "@/assets/mockups/devices/headphone-mobile.webp";
import weatherLaptop from "@/assets/mockups/devices/weather-laptop.webp";
import weatherMobile from "@/assets/mockups/devices/weather-mobile.webp";
import booklibraryLaptop from "@/assets/mockups/devices/booklibrary-laptop.webp";
import booklibraryMobile from "@/assets/mockups/devices/booklibrary-mobile.webp";

import {
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  TaillwindIcon,
  NodejsIcon,
  ExpressjsIcon,
  MongodbIcon,
  FigmaIcon,
  CssIcon,
  ViteIcon,
  RestApiIcon,
  AxiosIcon,
  N8nIcon,
  NextjsIcon,
  FramerMotionIcon,
} from "@/constants/icons";
import type { Project } from "@/features/projects/types";

export const projects: Project[] = [
  {
    id: 13,
    type: "development",
    role: "fullstack",
    category: "personal",
    projectType: "SaaS Business · Founder",
    team: "Founder & Lead Developer",
    status: "Completed",
    year: "2026",
    title: "Hafez — Smart Quran Circles Platform",
    problem:
      "Students and Quran schools struggle to organize memorization circles, track daily recitation progress, and maintain structured attendance alongside demanding academic coursework.",
    solution:
      "A centralized platform that streamlines learning circles, attendance, and progress tracking in an intuitive, accessible workspace.",
    description:
      "A smart digital management platform for Quran memorization circles and schools (منصة ذكية لإدارة حلقات القرآن الكريم — تنظيم • متابعة • إدارة). As Founder and Lead Developer, I designed and built the complete web platform to empower Quran schools, supervisors, and students with centralized student management, daily and weekly memorization tracking, remote learning support, and dedicated teacher dashboards.",
    shortDescription:
      "A smart management platform for Quran memorization schools, streamlining learning circles, student attendance, and structured progress tracking.",
    keyFeatures: [
      "Student management with centralized profiles and enrollment records",
      "Quran memorization tracking with structured daily and weekly progress",
      "Learning circles (Halaqat) management for teachers and supervisors",
      "Remote learning support for sessions held outside the classroom",
      "Teacher dashboard for supervising circles and reviewing student work",
      "Progress monitoring with clear visual indicators and statistics",
    ],
    outcome:
      "Founded, designed, and launched in production at hafez.company, providing Quran schools with a streamlined digital workspace for student growth and circle supervision.",
    image: hafezWeb,
    laptopImage: hafezLaptop,
    mobileImage: hafezMobile,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "Framer Motion", icon: FramerMotionIcon },
      { label: "Figma", icon: FigmaIcon },
    ],
    hackathon: "Personal Business · Founder",
    liveDemo: "https://www.hafez.company/",
    github: "",
    figma: "",
    linkedin:
      "https://www.linkedin.com/posts/mnsthafez_%D9%84%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9%D9%86%D8%A7-%D9%88%D9%85%D8%AA%D8%A7%D8%A8%D8%B9%D8%A9-%D9%83%D9%84-%D8%AC%D8%AF%D9%8A%D8%AF-%D9%85%D9%86-%D9%85%D9%86%D8%B5%D8%A9-%D8%AD%D8%A7%D9%81%D8%B8-activity-7511505460752056321-Pqb6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFXpNDMBGYVLG4eX6B6TNBGOovKR8MMeCbM",
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
      "Recruiters spend hours manually screening resumes while candidates struggle to find matching roles.",
    solution:
      "Built an automated platform computing AI compatibility scores and streamlining hiring with n8n workflows.",
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
    image: aiMatchingWeb,
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
    liveDemo: "",
    github: "https://github.com/lo-ucif/estin-hackathon.git",
    figma:
      "https://www.figma.com/deck/h5Pmcq96LZC3Q5065s940j/Untitled?node-id=1-220&viewport=-5849%2C-109%2C0.53&t=08A4QFzdxSyXK653-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    linkedin: "https://lnkd.in/p/dpdTM9YE",
  },
  {
    id: 5,
    type: "development",
    role: "fullstack",
    category: "personal",
    projectType: "Full-Stack Web App (MERN)",
    team: "",
    status: "Completed",
    year: "2025",
    title: "Secure Cloud Note App",
    description:
      "My first full-stack MERN application (MongoDB, Express, React, Node.js), built to master full-stack architecture. Features RESTful API endpoints, seamless frontend integration, and full CRUD operations on MongoDB Atlas.",
    shortDescription:
      "My first MERN stack full-stack project built to practice connecting a React frontend with an Express API and MongoDB NoSQL database.",
    keyFeatures: [
      "Full CRUD operations for notes with instant UI updates",
      "RESTful API endpoints built with Express.js and Node.js",
      "NoSQL schema design and cloud persistence with MongoDB Atlas",
      "Responsive dark-mode interface built with React and Tailwind CSS",
    ],
    outcome:
      "Mastered the full-stack MERN development lifecycle, from database schema modeling to building and consuming REST APIs in React.",
    image: noteappWeb,
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
    liveDemo: "",
    github: "https://github.com/lo-ucif/note_web.git",
    figma:
      "https://www.figma.com/design/rm2Fvk9U1lDoC3paoBDvge/note-app?node-id=0-1&t=JMrUlY7hLogXADuu-1",
    linkedin: "https://lnkd.in/p/dX5kKVJe",
  },
  {
    id: 6,
    type: "development",
    role: "frontend",
    category: "personal",
    projectType: "Product Landing Page",
    team: "",
    status: "Completed",
    year: "2025",
    title: "Headphone Product Showcase",
    description:
      "An educational frontend showcase exploring Figma-to-code translation and core React principles. Features dynamic product element toggling, balanced typography hierarchy, and a fully responsive grid system across devices.",
    shortDescription:
      "An educational headphone showcase exploring Figma-to-code translation, dynamic element switching, and responsive design in React.",
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
    linkedin: "https://lnkd.in/p/dusyydBP",
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
      "A lightweight educational frontend project built to practice integrating external REST weather APIs with React and TypeScript. Features real-time atmospheric metrics, city search queries, and responsive card layouts.",
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
    linkedin: "https://lnkd.in/p/dX5kKVJe",
  },
  {
    id: 8,
    type: "development",
    role: "frontend",
    category: "personal",
    projectType: "Landing Page / UI Showcase",
    team: "",
    status: "Completed",
    year: "2025",
    title: "Book Library Landing Page",
    description:
      "An educational landing page built to master translating Figma UI/UX designs into modular React code line by line. Focused on component structure, typography hierarchy, and pixel-perfect responsiveness across all screen sizes.",
    shortDescription:
      "An educational frontend landing page built to practice translating Figma UI designs into clean, responsive React code line by line.",
    keyFeatures: [
      "Line-by-line translation of Figma UI designs into responsive React components",
      "Immersive hero section with clear typography hierarchy and call-to-action buttons",
      "Structured component hierarchy with modular CSS layout techniques",
      "Cross-device responsive design tested for mobile and desktop screens",
    ],
    outcome:
      "Mastered the workflow of turning Figma prototypes into production-ready React components with clean responsive styling.",
    image: booklibraryWeb,
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
    linkedin: "https://lnkd.in/p/dQWYkDpi",
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
      "Travelers in Algeria struggle to discover organized excursions, verified local guides, and budget trips.",
    solution:
      "Developed a smart travel platform that generates personalized itineraries based on budget and destinations, with guide coordination.",
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
    image: rihlaWeb,
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
    linkedin: "https://lnkd.in/p/dqz2Nbn9",
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
      "Medical students struggle to manage Quran memorization circles alongside demanding academic coursework.",
    solution:
      "A centralized platform that streamlines learning circles, attendance, and progress tracking in an intuitive, accessible workspace.",
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
    linkedin: "https://lnkd.in/p/dbtArdqU",
  },
];
