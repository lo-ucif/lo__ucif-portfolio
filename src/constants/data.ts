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
      { label: "Next js", icon: NextjsIcon },
      { label: "React", icon: ReactIcon },
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
      { label: "MongoDB", icon: MongodbIcon },
      { label: "MySQL", icon: MysqlIcon },
      { label: "Postgres", icon: PostgreIcon },
    ],
    hackathon: "text",
  },
  {
    title: "Tools",
    items: [
      { label: "GitHub", icon: GithubIcon },
      { label: "Figma", icon: FigmaIcon },
      { label: "VS Code", icon: VScodeIcon },
    ],
    hackathon: "text",
  },
  {
    title: "Other",
    items: [
      { label: "HTML", icon: HtmlIcon },
      { label: "CSS", icon: CssIcon },
      { label: "Bootstrap", icon: BootsrapIcon },
      { label: "Java", icon: JavaIcon },
      { label: "Vite", icon: ViteIcon },
      { label: "React Router", icon: ReactRouterIcon },
      { label: "REST API", icon: RestApiIcon },
      { label: "Axios", icon: AxiosIcon },
      { label: "C", icon: CIcon },
      { label: "n8n", icon: N8nIcon },
      { label: "Linux", icon: LinuxIcon },
      { label: "Postman", icon: PostmanIcon },
      { label: "Git", icon: GitIcon },
    ],
    hackathon: "text",
  },
];

type TechItem = {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type ProjectType = "development" | "uiux";

export const projects: Array<{
  id: number;
  title: string;
  type: ProjectType;
  problem?: string;
  description: string;
  image: string;
  tech: TechItem[];
  liveDemo: string;
  github: string;
  figma: string;
  hackathon: string;
}> = [
  {
    id: 1,
    type: "uiux",
    title: "Al-Tabib Al-Hafed app design",
    problem:
      "Medical students face difficulties managing their time between their studies and Quran memorization, as well as consistently tracking their memorization and revision progress.",
    description:
      "I designed Al-Tabib Al-Hafed as an app that helps medical students organize their Quran memorization and revision, track their progress, and build a consistent daily habit. As a UI/UX Designer, I focused on simplicity, easy access to information, and an engaging experience that encourages users to stay consistent with their memorization journey.",
    image: tabib,
    tech: [{ label: "Figma", icon: FigmaIcon }],
    hackathon: "",
    liveDemo:
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_uiux-uidesign-uxdesign-activity-7492710718945943552-9YBE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFXpNDMBGYVLG4eX6B6TNBGOovKR8MMeCbM",
    github: "",
    figma: "",
  },
  {
    id: 2,
    type: "uiux",
    title: "Rokhsa - the Smart Driving School Platform",
    problem:
      "Learning to drive in Algeria is still largely managed through manual processes. Learners often struggle to find reliable driving schools, track their training progress, and manage appointments, while driving schools spend valuable time handling registrations, schedules, and student records manually.",
    description:
      "Built Rokhsa, a modern web and mobile platform that digitizes the entire driving school experience. The platform enables learners to register, book lessons, track their progress, and receive important notifications, while providing driving schools with a centralized dashboard to manage students, instructors, schedules, and administrative tasks efficiently.",
    image: rokhsa,
    tech: [{ label: "Figma", icon: FigmaIcon }],
    hackathon: "",
    liveDemo:
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_uiux-uxdesign-figma-ugcPost-7490915921327198208-KWqx/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFXpNDMBGYVLG4eX6B6TNBGOovKR8MMeCbM",
    github: "",
    figma:
      "https://www.figma.com/design/NzHDINBZtitHegyQ5X1jCS/rukhsa-app?node-id=435-2&t=kM44AgQOkcenheHH-1",
  },
  {
    id: 3,
    type: "development",
    title: "AI-Powered Job Matching Platform",
    problem:
      "Finding the right job can be challenging for candidates, while recruiters spend significant time reviewing large volumes of applications and identifying qualified profiles.",
    description:
      "Built an AI-powered recruitment platform that matches candidates with suitable job opportunities based on their skills and experience. The system analyzes profiles, ranks matches by compatibility score, and helps recruiters quickly identify the most relevant applicants.",
    image: estinhackathon,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "Figma", icon: FigmaIcon },
      { label: "MongoDB", icon: MongodbIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "REST API", icon: RestApiIcon },
      { label: "n8n", icon: N8nIcon },
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
    title: "Works Exhibition - أم وائل",
    problem:
      "Managing tailoring projects manually makes it difficult to organize previous work, pricing, specifications, and customer requests efficiently.",
    description:
      "Developed a digital portfolio platform that centralizes tailoring projects, allowing customers to browse designs while enabling the designer to manage work details, pricing, and project history from a single location.",
    image: sewing,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Vite", icon: ViteIcon },
      { label: "Tailwind", icon: TaillwindIcon },
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
    title: "Note Web App",
    problem:
      "Locally stored notes are vulnerable to data loss and cannot be easily accessed across multiple devices.",
    description:
      "Created a secure cloud-based note management application that allows users to create, organize, and access their notes from any device through authentication and real-time data storage.",
    image: noteapp,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "Node.js", icon: NodejsIcon },
      { label: "MongoDB", icon: MongodbIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Express.js", icon: ExpressjsIcon },
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
    title: "Headphone Website",
    description:
      "Designed and developed a modern product landing page for a headphone brand, featuring responsive layouts, engaging visuals, and a user-focused browsing experience.",
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
    title: "Weather App",
    description:
      "Built a weather forecasting application that integrates external APIs to provide real-time weather conditions, forecasts, and location-based insights through a clean and responsive interface.",
    image: weather,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "REST API", icon: RestApiIcon },
      { label: "Axios", icon: AxiosIcon },
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
    title: "Library Book Hero Section",
    description:
      "Designed and implemented a modern hero section for a digital library platform, focused on visual appeal, responsiveness, and improved user engagement.",
    image: booklibrary,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "CSS", icon: CssIcon },
      { label: "JavaScript", icon: JavascriptIcon },
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
    title: "Rihla Web",
    problem:
      "Travelers often face difficulties planning efficient trips, discovering attractions, and finding guides or travel groups for organized experiences.",
    description:
      "Developed a smart travel planning platform that generates personalized itineraries based on budget and destination preferences, while providing route recommendations, guide discovery, and group travel coordination features.",
    image: rihlaweb,
    tech: [
      { label: "Next.js", icon: NextjsIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Figma", icon: FigmaIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "REST API", icon: RestApiIcon },
    ],
    hackathon: "W-Hackathon",
    liveDemo: "",
    github: "",
    figma: "https://www.figma.com/deck/F8gNPiNluy6D8r2CgLmZSQ",
  },

  {
    id: 10,
    type: "uiux",
    title: "Booking Platform",
    description:
      "A digital booking platform that simplifies reservation management with clear interfaces, easy navigation, and an efficient user workflow.",
    image: hotel,
    tech: [{ label: "figma", icon: FigmaIcon }],
    hackathon: "",
    liveDemo: "",
    github: "",
    figma:
      "https://www.figma.com/design/Ud9huPl27nRy6pMLPBIlZb/Latest-Hotel-Booking-Website-Prototype--Community---Copy-?node-id=0-1&t=tG3MIkJrcfgWfCgy-1",
  },
  {
    id: 11,
    type: "uiux",
    title: "Shoes E-commerce",
    description:
      "A modern online shopping platform for shoes, offering organized product displays, smooth browsing, and a simple purchasing experience.",
    image: shoes,
    tech: [{ label: "figma", icon: FigmaIcon }],
    hackathon: "",
    liveDemo: "",
    github: "",
    figma:
      "https://www.figma.com/design/u3jcnp3N1n5IUYPxVqatKM/store-web?node-id=0-1&t=wlj0ZBzy51ESbxgt-1",
  },
];

// ---------- Status badge (shared via StatusBadgeContext) ----------
// Edit these values and they update in BOTH the Home hero badge
// and the mobile navigation badge at once.
export const statusBadgeData = {
  text: "Open To Work",
  dotColor: "#16FF08",
  // text: "Working On Ongoing Projects",
  // dotColor: "#efefef",
};
