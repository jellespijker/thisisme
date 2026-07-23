import { FunctionProfile, FunctionProfileId, Industry, IndustryId } from './types';

/**
 * Function-profile registry. Every summary is a REWORDING of facts that live in
 * constants.ts — different emphasis per target role, never new claims. When
 * editing, verify each number/statement against the corresponding entry in
 * constants.ts before changing it.
 */
export const FUNCTION_PROFILES: FunctionProfile[] = [
  {
    id: 'all',
    label: 'Complete CV',
    pills: ['Software Development Manager', 'Senior Software Lead', 'Software Architect'],
    summary:
      "High-impact, player-coach Engineering Manager with a proven record of scaling cross-functional teams, executing high-value strategic initiatives, and pioneering generative AI integrations. Expert in aligning deep technical domains—bridging Modern C++, Embedded Firmware, Cloud/SaaS, and Agentic workflows—to solve mission-critical corporate challenges. Notable achievements include co-authoring WebAssembly-compiled engines saving €1.5M+ in annual cloud infrastructure, slashing external consulting overhead by €39k/month, and navigating complex corporate restructurings to maintain 100% of product portfolio continuity under a highly supportive, coaching-centric team culture.",
  },
  {
    id: 'architect',
    label: 'Software Architect',
    pills: ['Software Architect', 'iSAQB CPSA-FL Certified', 'Firmware · Desktop · Cloud'],
    summary:
      "iSAQB-certified Software Architect (CPSA-FL) who designs systems that pay for themselves: co-authored the WebAssembly compilation of UltiMaker's C++ slicing engine — eliminating backend GPU infrastructure and saving €1.5M+ per year — and architected the gRPC/Protobuf plugin system that runs proprietary slicing strategies alongside the AGPL open-source core. Bridges firmware, desktop, and cloud domains, standardizing architectures on arc42, the C4 model, and Architecture Decision Records, and designing agent-ready systems (Model Context Protocol servers, A2A interfaces, Neo4j knowledge graphs) that let autonomous AI agents operate real hardware and cloud services safely.",
    skillOrder: [
      'Programming Languages',
      'Cloud & DevOps',
      'Systems & Embedded',
      'AI & Data Engineering',
      'Web & High-Performance Web',
      'Languages',
    ],
  },
  {
    id: 'manager',
    label: 'Engineering Development Manager',
    pills: ['Engineering Development Manager', 'Player-Coach Leadership', 'Agentic SDLC Champion'],
    summary:
      "Player-coach Engineering Manager reporting directly to the CTO. Led a 10-FTE multi-disciplinary cloud team and now directs Firmware, Desktop, and Cloud development — sustaining 100% of the product portfolio through a corporate restructuring from 17 down to 5 FTEs by standardizing lean, AI-assisted engineering. Slashed external consulting overhead by €39k/month through strategic insourcing, spearheaded ISO 27001 compliance and certification, and drove organization-wide adoption of an Agentic SDLC. Builds high-performing teams under a coaching-centric, people-first culture — sharpened by two years as Works Council Secretary advising executive management through an international merger.",
    skillOrder: [
      'Cloud & DevOps',
      'AI & Data Engineering',
      'Programming Languages',
      'Systems & Embedded',
      'Web & High-Performance Web',
      'Languages',
    ],
  },
  {
    id: 'senior-dev',
    label: 'Senior Developer',
    pills: ['Senior Software Developer', 'Modern C++ (11–23) & Python', 'Top Cura/CuraEngine Contributor'],
    summary:
      "Hands-on senior software engineer with deep Modern C++ (11–23) and Python expertise, forged on the factory floor and proven at scale: core developer — and one of the top all-time contributors — of UltiMaker Cura and CuraEngine, the open-source slicer driving 15 million prints per month. Modernized the core engine from C++14 to C++20/23 (ranges, concepts, template metaprogramming), co-authored its WebAssembly port matching native desktop performance in the browser, architected gRPC/Protobuf plugin infrastructure, and revamped the Conan + GitHub Actions build system — cutting developer setup from 1 day to 15 minutes and infrastructure overhead by €36k/year.",
    skillOrder: [
      'Programming Languages',
      'Systems & Embedded',
      'Web & High-Performance Web',
      'Cloud & DevOps',
      'AI & Data Engineering',
      'Languages',
    ],
  },
  {
    id: 'ai-dev',
    label: 'Senior AI Developer',
    pills: ['Senior AI Developer', 'Agentic Systems & MCP', 'GraphRAG · LangGraph · Neo4j'],
    summary:
      "Senior AI engineer building production agentic systems, not demos: developed a GraphRAG/LLM-powered translation agent running in CI/CD (saving €25k annually in localization), pioneered LLM agents and Neo4j knowledge graphs in UltiMaker's cloud stack via Model Context Protocol servers, and re-architected codebases and test systems so autonomous agents can drive real hardware — oscilloscopes, J-Link debug probes, D-Bus, headless browsers — in closed-loop automated HIL testing. AI roots predate the LLM era: trained artificial neural networks for embedded computer-vision soil classification at Royal IHC, and today leads organization-wide Agentic SDLC adoption (MCP, A2A, context engineering).",
    skillOrder: [
      'AI & Data Engineering',
      'Programming Languages',
      'Cloud & DevOps',
      'Web & High-Performance Web',
      'Systems & Embedded',
      'Languages',
    ],
  },
];

export const INDUSTRIES: Industry[] = [
  { id: 'cloud-saas', label: 'Cloud & SaaS' },
  { id: 'ai', label: 'AI & Agents' },
  { id: 'firmware-embedded', label: 'Firmware & Embedded' },
  { id: 'manufacturing', label: 'Manufacturing & 3D Printing' },
  { id: 'maritime', label: 'Maritime & Dredging' },
];

export const getProfile = (id: FunctionProfileId): FunctionProfile =>
  FUNCTION_PROFILES.find(p => p.id === id) ?? FUNCTION_PROFILES[0];

export const isProfileId = (v: string): v is FunctionProfileId =>
  FUNCTION_PROFILES.some(p => p.id === v);

export const isIndustryId = (v: string): v is IndustryId =>
  INDUSTRIES.some(i => i.id === v);
