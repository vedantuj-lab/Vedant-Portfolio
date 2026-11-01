import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0908] border-t border-white/10 py-12 text-[#C9C2BC] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#241B17] border border-[#FF941F]/40 flex items-center justify-center font-bold text-sm text-[#FF941F]">
              VD
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight">
                {personalInfo.fullName}
              </div>
              <div className="text-[11px] text-[#A89689] font-mono">
                Computer Engineering Student · Full-Stack Developer
              </div>
            </div>
          </div>

          {/* Core Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#journey" className="hover:text-white transition-colors">Journey</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
            <a href="#lab3d" className="hover:text-white transition-colors">3D Lab</a>
            <a href="#github" className="hover:text-white transition-colors">GitHub</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.profiles.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#1B1411] border border-white/10 hover:text-white hover:border-[#FF941F]/40 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.profiles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#1B1411] border border-white/10 hover:text-white hover:border-[#63B3ED]/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.profiles.email}`}
              className="p-2 rounded-lg bg-[#1B1411] border border-white/10 hover:text-white hover:border-[#FF941F]/40 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#241B17] hover:bg-[#FF941F] hover:text-[#100D0C] text-white border border-white/10 transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Tagline & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[#5E4D43] font-mono">
          <div>
            &copy; 2026 Vedant Dalvi. All Rights Reserved.
          </div>
          <div>
            "Building ideas into meaningful digital experiences."
          </div>
        </div>
      </div>
    </footer>
  );
};
