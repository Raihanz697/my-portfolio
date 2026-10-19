import React from 'react';
import SectionHeading from '../components/SectionHeading';
import EducationCard from '../components/EducationCard';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education &"
          highlight="Qualifications"
          subtitle="My academic foundation in computer science and higher secondary science education in Sylhet, Bangladesh."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {educationData.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
