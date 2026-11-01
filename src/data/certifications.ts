export interface Certification {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  category: 'Technical Courses' | 'Professional Courses' | 'Hackathons & Competitions';
  credentialId?: string;
  verificationUrl?: string;
  skillsLearned: string[];
  summary: string;
}

export const certificationsData: Certification[] = [
  {
    id: "cert-fullstack-dev",
    title: "Full-Stack Web Development Specialization",
    organization: "Online Professional Learning",
    issueDate: "2025",
    category: "Technical Courses",
    skillsLearned: ["React", "Node.js", "Express", "REST APIs", "Modern JavaScript (ES6+)"],
    summary: "Hands-on implementation of responsive frontend user interfaces, backend API routes, and full-stack web architectures."
  },
  {
    id: "cert-cybersec-fund",
    title: "Cybersecurity Fundamentals & Threat Analysis",
    organization: "Academic Coursework & Professional Study",
    issueDate: "2025",
    category: "Professional Courses",
    skillsLearned: ["CIA Triad", "Threat Vectors", "Synthetic Media Detection", "Network Basics"],
    summary: "Core foundations in information security, threat modeling, deepfake detection concepts, and system resilience."
  },
  {
    id: "cert-dsa-comp-eng",
    title: "Data Structures & Algorithms in Computer Engineering",
    organization: "SLRTCE Department of Computer Engineering",
    issueDate: "2024",
    category: "Technical Courses",
    skillsLearned: ["C++", "Algorithm Complexity (Big O)", "Trees & Graphs", "Dynamic Programming"],
    summary: "Comprehensive academic foundation in computational problem solving, data structure optimization, and algorithmic efficiency."
  },
  {
    id: "cert-webgl-threejs",
    title: "Interactive 3D Web Graphics with Three.js",
    organization: "Creative Developer Studies",
    issueDate: "2025",
    category: "Technical Courses",
    skillsLearned: ["Three.js", "WebGL Shaders", "PBR Materials", "Scene Graphs", "Camera Controls"],
    summary: "Exploration of real-time browser 3D graphics, lighting simulation, procedural geometry, and performance optimization."
  },
  {
    id: "cert-sih-2026",
    title: "Smart India Hackathon 2026 – Problem Statement Selected",
    organization: "Ministry of Education / AICTE",
    issueDate: "2026",
    category: "Hackathons & Competitions",
    skillsLearned: ["Solution Architecture", "Team Leadership", "Voice Cloning Forensics", "Rapid Prototyping"],
    summary: "Selected problem statement solution architecture for AI voice cloning and real-time audio impersonation detection."
  }
];
