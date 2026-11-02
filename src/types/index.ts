export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  findings?: string;
  features: string[];
  architecture?: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface Milestone {
  id: string;
  number: string;
  period: string;
  title: string;
  organization?: string;
  role?: string;
  narrative: string;
  activities: string[];
  skills: string[];
  badgeText?: string;
  isFuture?: boolean;
  projects?: Project[];
}

export interface ConstellationNode {
  id: string;
  label: string;
  category: string;
  iconName: string;
  x: number; // percentage in 2D space (0-100)
  y: number; // percentage in 2D space (0-100)
  summary: string;
  interestWhy: string;
  learningFocus: string[];
  relatedNodes: string[];
  projectConnections: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: 'Currently Learning' | 'Practically Explored' | 'Used in Projects';
    context?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  score?: string;
  skills: string[];
  credentialNote?: string;
}
