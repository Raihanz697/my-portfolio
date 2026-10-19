import React, { useState, useEffect } from 'react';
import { LuArrowUp } from 'react-icons/lu';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/40 text-purple-200 hover:text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
      aria-label="Scroll back to top"
    >
      <LuArrowUp className="w-5 h-5" />
    </button>
  );
}
