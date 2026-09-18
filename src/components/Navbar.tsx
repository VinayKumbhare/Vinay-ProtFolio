import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Menu, 
  X, 
  Terminal, 
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Arcade Badges', href: '#arcade-badges', badge: '120+' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-teal-400 via-sky-400 to-amber-400 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0b0f19]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-slate-100 hover:text-white transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 border border-teal-500/40 flex items-center justify-center text-teal-400 group-hover:border-teal-400 group-hover:shadow-[0_0_12px_rgba(45,212,191,0.35)] transition-all">
              <Terminal className="w-5 h-5 text-teal-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight flex items-center gap-1">
                vinay<span className="text-teal-400">.dev</span>
              </span>
              <span className="text-[10px] text-slate-400 font-code -mt-1 hidden sm:inline-block">
                cs(data_science)
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors relative flex items-center gap-1.5 group"
              >
                {link.name}
                {link.badge && (
                  <span className="px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {link.badge}
                  </span>
                )}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Action CTAs and Social Links */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-700"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-[#0a66c2] hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-700"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Direct Connect button */}
            <a
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-teal-400 to-sky-500 hover:from-teal-300 hover:to-sky-400 text-slate-950 shadow-[0_0_15px_rgba(45,212,191,0.25)] hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0e1628]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/70 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800/70 text-slate-300 hover:text-white"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800/70 text-slate-300 hover:text-sky-400"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.googleCloudProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800/70 text-amber-400 hover:text-amber-300 flex items-center gap-1 text-xs font-code"
                  title="Google Arcade Profile"
                  aria-label="Google Arcade Profile"
                >
                  <Award className="w-4 h-4" />
                </a>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-teal-400 text-slate-950 font-sans"
              >
                Get in touch
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
