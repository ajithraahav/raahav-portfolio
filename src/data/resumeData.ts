export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: 'Healthcare' | 'Workforce' | 'POS' | 'Transportation' | 'Government' | 'Marine' | 'Utility';
  clientOrLocation: string;
  role: string;
  summary: string;
  challenge: string;
  contribution: string[];
  architectureDetails: string;
  features: string[];
  techStack: string[];
  iconName: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isContractual?: boolean;
  context?: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  details?: string;
}

export const RESUME_DATA = {
  personal: {
    name: "Raahav Ajith K S",
    title: "Flutter Developer / Mobile Application Engineer",
    experienceYears: "5+",
    exactYears: "4.5+",
    phone: "+91 6382799376",
    email: "ajithraahav@gmail.com",
    location: "Tamil Nadu, India",
    github: "https://github.com/ajithraahav",
    linkedin: "https://linkedin.com/in/raahav-ajith-k-s",
    summary: "Flutter Developer with 4.5+ years of experience building scalable mobile and web applications using Flutter and Dart. Delivered production applications across healthcare, government, logistics, hospitality, and transportation domains. Strong expertise in BLoC, Clean Architecture, REST API integration, offline-first systems, and performance optimization.",
    headline: "Building production-grade cross-platform mobile experiences with Flutter, Clean Architecture, and offline-first reliability.",
  },

  stats: [
    { label: "Years Experience", value: "5+", detail: "4.5+ years in Flutter & Dart" },
    { label: "Production Apps", value: "7+", detail: "Deployed across 7 key domains" },
    { label: "Tech Stack Expertise", value: "15+", detail: "BLoC, Clean Arch, SQLite, Hive" },
    { label: "Industry Domains", value: "7", detail: "Healthcare, POS, Marine, Gov, Transit" },
  ],

  skillsCategories: [
    {
      title: "Mobile Development",
      description: "Cross-platform mobile and web application engineering using Flutter standard ecosystem",
      icon: "Smartphone",
      skills: ["Flutter", "Flutter Web", "Dart", "JavaScript", "Kotlin", "HTML", "CSS"],
    },
    {
      title: "Architecture & Patterns",
      description: "Enterprise software design for scalability, testability, and separation of concerns",
      icon: "Layers",
      skills: ["Clean Architecture", "MVVM", "Repository Pattern", "SOLID Principles", "Modular Architecture"],
    },
    {
      title: "State Management",
      description: "Predictable state flow and reactive programming in Flutter applications",
      icon: "Cpu",
      skills: ["BLoC", "Cubit", "Provider", "Stream/Rx Principles"],
    },
    {
      title: "Navigation & Routing",
      description: "Robust application navigation and deep link handling",
      icon: "Compass",
      skills: ["go_router", "Deep Linking", "Navigator 2.0 (Basic)"],
    },
    {
      title: "API & Data Integration",
      description: "Reliable client-server networking with advanced resilience mechanisms",
      icon: "Server",
      skills: ["REST APIs", "GraphQL (Basic)", "Caching", "Error Handling", "Exponential Backoff Retry"],
    },
    {
      title: "Mobile Services & Cloud",
      description: "Integrations for location services, push notifications, and payment gateways",
      icon: "Cloud",
      skills: ["Firebase Auth", "FCM (Push Notifications)", "Crashlytics", "Google Maps API", "Location Services", "Razorpay Integration"],
    },
    {
      title: "Databases & Local Storage",
      description: "Offline-first persistence strategies for seamless connectivity environments",
      icon: "Database",
      skills: ["Hive (Key-Value)", "SQLite (Relational Storage)", "MySQL"],
    },
    {
      title: "Performance & Optimization",
      description: "Ensuring smooth 60/120 FPS UI execution and efficient memory management",
      icon: "Zap",
      skills: ["Widget Rebuild Optimization", "Image Optimization", "Lazy Loading", "Pagination", "Memory Profiling"],
    },
    {
      title: "DevOps, Tools & Testing",
      description: "Continuous integration, automated releases, and rigorous code validation",
      icon: "GitBranch",
      skills: ["Git", "GitHub", "Azure DevOps (CI/CD)", "Fastlane (Basic)", "GitHub Actions (Basic)", "Unit Testing", "Widget Testing", "Debugging"],
    },
    {
      title: "Native & Platform Integration",
      description: "Interfacing with hardware capabilities and low-level platform code",
      icon: "Cpu",
      skills: ["Platform Channels (Basic)", "FFI (Explored)", "Firebase Crashlytics", "Logging"],
    },
    {
      title: "AI / ML Integration",
      description: "On-device intelligence and computer vision capability integration",
      icon: "Bot",
      skills: ["MediaPipe", "TensorFlow Lite (TFLite)", "On-device ML Model Integration"],
    },
  ] as SkillCategory[],

  experiences: [
    {
      id: "mouri-tech",
      company: "MOURI Tech Limited",
      role: "Consultant – Flutter Developer",
      period: "May 2026 – Present",
      location: "Chennai, India",
      isContractual: true,
      context: "US-Based Healthcare Engagement (HIPAA Focused)",
      highlights: [
        "Engaged on a contractual Flutter project for a major US-based healthcare application adhering strictly to HIPAA-focused data handling practices.",
        "Developing scalable Flutter features leveraging BLoC, Clean Architecture, and secure API integrations within a HIPAA-sensitive environment.",
        "Collaborating seamlessly across cross-functional backend, UI/UX design, QA, and client engineering teams throughout agile development sprints."
      ],
      technologies: ["Flutter", "Dart", "BLoC", "Clean Architecture", "REST APIs", "HIPAA Compliance", "Widget Optimization"],
    },
    {
      id: "galentic",
      company: "Galentic Technology",
      role: "Flutter Developer",
      period: "Apr 2025 – Aug 2025",
      location: "Bengaluru, India",
      highlights: [
        "Architected and developed modular Flutter Web applications utilizing Clean Architecture and BLoC state management.",
        "Implemented resilient network data pipelines featuring caching, pagination, and exponential backoff retry mechanisms to ensure high API reliability.",
        "Dramatically optimized UI rendering performance by eliminating unnecessary widget rebuilds and streamlining state updates."
      ],
      technologies: ["Flutter Web", "Dart", "BLoC", "Clean Architecture", "Exponential Backoff", "Caching", "Pagination"],
    },
    {
      id: "techzarinfo",
      company: "Techzarinfo Software Solutions",
      role: "Flutter Developer",
      period: "May 2023 – Mar 2024",
      location: "Trichy, India",
      highlights: [
        "Developed production cross-platform mobile applications serving diverse end-user bases using Flutter & Dart.",
        "Integrated Firebase ecosystem services (Auth, FCM, Crashlytics) and optimized mobile UI performance.",
        "Structured application navigation flows using go_router and configured deep-linking scenarios for seamless user onboarding."
      ],
      technologies: ["Flutter", "Dart", "Firebase", "go_router", "Deep Linking", "Crashlytics", "REST APIs"],
    },
    {
      id: "yavar",
      company: "Yavar Tech Works",
      role: "Software Developer",
      period: "Mar 2022 – May 2023",
      location: "Coimbatore, India",
      highlights: [
        "Engineered mobile booking and payment processing applications powered by robust RESTful APIs.",
        "Designed and implemented offline-first data persistence pipelines utilizing SQLite relational storage and Hive key-value stores."
      ],
      technologies: ["Flutter", "REST APIs", "SQLite", "Hive", "Razorpay", "Offline Persistence"],
    },
    {
      id: "exciteon",
      company: "Exciteon Tree of Technology",
      role: "Software Developer",
      period: "Oct 2020 – Mar 2022",
      location: "Trichy, India",
      highlights: [
        "Built responsive mobile and web applications while managing and maintaining complex REST API integrations.",
        "Collaborated proactively with cross-functional product and engineering teams to isolate bugs, optimize performance, and improve app stability."
      ],
      technologies: ["Flutter", "Flutter Web", "REST APIs", "JavaScript", "Dart", "Debugging"],
    },
  ] as Experience[],

  projects: [
    {
      id: "digit-healthcare",
      title: "DIGIT – Patient Rehabilitation Platform",
      subtitle: "Clinical Assessment & Progress Tracking Mobile Application",
      year: "2026",
      category: "Healthcare",
      clientOrLocation: "US Client — MOURI Tech",
      role: "Flutter Developer (Consultant)",
      summary: "A specialized healthcare application built for clinical rehabilitation assessment, enabling precise tracking of patient motor progress, including PIP flexion and joint contracture measurements.",
      challenge: "Healthcare clinical assessments require rigorous measurement accuracy, real-time structured data entry, and strict compliance with HIPAA data privacy standards without sacrificing mobile app responsiveness.",
      contribution: [
        "Engineered Flutter assessment workflows for recording patient PIP flexion and contracture-related measurements.",
        "Created modular digital input widgets and structured data-entry flows powered by BLoC state management and Clean Architecture.",
        "Integrated secure backend APIs while maintaining strict HIPAA-focused data handling guidelines in collaboration with US client teams."
      ],
      architectureDetails: "Clean Architecture split into Core, Feature Presentation (BLoC), Domain UseCases, and Data Repository layers with encrypted REST communications.",
      features: [
        "Clinical PIP Flexion & Contracture Measurement Workflows",
        "Structured Assessment Entry & Reusable Digital Widgets",
        "HIPAA-Compliant Encrypted API Integrations",
        "Patient Progress Visual Tracking & Reports"
      ],
      techStack: ["Flutter", "Dart", "BLoC", "Clean Architecture", "REST APIs", "HIPAA Data Handling", "Widgets Optimization"],
      iconName: "HeartPulse",
    },
    {
      id: "innovatiq-tracking",
      title: "Innovatiq Marketing Tracking System",
      subtitle: "Real-Time Workforce & Field Monitoring Platform",
      year: "2025",
      category: "Workforce",
      clientOrLocation: "Chennai, India",
      role: "Flutter Developer",
      summary: "A field workforce monitoring system facilitating location tracking, attendance logging, and real-time operational status updates for enterprise field teams.",
      challenge: "Maintaining continuous GPS location tracking in background modes while preserving device battery life and sustaining reliable operations in low-connectivity environments.",
      contribution: [
        "Developed real-time employee location tracking leveraging Android/iOS geolocation APIs and persistent background service handlers.",
        "Engineered local data queueing and optimized tracking workflows for seamless field operations during network drops."
      ],
      architectureDetails: "Background geolocation service worker bound to Flutter Local Storage cache with asynchronous API syncing upon network reconnection.",
      features: [
        "Real-Time Geolocation Tracking & Background Updates",
        "Offline Location Event Data Queueing",
        "Optimized Battery-Conscious Location Polling",
        "Field Attendance & Operation Verification"
      ],
      techStack: ["Flutter", "Dart", "Geolocation APIs", "Background Services", "Local Storage", "BLoC"],
      iconName: "MapPin",
    },
    {
      id: "tillio-pos",
      title: "Tillio POS Platform",
      subtitle: "Restaurant POS, Kitchen Display System & Delivery App",
      year: "2025",
      category: "POS",
      clientOrLocation: "Dubai, UAE",
      role: "Flutter Developer",
      summary: "An end-to-end hospitality suite comprising a point-of-sale terminal, a real-time Kitchen Display System (KDS), and a dedicated delivery driver application.",
      challenge: "Ensuring zero latency order transmission between POS counters and kitchen display screens during peak dining hours alongside live delivery driver routing.",
      contribution: [
        "Enhanced existing Flutter POS applications and built a high-speed Kitchen Display System (KDS) for instant order synchronization.",
        "Engineered the delivery partner application complete with Google Maps API integration and live navigation routing workflows."
      ],
      architectureDetails: "Event-driven WebSocket/REST hybrid architecture with local state synchronization across POS, KDS, and mobile driver endpoints.",
      features: [
        "Real-Time Kitchen Display System (KDS) Order Sync",
        "Delivery Partner Application with Google Maps Navigation",
        "Instant Order Status Workflow Updates",
        "Multi-Screen Tablet & Mobile Layout Adaptations"
      ],
      techStack: ["Flutter", "Google Maps API", "Location Services", "Real-Time Order Sync", "BLoC", "REST APIs"],
      iconName: "Utensils",
    },
    {
      id: "malaysia-metro",
      title: "Malaysia Metro MVP",
      subtitle: "Public Transit Navigation & Booking System",
      year: "2025",
      category: "Transportation",
      clientOrLocation: "Malaysia",
      role: "Flutter Developer",
      summary: "A transit MVP app allowing commuters to search metro train schedules, calculate optimal transit routes, and execute ticket bookings.",
      challenge: "Delivering fast station route calculation and responsive interactive station maps while maintaining offline schedule access for commuters underground.",
      contribution: [
        "Built metro booking workflows utilizing Flutter, RESTful endpoints, Hive local database, and Google Maps API.",
        "Implemented responsive UI interfaces and optimized local data handling to deliver instant station schedule queries."
      ],
      architectureDetails: "Hive key-value offline storage caching transit schedules, with go_router deep links for direct route booking shares.",
      features: [
        "Interactive Metro Station Map & Route Calculator",
        "Instant Schedule Lookups via Offline Hive Caching",
        "Ticket Booking & Payment Integration",
        "Google Maps Route Visualization"
      ],
      techStack: ["Flutter", "Hive", "Google Maps API", "REST APIs", "go_router", "Responsive UI"],
      iconName: "Train",
    },
    {
      id: "urakka-sol",
      title: "Urakka Sol – Police Reporting App",
      subtitle: "Citizen Incident & Multi-Media Reporting Platform",
      year: "2024",
      category: "Government",
      clientOrLocation: "Tamil Nadu, India",
      role: "Flutter Developer",
      summary: "A civic safety application empowering citizens to submit police incident reports attaching live photos, video clips, and voice notes directly to law enforcement portals.",
      challenge: "Compressing and transmitting large media files (video/audio) over varied mobile cellular connections while keeping incident reporting forms simple and reliable.",
      contribution: [
        "Developed citizen reporting application supporting multi-modal incident submissions (image, video, and audio voice notes).",
        "Implemented structured reporting step-by-step form workflows and integrated backend data processing APIs."
      ],
      architectureDetails: "Multi-part API upload pipeline with background task progress notifications and local draft saving.",
      features: [
        "Multi-Media Incident Submissions (Photo, Video, Voice Notes)",
        "Structured Step-by-Step Reporting Wizard",
        "Location Tagging & SOS Dispatch Interface",
        "Secure Backend API Data Processing"
      ],
      techStack: ["Flutter", "Dart", "Camera API", "Audio Recorder", "REST APIs", "Local Media Caching"],
      iconName: "ShieldAlert",
    },
    {
      id: "norinco-marine",
      title: "Norinco Marine Management System",
      subtitle: "Offline-First Vessel Fleet Management Application",
      year: "2024",
      category: "Marine",
      clientOrLocation: "Chennai, India",
      role: "Flutter Developer",
      summary: "An enterprise fleet management application for marine vessels, handling maintenance logs, crew records, safety checklists, and incident logs far offshore.",
      challenge: "Vessels operate in international waters with zero cellular connectivity for weeks, demanding complete offline functionality with bulk data synchronization when docking.",
      contribution: [
        "Engineered an offline-first Flutter application for vessel maintenance, employee records, safety checklists, and incident logging.",
        "Implemented bulk SQLite relational storage using BLoC and Clean Architecture designed specifically for limited-connectivity maritime operations."
      ],
      architectureDetails: "Bulk SQLite offline database with delta sync queue engines, repository pattern abstraction, and BLoC state isolated modules.",
      features: [
        "Offline-First Bulk Data Operations via SQLite",
        "Vessel Maintenance & Inspection Checklists",
        "Crew Records & Incident Reporting Workflows",
        "Automatic Delta Sync upon Re-establishing Connection"
      ],
      techStack: ["Flutter", "SQLite (Bulk Storage)", "BLoC", "Clean Architecture", "Repository Pattern"],
      iconName: "Anchor",
    },
    {
      id: "muslim-salah",
      title: "Muslim Salah Prayer App",
      subtitle: "Location-Based Prayer Time & Utility Application",
      year: "2023",
      category: "Utility",
      clientOrLocation: "Chennai, India",
      role: "Software Developer",
      summary: "A daily utility application calculating precise location-based prayer timings, qibla direction orientation, and community schedule alerts.",
      challenge: "Determining accurate mathematical prayer calculations based on changing device GPS coordinates across different calculation conventions.",
      contribution: [
        "Developed Flutter prayer-time application using device location services and astronomical calculation API integrations.",
        "Implemented clean responsive user interfaces with location-based automatic updates."
      ],
      architectureDetails: "Reactive Location listener bound to calculation algorithms with local notification triggers.",
      features: [
        "GPS Location-Based Automated Prayer Time Calculations",
        "Responsive Dynamic Daily Utility Widgets",
        "Location Change Auto-Detection Workflows",
        "Clean Minimal Aesthetic Layout"
      ],
      techStack: ["Flutter", "Location Services", "REST APIs", "Responsive Layouts", "Dart"],
      iconName: "Compass",
    },
  ] as Project[],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "University of Madras",
      location: "Chennai, India",
      period: "Pursuing (Expected 2027)",
      status: "In Progress",
      details: "Focusing on advanced computer science fundamentals, database management systems, software engineering principles, and web algorithms."
    },
    {
      degree: "Diploma in Computer Engineering / Technology",
      institution: "Seshasayee Institute of Technology",
      location: "Trichy, India",
      period: "2017 – 2020",
      status: "Completed",
      details: "Comprehensive foundational studies in core programming, computer architecture, data structures, and software development methodologies."
    }
  ] as Education[],

  engineeringApproach: [
    {
      title: "Clean Architecture & BLoC",
      description: "Strict separation of concerns separating UI widgets, BLoC/Cubit state streams, domain use cases, and data repositories. Ensures testability and maintainability.",
      badge: "Core Architecture"
    },
    {
      title: "Resilient Networking & Exponential Backoff",
      description: "API integrations reinforced with automated caching, payload pagination, and exponential backoff retry mechanisms to handle fragile networks gracefully.",
      badge: "Network Reliability"
    },
    {
      title: "Offline-First Persistence (SQLite & Hive)",
      description: "Local data storage strategies utilizing relational SQLite for complex bulk data (maritime apps) and Hive for lightning-fast key-value caching (transit schedules).",
      badge: "Data Integrity"
    },
    {
      title: "HIPAA & Enterprise Compliance",
      description: "Data handling practices tailored for sensitive domains like healthcare (HIPAA data security) and municipal government reporting (encrypted media pipelines).",
      badge: "Security & Standards"
    },
    {
      title: "60/120 FPS UI Performance Tuning",
      description: "Elimination of unnecessary widget rebuilds, image memory optimizations, lazy loading, and DevTools memory profiling for silky smooth transitions.",
      badge: "Performance"
    }
  ]
};
