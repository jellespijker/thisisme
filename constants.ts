import { CVData } from './types';

/**
 * SINGLE SOURCE OF TRUTH for all CV facts.
 *
 * Tagging metadata (`profiles`, `industries`, `priority`, `variants`) is
 * presentation-only: it decides when an entry is emphasized, compacted, or
 * reordered by the function-profile / industry filters. Tags NEVER change the
 * facts. `variants` texts must describe the exact same facts as the base text
 * (different emphasis for a target audience — never new claims).
 */
export const cvData: CVData = {
  profile: {
    name: "Jelle Spijker",
    title: "Software Development Manager | Senior Software Lead | Software Architect",
    summary: "High-impact, player-coach Engineering Manager with a proven record of scaling cross-functional teams, executing high-value strategic initiatives, and pioneering generative AI integrations. Expert in aligning deep technical domains—bridging Modern C++, Embedded Firmware, Cloud/SaaS, and Agentic workflows—to solve mission-critical corporate challenges. Notable achievements include co-authoring WebAssembly-compiled engines saving €1.5M+ in annual cloud infrastructure, slashing external consulting overhead by €39k/month, and navigating complex corporate restructurings to maintain 100% of product portfolio continuity under a highly supportive, coaching-centric team culture.",
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
      location: "Zaltbommel, Netherlands",
      period: "July 2025 – Present",
      profiles: ['manager', 'embedded-eng-manager', 'architect', 'senior-dev', 'ai-dev'],
      industries: ['firmware-embedded', 'cloud-saas', 'ai', 'manufacturing'],
      priority: 1,
      responsibility: "Leads two teams \u2014 Cloud and Firmware \u2014 with every engineer reporting directly, no leads in between. Championed an Agentic SDLC transformation to sustain 100% product portfolio continuity and strict SLAs through corporate restructuring (scaling from 17 down to 5 FTEs), reporting directly to the CTO.",
      variants: {
        manager: {
          responsibility: "Leadership is about enabling flow: partners directly with the CTO to bridge technical strategy and human execution across two directly-reporting teams spanning Cloud and Firmware development, QA, UX, DevOps, and architecture — transforming external-heavy engineering into resilient internal teams that do more with less."
        },
        architect: {
          responsibility: "Leads the Cloud and Firmware teams while owning the cross-domain architecture: merging physical hardware and SaaS platforms into one cyber-physical loop, standardizing agent-ready system design (MCP servers, A2A interfaces), and driving ISO 27001 governance — reporting directly to the CTO."
        },
        'senior-dev': {
          responsibility: "Player-coach lead of the Cloud and Firmware teams — still shipping code daily through a self-built agentic development stack (features, bug fixes, security fixes, performance optimizations and DevOps CI/CD pipeline work in C++ and Python) — while sustaining 100% product portfolio continuity and strict SLAs, reporting directly to the CTO."
        },
        'ai-dev': {
          responsibility: "Leads the Cloud and Firmware teams while personally driving the organization's Agentic SDLC transformation — standardized AGENTS.md/DESIGN.md frameworks, custom Model Context Protocol (MCP) servers, and Agent-to-Agent (A2A) interfaces — reporting directly to the CTO."
        }
      },
      leadershipHighlights: [
        { title: "Operational Efficiency", description: "Sustained the entire physical and cloud product portfolio through a corporate restructuring that downsized the team from 17 to 5 FTEs (70% reduction) by standardizing lean processes and AI-assisted execution.", profiles: ['manager', 'embedded-eng-manager'], priority: 1 },
        { title: "Agentic SDLC Strategy", description: "Spearheaded organizational adoption of Agentic Development. Standardized unified frameworks—including AGENTS.md, DESIGN.md, custom Model Context Protocol (MCP) servers, and Agent-to-Agent (A2A) interfaces—optimizing engineering workflows for context engineering to successfully close the automated loop.", profiles: ['manager', 'embedded-eng-manager', 'ai-dev', 'architect'], industries: ['ai'], priority: 1 },
        { title: "Strategic Convergence", description: "Unified firmware and cloud departments to merge physical hardware and SaaS platforms into a seamless cyber-physical loop.", profiles: ['manager', 'embedded-eng-manager', 'architect'], industries: ['firmware-embedded', 'cloud-saas'], priority: 2 },
        { title: "Governance & Security", description: "Spearheaded the ISO 27001 compliance and certification process across both teams.", profiles: ['manager', 'embedded-eng-manager', 'architect'], priority: 3 },
        { title: "Resilient Team Building", description: "Fosters and grows healthy internal teams where people feel safe and develop individually and as a team — transforming external-heavy engineering into resilient in-house capability.", profiles: ['manager', 'embedded-eng-manager'], priority: 4 }
      ],
      engineeringHighlights: [
        { title: "Agentic Hands-On Delivery", description: "Operate as an active player-coach across the Firmware, Desktop, and Cloud boundaries by building and running a full agentic development stack — personally shipping features, bug fixes, security fixes, performance optimizations and DevOps CI/CD pipelines in C++ and Python, and porting complete brownfield repositories to newer language standards.", profiles: ['senior-dev', 'manager', 'embedded-eng-manager'], priority: 1 },
        { title: "Agentic-Ready Architecture", description: "Re-architected codebases and testing systems with modular design patterns that enable autonomous AI agents to interact directly with low-level physical and logical interfaces (Oscilloscopes, J-Link debug probes, system-level D-Bus, and headless browsers) for closed-loop, automated HIL testing.", profiles: ['architect', 'ai-dev', 'senior-dev', 'embedded-eng-manager'], industries: ['ai', 'firmware-embedded'], priority: 1 },
        { title: "AI Translation Agent", description: "Developed a GraphRAG and LLM-powered translation agent in CI/CD, saving roughly €22k annually in external localization services.", profiles: ['ai-dev', 'senior-dev'], industries: ['ai'], priority: 2 }
      ],
      techStack: ["Firmware", "Cloud", "Desktop", "C++", "Python", "Agentic Workflows", "Context Engineering", "HIL Testing", "MCP", "A2A", "J-Link", "D-Bus", "Oscilloscope", "ISO 27001", "Neo4j", "DevOps"]
    },
    {
      title: "Manager Cloud & Digital Factory",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "March 2025 – June 2025",
      profiles: ['manager', 'embedded-eng-manager', 'architect', 'ai-dev'],
      industries: ['cloud-saas', 'ai', 'manufacturing'],
      priority: 2,
      responsibility: "Managed a 10-FTE team of Cloud Developers, QA, UX, DevOps, and Architects, reporting directly to the CTO. Unified complex system integrations and optimized team throughput.",
      variants: {
        architect: {
          responsibility: "Led a 10-FTE cloud team of developers, QA, UX, DevOps, and architects while unifying complex system integrations — standardizing cloud architectures on Arc42 principles and integrating LLM agents and knowledge graphs into the stack — reporting directly to the CTO."
        }
      },
      leadershipHighlights: [
        { title: "Executive Crisis Resolution", description: "Defused a critical GCP billing conflict representing a €1M+ financial risk: partnered with DevOps on a mitigation strategy and successfully executed the migration after presenting it to the CEO and CTO.", profiles: ['manager', 'embedded-eng-manager', 'architect'], industries: ['cloud-saas'], priority: 1 },
        { title: "Operational Cost Optimization", description: "Slashed external consulting overhead by €39k/month by strategically insourcing external cloud development and establishing an agile in-house cloud engineering capability.", profiles: ['manager', 'embedded-eng-manager'], priority: 1 },
        { title: "Merger Integration", description: "Orchestrated post-merger decoupling of MakerBot and UltiMaker systems while maintaining 100% production uptime.", profiles: ['manager', 'embedded-eng-manager', 'architect'], priority: 2 },
        { title: "Vendor Management", description: "Managed contract negotiations with external partners to prepare the organization for the strategic insourcing initiatives.", profiles: ['manager', 'embedded-eng-manager'], priority: 3 }
      ],
      engineeringHighlights: [
        { title: "AI-Driven Cloud", description: "Pioneered integration of LLM agents (UltiBot) and Neo4j Knowledge Graphs into cloud stacks via Model Context Protocols.", profiles: ['ai-dev', 'architect'], industries: ['ai', 'cloud-saas'], priority: 1 },
        { title: "Architecture Documentation", description: "Unified complex physical-to-digital IoT APIs by standardizing cloud architectures on Arc42 principles.", profiles: ['architect'], industries: ['cloud-saas'], priority: 2 }
      ],
      techStack: ["GCP", "SaaS", "MCP", "AI Agents", "Arc42", "Legacy Migration", "Vendor Management"]
    },
    {
      title: "Team Lead",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "January 2024 – March 2025",
      profiles: ['manager', 'embedded-eng-manager', 'senior-dev', 'architect'],
      industries: ['cloud-saas', 'manufacturing'],
      priority: 3,
      responsibility: "Led a 5-FTE team overseeing Cura Desktop and Cura Cloud software development. Spearheaded strategic agile transformations and key feature alignment.",
      leadershipHighlights: [
        { title: "Strategic Insourcing", description: "Built a high-performing Netherlands engineering team by insourcing critical product capabilities from the US.", profiles: ['manager', 'embedded-eng-manager'], priority: 1 },
        { title: "Risk Mitigation", description: "De-risked and unblocked major product launches by resolving high-exposure open-source licensing and compliance issues (OpenSSL, Qt libraries).", profiles: ['manager', 'embedded-eng-manager', 'architect'], priority: 2 }
      ],
      engineeringHighlights: [
        { title: "Serverless WASM Compilation", description: "Co-authored compiling the core C++ slicer engine to WebAssembly, eliminating backend cloud GPU dependencies and saving €1.5M in annual infrastructure costs.", priority: 1 }
      ],
      techStack: ["WebAssembly", "C++", "Engineering Leadership", "Coaching", "Risk Management"]
    },
    {
      title: "Software Engineer (C++ / Python)",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "April 2020 – March 2025",
      profiles: ['senior-dev', 'architect', 'ai-dev', 'embedded-eng-manager'],
      industries: ['manufacturing', 'cloud-saas'],
      priority: 4,
      responsibility: "Served as a core developer for UltiMaker Cura, driving 15 million monthly 3D slices through heavy-duty system algorithms, data structures, and mathematical optimizations under high pressure.",
      engineeringHighlights: [
        { title: "C++20 Engine Modernization", description: "Modernized the core slicing engine (CuraEngine) from C++14 to C++20/23, introducing ranges, concepts, template metaprogramming, and architecting a decoupled gRPC/Protobuf-based plugin system to run proprietary slicing strategies alongside the AGPL core.", profiles: ['senior-dev', 'architect', 'embedded-eng-manager'], priority: 1 },
        { title: "Cloud Slicing (WASM)", description: "Pioneered browser-based 3D slicing by compiling the core C++ slicing algorithms to WebAssembly, matching native desktop performance and 3D visualization requirements.", profiles: ['senior-dev', 'architect', 'embedded-eng-manager'], industries: ['cloud-saas', 'manufacturing'], priority: 2 },
        { title: "ParaView Visual Debugger", description: "Developed the custom C++20 'scripta' visual debugger utilizing CRTP and ranges to serialize internal geometric stages as VTU files, enabling developers and engineers to visualize spatial and geometry edge cases in ParaView.", profiles: ['senior-dev'], priority: 4 },
        { title: "CAD Interoperability & Security", description: "Integrated Dassault Systèmes Spatial CGM SDK (UMSpatial) for enterprise CAD file parsing and implemented RSA-based licensing security schemes.", profiles: ['senior-dev', 'architect'], priority: 5 },
        { title: "Operational Excellence", description: "Revamped the entire build system using Conan and GitHub Actions, slashing developer setup from 1 day to 15 minutes and reducing annual infrastructure overhead by €36k/year.", profiles: ['senior-dev', 'manager', 'embedded-eng-manager'], priority: 3 }
      ],
      techStack: ["C++20", "C++23", "Python", "WebAssembly", "gRPC", "Protobuf", "Conan", "GitHub Actions", "Docker", "Spatial CGM SDK", "Qt", "Linux"]
    },
    {
      title: "Mechatronic Engineer R&D",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "May 2019 – April 2020",
      profiles: ['senior-dev', 'ai-dev'],
      industries: ['manufacturing'],
      priority: 5,
      responsibility: "Responsible for research, mathematical modeling, and software tool development to analyze extrusion flow and thermodynamics in additive manufacturing.",
      engineeringHighlights: [
        { title: "Flow Computer Vision (PIV)", description: "Developed high-speed Particle Image Velocimetry (PIV) computer vision algorithms and physical test setups in C++ and OpenCV to analyze and visualize fluid extrusion flow in real time.", profiles: ['senior-dev', 'ai-dev'], priority: 1 },
        { title: "FLIR Thermal Analysis", description: "Created real-time thermographic analysis algorithms in Python (FLIR ResearchIR) to inspect hotend heat distribution and fluid boundaries, validating safety and processing margins.", profiles: ['senior-dev', 'ai-dev'], priority: 2 },
        { title: "Mathematical Modeling", description: "Created physical and thermal extrusion flow models in OpenModelica and Python to mathematically predict fluid process parameters and optimize deposition geometry.", profiles: ['senior-dev'], priority: 3 }
      ],
      techStack: ["C++", "Python", "OpenCV", "OpenModelica", "Thermography", "Mechatronics", "Mathematical Modeling", "Data Visualization", "Linux"]
    }
  ],
  previousExperience: [
    {
      title: "Research and Development Engineer",
      company: "Royal IHC (IHC Medusa)",
      website: "https://www.royalihc.com/",
      location: "Rotterdam, Netherlands",
      period: "September 2017 – April 2019",
      profiles: [],
      industries: ['maritime', 'manufacturing', 'royal-ihc'],
      anchor: true,
      responsibility: "Led engineering initiatives in a newly formed Royal IHC business unit specializing in the processing and handling of geopolymers.",
      engineeringHighlights: [
        { title: "Industrial Oven Design", description: "Designed and developed an automated flash-calcination kiln for kaolin clay particles, integrating thermal sensors and control loops.", priority: 1 },
        { title: "Processing Plant Engineering", description: "Designed and developed an industrial mobile geopolymer processing plant, coordinating mechanical routing and PLC integrations.", priority: 2 }
      ],
      techStack: ["Mechanical Design", "PLC Integration", "Kaolin Flash-Calcination", "Process Engineering", "Thermal Controls"]
    },
    {
      title: "Research and Development Engineer",
      company: "Royal IHC (IHC MTI)",
      website: "https://www.royalihc.com/",
      location: "Delft, Netherlands",
      period: "April 2016 – September 2017",
      profiles: ['senior-dev', 'ai-dev', 'embedded-eng-manager'],
      industries: ['maritime', 'firmware-embedded', 'ai', 'royal-ihc'],
      anchor: true,
      responsibility: "Conducted core software development, robotics, and hardware-software research within Royal IHC's central R&D institute.",
      engineeringHighlights: [
        { title: "Soil Machine Vision Microscope", description: "Independently designed and developed an automated soil analysis microscope backed by an 8,000-line C++ codebase. Implemented advanced image processing (Fast Fourier Transforms, OpenCV) and neural network algorithms (ANN, GA) to classify sand sample shape and grain angularity. Featured in 'Kompas' magazine.", profiles: ['senior-dev', 'ai-dev'], priority: 1 },
        { title: "AUV Autonomy Framework", description: "Authored a real-time C++ control framework for rapid prototyping and deployment of autonomous underwater vehicles (AUVs) on embedded Linux and RTOS.", profiles: ['senior-dev', 'architect', 'embedded-eng-manager'], industries: ['maritime', 'firmware-embedded'], priority: 2 },
        { title: "Scientific Python Library", description: "Collaborated to create 'MTIpython', an internal Python library for advanced engineering calculations, unit-safe physical computations, and LaTeX-generated reports.", profiles: ['senior-dev'], priority: 3 },
        { title: "Test Controller Design", description: "Designed and implemented a real-time C++ test controller and data acquisition script for a slurry-based geopolymer test plant.", profiles: ['senior-dev'], priority: 4 },
        { title: "Collaboration Standards", description: "Set up and administered the first local secure GitLab server for the R&D department, establishing modern Git version control, branch rules, and peer reviews.", profiles: ['manager', 'embedded-eng-manager', 'senior-dev'], priority: 5 }
      ],
      techStack: ["C++", "Python", "OpenCV", "Embedded Linux", "RTOS", "Neural Networks (ANN)", "Fast Fourier Transforms (FFT)", "GitLab", "Siemens NX CAD", "Mathematical Modeling"]
    },
    {
      title: "Engineer (Systems & Piping)",
      company: "Royal IHC",
      website: "https://www.royalihc.com/",
      location: "Kinderdijk, Netherlands",
      period: "April 2013 – March 2016",
      profiles: [],
      industries: ['maritime', 'royal-ihc'],
      anchor: true,
      responsibility: "Responsible for mechanical design, P&ID design, and system-level engineering for trailing suction hopper dredgers (TSHD), cutter suction dredgers (CSD), and specialized vessels.",
      engineeringHighlights: [
        { title: "Maritime Piping & LNG P&ID", description: "Designed complex Piping & Instrumentation Diagrams (P&IDs) for LNG (Liquefied Natural Gas), jetwater, bilge, and ballast systems on seagoing vessels adhering to strict Bureau Veritas, Lloyd's Register, and CCS classification societies.", priority: 1 },
        { title: "Boskalis 'SIDUS' CSD", description: "Executed detailed mechanical engineering and pipeline routing of the thermal oil heating systems for the 23,684kW Boskalis Sidus Cutter Suction Dredger, one of the world's largest.", priority: 2 },
        { title: "CFD Simulation", description: "Designed complex sea-water filtration installations and performed intensive Computational Fluid Dynamics (CFD) simulations in Siemens NX to optimize performance and flow mechanics.", priority: 3 },
        { title: "Deme 'Minerva' & 'Scheldt River'", description: "Coordinated LNG P&ID design for the first low-emission dual-fuel LNG dredging vessels in Deme's fleet — the 3,000m³ 'Minerva' and 7,950m³ 'Scheldt River' trailing suction hopper dredgers.", priority: 4 },
        { title: "Standardization", description: "Collaborated to formulate the shipyard-wide Valve, Instrument and Piping guide (VIP) implemented across multiple global IHC shipyards.", priority: 5 },
        { title: "Flagship Vessel Portfolio", description: "Engineered systems across flagship builds: the 5,500m³ TNPA 'ILEMBE' TSHD (jetwater, bilge & ballast P&IDs with optimized header routing), the largest TSHD Royal IHC ever produced for CCCC Guangzhou Dredging ('Jun Yang 1' — emergency generator arrangement and raw seawater filters), and the 23,545kW Huta 'AL BAHAR' CSD (engine-room system routing).", priority: 6 }
      ],
      techStack: ["Piping Design", "P&ID", "CFD Simulation", "Siemens NX", "Bureau Veritas", "LNG Systems", "Dredging Equipment", "Standardization"]
    },
    {
      title: "Engineer (Mechanical & Piping)",
      company: "Royal IHC & IHC Merwede (Solyne BV)",
      website: "https://www.royalihc.com/",
      location: "The Randstad, Netherlands",
      period: "April 2013 – March 2014",
      profiles: [],
      industries: ['maritime', 'royal-ihc'],
      anchor: true,
      responsibility: "Contract engineer for IHC Merwede Dredging executing detailed engineering for heavy dredging equipment.",
      engineeringHighlights: [
        { title: "Mechanical Layouts", description: "Engineered high-load mechanical installations and routed pipelines for shipboard installations." },
        { title: "Preliminary Layouts", description: "Created shipyard preliminary layouts and general arrangement plans for vessel construction." }
      ],
      techStack: ["Piping Design", "Mechanical Engineering", "P&ID", "Shipyard Layouts"]
    },
    {
      title: "Die Designer",
      company: "Phoenix Nederland B.V.",
      location: "Brabant, Netherlands",
      period: "May 2012 – March 2013",
      profiles: [],
      industries: ['manufacturing'],
      engineeringHighlights: [
        { title: "Extrusion Die Design", description: "Designed and simulated industrial aluminum extrusion dies, optimizing geometric profiles for enterprise customers." }
      ],
      techStack: ["CAD", "Die Design", "Extrusion Geometry"]
    },
    {
      title: "Die Corrector (Factory Floor)",
      company: "Nedal Aluminium BV",
      website: "https://nedal.com/",
      location: "Utrecht, Netherlands",
      period: "January 2004 – May 2012",
      profiles: [],
      industries: ['manufacturing'],
      engineeringHighlights: [
        { title: "Precision Manufacturing", description: "Began career optimizing metal extrusion dies on the shop floor. Fine-tuned die geometry (150–900mm diameter, including 7003/7020/7108 alloys) for massive 2500, 4000, and 5500 MT industrial presses — reducing knock-off, billet-on-billet effects, and material waste while optimizing extrusion speed." }
      ],
      techStack: ["Metallurgy", "Die Correction", "Extrusion Presses", "Precision Manufacturing"]
    },
    {
      title: "Silversmith Apprenticeship",
      company: "SFA Silverworks",
      location: "The Hague, Netherlands",
      period: "July 2003 – January 2004",
      profiles: [],
      industries: [],
      engineeringHighlights: [
        { title: "Precision Metal Restoration", description: "Restored high-value 17th/18th-century antique silverware under prestigious museum restoration contracts." }
      ],
      techStack: ["Metal Fabrication", "Precision Restorations", "Schoonhoven Craftsmanship"]
    },
    {
      title: "Sous Chef & Entree Chef",
      company: "Restaurant Den Draeck",
      location: "Utrecht, Netherlands",
      period: "January 2000 – December 2003",
      profiles: [],
      industries: [],
      engineeringHighlights: [
        { title: "High-Pressure Leadership", description: "Rose from dishwasher to Sous Chef, managing kitchen throughput, inventory, and coordinating team deployment in extreme, high-stress services." }
      ],
      techStack: ["Kitchen Operations", "Team Coordination", "High-Pressure Delivery"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering (BEng), Mechanical Engineering",
      school: "HAN University of Applied Sciences",
      website: "https://www.han.nl/",
      year: "2011 – 2020",
      priority: 1,
      details: [
        "Academic Standard: Grade: 8 / 10. Completed advanced engineering coursework in Statics, Dynamics, Thermodynamics, Fluid Dynamics, Electrical Engineering, Systems Modeling, and CAD Design.",
        "Thesis Project: Engineered \"ohCaptain\", an open-source autonomous maritime controller framework designed for unmanned vessels and dredging operations (such as Archimedes-driven dredging crawlers) running on Single-Board Computer clusters using C++.",
        "Robotic Navigation & Sensor Fusion: Programmed and validated an Unscented Kalman Filter (UKF) to fuse high-frequency IMU and pressure sensors for accurate robot localization under GPS-deprived environments.",
        "Path Planning & Control: Coded Coverage Path Planning (CPP) algorithms and real-time PID feedback controllers, verifying structural dynamics through Project Chrono multi-body physics simulations."
      ],
      thesisLink: "https://github.com/jellespijker/HAN-thesis/blob/master/report.pdf",
      techStack: ["C++", "Python", "Unscented Kalman Filter (UKF)", "Coverage Path Planning (CPP)", "Sensor Fusion", "BeagleBone Black", "Raspberry Pi", "PID Control", "Multibody Physics", "MATLAB", "CAD Design (NX)", "PLC Programming", "FEM/Motion", "Thermodynamics", "Fluid Dynamics", "IoT", "Maritime Automation"]
    },
    {
      degree: "Bachelor of Engineering (BEng), Embedded Vision Design (Minor)",
      school: "HAN University of Applied Sciences",
      website: "https://www.han.nl/",
      year: "2014 – 2015",
      profiles: ['senior-dev', 'ai-dev', 'embedded-eng-manager'],
      industries: ['firmware-embedded', 'ai', 'maritime'],
      priority: 2,
      details: [
        "Academic Standard: Grade: 9 / 10. Designed and engineered the \"Vision Soil Analyzer\" (VSA) prototype for Royal IHC to automatically classify soil sample metrics (0.02mm–2.0mm).",
        "Color & Lighting Optoelectronics: Created custom RGB to CIE La*b* converters and custom Redness Index formulas under optimized high-intensity 10000K LED light spectra.",
        "Image Processing & Mathematical Modeling: Developed Otsu segmentation, spatial filters, Fast Fourier Transforms (FFT) for boundary descriptors, and Hu Moments for geometric invariants.",
        "Embedded AI Classification: Programmed ARM Cortex-M ANSI-C vision routines and trained feed-forward Artificial Neural Networks (ANN) for real-time grain angularity classification."
      ],
      techStack: ["C++", "C", "OpenCV", "Matlab", "Python", "ARM Cortex-M", "Cortex-M SDK", "Embedded Linux", "Qt", "Neural Networks", "Fast Fourier Transform (FFT)", "Fourier Descriptors", "Otsu's Thresholding", "Hu Moments"]
    },
    {
      degree: "Middle Management Engineering (MTS+ 4)",
      school: "ROC van Amsterdam",
      year: "2009 – 2011",
      profiles: ['manager', 'embedded-eng-manager'],
      industries: ['manufacturing'],
      priority: 3,
      details: [
        "Specialization: Middle Management Engineering Technicus (metaal)",
        "Final Thesis (proeve van bekwaamheid): Optimization of a logistical tooling flow in the die shop of an aluminum extrusion factory (Nedal Aluminium B.V.). Designed multiple physical/logistical tools to simplify tasks and streamline tooling flow."
      ]
    },
    {
      degree: "MTS 4, Goldsmith / Entrepreneur",
      school: "Vakschool Schoonhoven",
      year: "2003 – 2004",
      profiles: [],
      industries: [],
      priority: 8,
      details: [
        "Additional year dedicated specifically to obtaining the Goldsmithing certificate and entrepreneurial qualifications."
      ]
    },
    {
      degree: "MTS 4, Silversmith / Entrepreneur",
      school: "Vakschool Schoonhoven",
      year: "1998 – 2003",
      profiles: [],
      industries: [],
      priority: 9,
      details: [
        "Main course of study: Silversmithing.",
        "Extracurriculars: Active Board Member of the student party committee 'Kontakt' associated with De Vakschool."
      ]
    },
    {
      degree: "MAVO D",
      school: "De Werkplaats Kindergemeenschap",
      year: "1992 – 1996",
      profiles: [],
      industries: [],
      priority: 10,
      details: [
        "Core subjects: Dutch, English, Physics, Chemistry, Mathematics, Biology, History"
      ]
    }
  ],
  certifications: [
    {
      name: "Certified Professional for Software Architecture Foundation Level",
      issuer: "iSAQB® – International Software Architecture Qualification Board",
      date: "Nov 2022",
      credentialId: "2202-CPSAFL-0548-EN",
      profiles: ['architect', 'manager', 'embedded-eng-manager', 'senior-dev'],
      priority: 1,
      details: [
        "Design Principles: Mastered cohesion, loose coupling, SOLID, and patterns (Microservices, CQRS, Layered, Hexagonal).",
        "Quality & Requirements: Evaluated architectural trade-offs, quality attributes, and mapped strict system requirements.",
        "Standardized Documentation: Authored system designs utilizing arc42 templates, Architecture Decision Records (ADRs), UML, and the C4 model.",
        "Architecture Assessments: Conducted qualitative assessments, coupling metrics, and design conformance reviews."
      ],
      techStack: ["arc42", "C4 Model", "UML", "ADR", "SOLID", "Microservices", "Design Patterns", "Architectural Patterns"]
    },
    {
      name: "Maatwerk training voor de OR",
      issuer: "Academy4-OR",
      date: "Dec 2022",
      profiles: ['manager', 'embedded-eng-manager'],
      priority: 5
    },
    {
      name: "Modern C++ design patterns",
      issuer: "Udemy",
      date: "Jul 2021",
      profiles: ['senior-dev', 'architect'],
      priority: 2,
      details: [
        "Syllabus: Completed intensive live-coding across 25 sections covering all Gang of Four (GoF) patterns and SOLID design principles.",
        "SOLID Principles: Implemented Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.",
        "Design Patterns: Mastered Creational (Builders, Factories), Structural (Adapters, Bridge, Decorators, Proxies), and Behavioral (Commands, Observers, State Machines) patterns in Modern C++."
      ],
      techStack: ["C++11/17/20", "SOLID Principles", "Design Patterns"]
    },
    {
      name: "Effective communication skills for technical professionals",
      issuer: "High Tech Institute (HTI) B.V.",
      date: "Oct 2020",
      profiles: ['manager', 'embedded-eng-manager'],
      priority: 3
    },
    {
      name: "Artificial Intelligence for Robotics",
      issuer: "Georgia Institute of Technology | Udacity",
      date: "Jun 2019",
      profiles: ['ai-dev'],
      industries: ['ai'],
      priority: 2
    },
    {
      name: "Everything is the Same: Modeling Engineered Systems",
      issuer: "Northwestern University | Coursera",
      date: "Jun 2019",
      profiles: ['ai-dev', 'senior-dev'],
      priority: 6
    },
    {
      name: "Neural Networks for Machine Learning",
      issuer: "University of Toronto | Coursera",
      date: "Dec 2017",
      profiles: ['ai-dev'],
      industries: ['ai'],
      priority: 1
    },
    {
      name: "Initiated course - Training Institute for Dredging TID",
      issuer: "Royal IHC",
      date: "Jun 2016",
      profiles: [],
      industries: ['maritime'],
      priority: 7
    },
    {
      name: "Project management for Innovators (PRINCE2)",
      issuer: "Royal IHC",
      date: "Apr 2016",
      profiles: ['manager', 'embedded-eng-manager'],
      priority: 4
    },
    {
      name: "Cadmatic Basic User outfitting training (with pipe)",
      issuer: "NUPAS",
      date: "Apr 2013",
      profiles: [],
      industries: ['maritime'],
      priority: 8
    },
    {
      name: "Conan Essentials & Introduction to Conan",
      issuer: "JFrog Academy",
      profiles: ['senior-dev'],
      priority: 5
    },
    {
      name: "FLIR Advanced Thermography Training",
      issuer: "FLIR",
      profiles: ['senior-dev', 'ai-dev'],
      priority: 6
    },
    {
      name: "Leadership for Engineers (LfE101x)",
      issuer: "DelftX | edX",
      profiles: ['manager', 'embedded-eng-manager'],
      priority: 4
    },
    {
      name: "Coding the Matrix: Linear Algebra through Computer Science Applications",
      issuer: "Brown University | Coursera",
      profiles: ['senior-dev', 'ai-dev'],
      priority: 7
    },
    {
      name: "Circuits and Electronics 1: Basic Circuit Analysis (6.002.1x)",
      issuer: "MITx",
      profiles: ['senior-dev'],
      industries: ['firmware-embedded'],
      priority: 7
    },
    {
      name: "Introduction to Linux (LFS101x)",
      issuer: "LinuxFoundationX",
      profiles: ['senior-dev'],
      priority: 8
    },
    {
      name: "Three.js, React Three Fiber & Drei",
      profiles: ['senior-dev'],
      industries: ['cloud-saas'],
      priority: 8
    },
    {
      name: "Hands-on LoRa workshop",
      issuer: "Royal IHC",
      profiles: ['senior-dev'],
      industries: ['firmware-embedded'],
      priority: 9
    },
    {
      name: "Geometrische productspecificatie en verificatie (GD&T)",
      issuer: "Nedal Aluminium BV",
      profiles: [],
      industries: ['manufacturing'],
      priority: 9
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["Dutch (Native)", "English (Full Professional)"]
    },
    {
      category: "Programming Languages",
      items: ["C++ (11-23)", "Python", "C", "TypeScript", "JavaScript", "LaTeX", "TikZ", "Bash/Zsh"]
    },
    {
      category: "Cloud & DevOps",
      industries: ['cloud-saas'],
      items: ["GCP (CloudRun, VertexAI)", "Docker", "GitHub Actions", "Conan", "JFrog Artifactory", "CI/CD Code Signing", "MongoDB"]
    },
    {
      category: "Web & High-Performance Web",
      industries: ['cloud-saas'],
      items: ["WebAssembly (WASM)", "React", "NodeJS", "Vite", "ThreeJS"]
    },
    {
      category: "AI & Data Engineering",
      industries: ['ai'],
      items: ["Model Context Protocol (MCP)", "A2A", "LangGraph", "LangChain", "Neo4j / Cypher", "GraphRAG", "Text Embeddings", "Vertex AI", "Prompt-Driven Design (PDD)", "LLM Fine-tuning"]
    },
    {
      category: "Systems & Embedded",
      industries: ['firmware-embedded'],
      items: ["Embedded Linux / RTOS", "Qt / QML", "Device Tree Overlays", "D-Bus", "Cross-Compilers (ARM/Intel)"]
    },
    {
      category: "Mechanical & Manufacturing",
      industries: ['maritime', 'manufacturing'],
      items: ["Siemens NX (CAD/CFD)", "SolidWorks", "AutoCAD", "Cadmatic", "P&ID / Piping Design", "Lean / QRM", "Metallurgy & Extrusion"]
    }
  ],
  volunteer: [
    {
      role: "Works Council Secretary",
      organization: "UltiMaker",
      period: "2022 – 2024",
      profiles: ['manager', 'embedded-eng-manager'],
      priority: 1,
      description: "Represented employee interests and advised executive management on strategic decisions during a critical international merger and organizational restructuring."
    },
    {
      role: "Professional Field Committee Member",
      organization: "HAN University of Applied Sciences",
      period: "2020 – Present",
      profiles: ['manager', 'embedded-eng-manager'],
      priority: 2,
      description: "Regularly advise and consult on the Mechanical Engineering and Embedded Systems Engineering curricula to align course topics with modern industrial software and automation needs."
    },
    {
      role: "Home Automation Developer",
      organization: "Home Assistant Community",
      period: "Ongoing",
      profiles: ['senior-dev', 'ai-dev', 'embedded-eng-manager'],
      industries: ['firmware-embedded'],
      priority: 3,
      description: "Author and maintainer of the HACS UltiMaker smart home connection integration. Developing open-source Python hooks and automations."
    },
    {
      role: "Conan Package Contributor",
      organization: "JFrog - Conan Center",
      period: "Ongoing",
      profiles: ['senior-dev', 'embedded-eng-manager'],
      priority: 2,
      description: "Contributed C++ library recipes to the global Conan Package Manager index, improving Linux/ARM multi-platform build compliance."
    },
    {
      role: "Emergency Response & First Aid Officer (BHV)",
      organization: "UltiMaker · Royal IHC · Nedal Aluminium",
      period: "2008 – 2024",
      profiles: ['manager', 'embedded-eng-manager'],
      priority: 4,
      description: "Sixteen years of voluntary in-house emergency response and first-aid (BHV) service across three employers — from member to foreman in charge of the emergency and first-aid supplies at Nedal Aluminium."
    }
  ],
  projects: [
    {
      name: "ultiagents",
      role: "Creator",
      description: "An agentic development swarm taking features from idea to production-ready code through clearly staged phases: Prompt-Driven Design (PDD), Standard Operating Procedures (SOPs), security-by-design, and human-like validation & verification — orchestrating Gemini, OpenAI, and Claude agents.",
      profiles: ['ai-dev', 'architect', 'manager', 'embedded-eng-manager'],
      industries: ['ai'],
      priority: 1,
      tech: ["AI Agents", "Prompt-Driven Design (PDD)", "SOPs", "Gemini", "OpenAI", "Claude", "Security-by-Design"]
    },
    {
      name: "ArchGraph-AI",
      role: "Creator",
      description: "A self-documenting C4 architecture engine that reverses codebases into interactive maps. Coordinates multi-agent Knowledge Sources via a Blackboard pattern to parse Tree-sitter WASM structures into a Neo4j AST, preserving human layout overlays via transactional SQLite locks.",
      link: "https://github.com/jellespijker/ArchGraph-AI",
      profiles: ['architect', 'ai-dev'],
      industries: ['ai'],
      priority: 1,
      tech: ["Neo4j", "NodeJS", "WebAssembly", "Blackboard Pattern", "AI Agents", "React"]
    },
    {
      name: "scripta - Visual Debugger for CuraEngine",
      role: "Creator",
      description: "A C++20 visual debugger and telemetry tool that serializes complex 3D toolpath geometries and algorithms into ParaView VTU files. Built using CRTP, concepts, and ranges, compiling with zero overhead in production release configurations.",
      link: "https://github.com/jellespijker/scripta",
      profiles: ['senior-dev'],
      industries: ['manufacturing'],
      priority: 2,
      tech: ["C++20", "ParaView", "VTU", "CRTP", "Ranges", "Concepts"]
    },
    {
      name: "Generic Autonomous (Under-)water vehicle Library C++",
      role: "Creator (Royal IHC)",
      description: "A hardware-independent C++ library for autonomous surface and underwater vehicle control. Implemented advanced Coverage Path Planning (CPP), sensor fusion, and Unscented Kalman Filtering (UKF) on BeagleBone Black, Raspberry Pi, and x86_64 — deployed on an autonomous measurement catamaran and the Archimedes-screw dredge bot.",
      profiles: ['senior-dev', 'architect'],
      industries: ['maritime', 'firmware-embedded', 'royal-ihc'],
      priority: 4,
      tech: ["C++", "Eigen3", "Boost", "Kalman Filtering", "Coverage Path Planning", "SBC", "Embedded Linux"]
    },
    {
      name: "GHermeneus",
      role: "Creator",
      description: "A fast GCode interpreter: lexing, parsing, and building an Abstract Syntax Tree from GCode, emitting a state-space representation after each command.",
      profiles: ['senior-dev'],
      industries: ['manufacturing'],
      priority: 8,
      tech: ["C++", "Parsing", "AST", "GCode"]
    },
    {
      name: "Autonomous Dredge Bot",
      role: "Creator (Royal IHC)",
      description: "Designed and developed an Archimedes-screw propelled autonomous dredging bot operating in dynamic, unknown maritime environments. Deployed a generic, custom C++ autonomous marine controller framework on embedded single-board computer clusters.",
      link: "https://github.com/jellespijker/HAN-thesis",
      profiles: ['senior-dev'],
      industries: ['maritime', 'firmware-embedded', 'royal-ihc'],
      priority: 5,
      tech: ["C++", "SBC Clusters", "Robot Control", "Archimedes Screw", "Sensor Fusion", "Project Chrono"]
    },
    {
      name: "MTIpython",
      role: "Creator (Royal IHC)",
      description: "A unit-safe Python library for mechanical, fluid, and thermal calculations. Implemented fluid flow network solvers (Hardy-Cross, Newton-Raphson), Bingham slurry solver, soil mechanics algorithms (Verruijt/Miedema), and automatic LaTeX report generators.",
      link: "https://gitlab.com/MTIpython/MTIpython",
      profiles: ['senior-dev'],
      industries: ['maritime', 'royal-ihc'],
      priority: 6,
      tech: ["Python", "Jupyter", "Hardy-Cross Solver", "Bingham Slurry", "Soil Mechanics", "LaTeX"]
    },
    {
      name: "Neoprep (UltiMaker Cura Cloud)",
      role: "Product Lead",
      description: "Led development of Neoprep, the cloud slicer based on Cura and CuraEngine: a serverless 3D slicing engine processing 100k slices/month in-browser via high-performance WebAssembly, eliminating backend GPU infrastructure dependencies.",
      link: "https://neoprep.staging.ultimaker.com/",
      profiles: ['architect', 'manager', 'embedded-eng-manager', 'senior-dev'],
      industries: ['cloud-saas', 'manufacturing'],
      priority: 1,
      tech: ["WASM", "ThreeJS", "C++"]
    },
    {
      name: "Curator",
      role: "Creator",
      description: "A manager for the profiles and definitions used by Cura, written in modern C++23 with JavaScript (WASM) bindings and future Python bindings.",
      profiles: ['senior-dev', 'architect'],
      industries: ['manufacturing', 'cloud-saas'],
      priority: 3,
      tech: ["C++23", "WebAssembly", "JS Bindings", "Cura"]
    },
    {
      name: "UltiBot",
      role: "Creator",
      description: "A 3D-printing AI agent embedded into the Cura Cloud solution, connecting LLM reasoning to the printing workflow via A2A and Model Context Protocol interfaces.",
      profiles: ['ai-dev'],
      industries: ['ai', 'cloud-saas'],
      priority: 2,
      tech: ["AI Agents", "A2A", "MCP", "LangGraph", "Vertex AI", "3D Printing"]
    },
    {
      name: "printer-linter",
      role: "Creator",
      description: "An automated linting and code-review bot for Cura printer definitions that posts comments and fix suggestions on community pull requests — responsible for a 300% increase in printers added to the following Cura release.",
      profiles: ['senior-dev', 'ai-dev', 'manager', 'embedded-eng-manager'],
      industries: ['manufacturing'],
      priority: 5,
      tech: ["Python", "Automated Code Review", "GitHub Actions", "Open Source"]
    },
    {
      name: "UltiMaker Cura",
      role: "Core Developer / Lead",
      description: "The premier open-source 3D printing slicer driving 15 million prints/month. One of the top all-time contributors to Cura and CuraEngine; modernized the core engine to C++20/23 and engineered a decoupled, high-performance plugin architecture.",
      link: "https://github.com/Ultimaker/Cura",
      profiles: ['senior-dev', 'architect', 'ai-dev'],
      industries: ['manufacturing'],
      priority: 1,
      tech: ["C++20", "Python", "Qt", "gRPC", "Protobuf"]
    },
    {
      name: "CuraEngine Plugins",
      role: "Lead Architect",
      description: "Designed and implemented a gRPC-based plugin system in C++ for CuraEngine, allowing seamless hook-ins during slicing calculations to change physical toolpath planning and operations in real-time.",
      link: "https://github.com/Ultimaker/CuraEngine",
      profiles: ['architect', 'senior-dev'],
      industries: ['manufacturing'],
      priority: 2,
      tech: ["C++20", "gRPC", "Protobuf", "Plugin Architecture"]
    },
    {
      name: "FFF PIV Toolbox",
      role: "Creator",
      description: "A C++ and OpenCV particle image velocimetry (PIV) toolbox designed to analyze flow fields, velocities, and extrusion mechanics in 3D printing processes using high-speed cameras.",
      profiles: ['senior-dev', 'ai-dev'],
      industries: ['manufacturing'],
      priority: 7,
      tech: ["C++", "OpenCV", "Computer Vision", "Particle Image Velocimetry", "Flow Mechanics"]
    },
    {
      name: "IR Floor Heating - Home Assistant Integration",
      role: "Creator",
      description: "Advanced Home Assistant integration for controlling high-load electric infrared floor heating using a dual-sensor topology and Time Proportional & Integral (TPI) algorithms with comfort-safety prioritization.",
      link: "https://github.com/jellespijker/IR-floor-heating",
      profiles: ['senior-dev'],
      industries: ['firmware-embedded'],
      priority: 6,
      tech: ["Python", "Home Assistant", "TPI Algorithms", "IoT", "Control Loops"]
    },
    {
      name: "UltiTranslator",
      role: "Creator",
      description: "Context-aware domain translation agent for 3D printing based on LangGraph, semantic embeddings, and Neo4j knowledge graphs, saving €22k/year in external localization services.",
      profiles: ['ai-dev'],
      industries: ['ai'],
      priority: 1,
      tech: ["LangGraph", "Neo4j", "Semantic Search", "LLM", "Python"]
    },
    {
      name: "UltiMaker Digital Factory",
      role: "Engineering Manager",
      description: "Built the cloud fleet-management platform handling 200k visits/month, enabling secure remote printing, cloud queue scheduling, and telemetry analytics for thousands of 3D printers.",
      link: "https://ultimaker.com/software/ultimaker-digital-factory/",
      profiles: ['manager', 'embedded-eng-manager', 'architect'],
      industries: ['cloud-saas'],
      priority: 2,
      tech: ["SaaS", "GCP", "React"]
    },
    {
      name: "AI-In-Action",
      role: "Founder",
      description: "Spearheaded a company-wide generative AI adoption initiative, running monthly showcases that scaled AI-assisted workflows across multi-disciplinary departments.",
      profiles: ['manager', 'embedded-eng-manager', 'ai-dev'],
      industries: ['ai'],
      priority: 3,
      tech: ["AI Agents", "LLMs", "Culture"]
    },
    {
      name: "Digital Soil Microscope",
      role: "Creator (Royal IHC)",
      description: "Engineered an automated hardware-software soil analysis system powered by a high-performance 8,000-line C++ computer vision engine.",
      profiles: ['ai-dev', 'senior-dev'],
      industries: ['maritime', 'ai', 'royal-ihc'],
      priority: 3,
      tech: ["OpenCV", "C++", "Mechatronics"]
    }
  ],
  architecture: [
    {
      name: "UltiCortex (Agentic SDLC Core)",
      description: "Architected a centralized skill registry bridging domain expertise with AI developer tooling. Designed a CLI pipeline deploying sandboxed guidelines (.skills/) to align GitHub Copilot and Cursor engines with hardware testing and C++ standards.",
      profiles: ['architect', 'ai-dev', 'manager', 'embedded-eng-manager'],
      industries: ['ai'],
      priority: 1,
      tech: ["CLI Systems", "GitHub Packages", "Context Engineering", "copilot-instructions", "NodeJS"]
    },
    {
      name: "Neoprep (UltiMaker Cura Cloud)",
      description: "Designed a serverless, browser-based slicing engine using WebAssembly (WASM) to eliminate heavy backend slicing infrastructure.",
      profiles: ['architect', 'senior-dev'],
      industries: ['cloud-saas', 'manufacturing'],
      priority: 2,
      tech: ["WASM", "ThreeJS", "React"]
    },
    {
      name: "AI Agent Protocol (MCP)",
      description: "Developed a back-end orchestrator connecting specialized Model Context Protocol (MCP) servers for internal and external AI tools.",
      profiles: ['architect', 'ai-dev'],
      industries: ['ai'],
      priority: 2,
      tech: ["MCP", "LLMs", "Neo4j"]
    },
    {
      name: "CuraEngine Modularization",
      description: "Architected a gRPC-based plugin system to run proprietary slicing strategies alongside the AGPL open-source core.",
      profiles: ['architect', 'senior-dev'],
      industries: ['manufacturing'],
      priority: 1,
      tech: ["C++20", "gRPC", "Protobuf"]
    }
  ],
  recommendations: [
    {
      name: "Michiel van Rooijen",
      title: "IT Manager at UltiMaker",
      date: "May 13, 2026",
      relationship: "Michiel worked with Jelle but on different teams",
      profiles: ['manager', 'embedded-eng-manager'],
      priority: 1,
      text: "Jelle is a one of a kind guy, there’s no better way to put it. I’ve had the pleasure of working with him in multiple roles, him as a developer while I was a Product Owner - and now both as managers in our respective departments. And let’s not forget our tenure together on the Works Council. His ability to balance employee interests with organizational goals during our time on the Works Council showed a level of maturity and strategic thinking that he now seamlessly applies in his managerial role. In all this time I have gotten to know Jelle as one of the most driven people I have ever seen. The man is possessed with boundless energy for creativity, thinking outside the box, problem solving and people.\n\nDid I mention people? Because his love for the people he works with is what sets him apart. Jelle is extremely adept at navigating corporate culture and does so with a smile, charm and disarming personality. But don’t let that fool you, Jelle is very keen, observing and skilled at figuring out how to move and encourage people. I see him constantly drive to get the best out of those around him, not just his direct reports, but everyone. It’s a masterclass to witness.\n\nI wish I had a manager like Jelle. I’d feel encouraged to give it my best every day. Luckily I get to work alongside him constantly as we tackle complex questions on infrastructure, optimizations, code and various other projects. He doesn't just manage from a distance; his technical grasp on infrastructure and code optimizations ensures that the solutions we build are not only human-centric but technically robust. Any organization would be lucky to have Jelle at the helm; he is the kind of leader who doesn't just manage a team, but builds a legacy.",
      linkedin: "https://www.linkedin.com/in/michielvanrooijen/"
    },
    {
      name: "Casper Lamboo",
      title: "Software Developer bij Ultimaker",
      date: "May 10, 2026",
      relationship: "Casper worked with Jelle but on different teams",
      profiles: ['manager', 'embedded-eng-manager', 'ai-dev', 'architect'],
      priority: 2,
      text: "I’ve had the pleasure of seeing Jelle evolve from a Software Engineer into a truly versatile leader. What makes Jelle unique is his ability to bridge the gap between deeply technical domains—like Firmware and Cloud—while never losing sight of the human element.\n\nJelle is a rare \"people-first\" manager who remains fiercely business-oriented. What is most impressive is his ability to drive meaningful, systematic change across the organization. He does this by involving diverse teams and ensuring solutions are larger than any one individual, he creates a culture of genuine buy-in. His work spearheading our AI adoption—providing not just the tools, but the education and community (colloquia) to support them—is a perfect testament to his vision.",
      linkedin: "https://www.linkedin.com/in/casper-lamboo-250b54242/"
    },
    {
      name: "Joost Koevoets",
      title: "Product Manager at Neptune Marine",
      date: "October 28, 2015",
      relationship: "Joost was senior to Jelle but didn’t manage Jelle directly",
      profiles: ['senior-dev', 'ai-dev'],
      industries: ['maritime'],
      priority: 1,
      text: "I was impressed by Jelle’s creative capabilities in problem solving and the drive for understanding the principles governing the technological challenges he addressed in the soil analyzer. His self-taught capabilities exceed his curriculum by far.",
      linkedin: "https://www.linkedin.com/in/joost-koevoets-b192988/"
    },
    {
      name: "Konstantinos Karmas",
      title: "Software Engineer at NL-ix",
      date: "November 10, 2021",
      relationship: "Konstantinos worked with Jelle on the same team",
      profiles: ['senior-dev'],
      priority: 2,
      text: "Jelle is a smart, patient and overall very fun software engineer to work with. I had the pleasure to work with Jelle side-by-side on a software product where it was easy to see that Jelle fits the definition of an engineer, as he can find a solution to any task thrown his way. He is communicative and always willing to help and share his vast knowledge, while keeping the atmosphere light with his sense of humour. In addition, he is very proactive and eager to take on the toughest challenges. From the very first moments he joined the team, he identified parts in the code and the build process that had room for improvement and started proactively taking steps to fix them. Any team would be lucky to have Jelle as a member."
    },
    {
      name: "Paola Fanzio",
      title: "Assistant Professor at Delft University of Technology",
      date: "February 17, 2020",
      relationship: "Paola managed Jelle directly",
      profiles: ['senior-dev', 'ai-dev'],
      industries: ['manufacturing'],
      priority: 3,
      text: "Jelle Spijker has worked in my team for several months and I am glad to write a recommendation letter for him. He is a really talented engineer. From the technical point of view, his contribution has been extremely valuable to develop new measurements tools. He is really versatile and knowledgeable: he is mastering modelling, hardware development, software development and he knows how to combine all the different aspects together.\nHe is a good team player: always willing to support and help other members of the team without losing his personal working goals. He is really good in planning and he is result oriented. I appreciate his ability to communicate clearly and honestly about any issue. It is pleasant to work with him and his positive attitude is a driving force for the entire team.\nHe is independent and reliable and always willing to take his own responsibilities. He can easily handle multiple projects, producing clear documentation."
    },
    {
      name: "André Trouwborst",
      title: "Manager engineering",
      date: "September 16, 2015",
      relationship: "André managed Jelle directly",
      profiles: [],
      industries: ['maritime'],
      priority: 2,
      text: "I was lucky to be the one who taught Jelle the most important things concerning Machinery & Piping necessary at Shipbuilding.\nJelle is a very reliable colleague, he is eager to learn. Besides, I didn’t often train a colleague who was so quick at learning to control things.\nJelle never recedes as to technical issues, he is even immune to stress."
    },
    {
      name: "Paul Hansman",
      title: "Lead Mechanical Engineer bij Damen Shipyards Group",
      date: "July 31, 2015",
      relationship: "Paul worked with Jelle on the same team",
      profiles: [],
      industries: ['maritime'],
      priority: 3,
      text: "Jelle is a colleague of mine for over a year now. He is very eager to learn and always trying to solve the problem in the most efficient way. His motivation in science is really catching and inspiring."
    },
    {
      name: "Jorn Sturkenboom",
      title: "Integrated Logistics Support Manager at Commando Materieel en IT - Defensie",
      date: "January 11, 2014",
      relationship: "Jorn worked with Jelle but on different teams",
      profiles: [],
      industries: ['maritime'],
      priority: 5,
      text: "Ik heb Jelle leren kennen als een ontzettend gemotiveerd en prettig persoon die ontzettend veel plezier uit zijn werk haalt. Naast zijn gemotiveerde instelling binnen het werkgebied is hij ook zeer gedreven om zichzelf te ontwikkelen en heeft hij een brede interesse voor alles wat met techniek te maken heeft."
    },
    {
      name: "Gert Jan Bos",
      title: "Senior Die corrector/designer Nedal Aluminium BV",
      date: "June 27, 2013",
      relationship: "Gert Jan managed Jelle directly",
      profiles: [],
      industries: ['manufacturing'],
      priority: 4,
      text: "Jelle came working for Nedal Aluminium BV as an apprentice die-corrector under my tutelage. His will to learn something was fascinating. Always wanting to know more. He had a clear mind for new ideas, always trying to innovate. He didn’t want to waste time, it can be done faster or simpler. He was a corrector with an extra perspective view for the total organization. It was a privilege to have worked with him."
    },
    {
      name: "Ruben van Wiefferen",
      title: "Project Management | PMP | Industrial Automation | Process Control Instrumentation | Mechanical Engineering",
      date: "June 23, 2013",
      relationship: "Ruben and Jelle studied together",
      profiles: [],
      industries: ['manufacturing'],
      priority: 6,
      text: "Jelle is een van de meest waardevolle personen waar ik mee gewerkt heb. We leerde elkaar kennen 4 jaar geleden op het ROC van Amsterdam. Na het behalen van ons diploma zijn we beide gestart met de bachelor opleiding werktuigbouwkunde op de HAN in Arnhem.\n\nDe ervaring die ik over heb gehouden aan de projecten die wij samen hebben uitgevoerd kan ik als zeer goed omschrijven. Jelle is een persoon met een grote technische kennis, die gemakkelijk out of the box kan denken en die altijd het beste uit zichzelf wilt halen. Wanneer je eens met Jelle in contact komt ontdek je een geweldig persoon met de juiste vaardigheden!"
    },
    {
      name: "Refik Konar",
      title: "KONAR Extrusion",
      date: "March 26, 2013",
      relationship: "Refik managed Jelle directly",
      profiles: [],
      industries: ['manufacturing'],
      priority: 7,
      text: "Jelle, identifizierte sich mit seinen Aufgaben und dem Unternehmen und zeigte großen Fleiß und Eifer. Aufgrund seiner raschen Auffassungsgabe arbeitete er sich sicher in neue Aufgabenstellungen ein. Eine hohe Ausdauer und Belastbarkeit runden sein Qualifikationsprofil ab. Er wendete seine Fachkenntnisse sehr zielorientiert in der Praxis an. Er aktualisierte sein Wissen durch die Teilnahme an Weiterbildungsveranstaltungen sowie im Selbststudium stets in eigener Initiative und war daher ein intern und extern sehr geschätzter Ansprechpartner.\nEr erledigte seine Aufgaben kompetent, flexibel und teamorientiert. Seine Aufgaben waren in hohem Maße termingebunden. Jelle hat die ihm übertragenen Aufgaben stets zu unserer vollen Zufriedenheit ausgeführt.\n\nDas Aufgabengebiet von Jelle umfasste im Einzelnen:\n* Begleitung von Konstruktionsprojekten und -aufträgen, vom Entwurf bis zur Fertigung.\n* Erstellung von Plänen und Konstruktionszeichnungen in der Entwurfsphase, z.B. Entwurfszeichnungen oder Detailzeichnungen, unterschiedlichen perspektivischen Darstellungen, Ausschnitten.\n* Selbstständige Anfertigung von Werkzeugen, z.B. fachbezogene Durchführung von Korrekturen und Dokumentationen unter Berücksichtigung vorgegebener Konstruktionsrichtlinien, kundenspezifischer Vorgaben.\n* Durchführen von Berechnungen zur Dimensionierung von zu konstruierenden Teilen und, Schwerpunkt, Masse.\nIch wünsche Jelle für seine Zukunft alles Gute."
    },
    {
      name: "Gerrit Stokkers",
      title: "Retired bij Vernay",
      date: "November 26, 2011",
      relationship: "Gerrit managed Jelle directly",
      profiles: [],
      industries: ['manufacturing'],
      priority: 5,
      text: "Ik heb meer dan 6 jaar met Jelle gewerkt. Van leerling corrector tot volwas corrector. Hij beheerst het vak als Die corrector uitstekend.\nMaar Jelle is van veel meer markten thuis. Bijvoorbeeld Proces engineer, of Project engineer.\nIk heb met Jelle een aantal projecten (bv standtijd verbetering matrijzen voor 7*** legering) gedaan. Wat hij zeer gestructureerd uitvoert, met een perfecte documentatie. Is zeer prettig mee te werken, want hij zorgt altijd dat je zeer allert blijft. Met andere woorden, hij is altijd kritisch."
    },
    {
      name: "R. Plak",
      title: "Hermes",
      date: "August 22, 2010",
      relationship: "R. and Jelle studied together",
      profiles: [],
      industries: [],
      priority: 8,
      text: "In my years in the School for Fine arts and crafts I have gotten to know Jelle Spijker as a natural talent when it comes to working metal.\n\nA combination of keen technical insight and the capability to actually put it to practice. A true craftsman, who is not easily distracted and keeps on going on a steady pace.\n\nAs a classmate and friend, he has always been there to help out one in need and has endless patience for any one willing to learn."
    }
  ]
};
