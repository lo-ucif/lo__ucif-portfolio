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
  LinuxIcon,
  PostmanIcon,
  HtmlIcon,
  ViteIcon,
  RestApiIcon,
  CIcon,
  N8nIcon,
  NextjsIcon,
  PostgreIcon,
  DjangoIcon,
  PythonIcon,
} from "@/constants/icons";

type SkillBadge = {
  label: string;
  level: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

type SkillCategory = {
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
