import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Mail } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Engineering', href: '#engineering' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3 shadow-xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Name Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
            <div className="w-full h-full bg-[#090C15] rounded-[11px] flex items-center justify-center font-bold text-cyan-400 font-mono text-lg">
              R
            </div>
          </div>
          <div>
            <span className="font-bold text-lg text-slate-100 group-hover:text-cyan-400 transition-colors">
              Raahav Ajith
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-mono text-cyan-400/80 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded-full">
              Flutter Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-800/50 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 border border-transparent hover:border-slate-700/60 transition-all"
            title="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={RESUME_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 border border-transparent hover:border-slate-700/60 transition-all"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-cyan-300 bg-cyan-950/80 hover:bg-cyan-900/80 border border-cyan-700/60 rounded-xl shadow-lg shadow-cyan-950/50 hover:shadow-cyan-500/20 transition-all duration-200 group"
          >
            <FileText className="w-4 h-4 group-hover:rotate-6 transition-transform" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-700/60 rounded-lg"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 bg-slate-800/60 border border-slate-700/60"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0D121F] border-b border-slate-800/80 px-4 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <a href={RESUME_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white p-2">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href={RESUME_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white p-2">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href={`mailto:${RESUME_DATA.personal.email}`} className="text-slate-400 hover:text-white p-2">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950 border border-cyan-700/60 rounded-xl"
              >
                <FileText className="w-4 h-4" /> Download CV
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
