import React from 'react';
import { LuGraduationCap, LuCalendar, LuAward, LuMapPin } from 'react-icons/lu';

export default function EducationCard({ education }) {
  const isCurrent = education.status === 'Current Education';

  return (
    <div
      className={`relative rounded-2xl bg-[#0d0f18]/90 border transition-all duration-300 p-6 sm:p-7 hover:-translate-y-1 ${
        isCurrent
          ? 'border-purple-500/40 bg-gradient-to-b from-[#121528] to-[#0d0f18] shadow-[0_8px_30px_rgba(139,92,246,0.12)]'
          : 'border-slate-800/90 hover:border-slate-700'
      }`}
    >
      {/* Top subtle highlight */}
      <div
        className={`absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent`}
      />

      {/* Header with status badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
            isCurrent
              ? 'bg-purple-950/60 text-purple-300 border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]'
              : 'bg-slate-900 text-slate-400 border-slate-800'
          }`}
        >
          {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />}
          {education.status}
        </span>

        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
          <LuCalendar className="w-3.5 h-3.5 text-purple-400" />
          <span>{education.duration}</span>
        </div>
      </div>

      {/* Institution & Icon */}
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
            isCurrent
              ? 'bg-purple-950/40 border-purple-500/40 text-purple-300'
              : 'bg-slate-900 border-slate-800 text-slate-400'
          }`}
        >
          <LuGraduationCap className="w-6 h-6" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-white tracking-tight">
            {education.institution}
          </h3>

          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="font-semibold text-purple-300">
              {education.degree}
            </span>
            {education.group && (
              <span className="text-slate-400">
                (Group: {education.group})
              </span>
            )}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1">
              <LuMapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{education.location}</span>
            </div>

            {education.grade && (
              <div className="flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-500/30">
                <LuAward className="w-3.5 h-3.5" />
                <span>Grade: {education.grade}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Academic Highlights */}
      {education.highlight && (
        <p className="mt-5 text-sm text-slate-400 leading-relaxed pt-4 border-t border-slate-800/80">
          {education.highlight}
        </p>
      )}
    </div>
  );
}
