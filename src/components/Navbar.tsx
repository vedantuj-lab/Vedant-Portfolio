import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'achievements', 'lab3d', 'github', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#100D0C]/85 backdrop-blur-xl border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a href="#hero" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
          <div className="w-9 h-9 rounded-lg bg-[#241B17] border border-[#FF941F]/40 flex items-center justify-center font-bold text-sm text-[#FF941F] group-hover:border-[#FF941F] transition-colors shadow-sm">
            VD
          </div>
          <span className="text-base font-bold tracking-tight text-white group-hover:text-[#FFB347] transition-colors">
            Vedant Dalvi
          </span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#C9C2BC]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                  isActive ? 'text-[#FF941F] font-semibold' : 'hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF941F] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary action button & Mobile Menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#100D0C] bg-gradient-to-r from-[#FF941F] to-[#FFB347] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#FF941F]/20 whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>

          <a
            href={personalInfo.profiles.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg bg-[#241B17] border border-white/10 text-[#C9C2BC] hover:text-white hover:border-[#FF941F]/50 transition-colors"
            title="GitHub Profile"
          >
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#241B17] border border-white/10 text-[#C9C2BC] hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1B1411]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-[#C9C2BC] hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#100D0C] bg-gradient-to-r from-[#FF941F] to-[#FFB347] rounded-lg shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
