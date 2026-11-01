import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, X, CheckCircle2, AlertTriangle, Layers, ChevronRight, Eye } from 'lucide-react';
import { projectsData, Project } from '../data/projects';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'AI & Cyber', '3D & WebGL', 'Hackathon'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Deployed & Active':
        return (
          <span className="text-[11px] font-mono text-[#70D6A3] bg-[#70D6A3]/10 px-2 py-0.5 rounded border border-[#70D6A3]/20">
            Deployed & Active
          </span>
        );
      case 'Architecture & Prototype':
        return (
          <span className="text-[11px] font-mono text-[#FF941F] bg-[#FF941F]/10 px-2 py-0.5 rounded border border-[#FF941F]/20">
            Architecture & Prototype
          </span>
        );
      case 'Hackathon Sprint Build':
        return (
          <span className="text-[11px] font-mono text-[#FFB347] bg-[#FFB347]/10 px-2 py-0.5 rounded border border-[#FFB347]/20">
            Hackathon Sprint
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-mono text-[#63B3ED] bg-[#63B3ED]/10 px-2 py-0.5 rounded border border-[#63B3ED]/20">
            In Active Dev
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241B17] border border-white/10 text-xs font-mono text-[#FF941F] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-sm text-[#C9C2BC] mt-2 max-w-xl">
              Authentic software systems, hackathon sprint architectures, and full-stack implementations from verified GitHub repositories.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#241B17] border border-white/10 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#FF941F] to-[#FFB347] text-[#100D0C] font-semibold shadow-md'
                    : 'text-[#C9C2BC] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#241B17] border border-white/10 overflow-hidden flex flex-col hover:border-[#FF941F]/40 transition-all duration-300 hover:-translate-y-1 group shadow-lg"
            >
              {/* Project Preview Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#1B1411]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241B17] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3">
                  {getStatusBadge(project.status)}
                </div>
                {project.eventOrContext && (
                  <div className="absolute top-3 right-3 text-[10px] font-mono text-[#C9C2BC] bg-[#100D0C]/80 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                    {project.eventOrContext}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF941F] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#C9C2BC] leading-relaxed mb-4 line-clamp-3">
                    {project.tagline || project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1B1411] text-[#C9C2BC] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-[#1B1411] text-[#5E4D43]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF941F] hover:text-[#FFB347] transition-colors"
                  >
                    <span>View Architecture</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#1B1411] border border-white/10 text-[#C9C2BC] hover:text-white hover:border-[#FF941F]/40 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#1B1411] border border-white/10 text-[#C9C2BC] hover:text-white hover:border-[#FF941F]/40 transition-colors"
                        title="Live Deployment"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Architecture Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1B1411] border border-white/15 p-6 sm:p-8 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-[#241B17] text-[#C9C2BC] hover:text-white border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="pr-12 mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {getStatusBadge(selectedProject.status)}
                  <span className="text-xs font-mono text-[#C9C2BC]">{selectedProject.category}</span>
                  {selectedProject.eventOrContext && (
                    <span className="text-xs font-mono text-[#FF941F]">· {selectedProject.eventOrContext}</span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-[#FFB347] font-mono mt-1">
                  Role: {selectedProject.role}
                </p>
              </div>

              {/* Modal Image */}
              <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 border border-white/10 bg-[#100D0C]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Problem & Solution Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#241B17] border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#FFB347] mb-2 font-mono">
                    <AlertTriangle className="w-4 h-4 text-[#FF941F]" />
                    <span>Problem Statement</span>
                  </div>
                  <p className="text-xs text-[#C9C2BC] leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#241B17] border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#70D6A3] mb-2 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#70D6A3]" />
                    <span>Solution Architecture</span>
                  </div>
                  <p className="text-xs text-[#C9C2BC] leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Key Features List */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#FF941F]" />
                  <span>Key Features & Specifications</span>
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#C9C2BC]">
                      <span className="text-[#FF941F] mt-0.5">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xs font-mono text-[#C9C2BC] mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#241B17] text-white border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/10">
                <div className="text-xs text-[#5E4D43] font-mono">
                  Verified GitHub Repository Integration
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#241B17] hover:bg-[#2F231E] border border-white/10 text-white text-xs font-semibold transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View GitHub Repo</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF941F] to-[#FFB347] text-[#100D0C] text-xs font-bold transition-all shadow-md"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
