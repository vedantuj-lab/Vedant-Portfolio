import React from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, Sparkles, GraduationCap, FolderGit2, Trophy, Layers } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { Workspace3D } from './Workspace3D';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center">
      {/* Background Ambient Warm Lighting */}
      <div className="absolute top-1/4 right-1/4 -z-10 w-[480px] h-[480px] bg-[#FF941F]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 w-[360px] h-[360px] bg-[#FFB347]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main 2-Column Split: Intro & 3D Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT SIDE: Identity, Title, Intro, CTA buttons */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            {/* Subtle Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#241B17] border border-white/10 text-xs text-[#FF941F] font-mono mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hello, I'm</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
              Vedant <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF941F] to-[#FFB347]">Dalvi</span>
            </h1>

            {/* Subtitles */}
            <div className="text-base sm:text-lg font-medium text-[#FFB347] mb-2 font-mono">
              {personalInfo.shortSubtitle}
            </div>
            <div className="text-xs sm:text-sm text-[#C9C2BC] mb-5 tracking-wide">
              {personalInfo.heading}
            </div>

            {/* Introduction prose */}
            <p className="text-sm sm:text-base text-[#C9C2BC] leading-relaxed mb-8 max-w-xl">
              {personalInfo.heroIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#FF941F] to-[#FFB347] text-[#100D0C] font-semibold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#FF941F]/25"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#241B17] hover:bg-[#2F231E] border border-white/12 text-white font-medium text-sm transition-all hover:border-[#FF941F]/50"
              >
                <FileText className="w-4 h-4 text-[#FF941F]" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Profile Links */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.profiles.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#241B17] border border-white/10 text-[#C9C2BC] hover:text-white hover:border-[#FF941F]/60 transition-colors"
                title="GitHub - @vedantuj-lab"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.profiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#241B17] border border-white/10 text-[#C9C2BC] hover:text-[#63B3ED] hover:border-[#63B3ED]/50 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.profiles.email}`}
                className="p-2.5 rounded-xl bg-[#241B17] border border-white/10 text-[#C9C2BC] hover:text-[#FF941F] hover:border-[#FF941F]/60 transition-colors"
                title="Email Vedant Dalvi"
              >
                <Mail className="w-4 h-4" />
              </a>

              <span className="text-xs text-[#5E4D43] font-mono ml-2">
                vedantuj@gmail.com
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: Immersive 3D Developer Workspace */}
          <div className="lg:col-span-7">
            <Workspace3D />
          </div>
        </div>

        {/* 4 Premium Information Cards Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-[#241B17]/80 backdrop-blur-md border border-white/10 hover:border-[#FF941F]/40 transition-all hover:-translate-y-1 group">
            <div className="w-10 h-10 rounded-xl bg-[#1B1411] border border-[#FF941F]/30 flex items-center justify-center text-[#FF941F] mb-3 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mb-1">3rd Year</div>
            <div className="text-xs text-[#C9C2BC] leading-snug">Computer Engineering · SLRTCE</div>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-[#241B17]/80 backdrop-blur-md border border-white/10 hover:border-[#FF941F]/40 transition-all hover:-translate-y-1 group">
            <div className="w-10 h-10 rounded-xl bg-[#1B1411] border border-[#FF941F]/30 flex items-center justify-center text-[#FF941F] mb-3 group-hover:scale-105 transition-transform">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mb-1">25+ Projects</div>
            <div className="text-xs text-[#C9C2BC] leading-snug">Verified Public Repositories</div>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-[#241B17]/80 backdrop-blur-md border border-white/10 hover:border-[#FF941F]/40 transition-all hover:-translate-y-1 group">
            <div className="w-10 h-10 rounded-xl bg-[#1B1411] border border-[#FF941F]/30 flex items-center justify-center text-[#FF941F] mb-3 group-hover:scale-105 transition-transform">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mb-1">Hackathons</div>
            <div className="text-xs text-[#C9C2BC] leading-snug">SIH 2026, HackIndia, edQuest</div>
          </div>

          {/* Card 4 */}
          <div className="p-5 rounded-2xl bg-[#241B17]/80 backdrop-blur-md border border-white/10 hover:border-[#FF941F]/40 transition-all hover:-translate-y-1 group">
            <div className="w-10 h-10 rounded-xl bg-[#1B1411] border border-[#FF941F]/30 flex items-center justify-center text-[#FF941F] mb-3 group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mb-1">9 Domains</div>
            <div className="text-xs text-[#C9C2BC] leading-snug">Full-Stack, 3D Web & Forensics</div>
          </div>
        </div>
      </div>
    </section>
  );
};
