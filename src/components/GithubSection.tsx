import React, { useState } from 'react';
import { Github, ExternalLink, Star, GitFork, Search, Sparkles, Code2 } from 'lucide-react';
import { staticGitHubRepos, GitHubRepo } from '../data/githubRepos';
import { personalInfo } from '../data/personalInfo';

export const GithubSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLang, setSelectedLang] = useState<string>('All');

  const languages = ['All', 'TypeScript', 'Python', 'C#'];

  const filteredRepos = staticGitHubRepos.filter((repo) => {
    const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLang = selectedLang === 'All' || repo.language === selectedLang;
    return matchesSearch && matchesLang;
  });

  return (
    <section id="github" className="py-24 relative bg-[#1B1411]/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241B17] border border-white/10 text-xs font-mono text-[#FF941F] mb-3">
              <Github className="w-3.5 h-3.5" />
              <span>Open Source & Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              My GitHub Journey
            </h2>
            <p className="text-sm text-[#C9C2BC] mt-2 max-w-xl">
              Real-time directory of 25+ open-source repositories under <code className="text-[#FF941F] font-mono">@vedantuj-lab</code>.
            </p>
          </div>

          <a
            href={personalInfo.profiles.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF941F] to-[#FFB347] text-[#100D0C] font-semibold text-xs hover:brightness-110 active:scale-95 transition-all shadow-md w-fit"
          >
            <Github className="w-4 h-4" />
            <span>Explore @vedantuj-lab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* GitHub Profile Banner Card */}
        <div className="p-6 rounded-2xl bg-[#241B17] border border-white/10 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#100D0C] border border-[#FF941F]/40 flex items-center justify-center text-[#FF941F]">
              <Github className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">vedantuj-lab</h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#100D0C] text-[#FF941F] border border-[#FF941F]/20">
                  Public Profile
                </span>
              </div>
              <p className="text-xs text-[#C9C2BC] mt-0.5">
                Full-Stack Developer & Computer Engineering Student · SLRTCE
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-center border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <div>
              <div className="text-xl font-bold text-white font-mono">30+</div>
              <div className="text-[11px] text-[#C9C2BC]">Repositories</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white font-mono">TypeScript</div>
              <div className="text-[11px] text-[#C9C2BC]">Primary Language</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white font-mono">Active</div>
              <div className="text-[11px] text-[#C9C2BC]">Development</div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#5E4D43] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter repositories..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#241B17] border border-white/10 text-xs text-white placeholder-[#5E4D43] focus:outline-none focus:border-[#FF941F]/60 transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 self-start sm:self-auto overflow-x-auto max-w-full">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap shrink-0 ${
                  selectedLang === lang
                    ? 'bg-[#FF941F] text-[#100D0C] font-bold shadow-md'
                    : 'bg-[#241B17] text-[#C9C2BC] hover:text-white border border-white/5'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#241B17]/70 border border-white/10 hover:border-[#FF941F]/50 transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#FF941F] transition-colors truncate">
                    {repo.name}
                  </h4>
                  <ExternalLink className="w-3.5 h-3.5 text-[#5E4D43] group-hover:text-white transition-colors shrink-0" />
                </div>
                <p className="text-xs text-[#C9C2BC] leading-relaxed mb-4 line-clamp-2">
                  {repo.description || "Public repository containing source code and architecture components."}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono text-[#5E4D43]">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${repo.language === 'TypeScript' ? 'bg-[#3178C6]' : repo.language === 'Python' ? 'bg-[#3776AB]' : 'bg-[#178600]'}`} />
                  <span className="text-[#A89689]">{repo.language || 'Code'}</span>
                </div>
                <span>Updated {repo.updatedAt}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
