import type { ComponentType, SVGProps } from "react";
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
} from "./Icon";

export const techGroups = [
  {
    title: "Languages",
    items: [
      { label: "JavaScript", icon: JavascriptIcon },
      { label: "TypeScript", icon: TypescriptIcon },
    ],
  },
  {
    title: "Frontend",
    items: [
      { label: "React", icon: ReactIcon },
      { label: "Tailwind CSS", icon: TaillwindIcon },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", icon: NodejsIcon },
      { label: "Express.js", icon: ExpressjsIcon },
    ],
  },
  {
    title: "Database",
    items: [
      { label: "MongoDB", icon: MongodbIcon },
      { label: "MySQL", icon: MysqlIcon },
    ],
  },
  {
    title: "Tools",
    items: [
      { label: "GitHub", icon: GithubIcon },
      { label: "Figma", icon: FigmaIcon },
    ],
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
    ],
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
}> = [
  {
    id: 1,
    title: "Weather Dashboard",
    description:
      "A weather dashboard application that displays current weather and forecasts for multiple cities with interactive charts.",
    image: "src/assets/Screenshot 2026-03-15 151330.png",
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "MongoDB", icon: MongodbIcon },
      { label: "Tailwind", icon: TaillwindIcon },
      { label: "JavaScript", icon: JavascriptIcon },
    ],
    liveDemo: "https://your-weather-app.com",
    github: "https://github.com/yourusername/weather-dashboard",
  },
  {
    id: 2,
    title: "Blog Platform",
    description:
      "A full-featured blog platform with markdown support, comments, and user authentication system.",
    image: "src/assets/Screenshot 2026-03-15 151330.png",
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "Node.js", icon: NodejsIcon },
      { label: "MongoDB", icon: MongodbIcon },
      { label: "Tailwind", icon: TaillwindIcon },
    ],
    liveDemo: "https://your-blog.com",
    github: "https://github.com/yourusername/blog-platform",
  },
  {
    id: 3,
    title: "Chat Application",
    description:
      "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
    image: "src/assets/Screenshot 2026-03-15 151330.png",
    tech: [
      { label: "React", icon: ReactIcon },
      { label: "Node.js", icon: NodejsIcon },
      { label: "Express", icon: ExpressjsIcon },
      { label: "MongoDB", icon: MongodbIcon },
    ],
    liveDemo: "https://your-chat-app.com",
    github: "https://github.com/yourusername/chat-app",
  },
];
