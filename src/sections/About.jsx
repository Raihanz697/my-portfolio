import React from 'react';
import { LuCompass, LuCode, LuRocket, LuGraduationCap } from 'react-icons/lu';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';

const pointIcons = [LuCompass, LuCode, LuRocket];

export default function About() {
  return (
    <section id="about" className="py-20 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Curious Developer,"
          highlight="Lifelong Learner"
          subtitle="My journey in software engineering focuses on building real projects, understanding core concepts, and leveling up each day."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Journey Summary Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-[#0d0f18]/90 border border-slate-800/90 p-6 sm:p-8 space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>The Learning Journey</span>
                <span className="text-purple-400 font-mono text-sm">#mindset</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {personalInfo.aboutSummary}
              </p>

              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                I believe the most effective way to learn software development is through deliberate practice: creating real applications, reading documentation, and understanding how modern frontend libraries seamlessly connect with backend APIs.
              </p>

              {/* Verified academic context callout */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3 text-sm text-slate-300">
                <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 shrink-0">
                  <LuGraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-white">Undergraduate Student</span> at Leading University, Computer Science &amp; Engineering.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Core Pillars / Highlights */}
          <div className="lg:col-span-5 space-y-4">
            {personalInfo.aboutPoints.map((point, index) => {
              const IconComp = pointIcons[index % pointIcons.length] || LuCode2;
              return (
                <div
                  key={index}
                  className="group rounded-2xl bg-[#0d0f18]/90 border border-slate-800/90 p-5 hover:border-purple-500/40 hover:bg-[#121524] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                        {point.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
