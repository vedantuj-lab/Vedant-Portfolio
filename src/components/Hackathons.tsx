import React from 'react';
import { Trophy, Award, Github, Sparkles, ExternalLink } from 'lucide-react';
import { hackathonsData } from '../data/hackathons';

export const Hackathons: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241B17] border border-white/10 text-xs font-mono text-[#FF941F] mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Competitive Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Hackathons & Achievements
            </h2>
            <p className="text-sm text-[#C9C2BC] mt-2 max-w-xl">
              National competitive hackathons, collaborative team architectures, and rapid 24-to-36 hour sprint solutions.
            </p>
          </div>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathonsData.map((hackathon) => (
            <div
              key={hackathon.id}
              className="p-6 rounded-2xl bg-[#241B17] border border-white/10 hover:border-[#FF941F]/40 transition-all hover:-translate-y-1 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Year & Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-[#FF941F] font-semibold">
                    {hackathon.year}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1B1411] text-[#70D6A3] border border-[#70D6A3]/20">
                    {hackathon.status}
                  </span>
                </div>

                {/* Title & Organizer */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#FFB347] transition-colors">
                  {hackathon.title}
                </h3>
                <div className="text-xs text-[#C9C2BC] font-mono mb-3">
                  {hackathon.organizer}
                </div>

                {/* Achievement Highlight */}
                {hackathon.achievement && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1B1411] border border-[#FF941F]/30 text-xs font-medium text-[#FFB347] mb-3">
                    <Award className="w-3.5 h-3.5 text-[#FF941F] shrink-0" />
                    <span>{hackathon.achievement}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs text-[#C9C2BC] leading-relaxed mb-4">
                  {hackathon.description}
                </p>

                {/* Role */}
                <div className="text-xs font-mono text-[#5E4D43] mb-4">
                  Role: <span className="text-[#A89689]">{hackathon.role}</span>
                </div>
              </div>

              {/* Technologies & Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {hackathon.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1B1411] text-[#C9C2BC] border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {hackathon.repositoryUrl && (
                  <a
                    href={hackathon.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#1B1411] border border-white/10 text-[#C9C2BC] hover:text-white hover:border-[#FF941F]/40 transition-colors"
                    title="View Hackathon Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
