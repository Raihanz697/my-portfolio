import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { socialLinks } from '../data/portfolioData';

const iconMap = {
  FaGithub: FaGithub
};

export default function SocialLinks({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((link) => {
        const IconComponent = iconMap[link.icon] || FaGithub;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel || `Visit ${link.name}`}
            className={`group inline-flex items-center justify-center rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/30 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(139,92,246,0.25)] ${sizeClasses[size] || sizeClasses.md}`}
          >
            <IconComponent className="transition-transform duration-300 group-hover:scale-110" />
          </a>
        );
      })}
    </div>
  );
}
