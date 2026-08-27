import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import type { Experience } from '../data/resumeData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" /> Career History & Engagements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience Timeline
          </h2>
          <p className="text-slate-400 text-base">
            4.5+ years of hands-on mobile software engineering, progressing from core cross-platform feature developer to consultant for HIPAA-compliant US healthcare systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {RESUME_DATA.experiences.map((exp: Experience, idx: number) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-[#090C15] border-2 border-cyan-500 shadow-lg shadow-cyan-500/30">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Date Badge Side for Desktop */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'} px-2`}>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 font-mono text-xs shadow-inner">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Main Experience Glass Card */}
                  <div className="w-full md:w-1/2">
                    <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-slate-800 relative group">
                      
                      {/* Contractual / Special context tag */}
                      {exp.isContractual && (
                        <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/60 text-amber-300 text-xs font-mono">
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                          <span>Contractual Engagement • US Client</span>
                        </div>
                      )}

                      {/* Header: Company & Role */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {exp.role}
                          </h3>
                          <div className="text-base font-semibold text-slate-300">
                            {exp.company}
                          </div>
                        </div>
                      </div>

                      {/* Location & Context */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4 pb-4 border-b border-slate-800/80">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {exp.location}
                        </span>
                        {exp.context && (
                          <span className="text-cyan-400 font-medium bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
                            {exp.context}
                          </span>
                        )}
                      </div>

                      {/* Responsibilities list */}
                      <ul className="space-y-2.5 mb-6 text-sm text-slate-300">
                        {exp.highlights.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Chips */}
                      <div>
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                          <Cpu className="w-3 h-3 text-cyan-400" /> Core Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300 hover:border-cyan-700/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
