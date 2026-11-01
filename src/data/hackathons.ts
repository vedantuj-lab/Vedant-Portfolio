export interface HackathonEntry {
  id: string;
  title: string;
  organizer: string;
  year: string;
  project: string;
  role: string;
  status: 'Selected for Presentation' | 'Team Participant' | 'Completed 24-hr Sprint' | 'Completed 36-hr Sprint';
  achievement?: string;
  description: string;
  technologies: string[];
  repositoryUrl?: string;
  tags: string[];
}

export const hackathonsData: HackathonEntry[] = [
  {
    id: "sih-2026",
    title: "Smart India Hackathon 2026",
    organizer: "Ministry of Education & AICTE",
    year: "2026",
    project: "SIH26104: AI-Powered Real-Time Voice Cloning & Impersonation Detection",
    role: "Solution Architect & Workflow Designer (Team of 6)",
    status: "Selected for Presentation",
    achievement: "Shortlisted Problem Statement Solution Architecture",
    description: "Designed the end-to-end cybersecurity forensics workflow to identify and mitigate synthetic voice cloning and real-time audio spoofing attacks.",
    technologies: ["Voice Cloning Forensics", "System Architecture", "Audio Spectrograms", "Threat Analysis"],
    repositoryUrl: "https://github.com/vedantuj-lab",
    tags: ["Cybersecurity", "National Hackathon", "Forensics"]
  },
  {
    id: "hackindia-cloudinary-2026",
    title: "Pixels to Products – Cloudinary AI Hackathon",
    organizer: "Cloudinary & HackIndia",
    year: "2026",
    project: "Tech Dynamites – Media Transformation & Asset Intelligence",
    role: "Full-Stack Developer (Tech Dynamites)",
    status: "Team Participant",
    achievement: "Verified Team Submission & Repository",
    description: "Built dynamic media optimization and generative visual workflows using Cloudinary AI APIs and responsive React interfaces.",
    technologies: ["Cloudinary AI", "React", "TypeScript", "Node.js"],
    repositoryUrl: "https://github.com/vedantuj-lab/pixels-to-products-cloudinary-ai-hackathon-2026-tech-dynamites",
    tags: ["Generative AI", "HackIndia", "Media AI"]
  },
  {
    id: "hackindia-ai-first-2026",
    title: "AI-First Startup Hackathon",
    organizer: "HackIndia",
    year: "2026",
    project: "Tech Dynamites – AI-First Autonomous Business Solution",
    role: "Full-Stack Developer & UI Architect",
    status: "Team Participant",
    achievement: "Verified Team Submission",
    description: "Formulated and prototyped an AI-native product architecture eliminating manual operations via LLM agents and reactive frontend interfaces.",
    technologies: ["AI-Native Architecture", "TypeScript", "Next.js", "Agentic Pipelines"],
    repositoryUrl: "https://github.com/vedantuj-lab/ai-first-startup-hackathon-build-a-startup-using-ai-only-tech-dynamites",
    tags: ["AI Startup", "HackIndia", "Agentic Systems"]
  },
  {
    id: "edquest-fintech",
    title: "edQuest FinTech 24-Hour Hackathon",
    organizer: "edQuest & Financial Engineering Society",
    year: "2025",
    project: "Real-Time Stock Market Sentiment Dashboard",
    role: "Full-Stack Systems Developer",
    status: "Completed 24-hr Sprint",
    achievement: "24-Hour Functional Architecture Delivery",
    description: "Engineered a rapid sentiment correlation pipeline analyzing social sentiment volume against live equity ticker volatility.",
    technologies: ["Next.js", "FastAPI Architecture", "Recharts", "WebSocket Concept"],
    repositoryUrl: "https://github.com/vedantuj-lab",
    tags: ["FinTech", "24-Hour Sprint", "Data Visualization"]
  },
  {
    id: "slrtce-36hr-hackathon",
    title: "SLRTCE College 36-Hour Hackathon",
    organizer: "Shree L.R. Tiwari College of Engineering",
    year: "2025",
    project: "Interactive University 3D Map (WebGL Campus Navigator)",
    role: "Lead 3D Developer",
    status: "Completed 36-hr Sprint",
    achievement: "Demonstrated 3D Indoor/Outdoor Pathfinding Prototype",
    description: "Built a browser-based 3D campus model with multi-floor elevator cutaways and wheelchair-accessible navigation routing.",
    technologies: ["Three.js", "WebGL", "React", "3D Camera Controls"],
    repositoryUrl: "https://github.com/vedantuj-lab/campus-flight",
    tags: ["3D Web", "36-Hour Sprint", "Campus Tech"]
  }
];
