import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillsData, skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = skillsData.filter((skill) => {
    if (selectedCategory === 'All') return true;
    return skill.category === selectedCategory;
  });

  return (
    <section id="skills" className="py-20 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Skills &"
          highlight="Proficiencies"
          subtitle="A transparent overview of technologies I actively use, practice, and learn for modern web development."
          align="center"
        />

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {skillsCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white bg-purple-600/90 border border-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.35)]'
                    : 'text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800'
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 rounded-2xl bg-[#0d0f18] border border-slate-800 p-8">
            <p className="text-slate-400 text-sm">
              No skills listed in the "{selectedCategory}" category yet. Check back soon!
            </p>
          </div>
        )}

        {/* Legend for Honest Proficiency Scale */}
        <div className="mt-12 p-4 rounded-xl bg-[#0a0c14] border border-slate-800/80 max-w-2xl mx-auto text-center">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
            Proficiency Legend
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Comfortable: Core confidence</span>
            </div>
            <div className="flex items-center gap-1.5 text-purple-400">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>Practicing: Actively coding</span>
            </div>
            <div className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Familiar: Working knowledge</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Learning: Expanding skills</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
