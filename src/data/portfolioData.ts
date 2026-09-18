import badgesList from '../badges-data.json';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'AI & Data' | 'Python' | 'C/C++' | 'Cloud';
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  highlights: string[];
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Cloud & AI' | 'Data Science' | 'Tools';
  level: number; // 1 to 100
  iconName: string;
  status: 'Proficient' | 'Learning' | 'Hands-on';
  description: string;
}

export interface Badge {
  badgeUrl: string;
  image: string;
  title: string;
  earned: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'Cloud & AI' | 'Programming' | 'Data Science' | 'Systems';
  description: string;
  date: string;
  credentialId?: string;
  verifiedUrl: string;
  skills: string[];
  featured?: boolean;
}

export const PERSONAL_INFO = {
  name: 'Vinay Kumbhare',
  role: 'Computer Science (Data Science) Student',
  subtitles: [
    'Data Science & AI Explorer',
    'Python & C/C++ Developer',
    'Google Cloud Arcade Achiever (120+ Badges)',
    'Building foundations one line at a time'
  ],
  bio: 'Second-year Computer Science (Data Science) undergraduate compiling a robust foundation in Python and C/C++ algorithms, applied Generative AI, and cloud architecture across Google Cloud Platform.',
  email: 'vinaykumbhare80@gmail.com',
  altEmail: 'vinaykumbhare2010@gmail.com',
  github: 'https://github.com/VinayKumbhare',
  linkedin: 'https://www.linkedin.com/in/vinay-kumbhare-3170363aa/',
  googleCloudProfile: 'https://www.skills.google/public_profiles/844f7b5a-4b0d-4fa2-8bc9-99d65271c633',
  location: 'India',
  avatarUrl: '/vinay-avatar.png',
  focusAreas: ['Python', 'C/C++', 'Data Science', 'Google Cloud Platform', 'Generative AI'],
  currentStatus: 'Building foundations & seeking internships / collaborations'
};

export const SKILLS: Skill[] = [
  // Languages
  {
    name: 'Python',
    category: 'Languages',
    level: 88,
    iconName: 'Code2',
    status: 'Proficient',
    description: 'Data analysis, automation, OOP fundamentals, scripting, and algorithmic problem solving'
  },
  {
    name: 'C / C++',
    category: 'Languages',
    level: 82,
    iconName: 'Cpu',
    status: 'Proficient',
    description: 'Data structures, memory pointers, logic-building, and performance-focused programming'
  },
  {
    name: 'TypeScript / JavaScript',
    category: 'Languages',
    level: 75,
    iconName: 'FileCode2',
    status: 'Proficient',
    description: 'Modern ES6+, interactive web UIs, DOM manipulation, and asynchronous APIs'
  },
  {
    name: 'SQL & Database Design',
    category: 'Languages',
    level: 70,
    iconName: 'Database',
    status: 'Hands-on',
    description: 'Relational querying, schema organization, Bigtable & BigQuery integration'
  },

  // Cloud & AI
  {
    name: 'Google Cloud Platform (GCP)',
    category: 'Cloud & AI',
    level: 90,
    iconName: 'Cloud',
    status: 'Proficient',
    description: 'Compute Engine, Cloud Storage, BigQuery, Bigtable, Cloud Functions, and IAM'
  },
  {
    name: 'Generative AI & Gemini API',
    category: 'Cloud & AI',
    level: 84,
    iconName: 'Sparkles',
    status: 'Hands-on',
    description: 'Multimodal document processing, prompt engineering, Multimodal RAG pipelines'
  },
  {
    name: 'Lakehouse & Data Lakes',
    category: 'Cloud & AI',
    level: 76,
    iconName: 'Layers',
    status: 'Hands-on',
    description: 'Metadata enrichment, discovery, Dataplex, and analytics architectures'
  },
  {
    name: 'Arcade Cloud Labs',
    category: 'Cloud & AI',
    level: 95,
    iconName: 'Award',
    status: 'Proficient',
    description: 'Completed 120+ hands-on production labs on Google Cloud Skills Boost'
  },

  // Data Science
  {
    name: 'Data Analysis & Pandas',
    category: 'Data Science',
    level: 78,
    iconName: 'BarChart3',
    status: 'Hands-on',
    description: 'Exploratory data analysis, cleaning, data munging, and feature transformations'
  },
  {
    name: 'Data Structures & Algorithms',
    category: 'Data Science',
    level: 80,
    iconName: 'Binary',
    status: 'Learning',
    description: 'Arrays, linked lists, trees, graphs, sorting, searching, and complexity optimization'
  },
  {
    name: 'NumPy & Scientific Python',
    category: 'Data Science',
    level: 75,
    iconName: 'TrendingUp',
    status: 'Hands-on',
    description: 'Vectorized mathematical operations, multi-dimensional matrix operations'
  },

  // Tools
  {
    name: 'Git & GitHub',
    category: 'Tools',
    level: 85,
    iconName: 'GitBranch',
    status: 'Proficient',
    description: 'Version control, branch management, collaborative workflows, and GitHub repositories'
  },
  {
    name: 'VS Code & Dev Environment',
    category: 'Tools',
    level: 90,
    iconName: 'Terminal',
    status: 'Proficient',
    description: 'Debugging, extension workflows, integrated terminal, and code formatting'
  },
  {
    name: 'Linux & Bash Scripting',
    category: 'Tools',
    level: 76,
    iconName: 'SquareTerminal',
    status: 'Hands-on',
    description: 'Command line operations, file system manipulation, shell scripting'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'aquaguard-ai',
    title: 'AquaGuard AI',
    description: 'Real-time AI-powered web platform that analyzes side-scan sonar imagery to detect, classify, map, and report underwater marine debris and environmental hazards.',
    longDescription: 'AquaGuard AI is a comprehensive ocean conservation solution. Built with TypeScript and applied computer vision models, it parses complex sonar acoustic feeds, identifies anomalies such as discarded fishing nets and micro-hazards, and plots geospatial tracking coordinates for cleanup operations.',
    tags: ['TypeScript', 'Computer Vision', 'AI / ML', 'Geospatial', 'Marine Tech'],
    category: 'AI & Data',
    githubUrl: 'https://github.com/VinayKumbhare/AquaGuard',
    liveUrl: 'https://aqua-guard-six.vercel.app/',
    featured: true,
    highlights: [
      'Automated sonar imagery anomaly detection and categorization',
      'Geographic mapping of environmental hazard hotspots',
      'Real-time web dashboard for environmental research teams'
    ]
  },
  {
    id: 'student-marks-analysis',
    title: 'Student Result Management System',
    description: 'Python system that calculates total marks, percentages, result classifications, performance grading, and statistical summaries.',
    longDescription: 'A robust Python application engineered to streamline academic record evaluations. Features automated CSV parsing, GPA calculations, grade distribution metrics, pass/fail percentage graphs, and error-resilient data handling.',
    tags: ['Python', 'Data Analysis', 'Automation', 'CLI', 'Data Processing'],
    category: 'Python',
    githubUrl: 'https://github.com/VinayKumbhare/student-marks-analysis',
    featured: true,
    highlights: [
      'Batch calculation of percentages and weighted GPA grading',
      'Statistical distribution analysis (mean, standard deviation, percentiles)',
      'Exportable formatted grade sheets and summary logs'
    ]
  },
  {
    id: 'c-cpp-mini-projects',
    title: 'C / C++ Mini Projects Suite',
    description: 'A curated collection of algorithmic programs, data structure implementations, and memory management logic-building exercises.',
    longDescription: 'Deep dive into low-level computational fundamentals. Includes pointer arithmetic demonstrations, custom memory allocator simulations, dynamic data structure implementations (linked lists, stacks, binary trees), and classic algorithms.',
    tags: ['C', 'C++', 'Data Structures', 'Algorithms', 'Memory Management'],
    category: 'C/C++',
    githubUrl: 'https://github.com/VinayKumbhare/c-cpp-mini-projects',
    featured: true,
    highlights: [
      'Comprehensive implementations of fundamental data structures',
      'Pointer arithmetic and dynamic memory manipulation exercises',
      'Time and space complexity benchmark demonstrations'
    ]
  },
  {
    id: 'gcp-arcade-labs',
    title: 'Google Cloud Arcade Architecture Labs',
    description: 'Hands-on architectural labs completed on Google Cloud Platform, covering Cloud Bigtable, BigQuery, Gemini Multimodal RAG, and Lakehouse security.',
    longDescription: 'Practical cloud infrastructure implementations built across 120+ Google Cloud Skills Boost labs. Features scalable Bigtable table management, BigQuery data joins, Dataplex lakehouse governance, and applied generative AI workflows.',
    tags: ['Google Cloud', 'BigQuery', 'Bigtable', 'Gemini AI', 'Cloud IAM'],
    category: 'Cloud',
    githubUrl: 'https://github.com/VinayKumbhare/google-cloud-arcade-labs',
    featured: true,
    highlights: [
      'Production Bigtable instance provisioning and query optimization',
      'Gemini Multimodal document extraction and RAG pipeline integration',
      'End-to-end lakehouse security, metadata governance, and discovery'
    ]
  },
  {
    id: 'globe-shop-rates',
    title: 'Globe Shop Rates Engine',
    description: 'Full-stack application analyzing dynamic international currency exchange rates, shipping tariffs, and localized e-commerce costs.',
    longDescription: 'Designed to solve multi-currency transparency for international buyers. Pulls live FX rates, calculates country-specific taxes and logistics surcharges in real time.',
    tags: ['TypeScript', 'APIs', 'Financial Analytics', 'Web'],
    category: 'AI & Data',
    githubUrl: 'https://github.com/VinayKumbhare/globe-shop-rates',
    featured: false,
    highlights: [
      'Real-time currency converter with historical volatility charts',
      'Tariff and shipping calculation engine for global logistics'
    ]
  },
  {
    id: 'medicase-health',
    title: 'MediCase Health Tracker',
    description: 'Interactive digital health portal for patient case history management, symptom timelines, and structured doctor consultations.',
    longDescription: 'Organizes multi-visit medical case files with searchable symptom tags, lab report attachments, and doctor appointment scheduling.',
    tags: ['HTML', 'JavaScript', 'HealthTech', 'CSS3'],
    category: 'Python',
    githubUrl: 'https://github.com/VinayKumbhare/MediCase',
    featured: false,
    highlights: [
      'Structured timeline of health records and medication schedules',
      'Clean accessibility-focused responsive interface'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'google-cloud-arcade-mastery',
    title: 'Google Cloud Arcade Program — 120+ Badges',
    issuer: 'Google Cloud Skills Boost',
    category: 'Cloud & AI',
    description: 'Earned 120+ verified skill badges and milestone recognitions in Cloud Architecture, Generative AI, Bigtable, and Lakehouse Analytics.',
    date: 'Jan 2026 - Present',
    credentialId: '844f7b5a-4b0d-4fa2-8bc9-99d65271c633',
    verifiedUrl: 'https://www.skills.google/public_profiles/844f7b5a-4b0d-4fa2-8bc9-99d65271c633',
    skills: ['GCP', 'Vertex AI', 'Bigtable', 'BigQuery', 'Cloud Security'],
    featured: true
  },
  {
    id: 'gcp-genai-level3',
    title: 'Applied Generative AI — Level 3 Specialist',
    issuer: 'Google Cloud Skills Boost',
    category: 'Cloud & AI',
    description: 'Advanced hands-on certification in multimodal prompting, document extraction with Gemini models, vector search, and Retrieval-Augmented Generation (RAG).',
    date: 'Aug 2026',
    credentialId: 'GCP-GENAI-LVL3-2026',
    verifiedUrl: 'https://www.skills.google/public_profiles/844f7b5a-4b0d-4fa2-8bc9-99d65271c633',
    skills: ['Gemini 1.5 Pro', 'Multimodal RAG', 'Prompt Design', 'Vertex AI'],
    featured: true
  },
  {
    id: 'python-programming-cert',
    title: 'Python Programming & Object-Oriented Architecture',
    issuer: 'Academic & Professional Coursework',
    category: 'Programming',
    description: 'Evaluated mastery in Python 3 programming, object-oriented paradigms, dynamic typing, algorithmic problem-solving, and automated scripting.',
    date: '2025',
    credentialId: 'PY-3904-VK-2025',
    verifiedUrl: 'https://github.com/VinayKumbhare',
    skills: ['Python 3', 'OOP', 'Data Structures', 'Automation', 'File I/O'],
    featured: true
  },
  {
    id: 'c-cpp-programming-cert',
    title: 'C / C++ Systems Programming & Memory Architecture',
    issuer: 'Academic & Foundation Curriculum',
    category: 'Systems',
    description: 'Certified in low-level procedural and object-oriented development, pointer arithmetic, manual memory management, dynamic heap allocation, and algorithmic design.',
    date: '2025',
    credentialId: 'CS-CPP-8812-VK',
    verifiedUrl: 'https://github.com/VinayKumbhare/c-cpp-mini-projects',
    skills: ['C', 'C++', 'Pointers', 'Dynamic Memory', 'Algorithms'],
    featured: true
  },
  {
    id: 'gcp-bigtable-engineering',
    title: 'Cloud Bigtable & Scalable NoSQL Engineering',
    issuer: 'Google Cloud',
    category: 'Cloud & AI',
    description: 'Practical certification in provisioning high-throughput Bigtable instances, designing optimal row key schemas, and low-latency querying.',
    date: 'Sep 2026',
    credentialId: 'GCP-BIGTABLE-1284',
    verifiedUrl: 'https://www.skills.google/public_profiles/844f7b5a-4b0d-4fa2-8bc9-99d65271c633',
    skills: ['Cloud Bigtable', 'NoSQL', 'Row Key Design', 'Data Engineering'],
    featured: false
  },
  {
    id: 'data-analysis-python',
    title: 'Data Analysis with Python, Pandas & NumPy',
    issuer: 'Data Science Curriculum & Labs',
    category: 'Data Science',
    description: 'Practical evaluation in data cleaning, exploratory data analysis (EDA), feature manipulation, and statistical distribution modeling on real-world datasets.',
    date: '2025',
    credentialId: 'DS-PANDAS-VK-2025',
    verifiedUrl: 'https://github.com/VinayKumbhare/student-marks-analysis',
    skills: ['Pandas', 'NumPy', 'EDA', 'Statistical Analysis'],
    featured: false
  },
  {
    id: 'gcp-dataplex-lakehouse',
    title: 'Dataplex Lakehouse Governance & Discovery',
    issuer: 'Google Cloud Skills Boost',
    category: 'Cloud & AI',
    description: 'Certification in architecting modern unified lakehouses, configuring data quality checks, data lineage, and metadata discovery across heterogeneous storage.',
    date: 'Sep 2026',
    credentialId: 'GCP-LAKEHOUSE-4491',
    verifiedUrl: 'https://www.skills.google/public_profiles/844f7b5a-4b0d-4fa2-8bc9-99d65271c633',
    skills: ['Dataplex', 'Data Governance', 'Lakehouse', 'Metadata Discovery'],
    featured: false
  },
  {
    id: 'git-github-engineering',
    title: 'Git, GitHub & Collaborative Open Source Engineering',
    issuer: 'Developer Tooling Curriculum',
    category: 'Programming',
    description: 'Certified in modern version control workflows, branching strategies, merge conflict resolution, pull request reviews, and open source repository stewardship.',
    date: '2025',
    credentialId: 'GIT-HUB-ENG-2025',
    verifiedUrl: 'https://github.com/VinayKumbhare',
    skills: ['Git', 'GitHub', 'CI/CD Basics', 'Branching', 'Code Review'],
    featured: false
  }
];

export const CLOUD_LOGS = [
  { tag: 'MILESTONE', date: 'SEP 2026', title: '120+ Google Cloud Arcade Badges Achieved', status: 'Completed' },
  { tag: 'GEN-AI', date: 'SEP 2026', title: 'Inspect Rich Documents with Gemini Multimodality and Multimodal RAG', status: 'Verified' },
  { tag: 'DATABASE', date: 'SEP 2026', title: 'Create and Manage Bigtable Instances', status: 'Verified' },
  { tag: 'LAKEHOUSE', date: 'SEP 2026', title: 'Enrich Metadata and Discovery of Lakehouse Data', status: 'Verified' },
  { tag: 'SKILL', date: 'AUG 2026', title: 'Applied Generative AI — Level 3 Mastery', status: 'Completed' },
  { tag: 'BASECAMP', date: 'JAN 2026', title: 'Arcade Base Camp & Certification Zone Onboarding', status: 'Completed' }
];

export const ARCADE_BADGES: Badge[] = badgesList as Badge[];
