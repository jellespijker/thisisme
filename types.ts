export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
}

export interface ExperiencePoint {
  title?: string;
  description: string;
}

export interface JobRole {
  title: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
  highlights?: ExperiencePoint[]; // Legacy/Generic highlights
  leadershipHighlights?: ExperiencePoint[]; // New: Leadership specific
  engineeringHighlights?: ExperiencePoint[]; // New: Engineering specific
  responsibility?: string;
  techStack?: string[];
  logo?: string;
  website?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  details: string[];
  logo?: string;
  website?: string;
  thesisLink?: string;
  techStack?: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
  date?: string;
  credentialId?: string;
  details?: string[];
  techStack?: string[];
}

export interface VolunteerWork {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  role: string;
  description: string;
  link?: string;
  tech?: string[];
}

export interface ArchitectureInitiative {
  name: string;
  description: string;
  tech: string[];
}

export interface Recommendation {
  name: string;
  title: string;
  company?: string;
  date: string;
  relationship: string;
  text: string;
  avatar?: string;
  linkedin?: string;
}

export interface CVData {
  profile: Profile;
  experience: JobRole[];
  previousExperience: JobRole[];
  skills: SkillCategory[];
  education: Education[];
  certifications: Certification[];
  volunteer: VolunteerWork[];
  projects: Project[];
  architecture: ArchitectureInitiative[];
  recommendations: Recommendation[];
}