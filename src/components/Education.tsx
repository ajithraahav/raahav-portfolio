import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" /> Academic Qualifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
            Education & Academic Foundation
          </h2>
          <p className="text-[#515154] text-base">
            Formal computer science and engineering coursework supporting practical software development.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {RESUME_DATA.education.map((edu) => (
            <div
              key={edu.degree}
              className="apple-glass-card rounded-3xl p-8 border border-black/5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                    edu.status === 'In Progress'
                      ? 'bg-[#0071E3]/10 border-[#0071E3]/20 text-[#0071E3]'
                      : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  }`}>
                    {edu.status}
                  </span>
                  <span className="text-xs font-mono text-[#86868B] flex items-center gap-1 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#0071E3]" /> {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors mb-1">
                  {edu.degree}
                </h3>
                <div className="text-base font-bold text-[#0071E3] mb-3">
                  {edu.institution}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#86868B] mb-4 pb-4 border-b border-black/5 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#0071E3]" /> {edu.location}
                </div>

                <p className="text-sm text-[#515154] leading-relaxed font-normal">
                  {edu.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2 text-xs font-mono text-[#0071E3] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Verified Credential Record
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
