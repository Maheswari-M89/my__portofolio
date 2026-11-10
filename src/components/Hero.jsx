import React from 'react';
import { ArrowDown, Cpu, Sparkles, BookOpen, Layers, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden circuit-grid"
    >
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-plum-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-lavender-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Decorative circuit line accents (subtle SVG traces) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,200 L 250,200 L 320,270 L 600,270" fill="none" stroke="#e5b854" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="600" cy="270" r="3" fill="#e5b854" />
        <path d="M 800,100 L 950,100 L 1020,170 L 1400,170" fill="none" stroke="#b8a4d9" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="1020" cy="170" r="3" fill="#b8a4d9" />
        <path d="M 150,600 L 350,600 L 420,530 L 700,530" fill="none" stroke="#e5b854" strokeWidth="1" strokeDasharray="8 8" />
      </svg>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-subtle border border-gold-400/30 text-gold-300 mb-6 text-xs sm:text-sm font-medium tracking-wide shadow-sm animate-pulse-subtle">
          <span className="w-2 h-2 rounded-full bg-gold-400"></span>
          <span>{personalInfo.role}</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-100 mb-6 leading-[1.15]">
          Curious Mind, <br />
          <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500 bg-clip-text text-transparent">
            Engineering Heart.
          </span>
        </h1>

        {/* Short Authentic Introduction */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10">
          Hi, I'm <span className="font-semibold text-slate-100 underline decoration-gold-400/40 underline-offset-4">{personalInfo.name}</span> — an Electronics and Communication Engineering student exploring the connection between hardware, software, and intelligent technology.
        </p>

        {/* Quick Context Highlights Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-400 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-plum-900/80 border border-plum-700/60">
            <Cpu className="w-3.5 h-3.5 text-gold-400" />
            <span>2nd-Year ECE @ KSIT</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-plum-900/80 border border-plum-700/60">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span>2nd Rank in 1st Year</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-plum-900/80 border border-plum-700/60">
            <Sparkles className="w-3.5 h-3.5 text-lavender-400" />
            <span>Parivarthana Hackathon 3rd Place</span>
          </span>
        </div>

        {/* Two Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#journey"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-plum-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:brightness-110 shadow-lg shadow-gold-500/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore My Journey</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-slate-200 glass-panel hover:bg-plum-800/80 hover:text-gold-300 border border-gold-400/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Layers className="w-4 h-4 text-gold-400" />
            <span>View My Projects</span>
          </a>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-slate-500/50 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-gold-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

