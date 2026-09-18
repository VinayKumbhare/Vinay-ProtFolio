import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code2, 
  Cpu, 
  FileCode2, 
  Database, 
  Cloud, 
  Sparkles, 
  Layers, 
  Award, 
  BarChart3, 
  Binary, 
  TrendingUp, 
  GitBranch, 
  Terminal, 
  SquareTerminal,
  BookOpen,
  CheckCircle,
  Clock
} from 'lucide-react';
import { SKILLS, Skill } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Languages', 'Cloud & AI', 'Data Science', 'Tools'];

  const filteredSkills = activeCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeCategory);

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'FileCode2': return <FileCode2 className="w-5 h-5 text-sky-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-rose-400" />;
      case 'Binary': return <Binary className="w-5 h-5 text-cyan-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-orange-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-teal-400" />;
      case 'SquareTerminal': return <SquareTerminal className="w-5 h-5 text-slate-300" />;
      default: return <Code2 className="w-5 h-5 text-teal-400" />;
    }
  };

  const getStatusColor = (status: Skill['status']) => {
    switch (status) {
      case 'Proficient':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'Hands-on':
        return 'bg-sky-500/15 text-sky-300 border-sky-500/30';
      case 'Learning':
        return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  // GSAP ScrollTrigger animation for skills cards
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.from('.skills-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Cards staggered entrance
      if (cardsContainerRef.current) {
        gsap.from(cardsContainerRef.current.children, {
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: 'top 85%',
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-20 relative bg-[#090d17]/80 border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="skills-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-code mb-3">
              <span>02 // skillset.json</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Technical <span className="text-teal-400">Stack</span> &amp; Capabilities
            </h2>
            <p className="text-slate-400 text-base max-w-xl mt-2">
              Systematic foundations in algorithmic languages, cloud architecture, and data science tooling.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-teal-400 text-slate-950 font-semibold shadow-[0_0_12px_rgba(45,212,191,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div 
          ref={cardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-teal-500/40 hover:bg-slate-900/90 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5 relative overflow-hidden"
            >
              {/* Subtle top accent border on card */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent group-hover:via-teal-400 transition-all" />

              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(skill.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-base group-hover:text-teal-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-code text-slate-400">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-code font-semibold border ${getStatusColor(skill.status)}`}>
                  {skill.status}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 min-h-[40px]">
                {skill.description}
              </p>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-code">
                  <span className="text-slate-500">Proficiency</span>
                  <span className="text-teal-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal-400 to-sky-400 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Highlight Card (honoring original site's badge-row) */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0e1628]/90 to-slate-900/90 border border-slate-800/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base sm:text-lg">
                Active Learning Vector
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Currently expanding knowledge in advanced data structures, systems programming, and modern AI engineering.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              'Data Structures & Algorithms',
              'Advanced Python 3.12',
              'Cloud Architectures & IAM',
              'Multimodal RAG Pipelines',
              'Bigtable Scaling'
            ].map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 rounded-full text-xs font-code font-medium bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center gap-1.5"
              >
                <Clock className="w-3 h-3 text-purple-400" />
                <span>{topic}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
