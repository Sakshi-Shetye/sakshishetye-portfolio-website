export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  extendedDescription: string;
  technologies: string[];
  imageSrc: string;
  visualConcept: string;
  features: string[];
  demoType: 'cpu-scheduling' | 'wellness' | 'breakdown-map' | 'interview-pilot' | 'campus-portal' | 'cardiocare-analytics';
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: 'Publication' | 'Competition' | 'Certification' | 'Internship';
  description: string;
  credentialBadge?: string;
}
