import React, { useState, useMemo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Award, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Cloud, 
  Database, 
  Layers, 
  Calendar, 
  X,
  ChevronDown,
  ChevronUp,
  Flame,
  ShieldCheck
} from 'lucide-react';
import { ARCADE_BADGES, CLOUD_LOGS, PERSONAL_INFO, Badge } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const GoogleArcadeSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const badgesContainerRef = useRef<HTMLDivElement>(null);

  // Filter badges
  const filteredBadges = useMemo(() => {
    return ARCADE_BADGES.filter((badge) => {
      const matchesSearch = badge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        badge.earned.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (selectedTag === 'All') return true;
      if (selectedTag === 'Gemini & AI') {
        return /gemini|multimodal|generative|ai|vertex|rag/i.test(badge.title);
      }
      if (selectedTag === 'Data & Bigtable') {
        return /bigtable|bigquery|lakehouse|data|sql|warehouse/i.test(badge.title);
      }
      if (selectedTag === 'Cloud & Infra') {
        return /cloud|storage|network|compute|iam|kubernetes|gke/i.test(badge.title);
      }
      if (selectedTag === 'Arcade Specials') {
        return /arcade|trivia|base camp|certification|game/i.test(badge.title);
      }
      return true;
    });
  }, [searchQuery, selectedTag]);

  const displayedBadges = filteredBadges.slice(0, visibleCount);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.arcade-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.arcade-stat-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="arcade-badges" 
      ref={sectionRef} 
      className="py-20 relative bg-[#080d1a] border-t border-slate-800/80 overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="arcade-header flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-code mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>04 // google_cloud_arcade.log</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Google Cloud <span className="text-amber-400">Arcade</span> Badges
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-2">
              Demonstrated hands-on expertise with 120+ verified skill badges earned across Google Cloud Platform, Bigtable, Lakehouse architectures, and Applied Generative AI.
            </p>
          </div>

          {/* Official Verification CTA */}
          <a
            href={PERSONAL_INFO.googleCloudProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_18px_rgba(251,191,36,0.3)] transition-all self-start md:self-auto shrink-0"
          >
            <ShieldCheck className="w-4 h-4 text-slate-950" />
            <span>Verify on Google Skills</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Highlight Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="arcade-stat-card p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {ARCADE_BADGES.length || '120'}+
              </div>
              <div className="text-xs text-slate-400 font-sans">Verified Badges</div>
            </div>
          </div>

          <div className="arcade-stat-card p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">Level 3</div>
              <div className="text-xs text-slate-400 font-sans">Applied Gen AI</div>
            </div>
          </div>

          <div className="arcade-stat-card p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">Arcade</div>
              <div className="text-xs text-slate-400 font-sans">Base Camp &amp; Cert Zone</div>
            </div>
          </div>

          <div className="arcade-stat-card p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">Big Data</div>
              <div className="text-xs text-slate-400 font-sans">Bigtable &amp; Lakehouse</div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline Logs (from original site cloud.log) */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80">
          <h3 className="font-code text-xs sm:text-sm font-bold text-slate-300 mb-4 flex items-center gap-2">
            <span className="text-teal-400">&gt;</span>
            <span>ARCADE RECENT ACTIVITY TIMELINE</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {CLOUD_LOGS.map((log, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-slate-800/40 border border-slate-800 text-xs font-code flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="text-[10px] text-slate-400 flex items-center gap-2">
                    <span className="text-amber-400 font-semibold">[{log.tag}]</span>
                    <span>{log.date}</span>
                  </div>
                  <p className="text-slate-200 font-sans text-xs font-medium leading-snug">
                    {log.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Category Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Search box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 120+ badges..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400/80 focus:outline-none text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 font-code transition-colors"
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

          {/* Quick preset chips */}
          <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto">
            {[
              'All',
              'Gemini & AI',
              'Data & Bigtable',
              'Cloud & Infra',
              'Arcade Specials'
            ].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-lg text-xs font-code transition-all ${
                  selectedTag === tag
                    ? 'bg-amber-400/20 text-amber-300 border border-amber-400/50 font-semibold'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Badges Grid */}
        <div 
          ref={badgesContainerRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {displayedBadges.map((badge, index) => (
            <div
              key={index}
              onClick={() => setSelectedBadge(badge)}
              className="cursor-pointer p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-900 transition-all duration-200 flex flex-col items-center text-center group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/5"
            >
              {/* Badge Icon Image from Google Skills CDN */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center mb-3 relative group-hover:scale-105 transition-transform duration-200">
                <img
                  src={badge.image}
                  alt={badge.title}
                  loading="lazy"
                  className="w-full h-full object-contain filter drop-shadow-md"
                  onError={(e) => {
                    // Fallback to stylized icon if CDN fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Title */}
              <h4 className="text-xs font-semibold text-slate-200 group-hover:text-amber-300 line-clamp-2 leading-snug mb-1">
                {badge.title}
              </h4>

              {/* Date */}
              <span className="text-[10px] font-code text-slate-500 mt-auto">
                {badge.earned.replace('Earned ', '')}
              </span>
            </div>
          ))}
        </div>

        {/* Load More / Collapse Controls */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span className="text-xs font-code text-slate-400">
            Showing <strong className="text-amber-400">{displayedBadges.length}</strong> of{' '}
            <strong className="text-slate-200">{filteredBadges.length}</strong> badges
          </span>

          {filteredBadges.length > 12 && (
            <button
              type="button"
              onClick={() => {
                if (visibleCount >= filteredBadges.length) {
                  setVisibleCount(12);
                } else {
                  setVisibleCount((prev) => Math.min(prev + 18, filteredBadges.length));
                }
              }}
              className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700 text-xs font-code font-semibold flex items-center gap-2 transition-colors"
            >
              {visibleCount >= filteredBadges.length ? (
                <>
                  <ChevronUp className="w-4 h-4 text-amber-400" />
                  <span>Show Less (Top 12)</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 text-amber-400" />
                  <span>Load More Badges (+18)</span>
                </>
              )}
            </button>
          )}

          {visibleCount < filteredBadges.length && (
            <button
              type="button"
              onClick={() => setVisibleCount(filteredBadges.length)}
              className="text-xs font-code text-teal-400 hover:underline"
            >
              Show All {filteredBadges.length}
            </button>
          )}
        </div>

      </div>

      {/* Badge Inspection Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-[#0e1628] border border-slate-700 p-6 sm:p-8 shadow-2xl text-center space-y-5">
            <button
              type="button"
              onClick={() => setSelectedBadge(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-32 h-32 mx-auto rounded-2xl flex items-center justify-center p-2 bg-slate-900/60 border border-slate-800">
              <img
                src={selectedBadge.image}
                alt={selectedBadge.title}
                className="w-full h-full object-contain filter drop-shadow-xl"
              />
            </div>

            <div>
              <span className="text-xs font-code text-amber-400 font-bold uppercase tracking-wider flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                VERIFIED SKILL BADGE
              </span>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white mt-1">
                {selectedBadge.title}
              </h3>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-code text-slate-300">
              <div className="flex items-center justify-between py-1 border-b border-slate-800">
                <span className="text-slate-500">Issuer</span>
                <span className="text-slate-200 font-medium">Google Cloud Skills Boost</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-800">
                <span className="text-slate-500">Earned</span>
                <span className="text-teal-400">{selectedBadge.earned}</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500">Verification</span>
                <span className="text-emerald-400 font-semibold">100% Cryptographic Check</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedBadge(null)}
                className="px-4 py-2 rounded-xl text-xs font-code text-slate-400 hover:text-white"
              >
                Close
              </button>

              <a
                href={selectedBadge.badgeUrl || PERSONAL_INFO.googleCloudProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs font-code flex items-center gap-1.5 shadow-md"
              >
                <span>Verify on Skills.google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
