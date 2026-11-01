export interface SkillItem {
  name: string;
  category: string;
  level?: string;
  description?: string;
  tags?: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core typed and dynamic languages used for systems, client-side interfaces, and backend logic.",
    skills: [
      { name: "TypeScript", category: "languages", description: "Strict typing, complex interfaces, modern ES2022+ standards" },
      { name: "JavaScript", category: "languages", description: "ES6+, asynchronous event loop, DOM architecture, functional patterns" },
      { name: "HTML5", category: "languages", description: "Semantic markup, accessibility (a11y), canvas rendering API" },
      { name: "CSS3", category: "languages", description: "Modern grid, flexbox, CSS variables, hardware-accelerated animations" },
      { name: "Python", category: "languages", description: "Data analysis, machine learning scripts, backend scripting" },
      { name: "Java", category: "languages", description: "Object-oriented software principles, engineering coursework" },
      { name: "C++", category: "languages", description: "Algorithms, low-level data structures, computational efficiency" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Component-driven architectures, modern styling, and reactive interface frameworks.",
    skills: [
      { name: "React 19", category: "frontend", description: "Server components, concurrent rendering, custom hooks, state architecture" },
      { name: "Next.js", category: "frontend", description: "App router, SSR/SSG, edge rendering, API routes" },
      { name: "Tailwind CSS v4", category: "frontend", description: "Utility-first design, custom theme tokens, modern variant engines" },
      { name: "TanStack Router", category: "frontend", description: "Type-safe client routing, nested layouts, loader data pipelines" },
      { name: "Radix UI / shadcn", category: "frontend", description: "Accessible headless UI primitives, keyboard-navigable components" }
    ]
  },
  {
    id: "3d-web",
    name: "3D Web & Interactive Graphics",
    description: "Interactive WebGL scenes, PBR materials, procedural geometry, and real-time canvas rendering.",
    skills: [
      { name: "Three.js", category: "3d-web", description: "Scene graphs, PBR materials, custom geometry, lights and shadow maps" },
      { name: "React Three Fiber", category: "3d-web", description: "Declarative Three.js component lifecycles in React" },
      { name: "WebGL", category: "3d-web", description: "Hardware-accelerated 2D/3D graphics pipelines in browser" },
      { name: "3D Scenes & Lighting", category: "3d-web", description: "Directional, point, and studio environment reflections (PMREM)" },
      { name: "Particle Experiences", category: "3d-web", description: "Custom buffer particle emitters, mathematical field flow" }
    ]
  },
  {
    id: "animation",
    name: "Animation & Motion Design",
    description: "Fluid, high-framerate interactive micro-interactions and scroll-orchestrated storytelling.",
    skills: [
      { name: "GSAP", category: "animation", description: "Timeline sequencing, tween management, high-performance transforms" },
      { name: "GSAP ScrollTrigger", category: "animation", description: "Scroll-linked scrub animations, pin states, viewport reveals" },
      { name: "Framer Motion", category: "animation", description: "Spring physics, layout animations, exit transitions, gesture tracking" },
      { name: "CSS Animation", category: "animation", description: "Hardware-accelerated 3D transforms, keyframe transitions" },
      { name: "Scroll-Driven Motion", category: "animation", description: "Viewport-progressed timelines with reduced-motion compliance" }
    ]
  },
  {
    id: "backend-cloud",
    name: "Backend, Cloud & Services",
    description: "RESTful server architectures, real-time databases, auth workflows, and edge deployment.",
    skills: [
      { name: "Node.js", category: "backend-cloud", description: "Non-blocking event-driven runtime, Express server architecture" },
      { name: "Express.js", category: "backend-cloud", description: "RESTful endpoints, middleware chains, proxy routes, error handling" },
      { name: "Firebase", category: "backend-cloud", description: "Firestore document database, real-time sync, Firebase Auth" },
      { name: "Supabase", category: "backend-cloud", description: "PostgreSQL, row-level security, instant realtime subscriptions" },
      { name: "Clerk Auth", category: "backend-cloud", description: "Enterprise-grade identity, multi-session management, webhooks" },
      { name: "Stripe", category: "backend-cloud", description: "Payment processing integration, webhook lifecycle validation" }
    ]
  },
  {
    id: "ai-tools",
    name: "AI & Modern Development Tools",
    description: "AI-assisted developer workflows, LLM SDKs, prompt engineering, and modern IDE tooling.",
    skills: [
      { name: "Google AI Studio", category: "ai-tools", description: "Prompt experimentation, multimodal tuning, system instruction design" },
      { name: "Gemini API", category: "ai-tools", description: "@google/genai SDK, structured JSON output, multimodal reasoning" },
      { name: "Claude & Claude Code", category: "ai-tools", description: "Autonomous code generation, terminal agent workflows, refactoring" },
      { name: "Git & GitHub", category: "ai-tools", description: "Branching strategies, CI workflows, PR reviews, open-source repositories" },
      { name: "VS Code", category: "ai-tools", description: "Debugger setups, custom keymaps, developer productivity environments" }
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity & Research",
    description: "Security fundamentals, synthetic media forensics, and solution architecture.",
    skills: [
      { name: "CIA Triad", category: "cybersecurity", description: "Confidentiality, Integrity, and Availability threat modeling" },
      { name: "Deepfake Detection", category: "cybersecurity", description: "Artifact identification, temporal inconsistency analysis" },
      { name: "Voice Cloning Detection", category: "cybersecurity", description: "Spectrogram forensics, acoustic feature verification" },
      { name: "Threat Analysis", category: "cybersecurity", description: "Vulnerability scoping, social engineering mitigation vectors" },
      { name: "System Workflow Design", category: "cybersecurity", description: "High-level architecture, feasibility, and technical documentation" }
    ]
  }
];

export const engineeringResearchSkills = [
  { name: "Problem Statement Analysis", description: "Deconstructing ambiguous briefs into structured requirements and technical trade-offs." },
  { name: "Solution Architecture", description: "Designing component hierarchies, data contracts, and client-server communication paths." },
  { name: "System Workflow Design", description: "Mapping user journeys, state transition diagrams, and fault-tolerant fallbacks." },
  { name: "Feasibility & Viability Analysis", description: "Evaluating performance limits, memory budgets, and cloud infrastructure costs." },
  { name: "Technical Documentation", description: "Writing readable architecture RFCs, API contracts, and README deployment runbooks." },
  { name: "Hackathon Rapid Prototyping", description: "Translating ideation into functional, demonstrable software within 24–36 hour sprints." }
];
