/* =========================================================================
   PORTFOLIO CONTENT — edit this file to add or change anything on the site.
   Nothing here needs React/JS knowledge beyond editing text between quotes.
   Every entry below becomes one "file" in the Kali-style explorer.
   ========================================================================= */

const PROFILE = {
  name: "Chafik Bouzaghou",
  handle: "chafikbz",
  title: "Full-Stack Developer · Cybersecurity Enthusiast",
  location: "Khemis Miliana, Algeria",
  email: "bouzaghouchafik@gmail.com",
  phone: "+213 555 993 308",
  github: "https://github.com/Chafikbz4",
  linkedin: "https://www.linkedin.com/in/chafik-bouzaghou",
  summary:
    "Full-stack developer building scalable web and mobile apps with Vue.js, React Native, Next.js, NestJS and Express.js. 4th-year Software Engineering student (Cybersecurity specialization) at ESTIN. CTF competitor and CTF challenge author, with hands-on systems/network administration experience from an internship at Algérie Télécom.",
  skills: [
    { group: "Frontend / Mobile", items: ["Vue.js", "React Native", "Next.js", "React.js", "Vuetify"] },
    { group: "Backend", items: ["Node.js", "Express.js", "NestJS", "REST APIs", "PHP"] },
    { group: "Databases", items: ["MongoDB", "PostgreSQL", "SQL"] },
    { group: "DevOps & Tools", items: ["Docker", "Git", "GitHub", "Linux (Kali / CentOS / RHEL)"] },
    { group: "Systems & Networks", items: ["Active Directory", "DNS / IP configuration", "GPOs", "Windows Server", "Virtualization"] },
    { group: "Cybersecurity", items: ["Pentesting", "System hardening", "CTF challenge design", "OSINT", "Web exploitation"] },
  ],
};

/* -------------------------------------------------------------------------
   FOLDER TREE
   Each top-level folder is a directory shown in the sidebar. "children" are
   sub-folders. Every folder must exist as a key in one of the content
   collections below (PROJECTS, INTERNSHIPS, SECURITY, CERTIFICATIONS).
   ------------------------------------------------------------------------- */
const TREE = [
  {
    id: "software-engineering",
    label: "software-engineering",
    icon: "folder",
    children: [
      { id: "professional-projects", label: "professional-projects", icon: "folder" },
      { id: "academic-projects", label: "academic-projects", icon: "folder" },
    ],
  },
  { id: "internships", label: "internships", icon: "folder" },
  { id: "cybersecurity", label: "cybersecurity", icon: "folder" },
  { id: "certifications", label: "certifications", icon: "folder" },
];

/* -------------------------------------------------------------------------
   SOFTWARE ENGINEERING — PROJECTS
   type: "web" | "mobile" | "fullstack" | "docs"
   status: "shipped" | "academic" | "private"
   ------------------------------------------------------------------------- */
const PROJECTS = {
  "professional-projects": [
    {
      id: "catsme-app",
      name: "CatsmeApp.md",
      title: "CatsmeApp — Mobile Migration",
      period: "Jul 2025 – Aug 2025",
      cover: null,
      type: "mobile",
      status: "private",
      role: "Freelance Mobile Developer",
      description:
        "Freelance collaboration with a Japanese developer to move CatsmeApp off Bubble.io and into a fully native mobile codebase.",
      details: [
        "Migrated the CatsmeApp application from a Bubble.io no-code build to React Native.",
        "Rebuilt every UI component and piece of business logic natively, matching the original product behaviour.",
        "Coordinated fully remotely with a Japanese developer across time zones using an agile workflow and clear async communication.",
      ],
      stack: ["React Native", "JavaScript", "Agile / Remote collaboration"],
      links: [],
      note: "Private client repository — not publicly browsable.",
    },
    {
      id: "ldc-fantasy",
      name: "LDC-Fantasy.md",
      title: "LDC-Fantasy — Interactive Fantasy Game",
      period: "Oct 2024 – Dec 2024",
      cover: IMG.ldcFantasyApp,
      gallery: [IMG.ldcFantasyLogin, IMG.ldcFantasyApp],
      type: "mobile",
      status: "shipped",
      role: "Developer",
      description:
        "A real-time fantasy game app, built for ESTIN's internal league (\"LDC by ESTIN\"), letting players pick a squad, track gameweek points, and compete in leagues.",
      details: [
        "Built a real-time fantasy game application with React Native and an Express.js backend.",
        "Designed responsive player-stats and leaderboard dashboards with Vue.js for the web side.",
        "Implemented team selection, transfers, gameweek scoring and league ranking screens.",
      ],
      stack: ["React Native", "Express.js", "Vue.js", "MongoDB"],
      links: [{ label: "GitHub", url: "https://github.com/Chafikbz4/LDC-Fantasy" }],
    },
  ],

  "academic-projects": [
    {
      id: "dz-skills",
      name: "DZ-Skills.md",
      title: "DZ-Skills — Algerian Talent Connection Platform",
      period: "Jan 2025 – May 2025 · ESTIN, Bejaia",
      cover: IMG.dzSkillsCover,
      type: "fullstack",
      status: "academic",
      role: "Full-Stack Developer",
      description:
        "An e-learning platform connecting Algerian instructors and learners: instructors publish courses, learners enroll, track progress and leave reviews.",
      details: [
        "Built a full-stack e-learning platform enabling instructors to publish courses and learners to enroll, track progress and submit reviews.",
        "Built a cross-platform mobile client with React Native and a web dashboard with Vue.js.",
        "Built a RESTful backend with Express.js and MongoDB powering both clients.",
      ],
      stack: ["Vue.js", "React Native", "Express.js", "MongoDB"],
      links: [{ label: "GitHub", url: "https://github.com/Chafikbz4/DZ-SKILLS" }],
    },
    {
      id: "estin-security-hub",
      name: "estin-security-hub.md",
      title: "ESTIN Security Hub",
      period: "ESTIN, Bejaia",
      cover: IMG.estinHubCover,
      type: "fullstack",
      status: "academic",
      role: "Full-Stack Developer",
      description:
        "A dedicated cybersecurity training platform for ESTIN students — learn, practice and compete, in one place.",
      details: [
        "Built a platform for ESTIN students to train, collaborate and build cybersecurity skills through interactive modules, challenges and a curated tools directory.",
        "Structured course modules (Linux fundamentals, buffer overflows on Linux x86, and more) with difficulty and category tags.",
        "Built \"Crack the Gate\"-style security challenges with scoring, difficulty tiers and categories (web exploitation, and others).",
        "Curated a security-tools reference section covering Nmap, Burp Suite, Wireshark, Metasploit, John the Ripper and Hashcat.",
      ],
      stack: ["Full-stack web", "MongoDB", "Auth & challenge scoring"],
      links: [{ label: "GitHub", url: "https://github.com/Chafikbz4/estin-security-hub" }],
    },
    {
      id: "chery-cars",
      name: "chery-cars-algeria.md",
      title: "Chery Cars Algeria — Analysis & Conception",
      period: "Jan 2024 – May 2024 · ESTIN",
      cover: null,
      type: "docs",
      status: "academic",
      role: "Analyst / Software Designer",
      description:
        "Software-engineering study for a Chery Cars Algeria e-commerce vehicle platform: problem definition through to full UML conception.",
      details: [
        "Defined the problem statement, scope and system actors for a vehicle e-commerce platform.",
        "Authored the full analysis report covering requirements, actors and use cases.",
        "Produced the conception deliverables: class diagram, use-case diagram and sequence diagrams.",
      ],
      stack: ["UML", "Systems analysis", "Software conception"],
      links: [],
      note: "Academic deliverable — a written report and UML diagrams, not a deployed application.",
    },
  ],
};

/* -------------------------------------------------------------------------
   INTERNSHIPS
   ------------------------------------------------------------------------- */
const INTERNSHIPS = [
  {
    id: "algerie-telecom",
    name: "algerie-telecom.md",
    title: "Network & Systems Administration Intern",
    org: "Algérie Télécom — Aïn Defla",
    period: "Aug 2025 – Sep 2025",
    cover: IMG.algerieTelecom,
    coverFit: "contain",
    description:
      "Hands-on systems and network administration internship: Active Directory, DNS/IP configuration and security policy enforcement.",
    details: [
      "Managed user accounts and integrated workstations into the Active Directory domain.",
      "Configured network parameters (IP addressing, DNS) and enforced security policies.",
      "Applied Group Policy Objects (GPOs) to standardize security settings across the domain.",
      "Diagnosed and resolved technical incidents related to network connectivity and AD authentication.",
    ],
    stack: ["Active Directory", "DNS", "GPOs", "Windows Server", "Network troubleshooting"],
    links: [],
  },
  {
    id: "scanevent",
    name: "scanevent.md",
    title: "Software Engineering Intern",
    org: "ScanEvent",
    period: "Jul 2025 – Aug 2025 (2 months)",
    cover: IMG.scanevent,
    coverFit: "contain",
    description:
      "Two-month engineering internship at ScanEvent, splitting time between proposing new product screens and maintaining the existing app for the team.",
    details: [
      "Proposed new screens for the app and researched new technology choices to build them.",
      "Maintained the app for the team: improved UI and performance, fixed bugs and addressed security issues.",
      "Picked up PHP and Flutter on the job to work across the existing stack.",
    ],
    stack: ["Flutter", "PHP", "UI/UX proposals", "Performance & security fixes"],
    links: [],
  },
];

/* -------------------------------------------------------------------------
   CYBERSECURITY — CTF achievements
   ------------------------------------------------------------------------- */
const SECURITY = [
  {
    id: "nexzero-2025",
    name: "nexzero-2025.md",
    title: "2nd Place — NexZero CTF",
    period: "2025",
    role: "Competitor",
    cover: null,
    description: "Placed 2nd at the NexZero cybersecurity CTF competition.",
    details: ["Competed in the NexZero CTF cybersecurity competition and placed 2nd overall."],
    tags: ["CTF", "Competitor"],
    links: [],
  },
  {
    id: "nexzero-2026",
    name: "nexzero-2026-author.md",
    title: "Challenge Author — NexZero CTF 2026",
    period: "2026",
    role: "Challenge Author",
    cover: null,
    description: "Returned to NexZero CTF as a challenge author.",
    details: ["Authored challenges for the 2026 edition of the NexZero CTF competition."],
    tags: ["CTF", "Author"],
    links: [],
  },
  {
    id: "itc-flags-2026",
    name: "itc-flags-2026-author.md",
    title: "Challenge Author — Flags CTF (ITC), Web & OSINT",
    period: "2026 · Information Technology Community",
    role: "Challenge Author",
    cover: IMG.itcCtf2026,
    description:
      "Authored challenges for \"Flags\", the CTF competition run by the Information Technology Community (ITC).",
    details: [
      "Authored challenges in the Web Exploitation and OSINT categories for the Flags CTF competition.",
      "Competition organized by the Information Technology Community (ITC).",
    ],
    tags: ["CTF", "Author", "Web", "OSINT"],
    links: [],
  },
];

/* -------------------------------------------------------------------------
   CERTIFICATIONS
   Add entries here as they're confirmed — kept separate so it's a one-line
   change per certificate.
   ------------------------------------------------------------------------- */
const CERTIFICATIONS = [
  {
    id: "fcc-js-algo-ds",
    name: "javascript-algorithms-and-data-structures.md",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    period: "",
    cover: null,
    description: "freeCodeCamp certification covering JavaScript fundamentals, algorithmic thinking and data structures.",
    links: [{ label: "Verify credential", url: "https://www.freecodecamp.org/certification/chafikbz/javascript-algorithms-and-data-structures" }],
  },
  {
    id: "claude-101",
    name: "claude-101.md",
    title: "Claude 101",
    issuer: "Claude Academy (Anthropic)",
    period: "",
    cover: null,
    description: "Anthropic's Claude Academy introductory certification on working effectively with Claude.",
    links: [{ label: "Verify credential", url: "https://academy.claude.com/verify/e145415b650b3799d15091bd0abc7c34" }],
  },
  {
    id: "claude-code-101",
    name: "claude-code-101.md",
    title: "Claude Code 101",
    issuer: "Claude Academy (Anthropic)",
    period: "",
    cover: null,
    description: "Anthropic's Claude Academy certification on using Claude Code for agentic software development.",
    links: [{ label: "Verify credential", url: "https://academy.claude.com/verify/5d24aceb012d87c7110aeb4480ad2dcf" }],
  },
  // Add more certificates by duplicating one of the blocks above.
];
