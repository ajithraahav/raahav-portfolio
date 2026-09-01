import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FooterProps {
  onDownloadResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onDownloadResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F5F7] border-t border-black/5 py-12 text-[#86868B] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/5">
          
          {/* Left Brand info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-lg font-bold text-[#1D1D1F]">
              {RESUME_DATA.personal.name}
            </div>
            <div className="text-xs font-mono text-[#0071E3] font-semibold">
              {RESUME_DATA.personal.title}
            </div>
            <p className="text-xs text-[#86868B] max-w-sm pt-1 font-normal">
              Building production-grade cross-platform mobile apps with Flutter, Clean Architecture, BLoC & offline-first systems.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs font-semibold text-[#515154]">
            <a href="#about" className="hover:text-[#0071E3] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#0071E3] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#0071E3] transition-colors">Projects</a>
            <a href="#engineering" className="hover:text-[#0071E3] transition-colors">Engineering</a>
            <a href="#skills" className="hover:text-[#0071E3] transition-colors">Skills</a>
            <button onClick={onDownloadResume} className="hover:text-[#0071E3] transition-colors">Resume PDF</button>
            <a href="#contact" className="hover:text-[#0071E3] transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white hover:bg-slate-100 border border-black/10 text-[#515154] hover:text-[#1D1D1F] transition-colors shadow-2xs"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} {RESUME_DATA.personal.name}. All rights reserved. 5+ Years Experience verified.
          </div>

          <div className="flex items-center gap-4">
            <a href={RESUME_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#0071E3] transition-colors flex items-center gap-1">
              <GithubIcon className="w-3.5 h-3.5" /> GitHub
            </a>
            <span>•</span>
            <a href={RESUME_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0071E3] transition-colors flex items-center gap-1">
              <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <span>•</span>
            <a href={`mailto:${RESUME_DATA.personal.email}`} className="hover:text-[#0071E3] transition-colors">
              ajithraahav@gmail.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
