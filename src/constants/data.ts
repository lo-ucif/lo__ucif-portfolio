import type { ComponentType, SVGProps } from "react";
import booklibrary from "../assets/Screenshot 2026-04-08 185728.webp";
import noteapp from "../assets/image.webp";
import headphone from "../assets/Screenshot 2026-03-15 151330.webp";
import weather from "../assets/Screenshot 2026-04-08 194802.webp";
import oop from "../assets/Screenshot 2026-04-08 200005.webp";
import profd from "../assets/Screenshot 2026-04-08 195815.webp";
import estinhackathon from "../assets/Screenshot 2026-04-20 114159.png";
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
      { label: "VS Code", icon: VScodeIcon },
      { label: "Linux", icon: LinuxIcon },
      { label: "Postman", icon: PostmanIcon },
      { label: "Git", icon: GitIcon },
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
    description:
      "AI-powered web application that automates job matching by analyzing user profiles and employer requirements.",
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
    title: "Note Web App",
    description:
      "Full-stack note-taking application with authentication and CRUD features using REST APIs.",
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
    id: 3,
    title: "Headphone Website",
    description:
      "Modern product landing page with clean UI/UX design and a fully responsive layout.",
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
    id: 4,
    title: "Weather App",
    description:
      "Weather forecasting app using external APIs with real-time data and an interactive UI.",
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
    id: 5,
    title: "library book Hero Section",
    description:
      "Web application for browsing and managing a digital library with a responsive and user-friendly UI.",
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
    id: 6,
    title: "Network Simulation",
    description:
      "Network simulation system with visualization, implementing core networking algorithms",
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
  {
    id: 7,
    title: "Prof Manager Dashboard",
    description:
      "A professional profile page for department managers with a clean and structured UI, designed and built to present key information efficiently.",
    image: profd,
    tech: [
      { label: "HTML", icon: HtmlIcon },
      { label: "CSS", icon: CssIcon },
      { label: "JavaScript", icon: JavascriptIcon },
      { label: "Java", icon: JavaIcon },
      { label: "Mysql", icon: MysqlIcon },
    ],
    hackathon: "",
    liveDemo: "",
    github: "",
    figma: "",
  },
];
