import React from 'react';
import { LuSparkles, LuCode, LuLayers, LuBinary } from 'react-icons/lu';

const highlightIcons = [LuCode, LuBinary, LuLayers];

export default function ExperienceCard({ experienceData }) {
  const { hasProfessionalExperience, statusMessage, learningHighlights = [], items = [] } = experienceData;

  if (hasProfessionalExperience && items.length > 0) {
    return (
      <div className="space-y-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-[#0d0f18]/90 border border-slate-800 p-6 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-white">{item.role}</h3>
              <span className="text-xs font-mono text-purple-400 bg-purple-950/40 border border-purple-500/30 px-3 py-1 rounded-full">
                {item.duration}
              </span>
            </div>
            <p className="text-sm font-medium text-slate-300">{item.company}</p>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-[#0d0f18]/90 border border-slate-800/90 p-6 sm:p-8 relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
      {/* Top subtle highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      {/* Honest Status Banner */}
      <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-purple-200">
        <div className="p-2 rounded-lg bg-purple-900/40 border border-purple-500/30 shrink-0 text-purple-300">
          <LuSparkles className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Current Experience Status</h3>
          <p className="mt-1 text-sm text-slate-300 leading-relaxed">
            {statusMessage}
          </p>
        </div>
      </div>

      {/* Current Active Learning Pillars */}
      <div className="mt-8">
        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
          Core Focus Areas & Current Activities
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {learningHighlights.map((highlight, index) => {
            const IconComp = highlightIcons[index % highlightIcons.length] || LuCode;
            return (
              <div
                key={index}
                className="group rounded-xl bg-[#0a0c14] border border-slate-800/80 p-5 hover:border-purple-500/30 hover:bg-[#101322] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-purple-400 border border-slate-800 group-hover:scale-105 group-hover:border-purple-500/30 transition-all">
                  <IconComp className="w-4 h-4" />
                </div>
                <h5 className="mt-3 text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {highlight.title}
                </h5>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Note for recruiters */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
        <span>Ready for junior developer & internship opportunities</span>
        <span className="text-purple-400">Sylhet, Bangladesh</span>
      </div>
    </div>
  );
}
