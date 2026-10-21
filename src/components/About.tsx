import { GraduationCap, MapPin, Calendar, BookOpen, Layers, Sparkles } from 'lucide-react';
import { EDUCATION_LIST, PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 border-t border-violet-950/50">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>About Me</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Small steps. Big ideas.{' '}
            <span className="cosmic-gradient-text">Continuous growth.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            {PERSONAL_INFO.aboutDetailed}
          </p>
        </div>

        {/* 3 Core Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-[#0e0924]/80 border border-violet-500/20 backdrop-blur-md hover:border-violet-400/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-violet-900/40 border border-violet-500/30 flex items-center justify-center text-violet-300 mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Software Development</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Crafting robust, modular web architectures with modern frameworks, clean separation of concerns, and intuitive user experiences.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e0924]/80 border border-violet-500/20 backdrop-blur-md hover:border-cyan-400/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-300 mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">AI-Powered Systems</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Harnessing LLMs (Gemini, Llama, Ollama) and prompt engineering pipelines to build pragmatic tools that solve real human problems.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e0924]/80 border border-violet-500/20 backdrop-blur-md hover:border-fuchsia-400/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-fuchsia-950/40 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-300 mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Research & Engineering</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Bridging theoretical concepts like operating system process scheduling and spatial routing with peer-reviewed research and code.
            </p>
          </div>
        </div>

        {/* Education Timeline / Panels */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-6">
            <GraduationCap className="w-4 h-4 text-violet-400" />
            <span>Academic Background</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {EDUCATION_LIST.map((edu) => (
              <div
                key={edu.id}
                className="p-8 rounded-2xl bg-[#0b071e]/90 border border-violet-500/20 shadow-xl shadow-black/40 relative overflow-hidden group hover:border-violet-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle cosmic accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-violet-400" />
                      {edu.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-sm font-medium text-violet-300 mb-6">
                    {edu.institution}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {edu.highlights.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-300 leading-relaxed flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-violet-950 text-xs text-slate-400 flex items-center justify-between">
                  <span>Accredited Curriculum</span>
                  <span className="font-mono text-violet-300">Mumbai University Affiliated</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
