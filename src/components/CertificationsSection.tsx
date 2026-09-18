import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  FileBadge,
  Terminal
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const CertificationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const certsListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.certs-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      if (certsListRef.current) {
        gsap.from(certsListRef.current.children, {
          scrollTrigger: {
            trigger: certsListRef.current,
            start: 'top 85%',
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="certifications" 
      ref={sectionRef} 
      className="py-20 relative bg-[#090d18] border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="certs-header mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-code mb-3">
            <span>05 // certs.md</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Credentials &amp; <span className="text-teal-400">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Formal recognition and continuous evaluation in systems programming, data structures, and cloud fundamentals.
          </p>
        </div>

        {/* Certifications Cards */}
        <div ref={certsListRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-teal-400/50 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                    <FileBadge className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-code text-teal-400 font-semibold px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-teal-400" />
                    Verified
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-teal-300 transition-colors mb-1">
                  {cert.title}
                </h3>

                <p className="text-xs font-code text-slate-400 mb-3">
                  {cert.issuer} • {cert.date}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-code bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={cert.verifiedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-3 border-t border-slate-800 text-xs font-code text-teal-400 hover:text-teal-300 flex items-center justify-between group-hover:translate-x-0.5 transition-transform"
              >
                <span>Check Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
