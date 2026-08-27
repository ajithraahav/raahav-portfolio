import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080F] border-t border-slate-800/80 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Left Brand info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-lg font-bold text-white">
              {RESUME_DATA.personal.name}
            </div>
            <div className="text-xs font-mono text-cyan-400">
              {RESUME_DATA.personal.title}
            </div>
            <p className="text-xs text-slate-500 max-w-sm pt-1">
              Building production-grade cross-platform mobile apps with Flutter, Clean Architecture, BLoC & offline-first systems.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#engineering" className="hover:text-cyan-400 transition-colors">Engineering</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <button onClick={onOpenResumeModal} className="hover:text-cyan-400 transition-colors">Resume</button>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} {RESUME_DATA.personal.name}. All rights reserved. Source data verified against official resume.
          </div>

          <div className="flex items-center gap-4">
            <a href={RESUME_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <GithubIcon className="w-3.5 h-3.5" /> GitHub
            </a>
            <span>•</span>
            <a href={RESUME_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <span>•</span>
            <a href={`mailto:${RESUME_DATA.personal.email}`} className="hover:text-cyan-400 transition-colors">
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
