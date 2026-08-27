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
      case 'Healthcare': return <HeartPulse className="w-4 h-4 text-rose-400" />;
      case 'POS': return <Utensils className="w-4 h-4 text-amber-400" />;
      case 'Marine': return <Anchor className="w-4 h-4 text-blue-400" />;
      case 'Transportation': return <Train className="w-4 h-4 text-cyan-400" />;
      case 'Government': return <ShieldAlert className="w-4 h-4 text-emerald-400" />;
      case 'Workforce': return <MapPin className="w-4 h-4 text-purple-400" />;
      default: return <Compass className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" /> Production Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Project Case Studies
          </h2>
          <p className="text-slate-400 text-base">
            Detailed breakdown of real-world Flutter mobile applications engineered across healthcare, POS, marine logistics, transit, and public safety.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
              {cat === 'All' && <span className="opacity-60 font-mono">({RESUME_DATA.projects.length})</span>}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="glass-card glass-card-hover rounded-2xl border border-slate-800/80 p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {project.year}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-3">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Client / Role line */}
                <div className="text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-slate-800/80 flex items-center justify-between">
                  <span className="truncate max-w-[180px]">{project.clientOrLocation}</span>
                  <span className="text-cyan-400 font-semibold">{project.role}</span>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* CTA Link */}
                <div className="flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors pt-1">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Read Full Case Study
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
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
