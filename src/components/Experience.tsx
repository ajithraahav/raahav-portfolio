import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import type { Experience } from '../data/resumeData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" /> Career History & Engagements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
            Professional Experience Timeline
          </h2>
          <p className="text-[#515154] text-base">
            Over 5+ years of hands-on mobile software engineering, progressing from core cross-platform feature developer to consultant for HIPAA-compliant US healthcare systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#0071E3] via-indigo-400 to-slate-300 -translate-x-1/2 hidden md:block" />

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
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white border-2 border-[#0071E3] shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0071E3] animate-pulse" />
                  </div>

                  {/* Date Badge Side for Desktop */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'} px-2`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/5 text-[#1D1D1F] font-mono text-xs font-semibold shadow-2xs">
                      <Calendar className="w-3.5 h-3.5 text-[#0071E3]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Main Experience Apple Card */}
                  <div className="w-full md:w-1/2">
                    <div className="apple-glass-card rounded-3xl p-6 sm:p-8 relative group">
                      
                      {/* Contractual / Special context tag */}
                      {exp.isContractual && (
                        <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                          <span>Contractual Engagement • US Client</span>
                        </div>
                      )}

                      {/* Header: Role & Company */}
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">
                          {exp.role}
                        </h3>
                        <div className="text-base font-bold text-[#0071E3]">
                          {exp.company}
                        </div>
                      </div>

                      {/* Location & Context */}
                      <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#86868B] mb-4 pb-4 border-b border-black/5">
                        <span className="flex items-center gap-1 text-[#515154]">
                          <MapPin className="w-3.5 h-3.5 text-[#0071E3]" /> {exp.location}
                        </span>
                        {exp.context && (
                          <span className="text-[#0071E3] font-semibold bg-[#0071E3]/10 px-2.5 py-0.5 rounded-full border border-[#0071E3]/20">
                            {exp.context}
                          </span>
                        )}
                      </div>

                      {/* Responsibilities list */}
                      <ul className="space-y-2.5 mb-6 text-sm text-[#515154]">
                        {exp.highlights.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Chips */}
                      <div>
                        <div className="text-[11px] font-mono text-[#86868B] uppercase tracking-wider mb-2 flex items-center gap-1 font-semibold">
                          <Cpu className="w-3 h-3 text-[#0071E3]" /> Core Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-mono text-[#1D1D1F] font-semibold hover:border-[#0071E3]/30 transition-colors shadow-2xs"
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
