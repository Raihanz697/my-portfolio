import React from 'react';
import { LuArrowDown, LuTerminal, LuSparkles } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const navOffset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial-glow bg-grid-pattern"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide bg-purple-950/50 text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.statusBadge}</span>
              <span className="text-purple-400">•</span>
              <span className="text-slate-400">{personalInfo.location}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
              .
            </h1>

            {/* Sub-headline Role */}
            <div className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-purple-400 font-mono">&gt;</span>
              <span>{personalInfo.role}</span>
            </div>

            {/* Short Introductory Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:shadow-[0_0_35px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Projects</span>
                <LuArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/50 shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>Get in Touch</span>
              </button>

              <a
                href={`https://github.com/${personalInfo.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3.5 rounded-xl text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/50 transition-all duration-300 group"
                aria-label="Visit Raihanur's GitHub Profile"
              >
                <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Quick Metrics / Focus Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 bg-[#0d0f1a] px-3 py-1.5 rounded-lg border border-slate-800">
                <span className="text-purple-400">Stack:</span>
                <span className="text-slate-300">React • Next.js • Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0d0f1a] px-3 py-1.5 rounded-lg border border-slate-800">
                <span className="text-blue-400">Education:</span>
                <span className="text-slate-300">Leading University (CSE)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code Window Decorative Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-[#0c0e18]/95 border border-purple-500/30 p-5 shadow-[0_15px_45px_rgba(0,0,0,0.8),0_0_25px_rgba(139,92,246,0.15)] relative overflow-hidden group">
              {/* Top ambient highlight */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />

              {/* Terminal Window Top Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <LuTerminal className="w-3.5 h-3.5 text-purple-400" />
                  <span>developer.config.ts</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">utf-8</span>
              </div>

              {/* Syntax Highlighted Code Mockup */}
              <pre className="text-xs font-mono leading-relaxed text-slate-300 overflow-x-auto">
                <code>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">developer</span> = &#123;{'\n'}
                  {'  '}name: <span className="text-emerald-300">'{personalInfo.name}'</span>,{'\n'}
                  {'  '}status: <span className="text-emerald-300">'Student &amp; Learner'</span>,{'\n'}
                  {'  '}university: <span className="text-emerald-300">'Leading University'</span>,{'\n'}
                  {'  '}degree: <span className="text-emerald-300">'CSE (Expected 2028)'</span>,{'\n'}
                  {'  '}currentFocus: [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Tailwind v4'</span>, <span className="text-emerald-300">'Next.js'</span>],{'\n'}
                  {'  '}mindset: <span className="text-amber-300">'Curious, Consistent, Pragmatic'</span>,{'\n'}
                  {'  '}readyToCollaborate: <span className="text-purple-400">true</span>{'\n'}
                  &#125;;{'\n\n'}
                  <span className="text-slate-500">// Actively building projects</span>{'\n'}
                  <span className="text-purple-400">export default</span> developer;
                </code>
              </pre>

              {/* Terminal Status Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <LuSparkles className="w-3.5 h-3.5" />
                  <span>Ready to build</span>
                </span>
                <span className="text-purple-300">v1.0.0</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
