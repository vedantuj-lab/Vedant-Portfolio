import React from 'react';
import { Calendar, GraduationCap, Trophy, Code2, Sparkles, Compass } from 'lucide-react';

interface Milestone {
  period: string;
  title: string;
  context: string;
  type: 'Education' | 'Hackathon' | 'Technical Growth';
  description: string;
  tags: string[];
}

export const JourneyTimeline: React.FC = () => {
  const milestones: Milestone[] = [
    {
      period: '2026 — Present',
      title: 'Third Year Computer Engineering (Semester V)',
      context: 'Shree L.R. Tiwari College of Engineering (SLRTCE)',
      type: 'Education',
      description: 'Advanced coursework in operating systems, database management systems, computer networks, and system architecture. Expected graduation: 2028.',
      tags: ['B.E. Computer Engineering', 'Semester V', 'System Design']
    },
    {
      period: '2026',
      title: 'Smart India Hackathon 2026 & AI Hackathons',
      context: 'National & Industry Competitions',
      type: 'Hackathon',
      description: 'Formulated and designed the cybersecurity solution architecture for SIH26104 (Real-Time AI Voice Cloning & Impersonation Detection). Competed in HackIndia Cloudinary AI and AI-First Startup Hackathons with Tech Dynamites.',
      tags: ['SIH 2026', 'Cyber Forensics', 'Team Architect', 'HackIndia']
    },
    {
      period: '2025',
      title: 'Full-Stack & 3D Web Exploration',
      context: 'Independent Software Engineering',
      type: 'Technical Growth',
      description: 'Deepened mastery of modern frontend frameworks (React 19, Next.js, Tailwind CSS), WebGL rendering via Three.js, server architectures with Node.js and Express, and persistent cloud databases (Supabase, Firebase).',
      tags: ['Three.js', 'React 19', 'Node.js', 'Supabase', 'Cloud DBs']
    },
    {
      period: '2024',
      title: 'Computer Engineering Foundation',
      context: 'Shree L.R. Tiwari College of Engineering',
      type: 'Education',
      description: 'Established rigorous computational fundamentals in Data Structures & Algorithms, Object-Oriented Programming (Java, C++), and hardware-software system interfaces.',
      tags: ['Data Structures', 'C++', 'Java', 'Engineering Fundamentals']
    }
  ];

  return (
    <section id="journey" className="py-24 relative bg-[#16100E]/40 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241B17] border border-white/10 text-xs font-mono text-[#FF941F] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Academic & Technical Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            My Development Journey
          </h2>
          <p className="text-sm text-[#C9C2BC] mt-2 max-w-xl mx-auto">
            A verified timeline tracing academic milestones at SLRTCE, hackathon solutions, and independent engineering projects.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-12">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#100D0C] border-2 border-[#FF941F] group-hover:scale-125 transition-transform shadow-md shadow-[#FF941F]/40" />

              {/* Year Stamp for Desktop */}
              <div className="hidden sm:block absolute -left-40 top-1 text-xs font-mono font-semibold text-[#FF941F] text-right w-24">
                {milestone.period}
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-[#241B17] border border-white/10 group-hover:border-[#FF941F]/40 transition-all hover:-translate-y-1 shadow-lg">
                <div className="sm:hidden text-xs font-mono text-[#FF941F] mb-2 font-semibold">
                  {milestone.period}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FFB347] transition-colors">
                    {milestone.title}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1B1411] text-[#FF941F] border border-[#FF941F]/20">
                    {milestone.type}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#C9C2BC] mb-3">
                  {milestone.context}
                </div>

                <p className="text-xs sm:text-sm text-[#C9C2BC] leading-relaxed mb-4">
                  {milestone.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {milestone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1B1411] text-[#A89689] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
