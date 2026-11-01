/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { InteractiveLab3D } from './components/InteractiveLab3D';
import { EngineeringSkills } from './components/EngineeringSkills';
import { JourneyTimeline } from './components/JourneyTimeline';
import { Hackathons } from './components/Hackathons';
import { Certifications } from './components/Certifications';
import { GithubSection } from './components/GithubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#100D0C] text-white selection:bg-[#FF941F]/30 selection:text-white flex flex-col font-['Inter',sans-serif]">
      {/* Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Realistic 3D Workspace */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Me & Education */}
        <About />

        {/* Technical Skills */}
        <Skills />

        {/* Featured Projects & Architectures */}
        <Projects />

        {/* Interactive 3D WebGL & Game Dev Lab */}
        <InteractiveLab3D />

        {/* Research & Systems Engineering */}
        <EngineeringSkills />

        {/* My Development Journey */}
        <JourneyTimeline />

        {/* Hackathons & Achievements */}
        <Hackathons />

        {/* Certifications & Continuous Learning */}
        <Certifications />

        {/* Open Source & GitHub Journey */}
        <GithubSection />

        {/* Contact Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
