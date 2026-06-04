import type { ComponentType, SVGProps } from "react";
import booklibrary from "../assets/Screenshot 2026-04-08 185728.webp";
import noteapp from "../assets/image.webp";
import headphone from "../assets/Screenshot 2026-03-15 151330.webp";
import weather from "../assets/Screenshot 2026-04-08 194802.webp";
import oop from "../assets/Screenshot 2026-04-08 200005.webp";
import estinhackathon from "../assets/Screenshot 2026-04-20 114159.png";
import rihlaweb from "../assets/image.png";
import aiweb from "../assets/download (24).jpg";
import sewing from "../assets/Screenshot 2026-05-24 000114.png";
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
  SwingIcon,
  N8nIcon,
  NextjsIcon,
} from "./Icon";

export const techGroups = [
  {
    title: "Languages",
    items: [
      { label: "JavaScript", icon: JavascriptIcon },
      { label: "TypeScript", icon: TypescriptIcon },
    ],
    hackathon: "text",
  },
  {
    title: "Frontend",
    items: [
      { label: "Next js", icon: NextjsIcon },
      { label: "React", icon: ReactIcon },
      { label: "Tailwind CSS", icon: TaillwindIcon },
    ],
    hackathon: "text",
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", icon: NodejsIcon },
      { label: "Express.js", icon: ExpressjsIcon },
    ],
    hackathon: "text",
  },
  {
    title: "Database",
    items: [
      { label: "MongoDB", icon: MongodbIcon },
      { label: "MySQL", icon: MysqlIcon },
    ],
    hackathon: "text",
  },
  {
    title: "Tools",
    items: [
      { label: "GitHub", icon: GithubIcon },
      { label: "Figma", icon: FigmaIcon },
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
      { label: "VS Code", icon: VScodeIcon },
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

export const projects: Array<{
  id: number;
  title: string;
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
    title: "AI-Powered Job Matching Platform",
    problem:
      "Job seekers often struggle to find suitable opportunities that match their skills and portfolios. Recruiters also face difficulties reviewing large numbers of applications, many of which are incomplete or irrelevant, making the hiring process slow and inefficient.",
    description:
      "Developed an AI-powered job matching platform that analyzes candidate profiles and job requirements to calculate compatibility scores and recommend the most suitable opportunities. The system helps job seekers find relevant positions while enabling recruiters to quickly identify the best candidates through AI-driven ranking and filtering.",
    image: estinhackathon,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "figma", icon: FigmaIcon },
      { label: "MongoDB", icon: MongodbIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "REST API", icon: RestApiIcon },
      { label: "n8n", icon: N8nIcon },
    ],
    hackathon: "automate & innovate",
    liveDemo: "https://estin-hackathon.vercel.app/",
    github: "https://github.com/lo-ucif/estin-hackathon.git",
    figma:
      "https://www.figma.com/deck/h5Pmcq96LZC3Q5065s940j/Untitled?node-id=1-220&viewport=-5849%2C-109%2C0.53&t=08A4QFzdxSyXK653-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 2,
    title: "Maison de Couture - أم وائل",
    problem:
      "Managing tailoring projects manually makes it difficult to find previous work, prices, specifications, dates, and costs when customers request information about past designs.",
    description:
      "Built a digital portfolio platform that centralizes tailoring projects, including photos, specifications, prices, dates, and costs. The platform allows the designer to easily showcase and manage her work from a single place.",
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
    id: 3,
    title: "Note Web App",
    problem:
      "Personal notes stored locally on a device can be lost due to hardware issues, system failures, or device changes, making important information difficult to access and manage.",
    description:
      "Developed a web-based note-taking application that securely stores notes online, allowing users to access, create, edit, and manage their notes from any device through their account.",
    image: noteapp,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "Node.js", icon: NodejsIcon },
      { label: "MongoDB", icon: MongodbIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Express.js", icon: ExpressjsIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "figma", icon: FigmaIcon },
    ],
    hackathon: "",
    liveDemo: "https://note-web-seven-smoky.vercel.app/",
    github: "https://github.com/lo-ucif/note_web.git",
    figma:
      "https://www.figma.com/design/rm2Fvk9U1lDoC3paoBDvge/note-app?node-id=0-1&t=JMrUlY7hLogXADuu-1",
  },
  {
    id: 4,
    title: "Headphone Website",
    description:
      "A modern product landing page designed for showcasing headphones with an attractive user interface, responsive design, and clear presentation of product features and specifications.",
    image: headphone,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "JavaScript", icon: JavascriptIcon },
      { label: "css", icon: CssIcon },
      { label: "figma", icon: FigmaIcon },
    ],
    hackathon: "",
    liveDemo: "https://headphone-olive.vercel.app/",
    github: "https://github.com/lo-ucif/headphone.git",
    figma:
      "https://www.figma.com/design/8CyxT9T0MwuaRxzPNhJDl3/headbods?node-id=0-1&t=hLAwadaGzomyeBGf-1",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "A weather forecasting web application that provides real-time weather conditions, forecasts, and location-based weather information through external API integration and a responsive user interface.",
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
    id: 6,
    title: "Library Book Hero Section",
    description:
      "A modern hero section designed for digital library platforms, featuring an engaging interface, responsive layout, and visually appealing design that encourages users to explore available books and resources.",
    image: booklibrary,
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "css", icon: CssIcon },
      { label: "JavaScript", icon: JavascriptIcon },
      { label: "figma", icon: FigmaIcon },
    ],
    hackathon: "",
    liveDemo: "https://library-book-imur.vercel.app/",
    github: "https://github.com/lo-ucif/library-book.git",
    figma:
      "https://www.figma.com/design/jqsnmcwi1RK0rZuzMR3ESr/book-library?node-id=0-1&t=JBJeWvcJ6pyxEyGx-1",
  },
  {
    id: 7,
    title: "Rihla Web",
    problem:
      "Tourists often face difficulties planning trips, finding suitable routes, discovering attractions, and connecting with local guides or travel groups for organized experiences.",
    description:
      "Developed a smart travel planning platform that generates personalized travel routes based on budget, destination preferences, and the number of places users wish to visit. The platform provides route mapping, attraction recommendations, guide search functionality, and group travel coordination features.",
    image: rihlaweb,
    tech: [
      { label: "Next js", icon: NextjsIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "figma", icon: FigmaIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "REST API", icon: RestApiIcon },
    ],
    hackathon: "w-hackathon",
    liveDemo: "",
    github: "",
    figma: "https://www.figma.com/deck/F8gNPiNluy6D8r2CgLmZSQ",
  },
  {
    id: 8,
    title: "Teck Web Store",
    description:
      "An educational AI-assisted web project developed for academic purposes. The platform demonstrates modern web development concepts through a responsive e-commerce style interface and interactive user experience.",
    image: aiweb,
    tech: [
      { label: "HTML", icon: HtmlIcon },
      { label: "CSS", icon: CssIcon },
      { label: "JavaScript", icon: JavascriptIcon },
    ],
    hackathon: "",
    liveDemo: "",
    github: "https://github.com/lo-ucif/p-web-project",
    figma: "",
  },
  {
    id: 9,
    title: "Network Simulation",
    description:
      "A Java Swing desktop application designed for learning and experimenting with computer networks. The system provides a graphical interface for building network topologies using computers, routers, and networking components, while including a dual-layer security mechanism based on password authentication and USB verification.",
    image: oop,
    tech: [
      { label: "Java", icon: JavaIcon },
      { label: "Mysql", icon: MysqlIcon },
      { label: "Java Swing", icon: SwingIcon },
    ],
    hackathon: "",
    liveDemo: "",
    github: "https://github.com/lo-ucif/oop-p2.git",
    figma: "",
  },
];
