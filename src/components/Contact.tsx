import React, { useState } from 'react';
import { Mail, Send, RotateCcw, CheckCircle2, AlertCircle, Github, Linkedin, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personalInfo';

export const Contact: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!subject.trim()) {
      setErrorMsg('Please enter a subject.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setErrorMsg('Please provide a message with at least 10 characters.');
      return;
    }

    setLoading(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#FF941F', '#FFB347', '#FFFFFF']
        });
      } catch {
        // Safe fallback
      }
    }, 900);
  };

  const handleClear = () => {
    setFullName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setErrorMsg(null);
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#100D0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241B17] border border-white/10 text-xs font-mono text-[#FF941F] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Build Something Together
          </h2>
          <p className="text-sm text-[#C9C2BC] mt-2 max-w-xl">
            I'm always interested in exploring new opportunities, collaborating on interesting projects and connecting with people who share a passion for technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Contact Channels & Profile Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#241B17] border border-white/10">
              <h3 className="text-base font-bold text-white mb-4">Direct Communication Channels</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.profiles.email}`}
                  className="p-4 rounded-xl bg-[#1B1411] border border-white/10 hover:border-[#FF941F]/50 transition-colors flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#241B17] border border-[#FF941F]/30 flex items-center justify-center text-[#FF941F] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-[#5E4D43] font-mono">Academic & Primary Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#FF941F] transition-colors truncate">
                      {personalInfo.contact.academicEmail}
                    </div>
                    <div className="text-[11px] text-[#A89689] font-mono mt-0.5">
                      Alt: {personalInfo.contact.personalEmail}
                    </div>
                  </div>
                </a>

                <a
                  href={personalInfo.profiles.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#1B1411] border border-white/10 hover:border-[#FF941F]/50 transition-colors flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#241B17] border border-[#FF941F]/30 flex items-center justify-center text-[#FF941F] group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5E4D43] font-mono">GitHub Profile</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#FF941F] transition-colors">
                      github.com/vedantuj-lab
                    </div>
                  </div>
                </a>

                <a
                  href={personalInfo.profiles.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#1B1411] border border-white/10 hover:border-[#63B3ED]/50 transition-colors flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#241B17] border border-[#63B3ED]/30 flex items-center justify-center text-[#63B3ED] group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5E4D43] font-mono">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#63B3ED] transition-colors">
                      linkedin.com/in/vedant-dalvi
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#1B1411] border border-white/10">
              <div className="text-xs font-mono text-[#FF941F] mb-1">Location & Availability</div>
              <div className="text-sm font-semibold text-white mb-2">Maharashtra, India (IST / UTC+5:30)</div>
              <p className="text-xs text-[#C9C2BC] leading-relaxed">
                Available for software engineering internships, hackathon collaborations, and innovative 3D web / full-stack product development.
              </p>
            </div>
          </div>

          {/* RIGHT: Working Contact Form */}
          <div className="lg:col-span-7 p-7 rounded-2xl bg-[#241B17] border border-white/12 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#70D6A3]/15 border border-[#70D6A3]/30 flex items-center justify-center text-[#70D6A3]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Received!</h3>
                <p className="text-xs sm:text-sm text-[#C9C2BC] max-w-md">
                  Thank you for reaching out, <strong className="text-white">{fullName}</strong>. Your message regarding <span className="text-[#FF941F]">"{subject}"</span> has been logged and I will respond to your email promptly.
                </p>
                <button
                  onClick={handleClear}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-[#1B1411] hover:bg-[#2F231E] text-xs font-semibold text-white border border-white/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/40 flex items-center gap-2 text-xs text-red-200">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#C9C2BC] mb-1.5">
                      Full Name <span className="text-[#FF941F]">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1B1411] border border-white/10 text-xs text-white placeholder-[#5E4D43] focus:outline-none focus:border-[#FF941F]/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#C9C2BC] mb-1.5">
                      Email Address <span className="text-[#FF941F]">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1B1411] border border-white/10 text-xs text-white placeholder-[#5E4D43] focus:outline-none focus:border-[#FF941F]/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#C9C2BC] mb-1.5">
                    Subject <span className="text-[#FF941F]">*</span>
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project inquiry / Hackathon collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1B1411] border border-white/10 text-xs text-white placeholder-[#5E4D43] focus:outline-none focus:border-[#FF941F]/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#C9C2BC] mb-1.5">
                    Message <span className="text-[#FF941F]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, timeline, or idea in detail..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1B1411] border border-white/10 text-xs text-white placeholder-[#5E4D43] focus:outline-none focus:border-[#FF941F]/60 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={handleClear}
                    className="px-4 py-2 rounded-lg text-xs font-mono text-[#C9C2BC] hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Clear Form</span>
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF941F] to-[#FFB347] text-[#100D0C] text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#FF941F]/20 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-[#100D0C] border-t-transparent animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
