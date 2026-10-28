import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import type { Project } from '../data/resumeData';
import { ProjectModal } from './ProjectModal';
import { FolderGit2, ArrowUpRight, HeartPulse, Utensils, Train, ShieldAlert, Anchor, Compass, MapPin, Sparkles } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Healthcare', 'POS', 'Marine', 'Transportation', 'Government', 'Workforce', 'Utility'];

  const filteredProjects = selectedCategory === 'All'
    ? RESUME_DATA.projects
    : RESUME_DATA.projects.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Healthcare': return <HeartPulse className="w-4 h-4 text-rose-500" />;
      case 'POS': return <Utensils className="w-4 h-4 text-amber-500" />;
      case 'Marine': return <Anchor className="w-4 h-4 text-blue-600" />;
      case 'Transportation': return <Train className="w-4 h-4 text-[#0071E3]" />;
      case 'Government': return <ShieldAlert className="w-4 h-4 text-emerald-600" />;
      case 'Workforce': return <MapPin className="w-4 h-4 text-purple-600" />;
      default: return <Compass className="w-4 h-4 text-indigo-600" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" /> Production Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
            Featured Project Case Studies
          </h2>
          <p className="text-[#515154] text-base">
            Detailed breakdown of real-world Flutter mobile applications engineered across healthcare, POS, marine logistics, transit, and public safety.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === cat
                  ? 'bg-[#0071E3] text-white shadow-md scale-105'
                  : 'bg-white text-[#515154] hover:text-[#1D1D1F] border border-black/5 hover:border-black/10 shadow-2xs'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
              {cat === 'All' && <span className="opacity-70 font-mono">({RESUME_DATA.projects.length})</span>}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => {
            const isFeatured = project.id === 'digit-healthcare' || project.featured;

            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`apple-glass-card rounded-3xl p-7 flex flex-col justify-between cursor-pointer group relative overflow-hidden transition-all duration-300 ${
                  isFeatured
                    ? 'border-rose-400/40 ring-2 ring-rose-500/20 bg-gradient-to-b from-rose-50/50 via-white to-white shadow-xl shadow-rose-500/5 hover:border-rose-500/60'
                    : 'hover:border-[#0071E3]/40'
                }`}
              >
                <div>
                  {/* Flagship Healthcare Highlight Ribbon */}
                  {isFeatured && (
                    <div className="mb-4 -mt-1 flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-rose-100">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs font-bold tracking-wide">
                        <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                        <span>Flagship Project • Clinical Digital Widgets</span>
                      </span>
                      <span className="text-[11px] font-mono font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                        US Healthcare
                      </span>
                    </div>
                  )}

                  {/* Header badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      isFeatured 
                        ? 'bg-rose-100/70 border border-rose-200 text-rose-700' 
                        : 'bg-[#F5F5F7] border border-black/5 text-[#0071E3]'
                    }`}>
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>
                    <span className="text-xs font-mono text-[#86868B] font-semibold">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className={`text-xl font-bold transition-colors mb-1.5 line-clamp-1 ${
                    isFeatured ? 'text-[#1D1D1F] group-hover:text-rose-600' : 'text-[#1D1D1F] group-hover:text-[#0071E3]'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-[#86868B] mb-3">
                    {project.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-sm text-[#515154] leading-relaxed mb-4 line-clamp-3 font-normal">
                    {project.summary}
                  </p>

                  {/* Custom Digit Widgets Callout Box for DIGIT */}
                  {isFeatured && (
                    <div className="mb-5 p-3 rounded-2xl bg-rose-50/80 border border-rose-200/60 text-xs text-rose-950 space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-rose-700">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <span>Core Innovation: Modular Digital Widgets</span>
                      </div>
                      <p className="text-[11px] text-[#515154] leading-snug">
                        Custom Flutter widgets for PIP flexion angle tracking, contracture recording, and Freezed immutable models.
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  {/* Client / Role line */}
                  <div className="text-xs font-mono text-[#86868B] mb-4 pb-3 border-b border-black/5 flex items-center justify-between font-semibold">
                    <span className="truncate max-w-[180px]">{project.clientOrLocation}</span>
                    <span className={isFeatured ? 'text-rose-600' : 'text-[#0071E3]'}>{project.role}</span>
                  </div>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-semibold ${
                          isFeatured && (tech.includes('Widgets') || tech.includes('BLoC') || tech.includes('HIPAA'))
                            ? 'bg-rose-50 border-rose-200 text-rose-700'
                            : 'bg-[#F5F5F7] border-black/5 text-[#1D1D1F]'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F5F5F7] border border-black/5 text-[11px] font-mono text-[#86868B]">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* CTA Link */}
                  <div className={`flex items-center justify-between text-xs font-bold transition-colors pt-1 ${
                    isFeatured ? 'text-rose-600 group-hover:text-rose-700' : 'text-[#0071E3] group-hover:text-[#0056B3]'
                  }`}>
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Read Full Case Study
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal display when a project is clicked */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
};
