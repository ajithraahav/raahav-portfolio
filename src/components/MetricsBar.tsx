import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Award, Briefcase, Code, Layers } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const icons = [
    <Award className="w-5 h-5 text-cyan-400" />,
    <Code className="w-5 h-5 text-indigo-400" />,
    <Briefcase className="w-5 h-5 text-purple-400" />,
    <Layers className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section className="relative z-20 py-8 border-y border-slate-800/80 bg-[#0B0F1A]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {RESUME_DATA.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-all"
            >
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex-shrink-0">
                {icons[idx]}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
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
