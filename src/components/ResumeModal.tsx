import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Building2, Calendar, Award, ExternalLink, Eye, Smartphone, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { skillCategories } from '../data/skills';
import { projectsData } from '../data/projects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'pdf'>('interactive');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#1B1411] border border-white/15 shadow-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-[#241B17] border-b border-white/10 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#FF941F]/40 shrink-0">
              <img
                src={personalInfo.images.portrait}
                alt="Vedant Dalvi"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {personalInfo.fullName} — Official Resume
              </h3>
              <p className="text-[11px] font-mono text-[#C9C2BC]">
                Computer Engineering Student · Semester V · SLRTCE
              </p>
            </div>
          </div>

          {/* View Mode Switcher & Download CTA */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 rounded-lg bg-[#100D0C] border border-white/10 text-xs">
              <button
                onClick={() => setActiveTab('interactive')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  activeTab === 'interactive'
                    ? 'bg-[#FF941F] text-[#100D0C] font-semibold shadow-sm'
                    : 'text-[#C9C2BC] hover:text-white'
                }`}
              >
                Interactive
              </button>
              <button
                onClick={() => setActiveTab('pdf')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  activeTab === 'pdf'
                    ? 'bg-[#FF941F] text-[#100D0C] font-semibold shadow-sm'
                    : 'text-[#C9C2BC] hover:text-white'
                }`}
              >
                PDF View
              </button>
            </div>

            <a
              href="/resume.pdf"
              download="Vedant_Dalvi_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#FF941F] to-[#FFB347] text-[#100D0C] text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#FF941F]/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#1B1411] hover:bg-[#2F231E] text-[#C9C2BC] hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab 1: Authentic Embedded PDF Viewer */}
        {activeTab === 'pdf' ? (
          <div className="flex-1 w-full h-[70vh] bg-[#100D0C] p-2">
            <iframe
              src="/resume.pdf#toolbar=0"
              title="Vedant Dalvi Resume PDF"
              className="w-full h-full rounded-xl border border-white/10"
            />
          </div>
        ) : (
          /* Tab 2: Interactive High-Fidelity Breakdown */
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#100D0C] text-[#C9C2BC]">
            {/* Identity & Contact Summary */}
            <div className="border-b border-white/10 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {personalInfo.fullName}
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-[#FF941F] mt-1 font-mono">
                    {personalInfo.title}
                  </p>
                </div>
                <div className="text-xs font-mono space-y-1 sm:text-right shrink-0">
                  <div className="flex items-center sm:justify-end gap-1.5 text-[#C9C2BC]">
                    <Mail className="w-3.5 h-3.5 text-[#FF941F]" />
                    <span className="text-white">{personalInfo.contact.academicEmail}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 text-[#C9C2BC]">
                    <Smartphone className="w-3.5 h-3.5 text-[#FF941F]" />
                    <span>+91 {personalInfo.contact.phone}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 text-[#C9C2BC]">
                    <MapPin className="w-3.5 h-3.5 text-[#FF941F]" />
                    <span>{personalInfo.contact.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-[#1B1411] border border-white/5">
                <div className="text-xs font-mono text-[#FFB347] mb-1 font-semibold">PROFESSIONAL SUMMARY</div>
                <p className="text-xs sm:text-sm text-[#C9C2BC] leading-relaxed">
                  {personalInfo.refinedBio}
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-xs font-bold text-[#FFB347] tracking-wider uppercase font-mono mb-3">
                01. EDUCATION
              </h2>
              <div className="p-4 rounded-xl bg-[#1B1411] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {personalInfo.education.degree}
                  </div>
                  <div className="text-xs text-[#C9C2BC] mt-0.5">
                    {personalInfo.education.institution}
                  </div>
                  <div className="text-xs text-[#FF941F] font-mono mt-1">
                    Status: {personalInfo.education.status} · Expected Graduation: {personalInfo.education.expectedGraduation}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#241B17] text-white border border-white/10">
                    2024 — 2028
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Skills Summary */}
            <div>
              <h2 className="text-xs font-bold text-[#FFB347] tracking-wider uppercase font-mono mb-3">
                02. TECHNICAL SKILLS (FROM RESUME)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skillCategories.map((cat) => (
                  <div key={cat.id} className="p-3.5 rounded-xl bg-[#1B1411] border border-white/10">
                    <h3 className="text-xs font-bold text-white mb-1.5">{cat.name}</h3>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((s) => (
                        <span key={s.name} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#241B17] text-[#C9C2BC] border border-white/5">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Projects Breakdown */}
            <div>
              <h2 className="text-xs font-bold text-[#FFB347] tracking-wider uppercase font-mono mb-3">
                03. SELECTED PROJECTS
              </h2>
              <div className="space-y-3">
                {projectsData.slice(0, 5).map((project) => (
                  <div key={project.id} className="p-4 rounded-xl bg-[#1B1411] border border-white/10">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm font-bold text-white">
                        {project.title}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#241B17] text-[#70D6A3] border border-white/10">
                        {project.status}
                      </span>
                    </div>
                    {project.eventOrContext && (
                      <div className="text-xs text-[#FF941F] font-mono mb-2">
                        {project.eventOrContext} · {project.role}
                      </div>
                    )}
                    <p className="text-xs text-[#C9C2BC] leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#241B17] text-[#A89689]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xs font-bold text-[#FFB347] tracking-wider uppercase font-mono mb-2">
                04. LANGUAGES
              </h2>
              <div className="flex gap-2">
                {personalInfo.languages.map((lang) => (
                  <span key={lang} className="text-xs font-mono px-3 py-1 rounded bg-[#1B1411] text-white border border-white/10">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer Bar */}
        <div className="px-6 py-3.5 bg-[#241B17] border-t border-white/10 flex items-center justify-between">
          <div className="text-xs font-mono text-[#5E4D43]">
            Curated from Vedant_Dalvi_Resume.pdf
          </div>
          <a
            href="/resume.pdf"
            download="Vedant_Dalvi_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF941F] to-[#FFB347] text-[#100D0C] text-xs font-bold shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official Resume PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
