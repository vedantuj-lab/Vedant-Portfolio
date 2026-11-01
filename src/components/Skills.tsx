import React, { useState } from 'react';
import { Sparkles, Code, Layout, Box, Film, Server, Cpu, Shield } from 'lucide-react';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages': return <Code className="w-4 h-4 text-[#FF941F]" />;
      case 'frontend': return <Layout className="w-4 h-4 text-[#FF941F]" />;
      case '3d-web': return <Box className="w-4 h-4 text-[#FF941F]" />;
      case 'animation': return <Film className="w-4 h-4 text-[#FF941F]" />;
      case 'backend-cloud': return <Server className="w-4 h-4 text-[#FF941F]" />;
      case 'ai-tools': return <Cpu className="w-4 h-4 text-[#FF941F]" />;
      case 'cybersecurity': return <Shield className="w-4 h-4 text-[#FF941F]" />;
      default: return <Sparkles className="w-4 h-4 text-[#FF941F]" />;
    }
  };

  const displayedCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-[#16100E]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241B17] border border-white/10 text-xs font-mono text-[#FF941F] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              My Technical Skills
            </h2>
            <p className="text-sm text-[#C9C2BC] mt-2 max-w-xl">
              Production stacks, WebGL frameworks, backend systems, and modern AI developer workflows verified through project implementations.
            </p>
          </div>

          {/* Interactive Category Segmented Control */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#241B17] border border-white/10 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'all'
                  ? 'bg-[#FF941F] text-[#100D0C] font-semibold shadow-md'
                  : 'text-[#C9C2BC] hover:text-white'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                  activeTab === cat.id
                    ? 'bg-[#FF941F] text-[#100D0C] font-semibold shadow-md'
                    : 'text-[#C9C2BC] hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {displayedCategories.map((cat) => (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#241B17] border border-white/10">
                  {getCategoryIcon(cat.id)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{cat.name}</h3>
                  <p className="text-xs text-[#C9C2BC]">{cat.description}</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-[#241B17]/70 backdrop-blur-sm border border-white/10 hover:border-[#FF941F]/50 transition-all hover:-translate-y-1 group relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-sm font-semibold text-white group-hover:text-[#FF941F] transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#5E4D43] group-hover:text-[#FFB347]/60 transition-colors">
                        ●
                      </span>
                    </div>
                    {skill.description && (
                      <p className="text-xs text-[#C9C2BC] leading-relaxed line-clamp-2">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
