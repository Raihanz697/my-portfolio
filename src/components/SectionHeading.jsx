import React from 'react';

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  id
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-purple-950/40 text-purple-300 border border-purple-500/30 mb-3 shadow-[0_0_12px_rgba(139,92,246,0.15)] ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
          {badge}
        </div>
      )}

      <h2
        id={id}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
      >
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      <div className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
}
