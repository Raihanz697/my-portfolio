import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 flex flex-col selection:bg-purple-500/30 selection:text-purple-200">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content Sections in Required Sequential Order */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Projects */}
        <Projects />

        {/* 5. Experience */}
        <Experience />

        {/* 6. Education */}
        <Education />

        {/* 7. Resume */}
        <ResumeSection />

        {/* 8. Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}
