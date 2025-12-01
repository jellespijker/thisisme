import { CVData } from './types';

export const cvData: CVData = {
  profile: {
    name: "Jelle Spijker",
    title: "Manager Firmware & Cloud Development",
    summary: "Native Dutch Engineering Manager with deep expertise in Cyber-Physical Systems, bridging Cloud/SaaS platforms and embedded firmware. Specializes in transforming external/freelance dependencies into stable internal teams and guiding organizations through scaling phases. Pragmatic leader focused on Governance (ISO 27001), Operational Excellence, and mission critical reliability. Seeking to apply leadership experience in IoT to the healthcare domain at Medido.",
    contact: {
      location: "Tiel, Gelderland, Netherlands",
      phone: "+31 6 4327 2644",
      email: "spijker.jelle@gmail.com",
      linkedin: "https://www.linkedin.com/in/jellespijker",
      github: "https://github.com/jellespijker"
    }
  },
  experience: [
    {
      title: "Manager Firmware & Cloud Development",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "July 2025 – Present",
      responsibility: "17 FTE peak / 8 FTE current. Managing Cloud, Firmware, and DevOps domains.",
      leadershipHighlights: [
        { title: "Strategic Role", description: "Promoted to oversee the Firmware department alongside Cloud responsibilities, effectively managing the complete hardware-software loop. Reporting directly to the CTO." },
        { title: "Insourcing & Operational Efficiency", description: "Navigated budget constraints by optimizing for 'doing more with less'. Down-sized external contractors. Transitioned from Scrum to Kanban to improve flow and reorganized cross-functional resources (shifting capacity from Firmware to Digital Factory)." },
        { title: "Team Leadership", description: "Managed 2 SCRUM teams (Digital Factory and Firmware) including Software Architects, DevOps, UX, and Developers." },
        { title: "Knowledge Sharing", description: "Founded 'AI-In-Action', a company-wide initiative empowering employees to improve efficiency using AI." },
        { title: "Compliance (ISO 27001)", description: "Started the ISO 27001 initiative and own the processes for ISO 27001 certification Cloud & Firmware. Establishing security controls and risk assessments." }
      ],
      engineeringHighlights: [
        { title: "Active Technical Contribution", description: "Maintain active hands-on involvement by contributing code and fixing bugs across Firmware, Cloud, and [Digital Factory](https://ultimaker.com/software/ultimaker-digital-factory/)." },
        { title: "AI Translation Agent", description: "Created a CI/CD Translation Agent using GraphRAG to inject cultural and language-specific domain context into automated translations, resulting in €25k annual savings." },
        { title: "Cyber-Physical Alignment", description: "Partnered with Product Management to align firmware roadmaps with cloud capabilities for seamless telemetry." }
      ],
      techStack: ["Firmware", "Cloud", "AI Agents", "ISO 27001", "Neo4j", "GraphRAG", "Scrum", "Kanban"]
    },
    {
      title: "Manager Cloud & Digital Factory",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "March 2025 – June 2025",
      responsibility: "10 FTE (6 Devs, 1 QA, 1 UX/UI, 1 DevOps, 1 Architect)",
      leadershipHighlights: [
        { title: "Strategic Alignment", description: "Reported directly to the CTO, driving strategic initiatives for Cloud and Digital Factory." },
        { title: "Team Leadership", description: "Managed 1 SCRUM team (Digital Factory) including Software Architects, DevOps, UX, and Developers." },
        { title: "Contract Negotiations", description: "Managed contract negotiations for external partners prior to strategic insourcing initiatives." },
        { title: "Executive Crisis Resolution", description: "Identified a critical GCP billing conflict (€1M+ risk). Partnered with the DevOps engineer to devise a mitigation strategy, presented the solution to the CEO and CTO, and successfully executed the migration." }
      ],
      engineeringHighlights: [
        { title: "AI & Innovation", description: "Integrated AI agents ('UltiBot') and Neo4j Knowledge Graphs into UltiMaker Cura Cloud. Implemented MCP (Model Context Protocols) for automated decision-making." },
        { title: "Architecture", description: "Created ARC42 documentation for new AI services and legacy printer connections." },
        { title: "Legacy Modernization", description: "Orchestrated the decoupling of MakerBot and UltiMaker legacy environments, ensuring production stability." }
      ],
      techStack: ["GCP", "Strategy", "SaaS", "Scrum", "Legacy Migration", "MCP", "AI", "ARC42"]
    },
    {
      title: "Team Lead / Software Engineer",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "January 2024 – March 2025",
      responsibility: "5 FTE direct reports",
      leadershipHighlights: [
        { title: "Strategic Alignment", description: "Reported directly to the Director Community Software." },
        { title: "Team Growth", description: "Expanded team from 3 to 5 direct reports. Facilitated development capacity shift from U.S. to Netherlands." },
        { title: "Risk Mitigation", description: "Resolved critical legal/technical risks (OpenSSL, Qt libraries) preventing launch delays." }
      ],
      engineeringHighlights: [
        { title: "Product Lead", description: "Spearheaded design of [UltiMaker Cura Cloud](https://neoprep.staging.ultimaker.com/) using WebAssembly (WASM), contributing potential annual savings of €1.5 million." }
      ],
      techStack: ["WASM", "Leadership", "Risk Management"]
    },
    {
      title: "Software Engineer (C++ & Python)",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "April 2020 – December 2023",
      engineeringHighlights: [
        { title: "Core Engine Modernization", description: "Transitioned CuraEngine from C++14 to C++20, enabling robust plugin architecture using gRPC and Protobuf." },
        { title: "Operational Excellence", description: "Migrated to Conan and GitHub Actions, reducing operational costs by €3,000/mo and setup time from 1 day to 15 mins." },
        { title: "SDK Integration", description: "Integrated Spatial CGM SDK for CAD analysis and RSA-based license management." },
        { title: "Developer Tooling", description: "Developed C++ Visual Debugger and GCodeAnalyzer (Python/Pandas)." },
        { title: "Community Management", description: "Managed global open-source [Cura](https://github.com/Ultimaker/Cura) community and triaged issues." }
      ],
      techStack: ["C++20", "Python", "gRPC", "GitHub Actions", "Conan"]
    },
    {
      title: "Mechatronic Engineer (R&D)",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "May 2019 – April 2020",
      engineeringHighlights: [
        { description: "Developed Particle Image Velocimetry (PIV) algorithms (C++, Python, OpenCV) to analyze extrusion flow." }
      ],
      techStack: ["C++", "Python", "OpenCV", "Mechatronics"]
    }
  ],
  previousExperience: [
    {
      title: "R&D Engineer",
      company: "Royal IHC",
      website: "https://www.royalihc.com/",
      period: "April 2016 – April 2019",
      location: "Delft & Rotterdam",
      engineeringHighlights: [
        { title: "Robotics & Autonomy", description: "Designed control software and path-planning for autonomous underwater vessels on embedded Linux." },
        { title: "Mechanical Design", description: "Engineered flash-calcination oven and mobile geopolymer processing plant using Siemens NX." },
        { title: "Instrumentation", description: "Developed digital soil analysis microscope with custom image processing." }
      ]
    },
    {
      title: "Mechanical & Piping Engineer",
      company: "Royal IHC",
      website: "https://www.royalihc.com/",
      period: "April 2013 – March 2016",
      engineeringHighlights: [
        { description: "Designed P&IDs for critical ship systems (LNG, Ballast) complying with Bureau Veritas." },
        { description: "Performed CFD simulations using Siemens NX." }
      ]
    },
    {
      title: "Die Corrector",
      company: "Nedal Aluminium BV",
      website: "https://nedal.com/",
      period: "January 2004 – May 2012",
      engineeringHighlights: [
        { description: "Specialized in fine-tuning extrusion dies for high-precision aluminum profiles." }
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering (BEng), Mechanical Engineering",
      school: "HAN University of Applied Sciences",
      website: "https://www.han.nl/",
      year: "2011 – 2020",
      details: [
        "Grade: 8/10",
        "Minor: Embedded Vision Design & Systems Engineering (9/10)",
        "Thesis: Autonomous controller for maritime operations"
      ],
      thesisLink: "https://github.com/jellespijker/HAN-thesis/blob/master/report.pdf"
    },
    {
      degree: "Middle Management Engineering (MTS+ 4)",
      school: "ROC van Amsterdam",
      year: "2009 – 2011",
      details: ["Technicus (metaal)"]
    },
    {
      degree: "Gold & Silversmith / Entrepreneur (MTS 4)",
      school: "Vakschool Schoonhoven",
      year: "1998 – 2004",
      details: ["Silversmith (1998-2003)", "Goldsmith/Entrepreneur (2003-2004)"]
    }
  ],
  certifications: [
    { name: "Certified Professional for Software Architecture", issuer: "iSAQB" },
    { name: "Artificial Intelligence for Robotics", issuer: "Udacity" },
    { name: "Design Patterns in C++", issuer: "Course" }
  ],
  skills: [
    {
      category: "Languages",
      items: ["Dutch (Native)", "English (Full Professional)"]
    },
    {
      category: "Programming Languages",
      items: ["C", "C++ (11-23)", "Python", "JavaScript", "TypeScript", "LaTeX", "TikZ", "Bash/Zsh"]
    },
    {
      category: "Cloud & DevOps",
      items: ["GCP (CloudRun, VertexAI)", "Docker", "GitHub Actions", "Code Signing", "MongoDB"]
    },
    {
      category: "Frontend & Web",
      items: ["React", "NodeJS", "Vite", "ThreeJS", "WASM"]
    },
    {
      category: "AI & Data",
      items: ["LangGraphJS", "LangChainJS", "Neo4j", "Gemini / Gems", "NotebookLM"]
    },
    {
      category: "Systems & Embedded",
      items: ["Linux/Windows/MacOS", "QML + Qt", "Device Tree Overlays", "D-Bus", "Cross-Compiling (ARM/Intel)"]
    }
  ],
  volunteer: [
    {
      role: "Works Council Secretary",
      organization: "UltiMaker",
      period: "2022 – 2024",
      description: "Represented employee interests and advised management on strategic decisions during merger and reorganization."
    },
    {
      role: "Professional Field Committee Member",
      organization: "HAN University",
      period: "2020 – Present",
      description: "Advising on the Mechanical Engineering curriculum to align education with industry needs."
    },
    {
      role: "Home Automation Enthusiast",
      organization: "Home Assistant Community",
      period: "Ongoing",
      description: "Owner of the HACS UltiMaker connection plugin. Developing custom integrations and automations for smart home devices."
    },
    {
      role: "Conan Contributor",
      organization: "JFrog - Conan",
      period: "Ongoing",
      description: "Contributed multiple recipes to the Conan Center Index, as well as multiple fixes to Conan it self."
    },
  ],
  projects: [
    {
      name: "UltiMaker Digital Factory",
      role: "Engineering Manager",
      description: "Cloud-based fleet management platform handling 200k visits/month, enabling remote printing, queue management, and analytics for thousands of 3D printers globally.",
      link: "https://ultimaker.com/software/ultimaker-digital-factory/",
      tech: ["SaaS", "GCP", "React"]
    },
    {
      name: "UltiMaker Cura Cloud",
      role: "Product Lead",
      description: "Serverless 3D slicing engine processing 100k slices/month directly in the browser using WebAssembly, eliminating the need for local software installation.",
      link: "https://neoprep.staging.ultimaker.com/",
      tech: ["WASM", "ThreeJS", "C++"]
    },
    {
      name: "UltiMaker Cura",
      role: "Core Developer / Lead",
      description: "The world's most popular open-source 3D printing software with 15 million slices/month. Modernized the core engine to C++20 and introduced a robust plugin architecture.",
      link: "https://github.com/Ultimaker/Cura",
      tech: ["C++20", "Python", "Qt"]
    },
    {
      name: "AI-In-Action",
      role: "Founder",
      description: "Company-wide initiative to drive AI adoption. Organized monthly sessions where employees showcased practical AI automations.",
      tech: ["AI Agents", "LLMs", "Culture"]
    },
    {
      name: "Digital Soil Microscope",
      role: "Creator (Royal IHC)",
      description: "Automated hardware/software system for particle size analysis using Computer Vision, processing 8,000 lines of C++ code.",
      tech: ["OpenCV", "C++", "Mechatronics"]
    }
  ],
  architecture: [
    {
      name: "UltiMaker Cura Cloud",
      description: "Designed a serverless, browser-based slicing engine using WebAssembly (WASM), eliminating backend GPU dependencies.",
      tech: ["WASM", "ThreeJS", "React"]
    },
    {
      name: "AI Agent Protocol (MCP)",
      description: "Back-end service orchestrating multiple MCPs for internal and external AI resources.",
      tech: ["MCP", "LLMs", "Neo4j"]
    },
    {
      name: "CuraEngine Modularization",
      description: "Architected a gRPC-based plugin system to run proprietary strategies alongside the AGPL licensed core, compliant with license requirements.",
      tech: ["C++20", "gRPC", "Protobuf"]
    }
  ]
};