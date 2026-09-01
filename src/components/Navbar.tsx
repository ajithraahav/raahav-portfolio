import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Mail } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface NavbarProps {
  onDownloadResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadResume }) => {
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
      isScrolled ? 'apple-nav py-3.5 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-[#1D1D1F] text-white flex items-center justify-center font-bold font-sans text-lg shadow-sm group-hover:bg-[#0071E3] transition-colors">
            R
          </div>
          <div>
            <span className="font-bold text-lg text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors tracking-tight">
              Raahav Ajith
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-medium text-[#0071E3] bg-[#0071E3]/10 border border-[#0071E3]/20 px-2.5 py-0.5 rounded-full">
              Flutter Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/80 border border-black/5 rounded-full px-4 py-1.5 shadow-sm backdrop-blur-md">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'text-[#0071E3] bg-[#0071E3]/10 border border-[#0071E3]/20 shadow-2xs' 
                    : 'text-[#515154] hover:text-[#1D1D1F] hover:bg-black/5'
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
            className="p-2 rounded-xl text-[#515154] hover:text-[#1D1D1F] hover:bg-black/5 transition-all"
            title="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={RESUME_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-[#515154] hover:text-[#1D1D1F] hover:bg-black/5 transition-all"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          <button
            onClick={onDownloadResume}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0071E3] hover:bg-[#0056B3] rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume PDF</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onDownloadResume}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0071E3] rounded-full"
          >
            PDF
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#1D1D1F] bg-white border border-black/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 border-b border-black/10 px-4 py-6 shadow-xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-black/10 flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <a href={RESUME_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="text-[#515154] hover:text-[#1D1D1F] p-2">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href={RESUME_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#515154] hover:text-[#1D1D1F] p-2">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href={`mailto:${RESUME_DATA.personal.email}`} className="text-[#515154] hover:text-[#1D1D1F] p-2">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDownloadResume();
                }}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0071E3] rounded-full"
              >
                <FileText className="w-4 h-4" /> Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
