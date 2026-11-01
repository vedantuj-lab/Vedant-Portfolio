export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'AI & Cyber' | '3D & WebGL' | 'Hackathon';
  status: 'Deployed & Active' | 'Architecture & Prototype' | 'Hackathon Sprint Build' | 'In Active Development';
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
  role: string;
  eventOrContext?: string;
}

export const projectsData: Project[] = [
  {
    id: "sih26104-voice-detect",
    title: "SIH26104 – Real-Time AI Voice Cloning Detection",
    category: "AI & Cyber",
    status: "Architecture & Prototype",
    tagline: "Cybersecurity forensics platform countering AI voice-cloning impersonation attacks.",
    description: "A cybersecurity-focused solution designed to address real-time detection and prevention of AI voice-cloning impersonation attacks. Developed for Smart India Hackathon 2026.",
    problem: "Rapidly advancing generative speech synthesis enables malicious actors to execute high-fidelity voice cloning in real time, bypassing acoustic security and conducting unauthorized fraud.",
    solution: "Architected a dual-stream spectral verification pipeline combining real-time frequency spectrogram analysis, temporal phase consistency checks, and neural artifact scoring.",
    features: [
      "Real-time audio waveform and frequency spectrogram visualizer",
      "Synthetic voice probability gauge with confidence intervals",
      "Speaker verification matrix with baseline acoustic matching",
      "Low-latency streaming audio packet inspection pipeline",
      "Executive security alert dispatch with forensic evidence logging"
    ],
    technologies: ["Solution Architecture", "Acoustic Analysis", "Deepfake Forensics", "Python", "TypeScript", "WebSocket Streaming"],
    githubUrl: "https://github.com/vedantuj-lab",
    image: "/src/assets/images/project_preview_voicedetect_1793526889979.jpg",
    featured: true,
    role: "Solution Architect & System Workflow Designer (Team of 6)",
    eventOrContext: "Smart India Hackathon 2026 (Problem Statement SIH26104)"
  },
  {
    id: "agrin-ai-agronomist",
    title: "AgriN – AI Agronomist Platform",
    category: "AI & Cyber",
    status: "In Active Development",
    tagline: "AI-driven agricultural intelligence combining multispectral satellite telemetry & soil diagnostics.",
    description: "An AI-driven agronomy web application designed to empower smallholder farmers by combining satellite vegetation indices, real-time soil metrics, and localized weather data into actionable diagnostic treatment guidance.",
    problem: "Smallholder agricultural producers lack access to high-resolution agronomic diagnostics, resulting in delayed pest response and inefficient nutrient application.",
    solution: "Constructed an intuitive telemetry dashboard powered by modern React 19 architecture with TanStack Router, integrating satellite NDVI mapping and AI crop diagnosis with interactive 3D digital twin visualization.",
    features: [
      "Interactive satellite vegetative index (NDVI) field mapping",
      "Real-time soil sensor telemetry (moisture, nitrogen, pH, temperature)",
      "Automated crop disease and nutrient deficiency diagnostics card",
      "Localized agronomic treatment schedules with weather correlation",
      "Exploratory 3D digital twin farm visualization"
    ],
    technologies: ["React 19", "TanStack Start", "TanStack Router", "Tailwind CSS v4", "Radix UI", "Three.js", "TypeScript"],
    githubUrl: "https://github.com/vedantuj-lab/agri-wise-aid-75",
    image: "/src/assets/images/project_preview_agrin_1793526891058.jpg",
    featured: true,
    role: "Frontend Architect, 3D & Motion Designer",
    eventOrContext: "BRICS Cooperation Themed Initiative"
  },
  {
    id: "civicsync-manhole",
    title: "CivicSync & SafeManhole",
    category: "Full-Stack",
    status: "Deployed & Active",
    tagline: "Smart city crowd-reporting and AI photo verification for open and hazardous infrastructure.",
    description: "A civic safety web application and municipal alert hub designed to identify hazardous or displaced manhole covers and municipal safety issues using crowd reporting and computer vision photo verification.",
    problem: "Missing or fractured manhole covers cause fatal urban hazards during monsoon flooding, while traditional municipal reporting mechanisms suffer from lack of verification and delayed dispatch.",
    solution: "Eliminated the need for expensive fragile IoT hardware sensors by implementing a citizen-powered photo verification flow with geocoded reports and real-time municipal response dashboards.",
    features: [
      "Citizen incident reporting with geolocation and camera upload",
      "AI photo verification assessing displacement and flood severity",
      "Municipal dispatch board with real-time issue status tracking",
      "Integrated emergency alert system and localized weather warnings",
      "Multi-role role-based dashboard for civic officials and field crews"
    ],
    technologies: ["TypeScript", "React", "Node.js", "Express", "Tailwind CSS", "Computer Vision / AI API"],
    githubUrl: "https://github.com/vedantuj-lab/CivicSync_Tech-Dynamites",
    image: "/src/assets/images/project_preview_civicsync_1793526890540.jpg",
    featured: true,
    role: "Full-Stack Developer & Frontend Lead",
    eventOrContext: "Tech Dynamites Civic Tech Project"
  },
  {
    id: "campus-3d-navigator",
    title: "Interactive University 3D Map",
    category: "3D & WebGL",
    status: "Hackathon Sprint Build",
    tagline: "WebGL 3D campus navigation system with multi-floor pathfinding and accessibility routing.",
    description: "A 36-hour hackathon concept for a high-performance, browser-based GPS-oriented indoor and outdoor campus navigation system using an interactive 3D model of the SLRTCE engineering campus.",
    problem: "Complex multi-building university campuses are difficult for visitors, new students, and differently-abled individuals to navigate, particularly across indoor floors and elevators.",
    solution: "Engineered an interactive 3D WebGL viewport with smooth camera panning, floor-by-floor cutaways, and accessibility-first waypoint pathfinding.",
    features: [
      "Interactive 3D low-poly campus model with real-time WebGL rendering",
      "Indoor multi-floor navigation selector with elevator and stair options",
      "Accessibility-aware path routing avoiding stairs for wheelchair access",
      "Searchable points of interest: lecture halls, laboratories, amenities",
      "Responsive touch controls optimized for mobile browser exploration"
    ],
    technologies: ["Three.js", "WebGL", "React", "TypeScript", "Tailwind CSS", "GLTF/GLB"],
    githubUrl: "https://github.com/vedantuj-lab/campus-flight",
    image: "/src/assets/images/workspace_room_ambient_1793526888888.jpg",
    featured: true,
    role: "Lead 3D Developer & UI Designer",
    eventOrContext: "College 36-Hour Hackathon"
  },
  {
    id: "vexopay-tracker",
    title: "VexoPay – Smart Finance Tracker",
    category: "Full-Stack",
    status: "Deployed & Active",
    tagline: "Personal finance and liquidity management platform with predictive expense categorization.",
    description: "A full-stack modern financial tracking platform providing real-time transaction insights, intelligent budget allocations, and responsive expense telemetry.",
    problem: "Traditional expense trackers require tedious manual logging without providing visual predictive forecasting or multi-account reconciliation.",
    solution: "Engineered a rapid-entry finance dashboard featuring categorized monthly burn-rate analytics, visual expense breakdowns, and responsive mobile tracking.",
    features: [
      "Dynamic expense logging with automated category tagging",
      "Visual cash flow charts and monthly burn-rate metrics",
      "Budget target threshold alerts and recurring expense monitoring",
      "Dark-mode optimized responsive financial dashboards",
      "Exportable financial summaries and data backup"
    ],
    technologies: ["TypeScript", "React", "Tailwind CSS", "Node.js", "Chart.js / Recharts"],
    githubUrl: "https://github.com/vedantuj-lab/VexoPay",
    image: "/src/assets/images/vedant_workspace_portrait_1793526888610.jpg",
    featured: true,
    role: "Full-Stack Developer",
    eventOrContext: "Independent Software Project"
  },
  {
    id: "swastify-healthcare",
    title: "Swastify – Healthcare Management Platform",
    category: "Full-Stack",
    status: "Deployed & Active",
    tagline: "Unified digital healthcare portal bridging patient consultation and clinical appointment scheduling.",
    description: "A comprehensive healthcare web platform developed to streamline patient registration, medical appointment scheduling, and patient health history tracking.",
    problem: "Small healthcare clinics face administrative bottlenecks with paper-based appointment registers and lost prescription records.",
    solution: "Built a centralized clinic management interface with calendar booking, doctor availability slots, and structured patient consultation archives.",
    features: [
      "Doctor appointment scheduling with conflict prevention",
      "Patient medical profile and past consultation history",
      "Prescription summary generation and clinic notices",
      "Role-based views for clinic staff and patients",
      "Clean accessible healthcare interface design"
    ],
    technologies: ["TypeScript", "React", "Node.js", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/vedantuj-lab/Swastify",
    image: "/src/assets/images/project_preview_civicsync_1793526890540.jpg",
    featured: true,
    role: "Full-Stack Developer",
    eventOrContext: "Healthcare Platform"
  },
  {
    id: "stock-sentiment-dashboard",
    title: "Real-Time Stock Market Sentiment Dashboard",
    category: "Hackathon",
    status: "Hackathon Sprint Build",
    tagline: "Social media sentiment ingestion pipeline for real-time equity trader dashboards.",
    description: "A proposed architectural pipeline developed during the edQuest FinTech 24-hour hackathon for processing social sentiment streams and correlating buzz with stock ticker volatility.",
    problem: "Retail investors are overwhelmed by erratic social commentary across platforms, missing quantified sentiment shifts during high-volatility trading sessions.",
    solution: "Designed a real-time sentiment extraction architecture conceptualized with WebSocket event streaming, NLP classification, and interactive candlestick overlays.",
    features: [
      "Proposed event-driven ingestion pipeline via Kafka and FastAPI",
      "Sentiment polarity scoring mapped across market trading hours",
      "Interactive equity ticker charts with overlaid sentiment pulses",
      "Watchlist tracking with real-time anomaly alerts"
    ],
    technologies: ["Next.js", "TypeScript", "Recharts", "FastAPI / WebSocket Architecture", "FinBERT NLP Concept"],
    githubUrl: "https://github.com/vedantuj-lab",
    image: "/src/assets/images/project_preview_voicedetect_1793526889979.jpg",
    featured: true,
    role: "Full-Stack & Systems Architecture (24-Hour Build)",
    eventOrContext: "edQuest FinTech Hackathon"
  },
  {
    id: "tuitiontrack",
    title: "TuitionTrack – Educator Management Suite",
    category: "Full-Stack",
    status: "In Active Development",
    tagline: "Student administration, fee reconciliation, and automated parent communication for educators.",
    description: "A specialized web application built for Indian independent tuition educators to manage student batch rosters, fee installment tracking, and automated notices powered by Gemini API.",
    problem: "Independent coaching tutors waste countless hours manually maintaining paper fee registers and messaging individual parents about attendance and payment dues.",
    solution: "Created an all-in-one portal with automated fee receipt generation, batch attendance rosters, and intelligent notice drafting.",
    features: [
      "Student batch enrollment and multi-course roster management",
      "Fee payment ledger with partial installments and pending alerts",
      "Attendance tracking with daily absentee summary generation",
      "Gemini API automated notice and progress report drafting",
      "SMS & messaging template triggers for parent updates"
    ],
    technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS", "Gemini API"],
    githubUrl: "https://github.com/vedantuj-lab/teach-manage-app",
    image: "/src/assets/images/project_preview_agrin_1793526891058.jpg",
    featured: true,
    role: "Full-Stack Developer",
    eventOrContext: "Independent EdTech Project"
  },
  {
    id: "parkmate-iq",
    title: "ParkMate IQ – Smart Parking Management",
    category: "Full-Stack",
    status: "Deployed & Active",
    tagline: "Real-time parking spot reservation and lot telemetry solution.",
    description: "A smart parking management platform allowing urban motorists to discover available slots, view lot occupancy rates, and secure advance reservations.",
    problem: "Urban traffic congestion is exacerbated by drivers circling city blocks searching for parking without visibility into actual lot availability.",
    solution: "Created a visual parking grid showing real-time slot occupancy, bay reservations, and automated entry time stamping.",
    features: [
      "Interactive visual parking bay grid with real-time status (Vacant / Occupied)",
      "Advance bay reservation with QR confirmation code",
      "Lot administrator dashboard showing hourly utilization trends",
      "Responsive mobile interface with one-tap direction guidance"
    ],
    technologies: ["TypeScript", "React", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/vedantuj-lab/parkmate-iq",
    image: "/src/assets/images/vedant_workspace_portrait_1793526888610.jpg",
    featured: false,
    role: "Full-Stack Developer"
  },
  {
    id: "cinematch-ai",
    title: "CineMatch AI – Movie Recommender",
    category: "AI & Cyber",
    status: "Deployed & Active",
    tagline: "Content-based movie recommendation system with mood filtering.",
    description: "An AI-assisted movie exploration platform analyzing user preferences, cinematic genres, and narrative themes to recommend films tailored to viewer mood.",
    problem: "Content saturation makes choosing movies a chore, with standard algorithmic feeds prioritizing promoted blockbusters over niche viewer tastes.",
    solution: "Built a mood-responsive discovery engine allowing users to select emotional vibes, narrative pacing, and genre blends.",
    features: [
      "Mood-based filter matrix with curated cinematic groupings",
      "Detailed film overview with cast, synopsis, and similarity scores",
      "Responsive dark-mode UI with rich movie poster art cards"
    ],
    technologies: ["TypeScript", "React", "Tailwind CSS", "Recommendation Algorithm"],
    githubUrl: "https://github.com/vedantuj-lab/CineMatch-AI",
    image: "/src/assets/images/workspace_room_ambient_1793526888888.jpg",
    featured: false,
    role: "Frontend & AI Integration Developer"
  },
  {
    id: "digitvision-ai",
    title: "DigitVision AI – Handwritten Digit Recognizer",
    category: "AI & Cyber",
    status: "Deployed & Active",
    tagline: "Interactive HTML5 canvas digit drawing and neural network classification.",
    description: "An interactive browser application allowing users to draw numerical digits on an HTML5 canvas and receive real-time neural network predictions with confidence probability bars.",
    problem: "Understanding machine learning models can feel abstract without interactive visual feedback during inference.",
    solution: "Implemented an in-browser inference interface where users sketch digits and observe neural layer activation and classification confidence in real-time.",
    features: [
      "Smooth HTML5 drawing canvas with stroke smoothing and erase controls",
      "Real-time digit classification with Top-3 probability distribution",
      "Visual pixel downscaling preview matching MNIST 28x28 matrix"
    ],
    technologies: ["TypeScript", "HTML5 Canvas API", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/vedantuj-lab/DigitVision-AI",
    image: "/src/assets/images/project_preview_voicedetect_1793526889979.jpg",
    featured: false,
    role: "Lead Developer"
  }
];
