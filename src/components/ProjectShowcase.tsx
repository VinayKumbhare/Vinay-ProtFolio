import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  Check, 
  FolderGit2, 
  Layers, 
  Code2, 
  Cloud, 
  ArrowUpRight,
  Info,
  X
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'AI & Data', 'Python', 'C/C++', 'Cloud'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const featuredProject = PROJECTS.find(p => p.id === 'aquaguard-ai') || PROJECTS[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="py-20 relative bg-[#0b0f19] border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="projects-header flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-code mb-3">
              <span>03 // projects/</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Featured <span className="text-amber-400">Works</span> &amp; Systems
            </h2>
            <p className="text-slate-400 text-base max-w-xl mt-2">
              End-to-end software applications, algorithmic toolkits, and data systems engineered with curiosity.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-[0_0_12px_rgba(251,191,36,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Spotlight Featured Card: AquaGuard AI */}
        {selectedCategory === 'All' && featuredProject && (
          <div className="mb-10 rounded-3xl bg-gradient-to-br from-slate-900 via-[#101b33] to-slate-900 border border-teal-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
            {/* Background cyber lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-code font-bold bg-teal-400/20 text-teal-300 border border-teal-400/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                    Spotlight Project
                  </span>
                  <span className="text-xs font-code text-slate-400">
                    TypeScript • Computer Vision • AI
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                  {featuredProject.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  {featuredProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-md bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-code bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-semibold text-sm flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(45,212,191,0.3)]"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(featuredProject)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 text-sm font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <Info className="w-4 h-4 text-teal-400" />
                    <span>Architecture Details</span>
                  </button>
                </div>
              </div>

              {/* Graphic / Visual Terminal Representation */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#090d17] border border-slate-800 p-5 shadow-inner font-code text-xs space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                    <span className="flex items-center gap-2 text-teal-400">
                      <Layers className="w-4 h-4" />
                      aquaguard_pipeline.ts
                    </span>
                    <span className="text-[11px] text-emerald-400 font-semibold">● ACTIVE</span>
                  </div>

                  <div className="space-y-1.5 text-slate-300 text-[11px] sm:text-xs">
                    <p className="text-purple-400">async function <span className="text-sky-300">analyzeSonarFeed</span>(stream: SonarFrame[]) {'{'}</p>
                    <p className="pl-4 text-slate-400">// 1. Geospatial telemetry alignment</p>
                    <p className="pl-4 text-slate-300">const coordinates = await extractGPS(stream);</p>
                    <p className="pl-4 text-slate-400">// 2. Multi-class acoustic anomaly detection</p>
                    <p className="pl-4 text-slate-300">const anomalies = await cvModel.detect(stream);</p>
                    <p className="pl-4 text-slate-400">// 3. Threat assessment &amp; debris tagging</p>
                    <p className="pl-4 text-teal-300">return generateHeatmapReport(coordinates, anomalies);</p>
                    <p className="text-purple-400">{'}'}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Precision: <strong className="text-teal-400">94.8%</strong></span>
                    <span>Format: <strong className="text-slate-200">GeoJSON</strong></span>
                    <span>Runtime: <strong className="text-slate-200">TypeScript</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-900/90 p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/80 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      {project.category === 'Cloud' ? (
                        <Cloud className="w-4 h-4 text-sky-400" />
                      ) : project.category === 'C/C++' ? (
                        <Code2 className="w-4 h-4 text-teal-400" />
                      ) : (
                        <FolderGit2 className="w-4 h-4 text-amber-400" />
                      )}
                    </span>
                    <span className="text-xs font-code text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="View on GitHub"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <h4 className="text-lg font-display font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {project.title}
                </h4>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-code bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-code text-slate-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Deep Dive</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Codebase</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0e1628] border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-code text-teal-400 font-bold uppercase tracking-wider">
                {activeModalProject.category} // PROJECT OVERVIEW
              </span>
              <h3 className="text-2xl font-display font-bold text-white mt-1">
                {activeModalProject.title}
              </h3>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {activeModalProject.longDescription || activeModalProject.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-code font-bold uppercase tracking-wider text-slate-400">
                Key Technical Highlights
              </h4>
              <div className="space-y-2">
                {activeModalProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeModalProject.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-code bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white"
              >
                Close
              </button>

              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>Open in GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
