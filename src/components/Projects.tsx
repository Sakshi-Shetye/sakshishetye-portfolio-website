import { useState } from 'react';
import { Sparkles, ArrowUpRight, Cpu, School, HeartHandshake, Gauge } from 'lucide-react';
import { PROJECTS_LIST } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Fallback illustrations for projects without photographic previews
  const renderCardVisual = (project: ProjectItem) => {
    if (project.imageSrc) {
      return (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#090518]">
          <img
            src={project.imageSrc}
            alt={`${project.title} interface preview`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0926] via-transparent to-transparent opacity-80" />
        </div>
      );
    }

    // High fidelity thematic SVGs for VGuideMaster, MindMate, ProcessSchedule
    if (project.id === 'vguidemaster') {
      return (
        <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-indigo-950 via-[#100a2d] to-purple-950 p-6 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
            <span className="flex items-center gap-1.5">
              <School className="w-4 h-4 text-violet-400" />
              Institutional Management
            </span>
            <span>4 Portals</span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="p-2.5 rounded-lg bg-black/40 border border-violet-500/20 text-center">
              <span className="text-[10px] text-slate-400 block">Student Module</span>
              <span className="text-xs font-semibold text-white">88% Attendance</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-violet-500/20 text-center">
              <span className="text-[10px] text-slate-400 block">Faculty Module</span>
              <span className="text-xs font-semibold text-cyan-300">Marks Rubric</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between">
            <span>Laravel + SQL</span>
            <span className="text-fuchsia-300">IJRP Peer Reviewed</span>
          </div>
        </div>
      );
    }

    if (project.id === 'mindmate') {
      return (
        <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-[#12082b] via-[#1a0e38] to-[#110729] p-6 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-fuchsia-300">
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-pink-400" />
              Mindful AI System
            </span>
            <span>Local LLM</span>
          </div>

          <div className="p-3 rounded-xl bg-violet-950/40 border border-violet-500/25 my-auto">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-mono text-slate-300">Ollama / Llama Reasoning</span>
            </div>
            <p className="text-xs text-slate-200 italic line-clamp-2">
              "Ground yourself. Breathe in for 4 seconds, release stress, tackle tasks one sprint at a time."
            </p>
          </div>

          <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between">
            <span>Zero-Telemetry Privacy</span>
            <span className="text-violet-300">Llama 3</span>
          </div>
        </div>
      );
    }

    // ProcessSchedule Calculator
    return (
      <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-[#0c0822] via-[#080d26] to-[#06142e] p-6 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
          <span className="flex items-center gap-1.5">
            <Gauge className="w-4 h-4 text-cyan-400" />
            CPU Algorithm Engine
          </span>
          <span>Gantt Visualizer</span>
        </div>

        <div className="space-y-1.5 my-auto">
          <div className="flex gap-1 h-7">
            <div className="w-1/4 bg-violet-600 rounded flex items-center justify-center text-[10px] font-mono font-bold text-white">P1</div>
            <div className="w-1/3 bg-cyan-600 rounded flex items-center justify-center text-[10px] font-mono font-bold text-white">P2</div>
            <div className="w-1/4 bg-fuchsia-600 rounded flex items-center justify-center text-[10px] font-mono font-bold text-white">P3</div>
            <div className="w-1/6 bg-indigo-600 rounded flex items-center justify-center text-[10px] font-mono font-bold text-white">P4</div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-slate-400 px-0.5">
            <span>0ms</span>
            <span>4ms</span>
            <span>9ms</span>
            <span>14ms</span>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between">
          <span>FCFS / Round Robin</span>
          <span className="text-cyan-300">AWT & TAT Metric</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="relative py-28 lg:py-36 border-t border-violet-950/50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Showcase of{' '}
            <span className="cosmic-gradient-text">real engineering work.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Production-grade client interfaces, algorithmic simulators, peer-reviewed academic software, and AI-assisted tools solving real challenges.
          </p>
        </div>

        {/* 6 Projects in Spacious 3-Column Desktop Grid (2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_LIST.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-[#0d0924]/85 border border-violet-500/20 hover:border-violet-400/50 hover:bg-[#110c2c] transition-all duration-300 shadow-xl shadow-black/40 overflow-hidden flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              <div>
                {/* Visual Preview Container */}
                <div className="border-b border-violet-500/20 overflow-hidden">
                  {renderCardVisual(project)}
                </div>

                {/* Card Content with generous padding */}
                <div className="p-6">
                  {/* Clean unboxed subtitle kicker */}
                  <div className="text-xs font-mono text-cyan-300 mb-1.5">
                    {project.subtitle}
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-200 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <div className="w-7 h-7 rounded-lg bg-violet-950/60 border border-violet-500/30 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-violet-600 transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3 font-normal">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Technologies unboxed footer with dot separators */}
              <div className="px-6 pb-6 pt-3 border-t border-violet-950/60">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={tech} className="flex items-center gap-2">
                      <span className="font-mono text-slate-300">{tech}</span>
                      {i < Math.min(project.technologies.length, 4) - 1 && (
                        <span aria-hidden="true" className="text-violet-500 font-bold">·</span>
                      )}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-violet-400 group-hover:text-violet-300 font-semibold flex items-center gap-1">
                    <span>Interactive Preview</span>
                    <span aria-hidden="true">→</span>
                  </span>
                  <span className="text-[11px] text-slate-400">Click to expand</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
