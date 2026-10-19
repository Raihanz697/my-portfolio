import React from 'react';
import { LuArrowUp } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#06070a] border-t border-slate-800/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-bold text-white text-lg">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>{personalInfo.name}</span>
            </div>
            <p className="mt-1 text-xs text-slate-400 font-mono">
              Aspiring Full-Stack Developer • Sylhet, Bangladesh
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={`https://github.com/${personalInfo.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/40 transition-all duration-200"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-purple-500/40 transition-all duration-200 focus:outline-none"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <LuArrowUp className="w-3.5 h-3.5 text-purple-400" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Year */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-slate-500">
            Designed & built with React, Vite & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
