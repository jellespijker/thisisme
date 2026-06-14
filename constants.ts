import { CVData } from './types';

export const cvData: CVData = {
  profile: {
    name: "Jelle Spijker",
    title: "Software Development Manager | Senior Software Lead | Software Architect",
    summary: "High-impact, player-coach Engineering Manager with a proven record of scaling cross-functional teams, executing high-value strategic initiatives, and pioneering generative AI integrations. Expert in aligning deep technical domains—bridging Modern C++, Embedded Firmware, Cloud/SaaS, and Agentic workflows—to solve mission-critical corporate challenges. Notable achievements include co-authoring WebAssembly-compiled engines saving €1.5M+ in annual cloud infrastructure, resolving €1M+ cloud billing risks, and navigating complex corporate restructurings to maintain 100% of product portfolio continuity under a highly supportive, coaching-centric team culture.",
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
      responsibility: "Directs a high-performing multi-disciplinary department across Firmware, Desktop, and Cloud domains. Championed an Agentic SDLC transformation to sustain 100% product portfolio continuity and strict SLAs through corporate restructuring (scaling from 17 down to 5 FTEs), reporting directly to the CTO.",
      leadershipHighlights: [
        { title: "Operational Efficiency", description: "Sustained the entire physical and cloud product portfolio through a corporate restructuring that downsized the team from 17 to 5 FTEs (70% reduction) by standardizing lean processes and AI-assisted execution." },
        { title: "Agentic SDLC Strategy", description: "Spearheaded organizational adoption of Agentic Development. Standardized unified frameworks—including AGENTS.md, DESIGN.md, custom Model Context Protocol (MCP) servers, and Agent-to-Agent (A2A) interfaces—optimizing engineering workflows for context engineering to successfully close the automated loop." },
        { title: "Strategic Convergence", description: "Unified firmware and cloud departments to merge physical hardware and SaaS platforms into a seamless cyber-physical loop." },
        { title: "Governance & Security", description: "Spearheaded the ISO 27001 compliance and certification process across both departments." }
      ],
      engineeringHighlights: [
        { title: "Hands-on Multi-Domain Coding", description: "Function as an active player-coach across the Firmware, Desktop, and Cloud boundaries, directly committing high-performance C++ and Python code, performance optimizations, and DevOps CI/CD pipelines." },
        { title: "Agentic-Ready Architecture", description: "Re-architected codebases and testing systems with modular design patterns that enable autonomous AI agents to interact directly with low-level physical and logical interfaces (Oscilloscopes, J-Link debug probes, system-level D-Bus, and headless browsers) for closed-loop, automated HIL testing." },
        { title: "AI Translation Agent", description: "Developed a GraphRAG and LLM-powered translation agent in CI/CD, saving €25k annually in localization costs." }
      ],
      techStack: ["Firmware", "Cloud", "Desktop", "C++", "Python", "Agentic Workflows", "Context Engineering", "HIL Testing", "MCP", "A2A", "J-Link", "D-Bus", "Oscilloscope", "ISO 27001", "Neo4j", "DevOps"]
    },
    {
      title: "Manager Cloud & Digital Factory",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "March 2025 – June 2025",
      responsibility: "Managed a 10-FTE team of Cloud Developers, QA, UX, DevOps, and Architects, reporting directly to the CTO. Unified complex system integrations and optimized team throughput.",
      leadershipHighlights: [
        { title: "Crisis Management", description: "Slashed a €1M+ cloud financial risk by resolving a critical Google Cloud Platform billing conflict." },
        { title: "Merger Integration", description: "Orchestrated post-merger decoupling of MakerBot and UltiMaker systems while maintaining 100% production uptime." }
      ],
      engineeringHighlights: [
        { title: "AI-Driven Cloud", description: "Pioneered integration of LLM agents (UltiBot) and Neo4j Knowledge Graphs into cloud stacks via Model Context Protocols." },
        { title: "Architecture Documentation", description: "Unified complex physical-to-digital IoT APIs by standardizing cloud architectures on Arc42 principles." }
      ],
      techStack: ["GCP", "SaaS", "MCP", "AI Agents", "Arc42", "Legacy Migration", "Vendor Management"]
    },
    {
      title: "Team Lead",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "January 2024 – March 2025",
      responsibility: "Led a 5-FTE team overseeing Cura Desktop and Cura Cloud software development. Spearheaded strategic agile transformations and key feature alignment.",
      leadershipHighlights: [
        { title: "Strategic Insourcing", description: "Built a high-performing Netherlands engineering team by insourcing critical product capabilities from the US." },
        { title: "Risk Mitigation", description: "De-risked major product releases by resolving high-exposure open-source licensing and compliance vulnerabilities." }
      ],
      engineeringHighlights: [
        { title: "Serverless WASM Compilation", description: "Co-authored compiling the core C++ slicer engine to WebAssembly, eliminating backend cloud GPU dependencies and saving €1.5M in annual infrastructure costs." }
      ],
      techStack: ["WebAssembly", "C++", "Engineering Leadership", "Coaching", "Risk Management"]
    },
    {
      title: "Software Engineer (C++ / Python)",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "April 2020 – March 2025",
      responsibility: "Served as a core developer for UltiMaker Cura, driving 15 million monthly 3D slices through heavy-duty system algorithms and native optimizations.",
      engineeringHighlights: [
        { title: "C++20 Modernization", description: "Modernized the core engine from C++14 to C++20, architecting a decoupled gRPC-based plugin system." },
        { title: "WASM Slicing", description: "Pioneered in-browser 3D slicing by compiling heavy C++ engines to WebAssembly, matching native desktop performance." },
        { title: "Developer Experience (DX)", description: "Cut onboarding from 1 day to 15 minutes and saved €36k/year by automating build systems with Conan/CI and engineering custom VTU geometry debuggers." }
      ],
      techStack: ["C++20", "Python", "WebAssembly", "gRPC", "Conan", "GitHub Actions", "Docker", "Qt"]
    },
    {
      title: "Mechatronic Engineer R&D",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "May 2019 – April 2020",
      engineeringHighlights: [
        { title: "Computer Vision", description: "Developed custom Particle Image Velocimetry (PIV) computer vision algorithms in C++ and OpenCV to optimize FDM extrusion accuracy." },
        { title: "FLIR Thermography", description: "Created thermographic analysis software in Python to inspect printer hotends, enhancing thermal safety margins." }
      ],
      techStack: ["C++", "Python", "OpenCV", "OpenModelica", "Thermography", "Mechatronics"]
    }
  ],
  previousExperience: [
    {
      title: "Research and Development Engineer",
      company: "Royal IHC (IHC Medusa & IHC MTI)",
      website: "https://www.royalihc.com/",
      location: "Delft & Rotterdam, Netherlands",
      period: "April 2016 – April 2019",
      engineeringHighlights: [
        { title: "Industrial R&D", description: "Designed flash-calcination systems and mobile processing plants using high-precision CAD modeling." },
        { title: "AUV Autonomy", description: "Authored a cross-platform C++ control framework for autonomous underwater vehicles deployed on real-time embedded Linux (RTOS)." },
        { title: "Soil Machine Vision", description: "Engineered an automated soil microscope powered by an 8,000-line C++ CV engine, applying Fast Fourier Transforms and neural networks." },
        { title: "Git Standards & DX", description: "Deployed local secure GitLab instances to transition R&D engineering teams into Git version control." }
      ],
      techStack: ["C++", "Python", "Siemens NX", "OpenCV", "Embedded Linux", "RTOS", "GitLab"]
    },
    {
      title: "Engineer (Mechanical & Piping)",
      company: "Royal IHC & IHC Merwede (Solyne BV)",
      website: "https://www.royalihc.com/",
      location: "Kinderdijk, Netherlands",
      period: "April 2013 – March 2016",
      engineeringHighlights: [
        { title: "Piping & Instrumentation", description: "Designed P&IDs for LNG and maritime ballast systems conforming to Bureau Veritas and Lloyd's registers." },
        { title: "CFD Simulation", description: "Performed advanced Computational Fluid Dynamics modeling in CAD to maximize seawater filtration efficiency." }
      ],
      techStack: ["Piping Design", "P&ID", "CFD Simulation", "Siemens NX", "Bureau Veritas"]
    },
    {
      title: "Die Designer",
      company: "Phoenix Nederland B.V.",
      location: "Brabant, Netherlands",
      period: "May 2012 – March 2013",
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
      engineeringHighlights: [
        { title: "Precision Manufacturing", description: "Began career optimizing metal extrusion dies on the shop floor. Fine-tuned geometry for massive 2500-to-5500 MT industrial presses, reducing material waste and overcoming thermal effects." }
      ],
      techStack: ["Metallurgy", "Die Correction", "Extrusion Presses", "Precision Manufacturing"]
    },
    {
      title: "Silversmith Apprenticeship",
      company: "SFA Silverworks",
      location: "The Hague, Netherlands",
      period: "July 2003 – January 2004",
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
      details: [
        "Academic Standard: Grade: 8 / 10. Completed advanced engineering coursework in Statics, Dynamics, Thermodynamics, Fluid Dynamics, Electrical Engineering, Systems Modeling, and CAD Design.",
        "Thesis Project: Engineered \"ohCaptain\", a modular C++ autonomous controller framework for distributed BeagleBone/Raspberry Pi clusters using an Actor-Model design pattern.",
        "Robotic Navigation & Sensor Fusion: Formulated and coded an Unscented Kalman Filter (UKF) to fuse high-frequency IMU and pressure sensors for accurate localization in GPS-deprived environments.",
        "Path Planning & Simulation: Implemented Coverage Path Planning (CPP) algorithms and PID feedback loops, validating system dynamics via Project Chrono multi-body physics simulations."
      ],
      thesisLink: "https://github.com/jellespijker/HAN-thesis/blob/master/report.pdf",
      techStack: ["C++", "Python", "Unscented Kalman Filter (UKF)", "Coverage Path Planning (CPP)", "Sensor Fusion", "BeagleBone Black", "Raspberry Pi", "PID Control", "Multibody Physics", "MATLAB", "CAD Design (NX)", "PLC Programming", "FEM/Motion", "Thermodynamics", "Fluid Dynamics", "IoT"]
    },
    {
      degree: "Bachelor of Engineering (BEng), Embedded Vision Design (Minor)",
      school: "HAN University of Applied Sciences",
      website: "https://www.han.nl/",
      year: "2014 – 2015",
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
      details: [
        "Specialization: Middle Management Engineering Technicus (metaal)",
        "Final Thesis (proeve van bekwaamheid): Optimization of a logistical tooling flow in the die shop of an aluminum extrusion factory (Nedal Aluminium B.V.). Designed multiple physical/logistical tools to simplify tasks and streamline tooling flow."
      ]
    },
    {
      degree: "MTS 4, Goldsmith / Entrepreneur",
      school: "Vakschool Schoonhoven",
      year: "2003 – 2004",
      details: [
        "Additional year dedicated specifically to obtaining the Goldsmithing certificate and entrepreneurial qualifications."
      ]
    },
    {
      degree: "MTS 4, Silversmith / Entrepreneur",
      school: "Vakschool Schoonhoven",
      year: "1998 – 2003",
      details: [
        "Main course of study: Silversmithing.",
        "Extracurriculars: Active Board Member of the student party committee 'Kontakt' associated with De Vakschool."
      ]
    },
    {
      degree: "MAVO D",
      school: "De Werkplaats Kindergemeenschap",
      year: "1992 – 1996",
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
      date: "Dec 2022"
    },
    {
      name: "Modern C++ design patterns",
      issuer: "Udemy",
      date: "Jul 2021",
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
      date: "Oct 2020"
    },
    {
      name: "Artificial Intelligence for Robotics",
      issuer: "Georgia Institute of Technology | Udacity",
      date: "Jun 2019"
    },
    {
      name: "Everything is the Same: Modeling Engineered Systems",
      issuer: "Northwestern University | Coursera",
      date: "Jun 2019"
    },
    {
      name: "Neural Networks for Machine Learning",
      issuer: "University of Toronto | Coursera",
      date: "Dec 2017"
    },
    {
      name: "Initiated course - Training Institute for Dredging TID",
      issuer: "Royal IHC",
      date: "Jun 2016"
    },
    {
      name: "Project management for Innovators (PRINCE2)",
      issuer: "Royal IHC",
      date: "Apr 2016"
    },
    {
      name: "Cadmatic Basic User outfitting training (with pipe)",
      issuer: "NUPAS",
      date: "Apr 2013"
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
      items: ["GCP (CloudRun, VertexAI)", "Docker", "GitHub Actions", "Conan", "CI/CD Code Signing", "MongoDB"]
    },
    {
      category: "Web & High-Performance Web",
      items: ["WebAssembly (WASM)", "React", "NodeJS", "Vite", "ThreeJS"]
    },
    {
      category: "AI & Data Engineering",
      items: ["Model Context Protocol (MCP)", "LangGraph", "LangChain", "Neo4j Graph Database", "GraphRAG", "LLM Fine-tuning"]
    },
    {
      category: "Systems & Embedded",
      items: ["Embedded Linux / RTOS", "Qt / QML", "Device Tree Overlays", "D-Bus", "Cross-Compilers (ARM/Intel)"]
    }
  ],
  volunteer: [
    {
      role: "Works Council Secretary",
      organization: "UltiMaker",
      period: "2022 – 2024",
      description: "Represented employee interests and advised executive management on strategic decisions during a critical international merger and organizational restructuring."
    },
    {
      role: "Professional Field Committee Member",
      organization: "HAN University of Applied Sciences",
      period: "2020 – Present",
      description: "Regularly advise and consult on the Mechanical Engineering curriculum to align course topics with modern industrial software and automation needs."
    },
    {
      role: "Home Automation Developer",
      organization: "Home Assistant Community",
      period: "Ongoing",
      description: "Author and maintainer of the HACS UltiMaker smart home connection integration. Developing open-source Python hooks and automations."
    },
    {
      role: "Conan Package Contributor",
      organization: "JFrog - Conan Center",
      period: "Ongoing",
      description: "Contributed C++ library recipes to the global Conan Package Manager index, improving Linux/ARM multi-platform build compliance."
    }
  ],
  projects: [
    {
      name: "ArchGraph-AI",
      role: "Creator",
      description: "A self-documenting C4 architecture engine that reverses codebases into interactive maps. Coordinates multi-agent Knowledge Sources via a Blackboard pattern to parse Tree-sitter WASM structures into a Neo4j AST, preserving human layout overlays via transactional SQLite locks.",
      link: "https://github.com/jellespijker/ArchGraph-AI",
      tech: ["Neo4j", "NodeJS", "WebAssembly", "Blackboard Pattern", "AI Agents", "React"]
    },
    {
      name: "UltiMaker Digital Factory",
      role: "Engineering Manager",
      description: "Built the cloud fleet-management platform handling 200k visits/month, enabling secure remote printing, cloud queue scheduling, and telemetry analytics for thousands of 3D printers.",
      link: "https://ultimaker.com/software/ultimaker-digital-factory/",
      tech: ["SaaS", "GCP", "React"]
    },
    {
      name: "UltiMaker Cura Cloud",
      role: "Product Lead",
      description: "Led development of a serverless 3D slicing engine processing 100k slices/month in-browser via high-performance WebAssembly, eliminating backend GPU infrastructure dependencies.",
      link: "https://neoprep.staging.ultimaker.com/",
      tech: ["WASM", "ThreeJS", "C++"]
    },
    {
      name: "UltiMaker Cura",
      role: "Core Developer / Lead",
      description: "The premier open-source 3D printing slicer driving 15 million prints/month. Modernized the core engine to C++20 and engineered a decoupled, high-performance plugin architecture.",
      link: "https://github.com/Ultimaker/Cura",
      tech: ["C++20", "Python", "Qt"]
    },
    {
      name: "AI-In-Action",
      role: "Founder",
      description: "Spearheaded a company-wide generative AI adoption initiative, running monthly showcases that scaled AI-assisted workflows across multi-disciplinary departments.",
      tech: ["AI Agents", "LLMs", "Culture"]
    },
    {
      name: "Digital Soil Microscope",
      role: "Creator (Royal IHC)",
      description: "Engineered an automated hardware-software soil analysis system powered by a high-performance 8,000-line C++ computer vision engine.",
      tech: ["OpenCV", "C++", "Mechatronics"]
    }
  ],
  architecture: [
    {
      name: "UltiCortex (Agentic SDLC Core)",
      description: "Architected a centralized skill registry bridging domain expertise with AI developer tooling. Designed a CLI pipeline deploying sandboxed guidelines (.skills/) to align GitHub Copilot and Cursor engines with hardware testing and C++ standards.",
      tech: ["CLI Systems", "GitHub Packages", "Context Engineering", "copilot-instructions", "NodeJS"]
    },
    {
      name: "UltiMaker Cura Cloud",
      description: "Designed a serverless, browser-based slicing engine using WebAssembly (WASM) to eliminate heavy backend slicing infrastructure.",
      tech: ["WASM", "ThreeJS", "React"]
    },
    {
      name: "AI Agent Protocol (MCP)",
      description: "Developed a back-end orchestrator connecting specialized Model Context Protocol (MCP) servers for internal and external AI tools.",
      tech: ["MCP", "LLMs", "Neo4j"]
    },
    {
      name: "CuraEngine Modularization",
      description: "Architected a gRPC-based plugin system to run proprietary slicing strategies alongside the AGPL open-source core.",
      tech: ["C++20", "gRPC", "Protobuf"]
    }
  ],
  recommendations: [
    {
      name: "Michiel van Rooijen",
      title: "IT Manager at UltiMaker",
      date: "May 13, 2026",
      relationship: "Michiel worked with Jelle but on different teams",
      text: "Jelle is a one of a kind guy, there’s no better way to put it. I’ve had the pleasure of working with him in multiple roles, him as a developer while I was a Product Owner - and now both as managers in our respective departments. And let’s not forget our tenure together on the Works Council. His ability to balance employee interests with organizational goals during our time on the Works Council showed a level of maturity and strategic thinking that he now seamlessly applies in his managerial role. In all this time I have gotten to know Jelle as one of the most driven people I have ever seen. The man is possessed with boundless energy for creativity, thinking outside the box, problem solving and people.\n\nDid I mention people? Because his love for the people he works with is what sets him apart. Jelle is extremely adept at navigating corporate culture and does so with a smile, charm and disarming personality. But don’t let that fool you, Jelle is very keen, observing and skilled at figuring out how to move and encourage people. I see him constantly drive to get the best out of those around him, not just his direct reports, but everyone. It’s a masterclass to witness.\n\nI wish I had a manager like Jelle. I’d feel encouraged to give it my best every day. Luckily I get to work alongside him constantly as we tackle complex questions on infrastructure, optimizations, code and various other projects. He doesn't just manage from a distance; his technical grasp on infrastructure and code optimizations ensures that the solutions we build are not only human-centric but technically robust. Any organization would be lucky to have Jelle at the helm; he is the kind of leader who doesn't just manage a team, but builds a legacy.",
      linkedin: "https://www.linkedin.com/in/michielvanrooijen/"
    },
    {
      name: "Casper Lamboo",
      title: "Software Developer bij Ultimaker",
      date: "May 10, 2026",
      relationship: "Casper worked with Jelle but on different teams",
      text: "I’ve had the pleasure of seeing Jelle evolve from a Software Engineer into a truly versatile leader. What makes Jelle unique is his ability to bridge the gap between deeply technical domains—like Firmware and Cloud—while never losing sight of the human element.\n\nJelle is a rare \"people-first\" manager who remains fiercely business-oriented. What is most impressive is his ability to drive meaningful, systematic change across the organization. He does this by involving diverse teams and ensuring solutions are larger than any one individual, he creates a culture of genuine buy-in. His work spearheading our AI adoption—providing not just the tools, but the education and community (colloquia) to support them—is a perfect testament to his vision.",
      linkedin: "https://www.linkedin.com/in/casper-lamboo-250b54242/"
    },
    {
      name: "Joost Koevoets",
      title: "Product Manager at Neptune Marine",
      date: "October 28, 2015",
      relationship: "Joost was senior to Jelle but didn’t manage Jelle directly",
      text: "I was impressed by Jelle’s creative capabilities in problem solving and the drive for understanding the principles governing the technological challenges he addressed in the soil analyzer. His self-taught capabilities exceed his curriculum by far.",
      linkedin: "https://www.linkedin.com/in/joost-koevoets-b192988/"
    }
  ]
};