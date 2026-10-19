import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCss3Alt } from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiVite
} from 'react-icons/si';
import { LuCode } from 'react-icons/lu';

const iconMap = {
  FaReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  FaCss3Alt,
  SiNextdotjs,
  FaNodeJs,
  SiExpress,
  SiMongodb,
  FaGitAlt,
  FaGithub,
  SiVite
};

const levelStyles = {
  Comfortable: {
    badge: 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30 shadow-[0_0_8px_rgba(16,185,129,0.15)]',
    indicator: 'bg-emerald-400'
  },
  Practicing: {
    badge: 'bg-purple-950/40 text-purple-300 border-purple-500/30 shadow-[0_0_8px_rgba(168,85,247,0.15)]',
    indicator: 'bg-purple-400'
  },
  Familiar: {
    badge: 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30 shadow-[0_0_8px_rgba(6,182,212,0.15)]',
    indicator: 'bg-cyan-400'
  },
  Learning: {
    badge: 'bg-amber-950/40 text-amber-300 border-amber-500/30 shadow-[0_0_8px_rgba(245,158,11,0.15)]',
    indicator: 'bg-amber-400'
  }
};

export default function SkillCard({ skill }) {
  const IconComponent = iconMap[skill.icon] || LuCode;
  const levelStyle = levelStyles[skill.level] || levelStyles.Learning;

  return (
    <div className="group relative rounded-2xl bg-[#0d0f18]/90 border border-slate-800/90 p-5 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#121524] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)]">
      {/* Top subtle highlight gradient */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent group-hover:via-purple-500/50 transition-all duration-500" />

      <div className="flex items-start justify-between gap-4 mb-4">
        {/* Icon with glowing backdrop */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-900/90 border border-slate-800 transition-transform duration-300 group-hover:scale-105 group-hover:border-purple-500/30"
          style={{
            boxShadow: `0 0 16px ${skill.accentColor}15`
          }}
        >
          <IconComponent
            className="text-2xl transition-transform duration-300 group-hover:rotate-6"
            style={{ color: skill.accentColor }}
          />
        </div>

        {/* Honest proficiency badge */}
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${levelStyle.badge}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${levelStyle.indicator}`} />
          {skill.level}
        </div>
      </div>

      {/* Skill Name */}
      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
        {skill.description}
      </p>

      {/* Category Tag */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>Category</span>
        <span className="text-slate-400">{skill.category}</span>
      </div>
    </div>
  );
}
