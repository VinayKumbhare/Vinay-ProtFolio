import React, { useState, useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  FileBadge,
  Terminal,
  Search,
  X,
  Copy,
  Check,
  Sparkles,
  Cloud,
  Code2,
  Database,
  Cpu,
  Eye,
  Stamp
} from 'lucide-react';
import { CERTIFICATIONS, Certification, PERSONAL_INFO } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const CertificationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const certsListRef = useRef<HTMLDivElement>(null);

  // Filtered certifications
  const filteredCerts = useMemo(() => {
    return CERTIFICATIONS.filter((cert) => {
      const matchesSearch = 
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedCategory === 'All') return true;
      return cert.category === selectedCategory;
    });
  }, [selectedCategory, searchQuery]);

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
          y: 25,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  const handleCopyCredentialId = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCategoryIcon = (category: Certification['category']) => {
    switch (category) {
      case 'Cloud & AI':
        return <Cloud className="w-5 h-5 text-amber-400" />;
      case 'Programming':
        return <Code2 className="w-5 h-5 text-teal-400" />;
      case 'Data Science':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'Systems':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Award className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section 
      id="certifications" 
      ref={sectionRef} 
      className="py-20 relative bg-[#090d18] border-t border-slate-800/80"
    >
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="certs-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-code mb-3">
              <FileBadge className="w-3.5 h-3.5" />
              <span>05 // certs.md</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Credentials &amp; <span className="text-teal-400">Certifications</span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-2">
              Formal verification across systems programming, applied generative AI, Cloud Bigtable architecture, and data analytics.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-code text-slate-400">
              Total Verified: <strong className="text-teal-400">{CERTIFICATIONS.length}</strong>
            </span>
          </div>
        </div>

        {/* Filter bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {['All', 'Cloud & AI', 'Programming', 'Data Science', 'Systems'].map((cat) => {
              const count = cat === 'All' 
                ? CERTIFICATIONS.length 
                : CERTIFICATIONS.filter(c => c.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-code transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-teal-400/20 text-teal-300 border border-teal-400/50 font-semibold shadow-sm'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-400">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certificates & skills..."
              className="w-full pl-10 pr-8 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-teal-400/80 focus:outline-none text-xs text-slate-200 placeholder:text-slate-500 font-code transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Certifications Cards Grid */}
        <div ref={certsListRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="cursor-pointer p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-teal-400/50 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5"
            >
              <div>
                {/* Card Top: Category Icon + Verified Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getCategoryIcon(cert.category)}
                  </div>

                  <div className="flex items-center gap-2">
                    {cert.featured && (
                      <span className="text-[10px] font-code text-amber-400 font-bold px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        Featured
                      </span>
                    )}
                    <span className="text-xs font-code text-teal-400 font-semibold px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-teal-400" />
                      Verified
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white group-hover:text-teal-300 transition-colors mb-1">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <p className="text-xs font-code text-slate-400 mb-3 flex items-center gap-2">
                  <span className="text-slate-300">{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.date}</span>
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-code bg-slate-800/90 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Credential ID + Actions */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                {cert.credentialId ? (
                  <button
                    type="button"
                    onClick={(e) => handleCopyCredentialId(cert.credentialId!, e)}
                    className="text-[11px] font-code text-slate-400 hover:text-slate-200 flex items-center gap-1 transition-colors"
                    title="Copy Credential ID"
                  >
                    {copiedId === cert.credentialId ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">ID Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="truncate max-w-[120px]">{cert.credentialId}</span>
                      </>
                    )}
                  </button>
                ) : (
                  <span className="text-[11px] font-code text-slate-500">Verified Curriculum</span>
                )}

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCert(cert);
                    }}
                    className="text-xs font-code text-teal-400 hover:text-teal-300 flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-12 text-slate-400 font-code text-xs">
            No certificates match "{searchQuery}".
          </div>
        )}

      </div>

      {/* Interactive Certificate Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0d1424] border-2 border-teal-500/40 p-6 sm:p-10 shadow-[0_0_50px_rgba(45,212,191,0.15)] space-y-6">
            
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveCert(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Header Banner */}
            <div className="text-center space-y-2 border-b border-slate-800/80 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-code font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>OFFICIAL RECORD OF ACHIEVEMENT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight pt-1">
                Certificate of Technical Competency
              </h3>
              <p className="text-xs font-code text-slate-400">
                Issued by <strong className="text-teal-300">{activeCert.issuer}</strong>
              </p>
            </div>

            {/* Certificate Body */}
            <div className="space-y-4 text-center">
              <p className="text-xs text-slate-400 font-code uppercase tracking-wider">
                This document certifies that
              </p>

              <div className="text-2xl sm:text-3xl font-display font-bold text-amber-400">
                {PERSONAL_INFO.name}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                has successfully demonstrated verified proficiency, coursework evaluation, and technical mastery in:
              </p>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
                <div className="text-lg sm:text-xl font-display font-bold text-white">
                  {activeCert.title}
                </div>
                <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                  {activeCert.description}
                </p>
              </div>

              {/* Syllabus / Skills Verified */}
              <div className="pt-2">
                <span className="text-[11px] font-code text-slate-400 block mb-2">
                  VERIFIED COMPETENCY DOMAINS:
                </span>
                <div className="flex flex-wrap justify-center gap-2">
                  {activeCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-code bg-teal-500/10 text-teal-300 border border-teal-500/30"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metadata details */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left pt-2 font-code text-xs">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">ISSUED DATE</span>
                  <span className="text-slate-200 font-medium">{activeCert.date}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">CATEGORY</span>
                  <span className="text-teal-300 font-medium">{activeCert.category}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-slate-500 block text-[10px]">CREDENTIAL ID</span>
                  <span className="text-amber-400 font-mono text-[11px] truncate block">
                    {activeCert.credentialId || 'ACADEMIC-VERIFIED'}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] font-code text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                100% Cryptographic Verification Available
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="px-4 py-2 rounded-xl text-xs font-code text-slate-400 hover:text-white"
                >
                  Close
                </button>

                <a
                  href={activeCert.verifiedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs font-code flex items-center gap-1.5 shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-all"
                >
                  <span>Verify at Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
