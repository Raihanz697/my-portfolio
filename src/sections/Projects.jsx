import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return project.featured;
    return true;
  });

  return (
    <section id="projects" className="py-20 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio Work"
          title="Featured &"
          highlight="Recent Projects"
          subtitle="Real projects built with React, Next.js, and modern CSS frameworks, verified directly from public GitHub repositories."
          align="center"
        />

        {/* Filter Controls */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              filter === 'All'
                ? 'text-white bg-purple-600/90 border border-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.35)]'
                : 'text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800'
            }`}
            aria-pressed={filter === 'All'}
          >
            All Repositories ({projectsData.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('Featured')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              filter === 'Featured'
                ? 'text-white bg-purple-600/90 border border-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.35)]'
                : 'text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800'
            }`}
            aria-pressed={filter === 'Featured'}
          >
            Featured Highlights
          </button>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-2xl bg-[#0d0f18] border border-slate-800 p-8">
            <p className="text-slate-400 text-sm">
              No projects found matching the filter. New projects are continually pushed to GitHub!
            </p>
          </div>
        )}

        {/* Repository Verification Callout */}
        <div className="mt-12 text-center text-xs font-mono text-slate-500">
          <span>All repositories belong to GitHub user </span>
          <a
            href="https://github.com/Raihanz697"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
          >
            @Raihanz697
          </a>
          <span> • Source code verified &amp; publicly inspectable</span>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
