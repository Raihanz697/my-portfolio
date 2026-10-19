import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { personalInfo, navigationLinks } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for navbar styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navigationLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    const target = document.getElementById(id);
    if (target) {
      const navOffset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090d]/90 backdrop-blur-md border-b border-slate-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.5)] py-3'
          : 'bg-[#08090d]/40 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label={`${personalInfo.name} - Back to top`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 p-[1.5px] shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0d0f1a] rounded-[10px] flex items-center justify-center font-mono font-bold text-white text-base">
                <span className="text-purple-400 group-hover:text-purple-300 transition-colors">R</span>
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors">R</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-400 font-mono tracking-wider">
                Aspiring Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-purple-950/40 border border-purple-500/30 shadow-[0_0_12px_rgba(139,92,246,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 focus:outline-none"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_0_12px_rgba(124,58,237,0.3)]"
            >
              Connect
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[65px] bg-[#08090d]/95 backdrop-blur-xl z-40 border-t border-slate-800 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'text-white bg-purple-950/50 border border-purple-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/80 border border-transparent'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                  )}
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-800/80">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="w-full flex items-center justify-center py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-md"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
