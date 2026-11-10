import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-plum-800/80 bg-plum-950 relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-amber-600 p-[1.5px]">
            <div className="w-full h-full rounded-full bg-plum-950 flex items-center justify-center">
              <span className="font-serif text-sm font-bold text-gold-300">
                {personalInfo.initials}
              </span>
            </div>
          </div>
          <div>
            <span className="block text-sm font-semibold text-slate-200">
              {personalInfo.name}
            </span>
            <span className="block text-[11px] text-slate-400 font-mono">
              2nd-Year ECE • KSIT, Bengaluru
            </span>
          </div>
        </div>

        {/* Narrative / Credit */}
        <div className="text-xs text-slate-400 space-y-1">
          <p className="text-slate-300">
            Designed and built by {personalInfo.name} • An engineering journey in progress.
          </p>
          <p className="text-[11px] text-slate-500 font-mono">
            © 2026 {personalInfo.name}
          </p>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full glass-panel hover:bg-plum-800 text-slate-300 hover:text-gold-300 border border-plum-700 hover:border-gold-400/40 transition-all"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}

