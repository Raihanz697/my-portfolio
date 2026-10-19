import React, { useState, useEffect } from 'react';
import { LuFileDown, LuEye, LuCircleCheck, LuInfo } from 'react-icons/lu';
import SectionHeading from './SectionHeading';
import { resumeData } from '../data/portfolioData';

export default function ResumeSection() {
  const [resumeAvailable, setResumeAvailable] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  // Check if resume.pdf actually exists in public folder
  useEffect(() => {
    fetch(resumeData.filePath, { method: 'HEAD' })
      .then((res) => {
        // If content-type is pdf or status is 200 (not html 404 fallback)
        if (res.ok && res.headers.get('content-type')?.includes('pdf')) {
          setResumeAvailable(true);
        } else {
          setResumeAvailable(false);
        }
      })
      .catch(() => {
        setResumeAvailable(false);
      });
  }, []);

  const handleActionClick = (e, actionType) => {
    if (!resumeAvailable) {
      e.preventDefault();
      setShowNotice(true);
    }
  };

  return (
    <section id="resume" className="py-20 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Resume &"
          highlight="Credentials"
          subtitle={resumeData.description}
          align="center"
        />

        <div className="relative rounded-3xl bg-gradient-to-b from-[#121528] to-[#0c0e18] border border-purple-500/30 p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Highlights overview */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-950/40 text-purple-300 border border-purple-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Verified Candidate Profile
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Academic & Technical Summary
              </h3>

              <ul className="space-y-3 pt-2 text-sm sm:text-base text-slate-300">
                {resumeData.summaryPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <LuCircleCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#090b12]/90 border border-slate-800 text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <LuFileDown className="w-8 h-8" />
              </div>

              <h4 className="text-lg font-bold text-white mb-1">
                Developer Resume
              </h4>
              <p className="text-xs text-slate-400 mb-6">
                PDF format • Standard CV
              </p>

              <div className="w-full flex flex-col gap-3">
                {resumeAvailable ? (
                  <>
                    <a
                      href={resumeData.filePath}
                      download="Raihanur_Rahman_Resume.pdf"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300"
                    >
                      <LuFileDown className="w-4 h-4" />
                      <span>Download Resume</span>
                    </a>

                    <a
                      href={resumeData.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all duration-200"
                    >
                      <LuEye className="w-4 h-4" />
                      <span>View in Browser</span>
                    </a>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => handleActionClick(e, 'download')}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600/80 via-indigo-600/80 to-blue-600/80 hover:from-purple-500 hover:to-blue-500 shadow-[0_0_15px_rgba(124,58,237,0.25)] transition-all duration-300 cursor-pointer"
                  >
                    <LuFileDown className="w-4 h-4" />
                    <span>Download Resume (PDF)</span>
                  </button>
                )}
              </div>

              {/* Informative notice if PDF is not placed yet */}
              {showNotice && !resumeAvailable && (
                <div className="mt-4 p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-left text-xs text-slate-300 animate-fadeIn flex items-start gap-2">
                  <LuInfo className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-purple-300">Resume PDF Setup</p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      {resumeData.instructions} Once added, download and view buttons activate automatically.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
