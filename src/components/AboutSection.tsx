import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GraduationCap, 
  MapPin, 
  Code, 
  Cpu, 
  Database, 
  Cloud, 
  Sparkles, 
  Compass,
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.about-block', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      title: 'Systems & Algorithmic Logic',
      icon: <Cpu className="w-5 h-5 text-teal-400" />,
      desc: 'Mastering low-level memory constructs, pointer arithmetic, and algorithmic time/space optimization in C and C++.',
      tech: ['C', 'C++', 'Data Structures', 'Pointers']
    },
    {
      title: 'Data Science & Scientific Python',
      icon: <Database className="w-5 h-5 text-amber-400" />,
      desc: 'Developing automated data analysis pipelines, numerical processing, and statistical distributions using Python, Pandas, and NumPy.',
      tech: ['Python 3', 'Pandas', 'NumPy', 'Data Analysis']
    },
    {
      title: 'Cloud Architecture & Scalability',
      icon: <Cloud className="w-5 h-5 text-sky-400" />,
      desc: 'Applying production cloud architectures across Google Cloud Platform, managing Bigtable instances, and configuring Dataplex Lakehouses.',
      tech: ['GCP', 'Bigtable', 'BigQuery', 'Cloud Storage']
    },
    {
      title: 'Applied Generative AI & RAG',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      desc: 'Designing Multimodal document analysis pipelines, prompt engineering, and intelligent contextual extraction using Gemini models.',
      tech: ['Gemini Models', 'Multimodal RAG', 'Vertex AI', 'Document AI']
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 relative bg-[#0a0f1d] border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="about-header mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-code mb-3">
            <span>01 // about.py</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Engineering <span className="text-teal-400">Foundations</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            A developer mindset shaped by foundational rigor, hands-on cloud labs, and practical problem solving.
          </p>
        </div>

        {/* 2-column overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Main Story & Education */}
          <div className="about-block lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4 shadow-xl">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Compiling Core Competencies One Step at a Time
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a second-year undergraduate pursuing a Bachelor of Technology in <strong className="text-white font-medium">Computer Science (Data Science)</strong>. My learning philosophy revolves around constructing deep mental models: understanding how data structures operate at memory boundaries in C/C++, writing idiomatic Python for high-velocity problem solving, and architecting scalable deployments on Google Cloud.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Rather than treating cloud tools as black boxes, I have dedicated hundreds of hours to practical labs through the Google Cloud Arcade program, earning over 120 verified skill badges across NoSQL Bigtable databases, lakehouse discovery, and multimodal generative AI.
              </p>

              {/* Education and Location metadata badges */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-code text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/15 text-teal-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block">Degree</span>
                    <span className="text-slate-200 font-semibold">B.Tech Computer Science (DS)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block">Location</span>
                    <span className="text-slate-200 font-semibold">Nagpur, Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats & Core Focus */}
          <div className="about-block lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
              <h4 className="font-code text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
                <Compass className="w-4 h-4" />
                <span>Primary Pillars</span>
              </h4>

              <div className="space-y-3 font-code text-xs">
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Current Status</span>
                  <span className="text-emerald-400 font-semibold">Building Foundations</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Google Arcade Badges</span>
                  <span className="text-amber-400 font-bold">120+ Verified</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Specialization</span>
                  <span className="text-sky-300">Data Science &amp; AI</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Open For</span>
                  <span className="text-teal-300 font-semibold">Internships &amp; Projects</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-code font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Start a Conversation</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="about-block p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-teal-500/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {pillar.icon}
              </div>
              <h4 className="font-display font-bold text-white text-base mb-2 group-hover:text-teal-300 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {pillar.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {pillar.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] font-code bg-slate-800 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
