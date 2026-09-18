import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { GoogleArcadeSection } from './components/GoogleArcadeSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#e2e8f0] relative selection:bg-amber-400 selection:text-slate-950">
      {/* Background Cybernetic Dot Grid */}
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-40 z-0" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectShowcase />
        <GoogleArcadeSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
}
