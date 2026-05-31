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
      { label: "React", icon: ReactIcon },
      { label: "Tailwind CSS", icon: TaillwindIcon },
      { label: "Next js", icon: NextjsIcon },
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
  problem: string;
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
    title: "Al-Powered Job Matching Platform",
    problem:
      "Job seekers often struggle to find opportunities that match their skills, while recruiters spend significant time reviewing unsuitable applications manually.",
    description:
      "Developed an AI-powered platform that analyzes candidate profiles and job requirements to automate the matching process, improve recruitment efficiency, and recommend the most relevant opportunities.",
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
      "Home-based fashion designers often lack a professional online presence to showcase their work and attract potential customers.",
    description:
      "Built a modern portfolio platform featuring elegant design, smooth animations, and a responsive gallery that highlights traditional and modern tailoring creations while strengthening the brand's online visibility.",
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
      "Users need a simple and secure way to create, organize, and manage personal notes across devices.",
    description:
      "Created a full-stack note-taking application with authentication, CRUD functionality, and REST API integration, enabling users to manage their notes efficiently and securely.",
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
    problem:
      "Many product landing pages fail to effectively present product features and provide a seamless user experience across devices.",
    description:
      "Designed and developed a responsive landing page with a clean UI/UX, clear product presentation, and optimized layouts for desktop and mobile users.",
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
    problem:
      "Users need quick access to accurate weather information presented in a simple and user-friendly interface.",
    description:
      "Built a weather forecasting application that integrates external APIs to display real-time weather data, forecasts, and interactive weather information in a responsive UI.",
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
    title: "library book Hero Section",
    problem:
      "Digital library platforms often struggle to capture user attention and encourage exploration of available content.",
    description:
      "Designed and developed an engaging hero section with a responsive layout and intuitive interface to improve user engagement and enhance the browsing experience.",
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
      "Travelers often find it difficult to organize destinations, itineraries, and travel plans within a single platform.",
    description:
      "Developed a trip management application that helps users plan, organize, and manage travel details through a clean interface and structured itinerary management system.",
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
    title: "Teck web store",
    problem:
      "Students need practical experience building e-commerce interfaces that simulate real-world online shopping experiences.",
    description:       "Created a responsive e-commerce website featuring product displays, navigation, and modern layouts to demonstrate frontend development and responsive design skills.",
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
    problem:
      "Networking concepts and algorithms can be difficult for students to visualize and understand through theory alone.",
    description:
      "Developed a desktop-based network simulation system using Java and MySQL that visualizes networking operations and demonstrates core networking algorithms in an interactive environment.",
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
