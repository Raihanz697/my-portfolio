import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative flex min-h-[100svh] flex-col justify-center py-24 scroll-mt-24"
    >      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Path"
          title="Experience &"
          highlight="Practical Journey"
          subtitle="An honest depiction of my professional status, active learning efforts, and preparation for developer roles."
          align="center"
        />

        <ExperienceCard experienceData={experienceData} />
      </div>
    </section>
  );
}
