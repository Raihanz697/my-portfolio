import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink, HiInformationCircle } from 'react-icons/hi';
import { LuFolderGit2 } from 'react-icons/lu';

export default function ProjectCard({ project, onOpenDetails }) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl bg-[#0d0f18]/90 border border-slate-800/90 p-6 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#121524] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(139,92,246,0.14)]">
      {/* Top subtle highlight gradient */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent group-hover:via-purple-500/60 transition-all duration-500" />

      <div>
        {/* Terminal / Code Window Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] font-mono text-slate-500">
              repo/{project.id}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-purple-950/60 text-purple-300 border border-purple-500/30">
                Featured
              </span>
            )}
            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-800">
              {project.status || 'Verified'}
            </span>
          </div>
        </div>

        {/* Project Header & Title */}
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-purple-950/30 border border-purple-500/20 text-purple-400 group-hover:scale-105 transition-transform">
            <LuFolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-3">
              {project.shortDescription || project.description}
            </p>
          </div>
        </div>

        {/* Technology Badges */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#090b12] border border-slate-800/90 text-slate-300 group-hover:border-slate-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Links */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
        {/* Learn More Details Button */}
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-purple-300 transition-colors focus:outline-none"
          aria-label={`View detailed information about ${project.title}`}
        >
          <HiInformationCircle className="w-4 h-4 text-purple-400" />
          <span>Details</span>
        </button>

        <div className="flex items-center gap-2">
          {/* GitHub Repo Link */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/40 transition-all duration-200"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          )}

          {/* Live Demo Link (only if verified) */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.25)]"
              aria-label={`Open live preview for ${project.title}`}
            >
              <HiExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
