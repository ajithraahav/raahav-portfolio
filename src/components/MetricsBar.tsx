import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Award, Briefcase, Code, Layers } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const icons = [
    <Award className="w-5 h-5 text-[#0071E3]" />,
    <Code className="w-5 h-5 text-indigo-600" />,
    <Briefcase className="w-5 h-5 text-purple-600" />,
    <Layers className="w-5 h-5 text-emerald-600" />,
  ];

  return (
    <section className="relative z-20 py-8 border-y border-black/5 bg-white/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {RESUME_DATA.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-black/5 shadow-2xs hover:shadow-md transition-all duration-200"
            >
              <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-black/5 flex-shrink-0">
                {icons[idx]}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#86868B] mt-0.5 font-medium">
                  {stat.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
