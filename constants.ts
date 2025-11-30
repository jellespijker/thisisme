import { CVData } from './types';

export const cvData: CVData = {
  profile: {
    name: "Jelle Spijker",
    title: "Manager Firmware & Cloud Development",
    summary: "Engineering Manager with deep expertise in Cyber-Physical Systems, effectively bridging the gap between Cloud/SaaS platforms and embedded firmware. Proven track record in guiding teams through complex mergers, downsizing, and VUCA environments while maintaining operational stability. Strong focus on Governance (ISO 27001), FinOps, and technical innovation. Seeking to apply leadership experience in IoT and critical infrastructure to the healthcare domain at Medido.",
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
      responsibility: "17 FTE at peak, currently 8 FTE",
      highlights: [
        { title: "Strategic Role", description: "Promoted to oversee the Firmware department alongside Cloud responsibilities, effectively managing the complete hardware-software loop. Reporting to CTO." },
        { title: "Active Technical Contribution", description: "Maintain active hands-on involvement by contributing code and fixing bugs across Firmware, Cloud, and [Digital Factory](https://ultimaker.com/software/ultimaker-digital-factory/)." },
        { title: "AI & Innovation", description: "Integrated AI agents ('UltiBot') and Neo4j Knowledge Graphs into Cloud Slicer. Implemented MCP (Model Context Protocols) for automated decision-making." },
        { title: "Knowledge Sharing", description: "Founded 'AI-In-Action', a company-wide initiative empowering employees to improve efficiency using AI." },
        { title: "Strategic Restructuring", description: "Managed downsizing of external teams and internal restructuring. Resolved team friction and redefined roles in a VUCA environment." },
        { title: "Compliance (ISO 27001)", description: "Own the roadmap for ISO 27001 certification. Establishing security controls and risk assessments." },
        { title: "Cyber-Physical Alignment", description: "Partnered with Product Management to align firmware roadmaps with cloud capabilities for seamless telemetry." }
      ],
      techStack: ["Firmware", "Cloud", "AI Agents", "ISO 27001", "Neo4j"]
    },
    {
      title: "Manager Cloud & Digital Factory",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "March 2025 – June 2025",
      responsibility: "10 FTE (6 Devs, 1 QA, 1 UX/UI, 1 DevOps, 1 Architect)",
      highlights: [
        { title: "Team Leadership", description: "Managed a [Digital Factory](https://ultimaker.com/software/ultimaker-digital-factory/) SCRUM team and support staff including UX/UI Design, DevOps, and Software Architecture." },
        { title: "FinOps Crisis Resolution", description: "Resolved a critical GCP billing conflict (€1M+ over-commitment) by devising a mitigation strategy and migrating services." },
        { title: "Legacy Modernization", description: "Orchestrated the decoupling of MakerBot and UltiMaker legacy environments, ensuring production stability." }
      ],
      techStack: ["GCP", "FinOps", "SaaS", "Scrum", "Legacy Migration"]
    },
    {
      title: "Team Lead / Software Engineer",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "January 2024 – March 2025",
      responsibility: "5 FTE direct reports",
      highlights: [
        { title: "Team Growth", description: "Expanded team from 3 to 5 direct reports. Facilitated development capacity shift from U.S. to Netherlands." },
        { title: "Cloud Slicer Product Lead", description: "Spearheaded design of [Cloud Slicer](https://support.makerbot.com/s/article/000003132) using WebAssembly (WASM), contributing potential annual savings of €1.5 million." },
        { title: "Risk Mitigation", description: "Resolved critical legal/technical risks (OpenSSL, Qt libraries) preventing launch delays." },
        { title: "Architecture", description: "Created ARC42 documentation for new AI services and legacy printer connections." }
      ],
      techStack: ["WASM", "ARC42", "Leadership", "Risk Management"]
    },
    {
      title: "Software Engineer (C++ & Python)",
      company: "UltiMaker",
      website: "https://ultimaker.com/",
      location: "Geldermalsen, Netherlands",
      period: "April 2020 – December 2023",
      highlights: [
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
      highlights: [
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
      highlights: [
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
      highlights: [
        { description: "Designed P&IDs for critical ship systems (LNG, Ballast) complying with Bureau Veritas." },
        { description: "Performed CFD simulations using Siemens NX." }
      ]
    },
    {
      title: "Die Corrector",
      company: "Nedal Aluminium BV",
      website: "https://nedal.com/",
      period: "January 2004 – May 2012",
      highlights: [
        { description: "Specialized in fine-tuning extrusion dies for high-precision aluminum profiles." }
      ]
    }
  ],
  skills: [
    {
      category: "Leadership",
      items: ["Crisis Management", "Team Restructuring", "Vendor Management", "Strategic Planning", "Mentoring", "Recruitment"]
    },
    {
      category: "Processes",
      items: ["ISO 27001 Implementation", "FinOps", "Agile/Scrum", "ARC42 Architecture", "CI/CD Strategies"]
    },
    {
      category: "Cloud & IoT",
      items: ["GCP (CloudRun, VertexAI)", "Docker", "Kubernetes", "MQTT", "Home Assistant"]
    },
    {
      category: "Development",
      items: ["C++ (11-23)", "Python", "TypeScript/React", "ThreeJS", "NodeJS", "WASM", "Qt/QML", "Linux Drivers", "Device Tree Overlays"]
    },
    {
      category: "AI & Data",
      items: ["LangGraph/LangChain", "Neo4j", "RAG Pipelines", "Computer Vision (OpenCV)"]
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
      degree: "Vocational Training (MTS)",
      school: "ROC van Amsterdam & Vakschool Schoonhoven",
      year: "1998 – 2011",
      details: ["Mechanical Engineering", "Gold/Silversmithing"]
    }
  ],
  certifications: [
    { name: "Certified Professional for Software Architecture", issuer: "iSAQB" },
    { name: "Artificial Intelligence for Robotics", issuer: "Udacity" }
  ],
  volunteer: [
    {
      role: "Home Automation Enthusiast",
      organization: "Home Assistant Community",
      period: "Ongoing",
      description: "Developing custom integrations and automations for smart home devices, focusing on local control, privacy, and complex IoT logic in my free time."
    },
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
    }
  ],
  projects: [
    {
      name: "UltiMaker Digital Factory",
      role: "Engineering Manager",
      description: "Cloud-based fleet management platform enabling remote printing, queue management, and analytics for thousands of 3D printers globally.",
      link: "https://ultimaker.com/software/ultimaker-digital-factory/",
      tech: ["SaaS", "GCP", "React"]
    },
    {
      name: "Cloud Slicer",
      role: "Product Lead",
      description: "Serverless 3D slicing engine running directly in the browser using WebAssembly, eliminating the need for local software installation.",
      link: "https://support.makerbot.com/s/article/000003132",
      tech: ["WASM", "ThreeJS", "C++"]
    },
    {
      name: "UltiMaker Cura",
      role: "Core Developer / Lead",
      description: "The world's most popular open-source 3D printing software. Modernized the core engine to C++20 and introduced a robust plugin architecture.",
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
  ]
};