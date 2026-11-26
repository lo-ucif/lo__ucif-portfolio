import type { ComponentType, SVGProps } from "react";

export type TechItem = {
  label: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

type ScreenItem = {
  id: string;
  number: string;
  title: string;
  arabicTitle?: string;
  subtitle: string;
  description: string;
  uxHighlights: string[];
  image: string;
  category?: string;
  aspectRatio?: string;
};

type ProblemChallenge = {
  number: string;
  title: string;
  description: string;
  iconName?: string;
};

type PersonaData = {
  name: string;
  tagline: string;
  quote: string;
  demographics: { label: string; value: string }[];
  goals: string[];
  painPoints: string[];
  isPlaceholder?: boolean;
};

type UserJourneyStep = {
  phase: string;
  goal: string;
  action: string;
  touchpoint: string;
  experience: "neutral" | "positive" | "challenging";
};

type KeyInsight = {
  number: string;
  title: string;
  takeaway: string;
};

type DesignSystemItem = {
  category: string;
  description: string;
  details: string[];
};

type ChallengeApproach = {
  challenge: string;
  approach: string;
};

type FlowDiagramNode = {
  step: number;
  title: string;
  userAction: string;
  systemResponse: string;
  touchpoint: string;
};

type UseCaseActor = {
  id: string;
  name: string;
  arabicName?: string;
  role: string;
  useCases: string[];
};

type UseCaseDiagramData = {
  systemName: string;
  actors: UseCaseActor[];
};

type DesignTool = {
  name: string;
  category: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  description?: string;
};

export type PhoneMockups = {
  left: string;
  center: string;
  right: string;
};

export type LaptopMockups = {
  left: string;
  right: string;
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
  framedMockupImage?: string;
  phoneMockups?: PhoneMockups;
  laptopMockups?: LaptopMockups;
  galleryMockups?: { title: string; image: string; caption?: string }[];
  liveDemo?: string;
  figmaLink?: string;
  linkedin?: string;
  github?: string;
  behanceLink?: string;
  tools: TechItem[];

  // 01 — Project Overview
  overview: {
    summary: string;
    objectives: string[];
  };

  // 02 — Problems (Short bullet points)
  problemsList?: { title: string; description: string }[];
  problem: {
    statement: string;
    context: string;
    targetAudience: string;
    challenges: ProblemChallenge[];
  };

  // 03 — User Needs (UML Use Case Diagram)
  useCaseDiagram?: UseCaseDiagramData;
  research: {
    overview: string;
    userNeeds: string[];
    persona: PersonaData;
    journey: UserJourneyStep[];
    keyInsights: KeyInsight[];
  };

  // 04 — Design Process & User Flow
  designProcess: {
    overview: string;
    informationArchitecture: {
      description: string;
      hierarchy: { title: string; items: string[] }[];
    };
    userFlow: {
      description: string;
      steps: string[];
      nodes?: FlowDiagramNode[];
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

  // 04 — Final Design
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

  // 05 — Tools Used
  toolsUsed?: DesignTool[];

  // Reflection (optional)
  reflection: {
    challenges: string[];
    approaches?: ChallengeApproach[];
    learnings: string[];
    improvements: string[];
    futurePossibilities?: string[];
  };
};
