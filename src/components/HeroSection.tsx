import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { 
  ArrowRight, 
  Terminal, 
  Play, 
  Sparkles, 
  Github, 
  Linkedin, 
  Award, 
  CheckCircle2, 
  Copy, 
  Check, 
  Code2, 
  Cpu, 
  Cloud,
  FileDown
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const avatarContainerRef = useRef<HTMLDivElement>(null);
  const avatarImgRef = useRef<HTMLImageElement>(null);
  const orbit1Ref = useRef<HTMLDivElement>(null);
  const orbit2Ref = useRef<HTMLDivElement>(null);
  const orbit3Ref = useRef<HTMLDivElement>(null);
  const orbit4Ref = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const roles = [
    'Computer Science & Data Science Student',
    'Python & C/C++ Systems Developer',
    'Google Cloud Arcade Achiever (120+ Badges)',
    'Applied AI & Multimodal RAG Enthusiast'
  ];

  // Cycling role text
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  // GSAP Animations setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge-item', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
      })
      .from('.hero-title-line', {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
      }, '-=0.5')
      .from('.hero-desc', {
        y: 20,
        opacity: 0,
        duration: 0.7,
      }, '-=0.4')
      .from('.hero-actions', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, '-=0.3')
      .from(avatarContainerRef.current, {
        scale: 0.85,
        opacity: 0,
        duration: 1.1,
        ease: 'back.out(1.5)',
      }, '-=0.8')
      .from([orbit1Ref.current, orbit2Ref.current, orbit3Ref.current, orbit4Ref.current], {
        scale: 0,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'back.out(2)',
      }, '-=0.6')
      .from(terminalRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
      }, '-=0.5');

      // 2. Continuous floating animation on Avatar with GSAP
      if (avatarContainerRef.current) {
        gsap.to(avatarContainerRef.current, {
          y: -14,
          rotation: 1,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Orbiting badge float variations
      if (orbit1Ref.current) {
        gsap.to(orbit1Ref.current, {
          y: -8,
          x: 4,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
      if (orbit2Ref.current) {
        gsap.to(orbit2Ref.current, {
          y: 8,
          x: -5,
          duration: 3.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.4,
        });
      }
      if (orbit3Ref.current) {
        gsap.to(orbit3Ref.current, {
          y: -10,
          duration: 3.1,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.8,
        });
      }
      if (orbit4Ref.current) {
        gsap.to(orbit4Ref.current, {
          y: 7,
          x: 6,
          duration: 3.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.6,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 3D Parallax tilt effect on profile image hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!avatarImgRef.current) return;
    const rect = avatarImgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(avatarImgRef.current, {
      rotateY: x * 0.08,
      rotateX: -y * 0.08,
      duration: 0.4,
      ease: 'power1.out',
      transformPerspective: 800,
    });
  };

  const handleMouseLeave = () => {
    if (!avatarImgRef.current) return;
    gsap.to(avatarImgRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  const codeString = `# about.py — Vinay Kumbhare
class Student:
    def __init__(self):
        self.name = "Vinay Kumbhare"
        self.role = "CS (Data Science) Undergraduate"
        self.focus = ["Python", "C/C++", "Data Science", "GCP Cloud"]
        self.badges_earned = 120  # Google Cloud Arcade
        self.status = "Building foundations & solving problems"

    def execute_passion(self):
        return f"Ready to engineer efficient algorithms and intelligent cloud systems."`;

  const runCode = () => {
    setIsRunningCode(true);
    setTerminalOutput(null);
    setTimeout(() => {
      setTerminalOutput(`>>> python3 about.py
[STDOUT] Initializing Vinay Kumbhare...
✓ Profile: Computer Science (Data Science)
✓ Core Stack: Python 3.12, C/C++, Google Cloud Platform, Multimodal RAG
✓ Verified Google Skills: 120+ Arcade Badges across Bigtable, Lakehouse, and GenAI
✓ Ready to build scalable systems, data pipelines & high-impact software.`);
      setIsRunningCode(false);
    }, 700);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section 
      id="hero" 
      ref={heroRef} 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle background glow blobs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-28 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Info */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Status Pill */}
            <div className="hero-badge-item inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-300 text-xs sm:text-sm font-medium w-fit mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300">Available for Opportunities</span>
              <span className="text-slate-500">•</span>
              <span className="text-amber-400 font-code text-xs font-semibold">120+ Arcade Badges</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="hero-title-line font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
              Hi, I'm <span className="bg-gradient-to-r from-teal-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">Vinay Kumbhare</span>
            </h1>

            {/* Cycling Animated Subtitle */}
            <div className="hero-title-line h-10 sm:h-12 flex items-center mb-5">
              <div className="font-code text-lg sm:text-2xl font-semibold text-slate-200 flex items-center gap-2">
                <span className="text-teal-400">&gt;</span>
                <span className="text-teal-300 underline decoration-teal-500/40 underline-offset-4">
                  {roles[activeRoleIndex]}
                </span>
                <span className="inline-block w-2.5 h-6 bg-amber-400 animate-pulse" />
              </div>
            </div>

            {/* Description / Summary */}
            <p className="hero-desc text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Second-year <strong className="text-white font-medium">Computer Science (Data Science)</strong> student compiling strong foundations in Python and C/C++ while mastering cloud fundamentals, Bigtable, and applied generative AI through the Google Cloud Arcade program.
            </p>

            {/* Call to Actions */}
            <div className="hero-actions flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-sky-500 hover:from-teal-300 hover:to-sky-400 text-slate-950 font-bold text-sm sm:text-base flex items-center gap-2 shadow-[0_4px_20px_rgba(45,212,191,0.3)] hover:shadow-[0_6px_25px_rgba(45,212,191,0.45)] transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#arcade-badges"
                className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-amber-400/60 font-semibold text-sm sm:text-base flex items-center gap-2 shadow-sm transition-all"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Google Arcade (120+)</span>
              </a>

              <a
                href="#contact"
                className="px-4 py-3 rounded-xl bg-slate-900/40 hover:bg-slate-800/60 text-slate-300 hover:text-white border border-slate-800 font-medium text-sm flex items-center gap-1.5 transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Links / Badges */}
            <div className="hero-actions flex items-center gap-4 text-xs font-code text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span>Nagpur / India</span>
              </div>
              <span>•</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition-colors flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/VinayKumbhare</span>
              </a>
            </div>
          </div>

          {/* Right Column: Floating Profile Image with Orbiting Tech Badges */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div 
              ref={avatarContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center cursor-pointer"
            >
              {/* Outer decorative neon ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500/30 via-sky-500/20 to-amber-500/30 blur-xl animate-pulse" />
              
              {/* Cybernetic decorative circle frame */}
              <div className="absolute -inset-3 rounded-full border border-teal-500/20 border-dashed animate-[spin_40s_linear_infinite]" />
              <div className="absolute -inset-7 rounded-full border border-slate-800/80 pointer-events-none" />

              {/* Main Avatar Frame */}
              <div 
                ref={avatarImgRef}
                className="relative w-64 h-64 sm:w-76 sm:h-76 rounded-full overflow-hidden p-1.5 bg-gradient-to-b from-teal-400/60 via-slate-800 to-amber-400/40 shadow-2xl transition-transform"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center relative">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover rounded-full filter contrast-105"
                    onError={(e) => {
                      // Fallback placeholder if image path has any issue
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle avatar bottom gradient tag */}
                  <div className="absolute bottom-3 left-0 right-0 py-1 bg-slate-950/80 backdrop-blur-sm border-t border-slate-800 text-center">
                    <span className="text-[11px] font-code text-teal-400 font-semibold tracking-wider">
                      vinay_kumbhare
                    </span>
                  </div>
                </div>
              </div>

              {/* Orbiting Badge 1: Python */}
              <div
                ref={orbit1Ref}
                className="absolute -top-3 -right-2 sm:top-2 sm:right-0 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs font-code font-bold flex items-center gap-1.5 shadow-lg shadow-black/50"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>Python</span>
              </div>

              {/* Orbiting Badge 2: C / C++ */}
              <div
                ref={orbit2Ref}
                className="absolute top-1/2 -left-8 sm:-left-10 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-teal-500/40 text-teal-300 text-xs font-code font-bold flex items-center gap-1.5 shadow-lg shadow-black/50"
              >
                <Cpu className="w-4 h-4 text-teal-400" />
                <span>C / C++</span>
              </div>

              {/* Orbiting Badge 3: Google Cloud */}
              <div
                ref={orbit3Ref}
                className="absolute -bottom-4 right-4 sm:bottom-0 sm:right-6 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-sky-500/40 text-sky-300 text-xs font-code font-bold flex items-center gap-1.5 shadow-lg shadow-black/50"
              >
                <Cloud className="w-4 h-4 text-sky-400" />
                <span>GCP Cloud</span>
              </div>

              {/* Orbiting Badge 4: Data Science / AI */}
              <div
                ref={orbit4Ref}
                className="absolute top-4 left-0 sm:top-6 sm:left-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-purple-500/40 text-purple-300 text-xs font-code font-bold flex items-center gap-1.5 shadow-lg shadow-black/50"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Data Science</span>
              </div>
            </div>

            {/* Quick Micro-stats under avatar */}
            <div className="mt-8 grid grid-cols-3 gap-3 w-full max-w-sm text-center">
              <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="font-display font-bold text-lg text-teal-400">120+</div>
                <div className="text-[11px] text-slate-400 font-sans">Arcade Badges</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="font-display font-bold text-lg text-amber-400">Level 3</div>
                <div className="text-[11px] text-slate-400 font-sans">Applied Gen AI</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="font-display font-bold text-lg text-sky-400">2nd Year</div>
                <div className="text-[11px] text-slate-400 font-sans">B.Tech CS(DS)</div>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive VS Code / Terminal tribute card */}
        <div ref={terminalRef} className="mt-16 sm:mt-20 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-[#0e1526]/90 shadow-2xl overflow-hidden backdrop-blur-md">
            {/* Terminal Titlebar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#131b31] border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 font-code text-xs text-slate-400 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-teal-400" />
                  ~/vinay-kumbhare/about.py — python3
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={copyCode}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-code flex items-center gap-1 transition-colors"
                  title="Copy code snippet"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  type="button"
                  onClick={runCode}
                  disabled={isRunningCode}
                  className="px-3 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-code font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50"
                >
                  <Play className={`w-3 h-3 ${isRunningCode ? 'animate-spin' : 'fill-current'}`} />
                  <span>{isRunningCode ? 'Running...' : 'Run Python'}</span>
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-6 font-code text-xs sm:text-sm overflow-x-auto text-slate-300 leading-relaxed bg-[#0b101f]">
              <pre className="text-slate-300">
                <code>
                  <span className="text-slate-500"># about.py — Vinay Kumbhare</span>{'\n'}
                  <span className="text-rose-400 font-semibold">class</span> <span className="text-amber-300 font-semibold">Student</span>:{'\n'}
                  {'    '}<span className="text-purple-400 font-semibold">def</span> <span className="text-sky-300 font-semibold">__init__</span>(<span className="text-slate-400">self</span>):{'\n'}
                  {'        '}<span className="text-slate-400">self</span>.<span className="text-sky-300">name</span> = <span className="text-teal-300">"Vinay Kumbhare"</span>{'\n'}
                  {'        '}<span className="text-slate-400">self</span>.<span className="text-sky-300">degree</span> = <span className="text-teal-300">"B.Tech Computer Science (Data Science)"</span>{'\n'}
                  {'        '}<span className="text-slate-400">self</span>.<span className="text-sky-300">focus</span> = [<span className="text-teal-300">"Python"</span>, <span className="text-teal-300">"C/C++"</span>, <span className="text-teal-300">"Data Science"</span>, <span className="text-teal-300">"Cloud"</span>]{'\n'}
                  {'        '}<span className="text-slate-400">self</span>.<span className="text-sky-300">google_arcade_badges</span> = <span className="text-amber-400 font-bold">120</span>  <span className="text-slate-500"># Verified on Google Skills Boost</span>{'\n'}
                  {'        '}<span className="text-slate-400">self</span>.<span className="text-sky-300">status</span> = <span className="text-teal-300">"Building foundations & seeking opportunities"</span>{'\n\n'}
                  {'    '}<span className="text-purple-400 font-semibold">def</span> <span className="text-sky-300 font-semibold">execute_mission</span>(<span className="text-slate-400">self</span>):{'\n'}
                  {'        '}<span className="text-rose-400 font-semibold">return</span> <span className="text-teal-300">"Engineering performant code, clean data pipelines & cloud systems."</span>
                </code>
              </pre>
            </div>

            {/* Interactive Output Console */}
            {terminalOutput && (
              <div className="px-4 py-3 sm:px-6 sm:py-4 bg-[#070b14] border-t border-slate-800/80 font-code text-xs sm:text-sm text-emerald-400 whitespace-pre-wrap animate-in fade-in duration-300">
                {terminalOutput}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
