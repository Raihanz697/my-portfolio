import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { LuMail, LuCopy, LuCheck, LuMapPin, LuSend, LuSparkles } from 'react-icons/lu';
import SectionHeading from './SectionHeading';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formFeedback, setFormFeedback] = useState('');

  const hasEmail = Boolean(personalInfo.email && personalInfo.email.trim().length > 0 && personalInfo.email.includes('@'));

  const handleCopyEmail = () => {
    if (!hasEmail) return;
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (hasEmail) {
      // Trigger native email client with prefilled details
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      setFormFeedback('Opening your email client to dispatch the message...');
    } else {
      setFormFeedback('Direct email address is currently being configured. Please connect with Raihanur directly on GitHub below!');
    }
  };

  return (
    <section id="contact" className="py-20 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Let's"
          highlight="Connect & Collaborate"
          subtitle="I'm actively seeking opportunities to learn, contribute to real-world projects, or collaborate on exciting software development."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Social Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0d0f18]/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Connect Directly</span>
                  <LuSparkles className="w-4 h-4 text-purple-400" />
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Whether you have an internship position, an entry-level developer opportunity, a collaborative idea, or just want to chat about web technology, feel free to reach out.
                </p>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <LuMapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500">Location</div>
                  <div className="text-sm font-semibold text-slate-200">{personalInfo.location}</div>
                </div>
              </div>

              {/* Verified Email Card (or Setup Instruction) */}
              {hasEmail ? (
                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
                      <LuMail className="w-4 h-4" />
                      <span>Verified Email</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-purple-900/40 text-purple-200 hover:bg-purple-900/70 border border-purple-500/40 transition-colors"
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <>
                          <LuCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <LuCopy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="block text-sm sm:text-base font-semibold text-white hover:text-purple-300 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                    <LuMail className="w-4 h-4" />
                    <span>Direct Inquiries</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Direct email contact can be easily enabled by updating the <code className="text-purple-300 bg-slate-950 px-1 py-0.5 rounded">email</code> field in <code className="text-slate-300">portfolioData.js</code>.
                  </p>
                </div>
              )}

              {/* GitHub Link */}
              <div className="pt-2">
                <a
                  href={`https://github.com/${personalInfo.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 group"
                  aria-label="Open GitHub profile"
                >
                  <div className="flex items-center gap-3">
                    <FaGithub className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-mono text-slate-500">GitHub Profile</div>
                      <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        github.com/{personalInfo.githubUsername}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-purple-400 group-hover:translate-x-1 transition-transform">
                    Visit →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (Client-Side mailto / transparent feedback) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0d0f18]/90 border border-slate-800 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to initiate direct communication.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Recruiter / Collaborator Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-sm focus:border-purple-500 focus:bg-[#121526] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-sm focus:border-purple-500 focus:bg-[#121526] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Raihanur, I came across your portfolio and wanted to discuss..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-sm focus:border-purple-500 focus:bg-[#121526] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300"
                >
                  <LuSend className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                {formFeedback && (
                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200 mt-3 animate-fadeIn">
                    {formFeedback}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
