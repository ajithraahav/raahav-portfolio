import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-[#090C15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" /> Academic Qualifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Foundation
          </h2>
          <p className="text-slate-400 text-base">
            Formal computer science and engineering coursework supporting practical software development.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {RESUME_DATA.education.map((edu) => (
            <div
              key={edu.degree}
              className="glass-card glass-card-hover rounded-2xl p-7 border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                    edu.status === 'In Progress'
                      ? 'bg-cyan-950/80 border-cyan-800/80 text-cyan-300'
                      : 'bg-emerald-950/80 border-emerald-800/80 text-emerald-300'
                  }`}>
                    {edu.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {edu.degree}
                </h3>
                <div className="text-base font-semibold text-slate-300 mb-3">
                  {edu.institution}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-4 pb-4 border-b border-slate-800/80">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {edu.location}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {edu.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-mono text-cyan-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Verified Credential Record
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
