import {
  ArchitectureInitiative,
  Certification,
  CVData,
  Education,
  ExperiencePoint,
  FunctionProfileId,
  IndustryId,
  JobRole,
  Project,
  Recommendation,
  SkillCategory,
  Tagged,
  VolunteerWork,
} from '../types';
import { getProfile } from '../profiles';

/**
 * A "spotlight" is a hidden emphasis mode reachable only via a secret URL (it
 * has no filter chip). It layers on top of a normal profile/industry filter:
 * it force-expands the entries tagged with the spotlight industry and promotes
 * the matching projects to the top — without hiding the rest of the profile's
 * content the way a hard industry filter would.
 */
export type SpotlightId = 'royal-ihc';

export interface FilterState {
  profile: FunctionProfileId;
  industries: IndustryId[];
  /** Active hidden spotlight, if any (secret-URL only — never a chip). */
  spotlight?: SpotlightId;
}

export const DEFAULT_FILTER: FilterState = { profile: 'all', industries: [] };

/** A filter is "focused" when the reader narrowed the CV down in any way. */
export const isFocused = (state: FilterState): boolean =>
  state.profile !== 'all' || state.industries.length > 0 || state.spotlight != null;

/**
 * Tag semantics:
 * - `profiles` absent   → relevant for every function profile.
 * - `profiles: []`      → relevant for none (compacted whenever a profile is selected).
 * - `industries` absent → industry-neutral (always relevant).
 * - `industries: []`    → relevant to no industry (compacted whenever industries are selected).
 */
const matchesProfile = (t: Tagged, profile: FunctionProfileId): boolean =>
  profile === 'all' || !t.profiles || t.profiles.includes(profile);

const matchesIndustries = (t: Tagged, industries: IndustryId[]): boolean =>
  industries.length === 0 || !t.industries || t.industries.some(i => industries.includes(i));

export const matches = (t: Tagged, state: FilterState): boolean =>
  matchesProfile(t, state.profile) && matchesIndustries(t, state.industries);

/**
 * An `anchor`ed entry stays fully expanded when the reader explicitly selects
 * one of its industries, even if the active function profile would compact it.
 * This is what keeps the Royal IHC maritime roles full under `?architect&maritime`
 * (they carry `profiles: []`, so a profile filter alone would condense them).
 */
const anchoredToSelectedIndustry = (t: Tagged, industries: IndustryId[]): boolean =>
  !!t.anchor && !!t.industries?.some(i => industries.includes(i));

/** True when a hidden spotlight is active and this entry carries its industry tag. */
const inSpotlight = (t: Tagged, spotlight?: SpotlightId): boolean =>
  spotlight != null && !!t.industries?.includes(spotlight);

/**
 * An entry is surfaced by industry (rather than by the function profile) when
 * it is anchored to a selected industry or lit by the active spotlight. Such an
 * entry is shown in full and its bullets are filtered by industry only — the
 * non-matching function profile must not gut its domain content.
 */
const surfacedByIndustry = (t: Tagged, state: FilterState): boolean =>
  anchoredToSelectedIndustry(t, state.industries) || inSpotlight(t, state.spotlight);

const byPriority = <T extends Tagged>(a: T, b: T): number =>
  (a.priority ?? 99) - (b.priority ?? 99);

/** An item that is shown on screen, but dropped from the space-constrained print layout. */
export interface PrintTrimmed<T> {
  item: T;
  printHidden: boolean;
}

const trimForPrint = <T extends Tagged>(items: T[], cap: number, focused: boolean): PrintTrimmed<T>[] =>
  items.map((item, idx) => ({ item, printHidden: focused && idx >= cap }));

export type RoleRenderMode = 'full' | 'compact';

export interface DerivedRole {
  role: JobRole;
  mode: RoleRenderMode;
  /** Responsibility text after applying the profile-specific variant, if any. */
  responsibility?: string;
  highlights: PrintTrimmed<ExperiencePoint>[];
  leadershipHighlights: PrintTrimmed<ExperiencePoint>[];
  engineeringHighlights: PrintTrimmed<ExperiencePoint>[];
}

export interface DerivedCV {
  focused: boolean;
  /** Header presentation for the active profile (pills + reworded summary). */
  pills: string[];
  summary: string;
  experience: DerivedRole[];
  previousExperience: DerivedRole[];
  skills: PrintTrimmed<SkillCategory>[];
  education: { edu: Education; mode: RoleRenderMode; printHidden: boolean }[];
  certifications: { cert: Certification; printHidden: boolean }[];
  volunteer: PrintTrimmed<VolunteerWork>[];
  projects: PrintTrimmed<Project>[];
  architecture: PrintTrimmed<ArchitectureInitiative>[];
  recommendations: PrintTrimmed<Recommendation>[];
}

/**
 * Print caps for the focused (≤3 A4 pages) layout. The screen always shows
 * every entry that matches the filter; entries beyond a cap only get hidden
 * in @media print via the `print:hidden` class.
 */
const PRINT_CAPS = {
  /** Combined highlight count per role, by how recent the role is (role.priority). */
  highlightsForRole: (role: JobRole, state: FilterState): number => {
    // The Royal IHC spotlight prints four extra full roles, so every role is
    // trimmed to its top two bullets to stay inside the 3-page A4 budget.
    if (state.spotlight != null) return 2;
    const p = role.priority ?? 9;
    if (p <= 2) return 4;
    if (p <= 4) return 3;
    return 2;
  },
  projects: 4,
  /**
   * The dedicated architecture section only earns print space on the architect
   * CV — and yields it entirely under the Royal IHC spotlight, whose extra
   * full experience roles need the room and whose story is carried by the
   * promoted Royal IHC projects instead.
   */
  architecture: (state: FilterState): number =>
    state.spotlight == null && state.profile === 'architect' ? 2 : 0,
  /** Volunteering earns print space only on the manager CV (Works Council story). */
  volunteer: (profile: FunctionProfileId): number => (profile === 'manager' ? 2 : 0),
  /** Recommendations stay on the interactive CV; paper space goes to experience. */
  recommendations: 0,
  educationFull: 2,
  certifications: 4,
  skills: 4,
  /** Compact education rows this old (priority ≥) drop off the focused print. */
  educationAncient: 8,
};

const deriveRole = (role: JobRole, state: FilterState, focused: boolean): DerivedRole => {
  // A role surfaced by industry/spotlight stays full even when the profile
  // doesn't match; its bullets are then filtered by industry only.
  const industrySurfaced = surfacedByIndustry(role, state);
  const mode: RoleRenderMode =
    focused && !matches(role, state) && !industrySurfaced ? 'compact' : 'full';

  const keepPoint = (p: ExperiencePoint): boolean =>
    industrySurfaced ? matchesIndustries(p, state.industries) : matches(p, state);

  const prepare = (points?: ExperiencePoint[]): ExperiencePoint[] => {
    if (!points || mode === 'compact') return [];
    if (!focused) return points;
    const kept = points.filter(keepPoint);
    return kept.sort(byPriority);
  };

  const leadership = prepare(role.leadershipHighlights);
  const engineering = prepare(role.engineeringHighlights);
  const generic = prepare(role.highlights);

  // The combined print cap is spent on leadership first (they are rendered first).
  const cap = PRINT_CAPS.highlightsForRole(role, state);
  const leadershipTrimmed = trimForPrint(leadership, cap, focused);
  const remainingCap = Math.max(0, cap - Math.min(leadership.length, cap));
  const engineeringTrimmed = trimForPrint(engineering, remainingCap, focused);
  const genericTrimmed = trimForPrint(generic, cap, focused);

  const variant = state.profile !== 'all' ? role.variants?.[state.profile] : undefined;

  return {
    role,
    mode,
    responsibility: variant?.responsibility ?? role.responsibility,
    highlights: genericTrimmed,
    leadershipHighlights: leadershipTrimmed,
    engineeringHighlights: engineeringTrimmed,
  };
};

export const deriveCV = (data: CVData, state: FilterState): DerivedCV => {
  const focused = isFocused(state);
  const profile = getProfile(state.profile);

  const experience = data.experience.map(r => deriveRole(r, state, focused));
  const previousExperience = data.previousExperience.map(r => deriveRole(r, state, focused));

  // Skills: keep untagged categories always; drop industry-mismatched ones when
  // industries are selected; reorder by the profile's preferred order.
  let skills = data.skills.filter(s => matches(s, state));
  if (profile.skillOrder) {
    const order = profile.skillOrder;
    skills = [...skills].sort(
      (a, b) =>
        (order.indexOf(a.category) + 1 || order.length + 1) -
        (order.indexOf(b.category) + 1 || order.length + 1)
    );
  }

  // `printHidden` semantics per row mode: on a full row it drops the details
  // from print (header keeps printing); on a compact row it drops the whole row.
  const education = data.education.map(edu => {
    const mode: RoleRenderMode = focused && !matches(edu, state) ? 'compact' : 'full';
    const printHidden =
      focused && mode === 'compact' && (edu.priority ?? 0) >= PRINT_CAPS.educationAncient;
    return { edu, mode, printHidden };
  });
  // In focused print, only the top full entries keep their detail lists.
  let fullSeen = 0;
  education.forEach(e => {
    if (e.mode === 'full') {
      fullSeen += 1;
      if (focused && fullSeen > PRINT_CAPS.educationFull) e.printHidden = true;
    }
  });

  const filterSort = <T extends Tagged>(items: T[]): T[] => {
    const kept = focused ? items.filter(i => matches(i, state)) : items;
    return focused ? [...kept].sort(byPriority) : kept;
  };

  /**
   * Under a hidden spotlight, pull every spotlight-tagged item to the front
   * (in priority order) — including ones the active profile filtered out — so
   * the Royal IHC projects lead ahead of the UltiMaker/AI work, then the rest
   * of the profile's projects follow.
   */
  const spotlightFirst = <T extends Tagged>(items: T[], base: T[]): T[] => {
    if (state.spotlight == null) return base;
    const spotlit = items.filter(i => inSpotlight(i, state.spotlight)).sort(byPriority);
    const lit = new Set(spotlit);
    return [...spotlit, ...base.filter(i => !lit.has(i))];
  };

  const certifications = filterSort(data.certifications).map((cert, idx) => ({
    cert,
    printHidden: focused && idx >= PRINT_CAPS.certifications,
  }));

  return {
    focused,
    pills: profile.pills,
    summary: profile.summary,
    experience,
    previousExperience,
    skills: trimForPrint(skills, PRINT_CAPS.skills, focused),
    education,
    certifications,
    volunteer: trimForPrint(filterSort(data.volunteer), PRINT_CAPS.volunteer(state.profile), focused),
    projects: trimForPrint(spotlightFirst(data.projects, filterSort(data.projects)), PRINT_CAPS.projects, focused),
    architecture: trimForPrint(filterSort(data.architecture), PRINT_CAPS.architecture(state), focused),
    recommendations: trimForPrint(filterSort(data.recommendations), PRINT_CAPS.recommendations, focused),
  };
};

/* ------------------------------------------------------------------ */
/* URL <-> filter state.
 *
 * Canonical shareable form uses compact bare tokens — ideal for links in an
 * exported PDF or a motivation letter:
 *   ?maritime                      → maritime industry
 *   ?architect                     → Software Architect profile
 *   ?ai-dev&ai&cloud-saas          → profile + two industries
 *   ?embedded-eng-manager          → Embedded / Cyber-Physical Engineering Manager
 * Friendly aliases (?cloud, ?firmware, ?manager, ?dev, …) and the legacy long
 * form (?profile=architect&industries=ai,cloud-saas) are accepted as well. */

const PROFILE_ALIASES: Record<string, FunctionProfileId> = {
  'all': 'all', 'complete': 'all', 'full': 'all',
  'architect': 'architect', 'software-architect': 'architect', 'sa': 'architect',
  'manager': 'manager', 'engineering-manager': 'manager', 'edm': 'manager', 'em': 'manager',
  'senior-dev': 'senior-dev', 'senior-developer': 'senior-dev', 'senior': 'senior-dev', 'dev': 'senior-dev', 'developer': 'senior-dev', 'cpp': 'senior-dev',
  'ai-dev': 'ai-dev', 'ai-developer': 'ai-dev', 'aidev': 'ai-dev', 'ml': 'ai-dev',
  'embedded-eng-manager': 'embedded-eng-manager', 'embedded-manager': 'embedded-eng-manager',
  'cyber-physical': 'embedded-eng-manager', 'eem': 'embedded-eng-manager',
};

const INDUSTRY_ALIASES: Record<string, IndustryId> = {
  'cloud-saas': 'cloud-saas', 'cloud': 'cloud-saas', 'saas': 'cloud-saas',
  'ai': 'ai', 'agents': 'ai',
  'firmware-embedded': 'firmware-embedded', 'firmware': 'firmware-embedded', 'embedded': 'firmware-embedded', 'iot': 'firmware-embedded',
  'manufacturing': 'manufacturing', '3d-printing': 'manufacturing', '3dprinting': 'manufacturing', 'printing': 'manufacturing',
  'maritime': 'maritime', 'dredging': 'maritime', 'offshore': 'maritime', 'shipbuilding': 'maritime',
};

/**
 * Hidden spotlight tokens. Deliberately NOT in INDUSTRY_ALIASES so `royal-ihc`
 * never becomes a plain industry filter (which would hide the architect work);
 * instead it lights the secret Royal IHC view. Reachable only if you know the
 * URL — there is no chip for it.
 */
const SPOTLIGHT_ALIASES: Record<string, SpotlightId> = {
  'ihc': 'royal-ihc', 'royalihc': 'royal-ihc', 'royal-ihc': 'royal-ihc',
};

export const filterStateFromUrl = (search: string): FilterState => {
  const params = new URLSearchParams(search);
  let profile: FunctionProfileId = 'all';
  let profileExplicit = false;
  let spotlight: SpotlightId | undefined;
  const industries: IndustryId[] = [];

  const applyToken = (raw: string): void => {
    const token = raw.trim().toLowerCase();
    if (!token) return;
    if (token in SPOTLIGHT_ALIASES) {
      spotlight = SPOTLIGHT_ALIASES[token];
    } else if (token in PROFILE_ALIASES) {
      profile = PROFILE_ALIASES[token];
      profileExplicit = true;
    } else if (token in INDUSTRY_ALIASES) {
      const id = INDUSTRY_ALIASES[token];
      if (!industries.includes(id)) industries.push(id);
    }
  };

  params.forEach((value, key) => {
    if (key === 'profile') {
      applyToken(value);
    } else if (key === 'industries') {
      value.split(/[,\s]+/).forEach(applyToken);
    } else if (key === '') {
      // Tolerates the "?=maritime" form.
      value.split(/[,\s]+/).forEach(applyToken);
    } else {
      // Compact bare-token form: "?architect&maritime". A stray value
      // ("?architect=1") is ignored — the key is the token.
      applyToken(key);
    }
  });

  // The Royal IHC spotlight is a Software Architect view by default, so a bare
  // `?ihc` link lands on the architect framing unless a profile was named too.
  if (spotlight === 'royal-ihc' && !profileExplicit) profile = 'architect';

  return { profile, industries, spotlight };
};

/** Canonical compact form, e.g. "?architect&maritime&ai" or the secret "?royalihc". */
export const filterStateToSearch = (state: FilterState): string => {
  const tokens: string[] = [];
  if (state.spotlight === 'royal-ihc') {
    tokens.push('royalihc');
    // `royalihc` already implies the architect view; only emit a profile token
    // when it diverges from that default.
    if (state.profile !== 'all' && state.profile !== 'architect') tokens.push(state.profile);
  } else if (state.profile !== 'all') {
    tokens.push(state.profile);
  }
  tokens.push(...state.industries);
  return tokens.length > 0 ? `?${tokens.join('&')}` : '';
};
