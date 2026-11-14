import type { ComponentType, SVGProps } from "react";

export type TechItem = {
  label: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export type ScreenItem = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  uxHighlights: string[];
  image: string;
  aspectRatio?: string;
};

export type ProblemChallenge = {
  number: string;
  title: string;
  description: string;
  iconName?: string;
};

export type PersonaData = {
  name: string;
  tagline: string;
  quote: string;
  demographics: { label: string; value: string }[];
  goals: string[];
  painPoints: string[];
  isPlaceholder?: boolean;
};

export type UserJourneyStep = {
  phase: string;
  goal: string;
  action: string;
  touchpoint: string;
  experience: "neutral" | "positive" | "challenging";
};

export type KeyInsight = {
  number: string;
  title: string;
  takeaway: string;
};

export type DesignSystemItem = {
  category: string;
  description: string;
  details: string[];
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  arabicTitle?: string;
  subtitle: string;
  shortDescription: string;
  projectType: string;
  platformType?: "app" | "web";
  presentationHeading?: string;
  role: string;
  designResponsibilities: string[];
  mainDesignFocus: string;
  platform: string;
  timeline: string;
  organization?: string;
  heroImage: string;
  mockupImage?: string;
  liveDemo?: string;
  figmaLink?: string;
  linkedin?: string;
  github?: string;
  tools: TechItem[];

  // 01 — Overview
  overview: {
    summary: string;
    objectives: string[];
  };

  // 02 — The Problem
  problem: {
    statement: string;
    context: string;
    targetAudience: string;
    challenges: ProblemChallenge[];
  };

  // 03 — Research & Discovery
  research: {
    overview: string;
    userNeeds: string[];
    persona: PersonaData;
    journey: UserJourneyStep[];
    keyInsights: KeyInsight[];
  };

  // 04 — Design Process
  designProcess: {
    overview: string;
    informationArchitecture: {
      description: string;
      hierarchy: { title: string; items: string[] }[];
    };
    userFlow: {
      description: string;
      steps: string[];
    };
    wireframes: {
      description: string;
      points: string[];
    };
    designSystem: DesignSystemItem[];
    componentsAndVariants: {
      description: string;
      items: string[];
    };
    interactivePrototyping: {
      description: string;
      features: string[];
    };
  };

  // 05 — Final Solution
  solution: {
    headline: string;
    description: string;
    screens: ScreenItem[];
    coreFeatures: {
      title: string;
      arabicTitle?: string;
      description: string;
      impact: string;
    }[];
  };

  // 06 — Reflection & Learnings
  reflection: {
    challenges: string[];
    learnings: string[];
    improvements: string[];
    futurePossibilities: string[];
  };
};
