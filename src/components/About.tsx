import React from 'react';
import { Award, BookOpen, Building2, Calendar, Compass, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241B17] border border-white/10 text-xs font-mono text-[#FF941F] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-sm text-[#C9C2BC] mt-2 max-w-2xl">
            Passionate software developer transforming complex ideas into functional, scalable, and immersive web solutions.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: About Me description & Strengths */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-7 rounded-2xl bg-[#241B17]/90 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF941F]/5 rounded-bl-full pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-[#FF941F]" />
                <span>Engineering Mindset & Ambition</span>
              </h3>
              
              <div className="text-sm sm:text-base text-[#C9C2BC] leading-relaxed space-y-4">
                <p>
                  I'm <strong className="text-white font-semibold">Vedant Dalvi</strong>, a third-year Computer Engineering student at <strong className="text-white">Shree L.R. Tiwari College of Engineering (SLRTCE)</strong>. I enjoy building full-stack applications, developing modern interfaces, solving real-world problems and exploring new technologies.
                </p>
                <p>
                  I believe in learning through practical implementation and continuously improving my development skills. My interests span modern frontend and backend development, interactive browser-based 3D environments, game development, animation, artificial intelligence and cybersecurity.
                </p>
                <p>
                  Through academic projects, independent development and hackathons, I continuously explore emerging technologies and develop practical solutions to real-world problems. My goal is to create impactful, scalable and engaging digital experiences through technology.
                </p>
              </div>
            </div>

            {/* Key Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.strengths.map((strength) => (
                <div
                  key={strength.title}
                  className="p-5 rounded-xl bg-[#1B1411] border border-white/10 hover:border-[#FF941F]/40 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#241B17] border border-[#FF941F]/30 flex items-center justify-center text-[#FF941F]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">{strength.title}</h4>
                  </div>
                  <p className="text-xs text-[#C9C2BC] leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Professional Information Cards & Portrait */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Portrait Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/12 bg-[#241B17] shadow-xl group">
              <div className="aspect-[4/5] w-full overflow-hidden relative bg-[#1B1411]">
                <img
                  src={personalInfo.images.portrait}
                  alt="Vedant Dalvi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100D0C] via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xl font-bold text-white tracking-tight">{personalInfo.fullName}</div>
                  <div className="text-xs font-mono text-[#FF941F]">{personalInfo.education.status} · SLRTCE</div>
                </div>
              </div>
            </div>

            {/* Structured Info Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#241B17] border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF941F] mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Degree</span>
                </div>
                <div className="text-sm font-semibold text-white">B.E. Computer Eng.</div>
                <div className="text-[11px] text-[#C9C2BC]">Semester V</div>
              </div>

              <div className="p-4 rounded-xl bg-[#241B17] border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF941F] mb-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>College</span>
                </div>
                <div className="text-sm font-semibold text-white">SLRTCE</div>
                <div className="text-[11px] text-[#C9C2BC]">Mumbai University</div>
              </div>

              <div className="p-4 rounded-xl bg-[#241B17] border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF941F] mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Graduation</span>
                </div>
                <div className="text-sm font-semibold text-white">2028</div>
                <div className="text-[11px] text-[#C9C2BC]">Expected</div>
              </div>

              <div className="p-4 rounded-xl bg-[#241B17] border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF941F] mb-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Core Focus</span>
                </div>
                <div className="text-sm font-semibold text-white">Full-Stack & 3D</div>
                <div className="text-[11px] text-[#C9C2BC]">Web Applications</div>
              </div>
            </div>

            {/* Areas of Interest Tags */}
            <div className="p-4 rounded-xl bg-[#1B1411] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFB347] mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Areas of Specialization</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {personalInfo.areasOfInterest.map((interest) => (
                  <span
                    key={interest}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#241B17] text-[#C9C2BC] border border-white/5 hover:border-[#FF941F]/30 hover:text-white transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
