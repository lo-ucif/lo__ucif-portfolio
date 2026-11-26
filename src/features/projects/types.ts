import type { ComponentType, SVGProps } from "react";

export type TechItem = {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

type Typeproject = "development" | "uiux";
type ProjectRole = "fullstack" | "frontend" | "backend" | "design";
type ProjectCategory = "personal" | "university" | "client" | "hackathon";

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

export type Project = {
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
