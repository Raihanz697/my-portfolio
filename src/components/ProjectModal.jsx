import React, { useEffect } from 'react';
import { HiX, HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Handle ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#0e111c] border border-purple-500/30 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(139,92,246,0.15)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top decorative gradient line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Close project modal"
        >
          <HiX className="w-5 h-5" />
        </button>

        {/* Status & Featured Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-950/60 text-purple-300 border border-purple-500/40">
            {project.status || 'Verified Project'}
          </span>
          {project.featured && (
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-950/60 text-blue-300 border border-blue-500/40">
              Featured Build
            </span>
          )}
        </div>

        {/* Modal Title */}
        <h3
          id="modal-project-title"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
        >
          {project.title}
        </h3>

        {/* Full Description */}
        <div className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base space-y-3">
          <p>{project.description}</p>
        </div>

        {/* Technologies List */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-purple-500/50 transition-all duration-200 shadow-sm"
            >
              <FaGithub className="w-4 h-4" />
              <span>View Repository</span>
            </a>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
            >
              <HiExternalLink className="w-4 h-4" />
              <span>Live Preview</span>
            </a>
          ) : (
            <div className="text-xs text-slate-400 font-mono italic">
              Verified GitHub source code available. Live demo link can be configured in portfolioData.js when hosted.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
