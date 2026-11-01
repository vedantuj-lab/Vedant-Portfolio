import React, { useState } from 'react';
import { Award, BookOpen, ExternalLink, Sparkles, CheckCircle, X } from 'lucide-react';
import { certificationsData, Certification } from '../data/certifications';

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const categories = ['All', 'Technical Courses', 'Professional Courses', 'Hackathons & Competitions'];

  const filteredCerts = selectedCategory === 'All'
    ? certificationsData
    : certificationsData.filter(c => c.category === selectedCategory);

  return (
    <section className="py-24 relative bg-[#16100E]/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241B17] border border-white/10 text-xs font-mono text-[#FF941F] mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Continuous Learning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Certifications & Courses
            </h2>
            <p className="text-sm text-[#C9C2BC] mt-2 max-w-xl">
              Verified academic coursework, specialized technical tracks, and professional computer engineering learning.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#241B17] border border-white/10 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#FF941F] text-[#100D0C] font-semibold shadow-md'
                    : 'text-[#C9C2BC] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-[#241B17] border border-white/10 hover:border-[#FF941F]/40 transition-all hover:-translate-y-1 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-[#FF941F]">
                    {cert.issueDate}
                  </span>
                  <span className="text-[11px] font-mono text-[#C9C2BC] bg-[#1B1411] px-2 py-0.5 rounded border border-white/5">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#FFB347] transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs text-[#C9C2BC] font-mono mb-3">
                  {cert.organization}
                </div>

                <p className="text-xs text-[#C9C2BC] leading-relaxed mb-4">
                  {cert.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1B1411] text-[#A89689] border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-semibold text-[#FF941F] hover:text-[#FFB347] transition-colors"
                >
                  View Details
                </button>
                <div className="text-[11px] font-mono text-[#5E4D43]">
                  Verified Record
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg rounded-2xl bg-[#1B1411] border border-white/15 p-6 sm:p-7 shadow-2xl">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#241B17] text-[#C9C2BC] hover:text-white border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#FF941F] mb-2">
                <Award className="w-4 h-4" />
                <span>{selectedCert.category} · {selectedCert.issueDate}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {selectedCert.title}
              </h3>
              <div className="text-xs font-mono text-[#C9C2BC] mb-4">
                Issuing Organization: {selectedCert.organization}
              </div>

              <div className="p-4 rounded-xl bg-[#241B17] border border-white/10 mb-4">
                <p className="text-xs text-[#C9C2BC] leading-relaxed">
                  {selectedCert.summary}
                </p>
              </div>

              <div className="mb-6">
                <div className="text-xs font-mono text-[#FFB347] mb-2">Skills & Knowledge Acquired</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[#241B17] text-white border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-lg bg-[#241B17] text-xs font-semibold text-white hover:bg-[#2F231E] border border-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
