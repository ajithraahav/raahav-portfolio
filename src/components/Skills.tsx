import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import type { SkillCategory } from '../data/resumeData';
import { Cpu, Smartphone, Layers, Server, Cloud, Database, Zap, GitBranch, Bot, Compass } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#0071E3]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-blue-600" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-600" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-600" />;
      case 'Database': return <Database className="w-5 h-5 text-amber-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-rose-600" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-indigo-600" />;
      case 'Bot': return <Bot className="w-5 h-5 text-purple-600" />;
      default: return <Cpu className="w-5 h-5 text-[#0071E3]" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" /> Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
            Verified Technical Skill Inventory
          </h2>
          <p className="text-[#515154] text-base">
            Categorized skills and technologies derived strictly from 5+ years of verified production experience.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESUME_DATA.skillsCategories.map((cat: SkillCategory) => (
            <div
              key={cat.title}
              className="apple-glass-card rounded-3xl p-6 border border-black/5 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-2xl bg-[#F5F5F7] border border-black/5 group-hover:border-[#0071E3]/30 transition-colors">
                    {getIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#515154] leading-relaxed mb-5 font-normal">
                  {cat.description}
                </p>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-[#F5F5F7] border border-black/5 text-xs font-mono text-[#1D1D1F] font-semibold hover:border-[#0071E3]/30 transition-colors flex items-center gap-1.5 shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
                    <span>{skill}</span>
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
