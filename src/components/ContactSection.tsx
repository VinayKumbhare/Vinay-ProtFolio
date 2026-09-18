import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Award, 
  Copy, 
  Check, 
  Send, 
  Terminal, 
  MapPin, 
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.contact-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formName || 'Recruiter / Collaborator'}`);
    const body = encodeURIComponent(`Hi Vinay,\n\n${formMessage}\n\nFrom: ${formName} (${formEmail})`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-20 relative bg-[#070b14] border-t border-slate-800/80"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="contact-header text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-code mb-3">
            <span>06 // contact.md</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Let's <span className="text-teal-400">Connect</span> &amp; Build
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Interested in discussions about software development, data science, cloud architecture, or internship opportunities? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive JSON Tribute & Direct Social Cards */}
          <div className="contact-card lg:col-span-6 space-y-6">
            
            {/* Terminal Dict representation */}
            <div className="rounded-2xl bg-[#0d1322] border border-slate-800 p-5 sm:p-6 font-code text-xs sm:text-sm text-slate-300 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400 text-xs">
                <span className="flex items-center gap-1.5 text-teal-400">
                  <Terminal className="w-4 h-4" />
                  contact_info.json
                </span>
                <span>UTF-8</span>
              </div>

              <div className="space-y-1">
                <p className="text-slate-400">{'{'}</p>
                <p className="pl-4">
                  <span className="text-purple-400">"name"</span>: <span className="text-teal-300">"{PERSONAL_INFO.name}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">"email"</span>: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-amber-300 hover:underline">"{PERSONAL_INFO.email}"</a>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">"github"</span>: <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">"github.com/VinayKumbhare"</a>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">"linkedin"</span>: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:underline">"linkedin.com/in/vinay-kumbhare"</a>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">"google_cloud"</span>: <a href={PERSONAL_INFO.googleCloudProfile} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">"120_arcade_badges"</a>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">"location"</span>: <span className="text-slate-300">"Nagpur, India"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">"status"</span>: <span className="text-emerald-400">"building foundations"</span>
                </p>
                <p className="text-slate-400">{'}'}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-slate-500 text-[11px]">Primary Email</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-white text-xs font-code flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied Email!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Social Link Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-600 hover:bg-slate-900 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">GitHub</h4>
                    <p className="text-xs text-slate-400 font-code">@VinayKumbhare</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-200" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#0a66c2]/60 hover:bg-slate-900 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0a66c2]/20 flex items-center justify-center text-[#0a66c2] group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">LinkedIn</h4>
                    <p className="text-xs text-slate-400 font-code">vinay-kumbhare</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#0a66c2]" />
              </a>
            </div>

          </div>

          {/* Right: Quick Direct Contact Form */}
          <div className="contact-card lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-teal-400" />
                <span>Send a Direct Dispatch</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Have a project or opportunity? Send a message directly to my inbox.
              </p>

              {formSent ? (
                <div className="p-6 rounded-2xl bg-teal-500/15 border border-teal-500/30 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-teal-400/20 text-teal-400 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base">Opening Email Client...</h4>
                  <p className="text-xs text-slate-300">
                    Your message draft has been generated. You can also write directly to{' '}
                    <strong className="text-teal-300">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSent(false)}
                    className="mt-2 text-xs font-code text-teal-400 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-code text-slate-400 mb-1.5">
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Alex (Engineering Recruiter)"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-code text-slate-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-code text-slate-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Discussing an internship, project collaboration, or cloud discussion..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-teal-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-400 to-sky-500 hover:from-teal-300 hover:to-sky-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(45,212,191,0.25)] transition-all transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-20 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs font-code text-slate-400">
            built with curiosity, one commit at a time — © 2026 Vinay Kumbhare
          </div>

          <div className="flex items-center gap-4 text-xs font-code text-slate-400">
            <a href="#hero" className="hover:text-teal-400 transition-colors">
              Back to Top ↑
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
