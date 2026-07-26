/**
 * Function profiles a reader can filter the CV on.
 * 'all' shows the complete, unfiltered CV.
 */
export type FunctionProfileId = 'all' | 'architect' | 'manager' | 'senior-dev' | 'ai-dev';

/**
 * Industry domains a reader can filter the CV on.
 * `royal-ihc` is a HIDDEN domain: it is never rendered as an industry chip and
 * is only reachable through the secret `?ihc` / `?royalihc` URL (see the
 * spotlight handling in utils/filtering.ts). It tags the Royal IHC roles and
 * projects that the hidden view surfaces and promotes.
 */
export type IndustryId = 'cloud-saas' | 'ai' | 'firmware-embedded' | 'maritime' | 'manufacturing' | 'royal-ihc';

/**
 * Presentation metadata attached to CV entries. Tags never change the facts of
 * an entry — they only decide when it is emphasized, compacted, or reordered.
 * An absent `profiles`/`industries` field means "relevant everywhere".
 */
export interface Tagged {
  profiles?: Exclude<FunctionProfileId, 'all'>[];
  industries?: IndustryId[];
  /** Lower = shown earlier / kept longer when space is constrained (print). */
  priority?: number;
  /**
   * Keep this entry fully expanded whenever ONE of its `industries` is
   * explicitly selected, even if the active function profile would otherwise
   * compact it (e.g. a maritime dredging role under the Software Architect
   * lens). Reserved for domain-defining roles a domain recruiter must see in
   * full under any persona — never changes the facts, only their emphasis.
   */
  anchor?: boolean;
}

/**
 * Profile-specific rewording of an entry. Variants must describe the exact
 * same underlying facts as the base text — different emphasis, never new claims.
 */
export interface RoleVariant {
  responsibility?: string;
}

export interface FunctionProfile {
  id: FunctionProfileId;
  /** Chip label, e.g. "Software Architect". */
  label: string;
  /** Headline pills shown in the header for this profile. */
  pills: string[];
  /** Executive summary reworded for this profile (same facts, focused emphasis). */
  summary: string;
  /** Ordering of skill categories for this profile (category names, first = top). */
  skillOrder?: string[];
}

export interface Industry {
  id: IndustryId;
  label: string;
  /** Hidden industries are never rendered as filter chips (secret-URL only). */
  hidden?: boolean;
}

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

export interface ExperiencePoint extends Tagged {
  title?: string;
  description: string;
}

export interface JobRole extends Tagged {
  title: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
  highlights?: ExperiencePoint[]; // Legacy/Generic highlights
  leadershipHighlights?: ExperiencePoint[]; // New: Leadership specific
  engineeringHighlights?: ExperiencePoint[]; // New: Engineering specific
  responsibility?: string;
  /** Profile-specific rewording of `responsibility` — same facts, focused emphasis. */
  variants?: Partial<Record<Exclude<FunctionProfileId, 'all'>, RoleVariant>>;
  techStack?: string[];
  logo?: string;
  website?: string;
}

export interface SkillCategory extends Tagged {
  category: string;
  items: string[];
}

export interface Education extends Tagged {
  degree: string;
  school: string;
  year: string;
  details: string[];
  logo?: string;
  website?: string;
  thesisLink?: string;
  techStack?: string[];
}

export interface Certification extends Tagged {
  name: string;
  issuer?: string;
  date?: string;
  credentialId?: string;
  details?: string[];
  techStack?: string[];
}

export interface VolunteerWork extends Tagged {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface Project extends Tagged {
  name: string;
  role: string;
  description: string;
  link?: string;
  tech?: string[];
}

export interface ArchitectureInitiative extends Tagged {
  name: string;
  description: string;
  tech: string[];
}

export interface Recommendation extends Tagged {
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